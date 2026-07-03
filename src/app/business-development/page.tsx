import type { Metadata } from "next";
import { Building2, Factory, Globe2, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Business Development",
  description: "Partner with METTCO — manufacturers seeking distribution, international buyers seeking sourcing partners, and suppliers joining our network.",
};

const tracks = [
  { icon: Factory, title: "Manufacturers", desc: "Pakistani manufacturers seeking export channels, and international brands seeking representation in Pakistan's industrial market.", cta: "Discuss representation" },
  { icon: Globe2, title: "International Buyers", desc: "Overseas businesses that need a reliable sourcing, inspection and export partner on the ground in Pakistan.", cta: "Start sourcing from Pakistan" },
  { icon: Building2, title: "Suppliers & Stockists", desc: "Quality-focused suppliers who want consistent B2B order flow through METTCO's vetted supply network.", cta: "Join our network" },
  { icon: Handshake, title: "Strategic Partners", desc: "Logistics providers, trade financiers and channel partners who strengthen the supply chain we offer our clients.", cta: "Propose a partnership" },
];

export default function BusinessDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Business development"
        title="Growth is better engineered together."
        lead="METTCO grows through partnerships — with manufacturers, buyers, suppliers and service partners. If our capabilities complement yours, let's talk."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <RevealGroup className="grid gap-5 md:grid-cols-2">
            {tracks.map((t) => (
              <RevealItem key={t.title}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 md:p-10">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-paper-warm text-navy">
                    <t.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h2 className="mt-6 text-xl font-semibold">{t.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-light md:text-base">{t.desc}</p>
                  <div className="mt-6">
                    <Button href="/contact" variant="ghost" className="px-0 text-ember">{t.cta}</Button>
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
            eyebrow="Open door"
            title="Have a proposal that doesn't fit a box? Send it anyway."
          />
          <Reveal delay={0.15}>
            <Button href="/contact" size="lg">Contact business development</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
