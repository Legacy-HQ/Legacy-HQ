"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { Mark } from "./Logo";
import { Planes } from "./Planes";

const MAX_PANELS = 6;

// What is printed on the sheet: a looping motion study of the mark, framed like a reel.
// It is rendered once per panel, so everything here is CSS-animated to stay in sync.
function SheetArt() {
  return (
    <div className="reel relative h-full">
      <Planes />
      <div className="absolute inset-0 grid place-items-center">
        <Mark className="h-[52cqh] w-[52cqh]" />
      </div>
      <div className="relative flex h-full flex-col justify-between p-[2.2cqw]">
        <div className="art-small flex items-start justify-between">
          <span>Curiofold — Motion study 01</span>
          <span className="flex items-center gap-[0.6em]">
            <span className="blink inline-block h-[0.7em] w-[0.7em] rounded-full bg-current" />
            Live
          </span>
        </div>
        <div>
          <div className="art-small flex items-end justify-between">
            <span className="art-hide-sm">Motion × Graphics × Edit</span>
            <span className="timecode tabular-nums" />
          </div>
          <div className="mt-[1.2cqw] h-px bg-current/20">
            <div className="reel-bar h-full bg-current" />
          </div>
        </div>
      </div>
    </div>
  );
}


function Panel({ i }: { i: number }) {
  if (i >= MAX_PANELS) return null;
  return (
    <div
      className={`fold-panel ${i >= 4 ? "max-md:hidden" : ""}`}
      data-dir={i % 2 ? "out" : "in"}
      style={{ "--i": i } as CSSProperties}
    >
      <div className="fold-face">
        <div className="fold-art">
          <SheetArt />
        </div>
        <div className="fold-shade" />
      </div>
      <Panel i={i + 1} />
    </div>
  );
}

// An accordion-folded sheet: opens on load, flattens as the page scrolls,
// and leans toward the pointer.
export function FoldSheet() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--fold", "0.2");
      return;
    }

    let fold = 1;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;
    let visible = true;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    };

    const tick = () => {
      // flat once the sheet's centre reaches the middle of the viewport
      const r = el.getBoundingClientRect();
      const centre = (r.top + r.height / 2) / window.innerHeight;
      const scrolled = Math.max(0, Math.min(1, (1 - centre) / 0.5));
      const target = 0.5 * (1 - scrolled) + Math.abs(tx) * 0.12 * (1 - scrolled);
      fold += (target - fold) * 0.06;
      px += (tx - px) * 0.06;
      py += (ty - py) * 0.06;
      el.style.setProperty("--fold", fold.toFixed(4));
      el.style.setProperty("--px", px.toFixed(4));
      el.style.setProperty("--py", py.toFixed(4));
      if (visible) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className="fold" aria-hidden="true" style={{ "--fold": 1 } as CSSProperties}>
      <div className="fold-shadow" />
      <div className="fold-sheet">
        <Panel i={0} />
      </div>
    </div>
  );
}
