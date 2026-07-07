import { CheckCircle2 } from "lucide-react";
import { trustPoints } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

/* Thin trust strip directly under the hero */
export function TrustStrip() {
  return (
    <Reveal as="section" y={10} className="border-y border-line bg-ink-800/60">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-4 md:justify-between">
        {trustPoints.map((point) => (
          <span
            key={point}
            className="flex items-center gap-2.5 font-mono text-2xs font-medium uppercase tracking-[0.16em] text-steel-lighter"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-azure" aria-hidden />
            {point}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
