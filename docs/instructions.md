# Development Instructions

Setup and run commands for the profile website. For architecture, data flow, and error handling, see [README.md](../README.md).

## Prerequisites

- Node.js 20+
- npm (or yarn / pnpm / bun)
- Supabase project with profile tables (for live content on `/`)
- `.env.local` copied from [`.env.example`](../.env.example)

## First-time setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create local profile content (optional static overrides):

   ```bash
   cp lib/data/profile.sample.ts lib/data/profile.local.ts
   ```

   Optional — local profile picture fallback:

   ```bash
   cp components/profile_img/profileMap.sample.ts components/profile_img/profileMap.local.ts
   ```

3. Configure environment variables in `.env.local`:

   | Variable | Description |
   |----------|-------------|
   | `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
   | `SUPABASE_SERVICE_ROLE_KEY` | Server-only service role key |
   | `PROFILE_ID` | UUID of your `profiles` row (optional; has a default) |

4. Start the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

`npm run dev` and `npm run build` run `scripts/sync-profile-content.mjs`, which copies `profile.local.ts` → `profile.runtime.ts` when the local file exists. See [profile-data.md](profile-data.md) for the full content workflow.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Sync profile files, then start Next.js dev server |
| `npm run build` | Sync profile files, then production build |
| `npm run start` | Run production server (after build) |
| `npm run lint` | ESLint |
| `npm run test` | Vitest unit tests |
| `npm run test:watch` | Vitest in watch mode |

## Deploy on Vercel

1. Connect the repository to [Vercel](https://vercel.com/new).
2. Set environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `PROFILE_ID`).
3. Deploy — `npm run build` runs the profile sync script automatically in CI.

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Profile data layer reference](profile-data.md)
- Layout and visual rules: `.cursor/plans/design-spec.md`

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://vercel.com/font).
