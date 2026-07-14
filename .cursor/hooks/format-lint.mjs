#!/usr/bin/env node
/**
 * afterFileEdit — run ESLint --fix on the edited file (lint + autofix format).
 * Fast path: only touches the single file Cursor just wrote.
 */
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";

const LINTABLE = /\.(?:[cm]?[jt]sx?|mjs|cjs)$/i;

function readStdin() {
  try {
    return JSON.parse(readFileSync(0, "utf8") || "{}");
  } catch {
    return {};
  }
}

const input = readStdin();
const filePath = input.file_path;

if (!filePath || !LINTABLE.test(filePath)) {
  process.exit(0);
}

// Skip generated / dependency paths
const normalized = filePath.replace(/\\/g, "/");
if (
  normalized.includes("/node_modules/") ||
  normalized.includes("/.next/") ||
  normalized.includes("/.cursor/hooks/logs/")
) {
  process.exit(0);
}

const result = spawnSync(
  "npx",
  ["eslint", "--fix", "--no-warn-ignored", filePath],
  {
    cwd: process.cwd(),
    encoding: "utf8",
    shell: true,
    timeout: 25_000,
  },
);

if (result.error) {
  console.error(`[format-lint] ${result.error.message}`);
  process.exit(0); // fail open — don't block the agent
}

if (result.status !== 0 && result.stderr) {
  console.error(`[format-lint] ${path.basename(filePath)}: ${result.stderr.trim()}`);
}

process.exit(0);
