"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { manifesto } from "@/lib/content";

export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = manifesto.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the paragraph enters at 85% of the viewport, 1 when its end reaches 45%
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.4);
      el.style.setProperty("--p", Math.max(0, Math.min(1, p)).toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="wrap py-28 md:py-44">
      <div className="grid gap-8 md:grid-cols-12">
        <p className="label text-muted md:col-span-3">
          <span className="pip" /> Why we exist
        </p>
        <p
          ref={ref}
          className="display text-[clamp(2rem,4.6vw,4.4rem)] !leading-[1.04] md:col-span-9"
          style={{ "--n": words.length } as CSSProperties}
        >
          {words.map((word, i) => (
            <span key={i} className="ink-word" style={{ "--i": i } as CSSProperties}>
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
