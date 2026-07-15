---
name: ci-validate-and-fix
description: Runs the same lint, typecheck, test, and build steps as GitHub Actions CI after code changes, fixes failures, and re-runs until green. Use after implementing features, fixing bugs, or refactoring when the user wants CI-ready code.
user-invocable: true
disable-model-invocation: true
---

# CI Validate and Fix

Run the **same steps as** [`.github/workflows/ci.yml`](../../../.github/workflows/ci.yml) after finishing an implementation. Fix failures before considering the task done.

## When to use

- After writing or editing application code
- Before committing, opening a PR, or handing work back to the user
- When the user asks to match CI standards or "make CI pass"

## Workflow

Copy this checklist and track progress:

```
CI validation:
- [ ] Step 1: Sync profile content
- [ ] Step 2: Lint (ESLint)
- [ ] Step 3: Type check (tsc)
- [ ] Step 4: Tests (Vitest)
- [ ] Step 5: Build (Next.js)
```

Run steps **in order**. Stop at the first failing step, fix it, then **restart from Step 1** (sync can change generated files that affect later steps).

### Step 1 — Sync profile content

```bash
node scripts/sync-profile-content.mjs
```

If this rewrites files, include those changes in the fix.

### Step 2 — Lint

```bash
npm run lint
```

Config: `eslint.config.mjs` (Next.js core-web-vitals + TypeScript).

Common fixes:
- Unused imports/variables — remove or use them
- Missing hook deps — add deps or justify with an eslint-disable comment only when truly intentional
- `any` types — replace with proper types from existing project patterns
- Prefer fixing root cause over blanket disables

### Step 3 — Type check

```bash
npx tsc --noEmit
```

Common fixes:
- Missing or wrong props — align with interfaces in the changed files
- `null` / `undefined` — narrow types or add guards
- Import path errors — use `@/*` alias per `tsconfig.json`

### Step 4 — Tests

```bash
npm run test
```

Test files: `**/*.test.ts`, `**/*.test.tsx` (Vitest, `vitest.config.ts`).

Common fixes:
- Update assertions when behavior intentionally changed
- Add tests when new logic has no coverage and CI would fail
- Mock external services (e.g. Supabase) the same way existing tests do

### Step 5 — Build

```bash
npm run build
```

Common fixes:
- Server vs Client Component boundaries — add `'use client'` only when needed
- Invalid `metadata` or route exports in `app/`
- Broken imports or missing env vars required at build time
- Profile content / image paths under `public/projects/`

## Fix loop

1. Run the failing command and read the **full** error output
2. Fix the **minimal** set of files causing the failure
3. Re-run **from Step 1**
4. Repeat until all five steps pass

**Stop and ask the user** if:
- A failure needs a product/design decision
- Tests fail because requirements are ambiguous
- Build fails due to missing secrets or env vars you cannot set
- The same error persists after two focused fix attempts

## Scope rules

- Only change code related to the implementation and CI failures
- Do not refactor unrelated files to "clean up"
- Do not skip steps to save time — CI runs all of them
- Do not commit unless the user explicitly asks

## Report back

When all steps pass, give a short summary:

```
CI validation: all green
- lint: pass
- tsc: pass
- test: pass (N tests)
- build: pass
```

If you fixed issues, list what changed in one or two bullets.
