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
  bio: string;
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

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  bullets: { label: string; text: string }[];
  tags: string[];
}

export interface Skill {
  name: string;
  category: ("cloud" | "backend" | "frontend" | "tools")[];
  detail: string;
  source: string;
  color: string;
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
  bio: "Software Engineer with ~3 years architecting decoupled multisite platforms, interactive state engines, and production APIs. Gradually evolving towards Python, FastAPI, BigQuery, and Cloud Data Engineering to build scalable, high-impact systems.",
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
    source: "IT IDOL Technologies",
    color: "bg-cyan-400",
  },
  {
    name: "Google BigQuery",
    category: ["cloud"],
    detail: "SQL & Large-Scale Analytics",
    source: "IT IDOL Technologies",
    color: "bg-cyan-400",
  },
  {
    name: "Python (Language)",
    category: ["cloud", "backend"],
    detail: "Async, Scripting & Pipelines",
    source: "Core Focus",
    color: "bg-emerald-400",
  },
  {
    name: "FastAPI",
    category: ["cloud", "backend"],
    detail: "High-Throughput REST APIs",
    source: "IT IDOL Technologies",
    color: "bg-emerald-400",
  },
  {
    name: "Docker",
    category: ["cloud", "tools"],
    detail: "Containerization & Microservices",
    source: "IT IDOL Technologies",
    color: "bg-cyan-400",
  },
  {
    name: "n8n",
    category: ["cloud", "tools"],
    detail: "Workflow Automation & Webhooks",
    source: "IT IDOL Technologies",
    color: "bg-pink-400",
  },
  {
    name: "GitHub",
    category: ["cloud", "tools"],
    detail: "Version Control, PRs & CI/CD",
    source: "IT IDOL Technologies",
    color: "bg-slate-300",
  },

  // Backend & APIs
  {
    name: "Drupal",
    category: ["backend", "tools"],
    detail: "Decoupled Multisite & Custom APIs",
    source: "IT IDOL Technologies",
    color: "bg-indigo-400",
  },
  {
    name: "Next.js & Decoupled",
    category: ["frontend", "backend"],
    detail: "JSON:API & SSR Client Integration",
    source: "IT IDOL Technologies",
    color: "bg-cyan-400",
  },
  {
    name: "Node.js",
    category: ["backend"],
    detail: "Server Runtimes & Backend Tooling",
    source: "IT IDOL Technologies",
    color: "bg-indigo-400",
  },
  {
    name: "PHP",
    category: ["backend"],
    detail: "Backend Logic & Twig Templating",
    source: "IT IDOL & GTU",
    color: "bg-indigo-400",
  },
  {
    name: "SQL",
    category: ["cloud", "backend"],
    detail: "Queries, Normalization & Indexes",
    source: "IT IDOL & GTU",
    color: "bg-amber-400",
  },
  {
    name: "C (Language)",
    category: ["backend"],
    detail: "Data Structures & Low-Level Core",
    source: "GTU (B.E.)",
    color: "bg-amber-400",
  },

  // Frontend & UI
  {
    name: "React.js",
    category: ["frontend"],
    detail: "Components, Hooks & Embedded Apps",
    source: "IT IDOL Technologies",
    color: "bg-blue-400",
  },
  {
    name: "JavaScript (ES6+)",
    category: ["frontend"],
    detail: "Async, DOM Manipulation & APIs",
    source: "IT IDOL & GTU",
    color: "bg-blue-400",
  },
  {
    name: "Tailwind CSS",
    category: ["frontend"],
    detail: "Modern Utility-First Design",
    source: "IT IDOL Technologies",
    color: "bg-blue-400",
  },
  {
    name: "HTML5",
    category: ["frontend"],
    detail: "Semantic Web Architecture",
    source: "IT IDOL & GTU",
    color: "bg-blue-400",
  },
  {
    name: "CSS3",
    category: ["frontend"],
    detail: "Responsive Flexbox & Grid Systems",
    source: "IT IDOL & GTU",
    color: "bg-blue-400",
  },
  {
    name: "Bootstrap",
    category: ["frontend"],
    detail: "Responsive Component Framework",
    source: "IT IDOL Technologies",
    color: "bg-purple-400",
  },
  {
    name: "jQuery",
    category: ["frontend"],
    detail: "Client-Side Scripting & DOM",
    source: "IT IDOL Technologies",
    color: "bg-blue-300",
  },

  // Tools, CMS & Automation
  {
    name: "WordPress",
    category: ["backend", "tools"],
    detail: "Custom Themes & Architecture",
    source: "IT IDOL Technologies",
    color: "bg-purple-400",
  },
  {
    name: "Elementor",
    category: ["frontend", "tools"],
    detail: "Visual CMS Page Builder",
    source: "IT IDOL Technologies",
    color: "bg-pink-400",
  },
  {
    name: "Jira",
    category: ["tools"],
    detail: "Agile Sprints & Issue Tracking",
    source: "IT IDOL Technologies",
    color: "bg-blue-400",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "IT IDOL Technologies",
    location: "Valsad, Gujarat, India",
    period: "May 2025 — Present (1 yr 7 mos)",
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
    period: "May 2024 — April 2025 (1 year)",
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
    period: "Jan 2024 — April 2024 (4 months)",
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
