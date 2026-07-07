import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * Industries — 9 full-bleed photo tiles (16:9 source, 4:3 crop reserved —
 * no CLS). Bottom-anchored scrim keeps text legible; scrim deepens and the
 * orange rule draws in on hover. Each tile links to its own sector page.
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
          {industries.map((ind) => (
            <RevealItem key={ind.slug}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-line bg-ink-800"
              >
                {/* Reserved 4:3 frame — image fills it, no layout shift */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={`${ind.name} — ${ind.blurb}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out-expo group-hover:scale-[1.03]"
                  />
                  {/* Bottom-anchored scrim: transparent → graphite. Deepens on hover. */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent transition-opacity duration-300"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
                  <p className="mt-1 text-xs leading-relaxed text-paper/75">
                    {ind.blurb}
                  </p>
                  <span
                    aria-hidden
                    className="mt-3 block h-px w-0 bg-azure transition-all duration-500 ease-out-expo group-hover:w-12"
                  />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
