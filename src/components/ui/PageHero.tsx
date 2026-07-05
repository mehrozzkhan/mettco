import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/TextReveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
};

/** Dark industrial hero band for inner pages */
export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="grid-texture relative overflow-hidden bg-ink pb-20 pt-40 md:pb-28 md:pt-48">
      {/* Ember glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 right-[-15%] h-[620px] w-[620px] bg-[radial-gradient(closest-side,rgba(0,128,184,0.13),transparent_72%)]"
      />
      <div className="container-x relative">
        <Reveal y={12}>
          <p className="eyebrow">
            <span className="h-px w-8 bg-azure" aria-hidden />
            {eyebrow}
          </p>
        </Reveal>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] text-paper md:text-6xl">
          <SplitWords mode="mount" text={title} delay={0.15} stagger={0.05} />
        </h1>
        {lead && (
          <Reveal delay={0.35} y={16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-lighter md:text-lg">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
