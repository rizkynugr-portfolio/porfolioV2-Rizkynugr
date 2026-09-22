// ─── Portfolio Data ────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  org: string;
  role: string;
  period: string;
  highlight: string;
  tags: string[];
  hasCaseStudy: boolean;
  gradient: string;
  monogram: string;
  tagline: string;
  accentColor: string;
  category: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface CaseStudyData {
  title: string;
  sections: {
    problem: string;
    solution: string;
    challenges: string;
    testing: string;
  };
  documentation?: { image: string; caption: string }[];
}

export const projects: Project[] = [
  {
    id: "pln",
    title: "Transformer Defect Reporting System",
    org: "PLN UP3 Ponorogo",
    role: "Full-Stack Developer",
    period: "2024 · Internship",
    highlight:
      "An end-to-end digital system for recording & evaluating PLN distribution transformer infrastructure.",
    tags: ["React", "Node.js", "Express", "MySQL", "Sequelize"],
    hasCaseStudy: true,
    gradient: "from-blue-100 to-indigo-100",
    monogram: "PL",
    tagline: "Digital Transformer Management",
    accentColor: "#dbeafe",
    category: "Engineering",
    imageUrl: "/img/dashboardPLN.png",
  },
  {
    id: "task-management",
    title: "Task Management App",
    org: "Personal Project",
    role: "UI/UX Designer",
    period: "2024",
    highlight:
      "User interface design for a minimalist task management application.",
    tags: ["Figma", "Prototyping", "UX Research"],
    hasCaseStudy: false,
    gradient: "from-pink-100 to-rose-100",
    monogram: "TM",
    tagline: "UI/UX App Design",
    accentColor: "#fce7f3",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=800&auto=format&fit=crop",
  },
  {
    id: "aquafarm",
    title: "Aquafarm Kit V2",
    org: "PT. Glace Digital Kreasi",
    role: "Application Developer",
    period: "2024 · Internship",
    highlight:
      "An interactive microservices-based smart library application for modern libraries.",
    tags: ["React", "Next.js", "Express", "PostgreSQL"],
    hasCaseStudy: false,
    gradient: "from-purple-100 to-fuchsia-100",
    monogram: "ED",
    tagline: "Library Management System",
    accentColor: "#f3e8ff",
    category: "Engineering",
    githubUrl: "https://github.com/rizkynugrahaputra",
    imageUrl: "/img/aquaUI.png",
  },
  {
    id: "monetra",
    title: "Monetra",
    org: "Personal Project",
    role: "Lead Developer & UI/UX Designer",
    period: "2024",
    highlight:
      "A personal finance tracking application with premium UI/UX and complex state management.",
    tags: ["React", "Tailwind CSS", "Chart.js", "Zustand"],
    hasCaseStudy: true,
    gradient: "from-violet-600 to-purple-900",
    monogram: "MN",
    tagline: "Personal finance tracking app with modern UI.",
    accentColor: "#c7d2fe",
    category: "Design",
    githubUrl: "https://github.com/rizkynugraha/monetra-app",
    imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=85&w=800&auto=format&fit=crop",
  },
  {
    id: "vr-borobudur",
    title: "Borobudur VR Reconstruction",
    org: "Universitas Sebelas Maret",
    role: "Researcher & 3D Environment Builder",
    period: "2025 · Final Project",
    highlight:
      "Digital reconstruction of the Karmavibhanga relief of Borobudur Temple in a Virtual Reality environment.",
    tags: ["Blender", "VR", "UV Mapping", "Shader Editor"],
    hasCaseStudy: false,
    gradient: "from-amber-500 to-orange-800",
    monogram: "BR",
    tagline: "Interactive reconstruction of hidden Borobudur relief panels.",
    accentColor: "#d9f99d",
    category: "3D & Hardware",
    githubUrl: "https://github.com/rizkynugraha/borobudur-vr",
    imageUrl: "/img/relief2.png",
  },
  {
    id: "vr-kresek",
    title: "Kresek Monument VR Reconstruction",
    org: "Academic Project",
    role: "Research Team Member",
    period: "2024",
    highlight:
      "Digital reconstruction and interactive Virtual Reality experience of the historical Kresek Monument.",
    tags: ["Blender", "Virtual Reality", "3D Modeling", "Unity"],
    hasCaseStudy: false,
    gradient: "from-emerald-500 to-teal-800",
    monogram: "KM",
    tagline: "Immersive digital preservation of historical monuments.",
    accentColor: "#a7f3d0",
    category: "3D & Hardware",
    githubUrl: "https://github.com/tutupolpenn",
    imageUrl: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=85&w=800&auto=format&fit=crop",
  },
  {
    id: "portfolio-web",
    title: "Personal Portfolio Website",
    org: "Personal Project",
    role: "Frontend Developer & UI/UX Designer",
    period: "2024",
    highlight:
      "A modern, highly interactive personal portfolio website showcasing projects, skills, and experiences with dynamic animations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    hasCaseStudy: false,
    gradient: "from-zinc-500 to-stone-800",
    monogram: "RN",
    tagline: "Showcasing my digital journey.",
    accentColor: "#d6d3d1",
    category: "Engineering",
    githubUrl: "https://github.com/tutupolpenn",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=85&w=800&auto=format&fit=crop",
  },
];

