"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Logo } from "./Logo";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between border border-line bg-paper/80 py-2 pl-4 pr-2 backdrop-blur-md">
        <a href="#top" aria-label={`${site.name} home`}>
          <Logo />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-ink ear !py-3 !text-sm">
            Start a project
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-ink transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-ink transition-transform duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-5xl origin-top border border-line bg-paper transition-all duration-500 ease-fold md:hidden ${
          open ? "visible opacity-100 [transform:perspective(900px)_rotateX(0)]" : "invisible opacity-0 [transform:perspective(900px)_rotateX(-60deg)]"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col p-4">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display flex items-baseline justify-between border-b border-line py-4 text-4xl"
            >
              {item.label}
              <span className="label text-muted">0{i + 1}</span>
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="label pt-5 text-muted">
            {site.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
