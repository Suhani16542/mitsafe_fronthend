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
  ShieldAlert,
  Monitor,
  Settings,
  ShoppingCart,
  Shield,
  BarChart3,
  Globe,
  Server
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

const getTagIcon = (tag: string) => {
  const lower = tag.toLowerCase();
  if (lower.includes("website") || lower.includes("custom")) return Monitor;
  if (lower.includes("cms") || lower.includes("module") || lower.includes("automation")) return Settings;
  if (lower.includes("ecommerce") || lower.includes("shop")) return ShoppingCart;
  if (lower.includes("android") || lower.includes("ios") || lower.includes("mobile")) return Smartphone;
  if (lower.includes("cross") || lower.includes("platform") || lower.includes("api") || lower.includes("integration")) return Globe;
  if (lower.includes("saas") || lower.includes("cloud") || lower.includes("infra")) return Server;
  if (lower.includes("security") || lower.includes("protection")) return Shield;
  if (lower.includes("marketing") || lower.includes("seo") || lower.includes("ads") || lower.includes("analytics")) return BarChart3;
  return CheckCircle2;
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
      className={`group relative overflow-hidden rounded-[24px] border border-slate-200 dark:border-white/5 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgba(37,99,255,0.06)] p-8 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-900/30 flex flex-col justify-between ${className} h-full`}
    >
      {/* Hover radial glow effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(320px circle at ${coords.x}px ${coords.y}px, rgba(37, 99, 255, 0.05), transparent 80%)`,
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full flex flex-col h-full justify-between gap-6">
        {/* Top Header Row of the Card */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-md font-mono">
            {badgeNum}
          </span>
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest font-sans">
            • {title}
          </span>
        </div>

        {/* Content & Illustration Row */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 flex-grow my-2">
          {/* Text Content */}
          <div className="flex flex-col items-start text-left gap-3 max-w-sm sm:max-w-[60%]">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              {subtitle}
            </h3>
            <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Illustration Container */}
          <div className="relative shrink-0 w-full sm:w-[40%] flex items-center justify-center select-none pointer-events-none min-h-[130px]">
            {illustration}
          </div>
        </div>

        {/* Bottom Interactive Area (Tags + CTA Button) */}
        <div className="flex flex-col gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          {/* Tags / Features Grid */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t, idx) => {
                const TagIcon = getTagIcon(t);
                return (
                  <span
                    key={idx}
                    className="text-[10px] font-bold px-3 py-1.5 rounded-lg border border-slate-150 dark:border-white/5 bg-slate-50 dark:bg-slate-800 shadow-sm text-slate-700 dark:text-slate-200 uppercase tracking-wide flex items-center gap-1.5"
                  >
                    <TagIcon className="w-3.5 h-3.5 text-blue-600" />
                    {t}
                  </span>
                );
              })}
            </div>
          )}

          {/* Action button */}
          <Link
            href={exploreUrl}
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-blue-600 group/link mt-1 hover:opacity-85 transition-opacity"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-4 h-4 text-blue-600 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
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
      className="bg-[#F4F7FC] dark:bg-[#071426] py-12 md:py-16 relative overflow-hidden"
      style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8"
        >
          {/* Left Title details */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm w-fit"
            >
              OUR SERVICES
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={isHeaderInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] dark:text-white tracking-[-0.03em] leading-tight"
            >
              End-to-End Digital Solutions <br />
              Built Around <span className="text-blue-600">Your Business</span>
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
            className="lg:col-span-5 relative flex items-center justify-center select-none overflow-visible w-full h-[295px] sm:h-[355px] lg:h-[415px] z-30"
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center overflow-visible"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <LottieAnimation src="/animations/Animated Dashboards.json" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bento Grid Layout perfectly matching the 2x3 responsive rows */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="grid grid-cols-12 gap-6 w-full"
        >
          {/* Top Banner Card (Reorganized Layout matching the design header) */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={isGridInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            whileHover={{ y: -2 }}
            className="col-span-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[20px] py-5 px-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden group transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                One Partner. Many Solutions.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl sm:mx-6 flex-grow">
              All the technology and expertise you need to build, grow and stay ahead.
            </p>
            <Link
              href="/services"
              className="text-xs sm:text-sm font-black text-blue-600 hover:underline flex items-center gap-1.5 group/link shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </motion.div>

          {/* Card 01: Web Development */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <BentoCard
              slug="web-development"
              badgeNum="01"
              title="Web Development"
              subtitle="Fast. Secure. Scalable."
              description={webDev.shortDescription}
              tags={["Custom Websites", "CMS Development", "eCommerce"]}
              exploreUrl={`/services/${webDev.slug}`}
              illustration={<img src="/illustrations/web_dev.png" className="max-w-full max-h-[140px] object-contain group-hover:scale-105 transition-transform duration-500" alt="Web Development" />}
              delayIndex={0}
            />
          </div>

          {/* Card 02: Mobile App Development */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <BentoCard
              slug="mobile-app-development"
              badgeNum="02"
              title="Mobile App Development"
              subtitle="Engaging. Intuitive. Impactful."
              description={mobileApp.shortDescription}
              tags={["Android App", "iOS App", "Cross-Platform"]}
              exploreUrl={`/services/${mobileApp.slug}`}
              illustration={<img src="/illustrations/mobile_dev.png" className="max-w-full max-h-[140px] object-contain group-hover:scale-105 transition-transform duration-500" alt="Mobile App Development" />}
              delayIndex={1}
            />
          </div>

          {/* Card 03: AI & Automation */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <BentoCard
              slug="ai-automation"
              badgeNum="03"
              title="AI & Automation"
              subtitle="Intelligent. Automated. Efficient."
              description={aiAutomation.shortDescription}
              tags={["AI Agents", "Workflows", "Automation"]}
              exploreUrl={`/services/${aiAutomation.slug}`}
              illustration={<img src="/illustrations/ai_automation.png" className="max-w-full max-h-[140px] object-contain group-hover:scale-105 transition-transform duration-500" alt="AI & Automation" />}
              delayIndex={2}
            />
          </div>

          {/* Card 04: ERP & Custom Software */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <BentoCard
              slug="crm-erp"
              badgeNum="04"
              title="ERP & Custom Software"
              subtitle="Tailored. Integrated. Efficient."
              description={erpSolutions.shortDescription}
              tags={["ERP Solutions", "Custom Modules", "Process Automation"]}
              exploreUrl={`/services/${erpSolutions.slug}`}
              illustration={<img src="/illustrations/erp_software.png" className="max-w-full max-h-[140px] object-contain group-hover:scale-105 transition-transform duration-500" alt="ERP & Custom Software" />}
              delayIndex={3}
            />
          </div>

          {/* Card 05: Cloud & DevOps */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <BentoCard
              slug="cloud-devops"
              badgeNum="05"
              title="Cloud & DevOps"
              subtitle="Secure. Scalable. Always Available."
              description={cloudDevOps.shortDescription}
              tags={["Cloud Infrastructure", "DevOps", "CI/CD Pipelines"]}
              exploreUrl={`/services/${cloudDevOps.slug}`}
              illustration={<img src="/illustrations/cloud_devops.png" className="max-w-full max-h-[140px] object-contain group-hover:scale-105 transition-transform duration-500" alt="Cloud & DevOps" />}
              delayIndex={4}
            />
          </div>

          {/* Card 06: Digital Growth & Marketing */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <BentoCard
              slug="digital-marketing"
              badgeNum="06"
              title="Digital Growth & Marketing"
              subtitle="Grow. Engage. Convert."
              description={marketingData.shortDescription}
              tags={["SEO Optimization", "Paid Ads", "Growth Strategy"]}
              exploreUrl={`/services/${marketingData.slug}`}
              illustration={<img src="/illustrations/digital_marketing.png" className="max-w-full max-h-[140px] object-contain group-hover:scale-105 transition-transform duration-500" alt="Digital Growth & Marketing" />}
              delayIndex={5}
            />
          </div>
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
          className="mt-20 pt-12 border-t border-slate-200 dark:border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
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