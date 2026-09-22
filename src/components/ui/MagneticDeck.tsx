"use client";

import { useEffect, useRef } from "react";

// ── Card photos — swap these for your own (one per card) ──────────────────
const CARDS = [
  { src: "https://cdn.simpleicons.org/react/61DAFB", caption: "React" },
  { src: "https://cdn.simpleicons.org/typescript/3178C6", caption: "TypeScript" },
  { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", caption: "Tailwind CSS" },
  { src: "https://cdn.simpleicons.org/vite/646CFF", caption: "Vite" },
  { src: "https://cdn.simpleicons.org/framer/black", caption: "Framer Motion" },
  { src: "https://cdn.simpleicons.org/nodedotjs/339933", caption: "Node.js" }
];

// ── physics tuning ────────────────────────────────────────────────────────
const PROXIMITY = 520; // px reach of the cursor's influence
const PUSH = 4; // how hard a fast flick shoves a card
const MAX_FORCE = 260; // clamp so a violent flick can't fling a card off-screen
const TILT = 0.09; // how much horizontal shove becomes rotation
const NEIGHBOR = 0.22; // fraction of force passed to each neighbour (falls off)
const STIFFNESS = 0.052; // spring pull back to rest
const FRICTION = 0.86; // velocity damping per frame

// rest pose of the fanned deck (design units, scaled to fit the viewport)
const POSE = {
  x: [-440, -266, -92, 92, 266, 440],
  y: [22, -16, 28, -10, 24, -14],
  rot: [-8, 6, -5, 8, -6, 7],
};
const CARD_W = 214;
const CARD_H = 286;
const SPAN = 1080; // design width the deck is authored at

export function MagneticDeck() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const field = fieldRef.current;
    const hub = hubRef.current;
    if (!field || !hub) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const cardMode = new URLSearchParams(window.location.search).has("card");

    let fit = 1;
    const measure = () => {
      fit = Math.min(1, window.innerWidth / SPAN, window.innerHeight / 760);
      fit = Math.max(0.42, fit);
    };
    measure();
    window.addEventListener("resize", measure);

    // per-card spring state, seeded at the (scaled) rest pose
    const deck = POSE.x.map((_, i) => ({
      restX: 0,
      restY: 0,
      restR: POSE.rot[i],
      x: 0,
      y: 0,
      r: POSE.rot[i],
      vx: 0,
      vy: 0,
      vr: 0,
    }));
    const syncRest = () => {
      deck.forEach((c, i) => {
        c.restX = POSE.x[i] * fit;
        c.restY = POSE.y[i] * fit;
      });
    };
    syncRest();
    // start each card sitting at rest
    deck.forEach((c) => {
      c.x = c.restX;
      c.y = c.restY;
    });

    const cursor = {
      x: -9999,
      y: -9999,
      lastX: -9999,
      lastY: -9999,
      vx: 0,
      vy: 0,
      primed: false,
    };

    const onMove = (clientX: number, clientY: number) => {
      if (!cursor.primed) {
        cursor.lastX = clientX;
        cursor.lastY = clientY;
        cursor.primed = true;
      }
      cursor.x = clientX;
      cursor.y = clientY;
    };
    const onPointer = (e: PointerEvent) => onMove(e.clientX, e.clientY);
    const onLeave = () => {
      cursor.lastX = cursor.x; // zero out the next delta
      cursor.lastY = cursor.y;
      cursor.vx = cursor.vy = 0;
    };
    if (!reduced && !cardMode) {
      field.addEventListener("pointermove", onPointer);
      field.addEventListener("pointerleave", onLeave);
    }

    const proximity = () => PROXIMITY * fit;

    const pushForce = (card: (typeof deck)[number]) => {
      const speed = Math.hypot(cursor.vx, cursor.vy);
      if (speed < 0.5) return { fx: 0, fy: 0 };
      const r = hub.getBoundingClientRect(); // zero-size point at deck centre
      const cx = r.left + card.restX;
      const cy = r.top + card.restY;
      const dist = Math.hypot(cursor.x - cx, cursor.y - cy);
      const reach = proximity();
      if (dist > reach) return { fx: 0, fy: 0 };
      const weight = (1 - dist / reach) ** 3;
      const clampF = (v: number) =>
        v < -MAX_FORCE ? -MAX_FORCE : v > MAX_FORCE ? MAX_FORCE : v;
      return {
        fx: clampF(cursor.vx * PUSH * weight),
        fy: clampF(cursor.vy * PUSH * weight),
      };
    };

    const withNeighbours = (
      forces: { fx: number; fy: number }[],
      i: number
    ) => {
      let fx = forces[i].fx;
      let fy = forces[i].fy;
      forces.forEach((f, j) => {
        if (j === i) return;
        const falloff = NEIGHBOR ** Math.abs(j - i);
        fx += f.fx * falloff;
        fy += f.fy * falloff * 0.6;
      });
      return { fx, fy };
    };

    let vt = 0;
    const driveVirtual = () => {
      const r = field.getBoundingClientRect();
      vt += 0.018;
      const px =
        r.left + r.width * (0.5 + 0.42 * Math.sin(vt) * Math.cos(vt * 0.6));
      const py = r.top + r.height * (0.5 + 0.18 * Math.sin(vt * 1.7));
      onMove(px, py);
    };

    let raf = 0;
    const tick = () => {
      if (cardMode && !reduced) driveVirtual();

      const dx = cursor.x - cursor.lastX;
      const dy = cursor.y - cursor.lastY;
      cursor.vx = cursor.vx * 0.6 + dx * 0.4;
      cursor.vy = cursor.vy * 0.6 + dy * 0.4;
      cursor.lastX = cursor.x;
      cursor.lastY = cursor.y;

      const forces = deck.map(pushForce);
      for (let i = 0; i < deck.length; i++) {
        const c = deck[i];
        const { fx, fy } = withNeighbours(forces, i);
        c.vx = (c.vx + (c.restX + fx - c.x) * STIFFNESS) * FRICTION;
        c.vy = (c.vy + (c.restY + fy - c.y) * STIFFNESS) * FRICTION;
        c.vr = (c.vr + (c.restR + fx * TILT - c.r) * STIFFNESS) * FRICTION;
        c.x += c.vx;
        c.y += c.vy;
        c.r += c.vr;
        const el = cardRefs.current[i];
        if (el)
          el.style.transform =
            `translate(-50%,-50%) translate(${c.x.toFixed(1)}px,${c.y.toFixed(
              1
            )}px) rotate(${c.r.toFixed(2)}deg) scale(${fit.toFixed(3)})`;
      }

      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      measure();
      syncRest();
    };
    window.addEventListener("resize", onResize);

    if (reduced) {
      deck.forEach((c, i) => {
        const el = cardRefs.current[i];
        if (el)
          el.style.transform = `translate(-50%,-50%) translate(${c.restX}px,${c.restY}px) rotate(${c.restR}deg) scale(${fit})`;
      });
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.removeEventListener("resize", onResize);
      field.removeEventListener("pointermove", onPointer);
      field.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="md-field bg-white py-24 border-t border-black/5" ref={fieldRef}>
      <style>{css}</style>

      <div className="text-center mb-10 relative z-10 pointer-events-none">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">Crafted with this Stack</h2>
        <p className="text-gray-500 font-medium">Flick your cursor across the cards to scatter them.</p>
      </div>

      <div className="md-hub" ref={hubRef}>
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="md-card"
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            style={{ zIndex: i }}
          >
            <div
              className="md-photo"
              style={{ backgroundImage: `url("${card.src}")` }}
            />
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
              <span className="font-bold text-gray-800 text-[13px] tracking-wide bg-white/90 px-3 py-1.5 rounded-md shadow-sm border border-black/5">{card.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const css = `
  .md-field {
    position: relative;
    width: 100%;
    min-height: 700px;
    overflow: hidden;
    cursor: crosshair;
    -webkit-user-select: none;
    user-select: none;
  }

  .md-hub {
    position: absolute;
    top: 60%;
    left: 50%;
    width: 0;
    height: 0;
    z-index: 5;
  }

  .md-card {
    position: absolute;
    top: 0;
    left: 0;
    width: ${CARD_W}px;
    height: ${CARD_H}px;
    border-radius: 16px;
    overflow: hidden;
    will-change: transform;
    box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.15);
    outline: 1px solid rgba(0, 0, 0, 0.05);
  }

  .md-photo {
    width: 100%;
    height: 100%;
    background-size: 45%;
    background-position: center 38%;
    background-repeat: no-repeat;
    background-color: #ffffff;
  }
`;
