import Link from "next/link";
import {
  ArrowUpRight,
  Cog,
  Droplets,
  Globe2,
  HardHat,
  Handshake,
  Package,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";
import {
  capabilities,
  industries,
  processSteps,
  productCategories,
} from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Cog,
  Wrench,
  Package,
  HardHat,
  Droplets,
  Target,
};

/* ── Industries marquee ─────────────────────────────────────────── */
export function IndustriesStrip() {
  const items = [...industries, ...industries]; // duplicated for seamless loop
  return (
    <section aria-label="Industries we serve" className="border-b border-line bg-paper-warm py-6">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap motion-reduce:animate-none">
          {items.map((ind, i) => (
            <span
              key={`${ind.slug}-${i}`}
              className="flex items-center gap-12 text-sm font-medium uppercase tracking-[0.18em] text-steel-light"
            >
              {ind.name}
              <span className="h-1 w-1 rounded-full bg-ember" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Product categories ─────────────────────────────────────────── */
export function CategoriesSection() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="What we supply"
            title="Six categories. One reliable partner."
            lead="From rotating equipment to packaging lines — METTCO sources, verifies and delivers the products your operations depend on."
          />
          <Reveal delay={0.15}>
            <Button href="/products" variant="ghost" className="text-ember">
              All product categories
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => {
            const Icon = categoryIcons[cat.icon] ?? Cog;
            return (
              <RevealItem key={cat.name}>
                <Link
                  href="/products"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-ember/40 hover:shadow-elevated"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-paper-warm text-navy transition-colors duration-300 group-hover:bg-ember group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">{cat.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-light">
                    {cat.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ember">
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ── Capabilities (dark) ────────────────────────────────────────── */
export function CapabilitiesSection() {
  return (
    <section className="grid-texture relative overflow-hidden bg-ink py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-15%] top-1/3 h-[520px] w-[520px] rounded-full bg-ember/10 blur-[140px]"
      />
      <div className="container-x relative">
        <SectionHeader
          dark
          eyebrow="Capabilities"
          title="Built like a multinational. Agile like a partner."
          lead="Every engagement is backed by disciplined sourcing, verified quality and end-to-end trade execution."
        />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <RevealItem key={cap.title}>
              <div className="group h-full bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700">
                <span className="font-display text-sm font-semibold text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-paper">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-lighter">
                  {cap.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="mt-10">
          <Button href="/capabilities" variant="outline">
            See full capabilities
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Global trade band ──────────────────────────────────────────── */
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
    <section className="bg-paper py-24 md:py-32">
      <div className="container-x grid items-start gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            eyebrow="Beyond borders"
            title="From local plants to international markets."
            lead="METTCO is built to serve multiple industrial sectors through sourcing, trading, importing and exporting — connecting manufacturers and businesses across markets."
          />
          <Reveal delay={0.15} className="mt-8">
            <Button href="/global-sourcing">How we source globally</Button>
          </Reveal>
        </div>

        <RevealGroup className="space-y-5">
          {pillars.map((p) => (
            <RevealItem key={p.title}>
              <Link
                href={p.href}
                className="group flex items-start gap-6 rounded-2xl border border-line bg-white p-8 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-ember/40 hover:shadow-elevated"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-paper-warm text-navy transition-colors duration-300 group-hover:bg-ember group-hover:text-white">
                  <p.icon className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-light">
                    {p.desc}
                  </p>
                </span>
                <ArrowUpRight
                  className="ml-auto mt-1 h-5 w-5 shrink-0 text-steel-lighter transition-all duration-300 group-hover:text-ember"
                  aria-hidden
                />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ── Process ────────────────────────────────────────────────────── */
export function ProcessSection() {
  return (
    <section className="border-t border-line bg-paper-warm py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="Our process"
          title="Five steps. Zero surprises."
          lead="A disciplined procurement workflow that turns your requirement into delivered, verified supply."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.1}>
          {processSteps.map((step) => (
            <RevealItem key={step.n}>
              <div className="relative h-full rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-4xl font-semibold text-ember/25">
                  {step.n}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-light">
                  {step.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.25} className="mt-12 text-center">
          <Button href="/process">See the full process</Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Industries grid ────────────────────────────────────────────── */
export function IndustriesSection() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Industries we serve"
            title="Ten sectors. One standard of supply."
          />
          <Reveal delay={0.15}>
            <Button href="/industries" variant="ghost" className="text-ember">
              All industries
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5" stagger={0.05}>
          {industries.map((ind) => (
            <RevealItem key={ind.slug}>
              <Link
                href="/industries"
                className="group flex h-full min-h-[132px] flex-col justify-between bg-white p-6 transition-colors duration-300 hover:bg-paper-warm"
              >
                <h3 className="text-base font-semibold">{ind.name}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-steel-lighter transition-colors duration-300 group-hover:text-ember">
                  View sector
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
