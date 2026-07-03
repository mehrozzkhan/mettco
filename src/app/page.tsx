import { Hero } from "@/components/home/Hero";
import {
  CapabilitiesSection,
  CategoriesSection,
  GlobalTradeSection,
  IndustriesSection,
  IndustriesStrip,
  ProcessSection,
} from "@/components/home/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustriesStrip />
      <CategoriesSection />
      <CapabilitiesSection />
      <GlobalTradeSection />
      <ProcessSection />
      <IndustriesSection />
    </>
  );
}
