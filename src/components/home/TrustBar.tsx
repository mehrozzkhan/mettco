import { industries, partnerSlots } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Trust bar — slim band directly below the hero.
 * Placeholder wordmark slots: greyscale, low opacity, brighten on hover.
 * Labels live in site.ts (partnerSlots) — swap in real names/logos there.
 */
export function TrustBar() {
  return (
    <section
      aria-label="Trusted by"
      className="border-y border-line bg-ink-800/60"
    >
      <div className="container-x flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between lg:gap-10">
        <Reveal y={10}>
          <p className="shrink-0 font-mono text-2xs font-medium uppercase tracking-[0.2em] text-steel-muted">
            Trusted across{" "}
            <span className="text-azure">{industries.length} sectors</span>
          </p>
        </Reveal>

        <RevealGroup
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          stagger={0.06}
        >
          {partnerSlots.map((label, i) => (
            <RevealItem key={`${label}-${i}`}>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-paper/30 grayscale transition-all duration-300 hover:text-paper/70 hover:grayscale-0">
                {label}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
