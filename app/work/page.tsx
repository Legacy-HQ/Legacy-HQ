import { Mark } from "@/components/Logo";
import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Motion design, graphic design and video editing by Curiofold.",
};

export default function WorkPage() {
  return (
    <main className="wrap relative pb-24 pt-36 md:pb-36 md:pt-48">
      <Mark className="fade-up pointer-events-none absolute -right-32 top-28 hidden w-[30rem] lg:block" />
      <p className="label fade-up flex items-center text-muted">
        <span className="pip" /> Work
      </p>
      <h1 className="display mt-6 text-[clamp(3.4rem,10vw,10rem)]">
        <span className="line">
          <span>A cabinet of</span>
        </span>
        <span className="line">
          <span style={{ "--d": "120ms" } as React.CSSProperties}>
            <em>curiosities.</em>
          </span>
        </span>
      </h1>
      <p className="fade-up mt-8 max-w-xl text-lg leading-relaxed text-muted" style={{ "--d": "400ms" } as React.CSSProperties}>
        Studio concepts that show how we think: one idea each, carried through design, motion and edit.
      </p>
      <div className="mt-14 md:mt-20">
        <WorkGrid />
      </div>
    </main>
  );
}
