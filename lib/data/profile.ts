export type ShowcaseView = "about" | "work" | "project" | "contact";

export interface DateRange {
  startMonth: number;
  startYear: number;
  endMonth?: number;
  endYear?: number;
}

export interface TimelineEntry {
  id: string;
  title: string;
  subtitle?: string;
  url?: string;
  bullets?: string[];
  tags?: string[];
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
  name: "CHAN Mei Yu, Maisy",
  tagline: "Frontend Developer building clean, practical products",
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
      tags: ["Node.js", "Flask", "RESTful API(JSON/XML)", "API Design", "Authentication (JWT / Bcrypt)"],
    },
    {
      label: "Database",
      tags: ["PostgreSQL", "MongoDB", "SQL and No-SQL (Query Optimization, Schema Design, Database Management)"],
    },
    {
      label: "Cloud and DevOps",
      tags: ["AWS (EC2, S3)", "Docker Containerization", "Version Control(Git/GitHub)", "CI/CD Workflows"], 
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
      // bullets: [
      //   "Built multiple web applications with React and TypeScript.",
      //   "Focused on software engineering and data modeling.",
      // ],
      tags: ["Artificial Intelligence", "Machine Learning", "Relational Database Design (SQL)", "Data Structures", "Algorithmic Logic", "Quantitative Problem-Solving"],
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
      id: "cert-1",
      title: "IBM Full Stack Software Developer",
      url: "https://coursera.org/share/6b73057a6fa46515fa659f39af55c336",
      // bullets: [
      //   "Optimized rendering patterns and bundle loading strategies.",
      //   "Applied responsive and accessibility-first UI practices.",
      // ],
      tags: ["React", "Node.js", "Express", "Python", "SQL", "Docker", "CI/CD", "Cloud Native Development", "Unit Test"],
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
        "Required to deliver an enterprise-facing web platform to streamline internal workflows. Built and deployed a ReactJS portal featuring 7 functional modules, utilizing rapid prototyping to gather immediate user requirements before executing a structured, phased testing framework. Secured a stable, successful production rollout within 4 months, optimizing the corporate onboarding pipeline for user departments."
      ],
      tags: ["Flutter", "MVVM", "ReactJS", "Python", "RESTful API", "IoT"],
      range: {
        startMonth: 12,
        startYear: 2023
      }
    },
    {
      id: "work-2",
      title: "Internship",
      subtitle: "Fin-tech department in UA Finance",
      bullets: [
        "Streamlined the QA-to-developer feedback loop by identifying system defects and drafting precise technical reports, ensuring rapid implementation of suggested UI/UX or functional improvements.",
        "Established reliable testing frameworks within a fast-paced 3-month window by creating inspection standards in TestRail and drafting detailed JIRA user stories to guide upcoming development sprints."
      ],
      tags: ["Testing", "TestRail", "JIRA"],
      range: {
        startMonth: 6,
        startYear: 2022,
        endMonth: 8,
        endYear: 2022
      }
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Inside Out Memory Ball Management System",
      subtitle: "Full Stack Project with GenAI",
      url: "https://github.com/yukl-c/Inside-Out-Memory-Ball",
      bullets: [
        "Designed and deployed a high-availability relational database schema on AWS RDS (PostgreSQL), establishing optimized entity relationships to support scalable data retrieval and robust storage management.",
        "Engineered a secure Node.js backend utilizing JWT authentication and Bcrypt hashing; implemented precise transactional handling between the relational database and AWS S3 to prevent orphaned data errors, writing clean technical documentation and automated unit tests.",
        "Integrated a Python-based generative AI microservice utilizing a dual-model execution pipeline via Gemini API to process user contexts and dynamically render customized visual structures."
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
        "Optimized LLM response quality and stability by applying advanced prompt engineering, including few-shot prompting and dynamic token scaling; successfully forced structured outputs and multimodal explanations while maintaining a responsive, real-time user interaction loop."
      ],
      tags: ["AI Agent", "Gemini API", "Prompt Engineering", "Full-Stack"],
      range: {
        startMonth: 4,
        startYear: 2025,
      },
    },
    {
      id: "project-3",
      title: "Bridge Record Android Application",
      subtitle: "Android Application",
      url: "https://github.com/yukl-c/Bridge-Record-Android-App-with-Java",
      bullets: [
        "Implemented UI interactions where long pressing a record displays an alert dialogue to confirm deletion, while a toolbar trash button facilitates bulk deletion of all records.",
        "Integrated GPS functionality to capture and input bridge location information accurately."
      ],
      tags: ["Android", "Java", "GPS"],
      range: {
        startMonth: 9,
        startYear: 2022,
        endMonth: 12,
        endYear: 2022
      },
    },
    {
      id: "project-4",
      title: "Phone Directory Management System",
      subtitle: "Object-Oriented Programming",
      url: "https://github.com/yukl-c/Phone-Directory-Management-System",
      bullets: [
        "Developed a directory system utilizing linked lists with 4 main functions: inserting, removing, searching, and sorting records.",
        "Monitored and handled repeated records and alphabet numbers using recursion."
      ],
      tags: ["Python", "OOP", "Data Structures"],
      range: {
        startMonth: 4,
        startYear: 2021,
        endMonth: 4,
        endYear: 2021
      },
    }
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
