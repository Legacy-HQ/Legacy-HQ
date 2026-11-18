"use client";

import { useState } from "react";
import { services } from "@/lib/content";
import { Planes } from "./Planes";
import { Reveal } from "./Reveal";

// A small live demo for each craft, shown when its row is open.
function Demo({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" stroke="currentColor">
        <path d="M10 0v100M90 0v100M0 10h100M0 90h100" strokeOpacity=".15" />
        <path d="M10 90C45 90 55 10 90 10" strokeOpacity=".5" />
        <circle r="5" fill="currentColor" stroke="none">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            path="M10 90C45 90 55 10 90 10"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keyPoints="0;1;0"
            keySplines=".7 0 .2 1;.7 0 .2 1"
          />
        </circle>
      </svg>
    );
  }
  if (index === 1) {
    return (
      <div className="relative grid h-full place-items-center">
        <div className="absolute inset-x-0 top-[30%] border-t border-current/15" />
        <div className="absolute inset-x-0 top-[70%] border-t border-current/15" />
        <p className="kern display text-5xl">
          {"Fold".split("").map((letter, i) => (
            <span key={i} style={{ "--i": i } as React.CSSProperties}>
              {letter}
            </span>
          ))}
        </p>
      </div>
    );
  }
  return (
    <div className="relative flex h-full flex-col justify-center gap-1.5">
      {[
        [30, 22, 40],
        [18, 50, 24],
        [62, 30],
      ].map((clips, t) => (
        <div key={t} className="flex h-4 gap-1">
          {clips.map((w, c) => (
            <span key={c} className="bg-current" style={{ width: `${w}%`, opacity: [0.8, 0.3, 0.55][(c + t) % 3] }} />
          ))}
        </div>
      ))}
      <span className="playhead absolute inset-y-3 w-px bg-current" />
    </div>
  );
}

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="zone-dark relative overflow-hidden bg-void py-24 md:py-36">
      <Planes className="opacity-70" />
      <div className="wrap relative">
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <p className="label flex items-center text-paper/50 md:col-span-3">
            <span className="pip" /> Services
          </p>
          <h2 className="display text-[clamp(2.8rem,7vw,6.5rem)] md:col-span-9">
            Three crafts, <em>one fold.</em>
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-line-inv md:mt-20">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={service.name} delay={i * 60}>
                <div className="svc border-b border-line-inv" data-open={isOpen}>
                  <h3>
                    <button
                      type="button"
                      className="grid w-full grid-cols-12 items-baseline gap-4 py-6 text-left md:py-8"
                      aria-expanded={isOpen}
                      aria-controls={`svc-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="label col-span-2 text-paper/40 md:col-span-3">Fold 0{i + 1}</span>
                      <span className="svc-name display col-span-8 text-[clamp(2rem,5vw,4.5rem)] md:col-span-5">
                        {service.name}
                      </span>
                      <span className="col-span-3 hidden text-paper/55 md:block">{service.summary}</span>
                      <span className="svc-plus col-span-2 justify-self-end text-3xl font-light leading-none md:col-span-1">
                        +
                      </span>
                    </button>
                  </h3>
                  <div id={`svc-${i}`} className="svc-body" role="region" aria-label={service.name}>
                    <div className="svc-inner">
                      <div className="svc-flap grid grid-cols-12 gap-4 pb-10">
                        <div className="col-span-3 hidden md:block" aria-hidden="true">
                          <div className="h-36 w-36 rounded-[0_2rem_0_2rem] border border-line-inv p-4 text-paper">
                            <Demo index={i} />
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-5">
                          <p className="mb-3 text-paper/55 md:hidden">{service.summary}</p>
                          <p className="max-w-xl text-lg leading-relaxed text-paper/80">{service.body}</p>
                        </div>
                        <ul className="col-span-12 flex flex-wrap content-start gap-2 md:col-span-4">
                          {service.tags.map((tag) => (
                            <li key={tag} className="label border border-line-inv px-3 py-2 text-paper/70">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
