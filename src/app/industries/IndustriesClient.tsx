"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  motion, 
  useInView 
} from "framer-motion";
import { 
  HeartPulse, 
  DollarSign, 
  GraduationCap, 
  ShoppingBag, 
  Factory, 
  Truck, 
  Home, 
  Coffee, 
  Cloud, 
  Rocket, 
  Building2, 
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle
} from "lucide-react";
import LottieAnimation from "@/components/LottieAnimation";
import Button from "@/components/Button";
import GradientButton from "@/components/GradientButton";

// High-fidelity animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(3px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

const fadeInUpStagger = {
  hidden: { opacity: 0, y: 35, scale: 0.96, filter: "blur(3px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -45, filter: "blur(3px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 45, filter: "blur(3px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

export default function IndustriesClient() {
  const industries = [
    { name: "Healthcare", icon: HeartPulse, desc: "Building secure, HIPAA-compliant patient management portals, telehealth architectures, and clinical AI assistants.", color: "border-red-500/20 hover:border-red-500/45 hover:shadow-[0_15px_30px_rgba(239,68,68,0.18)]" },
    { name: "Finance", icon: DollarSign, desc: "Developing secure algorithmic transaction managers, custom dashboard analytics, and distributed ledger configurations.", color: "border-emerald-500/20 hover:border-emerald-500/45 hover:shadow-[0_15px_30px_rgba(16,185,129,0.18)]" },
    { name: "Education", icon: GraduationCap, desc: "Engineering online virtual classrooms, custom school management (ERP) applications, and interactive learning tools.", color: "border-blue-500/20 hover:border-blue-500/45 hover:shadow-[0_15px_30px_rgba(59,130,246,0.18)]" },
    { name: "Retail & E-commerce", icon: ShoppingBag, desc: "Formulating digital shopping checkouts, cart processors, inventory trackers, and AI client recommenders.", color: "border-amber-500/20 hover:border-amber-500/45 hover:shadow-[0_15px_30px_rgba(245,158,11,0.18)]" },
    { name: "Manufacturing", icon: Factory, desc: "Creating supply pipeline monitors, hardware telemetry metrics, and factory production optimization modules.", color: "border-rose-500/20 hover:border-rose-500/45 hover:shadow-[0_15px_30px_rgba(244,63,94,0.18)]" },
    { name: "Logistics", icon: Truck, desc: "Designing route mapping programs, real-time fleet trackers, and autonomous driver coordinate synchronizers.", color: "border-cyan-500/20 hover:border-cyan-500/45 hover:shadow-[0_15px_30px_rgba(6,182,212,0.18)]" },
    { name: "Real Estate", icon: Home, desc: "Developing interactive layout guides, 3D listing platforms, and customer booking dashboard pipelines.", color: "border-indigo-500/20 hover:border-indigo-500/45 hover:shadow-[0_15px_30px_rgba(99,102,241,0.18)]" },
    { name: "Hospitality", icon: Coffee, desc: "Building guest booking check-in systems, custom food order routers, and client review telemetry engines.", color: "border-orange-500/20 hover:border-orange-500/45 hover:shadow-[0_15px_30px_rgba(249,115,22,0.18)]" },
    { name: "SaaS", icon: Cloud, desc: "Configuring multi-tenant SaaS structures, auto-billing subscriptions, and highly responsive dashboard backends.", color: "border-sky-500/20 hover:border-sky-500/45 hover:shadow-[0_15px_30px_rgba(14,165,233,0.18)]" },
    { name: "Startups", icon: Rocket, desc: "Deploying speed-optimized MVPs, auto-scaling server configurations, and flexible database models for quick iterations.", color: "border-purple-500/20 hover:border-purple-500/45 hover:shadow-[0_15px_30px_rgba(168,85,247,0.18)]" },
    { name: "Government", icon: Building2, desc: "Engineering secure portal integrations, zero-trust cloud nodes, and robust data audit record systems.", color: "border-teal-500/20 hover:border-teal-500/45 hover:shadow-[0_15px_30px_rgba(20,184,166,0.18)]" }
  ];

  return (
    <div className="cosmic-industries-wrapper bg-white text-[#0F172A] min-h-screen relative font-sans overflow-x-hidden">
      
      {/* Background ambient firefly graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ y: [0, -35, 0], x: [0, 25, 0], opacity: [0.08, 0.20, 0.08] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#2563FF]/5 rounded-full blur-[90px]"
        />
        <motion.div 
          animate={{ y: [0, 45, 0], x: [0, -20, 0], opacity: [0.05, 0.16, 0.05] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[45%] left-[5%] w-[450px] h-[450px] bg-[#2563FF]/5 rounded-full blur-[100px]"
        />
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-36 pb-32 flex flex-col items-center text-center px-6 lg:px-8 bg-white overflow-hidden z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Dashboard Lottie Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-[280px] h-[220px] sm:w-[360px] sm:h-[280px] md:w-[480px] md:h-[350px] mb-8 relative flex justify-center items-center"
          >
            <LottieAnimation 
              src="/animations/Man and robot with computers sitting together in workplace.json" 
              className="w-full h-full" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#2563FF]/5 px-4.5 py-1.5 text-xs font-semibold tracking-wider text-[#2563FF] uppercase backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Tailored Sector Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl"
          >
            <span style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Industries We Revolutionize</span> <br />
            <span className="font-extrabold inline-block" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>With Intelligent Code</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-655 max-w-3xl leading-relaxed font-normal"
          >
            We deploy specialized software frameworks and custom machine learning workflows tailored to match unique industrial demands.
          </motion.p>
        </div>

        {/* Curved Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[70px]">
            <path 
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* 2. Industries Showcase Section */}
      <section className="relative py-24 bg-white z-10 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={slideInLeft}
                className="flex flex-col gap-4"
              >
                <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
                  // VERTICAL INTEGRATION
                </span>
                <h2 
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
                >
                  Architected to Solve <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Domain Challenges</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-650 leading-relaxed font-normal">
                  Our development approach starts with domain specifics. We understand that a fintech dashboard requires double-entry accounting integrity, while a healthcare application prioritizes zero-latency emergency feeds and HIPAA security checks.
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  {["HIPAA Secure", "PCI-DSS Compliant", "Auto-Scaling Core", "Real-Time Telemetry"].map((badge, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={fadeInUpStagger}
                      className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#2563FF]" />
                      {badge}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Showcase Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={slideInRight}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563FF]/15 to-transparent rounded-[32px] blur-2xl pointer-events-none" />
              <div className="relative border border-slate-200 rounded-[32px] overflow-hidden shadow-lg aspect-[4/3] w-full group/img">
                <Image 
                  src="/industries_showcase.png" 
                  alt="Futuristic industrial digital smart city illustration" 
                  fill
                  className="object-cover group-hover/img:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Industries Grid Section */}
      <section className="relative py-24 bg-white px-6 lg:px-8 border-t border-b border-slate-200 z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
              // EXPERTISE FIELDS
            </span>
            <h2 
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-3"
            >
              Sectors We <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Help Grow</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUpStagger}
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`bg-white border border-slate-200 rounded-[24px] p-6 shadow-sm flex flex-col justify-between gap-5 relative overflow-hidden group hover:bg-slate-50 transition-all duration-300 cursor-default`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#2563FF] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors duration-250">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {ind.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="relative py-28 bg-white z-10 px-6 lg:px-8 border-t border-slate-200 flex flex-col items-center overflow-hidden">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#2563FF]/5 rounded-full blur-[80px] pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={imageReveal}
          whileHover={{ scale: 1.008 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto text-center border border-slate-200 bg-slate-50/50 rounded-[32px] p-8 md:p-14 shadow-2xl relative z-10 flex flex-col items-center gap-6 hover:border-[#2563FF]/30 transition-all duration-300"
        >
          <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
            // domain solutions
          </span>
          <h2 
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            Need Specialized <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Sector Infrastructure?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-650 max-w-2xl leading-relaxed font-normal">
            Discuss your technical goals with our engineering architects today. We configure dedicated teams and build secure custom software systems built around your operations.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <GradientButton href="/get-a-quote">
              Get a Quote
            </GradientButton>

            <GradientButton href="/contact">
              Speak with an Architect
            </GradientButton>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
