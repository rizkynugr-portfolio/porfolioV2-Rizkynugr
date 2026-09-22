"use client";

export type HaloVariant = "top" | "bottom" | "left" | "right";

export interface HaloHorizonProps {
  className?: string;
  variant?: HaloVariant;
}

const css = `
/* The travelling group that carries all four arcs. */
.hh-glow{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  isolation:isolate;
  will-change:transform,opacity,filter;
  animation:hh-rise 5.6s infinite both;
  pointer-events:none;
}

/* Per-edge direction. --t-enter / --t-rest drive the group; --a-enter is the
   small parallax slide each coloured arc rides in on. translate()+scale() keep
   the same primitive order in every keyframe so the transform interpolates. */
.hh-glow[data-variant="top"]{
  --t-enter:translate(0,-100%) scale(1,1.5);
  --t-rest:translate(0,-50%) scale(1,1);
  --a-enter:translate(0,-40%);
}
.hh-glow[data-variant="bottom"]{
  --t-enter:translate(0,100%) scale(1,1.5);
  --t-rest:translate(0,50%) scale(1,1);
  --a-enter:translate(0,40%);
}
.hh-glow[data-variant="left"]{
  --t-enter:translate(100%,0) scale(1.5,1);
  --t-rest:translate(50%,0) scale(1,1);
  --a-enter:translate(40%,0);
}
.hh-glow[data-variant="right"]{
  --t-enter:translate(-100%,0) scale(1.5,1);
  --t-rest:translate(-50%,0) scale(1,1);
  --a-enter:translate(-40%,0);
}

/* Shared arc base. Each layer keeps its own size via the 'scale' property
   (independent of 'transform', which the slide keyframe animates) so the two
   compose instead of overwriting each other. */
.hh-arc{
  position:absolute;
  inset:0;
  border-radius:100%;
  will-change:transform;
}

/* Purple Theme based on the original structure */
.hh-core{ scale:1.32; background:#ffffff;
  box-shadow:0 -4px 26px 0 rgba(255,255,255,.71); }
.hh-gold{ scale:1.20; background:#d8b4fe; filter:blur(31px);
  animation:hh-arc 5.6s infinite both; }
.hh-rose{ scale:1.24; background:#7c3aed; filter:blur(21px);
  animation:hh-arc 5.6s infinite both; }
.hh-mask{ scale:1.20; background:#060410; filter:blur(51px);
  animation:hh-arc 5.6s infinite both; }

@keyframes hh-rise{
  0%   { transform:var(--t-enter); opacity:0; filter:blur(15px);
         animation-timing-function:cubic-bezier(.16,1,.3,1); }
  36%  { transform:var(--t-rest);  opacity:1; filter:blur(0);
         animation-timing-function:linear; }
  70%  { transform:var(--t-rest);  opacity:1; filter:blur(0);
         animation-timing-function:cubic-bezier(.7,0,.84,0); }
  100% { transform:var(--t-enter); opacity:0; filter:blur(15px); }
}

@keyframes hh-arc{
  0%   { transform:var(--a-enter);
         animation-timing-function:cubic-bezier(.16,1,.3,1); }
  36%  { transform:translate(0,0); }
  70%  { transform:translate(0,0);
         animation-timing-function:cubic-bezier(.7,0,.84,0); }
  100% { transform:var(--a-enter); }
}

@media (prefers-reduced-motion: reduce){
  .hh-glow{animation:none;transform:var(--t-rest);opacity:1;filter:none;}
}
`;

export const Halo = ({ className, variant = "top" }: HaloHorizonProps) => {
  return (
    <>
      <style>{css}</style>
      <div className={"hh-glow" + (className ? " " + className : "")} data-variant={variant} aria-hidden="true">
        {/* paint order back → front: core glow, light purple bloom, mid purple rose, dark mask */}
        <div className="hh-arc hh-core" />
        <div className="hh-arc hh-gold" />
        <div className="hh-arc hh-rose" />
        <div className="hh-arc hh-mask" />
      </div>
    </>
  );
}
