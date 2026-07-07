import { caseStudies } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/* Case studies — Problem → Solution → Result with a concrete metric */
export function CaseStudies() {
  return (
    <section className="grid-texture bg-ink-800/40 py-24 md:py-32">
      <div className="container-x relative">
        <SectionHeader
          eyebrow="07 — Proof"
          title="Real requirements. Measured results."
          lead="Anonymized snapshots from recent engagements — the pattern is always the same: a hard supply problem, a verified answer, a number that mattered."
        />

        <RevealGroup className="mt-14 grid gap-4 lg:grid-cols-3" stagger={0.1}>
          {caseStudies.map((cs) => (
            <RevealItem key={cs.sector} className="h-full">
              <article className="glass flex h-full flex-col rounded-2xl p-7 md:p-8">
                <p className="font-mono text-2xs font-medium uppercase tracking-[0.2em] text-blueprint">
                  {cs.sector}
                </p>

                <dl className="mt-6 flex-1 space-y-5">
                  <div>
                    <dt className="font-mono text-2xs font-medium uppercase tracking-[0.18em] text-steel-muted">
                      Problem
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-steel-lighter">
                      {cs.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-2xs font-medium uppercase tracking-[0.18em] text-steel-muted">
                      Solution
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-steel-lighter">
                      {cs.solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-2xs font-medium uppercase tracking-[0.18em] text-steel-muted">
                      Result
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-paper/90">
                      {cs.result}
                    </dd>
                  </div>
                </dl>

                <div className="mt-7 border-t border-line pt-5">
                  <p className="font-mono text-2xl font-semibold tracking-tight text-azure md:text-3xl">
                    {cs.metric}
                  </p>
                  <p className="mt-1 font-mono text-2xs uppercase tracking-[0.18em] text-steel-muted">
                    {cs.metricLabel}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 text-xs text-steel-muted">
          Client names withheld under commercial confidentiality. References available on request.
        </p>
      </div>
    </section>
  );
}
