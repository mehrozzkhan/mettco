import type { Metadata } from "next";
import Script from "next/script";
import CtaBand from "@/components/CtaBand";
import ManifestRow from "@/components/ManifestRow";
import PageHeader from "@/components/PageHeader";
import { images, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Services — Construction, Facility & Trade Work | METTCO Lahore",
  description:
    "METTCO arranges construction, renovation, janitorial contracts and trade services in Lahore. Vetted tradespeople, one invoice, one point of accountability.",
  alternates: { canonical: "/services" },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Construction, facility and trade services facilitation",
  name: "METTCO Services Division",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: { "@type": "City", name: site.city },
  description:
    "Contracting and management of construction, renovation, facility and trade services for businesses and residences in Lahore.",
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <PageHeader
        crumb={[{ href: "/services", label: "Services" }]}
        code="Division B"
        title="Services"
        lede="The works a business needs done — construction, upkeep, repairs — arranged and supervised, with one number to call when anything needs answering."
        image={images.services}
      />

      <section className="container py-12 md:py-16" aria-label="Service categories">
        <ManifestRow
          code="B-01"
          title="Construction & Renovation"
          spec="Residential and commercial construction, repairs, renovation, project supervision. Supervision experience via METTCO's senior advisor."
          href="/rfq?division=services"
          index={0}
        />

        {/* <FATHER_PROJECTS>: renders only when the founder adds factual
            project lines (type, city, year, role) in src/config/site.ts. */}
        {site.advisorProjects.length > 0 && (
          <div className="reveal mb-2 ml-0 border border-line bg-graphite-800 p-5 md:ml-[112px]">
            <p className="stamp">Advisor — past supervision</p>
            <ul className="mt-3 space-y-1.5">
              {site.advisorProjects.map((p) => (
                <li key={`${p.type}-${p.year}`} className="font-mono text-xs text-paper-dim">
                  {p.type} · {p.city} · {p.year} · {p.role}
                </li>
              ))}
            </ul>
          </div>
        )}

        <ManifestRow
          code="B-02"
          title="Facility Services"
          spec="Janitorial, cleaning contracts, routine maintenance for offices and plants."
          href="/rfq?division=services"
          index={1}
        />
        <ManifestRow
          code="B-03"
          title="Trade Services"
          spec="Plumbing, electrical, carpentry, AC servicing. Also available to residences and housing societies."
          href="/rfq?division=services"
          index={2}
        />
        <div className="manifest-row" />

        <p className="reveal mt-10 max-w-[62ch] text-sm leading-relaxed text-paper-dim">
          METTCO contracts and manages vetted tradespeople. We don&apos;t employ them &mdash; you
          get one invoice, one point of accountability, and no chasing.
        </p>
      </section>

      <CtaBand heading="Describe the job. We quote it within 24 hours." />
    </>
  );
}
