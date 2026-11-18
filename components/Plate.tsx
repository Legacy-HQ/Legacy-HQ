import type { CSSProperties, ReactNode } from "react";
import type { ServiceId } from "@/lib/content";
import { markPaths } from "@/lib/mark";

// Small line drawings, one per service, set like figures in a field guide.
const faint = { stroke: "currentColor", strokeOpacity: 0.28, fill: "none" } as const;
const solid = { stroke: "currentColor", fill: "none" } as const;

function Branding() {
  return (
    <>
      <g {...faint} strokeDasharray="2 3">
        <path d="M10 20h100M10 100h100M20 10v100M100 10v100M20 20l80 80M100 20 20 100M60 10v100M10 60h100" />
        <circle cx="69" cy="41" r="19" />
        <circle cx="51" cy="79" r="19" />
        <circle cx="60" cy="60" r="56" />
      </g>
      <g transform="translate(20 20) scale(.8)" fill="currentColor">
        {Object.values(markPaths).map((d) => (
          <path key={d.slice(0, 14)} d={d} />
        ))}
      </g>
      <g {...solid}>
        <path d="M20 6v8M100 6v8M20 10h80" />
      </g>
    </>
  );
}

function Product() {
  return (
    <>
      <rect x="14" y="16" width="92" height="50" rx="4" {...faint} />
      <circle cx="28" cy="31" r="7" fill="currentColor" />
      <path d="M42 28h38M42 35h24" stroke="currentColor" strokeOpacity=".5" strokeWidth="3" />
      <path d="M22 50h76" {...faint} />
      <rect x="22" y="54" width="30" height="6" rx="3" fill="currentColor" fillOpacity=".25" />
      <rect x="14" y="78" width="34" height="18" rx="9" {...solid} />
      <circle className="toggle-knob" cx="24" cy="87" r="5.5" fill="currentColor" />
      <rect x="58" y="78" width="48" height="18" rx="3" fill="currentColor" />
      <path d="M92 86v15l4-4 3 7 3-1.3-3-7h6z" fill="currentColor" stroke="var(--paper-2)" strokeWidth="1" />
    </>
  );
}

function Engineering() {
  const lines = [
    [14, 34],
    [22, 58],
    [22, 44],
    [30, 52],
    [22, 30],
    [14, 20],
  ];
  return (
    <>
      <rect x="10" y="14" width="100" height="92" rx="4" {...faint} />
      <path d="M10 28h100" {...faint} />
      {[18, 25, 32].map((x) => (
        <circle key={x} cx={x} cy="21" r="2" fill="currentColor" fillOpacity=".5" />
      ))}
      {lines.map(([x, w], i) => (
        <rect
          key={i}
          className="type-line"
          style={{ "--i": i } as CSSProperties}
          x={x}
          y={37 + i * 9}
          width={w}
          height="3.5"
          fill="currentColor"
          fillOpacity={i % 3 === 0 ? 0.9 : 0.4}
        />
      ))}
      <path d="m16 96 3 3 6-6" {...solid} strokeWidth="1.5" />
      <rect x="30" y="94" width="44" height="3.5" fill="currentColor" fillOpacity=".4" />
    </>
  );
}

function Landing() {
  return (
    <>
      <rect x="32" y="8" width="56" height="104" rx="3" {...faint} />
      <path d="M38 16h10M70 16h12" stroke="currentColor" strokeOpacity=".5" strokeWidth="2.5" />
      <path d="M38 30h40M38 38h28" stroke="currentColor" strokeWidth="4" />
      <rect x="38" y="46" width="22" height="8" rx="1.5" fill="currentColor" />
      <rect x="38" y="62" width="44" height="22" {...faint} strokeDasharray="2 3" />
      <path className="draw" pathLength={1} d="M40 80c8-2 10-10 18-9s8-8 22-12" {...solid} strokeWidth="1.5" />
      <path d="M38 92h44M38 99h30" stroke="currentColor" strokeOpacity=".3" strokeWidth="2.5" />
      <g {...solid}>
        <path d="M96 46h14M103 42v8" />
      </g>
      <text x="96" y="62" fontSize="6" fontFamily="var(--font-geist-mono)" fill="currentColor" fillOpacity=".6">
        CTA
      </text>
    </>
  );
}

function Websites() {
  const kids = [18, 46, 74, 102];
  return (
    <>
      <rect x="46" y="12" width="28" height="18" rx="2" fill="currentColor" />
      <path className="dash" d="M60 30v14M18 44h84M18 44v12M46 44v12M74 44v12M102 44v12" {...solid} strokeOpacity=".5" strokeDasharray="3 3" />
      {kids.map((x) => (
        <rect key={x} x={x - 12} y="56" width="24" height="16" rx="2" {...solid} />
      ))}
      <path d="M46 72v12M74 72v12M102 72v12" {...faint} />
      {[46, 74, 102].map((x) => (
        <rect key={x} x={x - 10} y="84" width="20" height="12" rx="2" {...faint} />
      ))}
      <path d="M46 96v6M46 102h-8" {...faint} />
      <rect x="20" y="98" width="18" height="10" rx="2" {...faint} />
    </>
  );
}

function Motion() {
  return (
    <>
      <path d="M14 14v80h92" {...faint} />
      <path d="M14 94h92M14 54h92M60 14v80" {...faint} strokeDasharray="2 3" />
      <path d="M14 94C56 94 46 20 106 20" {...solid} strokeWidth="1.5" />
      <path d="M14 94h30M106 20H82" {...faint} />
      <circle cx="44" cy="94" r="2.5" fill="currentColor" />
      <circle cx="82" cy="20" r="2.5" fill="currentColor" />
      <circle r="4.5" fill="currentColor">
        <animateMotion
          dur="3.4s"
          repeatCount="indefinite"
          path="M14 94C56 94 46 20 106 20"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keyPoints="0;1;0"
          keySplines=".7 0 .2 1;.7 0 .2 1"
        />
      </circle>
      {[22, 50, 78, 100].map((x) => (
        <rect key={x} x={x - 3} y="103" width="6" height="6" transform={`rotate(45 ${x} 106)`} fill="currentColor" />
      ))}
    </>
  );
}

const figures: Record<ServiceId, () => ReactNode> = {
  branding: Branding,
  product: Product,
  engineering: Engineering,
  landing: Landing,
  websites: Websites,
  motion: Motion,
};

export function Plate({ id, index, caption }: { id: ServiceId; index: number; caption: string }) {
  const Figure = figures[id];
  return (
    <figure className="plate">
      <div className="relative border border-line p-4">
        {/* corner ticks */}
        {["-left-px -top-px border-l border-t", "-right-px -top-px border-r border-t", "-bottom-px -left-px border-b border-l", "-bottom-px -right-px border-b border-r"].map(
          (pos) => (
            <span key={pos} className={`absolute h-2.5 w-2.5 border-ink ${pos}`} />
          ),
        )}
        <svg viewBox="0 0 120 120" className="block w-full" aria-hidden="true">
          <Figure />
        </svg>
      </div>
      <figcaption className="label mt-3 flex justify-between text-muted">
        <span>Fig. 0{index + 1}</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
