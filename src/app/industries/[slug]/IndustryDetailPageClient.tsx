"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Zap,
  HelpCircle,
  BarChart3,
  Cpu,
  Layers,
  Globe,
  Check,
  Gauge,
  AlertTriangle,
  Server,
  Lock,
  Clock,
  Activity,
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Building2,
  Compass,
  Truck,
  Factory,
  Tv,
  Cloud,
  Car,
  Briefcase,
  Smartphone,
  Search,
  RefreshCw,
  Key,
  FileCheck,
  Database,
  Bell,
  CreditCard,
  UserCheck,
  Calendar,
  Folder,
  BookOpen
} from "lucide-react";
import { IndustryDetail } from "@/data/industriesDataNavbar";
import { useModal } from "@/context/ModalContext";
import IndustryVisual from "@/components/IndustryVisual";

const iconMap: Record<string, React.ComponentType<any>> = {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Building2,
  Compass,
  Truck,
  Factory,
  Tv,
  Cloud,
  Car,
  Briefcase,
  Globe,
  Smartphone,
  Cpu,
  Gauge,
  Activity,
  Lock,
  BarChart: BarChart3,
  CheckCircle: CheckCircle2,
  BookOpen,
  Search,
  RefreshCw,
  Key,
  FileCheck,
  Database,
  Bell,
  CreditCard,
  UserCheck,
  Calendar,
  Folder,
  Shield: ShieldCheck,
  Zap
};

interface IndustryDetailPageClientProps {
  industry: IndustryDetail;
}