export const caseStudies: Record<string, CaseStudyData> = {
  pln: {
    title: "Transformer Defect Reporting System — PLN UP3 Ponorogo",
    sections: {
      problem: `PLN UP3 Ponorogo manages hundreds of distribution transformers within its working area. The process of recording conditions and reporting transformer defects was still done manually — using paper forms and unintegrated Excel spreadsheets.

As a result, data was scattered across various documents, the evaluation process took a long time, and there was no automatic notification mechanism when a transformer reached a critical defect threshold. This risked causing unexpected power outages.`,

      solution: `A full-stack web system was built encompassing four main components:

**Admin Dashboard**
A summary view of the condition of all transformers on a single screen, equipped with color status indicators (green / yellow / red) based on configured parameter thresholds.

**Digital Forms**
A replacement for paper forms with real-time input validation, ensuring the data inputted by field technicians is accurate and complete before being saved to the database.

**History System & Audit Trail**
Every data change is recorded with a timestamp and the identity of the officer making the change — facilitating evaluation and accountability.

**Automated PDF Reports**
Automatically generate monthly evaluation reports directly from the system, replacing the manual recapitulation process that previously took hours.`,

      challenges: `**Challenge 1: Historical Data Migration**
Old data in Excel spreadsheets had inconsistent formats across periods. Solution: built a custom parser script (Node.js) that normalizes and migrates the data into a structured MySQL schema.

**Challenge 2: Query Optimization for Large Data**
The initial dashboard query took >3 seconds when data reached thousands of records. Solution: implemented composite indexes on frequently queried columns and server-side pagination using Sequelize.

**Challenge 3: Role-Based Access Control (RBAC)**
The system required 3 different access levels: field technician, supervisor, and admin. Solution: implemented JWT middleware with a payload that includes a permission matrix per endpoint.`,

      testing: `The testing process was conducted in two structured phases:

**Phase 1 — Functional Testing (Unit & Integration)**
Each API endpoint was tested using Postman with a test suite covering happy paths, edge cases (empty inputs, duplicate data), and unauthorized access. A total of 47 test cases were executed, passing 100% before the demo to PLN stakeholders.

**Phase 2 — User Acceptance Testing (UAT)**
5 field technicians and 2 PLN supervisors were involved in a 3-day UAT session. Main feedback implemented: (1) simplifying the input form into 2 steps, (2) adding a "Save Draft" button for incomplete inputs, (3) increasing the font size on form labels for ease of use in the field.`,
    },
    documentation: [
      { image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop", caption: "Database Schema Design & Transformer Data Relations" },
      { image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=1200&auto=format&fit=crop", caption: "Node.js Backend Implementation & API Endpoints" },
      { image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop", caption: "Automated PDF Report Extraction System for Monthly Evaluation" }
    ]
  },

  monetra: {
    title: "Monetra — Personal Finance Tracker",
    sections: {
      problem: `Most available finance applications have interfaces that are either too complex and confusing, or too simple that they do not provide meaningful insights. Young users who are just starting to manage their personal finances need an intuitive tool that is not overwhelming, yet remains informative.

Additionally, similar applications often respond slowly to state changes — for example, when adding a transaction, the charts do not update instantly, creating an experience that feels unsmooth.`,

      solution: `Monetra is designed with a "clarity first" philosophy:

**Minimalist Dashboard**
A single main screen displays the running balance, this month's expenses, and the 5 latest transactions. There is no unnecessary information.

**Custom Categories**
Users can create, edit, and color their own expense categories, not limited to the app's default templates.

**Interactive Visualization**
A donut chart (Chart.js) for expense distribution per category and a bar chart for monthly trends — both update reactively when data changes without the need to refresh the page.

**Filters & Reports**
Filter transactions by period, category, or nominal range, with the ability to export to CSV for advanced analysis purposes.`,

      challenges: `**Challenge 1: Complex State Management**
When a user adds a transaction, at least 4 different components must update their display simultaneously: balance, charts, transaction list, and category summary. Solution: migrated from prop-drilling to a Zustand store with granular selectors to avoid unnecessary re-renders.

**Challenge 2: Chart Performance with Large Data**
Chart.js performs a full re-render every time the dataset changes. When the transaction history reaches hundreds of entries, this causes a noticeable lag. Solution: implemented data aggregation at the store layer (Zustand) so the Chart component only receives aggregated data, not raw transactions.

**Challenge 3: Design Consistency**
With many UI components developed iteratively, visual consistency began to waver. Solution: built a "design token" system in the Tailwind config (colors, spacing, shadows) and a minimal internal component library.`,

      testing: `**Phase 1 — Visual Regression Testing**
Each UI component was screenshotted using Playwright at resolutions of 375px (mobile), 768px (tablet), and 1440px (desktop). The screenshots are saved as a baseline; every development iteration is automatically compared to detect visual regressions.

**Phase 2 — End-to-End Workflow Testing**
Three complete workflow scenarios were manually tested:
First scenario: New onboarding → setup category → add first transaction → verify dashboard.
Second scenario: Filter transactions by month → verify total accuracy → export CSV → check file contents.
Third scenario: Edit a category → verify all related transactions update consistently across all screens.

**Iteration Feedback**
3 rounds of feedback with 4 beta users resulted in significant changes to the "add transaction" flow: from a single-page form to a 3-step bottom sheet that feels more gesturally natural on mobile.`,
    },
    documentation: [
      { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", caption: "Monetra Main Dashboard & Chart.js Visualization" },
      { image: "https://images.unsplash.com/photo-1616077168079-7eb75151449e?q=80&w=1200&auto=format&fit=crop", caption: "Income & Expense Category Customization Interface" },
      { image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop", caption: "Zustand State Management Implementation & Visual Regression Testing" }
    ]
  },
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/rizkynugr/",
  github: "https://github.com/tutupolpenn",
  email: "rizkynugr.contact@gmail.com",
  instagram: "https://www.instagram.com/rizkynugr_/",
  threads: "https://www.threads.com/@rizkynugr_",
  facebook: "https://www.facebook.com/rizky.n.putra.35",
};

export const techStack: Record<string, string[]> = {
  "Engineering": ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "Node.js", "Express", "Sequelize", "MySQL"],
  "Design": ["Figma (UI/UX)", "Clean Design", "UX Research", "Prototyping"],
  "3D & Hardware": ["Blender (3D Modeling)", "VR Environment", "Arduino (Dynamic PWM)", "IoT"],
};
