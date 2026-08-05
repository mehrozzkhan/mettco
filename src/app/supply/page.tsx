import type { Metadata } from "next";
import Script from "next/script";
import CtaBand from "@/components/CtaBand";
import ManifestRow from "@/components/ManifestRow";
import PageHeader from "@/components/PageHeader";
import { images, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Supply — Office, Industrial & Safety Products | METTCO Lahore",
  description:
    "METTCO sources office supplies, industrial products, engineering components, safety equipment and maintenance consumables against your requirement. One invoice, one contact.",
  alternates: { canonical: "/supply" },
};

const rows = [
  {
    code: "A-01",
    title: "Office & General Order Supplies",
    spec: "Stationery, printing consumables, pantry, housekeeping, office equipment.",
    tag: "Currently live",
    note: "Currently live — supplying a public-sector Bank.",
  },
  {
    code: "A-02",
    title: "Industrial Products",
    spec: "Bearings, motors, drives, pumps, valves, rotating equipment.",
  },
  {
    code: "A-03",
    title: "Engineering Supplies",
    spec: "Fasteners, seals, tools, precision components.",
  },
  {
    code: "A-04",
    title: "Safety Equipment",
    spec: "PPE, signage, fall protection, industrial safety systems.",
  },
  {
    code: "A-05",
    title: "Maintenance Products",
    spec: "Lubricants, adhesives, cleaning and MRO consumables.",
  },
];

// A-06 Boilers: content approved, but the row ships hidden until the founder
// confirms a boiler source. Toggle site.boilersLive in src/config/site.ts.
const boilersRow = {
  code: "A-06",
  title: "Boilers",
  spec: "Sourcing and quotation for boilers and boiler-room equipment.",
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "General order supply",
  name: "METTCO Supply Division",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: { "@type": "City", name: site.city },
  description:
    "Sourcing and supply of office, industrial, engineering, safety and maintenance products against customer requirements.",
};

export default function SupplyPage() {
  return (
    <>
      <Script
        id="supply-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <PageHeader
        crumb={[{ href: "/supply", label: "Supply" }]}
        code="Division A"
        title="Supply"
        lede="What your business buys, sourced against your requirement. Office supplies first — that is current revenue — then industrial, engineering, safety and maintenance products."
        image={images.supply}
      />

      <section className="container py-12 md:py-16" aria-label="Supply categories">
        {rows.map((r, i) => (
          <ManifestRow
            key={r.code}
            code={r.code}
            title={r.title}
            spec={r.note ? `${r.spec} ${r.note}` : r.spec}
            tag={r.tag}
            href="/rfq?division=supply"
            index={i}
          />
        ))}
        {site.boilersLive && (
          <div data-pending="boilers">
            <ManifestRow
              code={boilersRow.code}
              title={boilersRow.title}
              spec={boilersRow.spec}
              href="/rfq?division=supply"
              index={rows.length}
            />
          </div>
        )}
        <div className="manifest-row" />

        <p className="reveal mt-10 max-w-[62ch] text-sm leading-relaxed text-paper-dim">
          METTCO sources against your requirement. Broker-first: we win the order, source it,
          deliver it, and invoice it. No inventory carrying cost is passed to you. One invoice, one
          contact.
        </p>
      </section>

      <CtaBand heading="Send the item list. We quote it within 24 hours." />
    </>
  );
}
