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
    org: "PT. PLN (Persero)",
    role: "Fullstack Developer Intern",
    period: "Sep 2025 – Dec 2025 · Internship",
    highlight:
      "Web app for PLN field technicians to log distribution transformer defects, track repair status, and generate monthly PDF reports.",
    tags: ["React", "Node.js", "Express", "MySQL", "Sequelize"],
    hasCaseStudy: true,
    gradient: "from-blue-100 to-indigo-100",
    monogram: "PL",
    tagline: "Distribution transformer defect tracking",
    accentColor: "#dbeafe",
    category: "Engineering",
    githubUrl: "https://github.com/tutupolpenn/Magang-PLN",
    imageUrl: "/img/dashboardPLN.webp",
  },
  {
    id: "aquafarm",
    title: "Aquafarm Kit V2",
    org: "PT. Glace Kreasi Digital",
    role: "Frontend Developer Intern",
    period: "Jan 2026 – Feb 2026 · Internship",
    highlight:
      "IoT aquaculture dashboard that reads live pond water quality sensors and logs fisheries data.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "IoT"],
    hasCaseStudy: false,
    gradient: "from-purple-100 to-fuchsia-100",
    monogram: "AF",
    tagline: "Live pond water quality & fisheries dashboard",
    accentColor: "#f3e8ff",
    category: "Engineering",
    githubUrl: "https://github.com/tutupolpenn/AquafarmKitV2-Frontend",
    imageUrl: "/img/aquaUI.webp",
  },
  {
    id: "monetra",
    title: "Monetra",
    org: "Personal Project",
    role: "Lead Developer & UI/UX Designer",
    period: "2024",
    highlight:
      "Expense tracker built with Zustand and Chart.js that updates balances and category breakdowns on the fly.",
    tags: ["React", "Tailwind CSS", "Chart.js", "Zustand"],
    hasCaseStudy: true,
    gradient: "from-violet-600 to-purple-900",
    monogram: "MN",
    tagline: "Personal expense tracker with live charts.",
    accentColor: "#c7d2fe",
    category: "Design",
    githubUrl: "https://github.com/tutupolpenn/MONETRA",
    imageUrl: "/img/analytics2.webp",
  },
  {
    id: "vr-borobudur",
    title: "Borobudur VR Reconstruction",
    org: "Universitas Sebelas Maret",
    role: "Researcher & 3D Environment Builder",
    period: "2025 · Final Project",
    highlight:
      "3D reconstruction of 160 hidden Karmavibhanga relief panels at Borobudur Temple, built in Blender for Virtual Reality.",
    tags: ["Blender", "VR", "UV Mapping", "Shader Editor"],
    hasCaseStudy: false,
    gradient: "from-amber-500 to-orange-800",
    monogram: "BR",
    tagline: "VR walk-through of 160 hidden Borobudur relief panels.",
    accentColor: "#d9f99d",
    category: "3D & Hardware",
    githubUrl: "https://github.com/tutupolpenn/borobudurv3",
    imageUrl: "/img/relief2.webp",
  },
  {
    id: "task-management",
    title: "Task Management App",
    org: "Personal Project",
    role: "UI/UX Designer",
    period: "2024",
    highlight:
      "Mobile task manager UI designed in Figma around quick daily capture and clean priority views.",
    tags: ["Figma", "Prototyping", "UX Research"],
    hasCaseStudy: false,
    gradient: "from-pink-100 to-rose-100",
    monogram: "TM",
    tagline: "Mobile task manager UI in Figma",
    accentColor: "#fce7f3",
    category: "Design",
    imageUrl: "/img/Project.webp",
  },
  {
    id: "vr-kresek",
    title: "Kresek Monument VR Reconstruction",
    org: "Academic Project",
    role: "Research Team Member",
    period: "2024",
    highlight:
      "3D model and Unity VR walk-through of the historical Kresek Monument in Madiun.",
    tags: ["Blender", "Virtual Reality", "3D Modeling", "Unity"],
    hasCaseStudy: false,
    gradient: "from-emerald-500 to-teal-800",
    monogram: "KM",
    tagline: "3D & VR walk-through of Kresek Monument.",
    accentColor: "#a7f3d0",
    category: "3D & Hardware",
    githubUrl: "https://github.com/tutupolpenn",
    imageUrl: "/img/relief.webp",
  },
  {
    id: "portfolio-web",
    title: "Personal Portfolio Website",
    org: "Personal Project",
    role: "Frontend Developer & UI/UX Designer",
    period: "2024",
    highlight:
      "This site: custom scroll-driven hero, spring-physics card deck, and lazy-loaded case studies built on React and Vite.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    hasCaseStudy: false,
    gradient: "from-zinc-500 to-stone-800",
    monogram: "RN",
    tagline: "React, TypeScript & Framer Motion portfolio.",
    accentColor: "#d6d3d1",
    category: "Engineering",
    githubUrl: "https://github.com/rizkynugr-portfolio/porfolioV2-Rizkynugr",
    imageUrl: "/img/bg2-2.webp",
  },
];

