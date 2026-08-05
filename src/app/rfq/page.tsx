import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RfqForm, { type Division } from "./RfqForm";

export const metadata: Metadata = {
  title: "Request a Quote — Quotes Within 24 Hours | METTCO Lahore",
  description:
    "Send METTCO your requirement in three short steps — supply, services or technology. Quote within 24 hours. Prefer WhatsApp? Send it directly.",
  alternates: { canonical: "/rfq" },
};

export default async function RfqPage({
  searchParams,
}: {
  searchParams: Promise<{ division?: string }>;
}) {
  const { division } = await searchParams;
  const initial: Division | undefined =
    division === "supply" || division === "services" || division === "technology"
      ? division
      : undefined;

  return (
    <>
      <PageHeader
        crumb={[{ href: "/rfq", label: "Request a Quote" }]}
        title="Request a Quote"
        lede="Three short steps. We reply with a quote within 24 hours."
      />
      <section className="container max-w-3xl py-12 md:py-16">
        <RfqForm initialDivision={initial} />
      </section>
    </>
  );
}
