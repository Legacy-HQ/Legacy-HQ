import { markPaths } from "@/lib/mark";
import { site } from "@/lib/content";

// The Curiofold mark. Each piece carries a class (mp-*) so it can be animated on its own.
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`mark ${className}`} fill="currentColor" aria-hidden="true">
      <path className="mp-tl" d={markPaths.topLeft} />
      <path className="mp-tr" d={markPaths.topRight} />
      <path className="mp-bl" d={markPaths.bottomLeft} />
      <path className="mp-br" d={markPaths.bottomRight} />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className="mark-live h-7 w-7" />
      <span className="display text-[1.35rem]">{site.name}</span>
    </span>
  );
}
