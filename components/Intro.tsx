"use client";

import { useEffect } from "react";
import { Mark } from "./Logo";

// Plays once per full page load. The animation itself is CSS, so it also runs without JS.
export function Intro() {
  useEffect(() => {
    const id = setTimeout(() => document.documentElement.style.setProperty("--intro", "0ms"), 2600);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="intro" aria-hidden="true">
      <Mark />
    </div>
  );
}
