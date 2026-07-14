/** Active panel on the home showcase (single-page nav). */
export type ShowcaseView = "about" | "work" | "project" | "contact";

/** Month/year bounds for timeline entries. Omit end* for ongoing items ("Present"). */
export interface DateRange {
  /** 1–12 */
  startMonth: number;
  startYear: number;
  endMonth?: number;
  endYear?: number;
}

/** One row in education, certifications, work, or projects timelines. */
export interface TimelineEntry {
  /** Stable unique id, e.g. "work-1" — used as React key */
  id: string;
  title: string;
  subtitle?: string;
  url?: string;
  bullets?: string[];
  tags?: string[];
  range: DateRange;
}

/** Contact-panel social link. `id` selects the icon asset. */
export interface SocialLink {
  id: "github" | "linkedin";
  label: string;
  href: string;
}

/** Main nav button config for HomeShowcase (label + icon asset keys). */
export interface MainNavItem {
  id: ShowcaseView;
  label: string;
  inactiveIcon: "aboutWhite" | "workWhite" | "projectWhite" | "contactWhite";
  activeIcon: "aboutAmber" | "workAmber" | "projectAmber" | "contactAmber";
}

/** Root content object — all copy and structured lists for the portfolio. */
export interface ProfileData {
  name: string;
  tagline: string;
  summary: string;
  techStackGroups: Array<{
    label: string;
    tags: string[];
  }>;
  education: TimelineEntry[];
  certifications: TimelineEntry[];
  work: TimelineEntry[];
  projects: TimelineEntry[];
  contact: {
    phone: string;
    email: string;
    socialLinks: SocialLink[];
  };
}

/** Design-spec breakpoint notes per component (reference only, not runtime-driven). */
export interface ResponsiveSizeRule {
  component: string;
  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
}
