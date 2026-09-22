import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { FlippingWordSwap } from "./ui/FlippingWordSwap";
import { Halo } from "./ui/Halo";

const MEDIA_SRC = "/img/bg-01.png";

interface HeroProps {
  onExpanded: () => void;
}

export default function Hero({ onExpanded }: HeroProps) {
  const [progress, setProgressState] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const progressRef = useRef(0);
  const expandedFiredRef = useRef(false);

  const setProgress = useCallback(
    (val: number) => {
      const clamped = Math.max(0, Math.min(1, val));
      progressRef.current = clamped;
      setProgressState(clamped);

      if (clamped >= 1 && !expandedFiredRef.current) {
        expandedFiredRef.current = true;
        onExpanded();
      }
      if (clamped < 1) {
        expandedFiredRef.current = false;
      }
    },
    [onExpanded]
  );

  // Viewport size
  useEffect(() => {
    const update = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Wheel + touch scroll handlers
  useEffect(() => {
    let startY = 0;

    const handleWheel = (e: WheelEvent) => {
      const p = progressRef.current;
      if (p < 1 || (p === 1 && e.deltaY < 0 && window.scrollY <= 0)) {
        e.preventDefault();
        setProgress(p + e.deltaY * 0.0009);
        if (p < 1) window.scrollTo(0, 0);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      const p = progressRef.current;
      if (p < 1 || (p === 1 && deltaY < -20 && window.scrollY <= 0)) {
        e.preventDefault();
        const mult = deltaY > 0 ? 0.005 : 0.008;
        setProgress(p + deltaY * mult);
        startY = currentY;
        if (p < 1) window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [setProgress]);

  // Body overflow lock
  useEffect(() => {
    document.body.style.overflow = progress >= 1 ? "auto" : "hidden";
    document.body.style.overscrollBehavior = progress >= 1 ? "auto" : "none";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overscrollBehavior = "auto";
    };
  }, [progress]);

  // Derived values
  const isMobile = windowSize.width < 768;
  const mediaWidth = 300 + progress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + progress * (isMobile ? 200 : 400);
  const displayedH = Math.min(mediaHeight, windowSize.height * 0.85);
  const indicatorTop = windowSize.height / 2 + displayedH / 2 + 34;
  const bgScale = 1 + progress * 0.05;
  const mediaOverlay = 0.5 - progress * 0.28;
  const titleX = progress * (isMobile ? 180 : 150);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        height: "100dvh",
        background: "radial-gradient(130% 90% at 50% 8%, #170a22 0%, #0c0716 48%, #060410 80%, #030208 100%)"
      }}
    >
      {/* Background */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] md:w-full h-full z-0 pointer-events-none"
        animate={{ scale: bgScale }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
        <Halo variant="top" className="w-full h-full" />
      </motion.div>

      {/* White overlay fades in as progress increases */}
      <motion.div
        className="absolute inset-0 z-0 bg-white pointer-events-none"
        animate={{ opacity: progress }}
        transition={{ duration: 0.1, ease: "linear" }}
      />

      {/* Expanding media card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div
          className="relative rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
          style={{
            width: mediaWidth,
            height: mediaHeight,
            maxWidth: "95vw",
            maxHeight: "85vh",
          }}
        >
          <img
            src={MEDIA_SRC}
            alt="Portfolio hero"
            className="w-full h-full object-cover object-top block bg-black"
            draggable={false}
          />

          {/* Image overlay */}
          <motion.div
            className="absolute inset-0 bg-black pointer-events-none"
            animate={{ opacity: mediaOverlay }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>

      {/* Split title */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center gap-2 px-4 mix-blend-difference">
        <motion.div
          style={{ x: `-${titleX}vw`, fontFamily: "'Outfit', sans-serif" }}
          className="will-change-transform flex justify-center w-full"
        >
          <FlippingWordSwap
            word1="RIZKY"
            word2="CREATIVE"
            duration={400}
            stagger={44}
            className="text-purple-200 font-bold text-[clamp(2.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.06em] text-center uppercase"
          />
        </motion.div>
        <motion.div
          style={{ x: `${titleX}vw`, fontFamily: "'Outfit', sans-serif" }}
          className="will-change-transform flex justify-center w-full"
        >
          <FlippingWordSwap
            word1="NUGRAHA"
            word2="DESIGN"
            duration={400}
            stagger={44}
            className="text-purple-200 font-bold text-[clamp(2.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.06em] text-center uppercase"
          />
        </motion.div>
      </div>

      {/* Minimalist scroll indicator */}
      <motion.div
        animate={{
          opacity: progress > 0.16 ? 0 : 1,
          y: progress > 0.16 ? 12 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ top: indicatorTop }}
        className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center gap-3 text-purple-200"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.32em]">
          SCROLL
        </span>
        <div className="w-7 h-11 rounded-full border border-purple-200/50 p-1.5 flex justify-center">
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-purple-200"
          />
        </div>
      </motion.div>
    </section>
  );
}
