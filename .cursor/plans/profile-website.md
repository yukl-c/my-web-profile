# Job-Seeking Profile Website — Project Plan

## Current State

- Fresh scaffold: Next.js **16.2.10**, React 19, Tailwind **4**, default starter page in [`app/page.tsx`](../../app/page.tsx)
- No custom components, content, or API routes yet
- **No Figma** — design source is paper wireframes; code follows an approved written spec, not assumptions

## Paper Wireframe Workflow (How to Show Me Your Design)

You draw on paper — that works well. Cursor chat accepts **images**, so you can attach photos of your sketches directly.

### What to photograph

| Item | Recommendation |
|------|----------------|
| **One sheet per page** | Home, About, Work, Projects, Contact — one photo each (clearest) |
| **Or one overview sheet** | All 5 pages as small boxes on one page, plus detail sheets for complex pages |
| **Breakpoints** | If mobile layout differs, draw a second sketch labeled "mobile" and photograph separately |
| **Navigation flow** | Optional: one sheet with arrows showing how pages link to each other |

### Photo tips (so I read your sketch accurately)

1. **Flat & well-lit** — place paper on a desk, shoot from directly above; avoid shadows
2. **Full frame** — all four corners of the paper visible
3. **Legible labels** — write page name ("About"), section names ("Education", "Certs"), and element labels ("nav", "button", "image")
4. **Number ambiguous boxes** — if unsure, circle and number them; explain in a short caption when you send
5. **Mark proportions** — simple notes like "image 2/3 width" or "sidebar 30%" help a lot
6. **Color notes** — write "amber heading", "amber button" on the sketch if you care about specific elements

### What to send in chat (along with photos)

A short message per page is enough, for example:

```
About page wireframe attached.
- Top: fixed header with logo left, nav right
- Main: photo left (1/3), summary text right (2/3)
- Below: personality as 3 pills, then education list, then certs
- Mobile: stack everything vertically
```

You do **not** need Figma, precise pixels, or design software.

### What I will do with your wireframes

1. **Read** each photo and your captions
2. **Ask 1–2 clarifying questions** only if something is ambiguous (via chat)
3. **Write** [`.cursor/plans/design-spec.md`](design-spec.md) — a plain-English design document covering layout, styles, workflow, responsive behavior, and component map
4. **Wait for your approval** — you reply "approved" or request changes
5. **Only then** start Phase 1 coding — wireframes are the source of truth, not generic portfolio templates

## Phase 0 — Design Intake (Required Before Coding)

**Goal:** Full shared understanding of layout, styles, and workflow before any component is built.

**Deliverable:** [`.cursor/plans/design-spec.md`](design-spec.md)

**No Phase 1 work until design spec status is Approved.**

## Architecture Overview

- Routes: `/`, `/about`, `/work`, `/projects`, `/contact`
- Shared: `RootLayout`, `Header`, `Footer`, `lib/data/profile.ts`, section components
- Backend: `POST /api/feedback` → Supabase `feedback` table

## Design System

### Color — Amber Majority (60-30-10)

| Role | Tailwind classes |
|------|------------------|
| Background (60%) | `bg-stone-50`, `dark:bg-stone-950` |
| Primary text / brand (30%) | `text-amber-700`, `dark:text-amber-400` |
| Accents / CTAs (10%) | `bg-amber-500`, `hover:bg-amber-600`, `text-amber-950` |
| Muted body | `text-stone-600`, `dark:text-stone-400` |
| Borders | `border-amber-200`, `dark:border-amber-800` |

### Typography — Fixed Scale (no fluid `clamp`)

- Fixed Tailwind sizes only — no viewport-based font scaling
- Buttons: `text-sm` or `text-base` with fixed `h-10` / `h-12` heights

### Responsive Layout — Defined in Phase 0

Proportions and breakpoint behavior come from paper wireframes via `design-spec.md`. Fallback defaults are marked **"assumed — confirm"** when sketches are silent.

## Implementation Phases

| Phase | Goal |
|-------|------|
| **0** | Wireframe intake → `design-spec.md` → user approval |
| **1** | Core components + page scaffolds (no full decoration) |
| **2** | Amber theme, layout polish, images, responsive behavior |
| **3** | Supabase feedback backend + contact form |
| **4** | Vercel deploy + README env docs |

## File Structure (to create in later phases)

```
app/
  layout.tsx, page.tsx
  about/, work/, projects/, contact/
  api/feedback/route.ts
components/
  layout/   Header, Footer, PageShell
  sections/ AboutSummary, WorkExperience, ProjectGrid, ContactForm, ...
  ui/       Button, SectionHeading, Badge
lib/
  data/profile.ts
  db/, validations/
public/projects/
supabase/migrations/
```

## Success Criteria

- Approved `design-spec.md` accurately reflects paper wireframes
- 5 routes live matching the spec — amber theme and fixed typography
- 6 projects with optimized images
- Contact page with phone, email, GitHub, LinkedIn + working feedback form
- Feedback stored in Supabase; deployed on Vercel
