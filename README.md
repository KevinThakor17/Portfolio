# Kevin Thakor — Personal Portfolio Website

[![Live Site](https://img.shields.io/badge/Live_Site-kevinthakor.vercel.app-00dfd8?style=for-the-badge&logo=vercel&logoColor=white)](https://kevinthakor.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14%2F15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Cloud](https://img.shields.io/badge/Google_Cloud-Certified_Associate_Cloud_Engineer-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/certification/cloud-engineer)

A high-performance, component-driven portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with an **Obsidian & Neo-Tech** aesthetic featuring reusable atomic UI primitives, zero code redundancy, cursor-reactive constellation physics, a 3D holographic tilt terminal, and production architecture case studies.

---

## ✨ Features

- **Component-Driven & DRY:** Built with reusable UI primitives (`SpotlightCard`, `SectionHeader`, `TechBadge`, `CopyEmailButton`) eliminating all duplicate styles and event listeners.
- **Single Source of Truth (`data/portfolio.ts`):** Complete portfolio metadata, 23 skills, career items, and capabilities separated from presentation components.
- **Dynamic Interactive Canvas:** Cursor-reactive constellation particles connecting to nearby nodes and user mouse movements.
- **Animated Typewriter Headline:** Automatically cycles through technical specialties (*Software Engineer, GCP Certified Cloud Engineer, Python & FastAPI Architect*).
- **Interactive 3D Holographic Tilt Card:** Perspective-aware tilt engine responding to cursor coordinates (`~/kevin-thakor`).
- **Enterprise Architecture Showcase:** Visual data-flow diagram for decoupled Next.js + Drupal Headless CMS with animated signal flow lines and response time metrics.
- **Filterable Technical Arsenal:** Interactive category filter (*All (23)*, *Cloud, Data & DevOps (7)*, *Backend & APIs (7)*, *Frontend & UI (9)*, *Tools & Automation (6)*).
- **Career & Education Track Record:** Comprehensive timeline detailing progression at IT IDOL Technologies and Computer Engineering degree at GTU.
- **Zero Sensitive Data:** Fully privacy-compliant—no private keys, passwords, home addresses, or proprietary IP exposed.

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css              # Custom animations, keyframes, scrollbars & spotlight glow
│   ├── layout.tsx               # Next.js Metadata, OpenGraph & Google Fonts (Jakarta + JetBrains)
│   └── page.tsx                 # Clean page assembly
├── components/
│   ├── ui/                      # Reusable Atomic UI Primitives
│   │   ├── CopyEmailButton.tsx  # Self-contained clipboard copy with animated toast
│   │   ├── SectionHeader.tsx    # Standardized section headings (step badge + title + subtitle)
│   │   ├── SpotlightCard.tsx    # Reusable radial spotlight & 3D tilt card wrapper
│   │   └── TechBadge.tsx        # Styled technology pills with theme color variants
│   ├── ArchitectureDiagram.tsx  # Enterprise headless & multi-step wizard case studies
│   ├── CanvasBackground.tsx     # Cursor-reactive constellation particle physics canvas
│   ├── Contact.tsx              # Connect hub with 1-click clipboard copy
│   ├── Experience.tsx           # Professional career journey & GTU education
│   ├── Footer.tsx               # Semantic copyright & credentials
│   ├── Hero.tsx                 # Typewriter, stats counters & CTA buttons
│   ├── Highlights.tsx           # Bento-grid capability metrics
│   ├── Navbar.tsx               # Glassmorphic sticky nav & mobile menu
│   ├── Skills.tsx               # Filterable technical matrix
│   └── TerminalCard.tsx         # 3D interactive tilt terminal card
├── data/
│   └── portfolio.ts             # Single Source of Truth (Profile, Skills, Timeline, Highlights)
├── next.config.mjs              # Next.js configuration
├── package.json                 # Scripts & dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Custom Tailwind theme tokens & keyframes
└── tsconfig.json                # TypeScript configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have [Node.js (v18+)](https://nodejs.org/) installed on your machine.

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
# or
yarn install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your site live.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 1-Click Deployment (Vercel)

The easiest way to deploy this Next.js portfolio is with **Vercel**:

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: component-based next.js portfolio architecture"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `Portfolio` repository.
4. Click **Deploy** — Vercel detects Next.js automatically and delivers a global CDN deployment with SSL and custom domain support in under 1 minute.

---

## 📄 License
MIT License. Created for Kevin Thakor.
