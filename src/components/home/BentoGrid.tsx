import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { bentoCategories } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* "What we supply" — bento grid, mixed tile sizes, image-led */
export function BentoGrid() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            eyebrow="01 — What we supply"
            title="Six categories. One reliable partner."
            lead="From rotating equipment to packaging lines — METTCO sources, verifies and delivers the products your operations depend on."
          />
          <Reveal delay={0.15}>
            <Button href="/products" variant="ghost" className="text-azure">
              All product categories
            </Button>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[230px]"
          stagger={0.07}
        >
          {bentoCategories.map((cat, i) => (
            <RevealItem
              key={cat.name}
              className={cn(
                cat.size === "large" && "sm:col-span-2 sm:row-span-2"
              )}
            >
              <Link
                href={cat.href}
                className="group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-line bg-ink-800"
              >
                <Image
                  src={cat.image}
                  alt={`${cat.name} — ${cat.desc}`}
                  fill
                  sizes={cat.size === "large" ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                  className="object-cover transition-transform duration-300 ease-out-expo group-hover:scale-[1.03]"
                />
                {/* Legibility gradient */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
                />
                <div className="relative p-6 md:p-7">
                  <p className="font-mono text-2xs font-medium uppercase tracking-[0.2em] text-blueprint">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3
                      className={cn(
                        "font-semibold text-paper",
                        cat.size === "large" ? "text-2xl" : "text-lg"
                      )}
                    >
                      {cat.name}
                    </h3>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-steel-lighter transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-azure"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-steel-lighter">
                    {cat.desc}
                  </p>
                  {/* Orange rule draws in on hover */}
                  <span
                    aria-hidden
                    className="mt-4 block h-px w-0 bg-azure transition-all duration-500 ease-out-expo group-hover:w-16"
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
