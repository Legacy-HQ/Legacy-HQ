import type { CSSProperties } from "react";
import { FoldSheet } from "@/components/FoldSheet";
import { Footer } from "@/components/Footer";
import { Manifesto } from "@/components/Manifesto";
import { Nav } from "@/components/Nav";
import { Engage, Faq, Principles, Process } from "@/components/Sections";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { marquee, site } from "@/lib/content";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Nav />

      <main id="top">
        <section className="wrap pt-28 md:pt-36">
          <p className="label fade-up flex items-center gap-3 text-muted" style={d(100)}>
            <span className="inline-block h-2 w-2 bg-accent" />
            {site.tagline}
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
            <h1 className="display text-[clamp(3.4rem,9.2vw,9.5rem)] lg:col-span-8">
              <span className="line">
                <span style={d(150)}>Curiosity, folded</span>
              </span>
              <span className="line">
                <span style={d(270)}>into things</span>
              </span>
              <span className="line">
                <span style={d(390)}>
                  that <em>move.</em>
                </span>
              </span>
            </h1>
            <div className="fade-up lg:col-span-4 lg:pb-4" style={d(700)}>
              <p className="max-w-md text-lg leading-relaxed text-muted">
                We&rsquo;re a creative studio for motion design, graphic design and video editing. One team shapes the
                idea, designs it, animates it and cuts it, so nothing gets lost between the sketch and the final frame.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-ink ear">
                  Start a project <span className="arrow">↗</span>
                </a>
                <a href="#work" className="btn btn-line ear">
                  See the work
                </a>
              </div>
            </div>
          </div>

          <div className="fade-up mt-14 md:mt-16" style={d(500)}>
            <FoldSheet />
            <p className="label mt-8 flex justify-between text-muted">
              <span>Scroll to unfold</span>
              <span aria-hidden="true">↓</span>
            </p>
          </div>
        </section>

        <div className="mt-20 overflow-hidden border-y border-line py-5 md:mt-28" aria-hidden="true">
          <div className="marquee">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center">
                {marquee.map((item) => (
                  <li key={item} className="display flex items-center gap-8 pr-8 text-3xl md:text-5xl">
                    {item}
                    <span className="text-xl text-accent">◢</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <Manifesto />
        <Services />
        <Work />
        <Process />
        <Principles />
        <Engage />
        <Faq />
      </main>

      <Footer />
    </>
  );
}
