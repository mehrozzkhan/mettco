import {
  ArrowUpRight,
  DraftingCompass,
  Factory,
  Globe2,
  HardHat,
  Handshake,
  Package,
  ShieldCheck,
  Shirt,
  Truck,
  UtensilsCrossed,
  Warehouse,
  Wheat,
} from "lucide-react";
import { capabilities, industries } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { SourcingNetwork } from "@/components/home/SourcingNetwork";

const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  Shirt,
  UtensilsCrossed,
  Warehouse,
  Truck,
  HardHat,
  DraftingCompass,
  Package,
  Wheat,
};

/* ── Industries marquee — sector wordmark trust bar ─────────────── */
export function IndustriesStrip() {
  const items = [...industries, ...industries]; // duplicated for seamless loop
  return (
    <section aria-label="Industries we serve" className="border-b border-line bg-ink py-6">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap hover:[animation-play-state:paused] motion-reduce:animate-none">
          {items.map((ind, i) => {
            const Icon = industryIcons[ind.icon] ?? Factory;
            return (
              <span
                key={`${ind.slug}-${i}`}
                className="flex items-center gap-12 font-mono text-sm font-medium uppercase tracking-[0.18em] text-steel-light"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-[18px] w-[18px] text-azure" aria-hidden />
                  {ind.name}
                </span>
                <span className="h-1 w-1 rounded-full bg-azure/50" aria-hidden />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Capabilities — sticky heading left, 01–06 mono list right ──── */
export function CapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-20%] top-1/4 h-[760px] w-[760px] bg-[radial-gradient(closest-side,rgba(255,90,31,0.07),transparent_72%)]"
      />
      <div className="container-x relative grid items-start gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            dark
            eyebrow="02 — Capabilities"
            title="Built like a multinational. Agile like a partner."
            lead="Every engagement is backed by disciplined sourcing, verified quality and end-to-end trade execution."
          />
          <Reveal delay={0.2} className="mt-10">
            <Button href="/capabilities" variant="outline">
              See full capabilities
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="divide-y divide-line border-y border-line" stagger={0.08}>
          {capabilities.map((cap, i) => (
            <RevealItem key={cap.title}>
              <div className="group flex gap-8 py-8 transition-colors duration-300 md:gap-12">
                <span className="font-mono text-sm font-medium text-azure">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-paper transition-colors duration-300 md:text-xl">
                    {cap.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-steel-lighter">
                    {cap.desc}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ── Beyond borders — lanes echo the hero network ───────────────── */
export function GlobalTradeSection() {
  const pillars = [
    {
      icon: Globe2,
      title: "Global Sourcing",
      desc: "Vetted manufacturer networks across Pakistan, Asia, Europe and beyond — matched to your specification and budget.",
      href: "/global-sourcing",
    },
    {
      icon: Handshake,
      title: "Import & Export",
      desc: "Documentation, compliance, freight and customs — cross-border trade handled end to end.",
      href: "/import-export",
    },
    {
      icon: ShieldCheck,
      title: "Verified Quality",
      desc: "Inspection and specification matching before purchase, so what arrives is exactly what was ordered.",
      href: "/why-mettco",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-ink-800/40 py-24 md:py-32">
      {/* Faint lane graphic echoing the hero signature */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] lg:block"
      >
        <SourcingNetwork className="h-auto w-full" />
      </div>

      <div className="container-x relative grid items-start gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            eyebrow="03 — Beyond borders"
            title="From local plants to international markets."
            lead="METTCO is built to serve multiple industrial sectors through sourcing, trading, importing and exporting — connecting manufacturers and businesses across markets."
          />
          <Reveal delay={0.15} className="mt-8">
            <Button href="/global-sourcing">How we source globally</Button>
          </Reveal>
        </div>

        <RevealGroup className="space-y-4">
          {pillars.map((p) => (
            <RevealItem key={p.title}>
              <SpotlightCard
                href={p.href}
                className="glass flex items-start gap-6 rounded-2xl p-8 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-azure/30"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-azure/10 text-azure">
                  <p.icon className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <h3 className="text-lg font-semibold text-paper">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-lighter">
                    {p.desc}
                  </p>
                </span>
                <ArrowUpRight
                  className="ml-auto mt-1 h-5 w-5 shrink-0 text-steel-lighter transition-all duration-300 group-hover:text-azure"
                  aria-hidden
                />
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
