import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";

type Img = { src: string; alt: string; width: number; height: number };

/** Shared template for the three sector pages. Short and specific by design. */
export default function SectorPage({
  slug,
  name,
  title,
  lede,
  items,
  note,
  image,
  cta,
}: {
  slug: string;
  name: string;
  title: string;
  lede: string;
  items: { label: string; detail: string }[];
  note?: string;
  image: Img;
  cta: string;
}) {
  return (
    <>
      <PageHeader
        crumb={[
          { href: "/sectors/industry", label: "Sectors" },
          { href: `/sectors/${slug}`, label: name },
        ]}
        code="Sector"
        title={title}
        lede={lede}
        image={image}
      />

      <section className="container py-12 md:py-16" aria-label={`What METTCO supplies for ${name}`}>
        <h2 className="stamp reveal">Supplied and arranged</h2>
        <ul className="mt-6">
          {items.map((it, i) => (
            <li
              key={it.label}
              className="manifest-row reveal grid gap-1 py-5 md:grid-cols-[240px_1fr] md:gap-8"
              data-reveal-index={i}
            >
              <span className="font-display text-lg uppercase tracking-wide">{it.label}</span>
              <span className="text-sm leading-relaxed text-paper-dim">{it.detail}</span>
            </li>
          ))}
          <li className="manifest-row" aria-hidden="true" />
        </ul>
        {note && (
          <p className="reveal mt-8 max-w-[62ch] text-sm leading-relaxed text-paper-dim">{note}</p>
        )}
      </section>

      <CtaBand heading={cta} />
    </>
  );
}
