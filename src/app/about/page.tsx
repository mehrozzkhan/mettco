import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { company, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About METTCO",
  description: `${company.legalName} — who we are, what we do, and why businesses trust us with their industrial supply.`,
};

const values = [
  { title: "Reliability first", desc: "We treat every order as a commitment. Deadlines, specifications and quality standards are non-negotiable." },
  { title: "Engineering mindset", desc: "We think in specifications, tolerances and applications — not just catalogs and price lists." },
  { title: "Long-term partnership", desc: "We optimize for repeat business and durable relationships, not one-off transactions." },
  { title: "Global perspective", desc: "We benchmark every sourcing decision against international standards and market prices." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About METTCO"
        title="An industrial supply partner built for the long run."
        lead={`${company.legalName} is a B2B industrial trading, sourcing and engineering company based in ${company.country} — connecting businesses with reliable products through trusted local and international supply networks.`}
      />

      <section className="bg-ink py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Who we are"
            title="More than a trader. A procurement engine."
          />
          <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-steel md:text-lg">
            <p>
              METTCO was built on a simple observation: industrial businesses lose
              time, money and momentum when their supply chains are unreliable.
              Sourcing the right product — at the right specification, price and
              lead time — is an engineering problem as much as a commercial one.
            </p>
            <p>
              That&rsquo;s why we operate differently. We combine technical
              understanding with disciplined sourcing across local and
              international networks, serving manufacturers, mills, processors,
              builders and engineering firms across {company.country} and beyond.
            </p>
            <p>
              Rather than focusing on a single product line, METTCO is structured
              to serve multiple industrial sectors — through sourcing, trading,
              importing, exporting and strategic partnerships.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid-texture bg-ink py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            dark
            eyebrow="What we stand for"
            title="The principles behind every shipment."
          />
          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-2">
            {values.map((v, i) => (
              <RevealItem key={v.title}>
                <div className="h-full bg-ink-800 p-8 md:p-10">
                  <span className="font-display text-sm font-semibold text-azure">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-paper">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-lighter">{v.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-10 rounded-2xl border border-line bg-ink-800 p-10 md:grid-cols-4 md:p-14">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <p className="font-display text-4xl font-semibold text-navy md:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-steel-light">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Button href="/vision" size="lg">Where we&rsquo;re headed — our vision</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
