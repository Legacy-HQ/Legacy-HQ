import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Branding, product design, engineering and websites by Curiofold.",
};

export default function WorkPage() {
  return (
    <main className="wrap pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="label fade-up flex items-center justify-center text-muted">
          <span className="pip" /> Work
        </p>
        <h1 className="display h1 mt-6">
          <span className="line">
            <span>Latest projects</span>
          </span>
        </h1>
        <p className="lede fade-up mx-auto mt-6 max-w-xl" style={{ "--d": "300ms" } as React.CSSProperties}>
          A selection of studio concepts across product design, engineering, websites and branding.
        </p>
      </div>
      <div className="fade-up mt-12" style={{ "--d": "400ms" } as React.CSSProperties}>
        <WorkGrid />
      </div>
    </main>
  );
}
