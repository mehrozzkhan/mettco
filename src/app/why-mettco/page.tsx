import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Why METTCO",
  description: "The advantage of a supply partner that thinks like an engineer and executes like a multinational.",
};

const reasons = [
  { title: "One partner, many categories", desc: "Consolidate industrial products, engineering supplies, packaging, safety and MRO under a single accountable partner — fewer vendors, fewer failure points." },
  { title: "Specification-led sourcing", desc: "We source against your technical specification, not a generic catalog. What arrives matches what your engineers asked for." },
  { title: "Local reach, global access", desc: "Trusted networks inside Pakistan plus vetted international manufacturers — priced and benchmarked against world markets." },
  { title: "Trade compliance handled", desc: "Import documentation, customs, freight and compliance managed end-to-end, so your team stays focused on operations." },
  { title: "Quality verified before dispatch", desc: "Inspection and certification checks happen before products ship — not after they fail on your floor." },
  { title: "Built for repeat supply", desc: "Reorder cycles, consumption planning and supply continuity — we operate as an extension of your procurement team." },
];

const commitments = [
  "Transparent quotations with clear lead times",
  "Specification matching on every order",
  "Responsive single point of contact",
  "Documentation-complete deliveries",
  "Continuous improvement on price and lead time",
];

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why METTCO"
        title="Procurement is easy — until it isn't. That's where we come in."
        lead="Anyone can quote a price. Reliability at specification, at scale, across borders — that takes a system. Ours is built on six advantages."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <RevealItem key={r.title}>
                <div className="h-full rounded-2xl border border-line bg-white p-8 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-ember/40 hover:shadow-elevated">
                  <span className="font-display text-4xl font-semibold text-ember/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-light">{r.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="grid-texture bg-ink py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <SectionHeader
            dark
            eyebrow="Our commitment"
            title="What every METTCO client can expect."
            lead="These aren't aspirations. They're operating standards on every engagement."
          />
          <RevealGroup className="space-y-4">
            {commitments.map((c) => (
              <RevealItem key={c}>
                <div className="flex items-center gap-4 rounded-xl border border-line-dark bg-ink-800 px-6 py-5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-ember" aria-hidden />
                  <p className="text-sm font-medium text-paper md:text-base">{c}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-paper py-24 text-center md:py-28">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold md:text-4xl">
              Put us to the test with your hardest requirement.
            </h2>
            <div className="mt-8">
              <Button href="/request-a-quote" size="lg">Request a Quote</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
