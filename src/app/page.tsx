import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";
import JsonLd from "@/components/JsonLd";
import { generateFaqSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Mitsafe | Premium Software Development & AI Automation Agency",
  description:
    "Mitsafe designs futuristic enterprise web platforms, custom AI automation agents, high-speed mobile apps, and robust cloud configurations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mitsafe | Premium Software Development & AI Automation Agency",
    description:
      "Mitsafe designs futuristic enterprise web platforms, custom AI automation agents, high-speed mobile apps, and robust cloud configurations.",
    url: "https://mitsafe.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitsafe | Premium Software Development & AI Automation Agency",
    description:
      "Mitsafe designs futuristic enterprise web platforms, custom AI automation agents, high-speed mobile apps, and robust cloud configurations.",
  },
};

const homeFaqs = [
  {
    question: "How do we start a project with Mitsafe?",
    answer:
      "To start a project, simply fill out our contact form or send us an email. We will schedule a free initial consultation to discuss your requirements, objectives, and project timeline. Following this, we will provide a detailed proposal and cost estimate.",
  },
  {
    question: "What is the typical timeline for web development?",
    answer:
      "The timeline depends on the project complexity and scope. A simple informational website may take 3 to 6 weeks, while a more complex custom application or e-commerce platform can take 8 to 16 weeks. We establish clear milestone deliveries during planning.",
  },
  {
    question: "Do you offer ongoing support & maintenance?",
    answer:
      "Yes, we offer flexible post-launch support and maintenance packages. This includes regular security patches, performance optimizations, database backups, minor content updates, and framework upgrades to ensure smooth operation.",
  },
  {
    question: "Can you redesign our existing corporate website?",
    answer:
      "Absolutely. We analyze your current site's performance, UX bottlenecks, and branding before drafting a fresh layout. We ensure zero SEO keyword ranking loss by setting up exact redirects and database mapping.",
  },
  {
    question: "Is the website responsive and mobile friendly?",
    answer:
      "Yes, every design we produce is fully responsive, catering seamlessly to mobile viewports, tablet screens, and ultra-wide desktop monitors. We perform cross-browser quality checks before going live.",
  },
];

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
      <JsonLd data={generateFaqSchema(homeFaqs)} />
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