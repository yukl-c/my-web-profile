import type { ProfileData } from "@/lib/data/profile.types";

/** Personal portfolio content — gitignored; not committed. @see docs/profile-data.md */
export const profileData: ProfileData = {
  name: "Chan Mei Yu, Maisy",
  tagline: "Welcome to My Digital Portfolio!",
  summary:
    "Results-driven full-stack engineer with 2.5 years of experience delivering robust Web and Mobile applications (Flutter, Node.js, Python) and relational database solutions. Proven capacity for technical coordination and requirement gathering, successfully streamlining communication between UI/UX designers and development teams to achieve a 3x speed-up in project alignment. Competent across the entire enterprise SDLC, with practical expertise in API specification design, technical documentation, and legacy code optimization. Highly adaptive fast learner with additional proficiency in pragmatic full-stack and AI engineering (AWS Bedrock, Gemini), equipped to maintain reliable, stable, and high-availability IT services aligned with corporate operational standards.",
  techStackGroups: [
    {
      label: "Languages",
      tags: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      label: "Frontend",
      tags: ["Flutter", "ReactJS", "HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS"],
    },
    {
      label: "Backend",
      tags: ["Node.js", "Flask", "RESTful API(JSON/XML)", "API Design", "Authentication"],
    },
    {
      label: "Database",
      tags: ["PostgreSQL", "MongoDB", "SQL", "No-SQL", "Query Optimization", "Schema Design", "Database Management"],
    },
    {
      label: "Cloud and DevOps",
      tags: ["AWS (EC2, S3)", "Docker Containerization", "Git/GitHub", "CI/CD Workflows"],
    },
    {
      label: "AI Engineering",
      tags: ["Cursor", "Gemini API", "Prompt Engineering", "AWS Bedrock"],
    },
  ],
  education: [
    {
      id: "edu-1",
      title: "Bachelor of Science (Hons) in Data Science",
      subtitle: "Lingnan University",
      tags: [
        "Artificial Intelligence",
        "Machine Learning",
        "Relational Database Design",
        "Data Structures",
        "Algorithmic Logic",
        "Quantitative Problem-Solving",
      ],
      range: {
        startMonth: 9,
        startYear: 2019,
        endMonth: 8,
        endYear: 2023,
      },
    },
  ],
  certifications: [
    {
      id: "cert-2",
      title: "Mastering Сursor: From Setup to Real Projects",
      url: "https://coursera.org/share/89086e2f00f70eb398e5deab5b290e41",
      tags: ["Cursor", "AI Tools", "Development Environment"],
      range: {
        startMonth: 5,
        startYear: 2026,
        endMonth: 5,
        endYear: 2026,
      },
    },
    {
      id: "cert-3",
      title: "Database Design and Basic SQL in PostgreSQL",
      url: "https://coursera.org/share/6bcea5c4f3f9b91492d96ed61580c657",
      tags: ["PostgreSQL", "SQL", "Database Design", "Relational Database"],
      range: {
        startMonth: 5,
        startYear: 2026,
        endMonth: 5,
        endYear: 2026,
      },
    },
    {
      id: "cert-1",
      title: "IBM Full Stack Software Developer",
      url: "https://coursera.org/share/6b73057a6fa46515fa659f39af55c336",
      tags: ["React", "Node.js", "Express", "Python", "SQL", "Docker", "CI/CD", "Cloud Development", "Unit Test"],
      range: {
        startMonth: 3,
        startYear: 2025,
        endMonth: 10,
        endYear: 2025,
      },
    },
  ],
  work: [
    {
      id: "work-1",
      title: "Junior Programmer",
      subtitle: "Logistics and Supply Chain MultiTech R&D Centre",
      bullets: [
        "Tasked with delivering a complex enterprise IoT mobile platform with evolving operational requirements. Led the frontend architecture of an enterprise IoT mobile application, utilizing Flutter (MVVM) to scale the codebase across 100+ screens; engineered reusable UI components and optimized state management to handle real-time data streams, collaborating with cross-functional backend and product teams to prepare production-ready modules for upcoming User Acceptance Testing (UAT).",
        "Addressed bottlenecks and ambiguous layout handovers between separate development roles. Acted as a technical coordinator to clarify mobile frontend capabilities, negotiating RESTful API payload configurations and aligning data design specifications before code execution. Eliminated architectural ambiguity, achieving a 3x acceleration in feature delivery timelines for internal workflows.",
        "Required to deliver an enterprise-facing web platform to streamline internal workflows. Built and deployed a ReactJS portal featuring 7 functional modules, utilizing rapid prototyping to gather immediate user requirements before executing a structured, phased testing framework. Secured a stable, successful production rollout within 4 months, optimizing the corporate onboarding pipeline for user departments.",
      ],
      tags: ["Flutter", "MVVM", "ReactJS", "Python", "RESTful API", "IoT"],
      range: {
        startMonth: 12,
        startYear: 2023,
      },
    },
    {
      id: "work-2",
      title: "Internship",
      subtitle: "Fin-tech department in UA Finance",
      bullets: [
        "Streamlined the QA-to-developer feedback loop by identifying system defects and drafting precise technical reports, ensuring rapid implementation of suggested UI/UX or functional improvements.",
        "Established reliable testing frameworks within a fast-paced 3-month window by creating inspection standards in TestRail and drafting detailed JIRA user stories to guide upcoming development sprints.",
      ],
      tags: ["Testing", "TestRail", "JIRA"],
      range: {
        startMonth: 6,
        startYear: 2022,
        endMonth: 8,
        endYear: 2022,
      },
    },
  ],
  projects: [
    {
      id: "project-9",
      title: "Personal Web Profile",
      subtitle: "Responsive Portfolio Website",
      url: "https://github.com/yukl-c/my-web-profile",
      bullets: [
        "Architected an interactive single-page showcase using Next.js 16 App Router and React 19 client state, enabling visitors to navigate About, Work, Project, and Contact panels through a unified amber-themed UI without full page reloads.",
        "Built a reusable component library—including responsive Timeline (zigzag desktop layout, left-rail mobile), expandable HeaderBox/DetailBox cards, and icon-driven MainButton navigation—styled with Tailwind CSS 4 and a fixed typography scale for consistent cross-breakpoint rendering.",
        "Centralized all profile content in a typed data layer (lib/data/profile.ts) and applied SEO metadata via the root layout, establishing a maintainable content-driven architecture with route stubs prepared for future multi-page expansion.",
      ],
      tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      range: {
        startMonth: 7,
        startYear: 2026,
        endMonth: 7,
        endYear: 2026,
      },
    },
    {
      id: "project-1",
      title: "Inside Out Memory Ball Management System",
      subtitle: "Full Stack Project with GenAI",
      url: "https://github.com/yukl-c/Inside-Out-Memory-Ball",
      bullets: [
        "Designed and deployed a high-availability relational database schema on AWS RDS (PostgreSQL), establishing optimized entity relationships to support scalable data retrieval and robust storage management.",
        "Engineered a secure Node.js backend utilizing JWT authentication and Bcrypt hashing; implemented precise transactional handling between the relational database and AWS S3 to prevent orphaned data errors, writing clean technical documentation and automated unit tests.",
        "Integrated a Python-based generative AI microservice utilizing a dual-model execution pipeline via Gemini API to process user contexts and dynamically render customized visual structures.",
      ],
      tags: ["Node.js", "Python", "PostgreSQL", "AWS RDS", "Gemini API"],
      range: {
        startMonth: 5,
        startYear: 2026,
      },
    },
    {
      id: "project-2",
      title: "AI Agent Full-Stack Developer Supervisor",
      subtitle: "AI Agent Platform",
      url: "https://github.com/yukl-c/LLM-of-Full-Stack-Programmer-Supervisor",
      bullets: [
        "Engineered a full-stack AI agent platform using Gemini Function Calling to coordinate 5 specialized development tools; architected an agentic workflow that incorporated Google Search Grounding and backend validation mechanisms to deliver reliable, verifiable, and real-time up-to-date technical guidance.",
        "Optimized LLM response quality and stability by applying advanced prompt engineering, including few-shot prompting and dynamic token scaling; successfully forced structured outputs and multimodal explanations while maintaining a responsive, real-time user interaction loop.",
      ],
      tags: ["AI Agent", "Gemini API", "Prompt Engineering", "Full-Stack"],
      range: {
        startMonth: 4,
        startYear: 2025,
      },
    },
    {
      id: "project-7",
      title: "Weather Rendering Website",
      subtitle: "Frontend Data Visualization",
      url: "https://yukl-c.github.io/HTML5-CSS-JavaScript-Weather-Rendering.io/",
      bullets: [
        "Extracted and processed weather data from JSON files to display comprehensive metrics (humidity, temperature, wind speed) for specific locations like Stoke-on-Trent and London.",
        "Implemented interactive chart features allowing users to seamlessly toggle between bar and line graphs, and adjust chart color schemes for improved data comparison and readability.",
      ],
      tags: ["HTML5", "CSS", "JavaScript", "Data Visualization", "JSON"],
      range: {
        startMonth: 10,
        startYear: 2022,
        endMonth: 11,
        endYear: 2022,
      },
    },
    {
      id: "project-8",
      title: "Login, Input and Publication System",
      subtitle: "PHP and AJAX Web Application",
      url: "https://github.com/yukl-c/PHP-and-AJAX--login-input-and-publication-systems.io",
      bullets: [
        "Developed a secure, role-based login system that restricts administrative functionalities and data entry pages based on authenticated user privileges.",
        "Engineered a book publication management module with robust backend input validation (e.g., specific year ranges, URL formatting) to ensure data integrity prior to CSV storage.",
        "Utilized AJAX to dynamically generate and display public book lists from CSV databases, enabling users to interactively fetch and view detailed records without page reloads.",
      ],
      tags: ["PHP", "AJAX", "Authentication", "Validation", "CSV"],
      range: {
        startMonth: 11,
        startYear: 2022,
        endMonth: 12,
        endYear: 2022,
      },
    },
    {
      id: "project-4",
      title: "Phone Directory Management System",
      subtitle: "Object-Oriented Programming",
      url: "https://github.com/yukl-c/Phone-Directory-Management-System",
      bullets: [
        "Developed a directory system utilizing linked lists with 4 main functions: inserting, removing, searching, and sorting records.",
        "Monitored and handled repeated records and alphabet numbers using recursion.",
      ],
      tags: ["Python", "OOP", "Data Structures"],
      range: {
        startMonth: 4,
        startYear: 2021,
        endMonth: 4,
        endYear: 2021,
      },
    },
  ],
  contact: {
    phone: "(+852) 51124737",
    email: "cmaisy010822@gmail.com",
    socialLinks: [
      {
        id: "github",
        label: "GitHub",
        href: "https://github.com/yukl-c?tab=repositories",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mei-yu-chan-06b2811b7/",
      },
    ],
  },
};
