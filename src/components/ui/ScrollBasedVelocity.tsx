import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ScrollBasedVelocityProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

export function ScrollBasedVelocity({
  text,
  default_velocity = 2,
  className = "",
}: ScrollBasedVelocityProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // We wrap between -50% and 0%.
  // The content inside the motion div must be identical in its first half and second half.
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * default_velocity * (delta / 1000);

    // Change direction based on scroll direction
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    // Add velocity boost when scrolling
    moveBy = moveBy * (1 + Math.abs(velocityFactor.get()));
    baseX.set(baseX.get() + moveBy);
  });

  const spanClass = `block pr-12 ${className}`;

  // We use two identical flex blocks so that when x reaches -50%, it seamlessly wraps to 0%.
  return (
    <div className="relative flex flex-nowrap overflow-hidden w-full max-w-[100vw] py-8 leading-none select-none">
      <motion.div className="flex flex-nowrap whitespace-nowrap" style={{ x }}>
        {/* First Half */}
        <div className="flex shrink-0">
          <span className={spanClass}>{text}</span>
          <span className={spanClass}>{text}</span>
          <span className={spanClass}>{text}</span>
          <span className={spanClass}>{text}</span>
        </div>
        {/* Second Half (Clone of the first half) */}
        <div className="flex shrink-0">
          <span className={spanClass}>{text}</span>
          <span className={spanClass}>{text}</span>
          <span className={spanClass}>{text}</span>
          <span className={spanClass}>{text}</span>
        </div>
      </motion.div>
    </div>
  );
}
