import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { images } from "@/config/site";

export const metadata: Metadata = {
  title: "Industry & Manufacturing — MRO, Bearings & Safety | METTCO Lahore",
  description:
    "METTCO sources plant consumables, MRO items, bearings, rotating equipment and safety systems for manufacturers. One requirement list, one quote, one invoice.",
  alternates: { canonical: "/sectors/industry" },
};

export default function IndustryPage() {
  return (
    <SectorPage
      slug="industry"
      name="Industry & Manufacturing"
      title="Industry & Manufacturing"
      lede="For plants and workshops: the consumables and components that keep machines running, sourced against your specification."
      image={images.industry}
      items={[
        {
          label: "Plant consumables",
          detail: "Lubricants, adhesives, cleaning and running-stock materials.",
        },
        {
          label: "MRO items",
          detail: "Maintenance, repair and operations consumables against your stock list.",
        },
        {
          label: "Bearings & rotating equipment",
          detail: "Bearings, motors, drives, pumps and valves, sourced to specification.",
        },
        {
          label: "Fasteners & tools",
          detail: "Fasteners, seals, hand tools and precision components.",
        },
        {
          label: "Safety systems",
          detail: "PPE, signage, fall protection and industrial safety equipment.",
        },
        {
          label: "Facility & trade work",
          detail: "Cleaning contracts and electrical, plumbing and AC work for plant buildings.",
        },
      ]}
      cta="Send the part numbers or the problem."
    />
  );
}
