import Link from "next/link";
import {
  ArrowUpRight,
  DraftingCompass,
  Factory,
  HardHat,
  Package,
  Shirt,
  Truck,
  UtensilsCrossed,
  Warehouse,
  Wheat,
} from "lucide-react";
import { industries } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
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

/**
 * Industries — 9 sector tiles with reserved image slots (1200×896, 4:3).
 * Each tile links to its own sector page. Photos drop in later without
 * layout shift: the aspect ratio is reserved now.
 */
export function IndustriesTiles() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="05 — Industries we serve"
            title="Nine sectors. One standard of supply."
          />
          <Reveal delay={0.15}>
            <Button href="/industries" variant="ghost" className="text-azure">
              All industries
            </Button>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {industries.map((ind) => {
            const Icon = icons[ind.icon] ?? Factory;
            return (
              <RevealItem key={ind.slug}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-line bg-ink-800"
                >
                  {/* Reserved photo slot — 4:3, replace with next/image later */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(135deg,#12161C_25%,#1A2027_25%,#1A2027_50%,#12161C_50%,#12161C_75%,#1A2027_75%)] bg-[length:24px_24px] opacity-60 transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <Icon
                        className="h-12 w-12 text-steel-muted transition-colors duration-300 group-hover:text-azure"
                        aria-hidden
                      />
                    </div>
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-paper">
                        {ind.name}
                      </h3>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-steel-lighter transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-azure"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-1 line-clamp-1 text-xs leading-relaxed text-steel-light">
                      {ind.blurb}
                    </p>
                    <span
                      aria-hidden
                      className="mt-3 block h-px w-0 bg-azure transition-all duration-500 ease-out-expo group-hover:w-12"
                    />
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
