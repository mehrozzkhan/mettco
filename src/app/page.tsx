import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
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
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero (signature: sourcing network) */}
      <Hero />
      {/* Thin trust strip */}
      <TrustStrip />
      {/* 2 — Sector wordmark bar */}
      <IndustriesStrip />
      {/* 3 — What we supply: bento grid */}
      <BentoGrid />
      {/* 4 — Capabilities: sticky + 01–06 mono list */}
      <CapabilitiesSection />
      {/* 5 — Beyond borders: lanes echo the hero */}
      <GlobalTradeSection />
      {/* 6 — Process (signature: vertical rail) */}
      <ProcessRail />
      {/* 7 — Industries: 9 sector tiles → per-sector pages */}
      <IndustriesTiles />
      {/* 8 — Why choose us */}
      <WhyChooseUs />
      {/* 9 — Proof: case studies */}
      <CaseStudies />
      {/* 10 — FAQ (final CTA + footer follow in layout) */}
      <FAQ />
    </>
  );
}
