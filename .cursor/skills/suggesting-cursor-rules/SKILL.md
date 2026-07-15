---
name: suggesting-cursor-rules
description: When the user repeats the same correction or convention multiple times, suggest a Cursor rule to encode it permanently for this project.
user-invocable: false
---

# Suggesting Cursor Rules

Watch for repeated corrections. When the user keeps telling you the same thing, suggest a `.cursor/rules/` file so they never have to say it again.

## Triggers

Suggest a rule when you notice:

- The user corrects the same pattern **2+ times** (e.g. "use named exports", "don't use default exports")
- The user expresses frustration about code style or conventions
- The user says things like "I always want...", "never do...", "every time you..."
- You keep making the same mistake in this project

## How to suggest

```
I notice you've corrected me on [pattern] a couple times. Want me to
create a Cursor rule so I always follow this convention?
```

If they say yes, create:

```
.cursor/rules/<name>.mdc
```

```markdown
---
description: <what this rule enforces>
globs: <file pattern this applies to>
---

- <the convention, stated clearly>
```

## Existing rules in this project

Check these before adding duplicates:

- `.cursor/rules/profile-site-conventions.mdc` — routes, amber styling, profile data, design-spec gate
- `.cursor/rules/cursorrules-cursor-ai-nextjs-14-tailwind-seo-setup.mdc` — Next.js App Router patterns
- `.cursor/rules/senior-to-junior-explanations.mdc` — communication style

## Examples for this repo

**User keeps saying "content goes in profile.ts":**

```
---
description: Profile content source of truth
globs: lib/data/**/*
---

- Store long profile content in lib/data/profile.local.ts, not page JSX
- Run scripts/sync-profile-content.mjs after profile data edits
```

**User keeps saying "no UI until spec approved":**

Already covered by `profile-site-conventions.mdc` — point them to it instead of duplicating.

## Rules

- Don't be annoying — only suggest after a genuine repeated pattern
- Keep rule files small and focused — one concern per file
- Check `.cursor/rules/` first so you don't duplicate an existing rule
- Frame it as a helpful offer, not a lecture
