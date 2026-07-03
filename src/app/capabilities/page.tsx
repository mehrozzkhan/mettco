import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { capabilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Strategic sourcing, import & export, quality assurance, logistics, technical advisory and supplier partnerships — METTCO's full capability set.",
};

const extras: Record<string, string[]> = {
  "Strategic Sourcing": ["Supplier identification & vetting", "Price / quality / lead-time negotiation", "Market benchmarking", "Sample & trial coordination"],
  "Import & Export": ["Trade documentation & LC handling", "Customs clearance coordination", "HS-code & compliance management", "Freight booking & consolidation"],
  "Quality Assurance": ["Pre-shipment inspection", "Certificate & test-report verification", "Specification matching", "Non-conformance resolution"],
  "Logistics & Delivery": ["Multi-order consolidation", "Sea, air & land freight", "Delivery scheduling to site", "Shipment tracking & updates"],
  "Technical Advisory": ["Product & spec selection support", "Alternative / equivalent sourcing", "Application-fit review", "Cost-reduction engineering"],
  "Supplier Partnerships": ["Long-term supply agreements", "Distribution & representation", "Capacity reservation", "Joint market development"],
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Six disciplines. One integrated supply capability."
        lead="Each capability works alone. Together, they form an end-to-end system that takes your requirement from specification to delivered supply."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-x space-y-6">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.04}>
              <div className="grid gap-8 rounded-2xl border border-line bg-white p-8 md:grid-cols-[80px_1fr_1.1fr] md:p-12">
                <span className="font-display text-5xl font-semibold text-azure/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold">{cap.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-steel-light">{cap.desc}</p>
                </div>
                <ul className="grid content-start gap-3 sm:grid-cols-2">
                  {extras[cap.title]?.map((e) => (
                    <li key={e} className="flex items-start gap-2.5 text-sm text-steel">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" aria-hidden />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid-texture bg-ink py-24 md:py-28">
        <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <SectionHeader
            dark
            eyebrow="Put them to work"
            title="Which capability does your operation need first?"
          />
          <Reveal delay={0.15}>
            <Button href="/request-a-quote" size="lg">Request a Quote</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
