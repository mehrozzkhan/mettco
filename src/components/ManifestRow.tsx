import Link from "next/link";

/**
 * The signature device: a supplier's rate-list / packing-manifest row.
 * Mono code, hairline rule, stamped tag. METTCO is literally an
 * order-and-manifest business — this encodes something true.
 */
export default function ManifestRow({
  code,
  title,
  spec,
  tag,
  href,
  hrefLabel,
  index = 0,
}: {
  code: string;
  title: string;
  spec: string;
  tag?: string;
  href?: string;
  hrefLabel?: string;
  index?: number;
}) {
  return (
    <div className="manifest-row reveal py-6 md:py-7" data-reveal-index={index}>
      <div className="grid gap-3 md:grid-cols-[80px_1fr_auto] md:gap-8">
        <span className="font-mono text-sm text-signal">{code}</span>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-xl uppercase tracking-wide text-paper">{title}</h3>
            {tag && <span className="stamp border-signal/40 text-signal">{tag}</span>}
          </div>
          <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-paper-dim">{spec}</p>
        </div>
        {href && (
          <Link
            href={href}
            className="self-start font-mono text-2xs uppercase tracking-widest text-paper underline decoration-line underline-offset-4 transition-colors hover:text-signal md:self-center"
          >
            {hrefLabel ?? "Request a quote"}
          </Link>
        )}
      </div>
    </div>
  );
}
