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
  DollarSign,
} from "lucide-react";

// ==========================================
// 3D INTERACTIVE UTILITY COMPONENTS & ANIMATIONS
// ==========================================

// 3D Word-by-Word Scroll Reveal Component (Renders words with 3D perspective on scroll)
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
// 1. DATA DEFINITIONS & USA CONTENT
// ==========================================

// Hero Slides matching exact structure with USA focus
const usaHeroSlides = [
  {
    id: 0,
    eyebrow: "USA DIGITAL ENGINEERING PARTNER",
    flag: "🇺🇸",
    title: "Custom Software, Business Automation & Cloud Systems Built for USA Businesses",
    desc: "From high-growth US startups to established enterprises, Mitsafe builds secure, scalable technology solutions that simplify operations, accelerate product velocity and drive business growth across America.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our USA Solutions",
    secondaryBtnHref: "#services",
    image: "/images/usa_hero_bg.jpg",
    badges: ["New York • San Francisco • Austin • Chicago • USA", "Custom ERP, CRM & FinTech", "100% Code & IP Ownership"],
  },
  {
    id: 1,
    eyebrow: "Enterprise Cloud & Business Automation",
    flag: "🇺🇸",
    title: "Engineering Scalable Custom Software, SaaS & Cloud Infrastructure in the USA",
    desc: "Connect finance, inventory, client pipelines, EHR/EMR records and multi-branch operations across US markets with high-reliability cloud architecture and intelligent automation.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our USA Solutions",
    secondaryBtnHref: "#services",
    image: "/images/usa_mission_bg.jpg",
    badges: ["HIPAA & SOC 2 Ready", "EST / CST / PST Overlap", "99.99% Cloud SLA"],
  },
  {
    id: 2,
    eyebrow: "Smart Digital Transformation",
    flag: "🇺🇸",
    title: "High-Performance Mobile Apps, Web Platforms & Generative AI Pipelines",
    desc: "Turn complex business operations into modern, intuitive customer apps, staff portals, headless commerce engines and automated AI workflows designed for American market scale.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our USA Solutions",
    secondaryBtnHref: "#services",
    image: "/images/usa_about_workspace.jpg",
    badges: ["iOS & Android Native", "Bespoke SaaS Platforms", "Dedicated Agile Teams"],
  },
];

// Stats Ribbon Data for USA
const usaQuickStats = [
  { label: "US Systems Delivered", value: "250+", icon: Boxes },
  { label: "Code & IP Ownership", value: "100%", icon: ShieldCheck },
  { label: "US Cloud Hosted (AWS)", value: "99.99%", icon: Cloud },
  { label: "HIPAA & SOC 2 Type II", value: "Compliant", icon: Shield },
  { label: "EST / CST / PST Timezone", value: "Direct Support", icon: Clock },
];

