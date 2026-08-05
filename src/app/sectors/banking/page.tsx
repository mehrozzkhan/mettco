import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { images } from "@/config/site";

export const metadata: Metadata = {
  title: "Banking & Institutional — Branch Supply & Services | METTCO Lahore",
  description:
    "METTCO supplies stationery, printing and office supplies to bank branches and institutions, and arranges facility and trade services. Tender-friendly invoicing, NTN on record.",
  alternates: { canonical: "/sectors/banking" },
};

export default function BankingPage() {
  return (
    <SectorPage
      slug="banking"
      name="Banking & Institutional"
      title="Banking & Institutional"
      lede="Branch supply is where METTCO works today. Recurring stationery and office orders, delivered on schedule, invoiced cleanly."
      image={images.banking}
      items={[
        {
          label: "Stationery & office supplies",
          detail: "Recurring branch stationery, printing consumables, pantry and housekeeping stock.",
        },
        {
          label: "Printing",
          detail: "Forms, envelopes, letterheads and branch print requirements.",
        },
        {
          label: "Facility services",
          detail: "Janitorial and cleaning contracts, routine branch maintenance.",
        },
        {
          label: "Trade services",
          detail: "Electrical, plumbing, carpentry and AC servicing for branch premises.",
        },
        {
          label: "Office equipment",
          detail: "Small office equipment, supplied and installed.",
        },
      ]}
      note="Tender-friendly and documentation-clean: METTCO is a registered entity with NTN on record, and every order closes with a proper invoice."
      cta="Send your branch requirement."
    />
  );
}
