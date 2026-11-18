import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { engagements, faqs, principles, process, site } from "@/lib/content";
import { FoldField } from "./FoldField";
import { Mark } from "./Logo";
import { Manifesto } from "./Manifesto";
import { Reveal } from "./Reveal";
import { ServiceFold } from "./ServiceFold";
import { Split } from "./Split";
import { WorkIndex } from "./WorkIndex";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

// Section header: an index number and label on the left, the headline on the right.
function Head({ index, label, children, aside }: { index: string; label: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <Reveal className="grid gap-x-8 gap-y-6 lg:grid-cols-12 lg:items-end">
      <p className="label flex items-center text-muted lg:col-span-3 lg:self-start lg:pt-4">
        <span className="pip" />
        {index} — {label}
      </p>
      <h2 className="display h2 lg:col-span-6">{children}</h2>
      {aside && <div className="lg:col-span-3">{aside}</div>}
    </Reveal>
  );
}

// "Start a project" set on a circle around the mark.
function Badge() {
  return (
    <Link href="/contact" className="group relative grid h-32 w-32 place-items-center lg:h-40 lg:w-40" aria-label="Start a project">
      <svg viewBox="0 0 100 100" className="spin absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M50 50m-41 0a41 41 0 1 1 82 0a41 41 0 1 1-82 0" />
        </defs>
        <text fontSize="7.4" fontFamily="var(--font-geist-mono)" letterSpacing="2.1" fill="currentColor">
          <textPath href="#badge-circle">START A PROJECT — START A PROJECT — </textPath>
        </text>
      </svg>
      <Mark className="mark-live h-12 w-12 transition-transform duration-700 ease-fold group-hover:rotate-90 lg:h-14 lg:w-14" />
    </Link>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-void">
      <FoldField className="absolute inset-0 h-full w-full" />
      <div className="wrap relative flex flex-1 flex-col pb-8 pt-28 md:pb-10">
        <div className="label fade-up flex justify-between gap-6 text-alabaster/60" style={d(700)}>
          <span className="flex items-center gap-2.5">
            <span className="pulse h-1.5 w-1.5 rounded-full bg-go" />
            {site.status}
          </span>
          <span className="hidden md:block">{site.tagline}</span>
          <span>Est. 2026</span>
        </div>

        <h1 className="display mega mt-auto pt-16">
          <span className="line">
            <span style={d(100)}>Curiosity,</span>
          </span>
          <span className="line">
            <span style={d(200)}>
              <em>folded</em> into
            </span>
          </span>
          <span className="line">
            <span style={d(300)}>brands, products</span>
          </span>
          <span className="line">
            <span style={d(400)}>and the web.</span>
          </span>
        </h1>

        <div className="fade-up mt-10 grid items-end gap-8 border-t border-alabaster/15 pt-7 md:grid-cols-12" style={d(750)}>
          <p className="max-w-md text-[1.05rem] leading-relaxed text-alabaster/70 md:col-span-5">
            A design and engineering studio. One team for branding, product design, engineering and websites, from
            the first sketch to the code in production.
          </p>
          <div className="flex flex-wrap gap-2.5 md:col-span-5">
            <Link href="/contact" className="btn btn-ink">
              Start a project <span className="arrow">↗</span>
            </Link>
            <Link href="/work" className="btn btn-line">
              See the work
            </Link>
          </div>
          <div className="hidden justify-end md:col-span-2 md:flex">
            <Badge />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Studio() {
  return (
    <section id="studio" className="zone-light">
      <div className="wrap py-28 md:py-44">
        <div className="grid gap-x-8 gap-y-8 lg:grid-cols-12">
          <p className="label flex items-center self-start text-muted lg:col-span-3 lg:pt-4">
            <span className="pip" />
            01 — Studio
          </p>
          <div className="lg:col-span-9">
            <Manifesto />
          </div>
        </div>

        <ul className="mt-24 grid grid-cols-2 border-t border-line md:mt-36 lg:grid-cols-4">
          {principles.map((item, i) => (
            <li key={item.label} className={`border-line py-8 lg:py-10 ${i % 2 ? "border-l pl-5 lg:pl-8" : "lg:pl-8"} ${i > 1 ? "max-lg:border-t" : ""} ${i ? "lg:border-l" : "lg:!pl-0"}`}>
              <Reveal delay={i * 80}>
                <p className="display text-[clamp(3.5rem,8vw,7.5rem)] !leading-[0.85]">{item.figure}</p>
                <p className="mt-4 max-w-[12rem] text-[0.95rem] leading-snug text-muted">{item.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="zone-dark py-28 md:py-40">
      <div className="wrap">
        <Head
          index="02"
          label="Services"
          aside={<p className="lede lg:pb-2">Six disciplines on one sheet. Open any panel to see what is inside.</p>}
        >
          One sheet, <em>six folds.</em>
        </Head>
      </div>
      <div className="wrap mt-14 md:mt-20">
        <Reveal>
          <ServiceFold />
        </Reveal>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="zone-light py-28 md:py-40">
      <div className="wrap">
        <Head
          index="03"
          label="Selected work"
          aside={
            <p className="lede lg:pb-2">Studio concepts that show how we think. Real client work will take their place.</p>
          }
        >
          A cabinet of <em>curiosities.</em>
        </Head>
        <div className="mt-14 md:mt-20">
          <WorkIndex />
        </div>
        <div className="mt-10 flex justify-end">
          <Link href="/work" className="btn btn-line">
            All projects <span className="arrow">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="zone-bone py-28 md:py-40">
      <div className="wrap">
        <Head
          index="04"
          label="Process"
          aside={<p className="lede lg:pb-2">Design and build move together, so nothing waits on a handoff.</p>}
        >
          From first crease <em>to launch.</em>
        </Head>

        <Reveal className="mt-14 md:mt-20">
          <Split />
          <p className="label mt-4 flex flex-wrap justify-between gap-2 text-muted">
            <span>Drag across: the same screen as a wireframe and as shipped</span>
            <span>Halcyon, studio concept</span>
          </p>
        </Reveal>

        <Reveal className="mt-20 md:mt-28">
          {/* one continuous curve through the five steps, echoing the curve in the mark */}
          <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="hidden h-14 w-full lg:block" fill="none" aria-hidden="true">
            <path
              className="draw"
              pathLength={1}
              d="M0 30C50 30 50 8 100 8s50 44 100 44 50-44 100-44 50 44 100 44 50-44 100-44 50 44 100 44 50-44 100-44 50 44 100 44 50-44 100-44 50 22 100 22"
              stroke="currentColor"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <ol className="grid border-line max-lg:border-t lg:mt-6 lg:grid-cols-5 lg:gap-8">
            {process.map((step, i) => (
              <li key={step.name} className="border-line py-7 max-lg:border-b lg:py-0">
                <p className="label flex justify-between text-muted lg:block">
                  <span>0{i + 1}</span>
                  <span className="lg:ml-3">{step.span}</span>
                </p>
                <h3 className="display mt-4 text-5xl lg:mt-6 lg:text-[clamp(2.4rem,3.6vw,3.6rem)]">
                  <em>{step.name}</em>
                </h3>
                <p className="mt-4 max-w-xs leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export function Engage() {
  return (
    <section id="engage" className="zone-dark py-28 md:py-40">
      <div className="wrap">
        <Head index="05" label="Ways to work together">
          Start small. <em>Or don&rsquo;t.</em>
        </Head>
        <div className="mt-14 grid gap-4 md:mt-20 lg:grid-cols-3">
          {engagements.map((item, i) => (
            <Reveal key={item.name} delay={i * 90} className="h-full">
              <Link href="/contact" className="card group flex h-full flex-col p-7 transition-colors duration-500 hover:bg-ink hover:text-paper md:p-9 [--r:2rem]">
                <p className="label flex justify-between opacity-60">
                  <span>0{i + 1}</span>
                  <span>{item.span}</span>
                </p>
                <h3 className="display mt-20 text-6xl md:mt-28 md:text-7xl">{item.name}</h3>
                <p className="mt-5 max-w-sm leading-relaxed opacity-70">{item.body}</p>
                <ul className="mt-8 border-t border-current/15 text-[0.95rem]">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center border-b border-current/15 py-3">
                      <span className="pip text-[0.65rem]" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="label mt-auto flex items-center justify-between pt-9">
                  Talk about this <span className="arrow text-base">↗</span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="zone-light py-28 md:py-40">
      <div className="wrap grid gap-x-8 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="label flex items-center text-muted">
              <span className="pip" />
              06 — FAQ
            </p>
            <h2 className="display h2 mt-8">
              Fair <em>questions.</em>
            </h2>
            <p className="lede mt-6 max-w-sm">
              Something else on your mind?{" "}
              <a href={`mailto:${site.email}`} className="text-ink underline decoration-1 underline-offset-4">
                Ask us directly.
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-line lg:col-span-7">
          {faqs.map((item, i) => (
            <details key={item.q} className="group border-b border-line" open={i === 0}>
              <summary className="flex items-baseline gap-5 py-6 md:py-7">
                <span className="label text-muted">0{i + 1}</span>
                <span className="display flex-1 text-2xl !leading-tight !tracking-[-0.03em] md:text-[1.9rem]">{item.q}</span>
                <span className="faq-icon text-2xl font-light leading-none" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="faq-a max-w-xl pb-8 pl-10 text-lg leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
