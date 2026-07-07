import type { Metadata } from "next";
import { Cog, Droplets, HardHat, Package, Target, Wrench } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { productCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product Categories",
  description: "Industrial products, engineering supplies, packaging materials, safety equipment, maintenance products and specialized solutions.",
};

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Cog, Wrench, Package, HardHat, Droplets, Target,
};

const examples: Record<string, string[]> = {
  "Industrial Products": ["Bearings & power transmission", "Electric motors & drives", "Pumps, valves & fittings", "Hydraulics & pneumatics", "Belts, chains & couplings", "Filtration systems"],
  "Engineering Supplies": ["Fasteners & fixings", "Seals, gaskets & O-rings", "Hand & power tools", "Measuring instruments", "Welding consumables", "Precision components"],
  "Packaging Materials": ["Stretch & shrink film", "Strapping & sealing", "Corrugated cartons", "Protective packaging", "Tapes & adhesive films", "Food-grade packaging"],
  "Safety Equipment": ["Head, eye & hearing protection", "Safety footwear & gloves", "Fall protection systems", "High-visibility clothing", "Industrial signage", "Fire safety equipment"],
  "Maintenance Products": ["Lubricants & greases", "Industrial adhesives & sealants", "Cleaning & degreasing chemicals", "Anti-corrosion coatings", "Abrasives", "General MRO consumables"],
  "Specialized Solutions": ["Obsolete part sourcing", "Custom-manufactured components", "Imported equivalents & alternatives", "Technical product matching", "Low-volume specialty items", "Project-specific packages"],
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product categories"
        title="Six categories covering the industrial floor."
        lead="If your operation consumes it, wears it, runs on it or ships in it — it's likely within one of these categories. And if it isn't, that's what Specialized Solutions is for."
      />

      <section className="bg-ink py-24 md:py-32">
        <div className="container-x space-y-6">
          {productCategories.map((cat, i) => {
            const Icon = icons[cat.icon] ?? Cog;
            return (
              <Reveal key={cat.name} delay={i * 0.04}>
                <div className="grid gap-8 rounded-2xl border border-line bg-ink-800 p-8 md:grid-cols-[1fr_1.4fr] md:p-12">
                  <div>
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-ink-700 text-navy">
                      <Icon className="h-7 w-7" aria-hidden />
                    </span>
                    <h2 className="mt-6 text-2xl font-semibold md:text-3xl">{cat.name}</h2>
                    <p className="mt-3 text-base leading-relaxed text-steel-light">{cat.desc}</p>
                  </div>
                  <ul className="grid content-center gap-3 sm:grid-cols-2">
                    {examples[cat.name]?.map((e) => (
                      <li key={e} className="flex items-start gap-2.5 rounded-lg bg-ink px-4 py-3 text-sm text-steel">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" aria-hidden />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-ink-700 py-24 md:py-28">
        <div className="container-x text-center">
          <SectionHeader
            align="center"
            eyebrow="Specific requirement?"
            title="Send the specification. We'll quote the supply."
          />
          <Reveal delay={0.15} className="mt-10">
            <Button href="/request-a-quote" size="lg">Request a Quote</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
