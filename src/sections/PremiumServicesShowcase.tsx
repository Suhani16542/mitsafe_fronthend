"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  PhoneCall,
  ShieldAlert
} from "lucide-react";
import { servicesData } from "@/data/services";
import LottieAnimation from "@/components/LottieAnimation";

// Icon map for the Bento cards
const iconMap = {
  Code: Code,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Layers: Layers,
  Cloud: Cloud,
  TrendingUp: TrendingUp,
};

/* ==========================================================================
   MICRO-ILLUSTRATIONS matching the screenshot theme
   ========================================================================== */

// 1. Web Development Illustration (Flat isometric screen + keyboard + mouse)
const WebDevIllustration = () => {
  return (
    <div className="relative w-full h-[150px] flex items-center justify-center pointer-events-none select-none">
      {/* Computer frame */}
      <motion.div
        className="w-[120px] h-[80px] rounded-lg border-2 border-slate-200 bg-white shadow-md relative flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 5, rotateX: -5 }}
      >
        <div className="w-[110px] h-[68px] bg-slate-50 rounded border border-slate-100 p-2 flex flex-col justify-between overflow-hidden">
          {/* Mock lines */}
          <div className="flex flex-col gap-1 w-full">
            <div className="w-1/3 h-1 bg-[#7C3AED]/20 rounded-full" />
            <div className="w-1/2 h-1 bg-slate-200 rounded-full" />
            <div className="w-2/3 h-1 bg-[#A78BFA]/30 rounded-full" />
            <div className="w-5/12 h-1 bg-slate-200 rounded-full" />
          </div>
          <div className="flex gap-1 justify-end">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          </div>
        </div>
        {/* Monitor stand */}
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-8 h-4 bg-slate-200 rounded-b" />
        <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-14 h-1 bg-slate-300 rounded-full" />
      </motion.div>

      {/* Floating Code Elements */}
      <motion.div
        className="absolute left-[15%] top-[20%] w-6 h-6 rounded-md bg-white border border-[#E5E2F0] shadow-sm flex items-center justify-center text-[#7C3AED]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-mono font-bold">&lt;/&gt;</span>
      </motion.div>

      <motion.div
        className="absolute right-[12%] top-[15%] w-6 h-6 rounded-md bg-white border border-[#E5E2F0] shadow-sm flex items-center justify-center text-[#7C3AED]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="text-[10px] font-mono font-bold">{}</span>
      </motion.div>
    </div>
  );
};

