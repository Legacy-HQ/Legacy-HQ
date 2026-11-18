"use client";

import Link from "next/link";
import { useState } from "react";
import { work } from "@/lib/content";
import { visuals } from "./Work";

const filters = ["All", "Motion", "Graphic", "Edit"] as const;

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = work.filter((project) => filter === "All" || project.craft === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work by craft">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className="chip"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {shown.map((project) => {
          const Visual = visuals[project.slug];
          return (
            <li key={project.slug} className="fade-up [--intro:0ms]">
              <Link href={`/work/${project.slug}`} className="group block">
                <div className={`card leaf leaf-group tone-${project.tone} h-[24rem] md:h-[28rem]`} aria-hidden="true">
                  <Visual />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h2 className="display text-5xl">{project.name}</h2>
                  <span className="label text-muted">{project.craft}</span>
                </div>
                <p className="mt-2 flex items-center gap-2 text-muted">
                  {project.kind}
                  <span className="transition-transform duration-500 ease-fold group-hover:translate-x-1.5">→</span>
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