// 3 Major Solution Pillars for Vertical Interactive Showcase
const usaServicePillars = [
  {
    id: "erp-ops",
    num: "01",
    badge: "Operations & Commerce",
    title: "ERP, POS & Custom Enterprise Software",
    headline: "Centralize Multi-Branch Operations & Stock Flow Across the US",
    desc: "Connect your entire business into one synchronized digital operating platform. Eliminate data silos between regional facilities, sales teams, fulfillment centers, and corporate finance.",
    image: "/images/usa_about_workspace.jpg",
    imageAlt: "US Enterprise Software and Operations Dashboard",
    techStack: ["Next.js 15", "PostgreSQL", "AWS us-east-1", "GraphQL", "TypeScript"],
    liveStat: "⚡ Real-Time Multi-State Sync Active",
    services: [
      { title: "Custom Enterprise Software", desc: "Software built around your exact commercial workflows instead of rigid templates." },
      { title: "Enterprise ERP & Operations", desc: "Unify finance, supply chain, inventory, and staff management into one live platform." },
      { title: "Modern POS & Multi-Store Tech", desc: "Touchscreen point-of-sale with live multi-location stock synchronization." },
    ],
  },
  {
    id: "apps-sales",
    num: "02",
    badge: "Growth & Mobile",
    title: "CRM, Headless E-Commerce & Mobile Apps",
    headline: "Engage US Consumers & Automate High-Velocity Sales Pipelines",
    desc: "Build intuitive customer touchpoints, seamless mobile shopping experiences, and automated sales pipelines with US payment integrations (Stripe, Apple Pay, PayPal, ACH).",
    image: "/showcase/web_3.webp",
    imageAlt: "US Mobile App and E-Commerce Platform",
    techStack: ["React Native", "Flutter", "TailwindCSS", "Stripe Connect", "Shopify Plus"],
    liveStat: "🚀 3.8x Faster US Checkout Speed",
    services: [
      { title: "Lead & Sales CRM", desc: "Track client interactions, automated follow-ups, and commercial pipelines." },
      { title: "Headless E-Commerce Engines", desc: "Sub-second digital storefronts with Stripe checkout and warehouse sync." },
      { title: "Native iOS & Android Apps", desc: "Sleek mobile applications engineered for smartphone-first American consumers." },
    ],
  },
  {
    id: "ai-cloud",
    num: "03",
    badge: "Intelligence & Security",
    title: "AI Automation, Cloud & Data Governance",
    headline: "Automate Back-Office Workflows on Secure US Cloud Architecture",
    desc: "Scale your back-office with AI agents, document parsing OCR, and resilient AWS US-East/West cloud infrastructure designed for strict HIPAA and SOC 2 enterprise compliance.",
    image: "/showcase/seo_1.webp",
    imageAlt: "AI Business Automation and US Cloud Infrastructure",
    techStack: ["OpenAI LLM", "Python FastAPI", "AWS us-west-2", "Docker", "HIPAA / SOC 2"],
    liveStat: "🤖 88% Automated Invoice & PO Processing",
    services: [
      { title: "AI Workflow Automation", desc: "Automate invoice reconciliation, data extraction, and repetitive manual tasks." },
      { title: "Managed Cloud & DevOps", desc: "Hosted in secure US cloud datacenters with automated daily backups and 99.99% uptime." },
      { title: "HIPAA & SOC 2 Compliance", desc: "Role-based access controls (RBAC), end-to-end data encryption, and audit logs." },
    ],
  },
];

// 10 USA Industries with rich details for Horizontal Running Cards Track
const usaIndustries = [
  {
    id: "fintech",
    title: "FinTech & WealthTech",
    icon: DollarSign,
    desc: "Custom trading portals, ACH/Stripe orchestration, automated ledgering, real-time analytics & FINRA-ready audit logs.",
    badge: "Wall Street & Banking",
    stat: "Sub-Second Trading Latency",
    img: "/images/industry/fintech_banking_hero.png",
  },
  {
    id: "healthcare",
    title: "Healthcare & Telehealth",
    icon: Stethoscope,
    desc: "HIPAA-compliant patient portals, virtual teleconsultations, EHR/EMR integrations & automated patient reminders.",
    badge: "HIPAA & HealthTech",
    stat: "100% ePHI Encrypted",
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
    id: "saas",
    title: "Enterprise B2B SaaS & AI",
    icon: Cpu,
    desc: "Multi-tenant cloud architectures, automated customer onboarding, LLM AI assistants & enterprise CRM integrations.",
    badge: "B2B SaaS Scale",
    stat: "99.99% Cloud Uptime",
    img: "/showcase/web_2.webp",
  },
  {
    id: "services",
    title: "Legal & Professional Services",
    icon: Briefcase,
    desc: "Client billing, automated retainer invoicing, employee timesheets, matter tracking & secure document vaults.",
    badge: "Law & Corporate",
    stat: "Automated Trust Billing",
    img: "/images/usa_about_workspace.jpg",
  },
  {
    id: "logistics",
    title: "Logistics, 3PL & Freight",
    icon: Truck,
    desc: "Warehouse bin tracking, customs documentation, purchase orders, automated dispatch routing & fleet telemetry.",
    badge: "Freight & 3PL",
    stat: "Real-Time GPS Fleet Sync",
    img: "/showcase/hosting_1.webp",
  },
  {
    id: "realestate",
    title: "Real Estate & PropTech",
    icon: Building2,
    desc: "MLS/IDX lead capture, 3D interactive virtual tours, broker CRM automations, and escrow payment workflows.",
    badge: "Property Tech",
    stat: "Automated Broker CRM",
    img: "/engineering_culture.webp",
  },
  {
    id: "construction",
    title: "Construction & Contracting",
    icon: HardHat,
    desc: "Project cost tracking, subcontractor management, AIA billing, job-site progress logs & milestone invoicing.",
    badge: "Contracting & Jobs",
    stat: "AIA Milestone Invoicing",
    img: "/solutions_engineering.png",
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Plant IoT",
    icon: Factory,
    desc: "Production scheduling, bill of materials (BOM), raw material tracking & automated quality control dashboards.",
    badge: "Industrial & Plant",
    stat: "Predictive IoT Analytics",
    img: "/pricing-devices-mockup.webp",
  },
  {
    id: "media",
    title: "Media & Streaming Apps",
    icon: Radio,
    desc: "Video-on-demand streaming platforms, creator monetization, DRM protection & live event ticketing portals.",
    badge: "Media & Creator Tech",
    stat: "Ultra-Low Latency Video",
    img: "/showcase/app_1.webp",
  },
];

