import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import InternshipExperience from "./components/InternshipExperience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import { HoverImageLinks } from "./components/ui/HoverImageLinks";
import { MagneticDeck } from "./components/ui/MagneticDeck";

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

      {/* 5. Certificates & Awards */}
      <Certificates />

      {/* 6. Hover Image Links (Navigation before footer) */}
      <HoverImageLinks />

      {/* Tech Stack Magnetic Deck */}
      <MagneticDeck />

      {/* 6. Contact & Footer */}
      <Contact />

      {/* Case Study modal — rendered at root level */}
      <CaseStudy
        projectId={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />

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
