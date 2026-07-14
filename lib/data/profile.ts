/**
 * Profile data layer — public entry point.
 *
 * Import everything from this file:
 *   import { profileData, mainNavItems, type TimelineEntry } from "@/lib/data/profile";
 *
 * File roles:
 * - profile.types.ts  — TypeScript interfaces
 * - profile.config.ts — shared nav + responsive rules (committed)
 * - profile.local.ts  — your personal content (gitignored; synced into profile.runtime.ts)
 *
 * @see docs/profile-data.md for full API, examples, and content-editing workflow
 */
export type {
  ShowcaseView,
  DateRange,
  TimelineEntry,
  SocialLink,
  MainNavItem,
  ProfileData,
  ResponsiveSizeRule,
} from "@/lib/data/profile.types";

export { mainNavItems, responsiveSizeRules } from "@/lib/data/profile.config";
export { profileData } from "@/lib/data/profile.runtime";
