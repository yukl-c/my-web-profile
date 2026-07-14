import type { ProfileData } from "@/lib/data/profile.types";

/**
 * Placeholder profile content for CI and first-time setup.
 * Copy to profile.local.ts for local dev: cp lib/data/profile.sample.ts lib/data/profile.local.ts
 * @see docs/profile-data.md
 */
export const profileData: ProfileData = {
  name: "Jane Developer",
  tagline: "Welcome to My Digital Portfolio!",
  summary:
    "Sample profile content used for CI builds. Replace lib/data/profile.local.ts with your own data for local development.",
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
