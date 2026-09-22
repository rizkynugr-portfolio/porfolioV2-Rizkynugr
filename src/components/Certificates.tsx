"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    id: "C1",
    company: "Meta",
    role: "React Native",
    period: "2025",
    description: (
      <>
        Certification of expertise in building interactive web interfaces that are <strong>responsive and optimized</strong> using the latest industry standards.
      </>
    ),
    tags: ["Frontend", "Web Development", "Meta"],
    tasks: [
      <>Mastered the fundamentals of web programming with <strong>HTML, CSS, and JavaScript</strong>.</>,
      <>Built web applications using <strong>React.js</strong> with good state management.</>,
      <>Implemented best practices in <strong>web accessibility and performance</strong>.</>
    ],
    images: [
      { title: "Certificate", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop", alt: "Certificate" }
    ]
  },
  {
    id: "C2",
    company: "Meta",
    role: "The Full Stack",
    period: "2023",
    description: (
      <>
        Comprehensive specialization in user research, wireframing, and <strong>interactive prototyping</strong>.
      </>
    ),
    tags: ["UI/UX", "Figma", "Research", "Design"],
    tasks: [
      <>Conducted <strong>user research</strong> to understand audience needs and behaviors.</>,
      <>Designed high-fidelity <strong>wireframes and interactive prototypes</strong> using Figma.</>,
      <>Executed <strong>usability testing</strong> to validate workflows and design functionality.</>
    ],
    images: [
      { title: "Certificate", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop", alt: "Certificate" }
    ]
  }
];

export default function Certificates() {
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  return (
    <section id="certificates" className="w-full bg-white px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-black/45 mb-4">
              Professional Growth
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
              Certificates & <br className="hidden md:block" /> Awards.
            </h2>
          </div>
          <p className="text-base md:text-lg text-justify text-black/60 max-w-sm">
            A track record of achievements, skill certifications, and awards that validate professional competence.
          </p>
        </div>

        {/* Certificates List */}
        <div className="flex flex-col border-t border-black/10">
          {certificates.map((cert, index) => {
            const isExpanded = expandedCert === index;

            return (
              <div
                key={cert.id}
                className="group border-b border-black/10 flex flex-col"
              >
                {/* Clickable Header */}
                <button
                  onClick={() => setExpandedCert(isExpanded ? null : index)}
                  className="w-full flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 text-left cursor-pointer transition-colors hover:bg-black/[0.02]"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto">
                    <span className="text-sm font-medium text-black/30 w-8">
                      {cert.id}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                      {cert.company}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-12 ml-14 md:ml-0">
                    <span className="text-lg md:text-xl font-medium text-black">
                      {cert.role}
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
                              Year
                            </p>
                            <p className="text-black/80 font-medium">{cert.period}</p>
                          </div>

                          <div className="md:col-span-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">
                              Certification Overview
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-justify text-black/70">
                              {cert.description}
                            </p>
                          </div>

                          <div className="md:col-span-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-3">
                              Focus Area
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {cert.tags.map((tag, i) => (
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

                        {/* Tasks and Credentials */}
                        <div className="border-t border-black/5 pt-10">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-4">
                            Skills & Competencies
                          </p>
                          <ul className="space-y-4 mb-10">
                            {cert.tasks.map((task, i) => (
                              <li key={i} className="flex items-start gap-3.5 text-black/75">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                                <span className="leading-relaxed text-[15px] md:text-[1.05rem] text-justify tracking-[-0.01em]">{task}</span>
                              </li>
                            ))}
                          </ul>

                          <a
                            href="https://coursera.org/share/4eb3b138e0a325b78ff57153663ec506"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-[15px] font-medium hover:bg-black/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                          >
                            Show Credentials
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                          </a>
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