export default function IndustryDetailPageClient({ industry }: IndustryDetailPageClientProps) {
  const { openModal } = useModal();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const IndIcon = iconMap[industry.iconName] || Building2;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div
      className="bg-white min-h-screen text-[#0F172A] font-sans selection:bg-[#305EFF]/10 selection:text-[#305EFF]"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >

      {/* ──────────────────────────────────────────────────────────
          1. COMPACT HERO SECTION (Mitsafe Light Theme)
         ────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider font-mono">
            <Link href="/" className="hover:text-[#305EFF] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Industries</span>
            <span>/</span>
            <span className="text-brand-blue font-bold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>{industry.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Title & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7 flex flex-col gap-4 text-left"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider w-fit font-mono"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" style={{ color: "#305EFF" }} />
                <span className="text-brand-blue font-bold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>{industry.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.18] tracking-tight text-[#0F172A] font-display">
                {industry.heroHeadline}{" "}
                <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                  {industry.heroHighlight}
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                {industry.heroSubheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2 items-center">
                <button
                  onClick={() => openModal("quote")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
                  style={{ backgroundColor: "#305EFF" }}
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => openModal("quote")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200/80 font-semibold text-sm rounded-xl border border-slate-200 transition-all duration-200 cursor-pointer"
                >
                  <span className="text-brand-blue font-bold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Custom Solution</span>
                </button>
              </div>

              {/* Quick Feature Badges */}
              <div className="flex flex-wrap gap-5 pt-4 border-t border-slate-100 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" style={{ color: "#305EFF" }} />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-brand-blue" style={{ color: "#305EFF" }} />
                  <span>Sub-Second Performance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" style={{ color: "#305EFF" }} />
                  <span>Dedicated Domain Squads</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Industry Specific Visual Asset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <IndustryVisual
                slug={industry.slug}
                type="hero"
                imagePath={industry.heroImage}
                title={industry.title}
              />
            </motion.div>

          </div>

        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          2. INDUSTRY OVERVIEW SECTION
         ────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-left">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider font-mono text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
              {industry.title} Overview &amp; Challenges
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1 font-display">
              Understanding Digital Transformation in{" "}
              <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                {industry.title}
              </span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {industry.overview.whatIsIt}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left: Key Friction Points & Business Needs */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* Challenges */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <h3 className="text-base font-bold text-[#0F172A] mb-3 flex items-center gap-2 font-display">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>Current Industry Challenges</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-normal">
                  {industry.overview.challenges.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span className="leading-snug">{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What Businesses Need */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <h3 className="text-base font-bold text-[#0F172A] mb-3 flex items-center gap-2 font-display">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" style={{ color: "#305EFF" }} />
                  <span>What Businesses Need To Scale</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-normal">
                  {industry.overview.whatBusinessesNeed.map((nd, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#305EFF" }} />
                      <span className="leading-snug">{nd}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How Mitsafe Solves */}
              <div className="p-5 rounded-2xl bg-[#305EFF]/5 border border-[#305EFF]/20 text-xs text-slate-700 leading-relaxed font-normal">
                <strong className="font-bold block mb-1 font-mono uppercase tracking-wider text-[11px] text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>How Mitsafe Solves It:</strong>
                {industry.overview.howMitsafeSolves}
              </div>

            </div>

            {/* Right: Overview Industry Visual Component */}
            <div className="lg:col-span-5 flex items-center">
              <IndustryVisual
                slug={industry.slug}
                type="overview"
                imagePath={industry.overviewImage}
                title={industry.title}
              />
            </div>

          </div>

        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          3. CORE TECHNOLOGY SOLUTIONS GRID
         ────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-left">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider font-mono text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
              Featured Technologies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1 font-display">
              Core Technology Solutions for{" "}
              <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                {industry.title}
              </span>
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-normal">
              Each solution is specifically chosen to address key operational demands in this sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.techSolutions.map((sol, idx) => {
              const SolIcon = iconMap[sol.iconName] || Cpu;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#305EFF]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#305EFF]/10 border border-[#305EFF]/20 flex items-center justify-center transition-transform group-hover:scale-105" style={{ color: "#305EFF" }}>
                        <SolIcon className="w-5 h-5 text-brand-blue" style={{ color: "#305EFF" }} />
                      </div>
                      <span className="text-[10.5px] font-bold uppercase font-mono bg-[#305EFF]/10 px-2.5 py-0.5 rounded-full text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                        {industry.title} Solution
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A] mb-3 group-hover:text-[#305EFF] transition-colors font-display">
                      {sol.title}
                    </h3>

                    <div className="flex flex-col gap-2.5 text-xs text-slate-600 font-normal">
                      <div>
                        <strong className="text-slate-800 font-semibold">What it does: </strong>
                        <span>{sol.whatItDoes}</span>
                      </div>
                      <div>
                        <strong className="text-slate-800 font-semibold">Why useful: </strong>
                        <span>{sol.whyUseful}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-[#0F172A] font-medium">
                        <strong className="font-bold text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Main Benefit: </strong>
                        <span>{sol.mainBenefit}</span>
                      </div>
                      <div className="text-[11.5px] text-slate-500 pt-1">
                        <strong>Where used: </strong>
                        <span>{sol.whereUsed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          4. TECHNOLOGY COMPARISON / INSIGHT MATRIX
         ────────────────────────────────────────────────────────── */}
      {industry.techComparison && industry.techComparison.length > 0 && (
        <section className="py-12 md:py-16 bg-slate-50/70 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-left">

            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider font-mono text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                Suitability Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1 font-display">
                Technology Performance &amp;{" "}
                <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                  Suitability Comparison
                </span>
              </h2>
              <p className="text-sm text-slate-600 mt-1 font-normal">
                A clear, scan-friendly guide to selecting the right tech stack for your exact business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.techComparison.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between text-left"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase font-mono tracking-wider block mb-1 text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                      {comp.bestFor}
                    </span>
                    <h3 className="text-base font-bold text-[#0F172A] mb-4 font-display">
                      {comp.technologyName}
                    </h3>

                    {/* Metric Badges */}
                    <div className="flex flex-wrap gap-2 mb-4 text-[11px] font-semibold">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Speed: {comp.speed}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                        Scale: {comp.scalability}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        Cost: {comp.costLevel}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      <strong className="text-slate-800 font-semibold">Key Advantage: </strong>
                      {comp.mainBenefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* ──────────────────────────────────────────────────────────
          5. KEY BENEFITS SECTION ("Why Choose Mitsafe?")
         ────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-left">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider font-mono text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
              Why Mitsafe
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1 font-display">
              Why Choose Mitsafe for{" "}
              <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                {industry.title}?
              </span>
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-normal">
              We bring specialized engineering practices, pre-built domain modules, and proven business metrics to your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#305EFF]/40 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#305EFF]/10 border border-[#305EFF]/20 flex items-center justify-center mb-3 text-brand-blue" style={{ color: "#305EFF" }}>
                    <Check className="w-4 h-4 text-brand-blue" style={{ color: "#305EFF" }} />
                  </div>
                  <h3 className="text-sm font-bold text-[#0F172A] mb-1 font-display">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          6. INDUSTRY-SPECIFIC SERVICES
         ────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-left">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider font-mono text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
              OUR ENGINEERING SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1 font-display">
              Services Tailored for{" "}
              <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                {industry.title}
              </span>
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-normal">
              Specialized engineering capabilities we bring to your project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.industryServices.map((srv, idx) => {
              const SrvIcon = iconMap[srv.iconName] || Globe;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#305EFF]/40 hover:shadow-md transition-all text-left flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-[#305EFF]/10 border border-[#305EFF]/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform text-brand-blue" style={{ color: "#305EFF" }}>
                      <SrvIcon className="w-4.5 h-4.5 text-brand-blue" style={{ color: "#305EFF" }} />
                    </div>
                    <h3 className="text-sm font-bold text-[#0F172A] mb-1 font-display group-hover:text-[#305EFF] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                      {srv.description}
                    </p>
                  </div>

                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold hover:underline text-brand-blue"
                    style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          7. USE CASES / REAL-WORLD APPLICATIONS
         ────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-left">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider font-mono text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
              REAL-WORLD APPLICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1 font-display">
              Practical Use Cases in{" "}
              <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                {industry.title}
              </span>
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-normal">
              How modern technology translates into measurable operational results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between text-left"
              >
                <div>
                  <span className="text-[10.5px] font-bold uppercase font-mono px-2.5 py-0.5 rounded-full bg-[#305EFF]/10 inline-block mb-3 text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                    {uc.technology}
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2 font-display">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                    <strong className="text-slate-800 font-semibold">Application: </strong>
                    {uc.application}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-[#0F172A]">
                  <strong className="font-bold text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Measured Impact: </strong>
                  <span>{uc.impact}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          8. PROCESS SECTION ("How We Work")
         ────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-left">

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider font-mono text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
              Proven Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1 font-display">
              Our Proven Engineering{" "}
              <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                Process
              </span>
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-normal">
              A structured, transparent 6-step lifecycle from discovery to post-launch support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {industry.process.map((proc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-left flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold font-mono block mb-1 text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                    {proc.step}
                  </span>
                  <h4 className="text-xs font-bold text-[#0F172A] mb-1 font-display">
                    {proc.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    {proc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ──────────────────────────────────────────────────────────
          9. FREQUENTLY ASKED QUESTIONS
         ────────────────────────────────────────────────────────── */}
      {industry.faqs && industry.faqs.length > 0 && (
        <section className="py-12 md:py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-left">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider font-mono text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1 font-display">
                Got Questions About{" "}
                <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                  {industry.title}?
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {industry.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0F172A] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#305EFF]" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}


      {/* ──────────────────────────────────────────────────────────
          10. LIGHT THEME CTA BANNER (WHITE/SLATE CARD - BLUE BUTTON)
         ────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left relative overflow-hidden">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider font-mono text-brand-blue" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                TRANSFORM YOUR {industry.title.toUpperCase()} BUSINESS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-display tracking-tight">
                Ready to Build Your{" "}
                <span className="text-brand-blue font-extrabold" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                  Custom Solution?
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Let&apos;s build a secure, scalable and future-ready digital solution for your business.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <button
                onClick={() => openModal("quote")}
                className="px-7 py-3.5 rounded-xl text-white font-bold text-xs shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-sans"
                style={{ backgroundColor: "#305EFF" }}
              >
                Get a Free Consultation →
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
