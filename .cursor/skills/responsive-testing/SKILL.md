---
name: responsive-testing
description: Open the app at multiple viewport sizes, screenshot each, and report layout breakage. Use after UI changes on this Next.js profile site.
user-invocable: true
disable-model-invocation: true
---

# Responsive Testing

After a UI change, verify the app looks correct at all standard breakpoints.

## Viewports to test

| Name | Width | Tailwind |
|------|-------|----------|
| Mobile (small) | 375px | default |
| Mobile (large) | 428px | default |
| Tablet | 768px | `md:` |
| Desktop | 1280px | `xl:` |
| Ultrawide | 1536px | `2xl:` |

## Workflow

### 1. Start the dev server

```bash
npm run dev
```

Wait for `http://localhost:3000` to be ready.

### 2. Choose a browser tool

Call **GetMcpTools** first:

- **If a browser MCP server is available** — use its navigate, resize, screenshot, and snapshot tools at each viewport
- **If no browser MCP** — open `http://localhost:3000` in the system browser, resize manually, and report findings from inspection

Routes to cover for this project: `/`, `/about`, `/work`, `/projects`, `/contact`.

### 3. Test each viewport

For each viewport size:

1. Resize to the target width
2. Capture a screenshot or snapshot
3. Check for:
   - Content overflowing or hidden behind other elements
   - Navigation that should collapse into a hamburger menu
   - Text that's too small to read
   - Buttons/links too close together (touch target issues)
   - Horizontal scrollbars that shouldn't exist

### 4. Check for common breakage

- **Overflow**: Elements wider than the viewport causing horizontal scroll
- **Collapsed layout**: Flex/grid items that should stack on mobile but don't
- **Hidden content**: Elements that disappear at certain sizes without a menu toggle
- **Font scaling**: Text readable on desktop but tiny on mobile (this project uses fixed typography — verify it still reads well)
- **Fixed positioning**: Modals, toasts, or sticky headers that break on small screens
- **Images**: Oversized images that don't scale down (`next/image` in `public/projects/`)

### 5. Report

```
Responsive Test Results:
  375px (mobile):  PASS — layout stacks correctly
  428px (mobile):  PASS
  768px (tablet):  WARN — nav items overlap, need hamburger menu
  1280px (desktop): PASS
  1536px (ultrawide): WARN — content not centered, stretched too wide
```

Fix any issues found, then re-test the affected viewports. Run `ci-validate-and-fix` before finishing.
