import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { site } from "@/config/site";

type Img = { src: string; alt: string; width: number; height: number };

/**
 * Inner-page header: breadcrumb trail (visible + BreadcrumbList schema),
 * stamped division code, display headline, optional duotone image band.
 */
export default function PageHeader({
  crumb,
  code,
  title,
  lede,
  image,
}: {
  crumb: { href: string; label: string }[];
  code?: string;
  title: string;
  lede: string;
  image?: Img;
}) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ href: "/", label: "Home" }, ...crumb].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href}`,
    })),
  };

  return (
    <header className="border-b border-line pt-24 md:pt-28">
      <Script
        id={`breadcrumb-${crumb[crumb.length - 1]?.href}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="container pb-10 md:pb-14">
        <nav aria-label="Breadcrumb" className="font-mono text-2xs uppercase tracking-widest text-paper-dim">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-paper">
                Home
              </Link>
              <span aria-hidden="true" className="ml-2">/</span>
            </li>
            {crumb.map((c, i) => (
              <li key={c.href} aria-current={i === crumb.length - 1 ? "page" : undefined}>
                {i === crumb.length - 1 ? (
                  <span className="text-paper">{c.label}</span>
                ) : (
                  <>
                    <Link href={c.href} className="hover:text-paper">
                      {c.label}
                    </Link>
                    <span aria-hidden="true" className="ml-2">/</span>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {code && <p className="mt-8 font-mono text-sm text-signal">{code}</p>}
        <h1 className="mt-3 max-w-[20ch] font-display text-4xl uppercase leading-none tracking-wide md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-paper-dim">{lede}</p>
      </div>

      {image && (
        <div className="img-frame h-44 w-full md:h-64">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="img-duotone h-full w-full object-cover"
            sizes="100vw"
          />
        </div>
      )}
    </header>
  );
}
