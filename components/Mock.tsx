import type { CSSProperties, ReactNode } from "react";
import type { Project } from "@/lib/content";

// Project visuals are drawn as real interface markup, sized in em so they scale
// with their container. Add data-b (box) and data-t (text) so the hero can render
// the same markup as a wireframe.

export function Mock({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mock ${className}`} aria-hidden="true">
      <div className="mock-in h-full">{children}</div>
    </div>
  );
}

const line = "border-white/[0.07]";
const panel = "rounded-[0.7em] border border-white/[0.07] bg-[#121616]";

export function Dashboard() {
  const accounts = [
    ["Operating", "Northline Bank", "2,410,300", 72],
    ["Reserve", "Aster Trust", "1,205,000", 44],
    ["Payroll", "Northline Bank", "486,600", 58],
    ["Tax", "Corva", "180,000", 21],
  ] as const;
  return (
    <div className="flex h-full bg-[#0b0e0e] text-[#f5f3ee]">
      <aside className={`flex w-[13.5em] flex-col gap-[0.25em] border-r ${line} p-[1em]`}>
        <div className="mb-[1.4em] flex items-center gap-[0.6em] px-[0.4em]">
          <span data-b className="h-[1.5em] w-[1.5em] rounded-[0_0.5em_0_0.5em] bg-[#f5f3ee]" />
          <b data-t className="text-[1.1em] tracking-tight">
            Halcyon
          </b>
        </div>
        {["Overview", "Accounts", "Payments", "Forecast", "Reports"].map((item, i) => (
          <div
            key={item}
            data-b
            className={`flex items-center gap-[0.7em] rounded-[0.45em] px-[0.7em] py-[0.6em] ${i === 0 ? "bg-white/[0.08]" : "text-white/50"}`}
          >
            <span className="h-[0.75em] w-[0.75em] rounded-[0.2em] border border-current opacity-60" />
            <span data-t>{item}</span>
          </div>
        ))}
        <div className={`mt-auto flex items-center gap-[0.7em] border-t ${line} px-[0.4em] pt-[1em]`}>
          <span data-b className="h-[1.9em] w-[1.9em] rounded-full bg-white/15" />
          <div>
            <p data-t>Ada Okafor</p>
            <p data-t className="text-[0.85em] text-white/40">
              Finance lead
            </p>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-[1em] p-[1.4em]">
        <div className="flex items-center justify-between">
          <div>
            <p data-t className="text-[1.5em] font-semibold tracking-tight">
              Overview
            </p>
            <p data-t className="text-white/45">
              All entities, last 90 days
            </p>
          </div>
          <div className="flex gap-[0.6em]">
            <span data-b className={`rounded-[0.45em] border ${line} px-[0.9em] py-[0.55em] text-white/70`}>
              <span data-t>Export</span>
            </span>
            <span data-b className="rounded-[0.45em] bg-[#f5f3ee] px-[0.9em] py-[0.55em] font-semibold text-[#0b0e0e]">
              <span data-t>New payment</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[1em]">
          {[
            ["Total cash", "$4,281,900", "+2.4%"],
            ["Runway", "18.5 months", "+0.6"],
            ["Monthly burn", "$212,400", "-3.1%"],
          ].map(([k, v, d]) => (
            <div key={k} data-b className={`${panel} p-[1.1em]`}>
              <p data-t className="text-white/45">
                {k}
              </p>
              <p data-t className="mt-[0.35em] text-[1.9em] font-semibold tracking-tight">
                {v}
              </p>
              <p data-t className="mt-[0.3em] inline-block text-[0.9em] text-[#6fd39a]">
                {d}
              </p>
            </div>
          ))}
        </div>

        <div data-b className={`${panel} flex min-h-0 flex-1 flex-col p-[1.1em]`}>
          <div className="flex items-center justify-between">
            <p data-t className="font-semibold">
              Cash position
            </p>
            <div className="flex gap-[0.4em] text-[0.85em] text-white/45">
              {["30d", "90d", "1y"].map((r, i) => (
                <span key={r} data-b className={`rounded-[0.35em] px-[0.6em] py-[0.3em] ${i === 1 ? "bg-white/10 text-white" : ""}`}>
                  {r}
                </span>
              ))}
            </div>
          </div>
          <svg viewBox="0 0 600 150" preserveAspectRatio="none" className="mt-[0.6em] min-h-0 w-full flex-1">
            <defs>
              <linearGradient id="dash-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f5f3ee" stopOpacity=".2" />
                <stop offset="1" stopColor="#f5f3ee" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[30, 70, 110].map((y) => (
              <path key={y} d={`M0 ${y}H600`} stroke="#fff" strokeOpacity=".06" />
            ))}
            <path d="M0 112C60 104 80 76 140 80s80 34 140 20 70-62 140-58 90 40 180-22V150H0z" fill="url(#dash-area)" />
            <path
              d="M0 112C60 104 80 76 140 80s80 34 140 20 70-62 140-58 90 40 180-22"
              fill="none"
              stroke="#f5f3ee"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <path d="M0 128C80 120 120 110 200 108s140-10 220-22 120-20 180-30" fill="none" stroke="#f5f3ee" strokeOpacity=".35" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div data-b className={`${panel} px-[1.1em] py-[0.5em]`}>
          {accounts.map(([name, bank, amount, pct], i) => (
            <div key={name} className={`grid grid-cols-[1.2fr_1.2fr_1fr_1.4fr] items-center gap-[1em] py-[0.6em] ${i ? `border-t ${line}` : ""}`}>
              <span data-t>{name}</span>
              <span data-t className="text-white/45">
                {bank}
              </span>
              <span data-t className="tabular-nums">
                ${amount}
              </span>
              <span className="h-[0.35em] rounded-full bg-white/10">
                <span data-b className="block h-full rounded-full bg-[#f5f3ee]" style={{ width: `${pct}%` }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative aspect-[9/19] w-[17em] shrink-0 overflow-hidden rounded-[2.4em] border-[0.35em] border-[#2a2f30] bg-[#0d1011] text-[#f5f3ee] shadow-[0_2em_4em_-1.5em_rgb(0_0_0/0.6)] ${className}`}>
      <span className="absolute left-1/2 top-[0.7em] z-10 h-[1.3em] w-[5em] -translate-x-1/2 rounded-full bg-black" />
      <div className="flex h-full flex-col px-[1.3em] pb-[1.4em] pt-[3.2em]">{children}</div>
    </div>
  );
}

