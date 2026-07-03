import type { Metadata } from "next";
import { ArrowDownToLine, ArrowUpFromLine, FileCheck2, Landmark, PackageCheck, Ship } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Import & Export",
  description: "Cross-border industrial trade handled end to end — documentation, compliance, freight and customs for imports into and exports out of Pakistan.",
};

const services = [
  { icon: FileCheck2, title: "Trade Documentation", desc: "Commercial invoices, packing lists, certificates of origin, LC documentation — complete and compliant." },
  { icon: Landmark, title: "Customs & Compliance", desc: "HS-code classification, duty planning and customs clearance coordination on both sides of the border." },
  { icon: Ship, title: "Freight Management", desc: "Sea, air and land freight booked, consolidated and tracked — optimized for cost and lead time." },
  { icon: PackageCheck, title: "Cargo Assurance", desc: "Pre-shipment inspection, secure packing standards and insurance coordination for goods in transit." },
];

export default function ImportExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Import & Export"
        title="Two-way trade. One accountable partner."
        lead="Cross-border procurement fails on paperwork more often than products. METTCO manages the entire trade lane — so goods move, clear and arrive without drama."
      />

      {/* Two directions */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="grid-texture h-full rounded-2xl bg-ink p-10 md:p-14">
              <ArrowDownToLine className="h-8 w-8 text-ember" aria-hidden />
              <h2 className="mt-6 text-2xl font-semibold text-paper md:text-3xl">Importing into Pakistan</h2>
              <p className="mt-4 text-base leading-relaxed text-steel-lighter">
                Industrial products, machinery components, packaging materials and
                specialized equipment sourced from international manufacturers and
                delivered to your facility — duty-planned, cleared and complete.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-paper/80">
                {["Supplier payment & LC coordination", "Import documentation & clearance", "Consolidated freight for smaller volumes", "Door-to-door delivery"].map((li) => (
                  <li key={li} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" aria-hidden />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-white p-10 md:p-14">
              <ArrowUpFromLine className="h-8 w-8 text-ember" aria-hidden />
              <h2 className="mt-6 text-2xl font-semibold md:text-3xl">Exporting from Pakistan</h2>
              <p className="mt-4 text-base leading-relaxed text-steel-light">
                Connecting Pakistani manufacturers with international buyers —
                textiles, engineered goods, packaging and industrial products
                exported with professional documentation and quality assurance.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-steel">
                {["Buyer sourcing & trade matchmaking", "Export documentation & compliance", "Quality inspection before dispatch", "International freight coordination"].map((li) => (
                  <li key={li} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" aria-hidden />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow="Trade services"
            title="Everything between purchase order and proof of delivery."
          />
          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <RevealItem key={s.title}>
                <div className="h-full rounded-2xl border border-line bg-white p-8">
                  <s.icon className="h-6 w-6 text-ember" aria-hidden />
                  <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-light">{s.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2} className="mt-12 text-center">
            <Button href="/request-a-quote" size="lg">Discuss a trade requirement</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
