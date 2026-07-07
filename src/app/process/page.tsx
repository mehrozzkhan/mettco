import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Process",
  description: "How METTCO turns a requirement into delivered, verified industrial supply — in five disciplined steps.",
};

const detail: Record<string, string[]> = {
  "01": ["Technical specification review", "Volume & reorder cycle mapping", "Standards & certification requirements", "Budget and lead-time targets"],
  "02": ["Local + international supplier shortlist", "Price & lead-time benchmarking", "Factory capability verification", "Sample coordination where required"],
  "03": ["Specification matching sign-off", "Quality inspection & documentation", "Certificate verification", "Pre-shipment approval"],
  "04": ["Freight & consolidation planning", "Customs & import documentation", "Real-time shipment coordination", "Delivered-to-site handover"],
  "05": ["Post-delivery review", "Reorder scheduling", "Price & lead-time optimization", "Supply continuity planning"],
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="A disciplined path from requirement to reliable supply."
        lead="Procurement fails in the gaps — between what was specified, what was sourced and what arrived. Our five-step process closes every gap."
      />

      <section className="bg-ink py-24 md:py-32">
        <div className="container-x space-y-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <div className="grid gap-8 rounded-2xl border border-line bg-ink-800 p-8 md:grid-cols-[120px_1fr_1.2fr] md:p-12">
                <span className="font-display text-6xl font-semibold text-azure/25 md:text-7xl">
                  {step.n}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold md:text-3xl">{step.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-steel-light">{step.desc}</p>
                </div>
                <ul className="grid content-start gap-3 sm:grid-cols-2">
                  {detail[step.n]?.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-steel">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink-700 py-24 md:py-28">
        <div className="container-x text-center">
          <SectionHeader
            align="center"
            eyebrow="Start at step one"
            title="Send us a requirement. We'll map the rest."
          />
          <Reveal delay={0.15} className="mt-10">
            <Button href="/request-a-quote" size="lg">Request a Quote</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
