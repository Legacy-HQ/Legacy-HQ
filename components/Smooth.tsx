"use client";

import Lenis from "lenis";
import { useEffect } from "react";

// Inertial scrolling for the whole site. Skipped when the visitor prefers reduced motion.
export function Smooth() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.11 });
    return () => lenis.destroy();
  }, []);

  return null;
}
