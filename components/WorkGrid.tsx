"use client";

import Link from "next/link";
import { useState } from "react";
import { work } from "@/lib/content";
import { ProjectVisual } from "./Mock";

const filters = ["All", "Product", "Web", "Brand"] as const;

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = work.filter((project) => filter === "All" || project.craft === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter work by type">
        {filters.map((item) => (
          <button key={item} type="button" className="chip" aria-pressed={filter === item} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-x-5 gap-y-10 md:grid-cols-2">
        {shown.map((project) => (
          <li key={project.slug} className="fade-up [--intro:0ms]">
            <Link href={`/work/${project.slug}`} className="group block">
              <div className="leaf overflow-hidden border border-line">
                <ProjectVisual slug={project.slug} className="transition-transform duration-[1200ms] ease-fold group-hover:scale-[1.03]" />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {project.sectors.map((sector) => (
                  <span key={sector} className="tag !bg-paper-2">
                    {sector}
                  </span>
                ))}
              </div>
              <h2 className="display mt-3 flex items-center gap-3 text-3xl">
                {project.name}
                <span className="arrow text-xl text-muted">→</span>
              </h2>
              <p className="mt-1 text-muted">{project.kind}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
