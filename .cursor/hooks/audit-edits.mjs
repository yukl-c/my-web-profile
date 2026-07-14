#!/usr/bin/env node
/**
 * afterFileEdit — append a lightweight audit trail of agent edits.
 */
import { appendFileSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

let input = {};
try {
  input = JSON.parse(readFileSync(0, "utf8") || "{}");
} catch {
  input = {};
}

const filePath = input.file_path ?? "(unknown)";
const editCount = Array.isArray(input.edits) ? input.edits.length : 0;
const logDir = path.join(process.cwd(), ".cursor", "hooks", "logs");
const logFile = path.join(logDir, "edits.jsonl");

mkdirSync(logDir, { recursive: true });

const entry = {
  ts: new Date().toISOString(),
  event: "afterFileEdit",
  file_path: filePath,
  edit_count: editCount,
};

appendFileSync(logFile, `${JSON.stringify(entry)}\n`, "utf8");
process.exit(0);
