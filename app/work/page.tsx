import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "Branding, product design, engineering and websites by Curiofold.",
};

export default function WorkPage() {
  return (
    <main className="wrap pb-28 pt-36 md:pb-40 md:pt-48">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="label fade-up flex items-center text-muted">
            <span className="pip" /> Work — Index
          </p>
          <h1 className="display h1 mt-6">
            <span className="line">
              <span>A cabinet of</span>
            </span>
            <span className="line">
              <span style={{ "--d": "110ms" } as React.CSSProperties}>
                <em>curiosities.</em>
              </span>
            </span>
          </h1>
        </div>
        <p className="lede fade-up lg:col-span-4 lg:pb-4" style={{ "--d": "350ms" } as React.CSSProperties}>
          Studio concepts across product design, engineering, websites and branding. Real client work will take their
          place.
        </p>
      </div>
      <div className="fade-up mt-14 md:mt-20" style={{ "--d": "450ms" } as React.CSSProperties}>
        <WorkGrid />
      </div>
    </main>
  );
}