export function Phones() {
  return (
    <div className="flex h-full items-center justify-center gap-[1.6em] overflow-hidden bg-[#e9e5da] px-[2em] text-[1.15em]">
      <Phone className="translate-y-[2.2em]">
        <p className="text-white/45">Tonight</p>
        <p className="mt-[0.2em] text-[1.5em] font-semibold tracking-tight">Wind down</p>
        <div className="relative mx-auto mt-[2em] grid h-[9.5em] w-[9.5em] place-items-center rounded-full border border-white/10">
          <span className="h-[5.5em] w-[5.5em] rounded-full bg-[#f0f0e6] shadow-[inset_-1.5em_-0.6em_0_#b9b7a8]" />
        </div>
        <p className="mt-[1.4em] text-center text-[2.6em] font-semibold tracking-tight">23:40</p>
        <p className="text-center text-white/45">Lights out in 20 min</p>
        <div className="mt-auto rounded-[1em] bg-[#f5f3ee] py-[0.9em] text-center font-semibold text-[#0d1011]">Start</div>
      </Phone>
      <Phone className="-translate-y-[1.2em]">
        <p className="text-white/45">Last night</p>
        <p className="mt-[0.2em] text-[1.5em] font-semibold tracking-tight">Sleep score</p>
        <svg viewBox="0 0 100 100" className="mx-auto mt-[1.4em] w-[9.5em]">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#fff" strokeOpacity=".1" strokeWidth="7" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="#f5f3ee" strokeWidth="7" strokeLinecap="round" strokeDasharray="227 264" transform="rotate(-90 50 50)" />
          <text x="50" y="58" textAnchor="middle" fontSize="26" fontWeight="600" fill="#f5f3ee">
            86
          </text>
        </svg>
        <p className="mt-[1em] text-center">7h 52m asleep</p>
        <div className="mt-auto flex h-[6em] items-end gap-[0.5em]">
          {[52, 70, 46, 88, 64, 80, 86].map((h, i) => (
            <span key={i} className={`flex-1 rounded-[0.4em] ${i === 6 ? "bg-[#f5f3ee]" : "bg-white/15"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-[0.5em] flex justify-between text-[0.8em] text-white/40">
          {"MTWTFSS".split("").map((d, i) => (
            <span key={i} className="flex-1 text-center">
              {d}
            </span>
          ))}
        </div>
      </Phone>
      <Phone className="hidden translate-y-[3em] sm:block">
        <p className="text-white/45">Sounds</p>
        <p className="mt-[0.2em] text-[1.5em] font-semibold tracking-tight">For tonight</p>
        <div className="mt-[1.4em] space-y-[0.7em]">
          {[
            ["Rain on slate", "45 min", true],
            ["Low tide", "30 min", false],
            ["Night train", "60 min", false],
            ["Brown noise", "Loop", false],
          ].map(([name, len, on]) => (
            <div key={name as string} className={`flex items-center gap-[0.8em] rounded-[1em] p-[0.8em] ${on ? "bg-[#f5f3ee] text-[#0d1011]" : "bg-white/[0.06]"}`}>
              <span className={`grid h-[2.4em] w-[2.4em] place-items-center rounded-full text-[0.8em] ${on ? "bg-[#0d1011] text-[#f5f3ee]" : "bg-white/10"}`}>
                {on ? "❚❚" : "▶"}
              </span>
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-[0.85em] opacity-50">{len}</p>
              </div>
            </div>
          ))}
        </div>
      </Phone>
    </div>
  );
}

export function Browser() {
  return (
    <div className="h-full bg-[#1d2324] p-[2em] pb-0">
      <div className="flex h-full flex-col overflow-hidden rounded-t-[0.9em] bg-[#f5f3ee] text-[#11110f] shadow-[0_0_5em_rgb(0_0_0/0.4)]">
        <div className="flex items-center gap-[0.5em] border-b border-black/10 px-[1em] py-[0.8em]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[0.7em] w-[0.7em] rounded-full bg-black/15" />
          ))}
          <span className="mx-auto rounded-[0.4em] bg-black/[0.06] px-[3em] py-[0.3em] text-[0.85em] text-black/50">tessel.dev</span>
        </div>
        <div className="flex items-center justify-between px-[2.4em] py-[1.2em]">
          <b className="text-[1.15em] tracking-tight">◆ Tessel</b>
          <div className="flex items-center gap-[1.6em] text-black/55">
            <span>Docs</span>
            <span>Pricing</span>
            <span>Changelog</span>
            <span className="rounded-[0.4em] bg-[#11110f] px-[0.9em] py-[0.5em] font-semibold text-[#f5f3ee]">Get API key</span>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-[1.05fr_1fr] items-center gap-[2em] px-[2.4em] pb-[1em]">
          <div>
            <span className="rounded-full border border-black/15 px-[0.8em] py-[0.35em] text-[0.85em]">v2.0 is live</span>
            <p className="mt-[0.5em] text-[3.5em] font-semibold leading-[0.98] tracking-[-0.045em]">
              Ship the API.
              <br />
              <span className="text-black/40">Skip the glue.</span>
            </p>
            <p className="mt-[1em] max-w-[24em] text-[1.05em] text-black/55">
              One endpoint for tiles, tokens and transforms. Typed from request to response.
            </p>
            <div className="mt-[1.4em] flex gap-[0.7em]">
              <span className="rounded-[0.45em] bg-[#11110f] px-[1.2em] py-[0.75em] font-semibold text-[#f5f3ee]">Start building</span>
              <span className="rounded-[0.45em] border border-black/15 px-[1.2em] py-[0.75em] font-semibold">Read the docs</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[0.8em] bg-[#0b0e0e] font-mono text-[0.95em] leading-[1.7] text-white/75 shadow-[0_1.5em_3em_-1em_rgb(0_0_0/0.5)]">
            <div className="flex gap-[1.2em] border-b border-white/10 px-[1.2em] py-[0.7em] text-[0.9em] text-white/40">
              <span className="text-white">tile.ts</span>
              <span>curl</span>
              <span>python</span>
            </div>
            <pre className="p-[1.2em]">
              <span className="text-white/40">import</span> {"{ tessel }"} <span className="text-white/40">from</span>{" "}
              <span className="text-[#6fd39a]">&quot;tessel&quot;</span>
              {"\n\n"}
              <span className="text-white/40">const</span> tile = <span className="text-white/40">await</span> tessel
              {"\n  .shape("}
              <span className="text-[#6fd39a]">&quot;hex&quot;</span>
              {")\n  .repeat(6)\n  .deploy()\n\n"}
              <span className="text-white/40">{"// ✓ live in 1.2s"}</span>
            </pre>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[1em] border-t border-black/10 px-[2.4em] py-[1.2em]">
          {["Typed end to end", "Edge by default", "Usage you can read"].map((f) => (
            <div key={f}>
              <p className="font-semibold">{f}</p>
              <span className="mt-[0.5em] block h-[0.35em] w-4/5 rounded-full bg-black/10" />
              <span className="mt-[0.4em] block h-[0.35em] w-3/5 rounded-full bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrbitMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
      {[18, 30, 42].map((r, i) => (
        <g key={r} className="orbit" style={{ "--t": `${14 + i * 8}s` } as CSSProperties}>
          <circle cx="50" cy="50" r={r} strokeWidth="1.2" opacity=".45" />
          <circle cx={50 + r} cy="50" r={i === 1 ? 4.5 : 3} fill="currentColor" stroke="none" />
        </g>
      ))}
      <circle cx="50" cy="50" r="6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BrandBoard() {
  const swatches = [
    ["Night", "#0F1414", "#f5f3ee"],
    ["Brass", "#B8862F", "#0f1414"],
    ["Vellum", "#EDE8DA", "#0f1414"],
    ["Slate", "#3A4445", "#f5f3ee"],
  ];
  return (
    <div className="grid h-full grid-cols-6 grid-rows-6 gap-[0.8em] bg-[#0f0f0f] p-[1.6em] text-[#f5f3ee]">
      <div className="col-span-3 row-span-4 grid place-items-center rounded-[0_1.4em_0_1.4em] bg-[#0f1414] text-[#ede8da]">
        <OrbitMark className="w-[46%]" />
      </div>
      <div className="col-span-3 row-span-2 flex items-center justify-center gap-[0.8em] rounded-[0_1.4em_0_1.4em] bg-[#ede8da] text-[#0f1414]">
        <OrbitMark className="w-[3.4em]" />
        <span className="text-[2.6em] font-semibold tracking-[-0.05em]">orrery</span>
      </div>
      <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-[0_1.4em_0_1.4em] bg-[#161a1a] p-[1.1em]">
        <p className="text-[4.2em] font-semibold leading-none tracking-[-0.05em]">Aa</p>
        <p className="text-white/45">Inter Tight, 600 / 400</p>
      </div>
      <div className="row-span-2 grid place-items-center rounded-[0_1.4em_0_1.4em] bg-[#b8862f] text-[#0f1414]">
        <OrbitMark className="w-[62%]" />
      </div>
      <div className="col-span-4 row-span-2 grid grid-cols-4 overflow-hidden rounded-[0_1.4em_0_1.4em]">
        {swatches.map(([name, hex, fg]) => (
          <div key={name} className="flex flex-col justify-end p-[0.9em]" style={{ background: hex, color: fg }}>
            <p className="font-semibold">{name}</p>
            <p className="font-mono text-[0.85em] opacity-60">{hex}</p>
          </div>
        ))}
      </div>
      <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-[0_1.4em_0_1.4em] border border-white/10 p-[1.1em]">
        <p className="font-mono text-[0.85em] uppercase tracking-widest text-white/45">Brand portal</p>
        <div className="space-y-[0.5em]">
          {["Logo suite", "Templates", "Motion rules"].map((item) => (
            <p key={item} className="flex justify-between border-t border-white/10 pt-[0.5em]">
              {item} <span className="text-white/40">↓</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const visuals: Record<Project["slug"], () => React.JSX.Element> = {
  halcyon: Dashboard,
  moth: Phones,
  tessel: Browser,
  orrery: BrandBoard,
};

export function ProjectVisual({ slug, className = "", fill = false }: { slug: Project["slug"]; className?: string; fill?: boolean }) {
  const Visual = visuals[slug];
  return (
    <Mock className={`overflow-hidden ${fill ? "aspect-[16/10.4] lg:aspect-auto lg:h-full lg:min-h-[30rem]" : "aspect-[16/10.4]"} ${className}`}>
      <Visual />
    </Mock>
  );
}
