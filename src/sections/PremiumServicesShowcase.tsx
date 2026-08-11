"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  PhoneCall,
  ShieldAlert,
  Monitor,
  Settings,
  ShoppingCart,
  Smartphone,
  Globe,
  Server,
  Shield,
  BarChart3,
  ArrowUpRight
} from "lucide-react";
import { servicesData } from "@/data/services";
import LottieAnimation from "@/components/LottieAnimation";

/* ==========================================================================
   REDESIGNED CARD COMPONENT (White BG + Soft Blue Hover)
   ========================================================================== */

interface BentoCardProps {
  slug: string;
  badgeNum: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  exploreUrl: string;
  className?: string;
  delayIndex?: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1,
      duration: 0.55,
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
  className = "",
  delayIndex = 0,
}: BentoCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      custom={delayIndex}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      style={{ willChange: "transform, opacity" }}
      className={`group relative overflow-hidden rounded-[24px] border transition-all duration-400 ease-out p-8 flex flex-col justify-between ${isHovered
          ? "bg-white border-slate-300 shadow-[0_16px_35px_rgba(0,0,0,0.05)]"
          : "bg-white dark:bg-slate-900 border-slate-200/90 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
        } ${className} h-full`}
    >
      {/* Dynamic Cursor Spotlight Radial Glow on Hover */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(0, 0, 0, 0.02), transparent 80%)`,
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full flex flex-col h-full justify-between gap-6">
        {/* Top Header Row */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-md font-mono bg-white text-slate-900 border border-slate-200 shadow-2xs"
            >
              {badgeNum}
            </span>
            <span className="text-[11px] font-extrabold text-[#305EFF] uppercase tracking-widest font-sans">
              • {title}
            </span>
          </div>

          <div
            className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 transition-all duration-300 group-hover:rotate-45 group-hover:scale-105"
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-start text-left gap-3 my-1 flex-grow">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight font-display">
            {subtitle}
          </h3>
          <p className="text-sm leading-relaxed font-medium text-slate-600 dark:text-slate-350 font-sans">
            {description}
          </p>
        </div>

        {/* Bottom Interactive Area (Tags + CTA Button) */}
        <div className="flex flex-col gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          {/* Feature Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t, idx) => {
                const TagIcon = getTagIcon(t);
                return (
                  <span
                    key={idx}
                    className={`text-[10px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-300 tracking-wide uppercase flex items-center gap-1.5 font-sans ${isHovered
                        ? "bg-white/90 border-[#305EFF] text-[#305EFF] shadow-xs"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200/80 dark:border-white/5 text-slate-700 dark:text-slate-300"
                      }`}
                  >
                    <TagIcon className="w-3.5 h-3.5 text-black" />
                    {t}
                  </span>
                );
              })}
            </div>
          )}

          {/* Action Link */}
          <Link
            href={exploreUrl}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 text-[#305EFF] hover:text-[#305EFF] font-display mt-1"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-4 h-4 text-black group-hover/link:translate-x-1.5 transition-transform duration-300" />
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
      className="bg-white py-14 md:py-20 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header Section */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-10"
        >
          {/* Left Header Info */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#305EFF] font-display shadow-xs w-fit"
            >
              OUR SERVICES
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={isHeaderInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A] dark:text-white"
            >
              End-to-End Digital Solutions <br />
              <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                Built Around Your Business
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="text-sm sm:text-base leading-relaxed font-medium max-w-xl text-slate-500 font-sans"
            >
              From strategy to execution, we deliver powerful digital solutions that help you innovate, streamline and scale with confidence.
            </motion.p>
          </div>

          {/* Right Dashboard Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center select-none overflow-visible w-full h-[280px] sm:h-[340px] lg:h-[380px] z-30"
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

        {/* Bento Cards Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="grid grid-cols-12 gap-6 w-full"
        >
          {/* Top Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={isGridInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            whileHover={{ y: -2 }}
            className="col-span-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[22px] py-5 px-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-slate-350 hover:bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden group transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-black shrink-0 shadow-xs">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                One Partner. Many Solutions.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl sm:mx-6 flex-grow">
              All the technology and expertise you need to build, grow and stay ahead.
            </p>
            <Link
              href="/services/web-development"
              className="text-xs sm:text-sm font-black text-[#305EFF] hover:underline flex items-center gap-1.5 group/link shrink-0"
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
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-black shrink-0">
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
