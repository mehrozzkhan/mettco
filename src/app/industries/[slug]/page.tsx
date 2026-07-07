import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { industries } from "@/lib/site";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};
  return {
    title: `${ind.name} Supply & Sourcing`,
    description: `${ind.blurb} METTCO sources, verifies and delivers industrial supply for the ${ind.name.toLowerCase()} sector across Pakistan and beyond.`,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const others = industries.filter((i) => i.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={`Industries · ${ind.name}`}
        title={`${ind.name}, supplied without surprises.`}
        lead={ind.blurb}
      />

      <section className="bg-ink py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="What we supply"
              title="Typical supply lines for this sector."
              lead="Every engagement starts from your specification — these are the categories this sector most often trusts us with."
            />
            <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2" stagger={0.06}>
              {ind.supplies.map((s) => (
                <RevealItem key={s}>
                  <div className="glass flex items-center gap-3 rounded-xl px-5 py-4">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-azure" aria-hidden />
                    <span className="text-sm font-medium text-paper/90">{s}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal delay={0.2} className="mt-10">
              <Button href="/request-a-quote" size="lg">
                Request a quote for {ind.name.toLowerCase()}
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <aside className="glass rounded-2xl p-8">
              <p className="font-mono text-2xs font-medium uppercase tracking-[0.2em] text-blueprint">
                How it works
              </p>
              <ul className="mt-6 space-y-5 text-sm leading-relaxed text-steel-lighter">
                <li>
                  <span className="font-mono text-xs text-azure">01 — </span>
                  Send us your specification, part number, sample or drawing.
                </li>
                <li>
                  <span className="font-mono text-xs text-azure">02 — </span>
                  We quote with committed price, origin and lead time within 24 hours.
                </li>
                <li>
                  <span className="font-mono text-xs text-azure">03 — </span>
                  Quality is verified before dispatch — certificates and inspection included.
                </li>
              </ul>
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-xs text-steel-muted">Also serving</p>
                <ul className="mt-3 space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/industries/${o.slug}`}
                        className="group inline-flex items-center gap-1.5 text-sm text-paper/80 transition-colors hover:text-azure"
                      >
                        {o.name}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
