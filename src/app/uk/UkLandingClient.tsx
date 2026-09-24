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
  Check,
  Globe,
  Smartphone,
  Layers,
  Database,
  Cpu,
  Server,
  ShieldCheck,
  Building2,
  Store,
  UtensilsCrossed,
  HardHat,
  Stethoscope,
  Briefcase,
  Truck,
  GraduationCap,
  Factory,
  Rocket,
  Users,
  Boxes,
  Sparkles,
  Cloud,
  CheckCircle,
  MapPin,
  ShoppingBag,
  Building,
  Headphones,
  Settings,
  Monitor,
  Tablet,
  FileSpreadsheet,
  Workflow,
  Clock,
  Laptop,
  Zap,
  TrendingUp,
  Activity,
  Radio,
  BarChart3,
  Shield,
  Code2,
  Terminal,
  RefreshCw,
  Sliders,
  ChevronDown,
  PoundSterling,
} from "lucide-react";

// ==========================================
// 3D INTERACTIVE UTILITY COMPONENTS & ANIMATIONS
// ==========================================

// 3D Word-by-Word Scroll Reveal Component (Renders words from side on scroll)
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
  const fromX = direction === "left" ? -35 : 35;
  const fromRotateY = direction === "left" ? 45 : -45;

  return (
    <span className={`inline-block ${className}`} style={{ perspective: "1000px" }}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-1 mr-2 last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, x: fromX, rotateY: fromRotateY, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: index * 0.035,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            style={{ transformOrigin: direction === "left" ? "left center" : "right center" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Interactive 3D Tilt Card with Dynamic Mouse Parallax
function TiltCard3D({
  children,
  className = "",
  tiltAmount = 10,
}: {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [tiltAmount, -tiltAmount]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-tiltAmount, tiltAmount]), {
    stiffness: 260,
    damping: 24,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    x.set(clientX / rect.width);
    y.set(clientY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative group transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// 3D Floating Ambient Component
function Floating3DObject({
  children,
  duration = 4,
  yOffset = 8,
  rotateRange = 3,
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
        y: [0, -yOffset, 0],
        rotateZ: [0, rotateRange, -rotateRange, 0],
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

// Background Animated Ambient Glow Orb
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
        scale: [1, 1.25, 0.95, 1],
        opacity: [0.3, 0.55, 0.35, 0.3],
        rotate: [0, 90, 180, 270, 360],
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
// 1. DATA DEFINITIONS & UK LOCALIZED CONTENT
// ==========================================

// Hero Slides matching 3D motion carousel structure with UK focus
const ukHeroSlides = [
  {
    id: 0,
    eyebrow: "UK TECHNOLOGY & SOFTWARE ENGINEERING PARTNER",
    flag: "🇬🇧",
    title: "Bespoke Software, Business Automation & Cloud Systems Built for UK Enterprises",
    desc: "From ambitious London scaleups to nationwide UK enterprises, Mitsafe builds robust, compliant digital systems that streamline operations, modernize legacy workflows, and scale business performance.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our UK Solutions",
    secondaryBtnHref: "#services",
    image: "/images/uk_hero_1.jpg",
    badges: ["London • Manchester • Birmingham • Leeds • UK", "Bespoke ERP, CRM & FinTech", "100% Code & IP Ownership"],
  },
  {
    id: 1,
    eyebrow: "Enterprise Cloud & Digital Transformation",
    flag: "🇬🇧",
    title: "Engineering Scalable Custom Software, ERP & Cloud Architectures in the UK",
    desc: "Connect finance, supply chain, multi-branch operations, client records, and HMRC Making Tax Digital (MTD) workflows with resilient AWS/Azure cloud architecture.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our UK Solutions",
    secondaryBtnHref: "#services",
    image: "/images/uk_hero_2.jpg",
    badges: ["UK GDPR & ISO 27001 Ready", "HMRC MTD & VAT Compliant", "Direct GMT Tech Support"],
  },
  {
    id: 2,
    eyebrow: "Smart AI Workflows & Mobile Platforms",
    flag: "🇬🇧",
    title: "High-Performance Mobile Apps, Web Platforms & AI Automation Pipelines",
    desc: "Turn complex enterprise operations into intuitive customer apps, staff portals, secure fintech pipelines, and automated AI data workflows designed for high-velocity UK growth.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our UK Solutions",
    secondaryBtnHref: "#services",
    image: "/images/uk_hero_3.jpg",
    badges: ["Native iOS & Android Apps", "Custom SaaS Architectures", "Dedicated Agile Teams"],
  },
];

// Stats Ribbon Data for UK
const ukQuickStats = [
  { label: "UK Systems Delivered", value: "150+", icon: Boxes },
  { label: "Code & IP Ownership", value: "100%", icon: ShieldCheck },
  { label: "UK Cloud Infrastructure", value: "99.99%", icon: Cloud },
  { label: "UK GDPR & ISO 27001", value: "Compliant", icon: Shield },
  { label: "GMT / BST Timezone", value: "Direct Support", icon: Clock },
];

// 3 Major Solution Pillars for Vertical Interactive Showcase in UK
const ukServicePillars = [
  {
    id: "erp-ops",
    num: "01",
    badge: "Operations & Commerce",
    title: "Bespoke ERP, POS & Enterprise Operations Software",
    headline: "Centralize Multi-Branch Operations & Stock Flow Across the UK",
    desc: "Connect your enterprise into one synchronized digital operating platform. Eliminate data silos between regional depots, sales teams, warehouse facilities, and finance.",
    image: "/images/uk_erp_pos_dashboard.jpg",
    imageAlt: "UK Enterprise ERP and Operations Management Dashboard",
    techStack: ["Next.js 15", "PostgreSQL", "AWS London (eu-west-2)", "GraphQL", "TypeScript"],
    liveStat: "⚡ Real-Time Multi-Branch Sync Active",
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
    headline: "Engage UK Consumers & Automate Customer Lifecycle Pipelines",
    desc: "Build engaging customer platforms, seamless mobile commerce experiences, and automated sales pipelines with UK payment gateways (Stripe, Barclaycard, Apple Pay, Open Banking).",
    image: "/showcase/web_3.webp",
    imageAlt: "UK Mobile Application and E-Commerce Platform",
    techStack: ["React Native", "Flutter", "TailwindCSS", "Stripe UK", "Open Banking APIs"],
    liveStat: "🚀 3.4x Faster UK Checkout Speeds",
    services: [
      { title: "Client & Sales CRM", desc: "Track client interactions, automated follow-ups, and commercial pipelines." },
      { title: "Scalable E-Commerce", desc: "High-speed digital stores with UK payment gateways and warehouse APIs." },
      { title: "Native Mobile Applications", desc: "Modern iOS and Android apps engineered for smartphone-first UK users." },
    ],
  },
  {
    id: "ai-cloud",
    num: "03",
    badge: "Intelligence & Security",
    title: "AI Automation, UK Cloud & Cybersecurity Architecture",
    headline: "Automate Back-Office Workflows on Secure UK/EU Cloud",
    desc: "Scale your back-office with AI agents, document parsing OCR, and resilient AWS London cloud architecture designed for strict UK GDPR and enterprise security compliance.",
    image: "/illustrations/ai_automation.png",
    imageAlt: "AI Business Automation and UK Cloud Infrastructure",
    techStack: ["OpenAI LLM", "Python FastAPI", "AWS eu-west-2", "Docker", "UK GDPR / ISO 27001"],
    liveStat: "🤖 88% Automated Invoice & PO Processing",
    services: [
      { title: "AI Workflow Automation", desc: "Automate invoice reconciliation, data extraction, and repetitive manual tasks." },
      { title: "Managed Cloud & Hosting", desc: "Hosted in secure UK cloud datacentres with automated backups and 99.99% uptime." },
      { title: "Cybersecurity & Governance", desc: "Role-based access controls (RBAC), end-to-end encryption, and audit logs." },
    ],
  },
];

// 10 UK Industries with rich details for Horizontal Running Cards Track
const ukIndustries = [
  {
    id: "fintech",
    title: "FinTech & Banking",
    icon: PoundSterling,
    desc: "Open Banking APIs, automated payment reconciliation, KYC onboarding, and real-time financial reporting.",
    badge: "Finance & Wealth",
    stat: "FCA-Compliant Workflows",
    img: "/images/industry/fintech_banking_hero.png",
  },
  {
    id: "healthcare",
    title: "Healthcare & MedTech",
    icon: Stethoscope,
    desc: "Patient booking platforms, electronic health records (EHR), clinic billing, and automated patient notifications.",
    badge: "HealthTech & NHS",
    stat: "NHS-Ready Digital Portals",
    img: "/images/industry/healthcare_tech_hero.png",
  },
  {
    id: "retail",
    title: "Retail & D2C Brands",
    icon: Store,
    desc: "Point of Sale systems, real-time multi-branch stock tracking, barcode scanning, loyalty programs & auto stock alerts.",
    badge: "Retail & Commerce",
    stat: "Zero Stock Discrepancy",
    img: "/showcase/web_1.webp",
  },
  {
    id: "services",
    title: "Professional & Legal Services",
    icon: Briefcase,
    desc: "Client billing, automated retainer invoicing, employee timesheets, matter management & secure document vaults.",
    badge: "Consulting & Law",
    stat: "Automated Retainer Billing",
    img: "/images/uk_about.jpg",
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    icon: Truck,
    desc: "Warehouse bin tracking, customs documentation, automated dispatch routing & multi-currency supplier billing.",
    badge: "Freight & Haulage",
    stat: "Real-Time GPS Fleet Sync",
    img: "/showcase/hosting_1.webp",
  },
  {
    id: "construction",
    title: "Construction & Property",
    icon: HardHat,
    desc: "Project cost tracking, subcontractor CIS management, BOQ tracking, site progress logs & milestone invoicing.",
    badge: "Contracting & Property",
    stat: "CIS & Milestone Invoicing",
    img: "/engineering_culture.webp",
  },
  {
    id: "hospitality",
    title: "Hospitality & Restaurants",
    icon: UtensilsCrossed,
    desc: "Kitchen display systems (KDS), digital table ordering, recipe costing, reservations & multi-outlet reporting.",
    badge: "Food & Beverage",
    stat: "Instant KDS Kitchen Sync",
    img: "/images/uk_erp_pos_dashboard.jpg",
  },
  {
    id: "education",
    title: "Education & EdTech",
    icon: GraduationCap,
    desc: "Student registration portals, course scheduling, LMS learning platforms & automated fee collection.",
    badge: "EdTech & Academies",
    stat: "Online LMS & Fee Portal",
    img: "/showcase/app_1.webp",
  },
  {
    id: "manufacturing",
    title: "Advanced Manufacturing",
    icon: Factory,
    desc: "Production scheduling, bill of materials (BOM), raw material tracking & quality control compliance.",
    badge: "Industrial & Plant",
    stat: "BOM & Material Tracking",
    img: "/solutions_engineering.webp",
  },
  {
    id: "startups",
    title: "Scaleups & Tech Startups",
    icon: Rocket,
    desc: "Rapid MVP engineering, scalable cloud backends, automated user onboarding & lightweight administrative engines.",
    badge: "Agile Scale",
    stat: "Rapid MVP in 4-6 Weeks",
    img: "/showcase/app_2.webp",
  },
];

// UK Regions & Key Cities Coverage List
const ukCities = [
  { name: "London", hub: "City of London • Shoreditch • Canary Wharf • Westminster • King's Cross", badge: "Primary UK Hub", projects: "150+ Systems Deployed" },
  { name: "Manchester", hub: "MediaCityUK • Northern Quarter • Spinningfields • Oxford Road Corridor", badge: "Northern Powerhouse", projects: "55+ Enterprise Systems" },
  { name: "Birmingham", hub: "Colmore Business District • Digbeth Tech Hub • Jewellery Quarter", badge: "Midlands Hub", projects: "40+ Logistics & POS" },
  { name: "Leeds", hub: "Financial Quarter • South Bank • Holbeck Urban Village", badge: "Legal & FinTech", projects: "30+ Systems" },
  { name: "Edinburgh", hub: "Financial District • Exchange Crescent • Tech Cube", badge: "Scotland Tech Hub", projects: "25+ Cloud Platforms" },
  { name: "Bristol", hub: "Temple Quarter • Harbourside • Engine Shed", badge: "CleanTech & Creative", projects: "20+ Web & Apps" },
  { name: "Cambridge & Oxford", hub: "Silicon Fen • Cambridge Science Park • Oxford Science Park", badge: "DeepTech & Science", projects: "18+ AI Pipelines" },
];

// UK Operational FAQ Items
const ukFaqs = [
  {
    q: "How does Mitsafe ensure software compliance with UK GDPR and Data Protection regulations?",
    a: "Our software is architected with strict UK GDPR and Data Protection Act 2018 standards, including role-based access control (RBAC), end-to-end AES-256 encryption, data residency in UK/EU cloud regions, and full audit logs.",
  },
  {
    q: "Do we get full source code, intellectual property, and database ownership?",
    a: "Yes! Under our Bespoke Custom Software Development model, your business receives 100% intellectual property, full GitHub repository access, and complete database ownership with zero vendor lock-in.",
  },
  {
    q: "Can Mitsafe connect multi-branch operations across London, Manchester, and nationwide?",
    a: "Absolutely. Our cloud systems synchronize sales, stock levels, orders, and customer accounts across all your UK branches in real time with sub-second latency.",
  },
  {
    q: "Is the financial software compatible with HMRC Making Tax Digital (MTD)?",
    a: "Yes. Our financial management software supports Making Tax Digital (MTD) for VAT, standard UK VAT 20% calculations, digital record keeping, and automated export formats compatible with HMRC filing.",
  },
];

export default function UkLandingClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Interactive Vertical Showcase State with Auto-Rotation
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [deliveryModelTab, setDeliveryModelTab] = useState<"custom" | "managed">("custom");
  const [activeCityIndex, setActiveCityIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const totalSlides = ukHeroSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Continuous hero auto-rotate every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);

  // Auto-rotate vertical solution pillars every 5 seconds
  useEffect(() => {
    const pillarInterval = setInterval(() => {
      setActivePillarIndex((prev) => (prev + 1) % ukServicePillars.length);
    }, 5000);
    return () => clearInterval(pillarInterval);
  }, [activePillarIndex]);

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

  const slide = ukHeroSlides[currentSlide] || ukHeroSlides[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans selection:bg-[#305EFF] selection:text-white">

      {/* =========================================================================
          1. HERO SECTION (Exact 3D Motion Carousel + Cascading Words for UK)
          ========================================================================= */}
      <section
        className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex items-center justify-start overflow-hidden bg-[#060D1E]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Looping Background Images with smooth fast Crossfade & Subtle Zoom */}
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

          {/* Left-focused gradient overlay to maintain 100% white text readability while keeping the image clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1E]/95 via-[#060D1E]/75 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/75 via-transparent to-[#060D1E]/35 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-[circle_at_top_left] from-[#305EFF]/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Container (Left Aligned with Fast 3D Slide-Up Motion from Bottom) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 lg:pb-24 w-full">
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
                  <span className="usa-light-blue-text text-xs sm:text-[13px] font-extrabold tracking-wider uppercase text-[#00D4FF]">
                    {slide.eyebrow}
                  </span>
                </motion.div>

                {/* 3D Motion Main Heading — Fast word-by-word cascading roll-up */}
                <h1
                  className="usa-white-heading text-2xl sm:text-3xl lg:text-[2.4rem] font-black tracking-tight leading-[1.22] max-w-xl"
                  style={{ color: "#FFFFFF", perspective: "1000px" }}
                >
                  {slide.title.split(" ").map((word, index) => (
                    <span key={index} className="inline-block overflow-hidden pb-1 mr-2 sm:mr-2.5 last:mr-0">
                      <motion.span
                        className="inline-block"
                        initial={{ opacity: 0, y: 44, rotateX: -75, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                        transition={{
                          duration: 0.42,
                          delay: index * 0.028 + 0.03,
                          ease: [0.215, 0.61, 0.355, 1],
                        }}
                        style={{ transformOrigin: "bottom center", display: "inline-block" }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h1>

                {/* 3D Motion Supporting Paragraph — Fast word-by-word cascading reveal */}
                <p
                  className="usa-white-text text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed max-w-lg"
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
                        style={{ transformOrigin: "bottom center", display: "inline-block" }}
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
                    className="btn-primary-blue inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#305EFF] hover:bg-[#204ad8] font-extrabold text-sm sm:text-base shadow-xl shadow-[#305EFF]/35 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
                    style={{ color: "#FFFFFF", backgroundColor: "#305EFF" }}
                  >
                    <span className="usa-white-heading">{slide.primaryBtnText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>

                  <a
                    href={slide.secondaryBtnHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/25 backdrop-blur-sm transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <span className="usa-white-heading">{slide.secondaryBtnText}</span>
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
                      <span className="usa-white-text text-white">{badge}</span>
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

        {/* Carousel Progress Indicators / Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
          {ukHeroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx
                  ? "w-8 bg-[#305EFF] shadow-[0_0_10px_#305EFF]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          FLOATING UK METRIC ISLAND (Light High-Precision Quick Stats Ribbon)
          ========================================================================= */}
      <div className="relative z-20 -mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 items-center">
          {ukQuickStats.map((stat, sIdx) => {
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
          2. UK BUSINESS & CLOUD ARCHITECTURE (3D Matrix Canvas + Editorial Reveal)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <AmbientGlowingOrb className="top-10 left-10 w-96 h-96 bg-blue-100/60" duration={8} />
        <AmbientGlowingOrb className="bottom-10 right-10 w-96 h-96 bg-sky-100/40" duration={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: 3D Interactive British Architecture & Microservices Canvas */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex justify-center lg:justify-start"
            >
              <TiltCard3D tiltAmount={10} className="w-full max-w-[540px]">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] border-2 border-slate-800 bg-slate-950 group">
                  
                  {/* macOS Terminal Bar */}
                  <div className="h-8 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      uk-cloud-topology // london-eu-west-2
                    </span>
                    <LiveRadarPulse color="bg-emerald-400" />
                  </div>

                  <div className="relative h-[340px] sm:h-[380px] w-full bg-slate-950">
                    <Image
                      src="/images/uk_tech_architecture_matrix.jpg"
                      alt="Mitsafe UK Software Architecture and Cloud Topology over London Canary Wharf"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Floating 3D Hub Active Badge */}
                    <Floating3DObject duration={3.5} yOffset={8} rotateRange={3} className="absolute top-4 right-4 z-20">
                      <div className="bg-slate-950/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-500/40 text-[#00D4FF] text-xs font-black shadow-2xl flex items-center gap-2">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>Canary Wharf Gateway</span>
                      </div>
                    </Floating3DObject>

                    {/* Floating 3D Compliance Shield Badge */}
                    <Floating3DObject duration={4.2} yOffset={-8} rotateRange={-2} className="absolute top-4 left-4 z-20">
                      <div className="bg-slate-950/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-emerald-400 text-xs font-black shadow-2xl flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>100% UK GDPR &amp; ISO 27001</span>
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
                            Dedicated UK Engineering
                          </div>
                          <div className="text-[11px] text-slate-300">
                            Zero vendor lock-in • Complete IP transfer
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-sky-500/20 text-[#00D4FF] text-xs font-extrabold border border-sky-500/30">
                        GMT / BST Ready
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
                <span>SOVEREIGN DIGITAL SOLUTIONS FOR THE UK</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight leading-[1.15]">
                <ScrollHeading3D text="Software Engineered for How UK Enterprises Scale & Compete" direction="left" />
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                UK businesses operate in fast-paced, highly regulated sectors. Mitsafe replaces fragmented spreadsheets, expensive vendor lock-ins, and legacy bottlenecks with custom-built enterprise platforms, automated ERPs, and secure cloud pipelines.
              </p>

              {/* High-Impact Feature Cards */}
              <div className="space-y-3.5 pt-1">
                {[
                  {
                    icon: ShieldCheck,
                    badge: "UK Compliance",
                    title: "UK GDPR & Enterprise Governance",
                    desc: "Engineered to strict UK Data Protection Act 2018 standards with granular role-based access and full audit trails.",
                  },
                  {
                    icon: Layers,
                    badge: "Cloud Scalability",
                    title: "Multi-Region Cloud Scalability",
                    desc: "Synchronize inventory, POS, and financial ledgers across London, Manchester, and nationwide depots with sub-second latency.",
                  },
                  {
                    icon: Headphones,
                    badge: "Direct Support",
                    title: "Direct UK Engineering Collaboration",
                    desc: "Work directly with lead architects and senior software engineers on your timezone with transparent sprint reviews.",
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
              <span>Full-Cycle UK Software Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              <ScrollHeading3D text="Mission-Critical Digital Capabilities for UK Enterprises" direction="left" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Select or watch the auto-advancing solution pillars below to explore real-time multi-branch sync and UK cloud architecture.
            </p>
          </div>

          {/* Vertical Interactive Split with Crisp Light Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column: Vertical Solution Pillars (Light Cards with Active Blue State) */}
            <div className="lg:col-span-5 space-y-4">
              {ukServicePillars.map((pillar, idx) => {
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
                        uk-solution/{ukServicePillars[activePillarIndex].id}
                      </span>
                      <div className="w-8" />
                    </div>

                    <div className="relative h-56 sm:h-64">
                      <Image
                        src={ukServicePillars[activePillarIndex].image}
                        alt={ukServicePillars[activePillarIndex].imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/95 backdrop-blur-md text-[#00D4FF] text-[11px] font-extrabold border border-sky-500/40 shadow-xl flex items-center gap-1.5">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>{ukServicePillars[activePillarIndex].liveStat}</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills (Light Style) */}
                    <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase mr-1 font-bold">Stack:</span>
                      {ukServicePillars[activePillarIndex].techStack.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-700 px-2.5 py-0.5 rounded bg-white border border-slate-200 shadow-2xs font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Sub-Services (Light Cards) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {ukServicePillars[activePillarIndex].services.map((srv, sIdx) => (
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
          4. HORIZONTAL RUNNING CARDS TRACK (10 UK Industries)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
            <Factory className="w-3.5 h-3.5" />
            <span>Dynamic British Industry Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <ScrollHeading3D text="Specialized Technology Built for Key British Sectors" direction="right" />
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
            {[...ukIndustries, ...ukIndustries].map((ind, idx) => {
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
              Replace outdated spreadsheets and disjointed tools with a unified UK enterprise technology platform.
            </p>
          </div>

          {/* Side-by-Side Vertical Comparison Stream */}
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
                    "Unsynchronized spreadsheets causing costly inventory and order errors",
                    "Manual follow-ups resulting in lost client opportunities across UK regions",
                    "Multiple SaaS subscriptions creating duplicate data and high overhead",
                    "Slow sign-off procedures and paper-based internal approvals",
                    "Inflexible legacy platforms that cannot scale with rapid business growth",
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
                    <span className="text-xs font-mono uppercase tracking-widest text-[#305EFF] font-bold">After Mitsafe UK</span>
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
                    "Real-time visibility across London, Manchester and all regional branches",
                    "UK GDPR and ISO 27001 compliant architecture with automated daily backups",
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
          6. UK HMRC MTD & FINANCIAL SOFTWARE (Dashboard Showcase + 3D Scroll Words)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <AmbientGlowingOrb className="top-10 right-10 w-96 h-96 bg-blue-100/50" duration={8} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: UK HMRC & Financial Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
                <PoundSterling className="w-3.5 h-3.5 text-[#305EFF]" />
                <span>HMRC MTD &amp; FINANCIAL OPERATIONS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight leading-[1.15]">
                <ScrollHeading3D text="Financial Visibility with HMRC Making Tax Digital Alignment" direction="left" />
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Empower your UK organization with live financial tracking, automated quote-to-invoice workflows, multi-entity ledgers, and digital record compliance compatible with HMRC MTD standards.
              </p>

              {/* Vertical Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {[
                  { title: "GBP Invoicing & Billing", desc: "Automated billing, quote creation, and instant digital payment links." },
                  { title: "Multi-Entity Ledgers", desc: "Consolidated group reporting across UK subsidiaries and branches." },
                  { title: "Live Stock & Margins", desc: "Accurate transaction tracking with real-time gross margin insights." },
                  { title: "HMRC MTD Ready", desc: "Digital VAT records and structured data exports for quarterly filing." },
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
                      uk-fintrack.mitsafe.co.uk // mtd-vat-reconciliation
                    </span>
                    <LiveRadarPulse color="bg-emerald-400" />
                  </div>

                  <div className="relative">
                    <Image
                      src="/images/uk_vat_finance_dashboard.jpg"
                      alt="UK Business Operations and Financial Management Dashboard"
                      width={640}
                      height={420}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* 3D Floating KPI Badges */}
                    <Floating3DObject duration={3.8} yOffset={7} rotateRange={2} className="absolute top-4 right-4 z-20">
                      <div className="bg-slate-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-sky-500/40 text-[#00D4FF] text-xs font-black shadow-2xl flex items-center gap-2">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>GBP Financial Engine</span>
                      </div>
                    </Floating3DObject>
                  </div>

                  <div className="p-4 bg-slate-900 text-white text-center border-t border-slate-800 flex items-center justify-between px-6">
                    <div className="text-xs sm:text-sm font-extrabold text-[#00D4FF]">
                      UK Multi-Branch &amp; Financial Operations Engine
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">
                      MTD Compliant (100%)
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

          {/* Dynamic Model Card */}
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
                        For UK enterprises that require tailored proprietary software built around their competitive advantage, with 100% IP transferred to your company.
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
                          <span>Enterprise-grade security and UK GDPR compliant infrastructure</span>
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
                        For organizations looking for a dependable digital platform with secure UK cloud hosting, proactive maintenance, and dedicated technical support.
                      </p>
                      <ul className="space-y-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Lower upfront capital commitment with predictable subscription fees</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Hosted in UK datacentres with continuous monitoring and daily backups</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Direct GMT engineering support, routine security audits &amp; feature updates</span>
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
          8. 5-STEP EXECUTION ROADMAP (Vertical Interactive Timeline + 3D Scroll Words)
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
                desc: "Define the right tech stack, database schemas, UK payment integrations, and phased milestone roadmap.",
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
                desc: "Develop scalable code, integrate UK banking APIs, and execute rigorous unit and security tests.",
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
          9. UK REGIONAL COVERAGE (Key Cities Footprint Selector)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Nationwide Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Supporting Organizations Across the United Kingdom" direction="right" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Mitsafe delivers custom software and managed cloud technology for businesses operating in major UK tech clusters.
            </p>

            {/* Horizontal Cities Pill Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {ukCities.map((city, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCityIndex(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    activeCityIndex === idx
                      ? "bg-[#305EFF] text-white shadow-lg scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span>🇬🇧</span>
                  <span>{city.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active City Spotlight Box */}
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
                    <span className="text-2xl">🇬🇧</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {ukCities[activeCityIndex].name} Operations
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-bold border border-blue-100">
                      {ukCities[activeCityIndex].badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <span className="font-bold text-slate-900">Key Business Zones:</span> {ukCities[activeCityIndex].hub}
                  </p>
                </div>

                <div className="shrink-0 text-center sm:text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase">Deployment Track Record</div>
                  <div className="text-lg sm:text-2xl font-black text-[#305EFF]">
                    {ukCities[activeCityIndex].projects}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* =========================================================================
          10. UK BUSINESS OPERATIONAL FAQ (Interactive Vertical Accordion)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
              <Zap className="w-3.5 h-3.5" />
              <span>Common UK Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Frequently Asked Questions by UK Businesses" direction="left" />
            </h2>
          </div>

          <div className="space-y-3.5">
            {ukFaqs.map((faq, fIdx) => {
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
          11. FINAL UK CTA SECTION (Solid Dark Navy Background, Clean White Text)
          ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#030712] text-white relative overflow-hidden border-t border-slate-800">
        <AmbientGlowingOrb className="top-10 left-1/4 w-96 h-96 bg-blue-600/20" duration={8} />
        <AmbientGlowingOrb className="bottom-10 right-1/4 w-96 h-96 bg-cyan-500/20" duration={10} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-sky-500/40 text-[#00D4FF] text-xs font-extrabold uppercase tracking-wider shadow-lg">
            <span>🇬🇧 Let&apos;s Build in the UK</span>
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
              <span>Book a Free UK Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="#quote"
              data-modal="quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-blue-50 text-slate-900 hover:text-[#305EFF] font-extrabold text-sm sm:text-base border border-slate-200 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Talk to Our UK Architects</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

