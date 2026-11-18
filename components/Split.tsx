"use client";

import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Dashboard, Mock } from "./Mock";

// The same interface rendered twice: as a wireframe and as the shipped product.
// A handle sweeps between them on its own until the visitor takes over.
export function Split() {
  const ref = useRef<HTMLDivElement>(null);
  const [auto, setAuto] = useState(true);

  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = Math.max(4, Math.min(96, ((e.clientX - r.left) / r.width) * 100));
    if (auto) setAuto(false);
    el.style.setProperty("--split", `${pct.toFixed(2)}%`);
  };

  return (
    <div
      ref={ref}
      className="split leaf relative cursor-ew-resize touch-pan-y select-none overflow-hidden border border-line bg-obsidian shadow-[0_3rem_6rem_-3rem_rgb(17_17_15/0.55)] [--r:1.75rem]"
      data-auto={auto}
      onPointerMove={move}
      onPointerDown={move}
      style={{ "--split": "50%" } as CSSProperties}
      aria-hidden="true"
    >
      <Mock className="aspect-[16/9.6]">
        <div className="wire blueprint h-full">
          <Dashboard />
        </div>
      </Mock>
      <div className="split-top absolute inset-0">
        <Mock className="h-full">
          <Dashboard />
        </Mock>
      </div>

      <div className="split-handle pointer-events-none absolute inset-y-0 w-px bg-alabaster">
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[0_0.8rem_0_0.8rem] bg-alabaster text-xs font-bold text-obsidian">
          ⇆
        </span>
      </div>
      <span className="label pointer-events-none absolute bottom-4 left-4 rounded-[0_0.4rem_0_0.4rem] bg-obsidian/80 px-2.5 py-1.5 text-alabaster backdrop-blur">
        01 Wireframe
      </span>
      <span className="label pointer-events-none absolute bottom-4 right-4 rounded-[0_0.4rem_0_0.4rem] bg-alabaster px-2.5 py-1.5 text-obsidian">
        02 Shipped
      </span>
    </div>
  );
}
