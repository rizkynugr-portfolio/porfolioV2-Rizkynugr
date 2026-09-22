import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "../data/portfolio";

interface CaseStudyProps {
  projectId: string | null;
  onClose: () => void;
}

function renderContent(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    // Bold heading lines: **Title**
    if (/^\*\*[^*]+\*\*$/.test(line.trim())) {
      return (
        <p
          key={i}
          className="text-base font-semibold text-black mt-7 mb-2"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {line.replace(/\*\*/g, "")}
        </p>
      );
    }

    // Bullet lines starting with •
    if (line.startsWith("•")) {
      const content = line.slice(1).trim();
      return (
        <div key={i} className="flex gap-3 mb-2">
          <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
          <p className="text-[15px] leading-7 text-black/65">{content}</p>
        </div>
      );
    }

    // Empty line → small gap
    if (line.trim() === "") {
      return <div key={i} className="h-2" />;
    }

    // Inline bold: **text** inside a line
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-[15px] leading-7 text-black/65 mb-1">
        {parts.map((part, j) =>
          /^\*\*[^*]+\*\*$/.test(part) ? (
            <strong key={j} className="text-black font-semibold">
              {part.replace(/\*\*/g, "")}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
}

const sectionLabels = [
  { key: "problem", label: "01 · Problem Statement" },
  { key: "solution", label: "02 · Design Solution" },
  { key: "challenges", label: "03 · Technical Challenges" },
  { key: "testing", label: "04 · Testing Phase" },
];

export default function CaseStudy({ projectId, onClose }: CaseStudyProps) {
  const data = projectId ? caseStudies[projectId] : null;

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Body overflow
  useEffect(() => {
    if (data) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [data]);

  return (
    <AnimatePresence>
      {data && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/55 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 48 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-[201] bg-white overflow-y-auto"
            style={{
              top: 0,
              width: "100%",
            }}
          >
            {/* Header / Nav */}
            <div
              className="sticky top-0 z-10 w-full"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="max-w-[860px] mx-auto flex items-center justify-between px-6 md:px-12 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-black/40">
                  Case Study Documentation
                </p>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 13 13"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1l11 11M12 1L1 12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content Container */}
            <div className="max-w-[860px] mx-auto px-6 md:px-12 pt-16 pb-24">
              <h2
                className="text-3xl md:text-[2.6rem] font-bold tracking-[-0.04em] text-black mb-14 leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {data.title}
              </h2>

              <div className="space-y-14">
                {sectionLabels.map(({ key, label }) => (
                  <div key={key}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-600 mb-4">
                      {label}
                    </p>
                    <div>
                      {renderContent(
                        data.sections[key as keyof typeof data.sections]
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Documentation / Gallery */}
              {data.documentation && data.documentation.length > 0 && (
                <div className="mt-20">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-600 mb-8">
                    05 · Project Documentation
                  </p>
                  <div className="flex flex-col gap-12">
                    {data.documentation.map((doc, idx) => (
                      <figure key={idx} className="flex flex-col gap-4">
                        <div className="w-full bg-black/5 rounded-2xl overflow-hidden border border-black/5">
                          <img 
                            src={doc.image} 
                            alt={doc.caption} 
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="text-sm text-center text-black/50 font-medium">
                          {doc.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer action */}
              <div className="mt-24 pt-10 border-t border-black/6 flex justify-center md:justify-start">
                <button
                  onClick={onClose}
                  className="px-8 py-4 rounded-full text-[15px] font-semibold bg-black text-white hover:bg-black/80 transition-colors shadow-lg shadow-black/10 hover:shadow-black/20"
                >
                  ← Back to Main Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
