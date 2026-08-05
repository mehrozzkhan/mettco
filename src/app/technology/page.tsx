import type { Metadata } from "next";
import Script from "next/script";
import CtaBand from "@/components/CtaBand";
import ManifestRow from "@/components/ManifestRow";
import PageHeader from "@/components/PageHeader";
import { images, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Technology — IT Services, Hardware & Software | METTCO Lahore",
  description:
    "METTCO delivers IT support, hardware supply and installation, and software development — websites, web applications and custom business software — in Lahore.",
  alternates: { canonical: "/technology" },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IT services, hardware supply and software development",
  name: "METTCO Technology Division",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: { "@type": "City", name: site.city },
  description:
    "IT support, systems setup, hardware supply and installation, and software development for businesses.",
};

export default function TechnologyPage() {
  // Partner software house is not named until the founder confirms it may be
  // public. Set site.softwarePartnerName in src/config/site.ts to name it.
  const capacityLine = site.softwarePartnerName
    ? `Delivered by METTCO's development lead, with extended capacity through ${site.softwarePartnerName}.`
    : "Delivered by METTCO's development lead, with extended capacity through an established software-house partner.";

  return (
    <>
      <Script
        id="technology-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <PageHeader
        crumb={[{ href: "/technology", label: "Technology" }]}
        code="Division C"
        title="Technology"
        lede="IT and software work, delivered as a project with a fixed scope and a named owner — the same way we handle a supply order."
        image={images.technology}
      />

      <section className="container py-12 md:py-16" aria-label="Technology categories">
        <ManifestRow
          code="C-01"
          title="IT Services & Solutions"
          spec="IT support, systems setup, networking, cloud and hosting."
          href="/rfq?division=technology"
          index={0}
        />
        <ManifestRow
          code="C-02"
          title="Hardware"
          spec="Computers, peripherals, networking equipment supply and installation."
          href="/rfq?division=technology"
          index={1}
        />
        <ManifestRow
          code="C-03"
          title="Software Development"
          spec="Websites, web applications, e-commerce, custom business software."
          href="/rfq?division=technology"
          index={2}
        />
        <div className="manifest-row" />

        <p className="reveal mt-10 max-w-[62ch] text-sm leading-relaxed text-paper-dim">
          {capacityLine}
        </p>
      </section>

      <CtaBand heading="Tell us what you need built or fixed." />
    </>
  );
}
