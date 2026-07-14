#!/usr/bin/env node
/**
 * beforeShellExecution — deny destructive / exfiltrating shell commands.
 * failClosed is set in hooks.json so crashes also block.
 */
import { readFileSync } from "node:fs";

function deny(userMessage, agentMessage) {
  process.stdout.write(
    JSON.stringify({
      permission: "deny",
      user_message: userMessage,
      agent_message: agentMessage,
    }),
  );
  process.exit(0);
}

function ask(userMessage, agentMessage) {
  process.stdout.write(
    JSON.stringify({
      permission: "ask",
      user_message: userMessage,
      agent_message: agentMessage,
    }),
  );
  process.exit(0);
}

function allow() {
  process.stdout.write(JSON.stringify({ permission: "allow" }));
  process.exit(0);
}

let input = {};
try {
  input = JSON.parse(readFileSync(0, "utf8") || "{}");
} catch {
  deny(
    "Shell hook could not parse its input.",
    "beforeShellExecution received invalid JSON; command blocked.",
  );
}

const command = String(input.command ?? "");
const lower = command.toLowerCase();

/** Patterns that should always be blocked */
const DENY_PATTERNS = [
  { re: /curl\s+[^\n|]*\|\s*(ba)?sh/i, reason: "pipe remote script into shell" },
  { re: /wget\s+[^\n|]*\|\s*(ba)?sh/i, reason: "pipe remote script into shell" },
  { re: /irm\s+.+\|\s*iex/i, reason: "PowerShell remote script execution" },
  { re: /invoke-restmethod\s+.+\|\s*invoke-expression/i, reason: "PowerShell remote script execution" },
  { re: /git\s+push\s+[^\n]*--force/i, reason: "force push" },
  { re: /git\s+push\s+[^\n]*-f\b/i, reason: "force push" },
  { re: /git\s+reset\s+--hard/i, reason: "hard reset" },
  { re: /git\s+clean\s+[^\n]*-[a-z]*f/i, reason: "git clean force" },
  { re: /rm\s+(-[a-zA-Z]*f[a-zA-Z]*\s+)*\/\s*$/i, reason: "recursive delete of /" },
  { re: /rm\s+-[a-zA-Z]*r[a-zA-Z]*f[a-zA-Z]*\s+\/(?!\w)/i, reason: "rm -rf /" },
  { re: /remove-item\s+[^\n]*-recurse[^\n]*-force[^\n]*\\/i, reason: "recursive force delete" },
  { re: /mkfs\./i, reason: "filesystem format" },
  { re: /\bdd\s+if=/i, reason: "raw disk write" },
  { re: /:\(\)\s*\{\s*:\|:&\s*\};:/, reason: "fork bomb" },
];

for (const { re, reason } of DENY_PATTERNS) {
  if (re.test(command)) {
    deny(
      `Blocked risky shell command (${reason}).`,
      `Hook denied this command because it matched a dangerous pattern (${reason}): ${command}`,
    );
  }
}

/** Patterns that need explicit user approval */
const ASK_PATTERNS = [
  { re: /\bcurl\b|\bwget\b|\bInvoke-WebRequest\b/i, reason: "network download" },
  { re: /\.env\b/i, reason: "touches env/secrets files" },
  { re: /\bchmod\s+-R\s+777\b/i, reason: "world-writable permissions" },
  { re: /\bsudo\b/i, reason: "elevated privileges" },
];

for (const { re, reason } of ASK_PATTERNS) {
  if (re.test(command) || re.test(lower)) {
    ask(
      `Review this shell command (${reason}) before it runs.`,
      `Hook flagged this command for user review (${reason}): ${command}`,
    );
  }
}

allow();
