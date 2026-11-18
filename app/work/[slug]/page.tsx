import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/Mock";
import { Reveal } from "@/components/Reveal";
import { work } from "@/lib/content";

export function generateStaticParams() {
  return work.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = work.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: `${project.name}, ${project.kind.toLowerCase()}`, description: project.blurb };
}

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = work.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = work[index];
  const next = work[(index + 1) % work.length];

  return (
    <main>
      <section className="wrap pt-32 md:pt-40">
        <Link href="/work" className="fade-up inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
          ← All work
        </Link>
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <ul className="fade-up flex flex-wrap gap-1.5">
              {[...project.sectors, "Studio concept"].map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
            <h1 className="display mt-5 text-[clamp(3.5rem,10vw,8.5rem)] !leading-[0.95] !tracking-[-0.04em]">
              <span className="line">
                <span>{project.name}</span>
              </span>
            </h1>
          </div>
          <p className="lede fade-up lg:col-span-5 lg:pb-3" style={d(300)}>
            {project.blurb}
          </p>
        </div>

        <dl className="fade-up mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3" style={d(400)}>
          {project.specs.map((spec) => (
            <div key={spec.k}>
              <dt className="label text-muted">{spec.k}</dt>
              <dd className="mt-2 text-lg font-medium tracking-tight">{spec.v}</dd>
            </div>
          ))}
        </dl>

        <div className="fade-up mt-10 overflow-hidden rounded-[0_1.75rem_0_1.75rem] border border-line shadow-[0_3rem_6rem_-3rem_rgb(0_0_0/0.7)]" style={d(500)}>
          <ProjectVisual slug={project.slug} />
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <div className="grid gap-4 md:grid-cols-3">
          {project.story.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} className="h-full">
              <div className="card flex h-full flex-col p-6">
                <p className="label text-muted">0{i + 1}</p>
                <h2 className="display h3 mt-12">{step.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label flex items-center text-muted">
              <span className="pip" /> The brief
            </p>
            <div className="mt-5 space-y-4 text-lg leading-relaxed">
              {project.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="label flex items-center text-muted">
              <span className="pip" /> Delivered
            </p>
            <ul className="mt-5">
              {project.deliverables.map((item, i) => (
                <li key={item} className="display flex items-baseline justify-between border-t border-line py-4 text-2xl md:text-3xl">
                  {item}
                  <span className="label text-muted">0{i + 1}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-ink mt-8">
              Start a project like this <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <Link href={`/work/${next.slug}`} className="zone-light group block">
        <div className="wrap grid items-center gap-8 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="label text-muted">Next project</p>
            <p className="display mt-4 flex items-center gap-4 text-[clamp(3rem,8vw,6.5rem)]">
              {next.name} <span className="arrow text-[0.5em] text-muted">→</span>
            </p>
            <p className="mt-2 text-lg text-muted">{next.kind}</p>
          </div>
          <div className="leaf overflow-hidden border border-line">
            <ProjectVisual slug={next.slug} className="transition-transform duration-[1200ms] ease-fold group-hover:scale-[1.03]" />
          </div>
        </div>
      </Link>
    </main>
  );
}
