---
name: profile-content-updates
description: Update portfolio content safely in lib/data/profile.local.ts and public/projects/ without changing layout architecture. Use when editing copy, projects, links, images, or SEO metadata for this profile site.
user-invocable: true
disable-model-invocation: true
---

# Profile Content Updates

Use this skill for copy/content refreshes while preserving layout and component structure.

## Update sources

1. `lib/data/profile.local.ts` for structured content (imported via `lib/data/profile.ts`)
2. `public/projects/` for project imagery
3. Page metadata exports for SEO text

Full reference: [docs/profile-data.md](../../../docs/profile-data.md)

## Safe content workflow

1. Update typed profile fields in `lib/data/profile.local.ts`
2. Run `node scripts/sync-profile-content.mjs` (also runs in CI and `npm run dev`)
3. Ensure all required entries remain present (6 projects expected)
4. Replace project image files in `public/projects/` as needed
5. Verify links (GitHub, LinkedIn, external project URLs) are valid
6. Keep layout components unchanged unless explicitly requested

## Quality checks

- Text remains concise and job-seeking focused
- Timeline/project ordering stays intentional
- Contact details are consistent across UI and metadata
- Run `ci-validate-and-fix` after content changes to match CI
