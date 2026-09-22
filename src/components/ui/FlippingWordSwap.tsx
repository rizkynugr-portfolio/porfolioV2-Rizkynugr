import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlippingWordSwapProps {
  word1: string;
  word2: string;
  duration?: number;
  stagger?: number;
  className?: string;
  toClassName?: string;
  style?: React.CSSProperties;
}

export function FlippingWordSwap({
  word1,
  word2,
  duration = 400,
  stagger = 44,
  className = "",
  toClassName = "",
  style,
}: FlippingWordSwapProps) {
  const [showWord1, setShowWord1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWord1((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const d = duration / 1000;
  const s = stagger / 1000;

  return (
    <div
      className="relative inline-grid place-items-center"
      style={{ ...style, perspective: "1000px" }}
    >
      {/* Invisible placeholders to maintain layout size based on the largest word */}
      <span
        className={`invisible whitespace-pre col-start-1 row-start-1 ${className}`}
      >
        {word1}
      </span>
      <span
        className={`invisible whitespace-pre col-start-1 row-start-1 ${
          toClassName || className
        }`}
      >
        {word2}
      </span>

      <div className="col-start-1 row-start-1 flex justify-center items-center pointer-events-none">
        <AnimatePresence>
          {showWord1 ? (
            <motion.div
              key="word1"
              className={`absolute flex ${className}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: { transition: { staggerChildren: s } },
                exit: {
                  transition: { staggerChildren: s, staggerDirection: -1 },
                },
              }}
            >
              {word1.split("").map((char, i) => (
                <motion.span
                  key={`w1-${i}`}
                  className="inline-block whitespace-pre"
                  style={{ transformStyle: "preserve-3d" }}
                  variants={{
                    hidden: { rotateX: -90, opacity: 0, y: 15 },
                    visible: {
                      rotateX: 0,
                      opacity: 1,
                      y: 0,
                      transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
                    },
                    exit: {
                      rotateX: 90,
                      opacity: 0,
                      y: -15,
                      transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="word2"
              className={`absolute flex ${toClassName || className}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: { transition: { staggerChildren: s } },
                exit: {
                  transition: { staggerChildren: s, staggerDirection: -1 },
                },
              }}
            >
              {word2.split("").map((char, i) => (
                <motion.span
                  key={`w2-${i}`}
                  className="inline-block whitespace-pre"
                  style={{ transformStyle: "preserve-3d" }}
                  variants={{
                    hidden: { rotateX: -90, opacity: 0, y: 15 },
                    visible: {
                      rotateX: 0,
                      opacity: 1,
                      y: 0,
                      transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
                    },
                    exit: {
                      rotateX: 90,
                      opacity: 0,
                      y: -15,
                      transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
