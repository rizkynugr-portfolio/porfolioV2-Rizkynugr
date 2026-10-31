"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioStack } from "./ui/PortfolioStack";

const education = [
  {
    id: "ED",
    company: "Universitas Sebelas Maret",
    role: "Associate of Informatics Engineering",
    period: "Aug 2023 – Jul 2026",
    description: (
      <>
        Completed <strong>115 credits</strong> with a <strong>3.61 GPA</strong>, focusing on <strong>full-stack web development</strong>, data structures, relational databases, and real-time 3D rendering.
      </>
    ),
    tags: ["Software Engineering", "UI/UX", "VR Development", "Computer Science"],
    tasks: [
      <><strong>Final Project:</strong> Reconstructed 160 hidden Karmavibhanga relief panels at Borobudur Temple in Blender and built a <strong>Virtual Reality</strong> walk-through around them.</>,
      <><strong>Coursework & Labs:</strong> Shipped 5+ full-stack web apps using <strong>React.js, Node.js, and REST APIs</strong>, backed by Postman and end-to-end test suites.</>,
      <><strong>Competition:</strong> Won <strong>3rd Place nationally</strong> at the 9th Indonesian Vocational Olympiad (OLIVIA IX) in 2024 in the Digital & Creative Technology category.</>
    ],
    images: [
      { title: "VR Research", image: "/img/relief2.webp", alt: "VR Headset" },
      { title: "Software Engineering", image: "/img/backend.webp", alt: "Coding on laptop" },
      { title: "Sebelas Maret University", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Gerbang_Depan_UNS_Universitas_Sebelas_Maret_Surakarta_03.jpg", alt: "University Campus" },
    ]
  }
];

const experiences = [
  {
    id: "01",
    company: "PT. Glace Kreasi Digital",
    role: "Frontend Developer Intern",
    period: "Jan 2026 – Feb 2026",
    description: (
      <>
        Led frontend development on <strong>Aquafarm Kit V2</strong>, a web dashboard that tracks pond water quality sensors and fisheries records, then ran functional testing across every user flow before release.
      </>
    ),
    tags: ["React", "Node.js", "Functional Testing", "Aquaculture Tech"],
    tasks: [
      <>Built the <strong>React frontend</strong> and wired it up to live sensor streams.</>,
      <>Redesigned the <strong>monitoring dashboard</strong> so pond operators can check water parameters at a glance.</>,
      <>Ran <strong>UAT scenarios</strong> against the staging build to catch edge-case bugs before production.</>
    ],
    images: [
      { title: "Dashboard UI", image: "/img/aquaUI.webp", alt: "Code on screen", objectFit: "cover" as const },
      { title: "Analytics", image: "/img/analytics2.webp", alt: "Analytics dashboard", objectFit: "cover" as const },
      { title: "Testing", image: "/img/Analytics.webp", alt: "Analytics & testing overview", objectFit: "cover" as const },
    ]
  },
  {
    id: "02",
    company: "PT. PLN (Persero)",
    role: "Fullstack Developer Intern",
    period: "Sep 2025 – Dec 2025",
    description: (
      <>
        Designed and built an internal web application for PLN UP3 Ponorogo that replaced paper defect sheets and disconnected Excel files with a single MySQL-backed reporting system.
      </>
    ),
    tags: ["Full-Stack", "End-to-End System", "Database Architecture", "UI/UX"],
    tasks: [
      <>Built the <strong>Node.js and Express REST API</strong> with JWT role permissions for technicians, supervisors, and admins.</>,
      <>Structured the <strong>MySQL schema</strong> and wrote a migration script to import historical spreadsheet records.</>,
      <>Added <strong>one-click PDF report generation</strong> so monthly evaluations take seconds instead of hours.</>
    ],
    images: [
      { title: "System Dashboard", image: "/img/dashboardPLN.webp", alt: "Database architecture", objectFit: "cover" as const },
      { title: "Documentation", image: "/img/documentation.webp", alt: "API endpoints", objectFit: "cover" as const },
      { title: "Backend Schema", image: "/img/backend.webp", alt: "Backend system architecture", objectFit: "cover" as const },
    ]
  }
];


export default function InternshipExperience() {
  const [expandedEdu, setExpandedEdu] = useState<number | null>(0);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  return (
    <section id="experience" className="w-full bg-white px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-black/45 mb-4">
              Career & Education
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
              Experience & <br className="hidden md:block" /> Education.
            </h2>
          </div>
          <p className="text-base md:text-lg text-left text-black/60 max-w-sm">
            Where I've interned, what I shipped there, and what I studied at UNS.
          </p>
        </div>

        {/* Experience List */}
        <div className="flex flex-col border-t border-black/10 mb-20">
          {experiences.map((exp, index) => {
            const isExpanded = expandedExp === index;

            return (
              <div
                key={exp.id}
                className="group border-b border-black/10 flex flex-col"
              >
                {/* Clickable Header */}
                <button
                  id={`exp-btn-${exp.id}`}
                  onClick={() => setExpandedExp(isExpanded ? null : index)}
                  aria-expanded={isExpanded}
                  aria-controls={`exp-panel-${exp.id}`}
                  className="w-full flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 text-left cursor-pointer transition-colors hover:bg-black/[0.02]"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                    <span className="text-sm font-medium text-black/30 w-8">
                      {exp.id}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-12 ml-14 md:ml-0">
                    <span className="text-lg md:text-xl font-medium text-black">
                      {exp.role}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      className="hidden md:flex w-8 h-8 rounded-full border border-black/20 items-center justify-center text-xl"
                    >
                      +
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`exp-panel-${exp.id}`}
                      role="region"
                      aria-labelledby={`exp-btn-${exp.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-14 md:pl-[5.5rem] pr-4 md:pr-0">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              Period
                            </p>
                            <p className="text-black/80 font-medium">{exp.period}</p>
                          </div>

                          <div className="md:col-span-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              Role Description
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-left text-black/70">
                              {exp.description}
                            </p>
                          </div>

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
                              Focus Area
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs font-medium border border-black/10 rounded-full text-black/70"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* Tasks and Image */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-t border-black/5 pt-10">
                          <div className="md:col-span-6 lg:col-span-7">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-4">
                              Key Responsibilities
                            </p>
                            <ul className="space-y-4">
                              {exp.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-3.5 text-black/75">
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                                  <span className="leading-relaxed text-[15px] md:text-[1.05rem] text-left tracking-[-0.01em]">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="md:col-span-6 lg:col-span-5 h-[300px] md:h-[380px] lg:h-[420px] flex items-center justify-center relative -mt-4 md:-mt-8">
                            <div className="w-full h-full transform md:scale-105 lg:scale-110 z-10 hover:z-20">
                              <PortfolioStack items={exp.images} />
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Education List */}
        <div className="flex flex-col border-t border-black/10">
          {education.map((edu, index) => {
            const isExpanded = expandedEdu === index;

            return (
              <div
                key={edu.id}
                className="group border-b border-black/10 flex flex-col"
              >
                {/* Clickable Header */}
                <button
                  id={`edu-btn-${edu.id}`}
                  onClick={() => setExpandedEdu(isExpanded ? null : index)}
                  aria-expanded={isExpanded}
                  aria-controls={`edu-panel-${edu.id}`}
                  className="w-full flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 text-left cursor-pointer transition-colors hover:bg-black/[0.02]"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                    <span className="text-sm font-medium text-black/30 w-8">
                      {edu.id}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                      {edu.company}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-12 ml-14 md:ml-0">
                    <span className="text-lg md:text-xl font-medium text-black">
                      {edu.role}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      className="hidden md:flex w-8 h-8 rounded-full border border-black/20 items-center justify-center text-xl"
                    >
                      +
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`edu-panel-${edu.id}`}
                      role="region"
                      aria-labelledby={`edu-btn-${edu.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-14 md:pl-[5.5rem] pr-4 md:pr-0">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              Period
                            </p>
                            <p className="text-black/80 font-medium">{edu.period}</p>
                          </div>

                          <div className="md:col-span-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              Degree Overview
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-left text-black/70">
                              {edu.description}
                            </p>
                          </div>

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
                              Focus Area
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {edu.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-xs font-medium border border-black/10 rounded-full text-black/70"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* Tasks and Image */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-t border-black/5 pt-10">
                          <div className="md:col-span-6 lg:col-span-7">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-4">
                              Academic Highlights
                            </p>
                            <ul className="space-y-4">
                              {edu.tasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-3.5 text-black/75">
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                                  <span className="leading-relaxed text-[15px] md:text-[1.05rem] text-left tracking-[-0.01em]">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="md:col-span-6 lg:col-span-5 h-[300px] md:h-[380px] lg:h-[420px] flex items-center justify-center relative -mt-4 md:-mt-8">
                            <div className="w-full h-full transform md:scale-105 lg:scale-110 z-10 hover:z-20">
                              <PortfolioStack items={edu.images} />
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
