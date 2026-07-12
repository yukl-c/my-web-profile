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

- Width rule:
  - Section backgrounds (title band, amber-200 spacer, amber-800 nav/content shell): 100% viewport width.
  - Inner interactive content (MainButtons row/column and active content body): centered at about 70% of section width.
- Initial state:
  - Full viewport (`h-dvh`) and unscrollable.
  - Desktop/laptop (`lg+`): title at top, amber-200 spacer in the middle, and amber-800 navigation band at the bottom about 30vh tall.
  - Tablet/mobile (`< lg`): title at top, amber-800 section fills remaining height with centered vertical MainButtons.
- Clicked state:
  - Keep title + horizontal MainButtons + active content flow.
  - Page can scroll naturally if content exceeds viewport height.

## 3. Per-Page Layout Breakdown

### `/` (core showcase page)

Initial (`activeView = null`)
```
┌──────────────────────────────────────────────┐
│ Title band (amber-50/200, full width)       │
├──────────────────────────────────────────────┤
│ Amber-200 spacer                             │
├──────────────────────────────────────────────┤
│ Amber-800 band (full width, desktop 30vh)   │
│  └─ MainButtons (70% centered)              │
│     - desktop: horizontal row               │
│     - tablet/mobile: vertical column        │
└──────────────────────────────────────────────┘
```

Clicked (`activeView != null`)
```
┌──────────────────────────────────────────────┐
│ Title band (full width)                     │
├──────────────────────────────────────────────┤
│ Amber-800 shell (full width)                │
│  └─ MainButtons row (70% centered)          │
│  └─ Active content panel (70% centered)     │
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
  - Initial viewport is unscrollable and full-screen.
  - Amber-800 section fills remaining height below title.
  - MainButtons are stacked in one centered vertical column inside a 70% inner container.
  - About panel top split stacks vertically.
  - Contact panel keeps info above form.
  - Timeline uses a single-column left rail with stacked cards.
- Tablet:
  - Same as mobile for initial state: unscrollable with centered vertical button column.
  - Inner content remains centered at 70% width.
  - About split may remain side-by-side when readable.
- Desktop:
  - Initial state uses a 70/30 height split feel (amber-200 upper area, amber-800 bottom band at ~30vh).
  - MainButtons are horizontal in the bottom band, centered in a 70% inner container.
  - Clicked state keeps full-width sections with centered 70% inner content and horizontal buttons.
  - Timeline rail is centered with alternating left/right DetailBox entries.
- Wide:
  - Section backgrounds remain full-width.
  - Inner content remains centered with bounded 70% width.
  - Timeline spacing increases modestly without altering structure.

## 6. Component Map

- Title band -> `Title`
- Main nav row -> `MainButton` (icons sourced from `components/icons/`)
- Social row -> `IconButton` (GitHub/LinkedIn icons from `components/icons/`)
- Profile image -> `ProfilePicture`
- Skills/labels -> `Tag`
- Work/project timeline entries -> DetailBox
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
