import type { ProfileData } from "@/lib/data/profile.types";

/** Bundled profile content. Auto-synced from profile.local.ts before dev/build. */
export const profileData: ProfileData = {
  name: "Jane Developer",
  tagline: "Welcome to My Digital Portfolio!",
  summary:
    "Sample profile content used for CI builds. Edit lib/data/profile.local.ts for local development.",
  techStackGroups: [
    {
      label: "Frontend",
      tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
  ],
  education: [],
  certifications: [],
  work: [],
  projects: [],
  contact: {
    phone: "(+1) 000-000-0000",
    email: "hello@example.com",
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
