"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { work } from "@/lib/content";
import { ProjectVisual } from "./Mock";

// Projects as a typographic index. With a mouse, a preview follows the pointer;
// on touch screens each row carries its visual inline.
export function WorkIndex() {
  const [active, setActive] = useState<number | null>(null);
  const [last, setLast] = useState(0);
  const preview = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = preview.current;
    if (!el) return;
    let x = 0;
    let y = 0;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      target.current.x = Math.min(e.clientX + 28, window.innerWidth - w - 24);
      target.current.y = Math.max(24, Math.min(e.clientY - h / 2, window.innerHeight - h - 24));
    };
    const tick = () => {
      x += (target.current.x - x) * 0.12;
      y += (target.current.y - y) * 0.12;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <ul className="work-list border-t border-line">
        {work.map((project, i) => (
          <li key={project.slug} className="border-b border-line">
            <Link
              href={`/work/${project.slug}`}
              className="work-row group block py-7 lg:py-9"
              onMouseEnter={() => {
                setActive(i);
                setLast(i);
              }}
              onMouseLeave={() => setActive(null)}
            >
              <div className="grid grid-cols-12 items-baseline gap-x-4 gap-y-2 lg:items-center">
                <span className="label col-span-2 text-muted lg:col-span-1">0{i + 1}</span>
                <span className="work-name display col-span-10 text-[clamp(2.8rem,8vw,7.5rem)] lg:col-span-5">
                  {project.name}
                </span>
                <span className="col-span-10 col-start-3 lg:col-span-3 lg:col-start-auto">
                  <span className="block text-lg">{project.kind}</span>
                  <span className="label mt-2 block text-muted">{project.tags.join(" · ")}</span>
                </span>
                <span className="col-span-2 hidden lg:block">
                  <span className="leaf block overflow-hidden border border-line [--r:0.9rem]">
                    <ProjectVisual slug={project.slug} />
                  </span>
                </span>
                <span className="col-span-1 hidden justify-end lg:flex">
                  <span className="arrow text-3xl">↗</span>
                </span>
              </div>
              <div className="leaf mt-6 overflow-hidden border border-line lg:hidden">
                <ProjectVisual slug={project.slug} />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={preview}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden w-[min(36rem,40vw)] lg:block"
        aria-hidden="true"
      >
        <div className="work-preview leaf relative overflow-hidden shadow-[0_3rem_6rem_-2rem_rgb(0_0_0/0.55)]" data-show={active !== null}>
          {work.map((project, i) => (
            <div
              key={project.slug}
              className={`transition-opacity duration-300 ${i === 0 ? "" : "absolute inset-0"}`}
              style={{ opacity: i === last ? 1 : 0 }}
            >
              <ProjectVisual slug={project.slug} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
