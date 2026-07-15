---
name: suggesting-cursor-hooks
description: When the user keeps asking for the same check to run (lint, tests, type-check), suggest a Cursor hook to automate it. Use in this project after repeated CI validation requests.
user-invocable: false
---

# Suggesting Cursor Hooks

Watch for repeated manual requests. When the user keeps asking you to run the same command after changes, suggest a hook to automate it.

## Triggers

Suggest a hook when you notice:

- The user asks you to **run the same check 2+ times** (e.g. "run lint", "run tests", "check types")
- The user says "always run X after editing" or "make sure to test after changes"
- You keep forgetting to run a validation step and the user catches it
- A CI failure could have been caught locally with a post-edit check

## How to suggest

```
You've asked me to run [command] after edits a few times. Want me to
set up a Cursor hook so it runs automatically?
```

If they say yes, read the **create-hook** skill and create `.cursor/hooks.json` plus the script.

## Common hooks for this project

| User keeps asking... | Hook |
|---------------------|------|
| "run lint" / "fix formatting" | `afterFileEdit` → `npm run lint` on `**/*.{ts,tsx}` |
| "check types" | `afterFileEdit` → `npx tsc --noEmit` on `.ts`/`.tsx` |
| "run tests" | `afterFileEdit` → `npm run test` on related `*.test.ts(x)` |
| "make sure CI passes" | `stop` → run `ci-validate-and-fix` workflow |
| "sync profile content" | `afterFileEdit` on `profile.local.ts` → `node scripts/sync-profile-content.mjs` |

## Rules

- Only suggest after a real repeated pattern, not preemptively
- Hook scripts must be fast (under 5 seconds) or the agent feels slow
- Scripts should exit 0 and report via stdout — don't block unless the user wants that
- Check for existing `.cursor/hooks.json` first — merge, don't overwrite
- Keep it casual — "want me to automate this?" not a formal proposal
