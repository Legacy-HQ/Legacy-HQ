import type { ReactNode } from "react";
import type { Project } from "@/lib/content";

const VB = "0 0 160 90";

function Frame({ children, tone, label }: { children: ReactNode; tone: string; label: string }) {
  return (
    <figure>
      <div className={`${tone} overflow-hidden rounded-[0_1.5rem_0_1.5rem]`}>
        <svg viewBox={VB} className="block w-full" fill="currentColor" aria-hidden="true">
          {children}
        </svg>
      </div>
      <figcaption className="label mt-3 text-muted">{label}</figcaption>
    </figure>
  );
}

const point = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { cx: +(80 + r * Math.cos(a)).toFixed(2), cy: +(45 + r * Math.sin(a)).toFixed(2) };
};

// Three stills per project, drawn from the same vocabulary as its main visual.
const frames: Record<Project["slug"], ReactNode[]> = {
  orrery: [0, 1, 2].map((step) => (
    <g key={step}>
      {[14, 25, 36].map((r, i) => (
        <g key={r}>
          <circle cx="80" cy="45" r={r} fill="none" stroke="currentColor" strokeOpacity=".4" strokeWidth=".5" />
          <circle {...point(r, step * (70 + i * 45) + i * 120)} r={i === 1 ? 3 : 2} />
        </g>
      ))}
      <circle cx="80" cy="45" r="4.5" />
    </g>
  )),
  tessel: [
    <circle key="a" cx="160" cy="90" r="78" />,
    <g key="b">
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="16" y={14 + i * 13.5} width={128 - i * 22} height="7" />
      ))}
    </g>,
    <path key="c" d="M30 0h70l44 44v46H30zM100 0v44h44z" fillRule="evenodd" />,
  ],
  halcyon: [
    <g key="a">
      <path d="M0 90 60 20l50 70z" opacity=".35" />
      <path d="M60 20 160 0v90h-50z" opacity=".15" />
      <rect width="160" height="9" opacity=".9" fill="#050b0b" />
      <rect y="81" width="160" height="9" opacity=".9" fill="#050b0b" />
    </g>,
    <g key="b">
      <circle cx="104" cy="52" r="46" opacity=".18" />
      <path d="M0 0h70L0 70z" opacity=".3" />
      <rect width="160" height="9" opacity=".9" fill="#050b0b" />
      <rect y="81" width="160" height="9" opacity=".9" fill="#050b0b" />
    </g>,
    <g key="c">
      <path d="M160 90V10L70 90z" opacity=".3" />
      <path d="M0 90C60 70 100 40 120 0" fill="none" stroke="currentColor" strokeOpacity=".5" strokeWidth=".5" />
      <rect width="160" height="9" opacity=".9" fill="#050b0b" />
      <rect y="81" width="160" height="9" opacity=".9" fill="#050b0b" />
    </g>,
  ],
  moth: [10, 0, -10].map((shift, i) => (
    <g key={i}>
      <rect width="160" height="90" fill="#11110f" />
      <circle cx="80" cy="34" r="16" fill="#f5f3ee" />
      <circle cx={80 + shift} cy="34" r="16" fill="#1d2324" opacity={shift ? 1 : 0} />
      <text
        x="80"
        y="74"
        textAnchor="middle"
        fill="#f5f3ee"
        fontSize="16"
        fontStyle="italic"
        fontFamily="var(--font-instrument-serif), serif"
      >
        {"moth".slice(0, [1, 3, 4][i])}
      </text>
    </g>
  )),
};

const tones: Record<Project["slug"], string[]> = {
  orrery: ["tone-ink", "tone-slate", "tone-ink"],
  tessel: ["tone-ink", "tone-bone", "tone-slate"],
  halcyon: ["tone-slate", "tone-ink", "tone-slate"],
  moth: ["tone-ink", "tone-ink", "tone-ink"],
};

export function Frames({ slug }: { slug: Project["slug"] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {frames[slug].map((frame, i) => (
        <Frame key={i} tone={tones[slug][i]} label={`Frame 0${i + 1}`}>
          {frame}
        </Frame>
      ))}
    </div>
  );
}
