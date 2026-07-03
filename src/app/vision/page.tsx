import type { Metadata } from "next";
import { Globe2, Network, Rocket, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Vision",
  description: "METTCO's long-term vision: a global industrial supply and export company connecting manufacturers and businesses across international markets.",
};

const horizons = [
  { icon: Rocket, phase: "Today", title: "Trusted domestic supply partner", desc: "Serving Pakistan's industrial sectors with reliable sourcing, trading and engineering supply across six product categories." },
  { icon: Network, phase: "Next", title: "Regional trade network", desc: "Deepening import & export corridors, building strategic supplier partnerships and expanding cross-border product lines." },
  { icon: Globe2, phase: "Beyond", title: "Global supply & export company", desc: "Connecting manufacturers and businesses across international markets — a Pakistani industrial trading house with global reach." },
];

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision"
        title="Built to become a global industrial supply company."
        lead="METTCO isn't designed around a single product. It's designed around a capability — moving industrial goods reliably between markets — and that capability scales worldwide."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow="Three horizons"
            title="From local trust to global trade."
          />
          <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-3">
            {horizons.map((h) => (
              <RevealItem key={h.phase}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-paper-warm text-navy">
                      <h.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="eyebrow">{h.phase}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-light">{h.desc}</p>
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
            eyebrow="Why it matters"
            title="Pakistan makes world-class products. The world should be buying them."
            lead="Our export ambition is not just commercial — it's about connecting Pakistani manufacturing to international demand, and international quality to Pakistani industry."
          />
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line-dark bg-ink-800 p-10">
              <TrendingUp className="h-8 w-8 text-ember" aria-hidden />
              <blockquote className="mt-6 text-xl font-medium leading-relaxed text-paper md:text-2xl">
                &ldquo;Rather than focusing on a single product, METTCO is built to
                serve multiple industrial sectors — through sourcing, trading,
                importing, exporting and strategic partnerships.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm text-steel-light">— The METTCO founding principle</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 text-center md:py-28">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold md:text-4xl">
              Grow with a partner that&rsquo;s going somewhere.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/business-development" size="lg">Partner with us</Button>
              <Button href="/contact" variant="ghost" className="text-ember" size="lg">Contact us</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
