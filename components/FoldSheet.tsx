"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const MAX_PANELS = 6;

function SheetArt() {
  return (
    <div className="flex h-full flex-col justify-between p-[2.4cqw]">
      <div className="art-small flex items-start justify-between">
        <span>CF—001 / Crease pattern</span>
        <span className="art-hide-sm">Mountain ——— &nbsp; Valley - - -</span>
        <span>Sheet 1 of 1</span>
      </div>
      <p className="art-word">
        curiosity, <br />
        folded.
      </p>
      <div className="flex items-end justify-between gap-[2cqw]">
        <div className="flex items-end gap-[1.2cqw]">
          <div className="art-chip flex">
            <span className="aspect-square h-full bg-[#f5f3ee]" />
            <span className="aspect-square h-full bg-paper" />
            <span className="aspect-square h-full bg-[#050b0b]" />
          </div>
          <div className="art-chip art-hide-sm flex items-center bg-paper px-[1.4cqw] font-serif text-ink text-[3cqw] leading-none">
            Aa
          </div>
          <div className="art-chip art-hide-sm flex items-center gap-[0.8cqw] bg-[#f5f3ee] px-[1.6cqw] text-[1.1cqw] font-medium text-ink">
            Play reel <span>▶</span>
          </div>
        </div>
        <svg viewBox="0 0 200 60" className="art-hide-sm h-[5.2cqw] w-auto" fill="none" stroke="currentColor">
          <path d="M0 50 33 14l34 32 33-36 33 36 34-30 33 34" strokeWidth="1.5" />
          <path d="M33 0v60M100 0v60M167 0v60" strokeDasharray="3 4" strokeWidth="1" opacity=".5" />
        </svg>
        <span className="art-small text-right">
          Motion × Graphics
          <br />× Edit
        </span>
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
