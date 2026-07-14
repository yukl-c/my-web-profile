#!/usr/bin/env node
/**
 * stop — write a session-end audit line. Does not auto-continue the agent.
 */
import { appendFileSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

let input = {};
try {
  input = JSON.parse(readFileSync(0, "utf8") || "{}");
} catch {
  input = {};
}

const logDir = path.join(process.cwd(), ".cursor", "hooks", "logs");
const logFile = path.join(logDir, "sessions.jsonl");

mkdirSync(logDir, { recursive: true });

const entry = {
  ts: new Date().toISOString(),
  event: "stop",
  status: input.status ?? "unknown",
  loop_count: input.loop_count ?? 0,
};

appendFileSync(logFile, `${JSON.stringify(entry)}\n`, "utf8");

// Empty object — no followup_message (avoids auto-looping the agent)
process.stdout.write("{}");
process.exit(0);
