"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type SplitWordsProps = {
  /** Text to reveal. Use \n for hard line breaks. */
  text: string;
  className?: string;
  /** Words (exact match) that receive highlightClassName */
  highlight?: string[];
  highlightClassName?: string;
  delay?: number;
  stagger?: number;
  /** "mount": animate on load (heroes). "inView": animate on scroll into view. */
  mode?: "mount" | "inView";
};

/** Per-word masked reveal — each word rises out of an overflow clip. */
export function SplitWords({
  text,
  className,
  highlight = [],
  highlightClassName,
  delay = 0,
  stagger = 0.06,
  mode = "inView",
}: SplitWordsProps) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");

  if (reduce) {
    return (
      <span className={className}>
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.split(" ").map((word, wi, arr) => (
              <span
                key={wi}
                className={cn(highlight.includes(word) && highlightClassName)}
              >
                {word + (wi < arr.length - 1 ? " " : "")}
              </span>
            ))}
          </span>
        ))}
      </span>
    );
  }

  const viewProps =
    mode === "mount"
      ? { initial: "hidden" as const, animate: "show" as const }
      : {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once: true, margin: "-80px" },
        };

  return (
    <motion.span
      {...viewProps}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi, arr) => (
            <span
              key={wi}
              className="inline-block overflow-hidden pb-[0.12em] align-bottom -mb-[0.12em]"
            >
              <motion.span
                variants={{
                  hidden: { y: "115%" },
                  show: { y: 0, transition: { duration: 0.85, ease } },
                }}
                className={cn(
                  "inline-block will-change-transform",
                  highlight.includes(word) && highlightClassName
                )}
              >
                {word + (wi < arr.length - 1 ? " " : "")}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

/** Horizontal rule that draws itself in when scrolled into view. */
export function GrowLine({
  className,
  delay = 0.1,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease }}
      className={cn("origin-left", className)}
    />
  );
}
