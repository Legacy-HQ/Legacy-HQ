import { nav, site } from "@/lib/content";
import { Clock } from "./Clock";
import { LogoMark } from "./Logo";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="contact" className="zone-dark overflow-hidden bg-ink text-paper">
      <div className="wrap pt-24 md:pt-40">
        <Reveal>
          <p className="label text-paper/50">
            <span className="text-accent">◢</span> Start a project
          </p>
          <h2 className="display mt-8 text-[clamp(3.2rem,10vw,10rem)]">
            Got something curious?
            <br />
            <em className="text-accent">Let&rsquo;s unfold it.</em>
          </h2>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href={`mailto:${site.email}`} className="btn btn-accent ear !px-7 !py-5 !text-lg">
              {site.email} <span className="arrow">↗</span>
            </a>
            <p className="max-w-xs text-sm text-paper/55">
              Tell us what you&rsquo;re making and where it&rsquo;s stuck. It&rsquo;s <Clock /> where you are — a good
              time to start.
            </p>
          </div>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-line-inv pt-10 text-sm md:mt-36 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <LogoMark className="h-9 w-9 text-paper" />
            <p className="mt-5 max-w-xs text-paper/55">{site.description}</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <p className="label mb-4 text-paper/40">Studio</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-paper/80 transition-opacity hover:opacity-60">
                    {item.label}
                  </a>
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
        className="display pointer-events-none mt-10 select-none whitespace-nowrap text-center text-[31vw] !leading-[0.72] text-paper/[0.07]"
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
