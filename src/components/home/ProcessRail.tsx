"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { processSteps } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * SIGNATURE 2 — the 5-step process as a vertical line that draws itself
 * on scroll; each node activates as it enters the viewport.
 */
export function ProcessRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.4,
  });

  return (
    <section className="grid-texture bg-ink py-24 md:py-32">
      <div className="container-x relative">
        <SectionHeader
          eyebrow="04 — Our process"
          title="Five steps. Zero surprises."
          lead="A disciplined procurement workflow that turns your requirement into delivered, verified supply."
        />

        <div ref={railRef} className="relative mx-auto mt-16 max-w-3xl">
          {/* Rail track */}
          <span
            aria-hidden
            className="absolute bottom-4 left-[15px] top-4 w-px bg-line md:left-[19px]"
          />
          {/* Rail draw */}
          <motion.span
            aria-hidden
            style={{ scaleY: reduce ? 1 : lineScale }}
            className="absolute bottom-4 left-[15px] top-4 w-px origin-top bg-gradient-to-b from-azure via-azure to-azure/40 md:left-[19px]"
          />

          <ol className="space-y-14 md:space-y-16">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.n}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex gap-8 pl-0 md:gap-10"
              >
                {/* Node */}
                <span className="relative z-10 mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-ink md:h-10 md:w-10">
                  <motion.span
                    initial={reduce ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="h-2.5 w-2.5 rounded-full bg-azure"
                  />
                </span>

                <div className="pb-2">
                  <p className="font-mono text-xs font-medium tracking-[0.2em] text-azure">
                    {step.n}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-paper md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-steel-lighter md:text-base">
                    {step.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
