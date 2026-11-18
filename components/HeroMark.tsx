"use client";

import { useEffect, useRef } from "react";
import { Mark } from "./Logo";

// The mark, large. Its four pieces part as the pointer moves away from it
// and the whole shape turns slowly with scroll.
export function HeroMark({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let spread = 34;
    let rot = -90;
    let pointer = 0;
    let raf = 0;
    let visible = true;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const dy = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      pointer = Math.min(1, Math.hypot(dx, dy) * 1.6);
    };

    const tick = () => {
      const targetSpread = 1 + pointer * 7;
      const targetRot = window.scrollY * 0.06;
      spread += (targetSpread - spread) * 0.05;
      rot += (targetRot - rot) * 0.06;
      el.style.setProperty("--spread", spread.toFixed(3));
      el.style.setProperty("--rot", rot.toFixed(3));
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
    <div ref={ref} className={`hero-mark ${className}`} aria-hidden="true">
      <Mark className="h-full w-full" />
    </div>
  );
}
