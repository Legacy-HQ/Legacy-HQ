"use client";

import Link from "next/link";
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
    <>
      <Link
        href="/contact"
        className="zone-dark group flex items-center justify-center gap-2.5 px-4 py-2.5 text-center text-[0.82rem] font-semibold"
      >
        <span className="pulse h-1.5 w-1.5 rounded-full bg-go" />
        {site.announcement}. Tell us about yours
        <span className="arrow">→</span>
      </Link>

      <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="wrap flex h-[4.25rem] items-center justify-between gap-6">
          <div className="flex items-center gap-9">
            <Link href="/" aria-label={`${site.name} home`} className="group" onClick={() => setOpen(false)}>
              <Logo />
            </Link>
            <nav aria-label="Primary" className="hidden items-center gap-6 text-[0.9rem] font-medium text-muted lg:flex">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/work" className="btn !px-4 !py-3 !text-sm max-md:!hidden">
              See our work
            </Link>
            <Link href="/contact" className="btn btn-ink !px-4 !py-3 !text-sm" onClick={() => setOpen(false)}>
              Start a project
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute inset-x-0 top-0 h-0.5 bg-ink transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full h-[calc(100dvh-4.25rem)] bg-paper transition-[opacity,visibility] duration-300 lg:hidden ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <nav aria-label="Mobile" className="wrap flex flex-col pt-4">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display flex items-baseline justify-between border-b border-line py-5 text-4xl"
              >
                {item.label}
                <span className="label text-muted">0{i + 1}</span>
              </Link>
            ))}
            <a href={`mailto:${site.email}`} className="pt-6 font-medium text-muted">
              {site.email}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
