import { BadgeCheck, Globe2, Timer, UserCheck } from "lucide-react";
import { differentiators } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  BadgeCheck,
  Globe2,
  Timer,
  UserCheck,
};

/* Why choose us — 4 differentiators, icon + mono label + one line */
export function WhyChooseUs() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="06 — Why METTCO"
          title="Built for buyers who can't afford surprises."
        />

        <RevealGroup
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {differentiators.map((d) => {
            const Icon = icons[d.icon] ?? BadgeCheck;
            return (
              <RevealItem key={d.label} className="h-full">
                <div className="glass group h-full rounded-2xl p-7 transition-colors duration-300 hover:border-azure/30">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-azure/10 text-azure">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="mt-5 font-mono text-2xs font-medium uppercase tracking-[0.2em] text-blueprint">
                    {d.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-paper">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-lighter">
                    {d.desc}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
