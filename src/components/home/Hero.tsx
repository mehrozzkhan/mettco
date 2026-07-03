"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Globe2, ShieldCheck, Truck } from "lucide-react";
import { stats } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section className="grid-texture relative overflow-hidden bg-ink">
      {/* Azure atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-[-10%] h-[640px] w-[640px] rounded-full bg-azure/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-[-30%] h-[480px] w-[480px] rounded-full bg-navy-light/40 blur-[120px]"
      />

      {/* Globe wireframe — echoes the METTCO letterhead */}
      <svg
        aria-hidden
        viewBox="0 0 600 600"
        fill="none"
        className="pointer-events-none absolute -right-48 top-1/2 hidden h-[820px] w-[820px] -translate-y-1/2 opacity-[0.16] lg:block"
      >
        <circle cx="300" cy="300" r="298" stroke="#22A8DE" strokeWidth="0.8" />
        <ellipse cx="300" cy="300" rx="298" ry="120" stroke="#22A8DE" strokeWidth="0.7" />
        <ellipse cx="300" cy="300" rx="298" ry="220" stroke="#22A8DE" strokeWidth="0.5" />
        <ellipse cx="300" cy="300" rx="120" ry="298" stroke="#22A8DE" strokeWidth="0.7" />
        <ellipse cx="300" cy="300" rx="220" ry="298" stroke="#22A8DE" strokeWidth="0.5" />
        <line x1="2" y1="300" x2="598" y2="300" stroke="#22A8DE" strokeWidth="0.7" />
        <line x1="300" y1="2" x2="300" y2="598" stroke="#22A8DE" strokeWidth="0.7" />
      </svg>

      <div className="container-x relative flex min-h-dvh flex-col justify-end pb-16 pt-40 md:pb-20">
        <div className="max-w-4xl">
          <motion.p {...fadeUp(0.1)} className="eyebrow">
            <span className="h-px w-8 bg-azure" aria-hidden />
            Micro Engineering, Tech and Trading Co
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="mt-6 text-[13vw] font-semibold leading-[0.95] text-paper sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            Industrial supply,
            <br />
            <span className="bg-gradient-to-r from-azure-soft via-azure-light to-azure bg-clip-text text-transparent">
              engineered
            </span>{" "}
            for
            <br />
            reliability.
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="mt-8 max-w-xl text-base leading-relaxed text-steel-lighter md:text-lg"
          >
            METTCO connects businesses with reliable industrial products,
            engineering supplies and specialized solutions — through trusted
            local and international sourcing networks.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/request-a-quote"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-azure px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-azure-dark hover:shadow-deep"
            >
              Request a Quote
              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
            <Link
              href="/capabilities"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-line-dark px-8 py-4 text-base font-medium text-paper/90 transition-all duration-300 hover:border-azure hover:text-azure"
            >
              Explore Capabilities
            </Link>
          </motion.div>

          <motion.ul
            {...fadeUp(0.65)}
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
        </div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.8)}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-800 px-6 py-6 md:px-8">
              <p className="font-display text-3xl font-semibold text-paper md:text-4xl">
                {s.value}
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
