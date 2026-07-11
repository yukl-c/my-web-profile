export type ShowcaseView = "about" | "work" | "project" | "contact";

export interface DateRange {
  startMonth: number;
  startYear: number;
  endMonth: number;
  endYear: number;
}

export interface TimelineEntry {
  id: string;
  title: string;
  subtitle: string;
  url?: string;
  bullets: string[];
  tags: string[];
  range: DateRange;
}

export interface SocialLink {
  id: "github" | "linkedin";
  label: string;
  href: string;
}

export interface MainNavItem {
  id: ShowcaseView;
  label: string;
  inactiveIcon: "aboutWhite" | "workWhite" | "projectWhite" | "contactWhite";
  activeIcon: "aboutAmber" | "workAmber" | "projectAmber" | "contactAmber";
}

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

export interface ResponsiveSizeRule {
  component: string;
  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
}

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

export const profileData: ProfileData = {
  name: "Your Name",
  tagline: "Frontend Developer building clean, practical products",
  summary:
    "I focus on building responsive interfaces with clear structure and maintainable components. This showcase demonstrates the core visual and interaction system before full page rollout.",
  techStackGroups: [
    {
      label: "Languages",
      tags: ["TypeScript", "JavaScript", "SQL"],
    },
    {
      label: "Frontend",
      tags: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      label: "Practices",
      tags: ["Accessibility", "Component-Driven UI", "Responsive Design"],
    },
  ],
  education: [
    {
      id: "edu-1",
      title: "B.Sc. in Computer Science",
      subtitle: "Example University",
      bullets: [
        "Built multiple web applications with React and TypeScript.",
        "Focused on software engineering and data modeling.",
      ],
      tags: ["CS", "Software Engineering"],
      range: {
        startMonth: 9,
        startYear: 2018,
        endMonth: 6,
        endYear: 2022,
      },
    },
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Frontend Performance Fundamentals",
      subtitle: "Professional Certificate",
      bullets: [
        "Optimized rendering patterns and bundle loading strategies.",
        "Applied responsive and accessibility-first UI practices.",
      ],
      tags: ["Performance", "Accessibility"],
      range: {
        startMonth: 3,
        startYear: 2024,
        endMonth: 3,
        endYear: 2024,
      },
    },
  ],
  work: [
    {
      id: "work-1",
      title: "Frontend Developer",
      subtitle: "Product Team - Example Company",
      url: "https://example.com",
      bullets: [
        "Implemented reusable App Router components for marketing pages.",
        "Reduced UI inconsistency by introducing token-based utility classes.",
      ],
      tags: ["Next.js", "Tailwind", "Design System"],
      range: {
        startMonth: 1,
        startYear: 2025,
        endMonth: 7,
        endYear: 2026,
      },
    },
    {
      id: "work-2",
      title: "Frontend Engineer Intern",
      subtitle: "Platform Team - Example Startup",
      bullets: [
        "Built interactive dashboard panels with accessibility support.",
        "Collaborated with design to improve mobile breakpoints.",
      ],
      tags: ["React", "A11y", "Responsive"],
      range: {
        startMonth: 6,
        startYear: 2024,
        endMonth: 12,
        endYear: 2024,
      },
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "Portfolio System",
      subtitle: "Interactive profile shell and timeline design",
      bullets: [
        "Created state-driven content panel transitions.",
        "Documented responsive size behavior per core component.",
      ],
      tags: ["Next.js", "TypeScript", "UI Architecture"],
      range: {
        startMonth: 5,
        startYear: 2026,
        endMonth: 7,
        endYear: 2026,
      },
    },
    {
      id: "project-2",
      title: "Learning Tracker",
      subtitle: "Personal progress app with reusable cards",
      bullets: [
        "Built reusable card and tag components.",
        "Implemented mobile-first layout with breakpoint tuning.",
      ],
      tags: ["React", "Tailwind", "Component Reuse"],
      range: {
        startMonth: 2,
        startYear: 2026,
        endMonth: 4,
        endYear: 2026,
      },
    },
  ],
  contact: {
    phone: "+00 1234 5678",
    email: "you@example.com",
    socialLinks: [
      {
        id: "github",
        label: "GitHub",
        href: "https://github.com",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://linkedin.com",
      },
    ],
  },
};

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
