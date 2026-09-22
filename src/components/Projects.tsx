import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects, type Project } from "../data/portfolio";
import { HoverTransition } from "./ui/HoverTransition";

interface ProjectsProps {
  onOpenCaseStudy: (id: string) => void;
}

// ─── Default card (cream/beige state) ─────────────────────────────────────────
function DefaultCard({ project }: { project: Project }) {
  return (
    <article 
      className="relative flex h-full flex-col overflow-hidden text-[#151515] group"
      style={{ background: "#ece9e1" }}
    >
      {/* 2/3 Image Area */}
      <div className="relative h-2/3 w-full overflow-hidden bg-black/5">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            draggable={false}
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center font-semibold tracking-[-0.08em] text-black/[0.055] select-none pointer-events-none"
            style={{ fontSize: "clamp(5rem, 12vw, 9rem)" }}
          >
            {project.monogram}
          </div>
        )}
        
        {/* Role label badge floating on image */}
        <span className="absolute top-5 left-5 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.16em] text-black/70 shadow-sm z-10">
          {project.role}
        </span>
      </div>

      {/* 1/3 Bottom content */}
      <div className="relative z-10 h-1/3 p-5 sm:p-6 flex flex-col justify-center border-t border-black/5 bg-white/40">
        <h3
          className="text-xl font-bold tracking-tight leading-snug mb-1.5 line-clamp-2"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {project.title}
        </h3>
        <p className="text-sm font-medium text-black/55 line-clamp-1">{project.tagline}</p>
      </div>
    </article>
  );
}

// ─── Hover card (accent colour state) ─────────────────────────────────────────
function HoverCard({
  project,
  onOpenCaseStudy,
}: {
  project: Project;
  onOpenCaseStudy: (id: string) => void;
}) {
  return (
    <article
      className="flex h-full flex-col justify-between p-6"
      style={{ background: project.accentColor, color: "#111" }}
    >
      {/* Description */}
      <p
        className="text-[1.05rem] font-medium leading-snug tracking-[-0.025em]"
        style={{ maxWidth: "24ch" }}
      >
        {project.highlight}
      </p>

      {/* Bottom row */}
      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/[0.08]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between gap-2">
          <div>
            <p
              className="font-bold text-base tracking-[-0.03em]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {project.title}
            </p>
            <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-black/55">
              {project.period}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
                title="View Source on GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.hasCaseStudy && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCaseStudy(project.id);
                }}
                className="flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold bg-black text-white hover:bg-black/80 transition-colors whitespace-nowrap"
              >
                Case Study →
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Projects({ onOpenCaseStudy }: ProjectsProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full py-24 md:py-36 px-6 md:px-12 lg:px-24"
      style={{ background: "#f7f7f7" }}
    >
      {/* Anchor for navbar "Case Studies" link */}
      <span
        id="case-studies"
        className="block"
        style={{ marginTop: -80, paddingTop: 80 }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-black/38 mb-4">
            Projects & Experience
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-[-0.04em] text-black max-w-2xl leading-[1.05]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Crafted with precision.
          </h2>
        </motion.div>

        {/* Grouped Cards */}
        <div className="flex flex-col gap-16 md:gap-24">
          {Object.entries(groupedProjects).map(([category, projs], groupIdx) => (
            <div key={category}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <h3 
                  className="text-xl md:text-2xl font-bold tracking-tight text-black" 
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {category}
                </h3>
                <div className="flex-1 h-px bg-black/10" />
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {projs.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.55,
                      delay: groupIdx * 0.15 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="aspect-[4/5]"
                  >
                    <HoverTransition
                      effect="wipe"
                      direction="right"
                      duration={0.72}
                      defaultComponent={<DefaultCard project={project} />}
                      hoverComponent={
                        <HoverCard
                          project={project}
                          onOpenCaseStudy={onOpenCaseStudy}
                        />
                      }
                      className="w-full h-full rounded-3xl overflow-hidden"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
