import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import FounderNote from "@/components/FounderNote";
import PageHeader from "@/components/PageHeader";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About METTCO — General Order Supplier, Lahore",
  description:
    "METTCO is a registered general order supply and facilitation company in Lahore, founded 2026. Broker-first sourcing, one accountable contact, quotes within 24 hours.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb={[{ href: "/about", label: "About" }]}
        title="About METTCO"
        lede="Micro Engineering, Tech and Trading Co. A general order supply and facilitation company in Lahore."
      />

      <section className="container max-w-3xl py-12 md:py-16">
        <div className="space-y-6 text-base leading-relaxed text-paper">
          <p className="reveal">
            METTCO supplies what a business buys, arranges the works and services a business needs,
            and delivers IT and software projects. One contact takes the requirement, quotes it
            within 24 hours, and answers for the result.
          </p>
          <p className="reveal" data-reveal-index={1}>
            The model is broker-first. We hold no inventory. When you send a requirement, METTCO
            wins the order, sources it from the trade, delivers it, and invoices it. You carry no
            stocking cost and chase no middlemen. One invoice, one point of accountability.
          </p>
          <p className="reveal" data-reveal-index={2}>
            METTCO is new, and that is the position. There is no account-management layer between
            you and the person responsible. Orders are small enough to get personal attention and
            handled by the owner. If we commit to a price and a date, we keep both.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-wrap gap-3">
          <span className="stamp">Founded {site.founded} · {site.city}</span>
          <span className="stamp">Registered · NTN {site.ntn}</span>
        </div>

        <div className="mt-12">
          <FounderNote />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
