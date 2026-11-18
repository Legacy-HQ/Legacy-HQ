import Link from "next/link";
import { nav, services, site, work } from "@/lib/content";
import { Mark } from "./Logo";

export function Cta() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <Mark className="pointer-events-none absolute -left-72 top-1/2 hidden h-[125%] w-auto -translate-y-1/2 opacity-[0.06] lg:block" />
      <Mark className="pointer-events-none absolute -right-72 top-1/2 hidden h-[125%] w-auto -translate-y-1/2 opacity-[0.06] sm:block" />
      <div className="wrap relative py-28 text-center md:py-40">
        <h2 className="display mx-auto max-w-4xl text-[clamp(2.8rem,7.5vw,6.5rem)]">
          Let&rsquo;s build something <em>worth noticing.</em>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          <Link href="/contact" className="btn btn-ink !px-7 !py-5 !text-base">
            Start a project
          </Link>
          <Link href="/work" className="btn btn-soft !px-7 !py-5 !text-base">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-semibold">{title}</p>
      <ul className="mt-4 space-y-2.5 text-muted">{children}</ul>
    </div>
  );
}

const link = "transition-colors hover:text-ink";

export function Footer() {
  return (
    <footer className="zone-dark overflow-hidden">
      <div className="wrap grid gap-12 pb-16 pt-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <Mark className="mark-live h-9 w-9" />
            <span className="text-xl font-semibold tracking-tight">{site.name}</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{site.description}</p>
          <p className="mt-6 text-sm text-muted">
            © {2026} {site.name}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-[0.92rem] sm:grid-cols-4 lg:col-span-8">
          <Column title="Pages">
            <li>
              <Link href="/" className={link}>
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </Column>
          <Column title="Services">
            {services.map((service) => (
              <li key={service.id}>
                <Link href="/#services" className={link}>
                  {service.name.replace("Full-stack product engineering", "Engineering")}
                </Link>
              </li>
            ))}
          </Column>
          <Column title="Recent work">
            {work.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} className={link}>
                  {project.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/work" className={link}>
                All projects
              </Link>
            </li>
          </Column>
          <Column title="Contact">
            <li>
              <Link href="/contact" className={link}>
                Start a project
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={link}>
                Email
              </a>
            </li>
            {site.socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={link}>
                  {item.label}
                </a>
              </li>
            ))}
          </Column>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="display outline-word pointer-events-none -mb-[0.16em] select-none whitespace-nowrap text-center text-[25.5vw] !leading-[0.8] !tracking-[-0.05em]"
      >
        {site.name}
      </p>
    </footer>
  );
}
