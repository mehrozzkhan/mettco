"use client";

import { useEffect, useState } from "react";

/**
 * Brand preloader. Hard rules, in priority order:
 * 1. Speed outranks the preloader — it is time-based, never asset-blocking.
 * 2. Hard cap 1.2s, then it unmounts regardless of load state.
 * 3. Once per session (sessionStorage flag), never on navigations.
 * 4. Skipped entirely under prefers-reduced-motion.
 * Total JS+CSS cost is ~2KB. All visuals live in globals.css.
 */
export default function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("mettco-preloaded")) return;
    sessionStorage.setItem("mettco-preloaded", "1");
    // rAF keeps the setState out of the effect body (no cascading render)
    // and lets the first paint happen before the overlay mounts.
    const raf = requestAnimationFrame(() => setShow(true));
    const t = setTimeout(() => setShow(false), 1200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="preloader" aria-hidden="true">
      <span className="preloader-mark">METTCO</span>
      <span className="preloader-line" />
    </div>
  );
}
