"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Code,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  TrendingUp,
  Briefcase,
  Palette,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { Service } from "@/data/services";
import Button from "@/components/Button";
import GradientButton from "@/components/GradientButton";

// Icon mapping helper
const iconMap: Record<string, React.ComponentType<any>> = {
  Code: Code,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Bot: Cpu, // fallback for custom Bot icon lookup
  Layers: Layers,
  Cloud: Cloud,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Palette: Palette,
};

interface ServiceDetailPageLayoutProps {
  service: Service;
}

export default function ServiceDetailPageLayout({ service }: ServiceDetailPageLayoutProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const IconComponent = iconMap[service.iconName] || Code;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 relative overflow-hidden cosmic-servicedetail-wrapper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-[#1D4ED8] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="text-[#1D4ED8]">Services</Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">{service.title}</span>
        </div>

        {/* 1. PREMIUM HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#2563FF]/5 px-4.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1D4ED8] shadow-sm w-fit font-mono"
            >
              SERVICE DETAIL
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Custom <span className="font-black" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>{service.title}</span> <br />
              For Enterprise Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
            >
              {service.shortDescription}
            </motion.p>

            {/* Stats row inside hero */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 mt-4"
            >
              {service.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-xl md:text-2xl font-bold text-[#1D4ED8] font-display">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Illustration Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-xl group hover:border-[#1D4ED8]/30 transition-all duration-300 min-h-[300px]"
          >
            {/* Glowing Backdrop Circle */}
            <div className="absolute w-48 h-48 rounded-full bg-blue-50/50 blur-3xl -top-10 -right-10 pointer-events-none" />
            <div className="absolute w-48 h-48 rounded-full bg-blue-100/30 blur-3xl -bottom-10 -left-10 pointer-events-none" />

            <div className="w-20 h-20 rounded-2xl bg-[#2563FF]/10 border border-[#2563FF]/20 flex items-center justify-center text-[#1D4ED8] shadow-sm mb-6">
              <IconComponent className="w-10 h-10 animate-pulse" />
            </div>

            <h3 className="font-display text-lg font-bold text-slate-900 text-center mb-2">
              {service.heroCardTitle || "Modern Technology Integration"}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed text-center max-w-xs mb-6">
              {service.heroCardDescription || "Fully optimized for low latency, secure database mapping, and fluid web platform responsiveness."}
            </p>
            <GradientButton href="/get-a-quote">
              Request Project Quote
            </GradientButton>
          </motion.div>
        </div>

        {/* 2. SERVICE OVERVIEW */}
        <section className="mb-24 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold text-[#1D4ED8] tracking-widest uppercase block mb-3 font-mono">
                OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight leading-tight">
                {service.overviewTitle || "High-Performance Platforms Designed to Scale Your Systems"}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {service.longDescription}
              </p>
            </div>
          </div>
        </section>

        {/* 3. FEATURES & BENEFITS GRID */}
        <section className="mb-24">
          <div className="text-center mb-12 max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-[10px] font-bold text-[#1D4ED8] tracking-widest uppercase font-mono">
              CAPABILITIES & VALUES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Features & <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Business Benefits</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Why our technology engineering stands out in conversion, speed, and platform safety metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features Card */}
            <div className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm flex flex-col gap-6 backdrop-blur-xl">
              <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
                <Sparkles className="w-5 h-5 text-[#1D4ED8]" />
                Technical Features
              </h3>
              <div className="flex flex-col gap-4.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm flex flex-col gap-6 backdrop-blur-xl">
              <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
                <CheckCircle2 className="w-5 h-5 text-[#1D4ED8]" />
                Business Benefits
              </h3>
              <div className="flex flex-col gap-4.5">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8] shrink-0 mt-1.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. TECHNOLOGIES WE USE */}
        <section className="mb-24 py-12 border-t border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-[#1D4ED8] tracking-widest uppercase font-mono">
                ENGINEERING STACK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                Technologies We Leverage
              </h3>
            </div>
            <div className="lg:col-span-8 flex flex-wrap gap-3">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs sm:text-sm font-semibold px-4.5 py-2 rounded-xl border border-blue-100 bg-[#2563FF]/5 text-[#1D4ED8] shadow-sm uppercase tracking-wider font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. DEVELOPMENT PROCESS */}
        <section className="mb-24">
          <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-[10px] font-bold text-[#1D4ED8] tracking-widest uppercase font-mono">
              WORKFLOW TIMELINE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Development <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Process</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              How we take your product requirements from blueprints to highly optimized production code.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-100 max-w-3xl mx-auto pl-8 sm:pl-12 flex flex-col gap-12">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Node point */}
                <div className="absolute -left-[45px] sm:-left-[61px] top-1 w-8 h-8 rounded-full border border-blue-200 bg-white shadow-sm flex items-center justify-center text-xs font-bold text-[#1D4ED8] font-mono">
                  {step.step}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. INDUSTRIES SERVED */}
        <section className="mb-24 py-12 bg-slate-50 border border-slate-200 rounded-[32px] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-[#1D4ED8] tracking-widest uppercase font-mono">
                APPLICABILITY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                Industries We Serve
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Customizing interfaces and secure pipelines tailored to specific industry regulations.
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-wrap gap-2.5">
              {service.industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ ACCORDION */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-12 flex flex-col gap-3">
            <span className="text-[10px] font-bold text-[#1D4ED8] tracking-widest uppercase font-mono">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Frequently Asked <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Questions</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-[20px] bg-white overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-display font-bold text-sm sm:text-base text-slate-800 hover:text-[#1D4ED8] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* 8. CTA & CONTACT SECTION */}
        <section id="contact" className="mt-20">
          <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-14 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-xl">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-[#2563FF]/10 text-[#1D4ED8] px-4 py-1.5 rounded-full border border-[#2563FF]/20 relative z-10 w-fit font-mono">
              START YOUR PROJECT
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display relative z-10 max-w-2xl leading-tight">
              {service.ctaTitle || "Ready to Build a High-Performance Digital Platform?"}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md relative z-10">
              {service.ctaDescription || "Speak with our software engineers and solution architects today. We will map your database workflows and visual layouts completely."}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-4 relative z-10">
              <GradientButton href="/get-a-quote">
                Get a Free Quote
              </GradientButton>

              <GradientButton href="/portfolio">
                View Our Portfolio
              </GradientButton>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
