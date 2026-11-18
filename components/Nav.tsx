"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Logo } from "./Logo";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Slide the bar away while scrolling down, bring it back on the way up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 160 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      {/* White on "difference" blending, so the bar reads on both dark and light sections */}
      <header
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 text-white mix-blend-difference transition-transform duration-700 ease-fold ${
          hidden && !open ? "-translate-y-full" : ""
        }`}
      >
        <div className="wrap flex h-20 items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} home`} className="group pointer-events-auto" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <nav aria-label="Primary" className="pointer-events-auto hidden items-center gap-8 text-[0.92rem] md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="opacity-70 transition-opacity hover:opacity-100">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pointer-events-auto flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-[0_0.8rem_0_0.8rem] bg-white px-4 py-3 text-sm font-medium leading-none text-black transition-[border-radius] duration-500 hover:rounded-[0.8rem_0_0.8rem_0]"
              onClick={() => setOpen(false)}
            >
              Start a project
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-2.5 w-6">
                <span className={`absolute inset-x-0 top-0 h-px bg-white transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
                <span className={`absolute inset-x-0 bottom-0 h-px bg-white transition-transform duration-300 ${open ? "-translate-y-1 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`zone-dark fixed inset-0 z-40 flex flex-col justify-end transition-[clip-path,visibility] duration-700 ease-fold md:hidden ${
          open ? "visible [clip-path:inset(0)]" : "invisible [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav aria-label="Mobile" className="wrap flex flex-col pb-10">
          {[...nav, { label: "Contact", href: "/contact" }].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display flex items-baseline justify-between border-b border-line py-4 text-5xl"
            >
              {item.label}
              <span className="label text-muted">0{i + 1}</span>
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="pt-6 text-muted">
            {site.email}
          </a>
        </nav>
      </div>
    </>
  );
}