// 2. Mobile App Illustration (Phone isometric tilt, custom chart mockup)
const MobileAppIllustration = () => {
  return (
    <div className="relative w-full h-[150px] flex items-center justify-center pointer-events-none select-none">
      <motion.div
        initial={{ rotate: -10, y: 15 }}
        whileInView={{ rotate: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="w-[80px] h-[140px] rounded-2xl border-[3px] border-slate-700 bg-white shadow-md relative overflow-hidden flex flex-col p-1.5"
      >
        {/* Home Pll */}
        <div className="w-8 h-1.5 bg-slate-200 rounded-full self-center mb-1.5" />
        <div className="flex-grow rounded-lg bg-gradient-to-b from-purple-50 to-white border border-purple-100/40 p-1 flex flex-col justify-between">
          <div className="flex flex-col gap-1 w-full">
            <div className="w-1/2 h-1 bg-[#A78BFA] rounded-full" />
            <div className="w-full h-10 bg-white border border-purple-50 rounded flex items-center justify-center p-0.5">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                <motion.path
                  d="M0,35 Q20,15 40,25 T80,10 T100,20"
                  fill="none"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>
            </div>
          </div>
          <div className="w-full h-1 bg-[#071426] rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

// 3. AI & Automation Illustration (Robot face, sequential circuits)
const AIIllustration = () => {
  return (
    <div className="relative w-full h-[140px] flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 160 120">
        <path
          d="M20,60 h40 L80,20 h30 M20,80 h50 L90,100 h30"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="1.5"
          className="animate-circuit-path"
        />
        <circle cx="110" cy="20" r="3.5" fill="#00D4FF" className="animate-pulse-glow" />
        <circle cx="120" cy="100" r="3.5" fill="#00D4FF" className="animate-pulse-glow" />
      </svg>

      <motion.div
        className="w-[80px] h-[80px] rounded-2xl bg-[#0B1A2E]/90 border border-[rgba(0,212,255,0.15)] shadow-md relative flex flex-col items-center justify-center z-10"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Antenna */}
        <div className="absolute -top-2 flex flex-col items-center">
          <div className="w-1 h-2 bg-slate-400" />
          <motion.div 
            className="w-2.5 h-2.5 rounded-full bg-[#008FED]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
         {/* Glowing eyes */}
        <div className="flex gap-3">
          <motion.div 
            className="w-3 h-3 rounded-full bg-[#00D4FF]"
            animate={{
              boxShadow: ["0 0 2px #00D4FF", "0 0 10px #00D4FF", "0 0 2px #00D4FF"],
              scaleY: [1, 1, 0.1, 1, 1]
            }}
            transition={{
              boxShadow: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
              scaleY: { duration: 4, repeat: Infinity, delay: 1 }
            }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-[#00D4FF]"
            animate={{
              boxShadow: ["0 0 2px #00D4FF", "0 0 10px #00D4FF", "0 0 2px #00D4FF"],
              scaleY: [1, 1, 0.1, 1, 1]
            }}
            transition={{
              boxShadow: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
              scaleY: { duration: 4, repeat: Infinity, delay: 1 }
            }}
          />
        </div>
        {/* Mouth */}
        <div className="w-8 h-1 bg-slate-305 rounded-full mt-3 overflow-hidden flex justify-center items-center">
          <motion.div className="w-4 h-full bg-[#008FED] rounded-full animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};

// 4. ERP & Custom Software Illustration (Dashboard blocks)
const ERPIllustration = () => {
  return (
    <div className="w-[50px] h-[50px] relative pointer-events-none select-none flex flex-col gap-1.5 justify-center items-center">
      <div className="flex gap-1.5 items-end h-[24px]">
        <motion.div className="w-2.5 bg-[#00D4FF]/40 rounded" animate={{ height: ["30%", "80%", "30%"] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.div className="w-2.5 bg-[#008FED] rounded" animate={{ height: ["60%", "90%", "60%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
        <motion.div className="w-2.5 bg-[#00D4FF] rounded" animate={{ height: ["40%", "70%", "40%"] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
      </div>
      <div className="w-[38px] h-1.5 bg-slate-100 border border-slate-200/50 rounded-full" />
    </div>
  );
};

// 5. Cloud & DevOps Illustration (Cloud shape + upward particles)
const CloudIllustration = () => {
  return (
    <div className="w-[50px] h-[50px] relative pointer-events-none select-none flex items-center justify-center">
      <div className="absolute inset-x-0 bottom-0 h-6 flex justify-center z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-[#00D4FF] absolute animate-particle-up"
            style={{
              left: `${30 + i * 20}%`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: "3s"
            }}
          />
        ))}
      </div>
      <motion.div
        className="w-10 h-7 text-[#00D4FF] z-10"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud className="w-full h-full fill-white stroke-current" strokeWidth="1.5" />
      </motion.div>
    </div>
  );
};

// 6. Digital Growth Illustration (Target rings + animated arrow)
const MarketingIllustration = () => {
  return (
    <div className="w-[60px] h-[60px] relative pointer-events-none select-none flex items-center justify-center">
      {/* Target circle */}
      <div className="w-10 h-10 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border border-[#00D4FF]/30 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
        </div>
      </div>
      {/* Animated Arrow (shooting once on load) */}
      <motion.div
        className="absolute z-10 w-5 h-5 flex items-center justify-center animate-arrow-shoot"
        style={{ top: "10px", left: "10px" }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full text-slate-800 fill-current">
          <polygon points="2,22 8,22 22,8 22,2 16,2" />
        </svg>
      </motion.div>
    </div>
  );
};

/* ==========================================================================
   BENTO PREMIUM CARD CONTAINER
   ========================================================================== */

interface BentoCardProps {
  slug: string;
  badgeNum: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  exploreUrl: string;
  illustration: React.ReactNode;
  className?: string;
  delayIndex?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

function BentoCard({
  slug,
  badgeNum,
  title,
  subtitle,
  description,
  tags,
  exploreUrl,
  illustration,
  className = "",
  delayIndex = 0,
}: BentoCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const isWide = className.includes("lg:col-span-6") || className.includes("col-span-12");

  return (
    <motion.div
      custom={delayIndex}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      style={{ willChange: "transform, opacity" }}
      className={`group relative overflow-hidden rounded-[24px] border border-[#E5E2F0]/80 bg-white/70 shadow-sm backdrop-blur-xl p-6 transition-all duration-300 hover:border-purple-200/50 hover:shadow-lg hover:bg-white/95 flex ${
        isWide ? "flex-col md:flex-row md:items-center justify-between" : "flex-row items-center justify-between"
      } gap-6 ${className}`}
    >
      {/* Hover radial glow effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(0, 212, 255, 0.06), transparent 80%)`,
          zIndex: 0,
        }}
      />

      {/* Info details */}
      <div className="flex flex-col gap-3 relative z-10 flex-grow max-w-lg">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-[#00D4FF]/70 font-mono tracking-widest uppercase">
            {badgeNum}
          </span>
          <div className="w-1 h-1 bg-[#00D4FF] rounded-full" />
          <h4 className="text-xs font-bold text-[#00D4FF] uppercase tracking-wider font-sans">
            {title}
          </h4>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors duration-200">
          {subtitle}
        </h3>

        <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {tags.map((t, idx) => (
              <span
                key={idx}
                className="text-[9px] font-bold px-2 py-0.5 rounded-full border border-purple-50 bg-[#F9F8FC] text-purple-600/80 uppercase tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Action button */}
        <Link
          href={exploreUrl}
          className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#00D4FF] group/link mt-2.5 w-fit"
        >
          <span>Explore Service</span>
          <motion.div
            className="w-4 h-4 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] group-hover/link:bg-[#00D4FF] group-hover/link:text-white transition-all duration-300"
          >
            <ArrowRight className="w-2.5 h-2.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
          </motion.div>
        </Link>
      </div>

      {/* Illustration */}
      <div className="relative z-10 shrink-0 w-full md:w-auto flex items-center justify-center">
        {illustration}
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   MAIN SERVICES SHOWCASE COMPONENT
   ========================================================================== */

export default function PremiumServicesShowcase() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const trustRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const isTrustInView = useInView(trustRef, { once: true, margin: "-50px" });

  // Reverted hover trigger variables

  const webDev = servicesData.find((s) => s.slug === "web-development") || servicesData[0];
  const mobileApp = servicesData.find((s) => s.slug === "mobile-app-development") || servicesData[1];
  const aiAutomation = servicesData.find((s) => s.slug === "ai-automation") || servicesData[3];
  const erpSolutions = servicesData.find((s) => s.slug === "crm-erp") || servicesData[6];
  const cloudDevOps = servicesData.find((s) => s.slug === "cloud-devops") || servicesData[9];
  const marketingData = servicesData.find((s) => s.slug === "digital-marketing") || servicesData[7];

  const trustBadges = [
    {
      title: "Quality Assured",
      desc: "We follow best practices to deliver reliable and bug-free solutions.",
      icon: CheckCircle2,
    },
    {
      title: "On-Time Delivery",
      desc: "Timely delivery with agile process and transparent communication.",
      icon: Clock,
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock support whenever you need us, wherever you are.",
      icon: PhoneCall,
    },
    {
      title: "Secure & Reliable",
      desc: "Enterprise-grade security to keep your data and business safe.",
      icon: ShieldAlert,
    },
  ];

  return (
    <section
      id="premium-showcase"
      className="bg-[#F8F7FC]/80 py-20 md:py-24 relative overflow-hidden border-t border-[#E5E2F0]/80"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* 5 Vertical Background Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.15]">
        <div className="w-[1px] bg-purple-300 h-full" />
        <div className="w-[1px] bg-purple-300 h-full hidden sm:block" />
        <div className="w-[1px] bg-purple-300 h-full" />
        <div className="w-[1px] bg-purple-300 h-full hidden sm:block" />
        <div className="w-[1px] bg-purple-300 h-full" />
      </div>

      {/* Subtle Connection Lines in background */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden opacity-40">
        <svg className="w-full h-full min-h-[900px]" viewBox="0 0 1440 900" fill="none">
          <path
            d="M 150,250 C 300,250 400,480 720,480 C 1040,480 1100,750 1300,750"
            stroke="url(#data-pulse-glow)"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-dash-flow"
          />
          <path
            d="M 1300,250 C 1100,250 950,480 720,480 C 490,480 300,750 150,750"
            stroke="url(#data-pulse-glow)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-dash-flow opacity-30"
            style={{ animationDirection: "reverse", animationDuration: "6s" }}
          />
          <defs>
            <linearGradient id="data-pulse-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.02" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.02" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section */}
        <div 
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16"
        >
          {/* Left Title details */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 px-4.5 py-1 text-xs font-bold uppercase tracking-wider text-[#00D4FF] font-display shadow-sm w-fit"
            >
              OUR SERVICES
            </motion.div>
            
            <motion.h2
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={isHeaderInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1A39] tracking-[-0.03em] leading-tight"
            >
              End-to-End Digital Solutions <br />
              Built Around <span className="gradient-sweep-text">Your Business</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-xl"
            >
              From strategy to execution, we deliver powerful digital solutions that help you innovate, streamline and scale with confidence.
            </motion.p>
          </div>

          {/* Right Dashboard Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-5 w-full h-[250px] sm:h-[300px] lg:h-[360px] flex items-center justify-center relative overflow-hidden rounded-[24px] bg-[#0B1A2E]/30 border border-[#E5E2F0]/20 p-2 shadow-inner backdrop-blur-md"
          >
            <LottieAnimation src="/animations/Animated Dashboards.json" className="w-full h-full" />
          </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Partner Card Banner (Reorganized below text and animation) */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={isGridInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            whileHover={{ y: -6 }}
            style={{ willChange: "transform, opacity" }}
            className="col-span-12 bg-white/70 border border-[#E5E2F0] rounded-[24px] p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative overflow-hidden backdrop-blur-xl group hover:border-[#7C3AED]/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/5 border border-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-display text-sm font-bold text-white">
                One Partner. Many Solutions.
              </h3>
            </div>
            <p className="text-xs text-slate-450 leading-relaxed md:max-w-md lg:max-w-xl">
              All the technology and expertise you need to build, grow and stay ahead.
            </p>
            <Link
              href="/services"
              className="text-xs font-bold text-[#00D4FF] hover:underline flex items-center gap-1.5 group/link w-fit shrink-0 animate-pulse-glow"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </motion.div>

          {/* Card 01: Web Development */}
          <BentoCard
            slug="web-development"
            badgeNum="01"
            title="Web Development"
            subtitle="Fast. Secure. Scalable."
            description={webDev.shortDescription}
            tags={["Custom Websites", "CMS Development", "eCommerce"]}
            exploreUrl={`/services/${webDev.slug}`}
            illustration={<WebDevIllustration />}
            className="col-span-12 lg:col-span-6"
            delayIndex={0}
          />

          {/* Card 02: Mobile App Development */}
          <BentoCard
            slug="mobile-app-development"
            badgeNum="02"
            title="Mobile App Development"
            subtitle="Engaging. Intuitive. Impactful."
            description={mobileApp.shortDescription}
            tags={["Android", "iOS", "Cross-Platform"]}
            exploreUrl={`/services/${mobileApp.slug}`}
            illustration={<MobileAppIllustration />}
            className="col-span-12 lg:col-span-6"
            delayIndex={1}
          />

          {/* Card 03: AI & Automation */}
          <BentoCard
            slug="ai-automation"
            badgeNum="03"
            title="AI & Automation"
            subtitle="Intelligent. Automated. Efficient."
            description={aiAutomation.shortDescription}
            tags={["Custom Agents", "Workflow Ops", "Integrations"]}
            exploreUrl={`/services/${aiAutomation.slug}`}
            illustration={<AIIllustration />}
            className="col-span-12 lg:col-span-6"
            delayIndex={2}
          />

          {/* Right Sub-grid Container for 04, 05, 06 */}
          <motion.div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-6">
            {/* Card 04: ERP & Custom Software */}
            <BentoCard
              slug="crm-erp"
              badgeNum="04"
              title="ERP & Custom Software"
              subtitle="Tailored. Scalable. Powerful."
              description={erpSolutions.shortDescription}
              exploreUrl={`/services/${erpSolutions.slug}`}
              illustration={<ERPIllustration />}
              className="col-span-12 md:col-span-6"
              delayIndex={3}
            />

            {/* Card 05: Cloud & DevOps */}
            <BentoCard
              slug="cloud-devops"
              badgeNum="05"
              title="Cloud & DevOps"
              subtitle="Secure. Reliable. Always On."
              description={cloudDevOps.shortDescription}
              exploreUrl={`/services/${cloudDevOps.slug}`}
              illustration={<CloudIllustration />}
              className="col-span-12 md:col-span-6"
              delayIndex={4}
            />

            {/* Card 06: Digital Growth & Marketing */}
            <BentoCard
              slug="digital-marketing"
              badgeNum="06"
              title="Digital Growth & Marketing"
              subtitle="Grow. Engage. Convert."
              description={marketingData.shortDescription}
              exploreUrl={`/services/${marketingData.slug}`}
              illustration={<MarketingIllustration />}
              className="col-span-12"
              delayIndex={5}
            />
          </motion.div>
        </motion.div>

        {/* Bottom Trust Strip */}
        <motion.div
          ref={trustRef}
          initial="hidden"
          animate={isTrustInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              }
            }
          }}
          className="mt-20 pt-12 border-t border-[#E5E2F0]/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustBadges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex items-start gap-4 p-2"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-white">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-slate-450 leading-relaxed font-normal">
                    {badge.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
