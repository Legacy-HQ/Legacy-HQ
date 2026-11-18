"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { formats } from "@/lib/content";
import { Mark } from "./Logo";
import { Reveal } from "./Reveal";

// One frame that reshapes itself between delivery formats.
// Cycles on its own until someone picks a format.
export function Formats() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((v) => (v + 1) % formats.length), 2800);
    return () => clearInterval(id);
  }, [auto]);

  const format = formats[active];

  return (
    <section className="wrap py-24 md:py-36">
      <div className="grid gap-12 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <p className="label flex items-center text-muted">
            <span className="pip" /> Formats
          </p>
          <h2 className="display mt-6 text-[clamp(2.8rem,6vw,5.5rem)]">
            One idea, <em>every shape it needs.</em>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            A piece rarely lives in one place. We design for every frame it will appear in from the start, so nothing is
            cropped as an afterthought.
          </p>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Choose a format">
            {formats.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className="chip"
                aria-pressed={i === active}
                onClick={() => {
                  setAuto(false);
                  setActive(i);
                }}
              >
                {item.id}
              </button>
            ))}
          </div>
          <p className="label mt-5 text-muted" aria-live="polite">
            {format.id} — {format.where}
          </p>
        </Reveal>

        <Reveal delay={120} className="md:col-span-7">
          <div
            className="relative grid aspect-square place-items-center [--s:1] sm:aspect-[16/11] sm:[--s:1.4545]"
            style={{ "--r": format.ratio } as CSSProperties}
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-[0_3rem_0_3rem] border border-dashed border-line" />
            <div
              className="format-frame relative overflow-hidden bg-ink text-[#f5f3ee] [container-type:size]"
              style={{
                width: "calc(min(1, var(--r) / var(--s)) * 86%)",
                height: "calc(min(1, var(--s) / var(--r)) * 86%)",
                borderRadius: active % 2 ? "2rem 0 2rem 0" : "0 2rem 0 2rem",
              }}
            >
              <div className="absolute inset-[6cqmin] border border-dashed border-current/20" />
              <div className="absolute inset-0 grid place-items-center">
                <Mark className="w-[42cqmin]" />
              </div>
              <span className="label absolute left-[9cqmin] top-[9cqmin] !text-[0.6rem] opacity-70">{format.id}</span>
              <span className="label absolute bottom-[9cqmin] right-[9cqmin] !text-[0.6rem] opacity-70">Safe area</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
