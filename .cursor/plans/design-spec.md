# Design Spec - Core Component Showcase

## Status

- Approved for implementation in this session based on your explicit instruction to execute the attached plan end-to-end.

## 1. Site Map and User Workflow

- Required routes remain: `/`, `/about`, `/work`, `/projects`, `/contact`.
- Phase 1 implementation focus:
  - `/` is the interactive core component showcase.
  - `/about`, `/work`, `/projects`, `/contact` are route stubs for navigation completeness.
- Visitor flow in Phase 1:
  - Land on `/` -> see compact title + 4 main buttons.
  - Click a main button -> active content region expands to show About/Work/Project/Contact panel.
  - Review responsive size guide on the same page to validate mobile/tablet/desktop/wide behavior.

## 2. Global Layout

- Main shell stays centered with relative width constraints.
- Desktop baseline:
  - Main shell width target: about 70% viewport width.
  - Title band: about 10vh.
  - Navigation band: about 30vh.
  - Active content panel: about 80vh and vertically scrollable.
- Mobile/tablet:
  - Width grows to available space with fixed padding.
  - Title/nav remain top-first in reading order.
  - Content panel remains scrollable and readable without overlap.

## 3. Per-Page Layout Breakdown

### `/` (core showcase page)

```
┌──────────────────────────────────────────────┐
│ Title band (amber-200)                      │
├──────────────────────────────────────────────┤
│ Main navigation band (amber-800)            │
│ [About] [Work] [Project] [Contact]          │
├──────────────────────────────────────────────┤
│ Active content panel (scrollable, 80vh)     │
│ - About panel                               │
│ - Work panel                                │
│ - Project panel                             │
│ - Contact panel                             │
├──────────────────────────────────────────────┤
│ Responsive size guide (component behavior)  │
└──────────────────────────────────────────────┘
```

### `/about`, `/work`, `/projects`, `/contact` (Phase 1 stubs)

```
┌──────────────────────────────────────────────┐
│ Shared layout shell                          │
├──────────────────────────────────────────────┤
│ Route placeholder content                    │
│ + link/CTA back to core showcase on "/"     │
└──────────────────────────────────────────────┘
```

## 4. Style Decisions

- Palette: amber-forward with stone/neutral background support.
- Shared utility classes:
  - `.text-amber`
  - `.text-amber-muted`
  - `.btn-amber`
- Typography:
  - Fixed Tailwind text sizes only (`text-sm`, `text-base`, `text-lg`, `text-2xl`, etc.).
  - No fluid font sizing.
- Component-specific styling:
  - `MainButton`: square button, white default, amber active, no icon hover shadow.
  - `IconButton`: circular icon holder with centered label and subtle hover drop-shadow.
  - `CloseButton`: amber rectangular button with darker border and hover lightening.
  - `Tag`: amber pill.
  - `HeaderBox`: amber accordion header/body split.
  - `Timeline`: thick vertical amber track with node + horizontal connector.

## 5. Responsive Rules

- Mobile:
  - Main shell uses full width with `px-4`.
  - Main buttons wrap into 2 columns when needed.
  - About panel top split stacks vertically.
  - Contact panel keeps info above form.
- Tablet:
  - Container near `max-w-3xl`.
  - Main buttons attempt single row before wrapping.
  - About split may remain side-by-side when readable.
- Desktop:
  - Container near 70% width target.
  - Title/nav retain top-bands visual hierarchy.
  - Active panel stays scrollable and dominant in height.
- Wide:
  - Centered max width remains bounded.
  - Timeline and card spacing increase modestly, not proportionally unlimited.

## 6. Component Map

- Title band -> `Title`
- Main nav row -> `MainButton` (icons sourced from `components/icons/`)
- Social row -> `IconButton` (GitHub/LinkedIn icons from `components/icons/`)
- Profile image -> `ProfilePicture`
- Skills/labels -> `Tag`
- Expandable history/work/project entries -> `HeaderBox`
- Chronological connectors -> `Timeline`
- Contact feedback UI shell -> `CommentSection`
- Active panel dismiss action -> `CloseButton`

## 7. Data and Content Rules

- Long profile content belongs to `lib/data/profile.ts`.
- Page/component code should receive data via props instead of large hardcoded text blocks.
- Project visuals for later phases belong under `public/projects/` and render with `next/image`.

## 8. Phase Boundaries (Current Session)

- Included in this implementation:
  - Design spec creation.
  - Core data layer.
  - Core UI components.
  - Interactive showcase at `/`.
  - Required route stubs and metadata refresh.
  - In-app responsive size guide.
- Not included in this implementation:
  - Supabase, API persistence, or `POST /api/feedback` integration.
  - Deployment or production content finalization.
