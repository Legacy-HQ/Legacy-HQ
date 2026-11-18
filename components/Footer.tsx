import Link from "next/link";
import { nav, site } from "@/lib/content";
import { Clock } from "./Clock";
import { Mark } from "./Logo";
import { Planes } from "./Planes";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="contact" className="zone-dark relative overflow-hidden bg-void">
      <Planes className="opacity-80" />
      <div className="wrap relative pt-24 md:pt-40">
        <Reveal>
          <p className="label flex items-center text-paper/50">
            <span className="pip" /> Start a project
          </p>
          <h2 className="display mt-8 text-[clamp(3.2rem,10vw,10rem)]">
            Got something curious?
            <br />
            <em>Let&rsquo;s unfold it.</em>
          </h2>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn btn-accent leaf !px-7 !py-5 !text-lg [--leaf-size:1.5rem]">
              Write a brief <span className="arrow">↗</span>
            </Link>
            <a href={`mailto:${site.email}`} className="btn btn-line leaf !px-7 !py-5 !text-lg [--leaf-size:1.5rem]">
              {site.email}
            </a>
          </div>
          <p className="mt-6 max-w-sm text-sm text-paper/55">
            Tell us what you&rsquo;re making and where it&rsquo;s stuck. It&rsquo;s <Clock /> where you are, which is a
            good time to start.
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-line-inv pt-10 text-sm md:mt-36 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Mark className="h-12 w-12" />
            <p className="mt-5 max-w-xs text-paper/55">{site.description}</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <p className="label mb-4 text-paper/40">Studio</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-paper/80 transition-opacity hover:opacity-60">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="label mb-4 text-paper/40">Elsewhere</p>
            <ul className="space-y-2.5">
              {site.socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-paper/80 transition-opacity hover:opacity-60">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="display pointer-events-none relative mt-10 select-none whitespace-nowrap text-center text-[31vw] !leading-[0.72] text-paper/[0.07]"
      >
        {site.name}
      </p>
      <div className="wrap label relative -mt-2 flex justify-between pb-6 text-paper/40">
        <span>
          © {2026} {site.name}
        </span>
        <a href="#top" className="transition-opacity hover:opacity-60">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
