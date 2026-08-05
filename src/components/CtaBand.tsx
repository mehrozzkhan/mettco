import Link from "next/link";
import { waLink } from "@/config/site";

export default function CtaBand({
  heading = "Send a requirement. Get a quote within 24 hours.",
}: {
  heading?: string;
}) {
  return (
    <section className="border-t border-line bg-graphite-800">
      <div className="container py-14 md:py-16">
        <h2 className="reveal max-w-[24ch] font-display text-3xl uppercase leading-tight tracking-wide md:text-4xl">
          {heading}
        </h2>
        <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row" data-reveal-index={1}>
          <Link href="/rfq" className="btn-signal">
            Request a Quote
          </Link>
          <a href={waLink()} className="btn-ghost">
            Send it on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
