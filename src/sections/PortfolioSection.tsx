"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";

const caseStudiesRow1 = [
  {
    title: "Metro Fintech",
    category: "Fintech Platform",
    summary: "Branding, layout designing and development for a financial services firm displaying real-time mutual fund charts & SIP calculators.",
    img: "/metro-fintech-mockup.png",
    slug: "metrofintech-mutual-fund-website-development"
  },
  {
    title: "Farming Sustainability",
    category: "AgriTech Solution",
    summary: "Clean eco-friendly interface design layout mockup for an agricultural sustainability startup with dashboard charts & IoT sensors.",
    img: "/farming-sustainability-mockup.png",
    slug: "auro-terra-energy-website-design"
  },
  {
    title: "The Matrimony Portal",
    category: "Social Platform",
    summary: "Custom web development & matrimonial portal design featuring search filters, profile verification & real-time chat.",
    img: "/wedding-matrimony-mockup.png",
    slug: "more-matrimony"
  }
];

const caseStudiesRow2 = [
  {
    title: "HealthPulse AI",
    category: "Healthcare Tech",
    summary: "Intelligent medical analytics platform & patient management dashboard with AI-driven diagnostic insights.",
    img: "/portfolio_case_4.png",
    slug: "healthpulse-ai-healthcare-dashboard"
  },
  {
    title: "NexStore Commerce",
    category: "E-Commerce Suite",
    summary: "High-conversion cross-platform mobile shopping app & admin console with instant checkout integrations.",
    img: "/portfolio_case_5.png",
    slug: "nexstore-ecommerce-mobile-suite"
  },
  {
    title: "CloudMatrix Ops",
    category: "DevOps & Cloud",
    summary: "Enterprise server management platform offering real-time node monitoring, auto-scaling & security logs.",
    img: "/portfolio_case_6.png",
    slug: "cloudmatrix-devops-infrastructure"
  }
];

export default function PortfolioSection() {
  const { openModal } = useModal();
  const row1Items = [...caseStudiesRow1, ...caseStudiesRow1, ...caseStudiesRow1];
  const row2Items = [...caseStudiesRow2, ...caseStudiesRow2, ...caseStudiesRow2];

  return (
    <section id="portfolio" className="relative bg-white py-16 font-sans border-t border-slate-200 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/40 bg-[#305EFF]/5 px-4.5 py-1 text-xs font-bold uppercase tracking-wider text-[#305EFF] font-display shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          FEATURED PORTFOLIO & CASE STUDIES
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-display text-slate-900">
          Transforming Ideas Into <span className="text-[#305EFF] font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Digital Reality</span>
        </h2>
      </div>

      {/* Gradient edge masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="flex flex-col gap-8 w-full">
        {/* ROW 1: Continuous Horizontal Motion (Left Scroll) */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-6"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {row1Items.map((study, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[280px] sm:w-[340px] md:w-[420px] shrink-0 group rounded-[2rem] border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#305EFF] flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                  <Image src={study.img} alt={study.title} fill sizes="420px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col items-start gap-3 flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#305EFF] uppercase tracking-wider bg-[#305EFF]/10 px-3 py-1 rounded-full border border-[#305EFF]/20 inline-block mb-2">
                      {study.category}
                    </span>
                    <h3 className="font-display text-2xl font-extrabold text-slate-900 group-hover:text-[#305EFF] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mt-1.5 font-medium">
                      {study.summary}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal("quote", study.category)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#305EFF] hover:text-[#305EFF] uppercase tracking-wider mt-3 cursor-pointer"
                  >
                    <span>View Study</span>
                    <ArrowUpRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Continuous Horizontal Motion (Right Scroll) */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-6"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {row2Items.map((study, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[280px] sm:w-[340px] md:w-[420px] shrink-0 group rounded-[2rem] border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#305EFF] flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                  <Image src={study.img} alt={study.title} fill sizes="420px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col items-start gap-3 flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#305EFF] uppercase tracking-wider bg-[#305EFF]/10 px-3 py-1 rounded-full border border-[#305EFF]/20 inline-block mb-2">
                      {study.category}
                    </span>
                    <h3 className="font-display text-2xl font-extrabold text-slate-900 group-hover:text-[#305EFF] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mt-1.5 font-medium">
                      {study.summary}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal("quote", study.category)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#305EFF] hover:text-[#305EFF] uppercase tracking-wider mt-3 cursor-pointer"
                  >
                    <span>View Study</span>
                    <ArrowUpRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
