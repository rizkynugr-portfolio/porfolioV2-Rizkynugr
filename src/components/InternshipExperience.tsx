"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioStack } from "./ui/PortfolioStack";

const education = [
  {
    id: "ED",
    company: "Universitas Sebelas Maret",
    role: "Diploma 3 Teknik Informatika (Informatics Engineering)",
    period: "2023 — 2026",
    description: (
      <>
        Studied <strong>software engineering, modern web programming</strong>, data structures, and database structures by completing <strong>115 credits</strong> and achieving a <strong>3.61 GPA</strong>.
      </>
    ),
    tags: ["Software Engineering", "UI/UX", "VR Development", "Computer Science"],
    tasks: [
      <><strong>Final Project:</strong> Developed a <strong>Virtual Reality</strong> application to reconstruct 160 hidden relief panels of Borobudur Temple as an interactive digital historical preservation medium.</>,
      <><strong>Practical Projects:</strong> Developed more than 5 responsive full-stack application projects using <strong>React.js, Node.js, and RESTful APIs</strong> with comprehensive testing.</>,
      <><strong>Collaborative Activities:</strong> Collaborated in a technology research team and successfully won <strong>3rd Place nationally</strong> at the 9th Indonesian Vocational Olympiad (OLIVIA IX) in 2024 for the Digital & Creative Technology category.</>
    ],
    images: [
      { title: "VR Research", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop", alt: "VR Headset" },
      { title: "Software Engineering", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop", alt: "Coding on laptop" },
      { title: "Sebelas Maret University", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Gerbang_Depan_UNS_Universitas_Sebelas_Maret_Surakarta_03.jpg", alt: "University Campus" },
    ]
  }
];

const experiences = [
  {
    id: "01",
    company: "PT. Glace Digital Kreasi",
    role: "Application Developer Intern",
    period: "Jan 2026 — Feb 2026",
    description: (
      <>
        Responsible as the lead developer for the <strong>Aquafarm Kit V2</strong> project. Developed a digital aquaculture platform for fisheries data management and monitoring. Conducted comprehensive <strong>functional testing</strong> phases to ensure all application features worked according to the workflow before final release.
      </>
    ),
    tags: ["React", "Node.js", "Functional Testing", "Aquaculture Tech"],
    tasks: [
      <>Developed the <strong>frontend architecture</strong> using <strong>React</strong> with <strong>real-time</strong> data integration.</>,
      <>Redesigned the <strong>dashboard</strong> interface for monitoring water quality and pond conditions.</>,
      <>Conducted <strong>functional testing scenarios (UAT)</strong> to ensure system reliability before production.</>
    ],
    images: [
      { title: "Dashboard UI", image: "/img/aquaUI.png", alt: "Code on screen", objectFit: "cover" as const },
      { title: "Analytics", image: "/img/analytics2.png", alt: "Analytics dashboard", objectFit: "cover" as const },
      { title: "Testing", image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop", alt: "Workspace setup" },
    ]
  },
  {
    id: "02",
    company: "PLN UP3 Ponorogo",
    role: "Full-Stack Developer Intern",
    period: "Sep 2025 — Dec 2025",
    description: (
      <>
        Built and designed a transformer defect reporting system <strong>end-to-end</strong>. This project facilitated the <strong>digitalization of recording and evaluating electrical infrastructure</strong>, replacing manual workflows with a more efficient and centralized data management system.
      </>
    ),
    tags: ["Full-Stack", "End-to-End System", "Database Architecture", "UI/UX"],
    tasks: [
      <>Built an <strong>interactive REST API</strong> using <strong>Node.js and Express</strong> connected to a <strong>MySQL</strong> database.</>,
      <>Designed an <strong>efficient database schema</strong> to accommodate thousands of transformer defect records dynamically.</>,
      <>Created an <strong>automated PDF report generation system</strong> to simplify the monthly evaluation routines for field technicians.</>
    ],
    images: [
      { title: "System Dashboard", image: "/img/dashboardPLN.png", alt: "Database architecture", objectFit: "cover" as const },
      { title: "Documentation", image: "/img/documentation.jpeg", alt: "API endpoints", objectFit: "cover" as const },
      { title: "Testing", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop", alt: "Report document" },
    ]
  }
];


export default function InternshipExperience() {
  const [expandedEdu, setExpandedEdu] = useState<number | null>(0);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-6 md:px-16 py-24 md:py-32">
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
          <p className="text-base md:text-lg text-justify text-black/60 max-w-sm">
            Building solid digital solutions from architectural logic to user interface experiences.
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
                  onClick={() => setExpandedExp(isExpanded ? null : index)}
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
                            <p className="text-base md:text-lg leading-relaxed text-justify text-black/70">
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
                                  <span className="leading-relaxed text-[15px] md:text-[1.05rem] text-justify tracking-[-0.01em]">{task}</span>
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
                  onClick={() => setExpandedEdu(isExpanded ? null : index)}
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
                            <p className="text-base md:text-lg leading-relaxed text-justify text-black/70">
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
                                  <span className="leading-relaxed text-[15px] md:text-[1.05rem] text-justify tracking-[-0.01em]">{task}</span>
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
