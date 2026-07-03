import type { Metadata } from "next";
import { Globe2, MapPin, ShieldCheck, Workflow } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Global Sourcing",
  description: "Vetted supplier networks across Pakistan, Asia, Europe and beyond — matched to your specification, budget and lead time.",
};

const network = [
  { region: "Pakistan", desc: "Deep domestic manufacturer and stockist relationships for fast-turn local supply." },
  { region: "China & East Asia", desc: "High-volume manufacturing partners for industrial products, components and packaging." },
  { region: "Middle East", desc: "Regional stock hubs and re-export channels for time-critical requirements." },
  { region: "Europe", desc: "Precision engineering brands and certified quality products for critical applications." },
];

const pillars = [
  { icon: Globe2, title: "Multi-market benchmarking", desc: "Every requirement is priced across markets — you see the real global cost of your product, not one vendor's number." },
  { icon: ShieldCheck, title: "Vetted suppliers only", desc: "Factory verification, trade references and sample validation before any supplier enters our network." },
  { icon: Workflow, title: "One accountable pipeline", desc: "Whether goods originate in Karachi or Shanghai, you deal with one partner, one contract, one point of accountability." },
];

export default function GlobalSourcingPage() {
  return (
    <>
      <PageHero
        eyebrow="Global sourcing"
        title="The right product exists somewhere. We know where."
        lead="METTCO's sourcing networks span local and international markets — so your procurement is benchmarked globally and delivered locally."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow="Network coverage"
            title="Sourcing corridors we work every day."
          />
          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {network.map((n) => (
              <RevealItem key={n.region}>
                <div className="h-full rounded-2xl border border-line bg-white p-8">
                  <MapPin className="h-6 w-6 text-azure" aria-hidden />
                  <h3 className="mt-5 text-lg font-semibold">{n.region}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-light">{n.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="grid-texture bg-ink py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            dark
            eyebrow="How it works"
            title="Global reach with single-partner simplicity."
          />
          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark lg:grid-cols-3">
            {pillars.map((p) => (
              <RevealItem key={p.title}>
                <div className="h-full bg-ink-800 p-8 md:p-10">
                  <p.icon className="h-7 w-7 text-azure" aria-hidden />
                  <h3 className="mt-5 text-lg font-semibold text-paper">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-lighter">{p.desc}</p>
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
              Give us a specification. We&rsquo;ll show you the world&rsquo;s options.
            </h2>
            <div className="mt-8">
              <Button href="/request-a-quote" size="lg">Start a sourcing request</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
