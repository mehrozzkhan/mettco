import { Reveal } from "@/components/motion/Reveal";

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
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-ember/15 blur-[120px]"
      />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-ember" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] text-paper md:text-6xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-lighter md:text-lg">
              {lead}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
