import type { MainNavItem, ResponsiveSizeRule } from "@/lib/data/profile.types";

/** Home showcase nav: About, Work, Project, Contact — order matches panel flow. */
export const mainNavItems: MainNavItem[] = [
  {
    id: "about",
    label: "About",
    inactiveIcon: "aboutWhite",
    activeIcon: "aboutAmber",
  },
  {
    id: "work",
    label: "Work",
    inactiveIcon: "workWhite",
    activeIcon: "workAmber",
  },
  {
    id: "project",
    label: "Project",
    inactiveIcon: "projectWhite",
    activeIcon: "projectAmber",
  },
  {
    id: "contact",
    label: "Contact",
    inactiveIcon: "contactWhite",
    activeIcon: "contactAmber",
  },
];

/** Breakpoint sizing notes from design-spec.md — documentation for implementers. */
export const responsiveSizeRules: ResponsiveSizeRule[] = [
  {
    component: "Title",
    mobile: "full width, wraps text, text-xl",
    tablet: "centered with wider max width, text-2xl",
    desktop: "10vh region emphasis, text-3xl",
    wide: "bounded width, text-4xl max",
  },
  {
    component: "MainButton",
    mobile: "2-column wrap, square tap target",
    tablet: "single row when space allows",
    desktop: "single row with larger gaps",
    wide: "same size, increased spacing only",
  },
  {
    component: "HeaderBox",
    mobile: "body stacks, image optional below content",
    tablet: "content + image split when readable",
    desktop: "70/30 split with divider",
    wide: "same split, roomier padding",
  },
  {
    component: "Timeline",
    mobile: "date above item for readability",
    tablet: "compact left date column",
    desktop: "clear left date + right content lanes",
    wide: "same structure with more breathing space",
  },
  {
    component: "Contact Panel",
    mobile: "info block above form block",
    tablet: "balanced vertical split",
    desktop: "50/50 vertical split",
    wide: "same split with bounded max width",
  },
];
