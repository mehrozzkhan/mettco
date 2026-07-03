import type { Metadata } from "next";
import { Boxes, ClipboardCheck, Factory, RefreshCw, SearchCheck, Ship } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Solutions",
  description: "End-to-end procurement solutions: project supply, MRO programs, specialized sourcing, import programs and supply-chain consolidation.",
};

const solutions = [
  { icon: Factory, title: "Project Supply", desc: "Complete material packages for plant expansions, new lines and capital projects — specified, sourced and delivered on project timelines." },
  { icon: RefreshCw, title: "MRO Supply Programs", desc: "Scheduled supply of maintenance, repair and operations consumables so critical spares never become critical shortages." },
  { icon: SearchCheck, title: "Specialized Sourcing", desc: "Hard-to-find components, obsolete parts and technical products located through deep supplier networks." },
  { icon: Ship, title: "Import Programs", desc: "Recurring import pipelines for products your business consumes at volume — compliance, freight and customs managed." },
  { icon: Boxes, title: "Supply Consolidation", desc: "Replace dozens of small vendors with one accountable partner across multiple product categories." },
  { icon: ClipboardCheck, title: "Vendor-Managed Supply", desc: "We monitor your consumption and keep stock ahead of demand — procurement that runs itself." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Procurement solutions shaped around how you operate."
        lead="Not every supply problem is a product problem. METTCO builds solution programs — repeatable, accountable and measured — around your operation's real needs."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-x">
          <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <RevealItem key={s.title}>
                <div className="group h-full rounded-2xl border border-line bg-white p-8 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-azure/40 hover:shadow-elevated">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-paper-warm text-navy transition-colors duration-300 group-hover:bg-azure group-hover:text-white">
                    <s.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-light">{s.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm py-24 md:py-28">
        <div className="container-x text-center">
          <SectionHeader
            align="center"
            eyebrow="Not sure which fits?"
            title="Describe the problem. We'll design the solution."
          />
          <Reveal delay={0.15} className="mt-10">
            <Button href="/request-a-quote" size="lg">Request a Quote</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
