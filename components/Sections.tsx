import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { compare, faqs, figures, pilot, process, sectors, services, site, stack, work } from "@/lib/content";
import { ServiceArt } from "./Iso";
import { Logo } from "./Logo";
import { ProjectVisual } from "./Mock";
import { Reveal } from "./Reveal";
import { Split } from "./Split";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Head({ eyebrow, title, lede }: { eyebrow: string; title: ReactNode; lede?: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="label flex items-center justify-center text-muted">
        <span className="pip" />
        {eyebrow}
      </p>
      <h2 className="display h2 mt-5">{title}</h2>
      {lede && <p className="lede mx-auto mt-5 max-w-xl">{lede}</p>}
    </Reveal>
  );
}

export function Hero() {
  return (
    <section className="wrap pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-[76rem] text-center">
        <p className="fade-up inline-flex items-center gap-2.5 rounded-[0_0.6rem_0_0.6rem] bg-paper-2 px-3.5 py-2 text-[0.82rem] font-medium text-muted" style={d(80)}>
          <span className="pulse h-1.5 w-1.5 rounded-full bg-go" />
          {site.announcement}
        </p>
        <h1 className="display h1 mt-7">
          <span className="line">
            <span style={d(120)}>A design and engineering studio</span>
          </span>
          <span className="line">
            <span style={d(230)}>
              <em>for brands, products and the web.</em>
            </span>
          </span>
        </h1>
        <div className="fade-up" style={d(520)}>
          <p className="lede mx-auto mt-7 max-w-2xl">
            We work as an extension of your team: one studio for branding, product design, engineering and websites,
            from the first sketch to the code in production.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            <Link href="/contact" className="btn btn-ink !px-7 !py-5 !text-base">
              Start a project
            </Link>
            <Link href="/work" className="btn btn-soft !px-7 !py-5 !text-base">
              See our work
            </Link>
          </div>
        </div>
      </div>

      <div className="fade-up mt-16 md:mt-20" style={d(380)}>
        <Split />
        <p className="label mt-5 flex flex-wrap justify-between gap-2 text-muted">
          <span>Drag across to see a design become a product</span>
          <span>Halcyon, studio concept</span>
        </p>
      </div>

      <Reveal className="mt-20 md:mt-28">
        <p className="text-center text-[0.95rem] font-semibold">Built for teams in</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {sectors.map((sector) => (
            <li key={sector} className="display text-2xl text-muted/70 md:text-[1.75rem]">
              {sector}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

// Card layout per service: three across, then two wide, then one full-width.
const spans = ["lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3", "lg:col-span-6"];

export function Services() {
  return (
    <section id="services" className="zone-dark py-24 md:py-32">
      <div className="wrap">
        <Head
          eyebrow="Services"
          title="Everything a product needs to look and work its best."
          lede="Branding, product design, engineering and websites for teams where quality is not negotiable."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, i) => {
            const wide = i === 5;
            return (
              <Reveal key={service.id} delay={(i % 3) * 80} className={`${spans[i]} ${wide ? "md:col-span-2" : ""}`}>
                <article className={`svc card relative flex h-full overflow-hidden ${wide ? "flex-col lg:flex-row" : "flex-col"}`}>
                  <h3 className="display h3 absolute left-6 top-6 z-10 max-w-[70%]">{service.name}</h3>
                  <span className="label absolute right-6 top-7 z-10 text-muted">0{i + 1}</span>
                  <div className={`relative ${wide ? "lg:order-2 lg:w-1/2" : ""}`}>
                    <div className="iso-grid absolute inset-0" />
                    <ServiceArt id={service.id} className={`relative mx-auto mt-20 block h-72 w-full px-8 ${wide ? "lg:mb-8 lg:mt-10 lg:h-80" : ""}`} />
                  </div>
                  <div className={`flex flex-1 flex-col p-6 pt-4 ${wide ? "lg:w-1/2 lg:justify-end lg:pt-24" : ""}`}>
                    <p className="leading-relaxed text-muted">{service.body}</p>
                    <ul className="mt-5 space-y-2 border-t border-line pt-5 text-[0.92rem]">
                      {service.gets.map((item) => (
                        <li key={item} className="flex items-center">
                          <span className="pip text-[0.7rem]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                      {service.tags.map((tag) => (
                        <li key={tag} className="tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Figures() {
  return (
    <section className="wrap py-20 md:py-28">
      <ul className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {figures.map((item, i) => (
          <li key={item.label}>
            <Reveal delay={i * 80} className="text-center">
              <p className="display text-[clamp(3.5rem,8vw,6.25rem)] !leading-none !tracking-[-0.05em]">{item.figure}</p>
              <p className="mt-3 text-[0.95rem] font-medium text-muted">{item.label}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Spotlights() {
  return (
    <section id="work" className="zone-dark py-24 md:py-32">
      <div className="wrap">
        <Head
          eyebrow="Project spotlights"
          title="A closer look at the work."
          lede="Studio concepts that show how we think, and the decisions behind each one."
        />
        <div className="mt-14 space-y-5">
          {work.map((project, i) => (
            <Reveal key={project.slug}>
              <article className="card grid gap-6 p-4 md:p-5 lg:grid-cols-2 lg:gap-8">
                <Link
                  href={`/work/${project.slug}`}
                  className={`group block overflow-hidden rounded-[0_0.9rem_0_0.9rem] border border-line ${i % 2 ? "lg:order-2" : ""}`}
                  aria-label={`${project.name} project`}
                >
                  <ProjectVisual fill slug={project.slug} className="transition-transform duration-[1200ms] ease-fold group-hover:scale-[1.03]" />
                </Link>
                <div className="flex flex-col p-2 md:p-4">
                  <p className="label flex items-center justify-between text-muted">
                    <span>{project.kind}</span>
                    <span>Concept</span>
                  </p>
                  <h3 className="display mt-4 text-4xl md:text-5xl">{project.name}</h3>
                  <div className="mt-5 space-y-4 leading-relaxed text-muted">
                    {project.paragraphs.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {[...project.sectors, ...project.tags].map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/work/${project.slug}`} className="btn btn-line group mt-auto w-full !py-4 max-lg:mt-8 lg:mt-8">
                    View project <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/work" className="btn btn-ink">
            See all work <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Compare() {
  const heads = [site.name, ...compare.columns];
  return (
    <section id="compare" className="wrap py-24 md:py-32">
      <Head eyebrow="How we compare" title="One studio, instead of a hire or a handful of freelancers." />

      {/* Table on wide screens */}
      <Reveal className="mt-14 hidden md:block">
        <div role="table" className="grid grid-cols-[0.9fr_1.15fr_1fr_1fr]">
          <div role="row" className="contents">
            <span role="columnheader" />
            <span role="columnheader" className="leaf grid place-items-center !rounded-bl-none bg-paper-2 py-7">
              <Logo />
            </span>
            {compare.columns.map((column) => (
              <span key={column} role="columnheader" className="grid place-items-center border-l border-line py-7 text-lg font-semibold tracking-tight">
                {column}
              </span>
            ))}
          </div>
          {compare.rows.map((row, i) => (
            <div key={row.topic} role="row" className="contents">
              <span role="rowheader" className="flex items-center border-t border-line py-6 pr-4 text-lg font-semibold tracking-tight">
                {row.topic}
              </span>
              <span
                role="cell"
                className={`flex items-center justify-center border-t border-line bg-paper-2 px-6 py-6 text-center font-medium ${
                  i === compare.rows.length - 1 ? "rounded-bl-[1.1rem]" : ""
                }`}
              >
                {row.us}
              </span>
              {row.others.map((cell, j) => (
                <span key={j} role="cell" className="flex items-center justify-center border-l border-t border-line px-6 py-6 text-center text-muted">
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Stacked on phones */}
      <ul className="mt-10 space-y-3 md:hidden">
        {compare.rows.map((row) => (
          <li key={row.topic} className="card p-5">
            <p className="text-lg font-semibold tracking-tight">{row.topic}</p>
            <dl className="mt-3 space-y-2.5 text-[0.95rem]">
              {[row.us, ...row.others].map((cell, i) => (
                <div key={i} className="grid grid-cols-[6.5rem_1fr] gap-3">
                  <dt className={i ? "text-muted" : "font-semibold"}>{heads[i]}</dt>
                  <dd className={i ? "text-muted" : "font-medium"}>{cell}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="zone-surface border-y border-line py-24 md:py-32">
      <div className="wrap">
        <Head
          eyebrow="Process"
          title="Design and build move together."
          lede="No big reveal at the end. You see working progress every week, and engineering never waits on a handoff."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-[0_1.1rem_0_1.1rem] border border-line bg-line md:grid-cols-5">
          {process.map((step, i) => (
            <li key={step.name} className="bg-paper">
              <Reveal delay={i * 70} className="flex h-full flex-col p-6">
                <p className="label flex justify-between text-muted">
                  <span>0{i + 1}</span>
                  <span>{step.span}</span>
                </p>
                <h3 className="display h3 mt-10 md:mt-16">{step.name}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section className="py-20 md:py-28">
      <Head eyebrow="Tech stack" title="The tools we design and build with." />
      <div className="fade-x mt-12 overflow-hidden" aria-hidden="true">
        <div className="marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {stack.map((tool) => (
                <li key={tool} className="display flex items-center pr-12 text-3xl text-muted/60 md:text-[2.5rem]">
                  {tool}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="sr-only">{stack.join(", ")}</p>
    </section>
  );
}

export function Pilot() {
  return (
    <section className="zone-surface border-y border-line py-24 md:py-32">
      <Reveal className="mx-auto max-w-2xl px-5 text-center">
        <h2 className="display h2">
          {pilot.title}
          <span className="ml-3 inline-block -rotate-3 rounded-[0_0.7rem_0_0.7rem] bg-paper-2 px-4 py-1.5 align-middle text-[0.55em] tracking-tight">
            {pilot.badge}
          </span>
        </h2>
        <div className="mt-7 space-y-5">
          {pilot.body.map((text) => (
            <p key={text} className="lede">
              {text}
            </p>
          ))}
        </div>
        <Link href="/contact" className="btn btn-ink mt-9 !px-12 !py-5 !text-base">
          Start a project
        </Link>
      </Reveal>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="wrap py-24 md:py-32">
      <Head eyebrow="FAQs" title="Fair questions, straight answers." />
      <div className="mx-auto mt-12 max-w-2xl space-y-2.5">
        {faqs.map((item, i) => (
          <Reveal key={item.q} delay={i * 40}>
            <details className="card group" open={i === 0}>
              <summary className="flex items-center justify-between gap-6 px-6 py-5 text-lg font-semibold tracking-tight">
                {item.q}
                <svg viewBox="0 0 12 8" className="faq-icon h-2 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m1 1.5 5 5 5-5" />
                </svg>
              </summary>
              <p className="faq-a px-6 pb-6 leading-relaxed text-muted">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
