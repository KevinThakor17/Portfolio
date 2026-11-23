export interface PersonalInfo {
  name: string;
  role: string;
  company: string;
  experienceYears: string;
  certification: string;
  credlyBadgeUrl: string;
  location: string;
  email: string;
  linkedin: string;
  typewriterRoles: string[];
}

export interface Capability {
  title: string;
  tag: string;
  description: string;
  iconType: "cloud" | "backend" | "pipeline";
  tags: string[];
  accentColor: "cyan" | "indigo" | "emerald";
}

export interface Skill {
  name: string;
  category: ("cloud" | "backend" | "frontend" | "tools")[];
  detail: string;
  dotColor: "cyan" | "emerald" | "indigo" | "blue" | "amber" | "purple";
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  tags?: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

// Single Source of Truth
export const PERSONAL_INFO: PersonalInfo = {
  name: "Kevin Thakor",
  role: "Software Engineer",
  company: "IT IDOL Technologies",
  experienceYears: "3+",
  certification: "Google Cloud Certified — Associate Cloud Engineer",
  credlyBadgeUrl: "https://www.credly.com/badges/d32a8a1c-3e1b-4a4c-ba13-af9456c416e5",
  location: "Valsad, Gujarat, India",
  email: "kevinthakor2000@gmail.com",
  linkedin: "https://www.linkedin.com/in/kevinthakor17",
  typewriterRoles: [
    "Software Engineer",
    "GCP Certified Cloud Engineer",
    "Python & FastAPI Architect",
    "Headless Decoupled Specialist",
    "Cloud Data Solutions Builder",
  ],
};

export const CAPABILITIES: Capability[] = [
  {
    title: "Google Cloud & BigQuery",
    tag: "Certified Associate Cloud Engineer",
    description:
      "Proven ability to deploy, secure, and operate cloud infrastructure on GCP. Knowledge of compute resources, identity management, BigQuery datasets, and SQL analytics.",
    iconType: "cloud",
    tags: ["Google Cloud", "BigQuery", "Docker", "n8n Automation"],
    accentColor: "cyan",
  },
  {
    title: "Enterprise Headless Backend",
    tag: "Decoupled Next.js + Drupal",
    description:
      "Deep hands-on experience structuring reusable content models, JSON:API endpoints, multisite platform setups, and Search API with autocomplete for modern frontends.",
    iconType: "backend",
    tags: ["Headless CMS", "JSON:API", "Multisite", "Next.js"],
    accentColor: "indigo",
  },
  {
    title: "Python, FastAPI & Pipelines",
    tag: "Data Engineering Focus",
    description:
      "Transitioning full-stack web acumen into high-throughput asynchronous Python microservices, data processing pipelines, database normalization, and structured ETL workflows.",
    iconType: "pipeline",
    tags: ["FastAPI", "Python 3", "Data Pipelines", "SQL"],
    accentColor: "emerald",
  },
];

export const SKILLS_DATA: Skill[] = [
  // Cloud, Data & DevOps
  {
    name: "Google Cloud Platform (GCP)",
    category: ["cloud"],
    detail: "Associate Cloud Certified",
    dotColor: "cyan",
  },
  {
    name: "Google BigQuery",
    category: ["cloud"],
    detail: "SQL & Large-Scale Analytics",
    dotColor: "cyan",
  },
  {
    name: "Python",
    category: ["cloud", "backend"],
    detail: "Async, Scripting & Pipelines",
    dotColor: "emerald",
  },
  {
    name: "FastAPI",
    category: ["cloud", "backend"],
    detail: "High-Throughput REST APIs",
    dotColor: "emerald",
  },
  {
    name: "Docker",
    category: ["cloud", "tools"],
    detail: "Containerization & Microservices",
    dotColor: "cyan",
  },
  {
    name: "n8n",
    category: ["cloud", "tools"],
    detail: "Workflow Automation & Webhooks",
    dotColor: "purple",
  },
  {
    name: "GitHub",
    category: ["cloud", "tools"],
    detail: "Version Control, PRs & CI/CD",
    dotColor: "indigo",
  },

  // Backend & APIs
  {
    name: "Drupal",
    category: ["backend", "tools"],
    detail: "Decoupled Multisite & Custom APIs",
    dotColor: "indigo",
  },
  {
    name: "Next.js & Decoupled",
    category: ["frontend", "backend"],
    detail: "JSON:API & SSR Client Integration",
    dotColor: "cyan",
  },
  {
    name: "Node.js",
    category: ["backend"],
    detail: "Server Runtimes & Backend Tooling",
    dotColor: "indigo",
  },
  {
    name: "PHP",
    category: ["backend"],
    detail: "Backend Logic & Twig Templating",
    dotColor: "indigo",
  },
  {
    name: "SQL",
    category: ["cloud", "backend"],
    detail: "Queries, Normalization & Indexes",
    dotColor: "amber",
  },
  {
    name: "C",
    category: ["backend"],
    detail: "Data Structures & Low-Level Core",
    dotColor: "amber",
  },

  // Frontend & UI
  {
    name: "React.js",
    category: ["frontend"],
    detail: "Components, Hooks & Embedded Apps",
    dotColor: "blue",
  },
  {
    name: "JavaScript (ES6+)",
    category: ["frontend"],
    detail: "Async, DOM Manipulation & APIs",
    dotColor: "blue",
  },
  {
    name: "Tailwind CSS",
    category: ["frontend"],
    detail: "Modern Utility-First Design",
    dotColor: "blue",
  },
  {
    name: "HTML5",
    category: ["frontend"],
    detail: "Semantic Web Architecture",
    dotColor: "blue",
  },
  {
    name: "CSS3",
    category: ["frontend"],
    detail: "Responsive Flexbox & Grid Systems",
    dotColor: "blue",
  },
  {
    name: "Bootstrap",
    category: ["frontend"],
    detail: "Responsive Component Framework",
    dotColor: "purple",
  },
  {
    name: "jQuery",
    category: ["frontend"],
    detail: "Client-Side Scripting & DOM",
    dotColor: "blue",
  },

  // Tools, CMS & Automation
  {
    name: "WordPress",
    category: ["backend", "tools"],
    detail: "Custom Themes & Architecture",
    dotColor: "purple",
  },
  {
    name: "Elementor",
    category: ["frontend", "tools"],
    detail: "Visual CMS Page Builder",
    dotColor: "purple",
  },
  {
    name: "Jira",
    category: ["tools"],
    detail: "Agile Sprints & Issue Tracking",
    dotColor: "blue",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "IT IDOL Technologies",
    location: "Valsad, Gujarat, India",
    period: "May 2025 — Present",
    description:
      "Leading engineering on an interactive calculator engine and dynamic self-guided learning modules. Structured content and step configurations in Drupal; implemented Twig-based rendering for multi-step wizard flows with editable result screens, linked content references, and progress persistence. Built custom Drupal API layer for dynamic input handling, completion tracking, admin reporting, and created the Drupal-side React integration module to serve and embed React applications smoothly.",
    tags: [
      "Drupal Custom APIs",
      "React.js Integration",
      "Multi-Step Wizards",
      "Data Persistence",
    ],
    isCurrent: true,
  },
  {
    role: "Associate Software Engineer",
    company: "IT IDOL Technologies",
    location: "Valsad, Gujarat, India",
    period: "May 2024 — April 2025",
    description:
      "Maintained a production Drupal multisite platform built on a shared codebase supporting distinct site experiences. Handled CMS architecture, reusable content modeling (Paragraphs, taxonomies, Views), and contributed custom modules, Twig overrides, and REST/JSON endpoints. Engineered a headless backend exposing structured data through JSON:API, Search API with autocomplete, and custom article like/feedback modules for Next.js consumers.",
    tags: [
      "Multisite Architecture",
      "JSON:API Extras",
      "Search API Autocomplete",
      "Decoupled Backend",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "IT IDOL Technologies",
    period: "Jan 2024 — April 2024",
    description:
      "Built strong foundation in frontend and web engineering: HTML5, CSS3, JavaScript, jQuery, responsive UI systems, component-based frontend principles with React, and backend basics in Node.js.",
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Engineering (B.E.) — Computer Engineering",
  institution: "Gujarat Technological University (GTU)",
  period: "Sept 2020 — May 2024",
  description:
    "Four-year degree emphasizing computer science core principles: data structures, relational database management systems (RDBMS), object-oriented design, algorithms, computer networks, and cloud computing fundamentals.",
};