export const caseStudies: Record<string, CaseStudyData> = {
  pln: {
    title: "Transformer Defect Reporting System (PLN UP3 Ponorogo)",
    sections: {
      problem: `PLN UP3 Ponorogo oversees hundreds of distribution transformers across its service area. Up until late 2025, field technicians logged inspections on paper forms and copied them into separate Excel files back at the office.

Because those spreadsheets weren't linked, supervisors spent hours cross-checking files to spot recurring faults. Nobody got an alert when a transformer hit a critical defect threshold, which left the grid exposed to avoidable outages.`,

      solution: `I built a full-stack web application around four pieces:

**Admin Dashboard**
Shows all distribution transformers on one screen with green, yellow, and red status indicators tied to configured defect thresholds.

**Digital Field Forms**
Replaces paper sheets with validated mobile-friendly forms so technicians catch missing or out-of-range readings before saving to MySQL.

**Audit Trail & History**
Logs every update with a timestamp and officer ID, so supervisors can trace who changed a transformer's status and when.

**One-Click Monthly PDF Reports**
Generates the monthly evaluation PDF straight from the database instead of someone spending hours copying rows out of Excel.`,

      challenges: `**Challenge 1: Messy Historical Spreadsheets**
Years of Excel files used different column names and date formats depending on who typed them. I wrote a Node.js parser script to normalize those rows and import them into a clean MySQL schema without losing past inspection dates.

**Challenge 2: Slow Dashboard Queries**
Once the database held several thousand inspection records, the main dashboard query took over 3 seconds to load. Adding composite indexes on the filter columns and moving to server-side pagination in Sequelize brought response times back down.

**Challenge 3: Role-Based Access Control (RBAC)**
Field technicians, supervisors, and admins each needed different permissions. I set up JWT middleware carrying an endpoint permission matrix so technicians can submit and edit drafts while only supervisors can sign off on evaluations.`,

      testing: `We split testing into two stages before handover:

**Phase 1: API & Integration Testing**
I ran 47 Postman test cases across every endpoint, checking normal submissions, empty or duplicate payloads, and unauthorized role tokens until all 47 passed ahead of the stakeholder demo.

**Phase 2: Field UAT with Technicians**
Five field technicians and two PLN supervisors tested the app over three days. Their feedback led to three direct fixes: splitting the long inspection form into two shorter steps, adding a "Save Draft" button for spotty signal areas, and bumping up form label font sizes so they're easier to read outdoors.`,
    },
    documentation: [
      { image: "/img/dashboardPLN.webp", caption: "Transformer Management Dashboard & Real-Time Status" },
      { image: "/img/backend.webp", caption: "Node.js REST API Architecture & MySQL Relational Mapping" },
      { image: "/img/documentation.webp", caption: "Field Testing & Monthly PDF Evaluation Reporting System" }
    ]
  },

  monetra: {
    title: "Monetra: Personal Finance Tracker",
    sections: {
      problem: `Most personal finance apps fall into one of two traps: either they bury you in accounting menus you don't need, or they act like a glorified notepad that tells you nothing about your spending habits.

Many lightweight trackers also feel sluggish. You log an expense, and the charts lag or wait for a full page reload before reflecting the new total.`,

      solution: `I built Monetra around fast input and instant visual feedback:

**Single-Screen Overview**
Shows your current balance, this month's spending, and your five most recent transactions without extra clutter.

**Custom Categories**
Lets you create, rename, and color-code your own spending categories instead of locking you into default presets.

**Live Chart.js Breakdowns**
A donut chart for category share and a bar chart for monthly spending trends; both redraw the moment you add or edit a transaction.

**Filtered CSV Exports**
Slice transactions by date range, category, or amount, then export the filtered list to CSV when you want to dig deeper in a spreadsheet.`,

      challenges: `**Challenge 1: Keeping 4 Views in Sync**
Adding a single expense has to update the running balance, the transaction list, the category summary, and both charts at the same time. I replaced early prop-drilling with a Zustand store using granular selectors so only the affected components re-render.

**Challenge 2: Chart.js Lag on Large Histories**
Chart.js re-renders the entire canvas when its dataset changes, which started stuttering once transaction history passed a few hundred entries. Moving the math into Zustand selector aggregations meant Chart.js only ever receives pre-summed totals instead of raw transaction arrays.

**Challenge 3: UI Drift Across Iterations**
Because I built the screens over several weeks, padding and shadow styles started drifting apart. Locking colors, spacing, and elevation tokens into the Tailwind config kept the components consistent.`,

      testing: `**Phase 1: Playwright Visual Regression**
I captured baseline screenshots of each component across 375px (mobile), 768px (tablet), and 1440px (desktop) viewports in Playwright, comparing new builds against those baselines to catch layout shifts early.

**Phase 2: End-to-End Flows**
I ran manual checks across the core user paths: onboarding from an empty account to logging a first expense, filtering a month's transactions and verifying the exported CSV math, and renaming a category to confirm every linked transaction updated across all views.

**Beta User Changes**
Four beta testers used the app across three feedback rounds. Their biggest complaint was the single-page "add transaction" form on mobile, so I rebuilt it into a three-step bottom sheet that's much easier to tap through with one thumb.`,
    },
    documentation: [
      { image: "/img/Analytics.webp", caption: "Monetra Main Dashboard & Chart.js Visualization" },
      { image: "/img/analytics2.webp", caption: "Expense Category Customization & Financial Analytics" }
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
  "3D & Hardware": ["Blender (3D Modeling)", "VR Environment", "IoT"],
};
