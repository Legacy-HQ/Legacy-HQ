import { Mark } from "@/components/Logo";
import type { Metadata } from "next";
import { Brief } from "@/components/Brief";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Start a project",
  description: "Tell Curiofold what you are making. Build a short brief and send it in one email.",
};

const steps = [
  { title: "You write", body: "A few lines is enough. Rough ideas and half-formed briefs are welcome." },
  { title: "We reply", body: "With questions, a first read on the idea and whether we are the right fit." },
  { title: "We scope", body: "A written plan with what we will make, the timeline and the cost." },
];

export default function ContactPage() {
  return (
    <main className="wrap relative pb-24 pt-36 md:pb-36 md:pt-48">
      <Mark className="fade-up pointer-events-none absolute -right-32 top-28 hidden w-[30rem] lg:block" />
      <p className="label fade-up flex items-center text-muted">
        <span className="pip" /> Start a project
      </p>
      <h1 className="display mt-6 text-[clamp(3.4rem,10vw,10rem)]">
        <span className="line">
          <span>Got something</span>
        </span>
        <span className="line">
          <span style={{ "--d": "120ms" } as React.CSSProperties}>
            <em>curious?</em>
          </span>
        </span>
      </h1>

      <div className="fade-up mt-16 grid gap-16 md:mt-24 lg:grid-cols-12" style={{ "--d": "400ms" } as React.CSSProperties}>
        <div className="lg:col-span-7">
          <Brief />
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="rounded-[0_2.5rem_0_2.5rem] bg-paper-2 p-8">
            <p className="label text-muted">Prefer plain email?</p>
            <a href={`mailto:${site.email}`} className="display mt-3 block break-words text-3xl hover:opacity-60">
              {site.email}
            </a>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {site.socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="label mt-12 text-muted">What happens next</p>
          <ol className="mt-4">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5 border-t border-line py-5">
                <span className="label pt-1.5 text-muted">0{i + 1}</span>
                <div>
                  <p className="display text-3xl">{step.title}</p>
                  <p className="mt-1.5 text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </main>
  );
}
