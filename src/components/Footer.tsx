import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/config/site";

const columns = [
  {
    heading: "Divisions",
    links: [
      { href: "/supply", label: "A — Supply" },
      { href: "/services", label: "B — Services" },
      { href: "/technology", label: "C — Technology" },
    ],
  },
  {
    heading: "Sectors",
    links: [
      { href: "/sectors/agriculture", label: "Agriculture" },
      { href: "/sectors/banking", label: "Banking & Institutional" },
      { href: "/sectors/industry", label: "Industry & Manufacturing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/rfq", label: "Request a Quote" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line pb-20 md:pb-0">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <p className="flex items-center gap-2.5 font-display text-xl tracking-[0.3em]">
            <Image src="/logo-light.png" alt="METTCO logo" width={19} height={22} />
            METTCO
          </p>
          <p className="mt-3 max-w-[26ch] text-sm text-paper-dim">{site.legalName}</p>
          <p className="mt-4 font-mono text-2xs uppercase tracking-widest text-paper-dim">
            Founded {site.founded} · {site.city} · NTN {site.ntn}
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="stamp">{col.heading}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper-dim transition-colors hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="container flex flex-col gap-2 py-5 font-mono text-2xs uppercase tracking-widest text-paper-dim md:flex-row md:items-center md:justify-between">
          <p>© {site.founded} {site.legalName}</p>
          <p>
            <a href={waLink()} className="hover:text-paper">
              WhatsApp
            </a>
            <span className="mx-2">·</span>
            <a href={`mailto:${site.email}`} className="hover:text-paper">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
