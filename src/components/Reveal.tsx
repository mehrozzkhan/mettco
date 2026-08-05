"use client";

import { useEffect } from "react";

/**
 * Arms the scroll-reveal system: adds .reveal-armed to <body>, then an
 * IntersectionObserver flips .is-in on each .reveal element, once.
 * Content is never hidden without JS or under reduced motion (see CSS).
 * Stagger is applied via transition-delay, capped at 60ms per row.
 */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.body.classList.add("reveal-armed");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          const i = Number(el.dataset.revealIndex ?? 0);
          el.style.transitionDelay = `${Math.min(i, 4) * 60}ms`;
          el.classList.add("is-in");
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