// USA Metro Coverage List
const usaMetroHubs = [
  { name: "New York City", hub: "Manhattan • Brooklyn • Silicon Alley • Wall Street", badge: "FinTech & Media", projects: "110+ Systems Deployed" },
  { name: "San Francisco / Bay Area", hub: "Silicon Valley • SOMA • South Bay • Oakland", badge: "AI & Startups", projects: "95+ SaaS Systems" },
  { name: "Austin", hub: "Downtown • Silicon Hills • Domain • Round Rock", badge: "Scale-ups & Tech", projects: "55+ Scale-up Systems" },
  { name: "Chicago", hub: "Loop • River North • Fulton Market • West Loop", badge: "Logistics & Trading", projects: "45+ Enterprise Portals" },
  { name: "Los Angeles", hub: "Silicon Beach • Santa Monica • Culver City • Downtown", badge: "Media & D2C", projects: "40+ Consumer Apps" },
  { name: "Seattle", hub: "South Lake Union • Bellevue • Redmond • Pioneer Square", badge: "Cloud & Enterprise", projects: "35+ Cloud Pipelines" },
  { name: "Boston", hub: "Route 128 • Cambridge • Seaport • Back Bay", badge: "BioTech & Health", projects: "30+ HealthTech Systems" },
  { name: "Miami", hub: "Brickell • Wynwood • Downtown • Miami Beach", badge: "FinTech & Web3", projects: "25+ Digital Portals" },
];

// USA Operational FAQ Items
const usaFaqs = [
  {
    q: "How does Mitsafe ensure software compliance with US regulatory frameworks like HIPAA and SOC 2?",
    a: "We engineer applications with end-to-end data encryption (AES-256), strict role-based access control (RBAC), automated audit logs, and compliance protocols adhering to HIPAA (ePHI protection) and SOC 2 Type II governance.",
  },
  {
    q: "Do we receive 100% intellectual property, source code, and database ownership?",
    a: "Yes! Under our custom software development contracts, your business receives 100% intellectual property rights, complete GitHub repository access, and total database ownership with zero vendor lock-in.",
  },
  {
    q: "How does Mitsafe manage collaboration across US time zones?",
    a: "We provide dedicated 4-6 hours of daily working overlap across Eastern (EST), Central (CST), and Pacific (PST) time zones. You communicate directly with solutions architects via Slack, Teams, Jira, and weekly video sprint demos.",
  },
  {
    q: "What payment and contract terms do you provide for US companies?",
    a: "We execute standard US-governed non-disclosure agreements (NDA) and milestone-based commercial agreements. Invoicing is processed cleanly in USD via domestic ACH bank transfer, wire, or major credit cards.",
  },
  {
    q: "Can Mitsafe connect multi-branch operations and warehouses across different US states?",
    a: "Absolutely. Our cloud systems synchronize sales, stock levels, orders, and customer accounts across all your US facilities in real time with sub-second latency on AWS cloud infrastructure.",
  },
];

