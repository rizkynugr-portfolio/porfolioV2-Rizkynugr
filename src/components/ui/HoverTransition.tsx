import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface HoverTransitionProps {
  defaultComponent: ReactNode;
  hoverComponent: ReactNode;
  effect?: "wipe";
  direction?: "right" | "left" | "top" | "bottom";
  duration?: number;
  className?: string;
}

/**
 * Dual clip-path wipe:
 * Both cards are clipped simultaneously so there is NEVER a gap
 * where the default card text shows through.
 *
 * For direction "right" (hover enters from the right edge):
 *   - Hover card:   inset(0 0 0 100%) → inset(0 0 0 0%)   [left edge expands rightward]
 *   - Default card: inset(0 0%  0 0)  → inset(0 100% 0 0)  [right edge collapses leftward]
 *
 * The two clip regions share the same moving divider, so together
 * they always fill the full card area — no bleed, no gap.
 */

type ClipPair = { hover: [string, string]; def: [string, string] };

const CLIPS: Record<string, ClipPair> = {
  //                  [hidden,               visible]          [visible,              hidden]
  right:  { hover: ["inset(0 0 0 100%)",  "inset(0 0 0 0%)"],   def: ["inset(0 0%  0 0)", "inset(0 100% 0 0)"] },
  left:   { hover: ["inset(0 100% 0 0)",  "inset(0 0% 0 0%)"],  def: ["inset(0 0 0 0%)",  "inset(0 0 0 100%)"] },
  top:    { hover: ["inset(100% 0 0 0)",  "inset(0 0 0 0)"],    def: ["inset(0 0 0 0)",   "inset(0 0 100% 0)"] },
  bottom: { hover: ["inset(0 0 100% 0)",  "inset(0 0 0 0)"],    def: ["inset(0 0 0 0)",   "inset(100% 0 0 0)"] },
};

export function HoverTransition({
  defaultComponent,
  hoverComponent,
  direction = "right",
  duration = 0.68,
  className = "",
}: HoverTransitionProps) {
  const [hovered, setHovered] = useState(false);
  const clip = CLIPS[direction];

  return (
    <div
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Default card — clips OUT as hover wipes IN */}
      <motion.div
        className="h-full w-full"
        style={{ willChange: "clip-path" }}
        animate={{ clipPath: hovered ? clip.def[1] : clip.def[0] }}
        transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
      >
        {defaultComponent}
      </motion.div>

      {/* Hover card — clips IN simultaneously */}
      <motion.div
        className="absolute inset-0"
        style={{ willChange: "clip-path" }}
        animate={{ clipPath: hovered ? clip.hover[1] : clip.hover[0] }}
        transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
      >
        {hoverComponent}
      </motion.div>
    </div>
  );
}
