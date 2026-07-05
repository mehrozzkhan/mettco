"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Globe2, ShieldCheck, Truck } from "lucide-react";
import { stats } from "@/lib/site";
import { SplitWords } from "@/components/motion/TextReveal";
import { CountUp } from "@/components/motion/CountUp";
import { Magnetic } from "@/components/motion/Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const globeY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);

  const fadeUp = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section ref={ref} className="grid-texture relative overflow-hidden bg-ink">
      {/* Azure atmosphere — breathing glow */}
      <motion.div
        aria-hidden
        animate={
          reduce
            ? undefined
            : { opacity: [0.7, 1, 0.7], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-64 top-[-20%] h-[900px] w-[900px] will-change-transform bg-[radial-gradient(closest-side,rgba(0,128,184,0.16),transparent_72%)]"
      />
      <motion.div
        aria-hidden
        animate={
          reduce
            ? undefined
            : { opacity: [1, 0.6, 1], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-56 bottom-[-40%] h-[700px] w-[700px] will-change-transform bg-[radial-gradient(closest-side,rgba(0,97,141,0.17),transparent_72%)]"
      />

      {/* Globe wireframe — echoes the METTCO letterhead. Rotates slowly, drifts on scroll. */}
      <motion.div
        aria-hidden
        style={{ y: globeY }}
        className="pointer-events-none absolute -right-48 top-1/2 hidden h-[820px] w-[820px] -translate-y-1/2 lg:block"
      >
        <motion.svg
          viewBox="0 0 600 600"
          fill="none"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
          className="h-full w-full opacity-[0.16] will-change-transform"
        >
          <circle cx="300" cy="300" r="298" stroke="#22A8DE" strokeWidth="0.8" />
          <ellipse cx="300" cy="300" rx="298" ry="120" stroke="#22A8DE" strokeWidth="0.7" />
          <ellipse cx="300" cy="300" rx="298" ry="220" stroke="#22A8DE" strokeWidth="0.5" />
          <ellipse cx="300" cy="300" rx="120" ry="298" stroke="#22A8DE" strokeWidth="0.7" />
          <ellipse cx="300" cy="300" rx="220" ry="298" stroke="#22A8DE" strokeWidth="0.5" />
          <line x1="2" y1="300" x2="598" y2="300" stroke="#22A8DE" strokeWidth="0.7" />
          <line x1="300" y1="2" x2="300" y2="598" stroke="#22A8DE" strokeWidth="0.7" />
        </motion.svg>
      </motion.div>

      <div className="container-x relative flex min-h-dvh flex-col justify-end pb-16 pt-40 md:pb-20">
        <motion.div style={{ y: contentY }} className="max-w-4xl">
          <motion.p {...fadeUp(0.1)} className="eyebrow">
            <span className="h-px w-8 bg-azure" aria-hidden />
            Micro Engineering, Tech and Trading Co
          </motion.p>

          <h1 className="mt-6 text-[13vw] font-semibold leading-[0.95] text-paper sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            <SplitWords
              mode="mount"
              delay={0.25}
              stagger={0.09}
              text={"Industrial supply,\nengineered for\nreliability."}
              highlight={["engineered"]}
              highlightClassName="bg-gradient-to-r from-azure-soft via-azure-light to-azure bg-clip-text text-transparent"
            />
          </h1>

          <motion.p
            {...fadeUp(0.55)}
            className="mt-8 max-w-xl text-base leading-relaxed text-steel-lighter md:text-lg"
          >
            METTCO connects businesses with reliable industrial products,
            engineering supplies and specialized solutions — through trusted
            local and international sourcing networks.
          </motion.p>

          <motion.div {...fadeUp(0.7)} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.2}>
              <Link
                href="/request-a-quote"
                className="btn-shine group inline-flex cursor-pointer items-center gap-2 rounded-full bg-azure px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-azure-dark hover:shadow-deep"
              >
                Request a Quote
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </Magnetic>
            <Link
              href="/capabilities"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-line-dark px-8 py-4 text-base font-medium text-paper/90 transition-all duration-300 hover:border-azure hover:bg-azure/10 hover:text-azure"
            >
              Explore Capabilities
            </Link>
          </motion.div>

          <motion.ul
            {...fadeUp(0.85)}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-steel-lighter"
          >
            <li className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-azure" aria-hidden />
              Local &amp; international networks
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-azure" aria-hidden />
              Quality-verified sourcing
            </li>
            <li className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-azure" aria-hidden />
              Import &amp; export, handled
            </li>
          </motion.ul>
        </motion.div>

        {/* Stats strip — numbers count up on entry */}
        <motion.div
          {...fadeUp(1)}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative bg-ink-800 px-6 py-6 transition-colors duration-300 hover:bg-ink-700 md:px-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-0.5 w-0 bg-azure transition-all duration-500 ease-out-expo group-hover:w-full"
              />
              <p className="font-display text-3xl font-semibold text-paper md:text-4xl">
                <CountUp value={s.value} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-steel-light">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