export default function UsaLandingClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Interactive State
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [deliveryModelTab, setDeliveryModelTab] = useState<"custom" | "managed">("custom");
  const [activeMetroIndex, setActiveMetroIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const totalSlides = usaHeroSlides.length;

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
      setActivePillarIndex((prev) => (prev + 1) % usaServicePillars.length);
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

  const slide = usaHeroSlides[currentSlide] || usaHeroSlides[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans selection:bg-[#305EFF] selection:text-white">
      
      {/* =========================================================================
          1. HERO SECTION (Preserved exact structure: 3D Motion Carousel + Cascading Words)
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
          {usaHeroSlides.map((_, idx) => (
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
          FLOATING USA METRIC RIBBON (Interactive Horizontal Quick Stats)
          ========================================================================= */}
      <div className="relative z-20 -mt-7 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 items-center">
          {usaQuickStats.map((stat, sIdx) => {
            const IconC = stat.icon;
            return (
              <div key={sIdx} className="flex items-center gap-3 px-3 py-1 first:pt-0 sm:first:pt-1">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#305EFF] flex items-center justify-center shrink-0 shadow-xs">
                  <IconC className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-black text-slate-900 leading-none">{stat.value}</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* =========================================================================
          2. USA BUSINESS INTRO (3D Word-by-Word Scroll Reveal + Framed Visual)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <AmbientGlowingOrb className="top-10 left-10 w-96 h-96 bg-blue-100/50" duration={8} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Framed Photography with 3D Tilt */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex justify-center lg:justify-start"
            >
              <TiltCard3D tiltAmount={10} className="w-full max-w-[500px]">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                  <Image
                    src="/images/usa_about_workspace.jpg"
                    alt="Mitsafe USA Software Engineering and Development Team"
                    width={640}
                    height={460}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating 3D Stat Badge */}
                  <Floating3DObject duration={4} yOffset={6} rotateRange={2} className="absolute bottom-4 left-4 z-20">
                    <div className="bg-slate-950/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#305EFF] text-white flex items-center justify-center font-black text-sm">
                        10+
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-white uppercase tracking-tight">Years in Software Engineering</div>
                        <div className="text-[10px] text-slate-300">USA &amp; Global Enterprise Delivery</div>
                      </div>
                    </div>
                  </Floating3DObject>
                </div>
              </TiltCard3D>
            </motion.div>

            {/* Right Column: Editorial with 3D Word-by-Word Scroll Reveal */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
                <span>AMERICAN TECHNOLOGY PARTNER</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight leading-[1.18]">
                <ScrollHeading3D text="Software Built for How Modern American Businesses Operate" direction="left" />
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                American businesses operate in dynamic, fast-paced markets. Mitsafe helps companies replace disconnected tools and manual spreadsheets with custom software, SaaS, headless e-commerce, and AI workflows built around their operational flow.
              </p>

              {/* Vertical Highlight Stream */}
              <div className="space-y-3 pt-1">
                {[
                  {
                    icon: ShieldCheck,
                    title: "HIPAA, SOC 2 & CCPA Compliant Systems",
                    desc: "Systems built for stringent US regulatory standards with full audit trails and data encryption.",
                  },
                  {
                    icon: Layers,
                    title: "Multi-State Cloud Architecture",
                    desc: "Synchronize inventory, POS, and financial records across New York, California, Texas, and nationwide.",
                  },
                  {
                    icon: Headphones,
                    title: "Direct US Timezone Technical Support",
                    desc: "No call center middlemen. Direct access to senior software architects in EST, CST, and PST hours.",
                  },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 6 }}
                      className="p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#305EFF] hover:shadow-md transition-all flex items-start gap-3.5 group cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#305EFF] group-hover:bg-[#305EFF] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#305EFF] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  href="#quote"
                  data-modal="quote"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm transition-all duration-300 shadow-lg shadow-[#305EFF]/30 hover:scale-105 cursor-pointer group"
                >
                  <span>Discuss Your Business Requirements</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. "WHAT WE ACTUALLY DO" (3D Scroll Heading + Auto-Rotating Vertical Solution)
          ========================================================================= */}
      <section id="services" className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
        <AmbientGlowingOrb className="top-20 right-20 w-80 h-80 bg-blue-100/60" duration={9} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header with 3D Word-by-Word Scroll Reveal */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Comprehensive Digital Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Everything Your US Business Needs to Scale" direction="left" />
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto">
              Select or watch the auto-advancing solution pillars below to explore real-time multi-branch sync and cloud architecture.
            </p>
          </div>

          {/* Vertical Interactive Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Vertical Solution Pillars (Auto-Rotating & Clickable) */}
            <div className="lg:col-span-5 space-y-3">
              {usaServicePillars.map((pillar, idx) => {
                const isActive = activePillarIndex === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarIndex(idx)}
                    className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                      isActive
                        ? "bg-[#060D1E] text-white border-[#305EFF] shadow-2xl ring-2 ring-[#305EFF]/50 -translate-y-0.5"
                        : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200/90 shadow-xs"
                    }`}
                  >
                    {/* Animated Progress Bar on Active Tab */}
                    {isActive && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#305EFF] to-[#00D4FF]"
                      />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                        isActive ? "bg-[#305EFF] text-white" : "bg-blue-50 text-[#305EFF]"
                      }`}>
                        Pillar {pillar.num} • {pillar.badge}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-[#00D4FF] translate-x-1" : "text-slate-400"}`} />
                    </div>

                    <h3 className={`text-base sm:text-lg font-black tracking-tight ${isActive ? "text-white" : "text-slate-900"}`}>
                      {pillar.title}
                    </h3>
                    
                    <p className={`text-xs mt-1 leading-relaxed line-clamp-2 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                      {pillar.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Live Dynamic Visual Showcase for Active Pillar */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillarIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between h-full space-y-6"
                >
                  {/* Visual Preview Frame with macOS Bar */}
                  <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-lg bg-slate-950 relative group">
                    <div className="h-8 bg-slate-900 border-b border-slate-800 px-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        usa-solution/{usaServicePillars[activePillarIndex].id}
                      </span>
                      <div className="w-8" />
                    </div>

                    <div className="relative h-48 sm:h-56">
                      <Image
                        src={usaServicePillars[activePillarIndex].image}
                        alt={usaServicePillars[activePillarIndex].imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md text-[#00D4FF] text-[11px] font-extrabold border border-white/20 shadow-md flex items-center gap-1.5">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>{usaServicePillars[activePillarIndex].liveStat}</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="px-3.5 py-2 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
                      {usaServicePillars[activePillarIndex].techStack.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-300 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Sub-Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {usaServicePillars[activePillarIndex].services.map((srv, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#305EFF] transition-all"
                      >
                        <h4 className="text-xs font-black text-slate-900">{srv.title}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{srv.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">100% Code &amp; IP Ownership</span>
                    <Link
                      href="#quote"
                      data-modal="quote"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-xs shadow-md transition-all hover:scale-105"
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
          4. HORIZONTAL RUNNING CARDS TRACK (Continuous Smooth Horizontal Marquee)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
            <span>Dynamic Industry Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <ScrollHeading3D text="Technology Built Around Every US Industry" direction="right" />
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto">
            Hover over any card to inspect localized capabilities and operational workflows.
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
            {[...usaIndustries, ...usaIndustries].map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[340px] shrink-0 bg-slate-50 hover:bg-white p-5 rounded-3xl border border-slate-200/90 hover:border-[#305EFF] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="relative h-36 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                      <Image
                        src={ind.img}
                        alt={ind.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-slate-950/90 backdrop-blur-md text-[#00D4FF] text-[10px] font-black border border-white/20">
                        {ind.badge}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#305EFF] group-hover:bg-[#305EFF] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
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

                  <div className="pt-3 mt-3 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#305EFF] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{ind.stat}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 text-[#305EFF] transition-transform" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>


      {/* =========================================================================
          5. OPERATIONAL TRANSFORMATION (3D Word Scroll + Before vs After)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50/80 border-b border-slate-200 relative overflow-hidden">
        <AmbientGlowingOrb className="top-12 left-1/3 w-96 h-96 bg-blue-100/50" duration={8} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Operational Transformation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Still Running Your US Business Across Disconnected Tools?" direction="left" />
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto">
              Compare fragmented, manual spreadsheets with a single connected digital technology engine.
            </p>
          </div>

          {/* Side-by-Side Vertical Comparison Stream */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* BEFORE: Legacy Pain */}
            <div className="bg-white border border-rose-200/90 rounded-3xl p-7 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-rose-100 pb-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-rose-500 font-bold">The Current Bottlenecks</span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">Disconnected Tools &amp; Manual Spreadsheets</h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-200 shrink-0">
                    <XCircle className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    "Scattered Excel spreadsheets and unlinked billing tools across teams",
                    "Manual follow-ups causing missed enterprise leads and deal pipeline leakage",
                    "Unsynchronized inventory leading to stock errors & shipping delays",
                    "Slow manual document processing and lack of HIPAA/SOC2 governance",
                    "No unified executive dashboards, forcing guesswork in commercial decisions",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-rose-100 text-xs text-rose-600 font-semibold">
                Result: Slower velocity, higher operational overhead &amp; lost deals.
              </div>
            </div>

            {/* AFTER: Mitsafe Unified Engine */}
            <div className="bg-white border-2 border-[#305EFF] rounded-3xl p-7 flex flex-col justify-between shadow-xl relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#305EFF] font-bold">After Mitsafe USA</span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">Unified Digital Operations Engine</h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#305EFF] flex items-center justify-center border border-blue-200 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    "Single unified platform connecting CRM, billing, inventory and operations",
                    "Automated AI workflows eliminating dozens of hours of manual data entry weekly",
                    "Centralized customer records accessible securely across all US branches",
                    "Real-time executive dashboards delivering live cash and stock visibility",
                    "Scalable cloud architecture engineered on AWS US-East/West with 99.99% uptime",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#305EFF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-blue-100 flex items-center justify-between">
                <div className="text-xs text-[#305EFF] font-bold">
                  Result: Complete visibility, high velocity &amp; total IP control.
                </div>
                <Link
                  href="#quote"
                  data-modal="quote"
                  className="px-4 py-2 rounded-xl bg-[#305EFF] hover:bg-[#204ad8] text-white font-black text-xs transition-transform hover:scale-105 shadow-md"
                >
                  Transform Now
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          6. USA FINANCIAL & OPERATIONS SOFTWARE (Dashboard Showcase + 3D Scroll Words)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <AmbientGlowingOrb className="top-10 right-10 w-80 h-80 bg-blue-100/50" duration={8} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: USA Financial & Operational Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
                <span>ENTERPRISE USA BUSINESS SOFTWARE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                <ScrollHeading3D text="Run Your Business With Real-Time Financial & Operational Visibility" direction="left" />
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Manage sales pipelines, quotes, multi-currency invoicing, warehouse inventory, customer accounts, and automated financial reporting through a centralized software engine built for US companies.
              </p>

              {/* Vertical Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  { title: "Invoices & Billing", desc: "Automated recurring billing, ACH integration, and Stripe checkout." },
                  { title: "Customer 360", desc: "Unified client credit limits, transaction histories, and contracts." },
                  { title: "Inventory Sync", desc: "Low-stock alerts, multi-warehouse transfers, and barcode scanning." },
                  { title: "Financial Reports", desc: "Real-time P&L, balance sheets, and tax-ready audit logs." },
                ].map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#305EFF] shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="#quote"
                  data-modal="quote"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm transition-all duration-300 shadow-md shadow-[#305EFF]/30 hover:scale-105 cursor-pointer group"
                >
                  <span>Request a System Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Mockup Image with macOS Top Bar */}
            <div className="lg:col-span-6 flex justify-center">
              <TiltCard3D tiltAmount={10} className="w-full max-w-[520px]">
                <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-2xl bg-slate-950 group">
                  <div className="h-8 bg-slate-900 border-b border-slate-800 px-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      usa-cloud-ops.mitsafe.com
                    </span>
                    <div className="w-8" />
                  </div>

                  <div className="relative">
                    <Image
                      src="/images/usa_mission_bg.jpg"
                      alt="USA Business Operations and Financial Management Dashboard"
                      width={640}
                      height={420}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                    />

                    {/* 3D Floating KPI Badges */}
                    <Floating3DObject duration={3.8} yOffset={7} rotateRange={2} className="absolute top-3 right-3 z-20">
                      <div className="bg-slate-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-[#00D4FF] text-xs font-black shadow-xl flex items-center gap-2">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>USD Financial Engine</span>
                      </div>
                    </Floating3DObject>
                  </div>

                  <div className="p-3.5 bg-white text-slate-900 text-center border-t border-slate-200">
                    <div className="text-xs sm:text-sm font-extrabold text-[#305EFF]">
                      USA Multi-Branch &amp; Financial Operations Platform
                    </div>
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
      <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Commercial Options</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Own Your Software or Run It as a Service" direction="right" />
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto">
              Choose the commercial engagement model that matches your business capital and product strategy.
            </p>

            {/* Interactive Model Toggle */}
            <div className="inline-flex items-center p-1.5 bg-white border border-slate-200 rounded-full shadow-xs mt-4">
              <button
                onClick={() => setDeliveryModelTab("custom")}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  deliveryModelTab === "custom"
                    ? "bg-[#305EFF] text-white shadow-md"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                Model 01: Custom Development (100% IP Ownership)
              </button>
              <button
                onClick={() => setDeliveryModelTab("managed")}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  deliveryModelTab === "managed"
                    ? "bg-[#305EFF] text-white shadow-md"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                Model 02: Dedicated US Engineering Squads
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
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase">
                        CapEx Ownership Model
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                        100% Custom Software &amp; Full Code Ownership
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        For businesses that need proprietary software designed specifically around their unique workflows, with 100% IP ownership transferred to you.
                      </p>
                      <ul className="space-y-2.5 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#305EFF]" />
                          <span>Built around your exact workflow with zero rigid restrictions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#305EFF]" />
                          <span>100% long-term code, database &amp; IP ownership with GitHub transfer</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#305EFF]" />
                          <span>Scalable enterprise cloud architecture on AWS US-East / US-West</span>
                        </li>
                      </ul>
                    </div>

                    <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">Pricing Structure</div>
                      <div className="text-2xl font-black text-slate-900">Milestone-Based (USD)</div>
                      <p className="text-xs text-slate-500">Transparent phase-based pricing with fixed scope and timeline deliverables.</p>
                      <Link
                        href="#quote"
                        data-modal="quote"
                        className="w-full py-3 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-xs block transition-transform hover:scale-105 shadow-md"
                      >
                        Discuss Custom Development
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 space-y-4">
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-extrabold uppercase">
                        Dedicated US Squad Model
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                        Dedicated Senior Engineering Squads Working in Your Timezone
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        For engineering leaders looking to augment their in-house capacity with pre-vetted senior developers working directly in your Jira/GitHub sprints.
                      </p>
                      <ul className="space-y-2.5 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Full daily overlap with EST, CST, and PST working hours</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Direct collaboration via Slack, Microsoft Teams, Jira, and GitHub</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Flexible monthly capacity with zero recruitment friction or long-term lock-in</span>
                        </li>
                      </ul>
                    </div>

                    <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">Pricing Structure</div>
                      <div className="text-2xl font-black text-slate-900">Monthly Retainer</div>
                      <p className="text-xs text-slate-500">Predictable monthly sprint cost with transparent developer allocation.</p>
                      <Link
                        href="#quote"
                        data-modal="quote"
                        className="w-full py-3 rounded-full bg-slate-900 hover:bg-[#305EFF] text-white font-extrabold text-xs block transition-transform hover:scale-105 shadow-md"
                      >
                        Explore Dedicated Squads
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
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Structured Execution</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="From Product Strategy to Scalable Production" direction="left" />
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto">
              A transparent 5-step methodology delivering reliable software on time and without business disruption.
            </p>
          </div>

          {/* Vertical Timeline Stream */}
          <div className="max-w-3xl mx-auto relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#305EFF] before:via-[#00D4FF] before:to-blue-200">
            {[
              {
                step: "01",
                title: "Discover & Mutual NDA",
                desc: "We sign US confidentiality agreements, analyze your business workflows, and scope technical architecture.",
                milestone: "Discovery & Scope Document",
              },
              {
                step: "02",
                title: "Plan Architecture & Tech Stack",
                desc: "Define the right microservices, database schema, payment gateways, and delivery milestones.",
                milestone: "Architecture & Scope Roadmap",
              },
              {
                step: "03",
                title: "UX/UI Design & Prototyping",
                desc: "Design intuitive, conversion-focused user interfaces that your users and customers actually enjoy using.",
                milestone: "Interactive Figma Prototypes",
              },
              {
                step: "04",
                title: "Agile Sprints & Automated QA",
                desc: "Develop scalable code in fortnightly sprints with CI/CD previews, automated unit tests, and security scans.",
                milestone: "Working Staging Releases",
              },
              {
                step: "05",
                title: "Production Launch & Code Transfer",
                desc: "Deploy to live AWS cloud, transfer full source code and GitHub repositories, and provide post-launch warranty.",
                milestone: "100% IP Transfer & Warranty",
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
          9. USA COVERAGE (Major Metros Footprint Selector)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Nationwide Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Supporting Enterprises Across Major US Metros" direction="right" />
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto">
              Mitsafe provides custom software and engineering teams for fast-growing businesses nationwide.
            </p>

            {/* Horizontal Metros Pill Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {usaMetroHubs.map((metro, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMetroIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeMetroIndex === idx
                      ? "bg-[#305EFF] text-white shadow-md scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span>🇺🇸</span>
                  <span>{metro.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Metro Spotlight Box */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMetroIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇺🇸</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {usaMetroHubs[activeMetroIndex].name} Ecosystem
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-bold">
                      {usaMetroHubs[activeMetroIndex].badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <span className="font-bold text-slate-900">Key Business Corridors:</span> {usaMetroHubs[activeMetroIndex].hub}
                  </p>
                </div>

                <div className="shrink-0 text-center sm:text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase">Deployment Track Record</div>
                  <div className="text-lg sm:text-xl font-black text-[#305EFF]">
                    {usaMetroHubs[activeMetroIndex].projects}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* =========================================================================
          10. USA BUSINESS OPERATIONAL FAQ (Interactive Vertical Accordion)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Common Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Frequently Asked Questions by US Clients" direction="left" />
            </h2>
          </div>

          <div className="space-y-3">
            {usaFaqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden bg-white shadow-xs"
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
          11. FINAL USA CTA SECTION (Solid Dark Navy Background, Clean White Text)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#060D1E] text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00D4FF] text-xs font-extrabold uppercase tracking-wider">
            <span>🇺🇸 Let&apos;s Build in the USA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Have a Business Challenge? <br />
            <span className="text-white">
              Let&apos;s Build the Right Technology Around It.
            </span>
          </h2>

          <p className="text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed text-slate-200">
            Tell us what is slowing your business down — manual processes, disconnected tools, outdated software or a digital product you want to launch. We&apos;ll help you identify the right technology approach.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="#quote"
              data-modal="quote"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#305EFF]/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <span>Book a Free USA Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="#quote"
              data-modal="quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-blue-50 text-slate-900 hover:text-[#305EFF] font-extrabold text-sm sm:text-base border border-slate-200 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Talk to Our Team</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
