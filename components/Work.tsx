import type { CSSProperties } from "react";
import { work } from "@/lib/content";
import { Reveal } from "./Reveal";

type Slug = (typeof work)[number]["slug"];

// Animated mark: three orbits turning at different speeds, plus the ident's frame strip.
function Orrery() {
  return (
    <div className="grid h-full grid-cols-5 items-center gap-6 p-6 md:p-10">
      <svg viewBox="0 0 200 200" className="col-span-3 w-full" fill="none" stroke="currentColor">
        {[30, 55, 80].map((r, i) => (
          <g key={r} className="orbit" style={{ "--t": `${12 + i * 9}s` } as CSSProperties}>
            <circle cx="100" cy="100" r={r} strokeWidth="1" opacity=".45" />
            <circle cx={100 + r} cy="100" r={i === 1 ? 7 : 4} fill="currentColor" stroke="none" />
          </g>
        ))}
        <circle cx="100" cy="100" r="10" fill="currentColor" stroke="none" />
      </svg>
      <div className="col-span-2">
        <p className="display text-[clamp(3rem,6vw,5.5rem)]">Oo</p>
        <p className="label mt-3 opacity-60">Ident — 00:06 loop</p>
        <div className="mt-5 grid grid-cols-4 gap-1.5">
          {[0, 90, 180, 270].map((deg) => (
            <div key={deg} className="grid aspect-square place-items-center bg-[var(--card-soft)]">
              <svg viewBox="0 0 20 20" className="w-3/5" style={{ transform: `rotate(${deg}deg)` }}>
                <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" opacity=".5" />
                <circle cx="17" cy="10" r="2.2" fill="currentColor" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tessel() {
  const posters = [
    { bg: "var(--ink)", fg: "var(--paper)", n: "01" },
    { bg: "var(--paper)", fg: "var(--ink)", n: "02" },
    { bg: "var(--ink-2)", fg: "var(--paper)", n: "03" },
  ];
  return (
    <div className="flex h-full items-center justify-center gap-3 p-6 md:gap-5 md:p-10">
      {posters.map((poster, i) => (
        <div
          key={poster.n}
          className="flex aspect-[5/7] w-1/3 max-w-52 flex-col justify-between p-3 shadow-[0_18px_40px_-18px_rgb(17_17_15/0.5)] md:p-4"
          style={{
            background: poster.bg,
            color: poster.fg,
            transform: `translateY(${[10, -14, 6][i]}px) rotate(${[-2, 0, 2][i]}deg)`,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full" fill="currentColor">
            {i === 0 && <circle cx="50" cy="50" r="42" />}
            {i === 1 && <path d="M8 92V8h52l32 32v52z M60 8v32h32z" fillRule="evenodd" />}
            {i === 2 && [0, 1, 2, 3, 4].map((s) => <rect key={s} x="8" y={10 + s * 17} width={84 - s * 14} height="9" />)}
          </svg>
          <div>
            <p className="display text-2xl md:text-3xl">Tessel</p>
            <p className="label mt-1 !text-[0.55rem] opacity-60">Series {poster.n} / 03</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Editing timeline with a moving playhead.
function Halcyon() {
  const tracks = [
    [22, 30, 18, 24],
    [38, 14, 40],
    [60, 34],
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-5 md:p-8">
      <div className="relative min-h-0 flex-1 overflow-hidden bg-[#050b0b]">
        <svg viewBox="0 0 400 180" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M0 180 140 40l120 140z" fill="#0a1010" />
          <path d="M140 40 400 0v180H260z" fill="#1d2324" />
          <path d="M0 0h400L140 40 0 180z" fill="#11110f" />
        </svg>
        <span className="label absolute left-4 top-3 opacity-70">Halcyon_v07 — graded</span>
        <span className="label absolute bottom-3 right-4 tabular-nums opacity-70">00:01:12:08</span>
        <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-current/40 pl-1 text-lg">
          ▶
        </span>
      </div>
      <div className="relative space-y-1.5 py-1">
        {tracks.map((clips, t) => (
          <div key={t} className="flex h-5 gap-1 md:h-6">
            {clips.map((w, c) => (
              <span
                key={c}
                className={t === 2 ? "border border-[var(--card-line)]" : "bg-current"}
                style={{ width: `${w}%`, opacity: t === 2 ? 1 : [0.85, 0.35, 0.6, 0.2][c] }}
              />
            ))}
          </div>
        ))}
        <span className="playhead absolute inset-y-0 w-px bg-current" />
      </div>
    </div>
  );
}

function Moth() {
  const frames = [
    { phase: 16, word: "m", label: "SC 01 — Dusk" },
    { phase: 6, word: "mot", label: "SC 02 — Drift" },
    { phase: -4, word: "moth", label: "SC 03 — Light" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-5 md:p-8">
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {frames.map((frame) => (
          <div key={frame.label}>
            <div className="relative aspect-[4/5] overflow-hidden bg-ink text-paper">
              <span
                className="absolute left-1/2 top-[22%] h-[26%] aspect-square -translate-x-1/2 rounded-full bg-paper"
                style={{ boxShadow: `inset ${frame.phase}px 0 0 var(--ink-2)` }}
              />
              <p className="display absolute inset-x-0 bottom-[14%] text-center text-[clamp(1.8rem,4vw,3.4rem)] italic">
                {frame.word}
              </p>
            </div>
            <p className="label mt-2 !text-[0.6rem] opacity-60">{frame.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-3 border-t border-[var(--card-line)] pt-3">
        <span className="label opacity-60">Storyboard</span>
        <span className="h-px flex-1 bg-current opacity-20" />
        <span className="label opacity-60">24 fps</span>
      </div>
    </div>
  );
}

const visuals: Record<Slug, () => React.JSX.Element> = {
  orrery: Orrery,
  tessel: Tessel,
  halcyon: Halcyon,
  moth: Moth,
};

export function Work() {
  return (
    <section id="work" className="wrap py-24 md:py-36">
      <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
        <p className="label text-muted md:col-span-3">
          <span className="text-accent">◢</span> Selected work
        </p>
        <div className="md:col-span-9">
          <h2 className="display text-[clamp(2.8rem,7vw,6.5rem)]">
            A cabinet of <em>curiosities.</em>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Studio concepts that show how we think: one idea each, carried through design, motion and edit.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 md:mt-20">
        {work.map((project, i) => {
          const Visual = visuals[project.slug];
          return (
            <article
              key={project.slug}
              className="group mb-6 last:mb-0 md:sticky md:top-[calc(5.5rem+var(--i)*0.9rem)]"
              style={{ "--i": i } as CSSProperties}
            >
              <div
                className={`card ear ear-group tone-${project.tone} grid min-h-[30rem] md:min-h-[34rem] md:grid-cols-12`}
              >
                <div className="flex flex-col justify-between gap-10 p-7 md:col-span-5 md:p-10">
                  <div className="label flex items-center justify-between opacity-60">
                    <span>
                      0{i + 1} / 0{work.length}
                    </span>
                    <span>Studio concept</span>
                  </div>
                  <div>
                    <p className="label mb-3 opacity-60">{project.kind}</p>
                    <h3 className="display text-[clamp(3.2rem,7vw,6rem)]">{project.name}</h3>
                    <p className="mt-5 max-w-md text-lg leading-relaxed opacity-80">{project.blurb}</p>
                    <ul className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="label border border-[var(--card-line)] px-3 py-2">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="h-96 border-t border-[var(--card-line)] md:col-span-7 md:h-auto md:border-l md:border-t-0"
                  aria-hidden="true"
                >
                  <Visual />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
