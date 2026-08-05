"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroSlides } from "@/config/site";

/**
 * Ambient 3-slide crossfade behind the home hero. Constraints, in order:
 * 1. Slide 1 (children) is the SSR-rendered, priority-preloaded LCP image —
 *    it renders exactly as before; this component only wraps it.
 * 2. Slides 2/3 mount on idle, load lazily, and the cycle never advances
 *    to a slide that hasn't finished loading (no fade-to-empty).
 * 3. Opacity + transform only. No library. Reduced motion = static slide 1.
 * 4. Cycle pauses when the tab is hidden or the hero is off-screen.
 */
const HOLD_MS = 6000;
const FADE_MS = 1800;

export default function HeroSlideshow({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const [armed, setArmed] = useState(false);
  const [paused, setPaused] = useState(false);
  const loadedRef = useRef<boolean[]>(heroSlides.map(() => false));
  const inViewRef = useRef(true);
  const rootRef = useRef<HTMLDivElement>(null);

  // Arm the lazy slides after the page is idle (never under reduced motion).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const arm = () => setArmed(true);
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(arm, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(arm, 2500);
    return () => clearTimeout(t);
  }, []);

  // Pause on hidden tab or hero out of view.
  useEffect(() => {
    if (!armed) return;
    const update = () => setPaused(document.hidden || !inViewRef.current);
    document.addEventListener("visibilitychange", update);
    const io = new IntersectionObserver((entries) => {
      inViewRef.current = entries[0]?.isIntersecting ?? true;
      update();
    });
    if (rootRef.current) io.observe(rootRef.current);
    return () => {
      document.removeEventListener("visibilitychange", update);
      io.disconnect();
    };
  }, [armed]);

  // The cycle: hold, then crossfade to the next loaded slide.
  useEffect(() => {
    if (!armed || paused) return;
    const id = setInterval(() => {
      setActive((cur) => {
        const next = (cur + 1) % (heroSlides.length + 1);
        if (next > 0 && !loadedRef.current[next - 1]) return cur;
        return next;
      });
    }, HOLD_MS + FADE_MS);
    return () => clearInterval(id);
  }, [armed, paused]);

  const slideCls = (i: number) =>
    `absolute inset-0 hero-slide ${i % 2 ? "hero-zoom-b" : "hero-zoom-a"}`;

  return (
    <div ref={rootRef} className="absolute inset-0" data-paused={paused || undefined}>
      <div
        className={slideCls(0)}
        style={{ opacity: active === 0 ? 1 : 0, transition: `opacity ${FADE_MS}ms ease-in-out` }}
      >
        {children}
      </div>
      {armed &&
        heroSlides.map((s, i) => (
          <div
            key={s.src}
            className={slideCls(i + 1)}
            style={{
              opacity: active === i + 1 ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
            }}
          >
            <Image
              src={s.src}
              alt=""
              fill
              sizes="100vw"
              quality={50}
              className="img-duotone object-cover"
              onLoad={() => {
                loadedRef.current[i] = true;
              }}
            />
          </div>
        ))}
    </div>
  );
}
