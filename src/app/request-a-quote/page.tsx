import type { Metadata } from "next";
import { Clock3, FileText, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Send METTCO your requirement — product, specification, volume and timeline — and receive a transparent quotation.",
};

const promises = [
  { icon: Clock3, title: "Fast response", desc: "Requirements are reviewed and acknowledged within one business day." },
  { icon: FileText, title: "Transparent quotes", desc: "Clear pricing, lead times and terms — no surprises after the PO." },
  { icon: ShieldCheck, title: "No obligation", desc: "A quote is a conversation starter, not a commitment." },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us what you need. We'll take it from there."
        lead="The more detail you share — specification, standard, quantity, timeline — the sharper and faster our quotation."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.8fr]">
          <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex items-start gap-5 rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-paper-warm text-navy">
                    <p.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-steel-light">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
