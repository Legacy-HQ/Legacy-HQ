import Link from "next/link";
import { nav, services, site, work } from "@/lib/content";
import { FoldField } from "./FoldField";
import { Mark } from "./Logo";

const link = "opacity-70 transition-opacity hover:opacity-100";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label text-muted">{title}</p>
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="zone-dark relative overflow-hidden !bg-void">
      <FoldField className="absolute inset-0 h-full w-full opacity-80" />
      <div className="wrap relative">
        <div className="pb-24 pt-28 md:pb-36 md:pt-44">
          <p className="label flex items-center text-alabaster/60">
            <span className="pip" />
            Next — Yours
          </p>
          <Link href="/contact" className="group mt-8 block">
            <span className="display block text-[clamp(3.2rem,12.5vw,14rem)] !leading-[0.86]">
              Let&rsquo;s <em>unfold</em>
              <br />
              something
              <span className="arrow ml-[0.12em] inline-block text-[0.7em]">↗</span>
            </span>
          </Link>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
            <Link href="/contact" className="btn btn-ink">
              Write a brief <span className="arrow">↗</span>
            </Link>
            <a href={`mailto:${site.email}`} className="text-lg underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-60">
              {site.email}
            </a>
          </div>
        </div>

        <div className="grid gap-12 border-t border-alabaster/15 py-14 text-[0.95rem] lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <Mark className="mark-live h-10 w-10" />
              <span className="display text-2xl">{site.name}</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-alabaster/55">{site.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            <Column title="Index">
              {[{ label: "Home", href: "/" }, ...nav, { label: "Contact", href: "/contact" }].map((item) => (
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
            <Column title="Work">
              {work.map((project) => (
                <li key={project.slug}>
                  <Link href={`/work/${project.slug}`} className={link}>
                    {project.name}
                  </Link>
                </li>
              ))}
            </Column>
            <Column title="Elsewhere">
              {site.socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </Column>
          </div>
        </div>

        <div className="label flex flex-wrap justify-between gap-3 border-t border-alabaster/15 py-6 text-alabaster/50">
          <span>
            © {2026} {site.name}
          </span>
          <span className="hidden sm:block">{site.tagline}</span>
          <a href="#top" className="transition-opacity hover:opacity-60">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
