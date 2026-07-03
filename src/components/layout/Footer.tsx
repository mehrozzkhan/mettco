import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/site";

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

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      {/* CTA band */}
      <div className="border-b border-line-dark">
        <div className="container-x flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
          <div>
            <p className="eyebrow">
              <span className="h-px w-8 bg-ember" aria-hidden />
              Start a conversation
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-paper md:text-4xl">
              Let&rsquo;s build a supply chain you can rely on.
            </h2>
          </div>
          <Link
            href="/request-a-quote"
            className="group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-ember px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-ember-dark"
          >
            Request a Quote
            <ArrowUpRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${company.name} — home`}>
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ember font-display text-lg font-bold text-white">
              M
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
              <MapPin className="h-4 w-4 shrink-0 text-ember" aria-hidden />
              {company.address}
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-paper">
                <Mail className="h-4 w-4 shrink-0 text-ember" aria-hidden />
                {company.email}
              </a>
            </li>
            <li>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-paper">
                <Phone className="h-4 w-4 shrink-0 text-ember" aria-hidden />
                {company.phone}
              </a>
            </li>
          </ul>
        </div>

        {footerCols.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h3 className="text-2xs font-semibold uppercase tracking-[0.18em] text-steel-lighter">
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
      </div>

      <div className="border-t border-line-dark">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-steel-light md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>Sourcing • Trading • Engineering • Import &amp; Export</p>
        </div>
      </div>
    </footer>
  );
}
