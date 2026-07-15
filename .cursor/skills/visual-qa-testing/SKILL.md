---
name: visual-qa-testing
description: Visually QA this Next.js app by launching the dev server, opening pages in a browser, checking console errors, and reporting layout issues. Use after UI changes.
user-invocable: true
disable-model-invocation: true
---

# Visual QA

Use this skill after UI changes to verify the result, catch console errors, and audit network requests.

## Steps

### 1. Ensure the dev server is running

Check for an existing terminal running the dev server. If not:

```bash
npm run dev
```

Wait for `http://localhost:3000` to be ready.

### 2. Choose a browser tool

Call **GetMcpTools** first:

- **If a browser MCP server is available** — use its navigate, screenshot, console, and network tools
- **If no browser MCP** — ask the user to open the page in a browser, or describe what to verify manually at `http://localhost:3000` plus the affected route

### 3. Navigate to the page

Open the relevant URL. For this project, common routes:

- `/` — home
- `/about`, `/work`, `/projects`, `/contact`

Take a screenshot or snapshot after navigation.

### 4. Check console for errors

Look for JavaScript errors or warnings: `TypeError`, `ReferenceError`, failed imports, React hydration mismatches.

### 5. Audit network requests

Look for: 4xx/5xx status codes, CORS errors, failed `POST /api/feedback`, oversized responses.

### 6. Interact if needed

If the change involves interactive elements (nav menu, contact form, buttons), test the interaction and capture another screenshot.

### 7. Report findings

Summarize:

- Screenshot / layout looks correct (or what's wrong)
- Console is clean (or list errors)
- Network requests are healthy (or list failures)

## Notes

- Get element refs from a snapshot before clicking when using browser MCP
- For breakpoint checks, use `responsive-testing` instead of or after this skill
- Run `ci-validate-and-fix` before considering UI work complete
