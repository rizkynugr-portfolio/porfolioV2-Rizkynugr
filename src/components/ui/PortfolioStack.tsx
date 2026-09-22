import React, { useCallback, useEffect, useRef, useState } from "react";

const makeSpring = (value = 0) => ({ value, velocity: 0, target: value });

function advanceSpring(spring: any, dt: number, stiffness: number, damping: number, reduceMotion: boolean) {
  if (reduceMotion) {
    spring.value = spring.target;
    spring.velocity = 0;
    return;
  }

  const force =
    (spring.target - spring.value) * stiffness -
    spring.velocity * damping;
  spring.velocity += force * dt;
  spring.value += spring.velocity * dt;
}

interface PortfolioItem {
  title: string;
  image: string;
  alt: string;
  objectFit?: React.CSSProperties["objectFit"];
}

export function PortfolioStack({ items }: { items: PortfolioItem[] }) {
  const deckRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeRef = useRef(-1);
  const coarsePointerRef = useRef(false);
  const reduceMotionRef = useRef(false);
  const spread = useRef(makeSpring(0));
  const tiltX = useRef(makeSpring(0));
  const tiltY = useRef(makeSpring(0));
  const lifts = useRef(items.map(() => makeSpring(0)));
  const [activeIndex, setActiveIndex] = useState(-1);

  const activate = useCallback((index: number) => {
    activeRef.current = index;
    setActiveIndex(index);
    lifts.current.forEach((spring, i) => {
      spring.target = i === index ? 1 : 0;
    });
  }, []);

  const openDeck = useCallback(() => {
    spread.current.target = 1;
  }, []);

  const closeDeck = useCallback(() => {
    spread.current.target = 0;
    tiltX.current.target = 0;
    tiltY.current.target = 0;
    activate(-1);
  }, [activate]);

  useEffect(() => {
    coarsePointerRef.current = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let frameId: number;
    let previousTime = performance.now();

    const renderFrame = (time: number) => {
      const dt = Math.min((time - previousTime) / 1000, 0.032);
      previousTime = time;

      advanceSpring(spread.current, dt, 145, 21, reduceMotionRef.current);
      advanceSpring(tiltX.current, dt, 110, 19, reduceMotionRef.current);
      advanceSpring(tiltY.current, dt, 110, 19, reduceMotionRef.current);
      lifts.current.forEach((spring) =>
        advanceSpring(spring, dt, 210, 25, reduceMotionRef.current)
      );

      const p = spread.current.value;
      const xTilt = tiltX.current.value;
      const yTilt = tiltY.current.value;

      if (deckRef.current) {
        deckRef.current.style.transform =
          `rotateX(${yTilt.toFixed(3)}deg) ` +
          `rotateY(${xTilt.toFixed(3)}deg)`;
      }

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const lift = lifts.current[index].value;
        const closedY = -index * 10.5;
        const openX = [-34, 0, 34][index % 3] || 0; // Handle arbitrary sizes, safely wrap
        const openZ = [24, 0, -24][index % 3] || 0;
        const x = openX * p;
        const y = closedY * (1 - p) - 8 * p - lift * 26;
        const z = -index * 9 * (1 - p) + openZ * p + lift * 38;
        const rotateY = (-47 + index * 0.7) * p + xTilt * 0.18;
        const rotateX = yTilt * 0.12;
        const rotateZ = (-5 + index * 0.25) * p;
        const scale = 1 + lift * 0.018;
        const brightness = 1 - index * 0.035 * (1 - p) + lift * 0.025;

        card.style.zIndex = String(
          activeRef.current === index ? 100 : 30 - index * 10
        );
        card.style.filter = `brightness(${brightness.toFixed(3)})`;
        card.style.transform =
          `translate3d(calc(-50% + ${x.toFixed(3)}%), ` +
          `calc(-50% + ${y.toFixed(3)}%), ${z.toFixed(3)}px) ` +
          `rotateX(${rotateX.toFixed(3)}deg) ` +
          `rotateY(${rotateY.toFixed(3)}deg) ` +
          `rotateZ(${rotateZ.toFixed(3)}deg) ` +
          `scale(${scale.toFixed(4)})`;
      });

      frameId = requestAnimationFrame(renderFrame);
    };

    frameId = requestAnimationFrame(renderFrame);
    return () => cancelAnimationFrame(frameId);
  }, [items]);

  const handleDeckEnter = () => {
    if (!coarsePointerRef.current) openDeck();
  };

  const handleDeckLeave = () => {
    if (!coarsePointerRef.current) closeDeck();
  };

  const handleDeckMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (coarsePointerRef.current || !deckRef.current) return;
    const rect = deckRef.current.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    tiltX.current.target = normalizedX * 1.7;
    tiltY.current.target = -normalizedY * 1.1;
  };

  const handleScenePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (!coarsePointerRef.current) return;

    const card = (event.target as HTMLElement).closest("[data-card-index]") as HTMLElement;
    if (!card) {
      closeDeck();
      return;
    }

    const index = Number(card.dataset.cardIndex);
    if (spread.current.target < 0.5) {
      openDeck();
      activate(index);
    } else if (activeRef.current === index) {
      closeDeck();
    } else {
      activate(index);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div
        className="portfolio-stack-scene"
        aria-label="Interactive visual collection"
        onPointerDown={handleScenePointerDown}
      >
        <div
          ref={deckRef}
          className="portfolio-stack-deck"
          onPointerEnter={handleDeckEnter}
          onPointerLeave={handleDeckLeave}
          onPointerMove={handleDeckMove}
        >
          {items.map((project, index) => (
            <button
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={`portfolio-stack-card${
                activeIndex === index ? " is-active" : ""
              }`}
              type="button"
              data-card-index={index}
              aria-label={`Open ${project.title.replace(/^\d+\s/, "")}`}
              aria-pressed={activeIndex === index}
              key={project.title}
              onPointerEnter={() => {
                if (!coarsePointerRef.current) activate(index);
              }}
              onPointerLeave={() => {
                if (!coarsePointerRef.current) activate(-1);
              }}
              onFocus={() => {
                openDeck();
                activate(index);
              }}
              onBlur={() => activate(-1)}
              onClick={(event) => {
                if (coarsePointerRef.current) event.preventDefault();
                else activate(index);
              }}
            >
              <img
                src={project.image}
                alt={project.alt}
                draggable="false"
                decoding="async"
                style={{ objectFit: project.objectFit }}
              />
              <span className="portfolio-stack-tag">{project.title}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

const styles = `
  .portfolio-stack-scene {
    --card-w: clamp(9rem, 30vw, 14.4rem);
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 250px;
    display: grid;
    place-items: center;
    overflow: visible;
    perspective: 900px;
    perspective-origin: 50% 46%;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
    isolation: isolate;
  }

  .portfolio-stack-deck {
    position: relative;
    width: calc(var(--card-w) * 1.9);
    height: calc(var(--card-w) * 1.5);
    transform-style: preserve-3d;
    will-change: transform;
  }

  .portfolio-stack-card {
    appearance: none;
    position: absolute;
    left: 50%;
    top: 50%;
    width: var(--card-w);
    aspect-ratio: 4 / 3;
    margin: 0;
    padding: 0;
    overflow: visible;
    border: 0;
    border-radius: clamp(0.45rem, 1.25vw, 0.72rem);
    background: #161616;
    box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    will-change: transform, filter;
    backface-visibility: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  .portfolio-stack-card::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      115deg,
      rgba(255, 255, 255, 0.12),
      transparent 28%,
      transparent 72%,
      rgba(0, 0, 0, 0.16)
    );
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
    pointer-events: none;
  }

  .portfolio-stack-card img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: contain;
    pointer-events: none;
  }

  .portfolio-stack-tag {
    position: absolute;
    left: 50%;
    top: -1.5rem;
    padding: 0.34rem 0.56rem;
    overflow: hidden;
    border-radius: 999px;
    background: #f6f6f2;
    color: #090909;
    font-size: 0.65rem;
    font-weight: 650;
    line-height: 1;
    letter-spacing: -0.02em;
    white-space: nowrap;
    opacity: 0;
    transform: translate3d(-50%, 0.6rem, 2px) scale(0.82);
    transition:
      opacity 180ms ease,
      transform 320ms cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  }

  .portfolio-stack-card.is-active .portfolio-stack-tag {
    opacity: 1;
    transform: translate3d(-50%, 0, 2px) scale(1);
  }

  .portfolio-stack-card:focus-visible {
    outline: 2px solid #f6f6f2;
    outline-offset: 0.38rem;
  }
`;
