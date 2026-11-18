import { engagements, faqs, principles, process } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="bg-paper-2 py-24 md:py-36">
      <div className="wrap">
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <p className="label text-muted md:col-span-3">
            <span className="pip" /> Process
          </p>
          <h2 className="display text-[clamp(2.8rem,7vw,6.5rem)] md:col-span-9">
            Every project follows <em>a crease pattern.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-16 md:mt-24">
          {/* mountain/valley line that draws itself across the four steps */}
          <svg viewBox="0 0 1200 80" className="hidden w-full md:block" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <path
              pathLength={1}
              className="draw"
              d="M0 70 150 10l150 60L450 10l150 60L750 10l150 60 150-60 150 60"
              stroke="var(--ink)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
            {[150, 450, 750, 1050].map((x) => (
              <circle key={x} cx={x} cy="10" r="5" fill="var(--ink)" />
            ))}
          </svg>
          <ol className="grid gap-10 md:mt-8 md:grid-cols-4 md:gap-8">
            {process.map((step, i) => (
              <li key={step.name} className="border-t border-line pt-5 md:border-t-0 md:pt-0">
                <p className="label text-muted">Step 0{i + 1}</p>
                <h3 className="display mt-3 text-5xl md:text-6xl">{step.name}</h3>
                <p className="mt-4 max-w-xs leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section className="zone-dark bg-ink-2 text-paper">
      <div className="wrap grid grid-cols-2 md:grid-cols-4">
        {principles.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 80}
            className={`border-paper/15 px-2 py-12 md:px-8 md:py-20 ${i % 2 ? "border-l pl-6" : ""} ${i > 1 ? "max-md:border-t" : ""} ${i > 0 ? "md:border-l" : ""}`}
          >
            <p className="display text-[clamp(4.5rem,11vw,10rem)] !leading-[0.8]">{item.figure}</p>
            <p className="mt-5 max-w-[14rem] text-sm font-medium leading-snug md:text-base">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Engage() {
  return (
    <section id="engage" className="wrap py-24 md:py-36">
      <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
        <p className="label text-muted md:col-span-3">
          <span className="pip" /> Ways to work together
        </p>
        <h2 className="display text-[clamp(2.8rem,7vw,6.5rem)] md:col-span-9">
          Start small. <em>Or don&rsquo;t.</em>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
        {engagements.map((item, i) => (
          <Reveal key={item.name} delay={i * 90} className="h-full">
            <div
              className={`leaf group flex h-full flex-col p-8 [--leaf-size:36px] ${
                item.featured ? "zone-dark bg-ink text-paper" : "border border-line"
              }`}
            >
              <div className="label flex justify-between opacity-60">
                <span>0{i + 1}</span>
                <span>{item.span}</span>
              </div>
              <h3 className="display mt-14 text-6xl">{item.name}</h3>
              <p className="mt-4 leading-relaxed opacity-75">{item.body}</p>
              <ul className="mt-8 space-y-3 border-t border-current/15 pt-6 text-sm">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="pip" />
                    {point}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="label mt-auto inline-flex items-center gap-2 pt-10 transition-opacity hover:opacity-60">
                Talk about this <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="wrap pb-24 md:pb-36">
      <div className="grid gap-10 border-t border-line pt-16 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="label text-muted">
            <span className="pip" /> FAQ
          </p>
          <h2 className="display mt-6 text-[clamp(2.6rem,5vw,4.5rem)]">
            Fair <em>questions.</em>
          </h2>
        </Reveal>
        <div className="md:col-span-8">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <details className="border-b border-line" open={i === 0}>
                <summary className="flex items-center justify-between gap-6 py-6 text-xl font-medium md:text-2xl">
                  {item.q}
                  <span className="faq-plus text-3xl font-light leading-none" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="faq-a max-w-2xl pb-8 text-lg leading-relaxed text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
