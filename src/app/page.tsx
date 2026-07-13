import React from "react";
import Hero from "@/sections/Hero";
import PremiumServicesShowcase from "@/sections/PremiumServicesShowcase";
import ServicesSection from "@/sections/ServicesSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import WelcomeSection from "@/sections/WelcomeSection";
import FAQSection from "@/sections/FAQSection";
import PortfolioSection from "@/sections/PortfolioSection";
import MovingCrossStripSection from "@/sections/MovingCrossStripSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import BlogSection from "@/sections/BlogSection";

export default function Home() {
  return (
    <div className="cosmic-home-wrapper relative w-full">
      <Hero />
      <PremiumServicesShowcase />
      <ServicesSection />
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