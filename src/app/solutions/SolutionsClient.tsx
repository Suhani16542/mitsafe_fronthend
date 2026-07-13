"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  motion, 
  useInView 
} from "framer-motion";
import { 
  Brain, 
  Code, 
  Laptop, 
  Smartphone, 
  Cloud, 
  Layers, 
  Palette, 
  Building2, 
  Bot, 
  Zap, 
  Database, 
  ShieldAlert, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import LottieAnimation from "@/components/LottieAnimation";
import Button from "@/components/Button";

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

export default function SolutionsClient() {
  const solutions = [
    { title: "AI Solutions", icon: Brain, desc: "Building neural networks, natural language processors, and semantic database indices to unlock corporate data value.", color: "border-[#7C3AED]/20 hover:border-[#7C3AED]/45 hover:shadow-[0_15px_30px_rgba(124,58,237,0.18)]" },
    { title: "Custom Software Development", icon: Code, desc: "Writing modular, type-safe internal systems and robust backend structures designed around company execution.", color: "border-[#00D4FF]/20 hover:border-[#00D4FF]/45 hover:shadow-[0_15px_30px_rgba(0,212,255,0.18)]" },
    { title: "Web Development", icon: Laptop, desc: "Engineering premium Next.js web applications, headless architectures, and fast landing pages that convert.", color: "border-[#008FED]/20 hover:border-[#008FED]/45 hover:shadow-[0_15px_30px_rgba(0,143,237,0.18)]" },
    { title: "Mobile App Development", icon: Smartphone, desc: "Deploying highly responsive mobile apps for iOS and Android utilizing modern React Native and Flutter caches.", color: "border-purple-500/20 hover:border-purple-500/45 hover:shadow-[0_15px_30px_rgba(168,85,247,0.18)]" },
    { title: "Cloud Solutions", icon: Cloud, desc: "Orchestrating auto-scaling clusters, secure cloud firewalls, and database replica sets for high availability.", color: "border-emerald-500/20 hover:border-emerald-500/45 hover:shadow-[0_15px_30px_rgba(16,185,129,0.18)]" },
    { title: "DevOps", icon: Layers, desc: "Configuring containerized pipelines (Docker, Kubernetes) and detailed application runtime telemetry monitors.", color: "border-rose-500/20 hover:border-rose-500/45 hover:shadow-[0_15px_30px_rgba(244,63,94,0.18)]" },
    { title: "UI/UX Design", icon: Palette, desc: "Creating high-fidelity Figma components, client journey models, and modern aesthetic themes.", color: "border-teal-500/20 hover:border-teal-500/45 hover:shadow-[0_15px_30px_rgba(20,184,166,0.18)]" },
    { title: "Enterprise Applications", icon: Building2, desc: "Building modular administrative software systems, CRM software portals, and integrated staff dashboards.", color: "border-indigo-500/20 hover:border-indigo-500/45 hover:shadow-[0_15px_30px_rgba(99,102,241,0.18)]" },
    { title: "AI Automation", icon: Bot, desc: "Developing autonomous software assistants that automate system entry operations and speed metrics.", color: "border-amber-500/20 hover:border-amber-500/45 hover:shadow-[0_15px_30px_rgba(245,158,11,0.18)]" },
    { title: "Digital Transformation", icon: Zap, desc: "Migrating administrative spreadsheets into secure cloud nodes, ensuring full system tracking capability.", color: "border-cyan-500/20 hover:border-cyan-500/45 hover:shadow-[0_15px_30px_rgba(6,182,212,0.18)]" },
    { title: "Data & Analytics", icon: Database, desc: "Configuring real-time telemetry collectors, dashboard charts, and secure data storage arrays.", color: "border-orange-500/20 hover:border-orange-500/45 hover:shadow-[0_15px_30px_rgba(249,115,22,0.18)]" },
    { title: "Cybersecurity", icon: ShieldAlert, desc: "Formulating zero-trust network credentials, end-to-end database encryption, and penetration testing.", color: "border-red-500/20 hover:border-red-500/45 hover:shadow-[0_15px_30px_rgba(239,68,68,0.18)]" }
  ];

  return (
    <div className="cosmic-solutions-wrapper bg-[#071426] text-white min-h-screen relative font-sans overflow-x-hidden">
      
      {/* Background ambient animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ y: [0, -40, 0], x: [0, 15, 0], opacity: [0.07, 0.18, 0.07] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-[380px] h-[380px] bg-[#00D4FF]/5 rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ y: [0, 35, 0], x: [0, -30, 0], opacity: [0.06, 0.15, 0.06] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[5%] w-[420px] h-[420px] bg-[#7C3AED]/4 rounded-full blur-[95px]"
        />
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-36 pb-32 flex flex-col items-center text-center px-6 lg:px-8 bg-gradient-to-b from-[#071426] via-[#091a33] to-[#0B1A2E] overflow-hidden z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Hero Lottie Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-[280px] h-[220px] sm:w-[360px] sm:h-[280px] md:w-[480px] md:h-[350px] mb-8 relative flex justify-center items-center"
          >
            <LottieAnimation 
              src="/animations/hero-lottie.json" 
              className="w-full h-full" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(0,212,255,0.25)] bg-[#00D4FF]/10 px-4.5 py-1.5 text-xs font-semibold tracking-wider text-[#00D4FF] uppercase backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              High-Performance Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl"
          >
            Technical Solutions Built <br />
            <span className="gradient-sweep-text">To Scale Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-350 max-w-3xl leading-relaxed font-normal"
          >
            We program cloud backends, configure continuous integrations, and implement tailored database interfaces built on security.
          </motion.p>
        </div>

        {/* Curved Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[70px]">
            <path 
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
              className="fill-[#0B1A2E]"
            />
          </svg>
        </div>
      </section>

      {/* 2. Solutions Showcase Section */}
      <section className="relative py-24 bg-[#0B1A2E] z-10 px-6 lg:px-8 overflow-hidden">
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
                <span className="text-xs font-bold text-[#00D4FF] uppercase tracking-wider font-mono">
                  // ENGINEERING PRINCIPLES
                </span>
                <h2 
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
                >
                  System Integration Without Friction
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Our technical systems are designed to operate continuously under heavy concurrent user loads. By implementing robust container architectures, automated deployment workflows, and secure cryptographic storage, we ensure high speed with zero security leaks.
                </p>
                <p className="text-sm sm:text-base text-slate-350 leading-relaxed font-normal">
                  Whether you are planning to modernize legacy database software or deploy predictive artificial intelligence systems, our engineers construct solutions tailored to match your specific hardware constraints and team operations.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-3 mt-4">
                {["CI/CD Automated", "Zero Downtime", "Secure Encryption", "Autoscaling Nodes"].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUpStagger}
                    className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-slate-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#00D4FF]" />
                    {badge}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Showcase Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={slideInRight}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/15 to-transparent rounded-[32px] blur-2xl pointer-events-none" />
              <div className="relative border border-[#E5E2F0]/20 rounded-[32px] overflow-hidden shadow-lg aspect-[4/3] w-full group/img">
                <Image 
                  src="/solutions_engineering.png" 
                  alt="Futuristic artificial intelligence core blueprints" 
                  fill
                  className="object-cover group-hover/img:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Solutions Grid Section */}
      <section className="relative py-24 bg-[#071426]/60 px-6 lg:px-8 border-t border-b border-[#E5E2F0]/10 z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold text-[#00D4FF] uppercase tracking-wider font-mono">
              // SOLUTION MATRIX
            </span>
            <h2 
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3"
            >
              Core Software Configurations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
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
                  className={`bg-[#0B1A2E]/55 border ${sol.color} rounded-[24px] p-6 shadow-sm flex flex-col justify-between gap-5 relative overflow-hidden group hover:bg-[#0B1A2E]/80 transition-all duration-300 cursor-default`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors duration-250">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {sol.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="relative py-28 bg-[#0B1A2E] z-10 px-6 lg:px-8 border-t border-[#E5E2F0]/10 flex flex-col items-center overflow-hidden">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#00D4FF]/6 rounded-full blur-[80px] pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={imageReveal}
          whileHover={{ scale: 1.008 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto text-center border border-[#00D4FF]/15 bg-[#071426]/60 rounded-[32px] p-8 md:p-14 shadow-2xl relative z-10 flex flex-col items-center gap-6 hover:border-[#00D4FF]/30 transition-all duration-300"
        >
          <span className="text-xs font-bold text-[#00D4FF] uppercase tracking-wider font-mono">
            // architecture request
          </span>
          <h2 
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Ready to Configure Your Technical Solutions?
          </h2>
          <p className="text-sm sm:text-base text-slate-355 max-w-2xl leading-relaxed font-normal">
            Discuss your system blueprints with our engineering team today. We build modular software products and auto-scaling cloud databases designed for zero downtimes.
          </p>
          <div className="mt-4">
            <Button
              href="/contact"
              variant="primary"
              icon={<ArrowRight className="w-4 h-4 text-white" />}
              className="!py-3 !px-7 !text-sm !font-bold !rounded-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Our Engineers
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
