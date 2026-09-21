"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Layers,
  Building2,
  Store,
  HardHat,
  Stethoscope,
  Briefcase,
  Truck,
  GraduationCap,
  Factory,
  Boxes,
  Sparkles,
  Cloud,
  Headphones,
  Clock,
  Shield,
  ShieldCheck,
  Code2,
  Workflow,
  Zap,
  DollarSign,
  MapPin,
  Sliders,
  Pickaxe,
  Wheat,
  SunMedium,
} from "lucide-react";

// ==========================================
// 3D INTERACTIVE UTILITY COMPONENTS & ANIMATIONS
// ==========================================

// 3D Word-by-Word Scroll Reveal Component
function ScrollHeading3D({
  text,
  className = "",
  direction = "left",
}: {
  text: string;
  className?: string;
  direction?: "left" | "right";
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-block ${className}`} style={{ perspective: "1000px" }}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden mr-2 sm:mr-2.5 pb-1 last:mr-0 align-top"
        >
          <motion.span
            className="inline-block"
            initial={{
              opacity: 0,
              x: direction === "left" ? -28 : 28,
              y: 20,
              rotateY: direction === "left" ? -35 : 35,
              rotateZ: direction === "left" ? -4 : 4,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              rotateY: 0,
              rotateZ: 0,
              scale: 1,
            }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.035,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            style={{ transformOrigin: "center left", display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// 3D Physics-Based Interactive Tilt Card
function TiltCard3D({
  children,
  className = "",
  tiltAmount = 12,
}: {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`transition-all duration-200 ease-out will-change-transform ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}

// Ambient Floating 3D Badge Container
function Floating3DObject({
  children,
  duration = 4,
  yOffset = 10,
  rotateRange = 4,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  yOffset?: number;
  rotateRange?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        rotateZ: [-rotateRange, rotateRange, -rotateRange],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Glowing Ambient Light Orb
function AmbientGlowingOrb({
  className = "",
  duration = 6,
}: {
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.35, 0.6, 0.35],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-3xl pointer-events-none -z-10 ${className}`}
    />
  );
}

// Pulse Status Indicator
function LiveRadarPulse({ color = "bg-emerald-500" }: { color?: string }) {
  return (
    <span className="relative flex h-2 w-2">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`} />
      <span className={`relative inline-flex rounded-full h-2 w-2 ${color}`} />
    </span>
  );
}

// ==========================================
// 1. DATA DEFINITIONS & AUSTRALIA LOCALIZED CONTENT
// ==========================================

// Hero Slides matching 3D motion carousel structure for Australia
const australiaHeroSlides = [
  {
    id: 0,
    eyebrow: "AUSTRALIAN SOFTWARE & CLOUD ENGINEERING PARTNER",
    flag: "🇦🇺",
    title: "Bespoke Enterprise Software, ERP & Business Automation for Australian Companies",
    desc: "From ambitious Sydney & Melbourne scaleups to nationwide ASX-listed enterprises, Mitsafe builds robust, compliant software platforms that automate inter-state operations, modernize legacy workflows, and scale business performance.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Australian Solutions",
    secondaryBtnHref: "#services",
    image: "/images/australia_hero_1.jpg",
    badges: ["Sydney • Melbourne • Brisbane • Perth • Adelaide", "Bespoke ERP, CRM & Logistics", "100% Code & IP Ownership"],
  },
  {
    id: 1,
    eyebrow: "Enterprise Cloud & Digital Transformation",
    flag: "🇦🇺",
    title: "Engineering Scalable Custom Software, ERP & Cloud Architectures in Australia",
    desc: "Connect multi-state warehouses, sales teams, field operations, customer portals, and ATO Single Touch Payroll (STP) workflows with resilient AWS Sydney cloud infrastructure.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Australian Solutions",
    secondaryBtnHref: "#services",
    image: "/images/australia_hero_bg.jpg",
    badges: ["Privacy Act 1988 & APRA CPS 234 Ready", "ATO STP Phase 2 & BAS Compliant", "Direct AEST / AEDT Tech Support"],
  },
  {
    id: 2,
    eyebrow: "Smart AI Workflows & Mobile Platforms",
    flag: "🇦🇺",
    title: "High-Performance Mobile Apps, Web Platforms & AI Automation Pipelines",
    desc: "Turn complex enterprise operations into intuitive customer apps, staff portals, secure fintech pipelines, and automated AI data workflows designed for high-velocity Australian growth.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Australian Solutions",
    secondaryBtnHref: "#services",
    image: "/images/australia_about_workspace.jpg",
    badges: ["Native iOS & Android Apps", "Custom SaaS Architectures", "Dedicated Agile Teams"],
  },
];

// Stats Ribbon Data for Australia
const australiaQuickStats = [
  { label: "Australian Systems Delivered", value: "140+", icon: Boxes },
  { label: "Code & IP Ownership", value: "100%", icon: ShieldCheck },
  { label: "AWS Sydney (ap-southeast-2)", value: "99.99%", icon: Cloud },
  { label: "Privacy Act & APRA CPS 234", value: "Compliant", icon: Shield },
  { label: "AEST / AEDT Timezone", value: "Direct Support", icon: Clock },
];

// 3 Major Solution Pillars for Vertical Interactive Showcase in Australia
const australiaServicePillars = [
  {
    id: "erp-ops",
    num: "01",
    badge: "Operations & Commerce",
    title: "Bespoke ERP, Multi-State POS & Supply Chain Operations",
    headline: "Centralize Multi-Depot Operations & Stock Flow Across Australia",
    desc: "Connect your enterprise into one synchronized digital operating platform. Eliminate data silos between state warehouses in NSW, VIC, QLD, WA, regional sites, and finance.",
    image: "/images/australia_erp_pos_dashboard.jpg",
    imageAlt: "Australian Enterprise ERP and Multi-State Logistics Management Dashboard",
    techStack: ["Next.js 15", "PostgreSQL", "AWS Sydney (ap-southeast-2)", "GraphQL", "TypeScript"],
    liveStat: "⚡ Real-Time Multi-State Sync Active",
    services: [
      { title: "Bespoke Business Software", desc: "Software engineered around your exact commercial processes and workflows." },
      { title: "Enterprise ERP Solutions", desc: "Unify finance, inventory, procurement, sales, and HR into one live system." },
      { title: "Multi-Store Retail & POS", desc: "Modern point-of-sale with live stock synchronization and rapid checkout." },
    ],
  },
  {
    id: "apps-sales",
    num: "02",
    badge: "Growth & Mobile",
    title: "CRM, E-Commerce & Custom Web/Mobile Applications",
    headline: "Engage Australian Consumers & Automate Customer Lifecycle Pipelines",
    desc: "Build engaging customer platforms, seamless mobile commerce experiences, and automated sales pipelines with Australian payment gateways (Stripe AUD, Afterpay, CommBank, Open Banking CDR).",
    image: "/showcase/web_3.webp",
    imageAlt: "Australian Mobile Application and E-Commerce Platform",
    techStack: ["React Native", "Flutter", "TailwindCSS", "Stripe AUD", "Open Banking CDR"],
    liveStat: "🚀 3.2x Faster Checkout Speeds",
    services: [
      { title: "Client & Sales CRM", desc: "Track client interactions, automated follow-ups, and commercial pipelines." },
      { title: "Scalable E-Commerce", desc: "High-speed digital stores with Australian payment gateways and warehouse APIs." },
      { title: "Native Mobile Applications", desc: "Modern iOS and Android apps engineered for smartphone-first Australian users." },
    ],
  },
  {
    id: "ai-cloud",
    num: "03",
    badge: "Intelligence & Security",
    title: "AI Automation, Australian Cloud & Cybersecurity Architecture",
    headline: "Automate Back-Office Workflows on Secure Australian Cloud",
    desc: "Scale your back-office with AI agents, document parsing OCR, and resilient AWS Sydney cloud architecture designed for strict Australian Privacy Principles and APRA CPS 234 security compliance.",
    image: "/illustrations/ai_automation.png",
    imageAlt: "AI Business Automation and Australian Cloud Infrastructure",
    techStack: ["OpenAI LLM", "Python FastAPI", "AWS ap-southeast-2", "Docker", "Privacy Act 1988 / CPS 234"],
    liveStat: "🤖 89% Automated Invoice & PO Processing",
    services: [
      { title: "AI Workflow Automation", desc: "Automate invoice reconciliation, data extraction, and repetitive manual tasks." },
      { title: "Managed Cloud & Hosting", desc: "Hosted in secure Australian cloud datacentres with automated backups and 99.99% uptime." },
      { title: "Cybersecurity & Governance", desc: "Role-based access controls (RBAC), end-to-end encryption, and audit logs." },
    ],
  },
];

// 10 Australian Industries with rich details for Horizontal Running Cards Track
const australiaIndustries = [
  {
    id: "mining",
    title: "Mining, Energy & Resources",
    icon: Pickaxe,
    desc: "FIFO roster scheduling, asset maintenance telemetry, pit-to-port logistics, safety compliance & remote field logs.",
    badge: "Resources & Energy",
    stat: "FIFO & Remote Sync Ready",
    img: "/solutions_engineering.webp",
  },
  {
    id: "fintech",
    title: "FinTech & ASX Banking",
    icon: DollarSign,
    desc: "Consumer Data Right (CDR) Open Banking APIs, automated payment reconciliation, KYC onboarding & financial dashboards.",
    badge: "Finance & Wealth",
    stat: "APRA CPS 234 Aligned",
    img: "/images/industry/fintech_banking_hero.png",
  },
  {
    id: "agritech",
    title: "Agriculture & AgriTech",
    icon: Wheat,
    desc: "Supply chain traceability, cold storage monitoring, bulk grain logistics, livestock inventory & export compliance.",
    badge: "Agri & Primary Producers",
    stat: "Export Traceability Sync",
    img: "/images/australia_about_workspace.jpg",
  },
  {
    id: "healthcare",
    title: "Healthcare & MedTech",
    icon: Stethoscope,
    desc: "Medicare billing workflows, electronic medical records (EMR), allied health booking platforms & patient portals.",
    badge: "HealthTech & Clinics",
    stat: "Medicare Integration Ready",
    img: "/images/industry/healthcare_tech_hero.png",
  },
  {
    id: "retail",
    title: "Retail & Multi-Store Brands",
    icon: Store,
    desc: "Point of Sale systems, real-time multi-state stock tracking, barcode scanning, loyalty programs & auto replenishment.",
    badge: "Retail & Commerce",
    stat: "Zero Inter-State Stock Drift",
    img: "/showcase/web_1.webp",
  },
  {
    id: "services",
    title: "Professional & Legal Services",
    icon: Briefcase,
    desc: "Client billing, automated retainer invoicing, staff timesheets, matter management & secure document vaults.",
    badge: "Consulting & Law",
    stat: "Automated Trust Accounting",
    img: "/images/australia_hero_1.jpg",
  },
  {
    id: "logistics",
    title: "Logistics & Freight Haulage",
    icon: Truck,
    desc: "Inter-state freight dispatch, warehouse bin management, automated consignment routing & carrier billing APIs.",
    badge: "Freight & Transport",
    stat: "Real-Time GPS Fleet Sync",
    img: "/showcase/hosting_1.webp",
  },
  {
    id: "construction",
    title: "Construction & Civil Works",
    icon: HardHat,
    desc: "Subcontractor management, site safety inductions, progressive milestone billing, BOQ tracking & defect logs.",
    badge: "Contracting & Building",
    stat: "Milestone & Variation Claims",
    img: "/engineering_culture.webp",
  },
  {
    id: "cleanenergy",
    title: "CleanTech & Renewables",
    icon: SunMedium,
    desc: "Solar installation job tracking, grid feed telemetry, renewable asset monitoring & STC rebate automation.",
    badge: "Solar & Renewables",
    stat: "Automated STC Rebate Engine",
    img: "/showcase/app_1.webp",
  },
  {
    id: "education",
    title: "Higher Education & EdTech",
    icon: GraduationCap,
    desc: "Student enrollment portals, course timetabling, LMS platforms, automated fee collection & certification issuance.",
    badge: "Universities & RTOs",
    stat: "CRICOS & USI Integrated",
    img: "/showcase/app_2.webp",
  },
];

// Australian Regions & Key Cities Coverage List
const australiaCities = [
  { name: "Sydney", hub: "Barangaroo • Tech Central • Macquarie Park • North Sydney • Parramatta", badge: "Primary Tech Hub", projects: "140+ Systems Deployed" },
  { name: "Melbourne", hub: "Docklands • Cremorne • Southbank • Carlton Tech Precinct", badge: "Innovation & Design", projects: "60+ Enterprise Systems" },
  { name: "Brisbane", hub: "Fortitude Valley • Brisbane CBD • South Bank Tech Corridor", badge: "Queensland Gateway", projects: "45+ Logistics & POS" },
  { name: "Perth", hub: "St Georges Terrace • West Perth • Osborne Park Mining Hub", badge: "Resources & Energy", projects: "35+ Industrial Systems" },
  { name: "Adelaide", hub: "Lot Fourteen Tech Precinct • Adelaide CBD • Tonsley Innovation District", badge: "Space & Defense Tech", projects: "25+ Cloud Platforms" },
  { name: "Canberra", hub: "Parliamentary Triangle • Acton • Deakin • Belconnen", badge: "GovTech & Defense", projects: "20+ Secure Systems" },
];

// Australian Operational FAQ Items
const australiaFaqs = [
  {
    q: "How does Mitsafe ensure software compliance with the Australian Privacy Act and APRA standards?",
    a: "Our software is architected with strict adherence to Australian Privacy Principles (APPs) under the Privacy Act 1988 and APRA CPS 234 cybersecurity guidelines, including role-based access control (RBAC), end-to-end AES-256 encryption, data residency in AWS Sydney (ap-southeast-2), and audit logging.",
  },
  {
    q: "Do we get full source code, intellectual property, and database ownership?",
    a: "Yes! Under our Bespoke Custom Software Development model, your Australian organization receives 100% intellectual property, full GitHub repository ownership, and complete database control with zero recurring vendor royalties or lock-in.",
  },
  {
    q: "Can Mitsafe connect multi-state operations across NSW, Victoria, Queensland, and WA?",
    a: "Absolutely. Our cloud systems synchronize sales, warehouse stock levels, orders, and customer accounts across all your Australian state branches in real time with sub-second latency.",
  },
  {
    q: "Is the financial software compatible with the ATO and Single Touch Payroll (STP)?",
    a: "Yes. Our financial management software supports Single Touch Payroll (STP Phase 2), Australian GST (10%) calculations, Business Activity Statement (BAS) automated reporting, and structured data exports compatible with Australian accounting practices.",
  },
];

export default function AustraliaLandingClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Interactive Vertical Showcase State with Auto-Rotation
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [deliveryModelTab, setDeliveryModelTab] = useState<"custom" | "managed">("custom");
  const [activeCityIndex, setActiveCityIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const totalSlides = australiaHeroSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-advance hero carousel every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Auto-advance service pillars showcase every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillarIndex((prev) => (prev + 1) % australiaServicePillars.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Touch Swipe Handlers for mobile hero
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const slide = australiaHeroSlides[currentSlide] || australiaHeroSlides[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans selection:bg-[#305EFF] selection:text-white">

      {/* =========================================================================
          1. HERO SECTION (Exact 3D Motion Carousel Hero Slider — Intact Structure)
          ========================================================================= */}
      <section
        className="relative min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex items-center justify-start overflow-hidden bg-[#060D1E]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Looping Background Images with smooth Crossfade & Subtle Zoom */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.95, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                quality={95}
                className="object-cover object-center sm:object-right"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlay for 100% white text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1E]/95 via-[#060D1E]/75 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/75 via-transparent to-[#060D1E]/35 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-[circle_at_top_left] from-[#305EFF]/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Container (Left Aligned with Fast 3D Cascading Motion) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 w-full">
          <div className="max-w-2xl text-left" style={{ perspective: "1000px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="space-y-6"
              >
                {/* 3D Motion Eyebrow Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 25, rotateX: 25 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm"
                >
                  <span className="text-base leading-none">{slide.flag}</span>
                  <span className="text-xs sm:text-[13px] font-extrabold tracking-wider uppercase text-[#00D4FF]">
                    {slide.eyebrow}
                  </span>
                </motion.div>

                {/* 3D Motion Main Heading — Fast word-by-word cascading roll-up */}
                <h1
                  className="usa-white-heading text-2xl sm:text-3xl lg:text-[2.4rem] font-black tracking-tight leading-[1.22] max-w-xl text-white"
                  style={{ color: "#FFFFFF", perspective: "1000px" }}
                >
                  {slide.title.split(" ").map((word, index) => (
                    <span key={index} className="inline-block overflow-hidden pb-1 mr-2 sm:mr-2.5 last:mr-0">
                      <motion.span
                        className="inline-block usa-white-heading"
                        initial={{ opacity: 0, y: 44, rotateX: -75, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                        transition={{
                          duration: 0.42,
                          delay: index * 0.028 + 0.03,
                          ease: [0.215, 0.61, 0.355, 1],
                        }}
                        style={{ color: "#FFFFFF", transformOrigin: "bottom center", display: "inline-block" }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h1>

                {/* 3D Motion Supporting Paragraph — Fast word-by-word cascading reveal */}
                <p
                  className="usa-white-text text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed max-w-lg text-slate-200"
                  style={{ color: "#E2E8F0", perspective: "800px" }}
                >
                  {slide.desc.split(" ").map((word, index) => (
                    <span key={index} className="inline-block overflow-hidden mr-1 sm:mr-1.5 last:mr-0">
                      <motion.span
                        className="inline-block"
                        initial={{ opacity: 0, y: 22, rotateX: -55 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{
                          duration: 0.32,
                          delay: index * 0.01 + 0.14,
                          ease: [0.215, 0.61, 0.355, 1],
                        }}
                        style={{ color: "#E2E8F0", transformOrigin: "bottom center", display: "inline-block" }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </p>

                {/* CTA Buttons with upward spring animation */}
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <Link
                    href={slide.primaryBtnHref}
                    data-modal="quote"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#305EFF]/35 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
                  >
                    <span>{slide.primaryBtnText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>

                  <a
                    href={slide.secondaryBtnHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/25 backdrop-blur-sm transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <span>{slide.secondaryBtnText}</span>
                  </a>
                </motion.div>

                {/* Quick Proof Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.26 }}
                  className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold"
                >
                  {slide.badges.map((badge, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
                      <span className="text-white">{badge}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Left/Right Arrow Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#305EFF] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#305EFF] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
          {australiaHeroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? "w-8 bg-[#305EFF] shadow-[0_0_10px_#305EFF]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          FLOATING AUSTRALIAN METRIC RIBBON (Pure Light Glass Quick Stats)
          ========================================================================= */}
      <div className="relative z-20 -mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 items-center">
          {australiaQuickStats.map((stat, sIdx) => {
            const IconC = stat.icon;
            return (
              <div key={sIdx} className="flex items-center gap-3.5 px-3 py-1.5 first:pt-0 sm:first:pt-1 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#305EFF] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 group-hover:bg-[#305EFF] group-hover:text-white transition-all duration-300">
                  <IconC className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black text-slate-900 leading-none tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 mt-1 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* =========================================================================
          2. AUSTRALIAN CLOUD ARCHITECTURE (3D Matrix Canvas + Editorial Reveal)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <AmbientGlowingOrb className="top-10 left-10 w-96 h-96 bg-blue-100/60" duration={8} />
        <AmbientGlowingOrb className="bottom-10 right-10 w-96 h-96 bg-sky-100/40" duration={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: 3D Interactive Architecture & Microservices Canvas */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex justify-center lg:justify-start"
            >
              <TiltCard3D tiltAmount={10} className="w-full max-w-[540px]">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-2 border-slate-800 bg-slate-950 group">
                  
                  {/* macOS Terminal Bar */}
                  <div className="h-8 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      aus-cloud-topology // sydney-ap-southeast-2
                    </span>
                    <LiveRadarPulse color="bg-emerald-400" />
                  </div>

                  <div className="relative h-[340px] sm:h-[380px] w-full bg-slate-950">
                    <Image
                      src="/images/australia_tech_architecture_matrix.jpg"
                      alt="Mitsafe Australia Software Architecture and Cloud Topology over Sydney Harbour"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Floating 3D Hub Active Badge */}
                    <Floating3DObject duration={3.5} yOffset={8} rotateRange={3} className="absolute top-4 right-4 z-20">
                      <div className="bg-slate-950/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-500/40 text-[#00D4FF] text-xs font-black shadow-2xl flex items-center gap-2">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>Barangaroo Gateway</span>
                      </div>
                    </Floating3DObject>

                    {/* Floating 3D Compliance Shield Badge */}
                    <Floating3DObject duration={4.2} yOffset={-8} rotateRange={-2} className="absolute top-4 left-4 z-20">
                      <div className="bg-slate-950/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-emerald-400 text-xs font-black shadow-2xl flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>100% Privacy Act &amp; CPS 234</span>
                      </div>
                    </Floating3DObject>

                    {/* Glassmorphic Stat Banner */}
                    <div
                      className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-2xl flex items-center justify-between"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#305EFF] text-white flex items-center justify-center font-black shadow-md">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-black text-white uppercase tracking-wider">
                            Dedicated Australian Delivery
                          </div>
                          <div className="text-[11px] text-slate-300">
                            Zero vendor lock-in • Complete IP transfer
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-sky-500/20 text-[#00D4FF] text-xs font-extrabold border border-sky-500/30">
                        AEST / AEDT Ready
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            </motion.div>

            {/* Right Column: Editorial with 3D Word-by-Word Scroll Reveal */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-[#305EFF]" />
                <span>DIGITAL SOLUTIONS FOR AUSTRALIA</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight leading-[1.15]">
                <ScrollHeading3D text="Software Engineered for How Australian Enterprises Scale & Compete" direction="left" />
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Australian businesses operate in vast inter-state geographies and heavily regulated compliance environments. Mitsafe replaces fragmented spreadsheets, disconnected legacy tools, and restrictive off-the-shelf software with unified custom software platforms, automated ERPs, and resilient cloud systems.
              </p>

              {/* High-Impact Feature Cards (Clean Light Cards) */}
              <div className="space-y-3.5 pt-1">
                {[
                  {
                    icon: ShieldCheck,
                    badge: "Australian Compliance",
                    title: "Privacy Act 1988 & APRA CPS 234 Governance",
                    desc: "Engineered to strict Australian Privacy Principles (APPs) with granular role-based access and full audit logs.",
                  },
                  {
                    icon: Layers,
                    badge: "Inter-State Scalability",
                    title: "Multi-State Cloud Scalability",
                    desc: "Synchronize warehouse inventory, POS terminals, and financial ledgers across Sydney, Melbourne, Brisbane, and Perth in real time.",
                  },
                  {
                    icon: Headphones,
                    badge: "Direct Support",
                    title: "Direct Australian Engineering Collaboration",
                    desc: "Work directly with senior software architects on your timezone (AEST/AEDT/AWST) with transparent sprint reviews.",
                  },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 6 }}
                      className="p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#305EFF] hover:shadow-xl transition-all flex items-start gap-4 group cursor-default"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#305EFF] group-hover:bg-[#305EFF] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors shadow-xs">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-black text-slate-900 group-hover:text-[#305EFF] transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#305EFF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-3">
                <Link
                  href="#quote"
                  data-modal="quote"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm transition-all duration-300 shadow-xl shadow-[#305EFF]/30 hover:scale-105 cursor-pointer group"
                >
                  <span>Discuss Your Project Requirements</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. FULL-CYCLE SOLUTION COCKPIT (Clean Light Cards + Active Indicator)
          ========================================================================= */}
      <section id="services" className="py-24 lg:py-28 bg-slate-50/80 border-b border-slate-200 relative overflow-hidden">
        <AmbientGlowingOrb className="top-20 right-20 w-96 h-96 bg-blue-100/70" duration={9} />
        <AmbientGlowingOrb className="bottom-10 left-10 w-96 h-96 bg-sky-100/60" duration={11} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header with 3D Word-by-Word Scroll Reveal */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
              <Code2 className="w-3.5 h-3.5 text-[#305EFF]" />
              <span>Full-Cycle Australian Software Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              <ScrollHeading3D text="Mission-Critical Digital Capabilities for Australian Enterprises" direction="left" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Select or watch the auto-advancing solution pillars below to explore real-time multi-state sync and Australian cloud architecture.
            </p>
          </div>

          {/* Vertical Interactive Split with Crisp Light Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column: Vertical Solution Pillars (Light Cards with Active Blue State) */}
            <div className="lg:col-span-5 space-y-4">
              {australiaServicePillars.map((pillar, idx) => {
                const isActive = activePillarIndex === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarIndex(idx)}
                    className={`w-full p-6 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                      isActive
                        ? "bg-white text-slate-900 border-2 border-[#305EFF] shadow-xl ring-4 ring-[#305EFF]/15 -translate-y-1"
                        : "bg-white hover:bg-slate-50/90 text-slate-900 border-slate-200/90 shadow-sm hover:border-slate-300"
                    }`}
                  >
                    {/* Animated Progress Bar on Active Tab */}
                    {isActive && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-[#305EFF] to-[#00D4FF]"
                      />
                    )}

                    <div className="flex items-center justify-between mb-2.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase ${
                        isActive ? "bg-blue-50 text-[#305EFF] border border-blue-200" : "bg-slate-100 text-slate-600"
                      }`}>
                        Pillar {pillar.num} • {pillar.badge}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        isActive ? "text-[#305EFF] translate-x-1" : "text-slate-400"
                      }`} />
                    </div>

                    <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-900">
                      {pillar.title}
                    </h3>

                    <p className={`text-xs mt-1.5 leading-relaxed line-clamp-2 ${
                      isActive ? "text-slate-600 font-medium" : "text-slate-500"
                    }`}>
                      {pillar.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Light Visual Showcase for Active Pillar */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillarIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xl flex flex-col justify-between h-full space-y-6"
                >
                  {/* Visual Preview Frame with macOS Bar */}
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 relative group">
                    <div className="h-9 bg-slate-900 border-b border-slate-800 px-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        aus-solution/{australiaServicePillars[activePillarIndex].id}
                      </span>
                      <div className="w-8" />
                    </div>

                    <div className="relative h-56 sm:h-64">
                      <Image
                        src={australiaServicePillars[activePillarIndex].image}
                        alt={australiaServicePillars[activePillarIndex].imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/95 backdrop-blur-md text-[#00D4FF] text-[11px] font-extrabold border border-sky-500/40 shadow-xl flex items-center gap-1.5">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>{australiaServicePillars[activePillarIndex].liveStat}</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills (Light Style) */}
                    <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase mr-1 font-bold">Stack:</span>
                      {australiaServicePillars[activePillarIndex].techStack.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-700 px-2.5 py-0.5 rounded bg-white border border-slate-200 shadow-2xs font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Sub-Services (Light Cards) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {australiaServicePillars[activePillarIndex].services.map((srv, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#305EFF] transition-all shadow-2xs"
                      >
                        <h4 className="text-xs font-black text-slate-900">{srv.title}</h4>
                        <p className="text-[11px] text-slate-600 mt-1 leading-snug">{srv.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">100% Code &amp; IP Ownership</span>
                    <Link
                      href="#quote"
                      data-modal="quote"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-xs shadow-lg shadow-[#305EFF]/30 transition-all hover:scale-105"
                    >
                      <span>Get Solution Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          4. HORIZONTAL RUNNING CARDS TRACK (10 Australian Industries)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
            <Factory className="w-3.5 h-3.5" />
            <span>Dynamic Australian Industry Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <ScrollHeading3D text="Specialized Technology Built for Key Australian Sectors" direction="right" />
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Hover over any industry card to inspect localized workflows, regulatory compliance, and ERP features.
          </p>
        </div>

        {/* Continuous Infinite Horizontal Running Cards Track */}
        <div className="relative w-full overflow-hidden py-4">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 999999 } }}
          >
            {/* Doubled array for seamless infinite looping */}
            {[...australiaIndustries, ...australiaIndustries].map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={idx}
                  className="w-[320px] sm:w-[350px] shrink-0 bg-slate-50 hover:bg-white p-5 rounded-3xl border border-slate-200/90 hover:border-[#305EFF] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="relative h-40 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                      <Image
                        src={ind.img}
                        alt={ind.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-slate-950/95 backdrop-blur-md text-[#00D4FF] text-[10px] font-black border border-white/20">
                        {ind.badge}
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#305EFF] group-hover:bg-[#305EFF] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-black text-slate-900 group-hover:text-[#305EFF] transition-colors truncate">
                        {ind.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#305EFF] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{ind.stat}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#305EFF] transition-transform" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>


      {/* =========================================================================
          5. OPERATIONAL TRANSFORMATION MATRIX (3D Word Scroll + Before vs After)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-slate-50/90 border-b border-slate-200 relative overflow-hidden">
        <AmbientGlowingOrb className="top-12 left-1/3 w-96 h-96 bg-blue-100/60" duration={8} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>Operational Modernization</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Still Managing Critical Operations Across Disconnected Systems?" direction="left" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Replace outdated spreadsheets and disjointed tools with a unified Australian enterprise technology platform.
            </p>
          </div>

          {/* Side-by-Side Vertical Comparison Stream (Crisp Light Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">

            {/* BEFORE: Legacy Pain */}
            <div className="bg-white border-2 border-rose-200 rounded-3xl p-8 flex flex-col justify-between shadow-md">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-rose-100 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-rose-500 font-bold">The Current Bottleneck</span>
                    <h3 className="text-xl font-black text-slate-900 mt-0.5">Fragmented Legacy Tools &amp; Manual Overhead</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-200 shrink-0 shadow-xs">
                    <XCircle className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Unsynchronized spreadsheets causing costly inventory and freight dispatch errors",
                    "Manual follow-ups resulting in lost client opportunities across NSW, VIC and QLD",
                    "Multiple SaaS subscriptions creating duplicate data and high overhead",
                    "Slow sign-off procedures and paper-based internal approvals",
                    "Inflexible legacy platforms that cannot scale with rapid Australian growth",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-rose-100 text-xs text-rose-600 font-bold">
                Result: Severe operational friction, compliance risks &amp; wasted developer hours.
              </div>
            </div>

            {/* AFTER: Mitsafe Unified Engine */}
            <div className="bg-white border-2 border-[#305EFF] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-blue-100 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#305EFF] font-bold">After Mitsafe Australia</span>
                    <h3 className="text-xl font-black text-slate-900 mt-0.5">Connected Enterprise Operations Platform</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#305EFF] flex items-center justify-center border border-blue-200 shrink-0 shadow-xs">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Synchronized business data uniting sales, billing, inventory and operations",
                    "Automated workflows eliminating dozens of hours of manual entry weekly",
                    "Real-time visibility across Sydney, Melbourne, Brisbane and Perth depots",
                    "Privacy Act 1988 & APRA CPS 234 compliant architecture with daily backups",
                    "100% intellectual property ownership with modern, maintainable code",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-900 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#305EFF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-blue-100 flex items-center justify-between">
                <div className="text-xs text-[#305EFF] font-bold">
                  Result: Total operational control, speed &amp; scalability.
                </div>
                <Link
                  href="#quote"
                  data-modal="quote"
                  className="px-5 py-2.5 rounded-xl bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-xs transition-transform hover:scale-105 shadow-md"
                >
                  Transform Now
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          6. AUSTRALIAN ATO COMPLIANCE & FINANCIAL SOFTWARE (Dashboard Showcase)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <AmbientGlowingOrb className="top-10 right-10 w-96 h-96 bg-blue-100/50" duration={8} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: Australian ATO & Financial Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
                <DollarSign className="w-3.5 h-3.5 text-[#305EFF]" />
                <span>ATO STP &amp; FINANCIAL OPERATIONS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight leading-[1.15]">
                <ScrollHeading3D text="Financial Visibility with ATO Single Touch Payroll Alignment" direction="left" />
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Empower your Australian organization with live financial tracking, automated quote-to-invoice workflows, multi-entity ledgers, and digital record compliance compatible with ATO Single Touch Payroll (STP Phase 2) and BAS reporting.
              </p>

              {/* Vertical Features (Clean Light Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {[
                  { title: "AUD Invoicing & Billing", desc: "Automated billing, quote creation, and instant Australian payment links." },
                  { title: "Multi-Entity Ledgers", desc: "Consolidated group reporting across Australian subsidiaries and branches." },
                  { title: "Live Stock & Margins", desc: "Accurate transaction tracking with real-time gross margin insights." },
                  { title: "ATO STP & BAS Ready", desc: "Digital payroll records and structured data exports for quarterly BAS filing." },
                ].map((feat, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                      <CheckCircle2 className="w-4 h-4 text-[#305EFF] shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  href="#quote"
                  data-modal="quote"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm transition-all duration-300 shadow-xl shadow-[#305EFF]/30 hover:scale-105 cursor-pointer group"
                >
                  <span>Request a Financial System Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Mockup Image with macOS Top Bar */}
            <div className="lg:col-span-6 flex justify-center">
              <TiltCard3D tiltAmount={10} className="w-full max-w-[540px]">
                <div className="rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl bg-slate-950 group">
                  <div className="h-9 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      aus-fintrack.mitsafe.com.au // ato-stp-reconciliation
                    </span>
                    <LiveRadarPulse color="bg-emerald-400" />
                  </div>

                  <div className="relative">
                    <Image
                      src="/images/australia_vat_finance_dashboard.jpg"
                      alt="Australian Business Operations and Financial Management Dashboard"
                      width={640}
                      height={420}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* 3D Floating KPI Badges */}
                    <Floating3DObject duration={3.8} yOffset={7} rotateRange={2} className="absolute top-4 right-4 z-20">
                      <div className="bg-slate-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-sky-500/40 text-[#00D4FF] text-xs font-black shadow-2xl flex items-center gap-2">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>AUD Financial Engine</span>
                      </div>
                    </Floating3DObject>
                  </div>

                  <div className="p-4 bg-slate-900 text-white text-center border-t border-slate-800 flex items-center justify-between px-6">
                    <div className="text-xs sm:text-sm font-extrabold text-[#00D4FF]">
                      Australian Multi-State Financial Operations Engine
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">
                      STP Phase 2 Aligned
                    </span>
                  </div>
                </div>
              </TiltCard3D>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          7. DUAL COMMERCIAL MODELS (Interactive Model Switcher Card)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-slate-50/80 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5" />
              <span>Commercial Engagement Models</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Own Your Software or Deploy as Managed Cloud" direction="right" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Choose the commercial engagement model that matches your business capital and operational strategy.
            </p>

            {/* Interactive Model Toggle */}
            <div className="inline-flex items-center p-1.5 bg-white border border-slate-300 rounded-full shadow-md mt-6">
              <button
                onClick={() => setDeliveryModelTab("custom")}
                className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  deliveryModelTab === "custom"
                    ? "bg-[#305EFF] text-white shadow-lg"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                Model 01: Bespoke Development (Full Ownership)
              </button>
              <button
                onClick={() => setDeliveryModelTab("managed")}
                className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  deliveryModelTab === "managed"
                    ? "bg-[#305EFF] text-white shadow-lg"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                Model 02: Managed Cloud (Subscription)
              </button>
            </div>
          </div>

          {/* Dynamic Model Card (Light Card) */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={deliveryModelTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#305EFF] shadow-2xl"
              >
                {deliveryModelTab === "custom" ? (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 space-y-4">
                      <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase">
                        CapEx Ownership Model
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                        100% Bespoke Code &amp; Intellectual Property Ownership
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        For Australian enterprises that require tailored proprietary software built around their competitive advantage, with 100% IP transferred to your company.
                      </p>
                      <ul className="space-y-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#305EFF]" />
                          <span>Engineered to your exact technical specifications with zero platform limits</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#305EFF]" />
                          <span>Complete code repository, architecture docs, and database handover</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#305EFF]" />
                          <span>Enterprise-grade security and Australian Privacy Act compliant infrastructure</span>
                        </li>
                      </ul>
                    </div>

                    <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">Pricing Structure</div>
                      <div className="text-2xl font-black text-slate-900">Milestone-Based</div>
                      <p className="text-xs text-slate-500">Transparent phase-based pricing with defined deliverables and SLA commitments.</p>
                      <Link
                        href="#quote"
                        data-modal="quote"
                        className="w-full py-3.5 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-xs block transition-transform hover:scale-105 shadow-md"
                      >
                        Discuss Bespoke Development
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 space-y-4">
                      <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-extrabold uppercase">
                        OpEx Turnkey Solution
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                        Managed Cloud Software with Hosting &amp; Ongoing Support
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        For organizations looking for a dependable digital platform with secure Australian cloud hosting, proactive maintenance, and dedicated technical support.
                      </p>
                      <ul className="space-y-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Lower upfront capital commitment with predictable subscription fees</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Hosted in AWS Sydney datacentres with continuous monitoring and daily backups</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Direct AEST/AEDT engineering support, routine security audits &amp; feature updates</span>
                        </li>
                      </ul>
                    </div>

                    <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">Pricing Structure</div>
                      <div className="text-2xl font-black text-slate-900">Subscription SaaS</div>
                      <p className="text-xs text-slate-500">Predictable monthly/annual pricing with full hosting, maintenance, and support included.</p>
                      <Link
                        href="#quote"
                        data-modal="quote"
                        className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-[#305EFF] text-white font-extrabold text-xs block transition-transform hover:scale-105 shadow-md"
                      >
                        Explore Subscription Model
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* =========================================================================
          8. 5-STEP EXECUTION ROADMAP (Vertical Interactive Timeline)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
              <Workflow className="w-3.5 h-3.5" />
              <span>Structured Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="From Business Challenge to Reliable Technology" direction="left" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              A structured 5-step methodology delivering reliable software on time and without operational disruption.
            </p>
          </div>

          {/* Vertical Timeline Stream */}
          <div className="max-w-3xl mx-auto relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#305EFF] before:via-[#00D4FF] before:to-blue-200">
            {[
              {
                step: "01",
                title: "Discovery & Operational Analysis",
                desc: "We analyze your existing workflows, commercial pain points, and legacy bottlenecks before drafting architectures.",
                milestone: "Discovery & Requirement Specification",
              },
              {
                step: "02",
                title: "Solution Architecture & Roadmap",
                desc: "Define the right tech stack, database schemas, Australian payment/banking integrations, and phased milestone roadmap.",
                milestone: "Technical Architecture Plan",
              },
              {
                step: "03",
                title: "UI/UX & Interactive Prototyping",
                desc: "Design intuitive user interfaces that your operations team and customers find fast and frictionless to use.",
                milestone: "Figma Prototypes & User Testing",
              },
              {
                step: "04",
                title: "Agile Development & Testing",
                desc: "Develop scalable code, integrate Australian banking APIs, and execute rigorous unit and security tests.",
                milestone: "Production Release & Handover",
              },
              {
                step: "05",
                title: "Support & Ongoing Scaling",
                desc: "Monitor live operations, onboard staff, and continuously scale platform features as your organization grows.",
                milestone: "SLA Partnership & Enhancements",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-slate-50 hover:bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 hover:border-[#305EFF] hover:shadow-xl transition-all duration-300 group"
              >
                {/* Node on Line */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-8 h-8 rounded-full bg-[#305EFF] text-white flex items-center justify-center font-black text-xs shadow-md group-hover:scale-110 transition-transform">
                  {item.step}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#305EFF] transition-colors">
                    {item.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#305EFF] text-[10px] font-bold">
                    {item.milestone}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          9. AUSTRALIAN REGIONAL COVERAGE (Key Cities Footprint Selector)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Nationwide Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Supporting Organizations Across Australia" direction="right" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Mitsafe delivers custom software and managed cloud technology for businesses operating in major Australian commercial hubs.
            </p>

            {/* Horizontal Cities Pill Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {australiaCities.map((city, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCityIndex(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    activeCityIndex === idx
                      ? "bg-[#305EFF] text-white shadow-lg scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span>🇦🇺</span>
                  <span>{city.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active City Spotlight Box (Light Card) */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCityIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🇦🇺</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {australiaCities[activeCityIndex].name} Operations
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-bold border border-blue-100">
                      {australiaCities[activeCityIndex].badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <span className="font-bold text-slate-900">Key Business Zones:</span> {australiaCities[activeCityIndex].hub}
                  </p>
                </div>

                <div className="shrink-0 text-center sm:text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase">Deployment Track Record</div>
                  <div className="text-lg sm:text-2xl font-black text-[#305EFF]">
                    {australiaCities[activeCityIndex].projects}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* =========================================================================
          10. AUSTRALIAN OPERATIONAL FAQ (Interactive Vertical Accordion)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
              <Zap className="w-3.5 h-3.5" />
              <span>Common Australian Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Frequently Asked Questions by Australian Businesses" direction="left" />
            </h2>
          </div>

          <div className="space-y-3.5">
            {australiaFaqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden bg-white shadow-xs hover:border-[#305EFF]/50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-sm sm:text-base text-slate-900 hover:text-[#305EFF] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#305EFF]" : "text-slate-400"}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          11. FINAL AUSTRALIAN CTA SECTION (Clean High-Impact)
          ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#030712] text-white relative overflow-hidden border-t border-slate-800">
        <AmbientGlowingOrb className="top-10 left-1/4 w-96 h-96 bg-blue-600/20" duration={8} />
        <AmbientGlowingOrb className="bottom-10 right-1/4 w-96 h-96 bg-cyan-500/20" duration={10} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-sky-500/40 text-[#00D4FF] text-xs font-extrabold uppercase tracking-wider shadow-lg">
            <span>🇦🇺 Let&apos;s Build in Australia</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Have a Business Challenge? <br />
            <span className="text-white">
              Let&apos;s Build the Right Technology Around It.
            </span>
          </h2>

          <p className="text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed text-slate-300">
            Tell us what is slowing your business down — manual processes, legacy systems, off-the-shelf software limitations or a digital product you want to engineer. We&apos;ll help you map out the right technology approach.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="#quote"
              data-modal="quote"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#305EFF]/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <span>Book a Free Australian Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="#quote"
              data-modal="quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-blue-50 text-slate-900 hover:text-[#305EFF] font-extrabold text-sm sm:text-base border border-slate-200 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Talk to Our Australian Architects</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
