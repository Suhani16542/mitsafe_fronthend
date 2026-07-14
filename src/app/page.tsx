import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/sections/Hero";

// Dynamically load below-the-fold components to reduce First Load JS bundle size
const PremiumServicesShowcase = dynamic(() => import("@/sections/PremiumServicesShowcase"));
const ServicesSection = dynamic(() => import("@/sections/ServicesSection"));
const MitsafeSection = dynamic(() => import("@/sections/MitsafeSection"));
const WhyChooseUs = dynamic(() => import("@/sections/WhyChooseUs"));
const WelcomeSection = dynamic(() => import("@/sections/WelcomeSection"));
const FAQSection = dynamic(() => import("@/sections/FAQSection"));
const PortfolioSection = dynamic(() => import("@/sections/PortfolioSection"));
const MovingCrossStripSection = dynamic(() => import("@/sections/MovingCrossStripSection"));
const TestimonialsSection = dynamic(() => import("@/sections/TestimonialsSection"));
const BlogSection = dynamic(() => import("@/sections/BlogSection"));

export default function Home() {
  return (
    <div className="cosmic-home-wrapper relative w-full">
      <Hero />
      <PremiumServicesShowcase />
      <ServicesSection />
      <MitsafeSection />
      <WhyChooseUs />
      <WelcomeSection />
      <FAQSection />
      <PortfolioSection />
      <MovingCrossStripSection />
      <TestimonialsSection />
      <BlogSection />
    </div>
  );
}