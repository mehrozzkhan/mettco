import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import FounderNote from "@/components/FounderNote";
import { images } from "@/config/site";

export const metadata: Metadata = {
  title: "METTCO — General Order Supplier, Lahore | Supply, Services & Technology",
  description:
    "METTCO supplies office, industrial and safety products, arranges construction and facility work, and delivers IT and software services in Lahore. Quotes within 24 hours.",
  alternates: { canonical: "/" },
};

const divisions = [
  {
    code: "A",
    title: "Supply",
    line: "Office, industrial, engineering, safety and maintenance products, sourced against your requirement.",
    href: "/supply",
  },
  {
    code: "B",
    title: "Services",
    line: "Construction, renovation, facility and trade services, contracted and managed under one invoice.",
    href: "/services",
  },
  {
    code: "C",
    title: "Technology",
    line: "IT support, hardware, and software development for business systems and websites.",
    href: "/technology",
  },
];

const sectors = [
  {
    title: "Agriculture",
    line: "Packaging, plant consumables, safety equipment and office supply for agri companies.",
    href: "/sectors/agriculture",
    img: images.agriculture,
  },
  {
    title: "Banking & Institutional",
    line: "Stationery, printing, facility and trade services for branches and offices.",
    href: "/sectors/banking",
    img: images.banking,
  },
  {
    title: "Industry & Manufacturing",
    line: "Plant consumables, MRO, bearings and safety systems for production sites.",
    href: "/sectors/industry",
    img: images.industry,
  },
];

// LOCKED copy: three steps, no more. Three steps implies a person who answers.
const steps = ["Send your requirement", "Quote within 24 hours", "Sourced, delivered, accounted for"];

export default function HomePage() {
  return (
    <>
      {/* Hero — the most important 100vh on the site. On a 360px phone the
          headline, sub-line and both CTAs must sit inside the first screen. */}
      <section className="relative flex min-h-[100svh] flex-col justify-end">
        <div className="img-frame absolute inset-0" aria-hidden="true">
          <Image
            src={images.hero.src}
            alt=""
            fill
            priority
            fetchPriority="high"
            quality={50} // duotone + scrim hide compression artifacts; LCP wins
            className="img-duotone object-cover"
            sizes="100vw"
          />
          {/* Extra graphite scrim so headline contrast passes AA over any crop. */}
          <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/70 to-graphite/40" />
        </div>

        {/* pb clears the 52px sticky action bar so both CTAs stay tappable
            and fully visible on a 360×740 first screen. */}
        <div className="hero-in container relative pb-24 pt-28 md:pb-24">
          <h1 className="max-w-[14ch] font-display text-[2.35rem] uppercase leading-[1.02] tracking-wide md:text-7xl">
            Everything your business buys. One accountable supplier.
          </h1>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-paper md:text-lg">
            METTCO supplies office, industrial and safety products, arranges construction and
            facility work, and delivers IT and software services. Quotes within 24 hours.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/rfq" className="btn-signal">
              Request a Quote
            </Link>
            <Link href="/supply" className="btn-ghost">
              See what we supply
            </Link>
          </div>
        </div>
      </section>

      {/* Three divisions — manifest rows. */}
      <section className="container py-16 md:py-24" aria-labelledby="divisions-h">
        <h2 id="divisions-h" className="stamp reveal">
          Divisions
        </h2>
        <div className="mt-6">
          {divisions.map((d, i) => (
            <Link
              key={d.code}
              href={d.href}
              className="manifest-row reveal group grid gap-2 py-6 md:grid-cols-[80px_1fr_auto] md:items-baseline md:gap-8 md:py-8"
              data-reveal-index={i}
            >
              <span className="font-mono text-sm text-signal">{d.code}</span>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wide transition-colors group-hover:text-signal md:text-3xl">
                  {d.title}
                </h3>
                <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-paper-dim">{d.line}</p>
              </div>
              <span
                aria-hidden="true"
                className="hidden font-mono text-sm text-paper-dim transition-colors group-hover:text-signal md:block"
              >
                &rarr;
              </span>
            </Link>
          ))}
          <div className="manifest-row" />
        </div>
      </section>

      {/* Current work strip — LOCKED. Nothing more. */}
      <section className="border-y border-line bg-graphite-800">
        <div className="container flex flex-col gap-2 py-6 md:flex-row md:items-center md:gap-6">
          <span className="stamp shrink-0 border-signal/40 text-signal">Current work</span>
          <p className="text-sm text-paper">
            Currently supplying office stationery to a public-sector bank branch in Lahore.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="container py-16 md:py-24" aria-labelledby="sectors-h">
        <h2 id="sectors-h" className="stamp reveal">
          Sectors
        </h2>
        <div className="mt-6 grid gap-px md:grid-cols-3">
          {sectors.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="reveal group border border-line bg-graphite-800 transition-colors hover:border-paper-dim"
              data-reveal-index={i}
            >
              <div className="img-frame h-36">
                <Image
                  src={s.img.src}
                  alt={s.img.alt}
                  width={s.img.width}
                  height={s.img.height}
                  loading="lazy"
                  className="img-duotone h-full w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg uppercase tracking-wide transition-colors group-hover:text-signal">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-dim">{s.line}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works — LOCKED, exactly three steps. */}
      <section className="border-t border-line" aria-labelledby="how-h">
        <div className="container py-16 md:py-24">
          <h2 id="how-h" className="stamp reveal">
            How it works
          </h2>
          <ol className="mt-6 grid gap-px md:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step}
                className="reveal manifest-row py-6 md:border-l md:border-t-0 md:px-6 md:first:border-l-0 md:first:pl-0"
                data-reveal-index={i}
              >
                <span className="font-mono text-sm text-signal">0{i + 1}</span>
                <p className="mt-3 font-display text-xl uppercase tracking-wide">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founder note */}
      <section className="container pb-16 md:pb-24" aria-label="Founder note">
        <FounderNote />
      </section>

      <CtaBand />
    </>
  );
}
