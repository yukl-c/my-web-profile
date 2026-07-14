---
name: profile-content-updates
description: Update portfolio content safely without changing layout architecture.
user-invocable: true
---

# Profile Content Updates

Use this skill for copy/content refreshes while preserving layout and component structure.

## Update Sources

1. `lib/data/profile.local.ts` for structured content (imported via `lib/data/profile.ts`)
2. `public/projects/` for project imagery
3. Page metadata exports for SEO text

Full reference: [docs/profile-data.md](../../docs/profile-data.md)

## Safe Content Workflow

1. Update typed profile fields in `lib/data/profile.local.ts`.
2. Ensure all required entries remain present (6 projects expected).
3. Replace project image files in `public/projects/` as needed.
4. Verify links (GitHub, LinkedIn, external project URLs) are valid.
5. Keep layout components unchanged unless explicitly requested.

## Quality Checks

- Text remains concise and job-seeking focused.
- Timeline/project ordering stays intentional.
- Contact details are consistent across UI and metadata.
