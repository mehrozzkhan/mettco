"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  /** Radial glow color that tracks the cursor */
  glow?: string;
};

/** Card with a cursor-tracking radial glow. Renders a Link when href is given. */
export function SpotlightCard({
  href,
  className,
  children,
  glow = "rgba(0, 128, 184, 0.09)",
}: SpotlightCardProps) {
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  };

  const cls = cn("group relative overflow-hidden", className);

  const overlay = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background: `radial-gradient(340px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${glow}, transparent 70%)`,
      }}
    />
  );

  if (href) {
    return (
      <Link href={href} onMouseMove={onMove} className={cls}>
        {children}
        {overlay}
      </Link>
    );
  }

  return (
    <div onMouseMove={onMove} className={cls}>
      {children}
      {overlay}
    </div>
  );
}
