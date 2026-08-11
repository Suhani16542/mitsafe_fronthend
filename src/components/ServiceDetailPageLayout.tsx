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
  HelpCircle,
  ShieldCheck,
  Zap,
  Check,
  CreditCard,
  Building2,
  CheckSquare,
  Lock,
  BarChart3,
  Server
} from "lucide-react";
import { Service } from "@/data/services";

const iconMap: Record<string, React.ComponentType<any>> = {
  Code: Code,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Bot: Cpu,
  Layers: Layers,
  Cloud: Cloud,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Palette: Palette,
  CreditCard: CreditCard,
};

interface ServiceDetailPageLayoutProps {
  service: Service;
}

export default function ServiceDetailPageLayout({ service }: ServiceDetailPageLayoutProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const IconComponent = iconMap[service.iconName] || Code;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div
      className="bg-white min-h-screen text-black"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-28 pb-10 md:pt-36 md:pb-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-5 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#305EFF] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#premium-showcase" className="hover:text-[#305EFF] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#305EFF] font-bold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left: Headline, Copy & Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 flex flex-col gap-4 text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] w-fit shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#305EFF]" />
                <span className="text-[#305EFF]">{service.title} Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold leading-[1.15] tracking-tight text-black font-sans">
                Custom <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>{service.title} Solutions</span>
              </h1>

              <p className="max-w-xl text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-slate-600 font-medium font-sans">
                {service.shortDescription}
              </p>

              {/* CTAs — EXACTLY 1 "Get a Free Quote" here */}
              <div className="flex flex-wrap gap-3.5 pt-1 items-center">
                <Link
                  href="/get-a-quote"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#305EFF] via-indigo-600 to-[#305EFF] bg-[length:200%_auto] text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow-md hover:bg-[position:100%_0] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#overview"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#305EFF] text-[#305EFF] hover:bg-[#305EFF] hover:text-white font-semibold text-xs sm:text-sm rounded-full transition-all duration-300 hover:scale-[1.02] shadow-sm cursor-pointer"
                >
                  <span>Explore Capabilities</span>
                </Link>
              </div>

              {/* Key Stats Metric Bar (4 Metrics Grid) */}
              {service.stats && service.stats.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-200/80 mt-1"
                >
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col gap-0.5">
                      <span className="text-lg sm:text-xl font-black text-black font-sans" style={{ color: "#000000" }}>{stat.value}</span>
                      <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Right: Technical Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#305EFF]/30 transition-all duration-300">
                <div className="absolute w-36 h-36 rounded-full bg-[#305EFF]/10 blur-3xl -top-8 -right-8 pointer-events-none" />

                <div className="w-14 h-14 rounded-2xl bg-[#305EFF]/10 border border-[#305EFF]/20 flex items-center justify-center text-[#305EFF] mb-4 relative z-10">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-base font-bold text-black text-center mb-1.5 font-sans relative z-10">
                  {service.heroCardTitle || "Enterprise Specifications"}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed text-center max-w-xs mb-4 font-medium font-sans relative z-10">
                  {service.heroCardDescription || "Engineered for high speed, low latency, and enterprise-grade reliability."}
                </p>

                <div className="w-full flex flex-col gap-2 relative z-10 pt-3 border-t border-slate-100">
                  {service.features.slice(0, 4).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF] shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. SERVICE OVERVIEW (2-Column Layout) ── */}
      <section id="overview" className="py-10 md:py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col gap-2.5"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] w-fit">
                SERVICE OVERVIEW
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[1.9rem] font-black tracking-tight leading-[1.16] font-sans text-black">
                High-Performance Engineering <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Built to Scale</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col justify-start gap-3"
            >
              <p className="text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-slate-600 font-medium font-sans">
                {service.longDescription}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. SOLUTIONS & SUB-SERVICE OFFERINGS ── */}
      {service.subServiceGroups && service.subServiceGroups.length > 0 && (
        <section className="py-10 md:py-14 bg-slate-50/60 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

            <div className="flex flex-col items-center text-center gap-2 mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] w-fit">
                SOLUTIONS & OFFERINGS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[1.9rem] font-black tracking-tight leading-[1.15] text-black font-sans">
                Comprehensive <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>{service.title} Solutions</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md">
                Structured engineering offerings tailored to address specific technical deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {service.subServiceGroups.map((group, gIdx) => (
                <motion.div
                  key={gIdx}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gIdx * 0.08 }}
                  className="bg-white border border-slate-200/90 rounded-[20px] p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-[#305EFF]/30 transition-all duration-300"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#305EFF]/10 border border-[#305EFF]/20 flex items-center justify-center text-[#305EFF]">
                      <Zap className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-base font-bold text-black font-sans">
                      {group.name}
                    </h3>
                    <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                      {group.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#305EFF] shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-slate-600 font-sans">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ── 4. CORE ARCHITECTURE STANDARDS (Rich Content Pillar Grid) ── */}
      <section className="py-10 md:py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="flex flex-col items-center text-center gap-2 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] w-fit">
              ENGINEERING STANDARDS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[1.9rem] font-black tracking-tight leading-[1.15] text-black font-sans">
              Built on Modern <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Technical Excellence</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md">
              Our core engineering principles ensure security, performance, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200/90 rounded-[18px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF]">
                <Server className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-black font-sans">Scalable Infrastructure</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Cloud-native architectures engineered for auto-scaling and high user throughput.</p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-[18px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF]">
                <Lock className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-black font-sans">Enterprise Security</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">End-to-end encryption, OAuth2 tokens, and security audits protecting data integrity.</p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-[18px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF]">
                <BarChart3 className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-black font-sans">Sub-Second Speed</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Core Web Vitals profiling and asset optimization for maximum rendering velocity.</p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-[18px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF]">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-black font-sans">100% Code Ownership</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Full ownership of all custom source code, documentation, schemas, and IP assets.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. CAPABILITIES & BUSINESS ROI (2-Column Comparative Layout) ── */}
      <section className="py-10 md:py-14 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="flex flex-col items-center text-center gap-2 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] w-fit">
              CAPABILITIES & ROI
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[1.9rem] font-black tracking-tight leading-[1.15] text-black font-sans">
              Technical Capabilities & <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Business ROI</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md">
              Why leading organizations partner with Mitsafe for long-term engineering success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {/* Technical Capabilities Block */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-200/90 rounded-[20px] p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col gap-4 hover:border-slate-300 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                <div className="w-9 h-9 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF]">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-black font-sans">
                  Key Technical Features
                </h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#305EFF] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-relaxed font-medium text-slate-600 font-sans">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business Benefits Block */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="bg-white border border-slate-200/90 rounded-[20px] p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col gap-4 hover:border-slate-300 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                <div className="w-9 h-9 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF]">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-black font-sans">
                  Measurable Business ROI
                </h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#305EFF]/20 border-2 border-[#305EFF] shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm leading-relaxed font-medium text-slate-600 font-sans">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── 6. ENGINEERING TECH STACK ── */}
      <section className="py-10 md:py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">

            <div className="w-full lg:w-1/3 flex flex-col items-start text-left gap-2 shrink-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] w-fit">
                ENGINEERING STACK
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[1.9rem] font-black tracking-tight leading-[1.15] text-black font-sans">
                Technologies <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>We Leverage</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Modern frameworks, languages, and tools picked for reliability and speed.
              </p>
            </div>

            <div className="w-full lg:w-2/3 flex flex-wrap justify-start lg:justify-end gap-2.5">
              {service.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="px-3.5 py-2 rounded-full border border-slate-200/90 bg-white text-xs font-bold text-slate-700 shadow-sm hover:border-[#305EFF]/40 hover:text-[#305EFF] transition-all font-sans cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. DEVELOPMENT PROCESS TIMELINE ── */}
      <section className="py-10 md:py-14 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <div className="flex flex-col items-start text-left gap-2 max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] w-fit">
                WORKFLOW TIMELINE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[1.9rem] font-black tracking-tight leading-[1.15] text-black font-sans">
                Development <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Process</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed font-medium text-slate-500 max-w-xs text-left md:text-right font-sans">
              From blueprint discovery to production deployment and SLAs.
            </p>
          </div>

          <div className="relative border-l-2 border-[#305EFF]/30 max-w-3xl pl-6 sm:pl-8 flex flex-col gap-5 mx-auto lg:mx-0">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="relative bg-white border border-slate-200/90 rounded-[16px] p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#305EFF]/30 transition-all"
              >
                <div className="absolute -left-[37px] sm:-left-[45px] top-4 w-7 h-7 rounded-full border-2 border-[#305EFF] bg-white flex items-center justify-center text-[11px] font-black text-[#305EFF] font-sans shadow-sm">
                  {step.step}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm sm:text-base font-bold text-black font-sans leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium font-sans">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 8. INDUSTRIES SERVED ── */}
      <section className="py-10 md:py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col gap-2"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] w-fit">
                APPLICABILITY
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[1.9rem] font-black tracking-tight leading-[1.15] text-black font-sans">
                Industries <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>We Serve</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium max-w-sm">
                Customized for industry compliance, security standards, and workflow logic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-7 flex flex-wrap gap-2.5"
            >
              {service.industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-2 bg-slate-50/60 border border-slate-200/90 rounded-xl shadow-sm hover:border-[#305EFF]/30 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#305EFF] shrink-0" />
                  <span className="text-xs font-bold text-black font-sans">{ind}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 9. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-10 md:py-14 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="flex flex-col items-center text-center gap-2 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] w-fit">
              COMMON QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[1.9rem] font-black tracking-tight leading-[1.15] text-black font-sans">
              Frequently Asked <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="border border-slate-200/90 rounded-[14px] bg-white overflow-hidden hover:border-slate-300 transition-all duration-300 shadow-[0_2px_6px_rgba(0,0,0,0.01)]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-3.5 flex items-center justify-between gap-4 text-left font-bold text-xs sm:text-sm text-black hover:text-[#305EFF] transition-colors font-sans cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#305EFF] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#305EFF]" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-4 text-xs sm:text-sm leading-relaxed font-medium text-slate-500 font-sans border-t border-slate-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 10. CALL TO ACTION — EXACTLY 2nd "Get a Free Quote" CTA HERE ── */}
      <section id="contact" className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="relative overflow-hidden rounded-[24px] px-6 py-10 sm:px-10 sm:py-12 text-center flex flex-col items-center gap-4 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] bg-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] w-fit relative z-10">
              START YOUR PROJECT
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight leading-[1.15] text-black font-sans max-w-xl relative z-10">
              {service.ctaTitle ? (
                (() => {
                  const title = service.ctaTitle;
                  const match = title.match(/^(.*?\b(?:Your|Custom|Product's|Operations with|Disparate|Digital Visibility &)\s+)(.+)$/i) || 
                                title.match(/^(.*?\b(?:Build|Launch|Modernize|Automate|Elevate|Streamline|Scale|Connect)\s+)(.+)$/i);
                  if (match) {
                    return (
                      <>
                        {match[1]}
                        <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>{match[2]}</span>
                      </>
                    );
                  }
                  return title;
                })()
              ) : (
                <>Ready to Engineer Your <span className="text-[#305EFF] font-black" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Next Software Platform?</span></>
              )}
            </h2>

            <p className="text-xs sm:text-sm leading-relaxed font-medium text-slate-500 font-sans max-w-lg relative z-10">
              {service.ctaDescription || "Speak with our senior software engineers today. We will evaluate your technical requirements and outline a scalable roadmap."}
            </p>

            <div className="flex flex-wrap gap-3.5 justify-center mt-2 relative z-10">
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#305EFF] via-indigo-600 to-[#305EFF] bg-[length:200%_auto] text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow-md hover:bg-[position:100%_0] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#305EFF] text-[#305EFF] hover:bg-[#305EFF] hover:text-white font-semibold text-xs sm:text-sm rounded-full transition-all duration-300 hover:scale-[1.02] shadow-sm cursor-pointer"
              >
                <span>View Our Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
