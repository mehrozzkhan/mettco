"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { primaryNav, company } from "@/lib/site";
import { cn } from "@/lib/utils";

function Logo({ light }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${company.name} — home`}
    >
      <span className="grid h-10 w-10 place-items-center transition-transform duration-300 ease-out-expo group-hover:scale-105">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          className="h-full w-full brightness-0 invert object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight text-paper">
          {company.name}
        </span>
        <span
          className={cn(
            "mt-1 hidden text-[0.6rem] font-medium uppercase tracking-[0.16em] sm:block",
            light ? "text-steel-lighter" : "text-steel-light"
          )}
        >
          Micro Engineering, Tech &amp; Trading
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Dark (transparent) header only at top of homepage
  const overDark = pathname === "/" && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        overDark
          ? "bg-transparent"
          : "border-b border-line bg-ink/95 backdrop-blur-md"
      )}
    >
      {/* Reading progress */}
      <motion.span
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-azure via-azure-light to-azure-soft"
      />
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo light={overDark} />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  onClick={() =>
                    setOpenMenu(openMenu === item.label ? null : item.label)
                  }
                  className={cn(
                    "flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    overDark
                      ? "text-paper/80 hover:text-paper"
                      : "text-steel hover:text-navy"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      openMenu === item.label && "rotate-180"
                    )}
                    aria-hidden
                  />
                </button>

                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-full w-[340px] pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-line bg-ink-800 p-2 shadow-deep">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group flex items-start justify-between gap-3 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-ink"
                          >
                            <span>
                              <span className="block text-sm font-semibold text-navy">
                                {child.label}
                              </span>
                              {child.desc && (
                                <span className="mt-0.5 block text-xs leading-relaxed text-steel-light">
                                  {child.desc}
                                </span>
                              )}
                            </span>
                            <ArrowUpRight
                              className="mt-0.5 h-4 w-4 shrink-0 text-steel-lighter opacity-0 transition-all duration-200 group-hover:text-azure group-hover:opacity-100"
                              aria-hidden
                            />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  overDark
                    ? "text-paper/80 hover:text-paper"
                    : "text-steel hover:text-navy",
                  pathname === item.href && (overDark ? "text-paper" : "text-navy")
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/request-a-quote"
            className="btn-shine inline-flex cursor-pointer items-center gap-2 rounded-full bg-azure px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 ease-out-expo hover:bg-azure-dark hover:shadow-elevated"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className={cn(
            "grid h-11 w-11 cursor-pointer place-items-center rounded-full transition-colors lg:hidden",
            overDark ? "text-paper" : "text-navy"
          )}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-line bg-ink lg:hidden"
          >
            <div className="container-x flex max-h-[calc(100dvh-72px)] flex-col gap-1 overflow-y-auto py-4">
              {primaryNav.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-navy hover:bg-ink-700"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 border-l border-line pl-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-steel hover:bg-ink-700 hover:text-navy"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/request-a-quote"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-azure px-6 py-3.5 text-sm font-medium text-white"
              >
                Request a Quote
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
