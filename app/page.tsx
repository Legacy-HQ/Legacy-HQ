import type { CSSProperties } from "react";
import Link from "next/link";
import { FoldSheet } from "@/components/FoldSheet";
import { Formats } from "@/components/Formats";
import { HeroMark } from "@/components/HeroMark";
import { Manifesto } from "@/components/Manifesto";
import { Engage, Faq, Principles, Process } from "@/components/Sections";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { marquee, site } from "@/lib/content";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <main>
      <section className="wrap pt-28 md:pt-36">
        <div className="grid items-center gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label fade-up flex items-center text-muted" style={d(100)}>
              <span className="pip" />
              {site.tagline}
            </p>
            <h1 className="display mt-6 text-[clamp(3.3rem,7.7vw,8.4rem)]">
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
            <div className="fade-up" style={d(700)}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
                We&rsquo;re a creative studio for motion design, graphic design and video editing. One team shapes the
                idea, designs it, animates it and cuts it, so nothing gets lost between the sketch and the final frame.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-ink leaf">
                  Start a project <span className="arrow">↗</span>
                </Link>
                <Link href="/work" className="btn btn-line leaf">
                  See the work
                </Link>
              </div>
            </div>
          </div>

          {/* The mark bleeds off the right edge, as it does on the brand's light banner */}
          <div className="fade-up lg:col-span-5" style={d(300)}>
            <HeroMark className="ml-auto aspect-square w-[82%] translate-x-[22%] sm:w-[60%] lg:w-[128%] lg:translate-x-[18%]" />
          </div>
        </div>

        <div className="fade-up mt-16 md:mt-24" style={d(500)}>
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
                  <span className="pip text-xl" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <Manifesto />
      <Services />
      <Work />
      <Formats />
      <Process />
      <Principles />
      <Engage />
      <Faq />
    </main>
  );
}
