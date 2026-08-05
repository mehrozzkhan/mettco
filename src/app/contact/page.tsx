import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site, telLink, waLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact METTCO — Lahore | Phone, WhatsApp, Email",
  description:
    "Reach METTCO in Lahore by phone, WhatsApp or email. For quotes, use the guided requirement form — quotes within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const channels = [
    {
      label: "WhatsApp",
      value: "Send your requirement directly",
      href: waLink(),
      external: true,
    },
    { label: "Phone", value: site.phoneDisplay, href: telLink(), external: true },
    { label: "Email", value: site.email, href: `mailto:${site.email}`, external: true },
  ];

  return (
    <>
      <PageHeader
        crumb={[{ href: "/contact", label: "Contact" }]}
        title="Contact"
        lede={`${site.city}, ${site.country} · ${site.hours}`}
      />

      <section className="container max-w-3xl py-12 md:py-16" aria-label="Contact channels">
        {/* Big tap targets: each channel is one full-width row. */}
        <ul>
          {channels.map((c, i) => (
            <li key={c.label} className="manifest-row reveal" data-reveal-index={i}>
              <a
                href={c.href}
                className="group flex min-h-[72px] flex-col justify-center gap-1 py-4 md:flex-row md:items-center md:justify-between"
              >
                <span className="font-mono text-2xs uppercase tracking-widest text-paper-dim">
                  {c.label}
                </span>
                <span className="font-display text-xl uppercase tracking-wide transition-colors group-hover:text-signal">
                  {c.value}
                </span>
              </a>
            </li>
          ))}
          <li className="manifest-row" aria-hidden="true" />
        </ul>

        <div className="reveal mt-10 border border-line bg-graphite-800 p-6">
          <p className="text-sm leading-relaxed text-paper">
            Need a quote? The fastest route is the guided requirement form. It asks for exactly
            what we need to price your order.
          </p>
          <Link href="/rfq" className="btn-signal mt-5">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
