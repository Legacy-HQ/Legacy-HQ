"use client";

import { useState } from "react";
import { services } from "@/lib/content";
import { Plate } from "./Plate";

// The services as one sheet folded into six panels. Hovering or focusing a panel opens it
// flat; the rest fold back to narrow spines. On small screens it becomes a vertical accordion.
export function ServiceFold() {
  const [active, setActive] = useState(0);
  // Below this width the panels stack into an accordion, where a tap toggles a panel.
  const stacked = () => window.matchMedia("(max-width: 1023px)").matches;

  return (
    <div className="fold-row">
      {services.map((service, i) => {
        const open = active === i;
        return (
          <article
            key={service.id}
            className="fold-p"
            data-open={open}
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse" && !stacked()) setActive(i);
            }}
          >
            <h3>
              <button
                type="button"
                className="fold-head"
                aria-expanded={open}
                aria-controls={`fold-${service.id}`}
                onClick={() => setActive(stacked() && open ? -1 : i)}
                onFocus={() => {
                  if (!stacked()) setActive(i);
                }}
              >
                <span className="label text-muted">0{i + 1}</span>
                <span className="fold-title display text-2xl lg:text-[1.65rem]">{service.name}</span>
                <span className="fold-plus text-2xl font-light leading-none lg:hidden">+</span>
              </button>
            </h3>
            <div id={`fold-${service.id}`} className="fold-body" role="region" aria-label={service.name}>
              <div className="fold-inner">
                <div className="flex h-full flex-col pb-8 lg:p-9 xl:p-11">
                  <p className="label hidden justify-between text-muted lg:flex">
                    <span>
                      0{i + 1} / 0{services.length}
                    </span>
                    <span>Service</span>
                  </p>
                  <div className="grid gap-8 sm:grid-cols-[1fr_14rem] md:grid-cols-[1fr_17rem] lg:mt-12 lg:grid-cols-[1fr_15rem] xl:grid-cols-[1fr_19rem]">
                    <div>
                      <p className="display hidden text-[clamp(2.4rem,3.6vw,3.9rem)] lg:block">{service.name}</p>
                      <p className="max-w-md leading-relaxed text-muted lg:mt-6 lg:text-[1.05rem]">{service.body}</p>
                    </div>
                    <div className="max-w-[19rem]">
                      <Plate id={service.id} index={i} caption={service.figure} />
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-auto">
                    <p className="label text-muted">What you get</p>
                    <ul className="mt-3 grid gap-x-8 border-t border-line lg:grid-cols-3">
                      {service.gets.map((item, j) => (
                        <li key={item} className="flex gap-3 border-b border-line py-3 text-[0.95rem] leading-snug lg:border-b-0 lg:py-4">
                          <span className="label pt-0.5 text-muted">{String.fromCharCode(97 + j)}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <li key={tag} className="tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
