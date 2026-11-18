import { site } from "@/lib/content";

// Temporary mark. To use the real logo, drop the file in /public and replace
// the <svg> below (or the whole component) — every logo on the site comes from here.
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M2 2h18l10 10v18H2z" fill="currentColor" />
      <path d="M20 2v10h10z" fill="currentColor" opacity=".45" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-6 w-6" />
      <span className="text-[1.15rem] font-semibold tracking-tight">{site.name}</span>
    </span>
  );
}
