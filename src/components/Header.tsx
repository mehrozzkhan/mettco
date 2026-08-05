"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/supply", label: "Supply" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding] duration-300 ${
        scrolled || open
          ? "border-line bg-graphite/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className={`container flex items-center justify-between ${scrolled ? "py-3" : "py-4"}`}>
        <Link
          href="/"
          className="font-display text-xl tracking-[0.3em] text-paper"
          aria-label="METTCO — home"
        >
          METTCO
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-2xs uppercase tracking-widest transition-colors ${
                pathname.startsWith(l.href) ? "text-signal" : "text-paper-dim hover:text-paper"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/rfq" className="btn-signal !min-h-10 !px-4 text-2xs">
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-paper transition-transform ${open ? "top-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-paper transition-transform ${open ? "bottom-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-line bg-graphite md:hidden"
        >
          <ul>
            {links.map((l, i) => (
              <li key={l.href} className={i > 0 ? "border-t border-line" : ""}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 px-5 py-4 font-display text-lg uppercase tracking-wider text-paper"
                >
                  <span className="font-mono text-2xs text-paper-dim">0{i + 1}</span>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-line p-5">
              <Link href="/rfq" onClick={() => setOpen(false)} className="btn-signal w-full">
                Request a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
