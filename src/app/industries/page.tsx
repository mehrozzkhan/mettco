import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Manufacturing, textile, food processing, warehousing, logistics, construction, engineering, pharmaceutical, packaging and agriculture — ten sectors, one standard of supply.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Ten sectors. One standard of supply."
        lead="Every industry has its own standards, consumables and failure points. METTCO's sourcing adapts to each — the reliability doesn't change."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <RevealGroup className="grid gap-5 md:grid-cols-2" stagger={0.05}>
            {industries.map((ind, i) => (
              <RevealItem key={ind.slug}>
                <div className="group flex h-full items-start gap-6 rounded-2xl border border-line bg-white p-8 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-azure/40 hover:shadow-elevated md:p-10">
                  <span className="font-display text-3xl font-semibold text-azure/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">{ind.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-steel-light md:text-base">
                      {ind.blurb}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="grid-texture bg-ink py-24 md:py-28">
        <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <SectionHeader
            dark
            eyebrow="Your sector"
            title="Don't see your industry? We probably serve it anyway."
            lead="Our sourcing capability is industry-agnostic — if your business consumes industrial products, we can supply it."
          />
          <Reveal delay={0.15}>
            <Button href="/contact" size="lg">Talk to us</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
