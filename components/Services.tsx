"use client";

import { useState } from "react";
import { services } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="zone-dark bg-ink py-24 text-paper md:py-36">
      <div className="wrap">
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <p className="label text-paper/50 md:col-span-3">
            <span className="text-accent">◢</span> Services
          </p>
          <h2 className="display text-[clamp(2.8rem,7vw,6.5rem)] md:col-span-9">
            Three folds, <em className="text-accent">one sheet.</em>
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
                        <div className="col-span-12 md:col-span-5 md:col-start-4">
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
