import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { images } from "@/config/site";

export const metadata: Metadata = {
  title: "Agriculture — Packaging, Consumables & Supply | METTCO Lahore",
  description:
    "METTCO supplies packaging and labels, plant consumables, safety equipment and office supplies to agri companies and processors. Quotes within 24 hours.",
  alternates: { canonical: "/sectors/agriculture" },
};

export default function AgriculturePage() {
  return (
    <SectorPage
      slug="agriculture"
      name="Agriculture"
      title="Agriculture"
      lede="For agri companies and processors: the recurring purchases that keep a plant and its paperwork moving, quoted from one contact."
      image={images.agriculture}
      items={[
        {
          label: "Packaging & labels",
          detail: "Sacks, cartons, printed labels and packing consumables for produce and processed goods.",
        },
        {
          label: "Plant consumables",
          detail: "Lubricants, adhesives, cleaning materials and running-stock items for processing lines.",
        },
        {
          label: "Safety equipment",
          detail: "PPE, signage and basic industrial safety systems for plant and field staff.",
        },
        {
          label: "Office & admin supply",
          detail: "Stationery, printing consumables and pantry stock for head offices and site offices.",
        },
        {
          label: "Trade services",
          detail: "Electrical, plumbing and AC servicing for plant buildings and offices.",
        },
      ]}
      cta="Send your plant's requirement list."
    />
  );
}
