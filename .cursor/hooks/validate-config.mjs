#!/usr/bin/env node
/**
 * Debug validator — mirrors Cursor's loop_limit rule for stop/subagentStop hooks.
 */
import { readFileSync, appendFileSync } from "node:fs";
import path from "node:path";

const LOG_PATH = path.join(process.cwd(), "debug-26707b.log");
const SESSION = "26707b";

function debugLog(hypothesisId, location, message, data, runId = "pre-fix") {
  const entry = {
    sessionId: SESSION,
    runId,
    hypothesisId,
    location,
    message,
    data,
    timestamp: Date.now(),
  };
  // #region agent log
  appendFileSync(LOG_PATH, `${JSON.stringify(entry)}\n`, "utf8");
  fetch("http://127.0.0.1:7760/ingest/60872e40-b7b3-4f2f-b88a-c474e009e50d", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": SESSION },
    body: JSON.stringify(entry),
  }).catch(() => {});
  // #endregion
}

const configPath = path.join(process.cwd(), ".cursor", "hooks.json");
const raw = readFileSync(configPath, "utf8");
const config = JSON.parse(raw);

const errors = [];

// H1: stop[0].loop_limit === 0 is rejected (must be positive int or null)
const stopHooks = config.hooks?.stop ?? [];
stopHooks.forEach((hook, index) => {
  const loopLimit = hook.loop_limit;
  debugLog("H1", "validate-config.mjs:stop-loop", "stop hook loop_limit value", {
    index,
    loop_limit: loopLimit,
    type: typeof loopLimit,
    isZero: loopLimit === 0,
    isPositiveInt: Number.isInteger(loopLimit) && loopLimit > 0,
    isNull: loopLimit === null,
    isUndefined: loopLimit === undefined,
  });

  if (loopLimit !== undefined && loopLimit !== null) {
    if (!Number.isInteger(loopLimit) || loopLimit <= 0) {
      errors.push({
        path: `stop[${index}]`,
        loop_limit: loopLimit,
        rule: "loop_limit must be a positive integer (use null for no limit)",
      });
    }
  }
});

// H2: other events should not carry loop_limit
for (const [event, hooks] of Object.entries(config.hooks ?? {})) {
  if (event === "stop" || event === "subagentStop") continue;
  (hooks ?? []).forEach((hook, index) => {
    if (hook.loop_limit !== undefined) {
      debugLog("H2", "validate-config.mjs:other-events", "unexpected loop_limit on non-stop event", {
        event,
        index,
        loop_limit: hook.loop_limit,
      });
    }
  });
}

// H3: JSON structure / version
debugLog("H3", "validate-config.mjs:structure", "config structure", {
  version: config.version,
  hookEvents: Object.keys(config.hooks ?? {}),
  stopCount: stopHooks.length,
});

// H4: stop[1].loop_limit === 1 should be valid
if (stopHooks[1]) {
  const ll = stopHooks[1].loop_limit;
  debugLog("H4", "validate-config.mjs:stop1", "stop[1] loop_limit validity", {
    loop_limit: ll,
    valid: ll === undefined || ll === null || (Number.isInteger(ll) && ll > 0),
  });
}

debugLog("H5", "validate-config.mjs:result", "validation result", {
  errorCount: errors.length,
  errors,
});

if (errors.length > 0) {
  console.error("INVALID hooks.json:");
  for (const e of errors) {
    console.error(`  ${e.path}: ${e.rule} (got ${JSON.stringify(e.loop_limit)})`);
  }
  process.exit(1);
}

console.log("hooks.json passes loop_limit validation");
process.exit(0);
