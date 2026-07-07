import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { company } from "@/lib/site";
import { SpecCapture } from "@/components/layout/SpecCapture";

const footerCols: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About METTCO", href: "/about" },
      { label: "Why METTCO", href: "/why-mettco" },
      { label: "Our Process", href: "/process" },
      { label: "Vision", href: "/vision" },
      { label: "Business Development", href: "/business-development" },
    ],
  },
  {
    heading: "What We Do",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Global Sourcing", href: "/global-sourcing" },
      { label: "Import & Export", href: "/import-export" },
      { label: "Product Categories", href: "/products" },
    ],
  },
  {
    heading: "Markets",
    links: [
      { label: "Industries We Serve", href: "/industries" },
      { label: "Request a Quote", href: "/request-a-quote" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const badges = [
  { icon: ShieldCheck, label: "Import / Export licensed" },
  { icon: BadgeCheck, label: "Pre-shipment inspection" },
  { icon: Clock3, label: "Quotes within 24 hours" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      {/* Final CTA band — wraps the quote entry */}
      <div className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-56 h-[560px] w-[560px] bg-[radial-gradient(closest-side,rgba(255,90,31,0.12),transparent_72%)]"
        />
        <div className="container-x relative flex flex-col items-start justify-between gap-10 py-16 md:py-20 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow">
              <span className="h-px w-8 bg-azure" aria-hidden />
              Start a conversation
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-paper md:text-4xl">
              Send us a specification.
              <br />
              <span className="text-steel-lighter">Get a committed quote in 24 hours.</span>
            </h2>
          </div>
          <div className="flex w-full max-w-md flex-col gap-4">
            <SpecCapture />
            <Link
              href="/request-a-quote"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-azure transition-colors hover:text-azure-light"
            >
              Or use the full quote builder
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${company.name} — home`}>
            <span className="grid h-10 w-10 place-items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="" className="h-full w-full brightness-0 invert object-contain" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-paper">
              {company.name}
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel-lighter">
            {company.legalName}. {company.descriptionShort}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-steel-lighter">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-azure" aria-hidden />
              {company.address}
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-paper">
                <Mail className="h-4 w-4 shrink-0 text-azure" aria-hidden />
                {company.email}
              </a>
            </li>
            <li>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-paper">
                <Phone className="h-4 w-4 shrink-0 text-azure" aria-hidden />
                {company.phone}
              </a>
            </li>
          </ul>

          {/* Trust badges */}
          <ul className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <li
                key={b.label}
                className="glass flex items-center gap-2 rounded-full px-4 py-2 font-mono text-2xs font-medium uppercase tracking-[0.14em] text-steel-lighter"
              >
                <b.icon className="h-3.5 w-3.5 text-azure" aria-hidden />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[repeat(3,1fr)_1.2fr]">
          {footerCols.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="font-mono text-2xs font-semibold uppercase tracking-[0.18em] text-steel-muted">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="link-underline text-sm text-paper/80 transition-colors hover:text-paper"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Embedded map — lazy, dark-treated */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-mono text-2xs font-semibold uppercase tracking-[0.18em] text-steel-muted">
              Find us
            </h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-line">
              <iframe
                title="METTCO office — 42-P Izmir Town, Lahore, Pakistan"
                src="https://www.google.com/maps?q=42-P%20Izmir%20Town%20Lahore%20Pakistan&output=embed"
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full [filter:grayscale(1)_invert(0.92)_contrast(0.88)_brightness(0.9)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-steel-light md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Sourcing · Trading · Engineering · Import &amp; Export
          </p>
        </div>
      </div>
    </footer>
  );
}
