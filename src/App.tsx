import { useState, lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import InternshipExperience from "./components/InternshipExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Code-split below-the-fold and modal components
const Certificates = lazy(() => import("./components/Certificates"));
const CaseStudy = lazy(() => import("./components/CaseStudy"));
const HoverImageLinks = lazy(() =>
  import("./components/ui/HoverImageLinks").then((m) => ({ default: m.HoverImageLinks }))
);
const MagneticDeck = lazy(() =>
  import("./components/ui/MagneticDeck").then((m) => ({ default: m.MagneticDeck }))
);

export default function App() {
  const [heroExpanded, setHeroExpanded] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  return (
    <>
      {/* Floating navbar — appears after hero is fully expanded */}
      <Navbar isVisible={heroExpanded} />

      {/* 1. Cinematic scroll-expand hero */}
      <Hero onExpanded={() => setHeroExpanded(true)} />

      {/* 2. About */}
      <About />

      {/* 3. Internship Experience */}
      <InternshipExperience />

      {/* 4. Projects + Case Study trigger */}
      <Projects onOpenCaseStudy={setActiveCaseStudy} />

      {/* 5. Certificates & Awards (Lazy loaded) */}
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <Certificates />
      </Suspense>

      {/* 6. Hover Image Links (Lazy loaded) */}
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <HoverImageLinks />
      </Suspense>

      {/* 7. Tech Stack Magnetic Deck (Lazy loaded) */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <MagneticDeck />
      </Suspense>

      {/* 8. Contact & Footer */}
      <Contact />

      {/* Case Study modal — loaded on demand */}
      {activeCaseStudy && (
        <Suspense fallback={null}>
          <CaseStudy
            projectId={activeCaseStudy}
            onClose={() => setActiveCaseStudy(null)}
          />
        </Suspense>
      )}

      {/* Toast notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1c1c1c",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.09)",
            fontSize: "13px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: { primary: "#a78bfa", secondary: "#1c1c1c" },
          },
          error: {
            iconTheme: { primary: "#f87171", secondary: "#1c1c1c" },
          },
        }}
      />
    </>
  );
}
