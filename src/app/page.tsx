import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import {
  CapabilitiesSection,
  GlobalTradeSection,
  IndustriesStrip,
} from "@/components/home/Sections";
import { BentoGrid } from "@/components/home/BentoGrid";
import { ProcessRail } from "@/components/home/ProcessRail";
import { IndustriesTiles } from "@/components/home/IndustriesTiles";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonial } from "@/components/home/Testimonial";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      {/* Hero (signature: sourcing network) */}
      <Hero />
      {/* Trust bar — partner/accreditation wordmark slots */}
      <TrustBar />
      {/* Sector wordmark marquee */}
      <IndustriesStrip />
      {/* What we supply: bento grid */}
      <BentoGrid />
      {/* Capabilities: sticky + 01–06 mono list */}
      <CapabilitiesSection />
      {/* Beyond borders: lanes echo the hero */}
      <GlobalTradeSection />
      {/* Process (signature: vertical rail) */}
      <ProcessRail />
      {/* Industries: 9 photo tiles → per-sector pages */}
      <IndustriesTiles />
      {/* Why choose us */}
      <WhyChooseUs />
      {/* Proof: case studies */}
      <CaseStudies />
      {/* Testimonial */}
      <Testimonial />
      {/* FAQ (final CTA + footer follow in layout) */}
      <FAQ />
    </>
  );
}
