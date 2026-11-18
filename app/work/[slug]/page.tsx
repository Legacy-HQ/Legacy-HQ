import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Frames } from "@/components/Frames";
import { Mark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { visuals } from "@/components/Work";
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

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = work.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = work[index];
  const next = work[(index + 1) % work.length];
  const Visual = visuals[project.slug];

  return (
    <main>
      <section className="wrap pt-36 md:pt-48">
        <Link href="/work" className="label fade-up inline-flex items-center gap-2 text-muted hover:text-ink">
          ← All work
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label fade-up flex items-center text-muted">
              <span className="pip" />
              {project.kind} · Studio concept
            </p>
            <h1 className="display mt-5 text-[clamp(4.5rem,15vw,15rem)]">
              <span className="line">
                <span>{project.name}</span>
              </span>
            </h1>
          </div>
          <p
            className="fade-up max-w-md text-lg leading-relaxed text-muted lg:col-span-4 lg:pb-6"
            style={{ "--d": "300ms" } as React.CSSProperties}
          >
            {project.blurb}
          </p>
        </div>

        <dl className="fade-up mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-3" style={{ "--d": "400ms" } as React.CSSProperties}>
          {project.specs.map((spec) => (
            <div key={spec.k}>
              <dt className="label text-muted">{spec.k}</dt>
              <dd className="mt-2 text-lg">{spec.v}</dd>
            </div>
          ))}
        </dl>

        <div
          className={`card fade-up tone-${project.tone} mt-12 h-[26rem] rounded-[0_clamp(2rem,5vw,4.5rem)_0_clamp(2rem,5vw,4.5rem)] md:h-[38rem]`}
          style={{ "--d": "500ms" } as React.CSSProperties}
          aria-hidden="true"
        >
          <Visual />
        </div>
      </section>

      <section className="wrap py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {project.story.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <p className="label text-muted">Step 0{i + 1}</p>
              <h2 className="display mt-3 text-5xl md:text-6xl">{step.title}</h2>
              <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 md:mt-32">
          <Frames slug={project.slug} />
        </Reveal>

        <Reveal className="mt-24 grid gap-8 border-t border-line pt-10 md:mt-32 md:grid-cols-12">
          <p className="label flex items-center self-start text-muted md:col-span-3">
            <span className="pip" /> Delivered
          </p>
          <ul className="md:col-span-5">
            {project.deliverables.map((item) => (
              <li key={item} className="display border-b border-line py-3 text-3xl md:text-4xl">
                {item}
              </li>
            ))}
          </ul>
          <div className="md:col-span-4 md:pl-8">
            <p className="text-lg leading-relaxed text-muted">
              Want something like this for your own brand, channel or launch? Tell us what you have in mind.
            </p>
            <Link href="/contact" className="btn btn-ink leaf mt-6">
              Start a project <span className="arrow">↗</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Next project, set like the brand's light banner */}
      <Link href={`/work/${next.slug}`} className="group relative block overflow-hidden border-t border-line bg-paper-2">
        <div className="wrap relative py-20 md:py-28">
          <p className="label text-muted">Next project</p>
          <p className="display mt-4 text-[clamp(4rem,12vw,11rem)]">
            {next.name}
            <span className="ml-[0.2em] inline-block transition-transform duration-700 ease-fold group-hover:translate-x-[0.2em]">
              →
            </span>
          </p>
          <p className="mt-2 text-lg text-muted">{next.kind}</p>
        </div>
        <Mark className="pointer-events-none absolute -right-[12%] top-1/2 hidden h-[190%] w-auto -translate-y-1/2 transition-transform duration-[1400ms] ease-fold group-hover:rotate-90 md:block" />
      </Link>
    </main>
  );
}
