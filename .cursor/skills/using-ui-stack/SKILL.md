---
name: using-ui-stack
description: Enforce a configuration-driven design system when generating UI for this profile site. Ensures consistent spacing, amber-forward colors, typography, interactions, and accessibility.
user-invocable: true
disable-model-invocation: true
---

# Using UI Stack

Apply a structured design system to every UI component you generate. This prevents inconsistent padding, mismatched colors, and forgotten hover states.

## Design system principles

Follow these rules for **every** component you build:

### Spacing — 8px grid

Use multiples of 8 for padding, margin, and gap:

- `4px` — tight internal padding only
- `8px` — inline gaps, icon spacing
- `16px` — standard padding, card gaps
- `24px` — section padding
- `32px` — large section gaps
- `48px / 64px` — page-level spacing

### Color — 60-30-10 rule

- **60%** neutral/background (`stone` in this project)
- **30%** primary brand color
- **10%** accent for CTAs and highlights
- Semantic colors: success (green), warning (amber), error (red), info (blue)
- Never use pure black (`#000`) for dark mode — use `slate-950` or similar

### Typography — fixed scale (this project)

This repo uses a **fixed** typography scale — no fluid `clamp()` sizing. Match existing page classes (`text-sm`, `text-base`, `text-2xl`, etc.).

- Headings: `font-semibold` or `font-bold`
- Body: `font-normal`, line-height 1.5–1.75
- Mono: use for code, IDs, numeric data

### Dark mode

- Provide complete light/dark mappings for every color token
- Background: `white` → `slate-950`, not `black`
- Text: `slate-900` → `slate-100`
- Borders: `slate-200` → `slate-800`

### 5-state interactions

Every interactive element must have:

1. **Default** — base appearance
2. **Hover** — subtle color shift or shadow
3. **Active/Pressed** — slightly darker or scaled down
4. **Focus** — visible ring (`ring-2 ring-offset-2`)
5. **Disabled** — reduced opacity, `cursor-not-allowed`

### Accessibility

- Contrast ratio ≥ 4.5:1 for text, ≥ 3:1 for large text
- Touch targets ≥ 44×44px
- Semantic HTML (`button` not `div`, `nav`, `main`, etc.)
- Keyboard navigable — Tab/Enter/Escape
- Respect `prefers-reduced-motion` for animations

### Animations

- Duration: 150–300ms for micro-interactions
- Easing: `ease-out` for entrances, `ease-in` for exits
- Wrap motion in `motion-safe:` or check `prefers-reduced-motion`

### Overlay z-index scale

```
dropdown:  z-10
sticky:    z-20
overlay:   z-30
modal:     z-40
toast:     z-50
tooltip:   z-60
```

## Workflow

1. Read `.cursor/plans/design-spec.md` — layout source of truth; no UI until user-approved
2. Check existing components under `components/` for patterns before inventing new ones
3. Store long copy in `lib/data/profile.ts` / `profile.local.ts`, not inline in JSX
4. Use `next/image` for assets under `public/projects/`
5. For every component, verify spacing, colors, and all 5 interaction states

## Project override: job-seeking portfolio

1. Primary accent is **amber** — use `.text-amber`, `.btn-amber`, amber links/headings
2. Prefer `stone`/neutral backgrounds with amber CTAs
3. Fixed typography for resume-style content
4. Prioritize clarity and contrast over dense dashboards or complex motion
5. Routes are fixed: `/`, `/about`, `/work`, `/projects`, `/contact`

## After UI changes

Run `visual-qa-testing` and `ci-validate-and-fix`.

## References

- [ui-stack.dev](https://ui-stack.dev) — interactive configurator
- `.cursor/plans/design-spec.md` — this project's layout spec
