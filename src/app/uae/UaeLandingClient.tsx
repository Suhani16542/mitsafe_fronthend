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
// 1. DATA DEFINITIONS & CONTENT
// ==========================================

// Hero Slides matching exact git structure with UAE focus
const uaeHeroSlides = [
  {
    id: 0,
    eyebrow: "UAE BUSINESS TECHNOLOGY PARTNER",
    flag: "🇦🇪",
    title: "Custom Software, Business Automation & Digital Solutions Built for UAE Businesses",
    desc: "From startups and growing SMEs to established enterprises, Mitsafe UAE builds secure, scalable technology solutions that simplify operations, improve customer experiences and help businesses grow across the UAE.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our UAE Solutions",
    secondaryBtnHref: "#services",
    image: "/images/uae_hero_1.jpg",
    badges: ["Dubai • Abu Dhabi • Sharjah • Ajman • UAE", "Custom ERP, CRM & POS", "100% Code & IP Ownership"],
  },
  {
    id: 1,
    eyebrow: "Enterprise Cloud & Business Automation",
    flag: "🇦🇪",
    title: "Engineering Scalable Custom Software, ERP & Cloud Systems for the UAE",
    desc: "Connect finance, inventory, sales, customer records and multi-branch operations across the Emirates with high-reliability cloud architecture and smart automation.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our UAE Solutions",
    secondaryBtnHref: "#services",
    image: "/images/uae_hero_2.jpg",
    badges: ["Multi-Branch Cloud Ready", "VAT-Ready Workflows", "Proactive Tech Support"],
  },
  {
    id: 2,
    eyebrow: "Smart Digital Transformation",
    flag: "🇦🇪",
    title: "High-Performance Mobile Apps, Web Platforms & AI Workflows",
    desc: "Turn complex business operations into modern, intuitive customer apps, staff portals, POS checkout engines and automated digital pipelines designed for UAE growth.",
    primaryBtnText: "Book a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our UAE Solutions",
    secondaryBtnHref: "#services",
    image: "/images/uae_hero_3.jpg",
    badges: ["iOS & Android Native", "Bespoke SaaS Platforms", "Ongoing Tech Partnership"],
  },
];

// Stats Ribbon Data
const uaeQuickStats = [
  { label: "UAE Systems Delivered", value: "120+", icon: Boxes },
  { label: "Code & IP Ownership", value: "100%", icon: ShieldCheck },
  { label: "AWS GCC Cloud Hosted", value: "99.99%", icon: Cloud },
  { label: "Bilingual Operations", value: "EN / AR", icon: Globe },
  { label: "GST / UAE Timezone", value: "Direct Support", icon: Clock },
];

// 3 Major Solution Pillars for Vertical Interactive Showcase
const servicePillars = [
  {
    id: "erp-ops",
    num: "01",
    badge: "Operations & Commerce",
    title: "ERP, POS & Custom Business Software",
    headline: "Centralize Multi-Branch Operations & Stock Flow",
    desc: "Connect your entire business into one synchronized digital nervous system. Eliminate data silos between branches, front-of-house, warehouse, and finance across all Emirates.",
    image: "/images/uae_erp_pos_dashboard.jpg",
    imageAlt: "UAE ERP and POS System Dashboard",
    techStack: ["Next.js 15", "PostgreSQL", "AWS ME-South", "GraphQL", "Bilingual UI"],
    liveStat: "⚡ Real-Time Multi-Branch Sync Active",
    services: [
      { title: "Custom Business Software", desc: "Software built around your exact workflows instead of rigid generic templates." },
      { title: "Enterprise ERP Solutions", desc: "Unify finance, inventory, purchasing, sales, and HR into one live platform." },
      { title: "Modern POS & Retail Tech", desc: "Touchscreen point-of-sale with barcode checkout and automatic stock deduction." },
    ],
  },
  {
    id: "apps-sales",
    num: "02",
    badge: "Growth & Mobile",
    title: "CRM, E-Commerce & Mobile Applications",
    headline: "Engage UAE Consumers & Automate Sales Pipelines",
    desc: "Build intuitive customer touchpoints, seamless mobile shopping experiences, and automated sales pipelines that convert leads faster with local payment gateway integrations.",
    image: "/showcase/web_3.webp",
    imageAlt: "UAE E-Commerce and Mobile Application Platform",
    techStack: ["React Native", "Flutter", "TailwindCSS", "Stripe UAE", "Telr / PayTabs"],
    liveStat: "🚀 3.2x Faster UAE Checkout Speed",
    services: [
      { title: "Lead & Sales CRM", desc: "Track WhatsApp inquiries, client communications, and pipeline milestones." },
      { title: "E-Commerce Engines", desc: "High-speed stores with Apple Pay, Telr, PayTabs, and warehouse sync." },
      { title: "Native iOS & Android Apps", desc: "Sleek mobile applications built for smartphone-first Gulf consumers." },
    ],
  },
  {
    id: "ai-cloud",
    num: "03",
    badge: "Intelligence & Security",
    title: "AI Automation, Cloud & Data Protection",
    headline: "Automate Back-Office Tasks on Secure GCC Cloud",
    desc: "Scale your back-office with AI agents, document parsing OCR, and resilient AWS Middle East cloud infrastructure designed for strict UAE enterprise compliance.",
    image: "/illustrations/ai_automation.png",
    imageAlt: "AI Business Automation and Cloud Infrastructure",
    techStack: ["OpenAI LLM", "Python FastAPI", "AWS UAE Region", "Docker", "SOC2"],
    liveStat: "🤖 85% Automated Document Parsing",
    services: [
      { title: "AI Workflow Automation", desc: "Automate invoice extraction, repetitive data entry, and email responses." },
      { title: "Managed Cloud & IT", desc: "Hosted on AWS UAE region with daily automated backups and 99.99% uptime." },
      { title: "Data Security & Compliance", desc: "Role-based access controls (RBAC), end-to-end encryption, and audit logs." },
    ],
  },
];

// 10 UAE Industries with rich details for Horizontal Running Cards Track
const uaeIndustries = [
  {
    id: "retail",
    title: "Retail & Supermarkets",
    icon: Store,
    desc: "POS systems, real-time multi-branch stock tracking, barcode scanning, loyalty programs & auto stock alerts.",
    badge: "Retail & Multi-Branch",
    stat: "Zero Stock Discrepancy",
    img: "/showcase/web_1.webp",
  },
  {
    id: "hospitality",
    title: "Restaurants & Hospitality",
    icon: UtensilsCrossed,
    desc: "Kitchen display systems (KDS), digital table ordering, recipe costing, reservations & multi-outlet reporting.",
    badge: "Food & Beverage",
    stat: "Instant KDS Kitchen Sync",
    img: "/images/uae_erp_pos_dashboard.jpg",
  },
  {
    id: "realestate",
    title: "Real Estate & Property",
    icon: Building2,
    desc: "Lead capture from property portals, unit listings, broker CRM, payment schedule tracking & tenant portals.",
    badge: "Property Tech",
    stat: "Automated Broker CRM",
    img: "/images/industry/fintech_banking_hero.png",
  },
  {
    id: "construction",
    title: "Construction & Contracting",
    icon: HardHat,
    desc: "Project cost tracking, subcontractor management, BOQ tracking, job-site progress logs & milestone invoicing.",
    badge: "Contracting & Jobs",
    stat: "BOQ & Milestone Invoicing",
    img: "/engineering_culture.webp",
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    icon: Stethoscope,
    desc: "Patient appointment scheduling, electronic health records (EHR), clinic billing & automated patient reminders.",
    badge: "HealthTech",
    stat: "EHR & Booking Engine",
    img: "/images/industry/healthcare_tech_hero.png",
  },
  {
    id: "services",
    title: "Professional Services",
    icon: Briefcase,
    desc: "Client billing, automated retainer invoicing, employee timesheets, task tracking & secure document portals.",
    badge: "Consulting & Legal",
    stat: "Automated Retainer Billing",
    img: "/images/uae_about.jpg",
  },
  {
    id: "logistics",
    title: "Logistics & Trading",
    icon: Truck,
    desc: "Warehouse inventory bins, customs documentation, purchase orders, delivery dispatch & multi-currency billing.",
    badge: "Freight & Wholesale",
    stat: "Multi-Currency Landed Cost",
    img: "/showcase/hosting_1.webp",
  },
  {
    id: "education",
    title: "Education & Training",
    icon: GraduationCap,
    desc: "Student registration portals, course scheduling, LMS learning platforms & automated fee collection.",
    badge: "EdTech",
    stat: "Online LMS & Fee Portal",
    img: "/showcase/app_1.webp",
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Plant",
    icon: Factory,
    desc: "Production scheduling, bill of materials (BOM), raw material tracking & quality control checklists.",
    badge: "Industrial & Plant",
    stat: "BOM & Material Tracking",
    img: "/solutions_engineering.webp",
  },
  {
    id: "startups",
    title: "Startups & SMEs",
    icon: Rocket,
    desc: "Rapid MVP development, scalable cloud backends, automated sales pipelines & lightweight management systems.",
    badge: "Agile Scale",
    stat: "Rapid MVP in 4-6 Weeks",
    img: "/showcase/app_2.webp",
  },
];

// UAE Emirates Coverage List
const uaeEmirates = [
  { name: "Dubai", hub: "Business Bay • DIFC • Downtown • JLT • Al Quoz • Silicon Oasis", badge: "Primary Hub", projects: "120+ Systems Deployed" },
  { name: "Abu Dhabi", hub: "ADGM • Al Reem Island • Mussafah • Khalifa City", badge: "Enterprise & Gov", projects: "45+ Enterprise Systems" },
  { name: "Sharjah", hub: "Industrial Areas • SAIF Zone • Al Majaz • University City", badge: "Trade & Industrial", projects: "35+ Warehouse & POS" },
  { name: "Ajman", hub: "Free Zone • City Center • Al Jurf Industrial", badge: "Commercial Hub", projects: "20+ Retail Outlets" },
  { name: "Ras Al Khaimah", hub: "RAKEZ • Al Hamra • Business District", badge: "Manufacturing & Tourism", projects: "15+ Plant Systems" },
  { name: "Fujairah", hub: "Creative City • Port & Free Zone", badge: "Logistics & Maritime", projects: "10+ Freight Hubs" },
  { name: "Umm Al Quwain", hub: "FTZ • Commercial Core", badge: "Growth Zone", projects: "8+ SME Pipelines" },
];

// UAE Operational FAQ Items
const uaeFaqs = [
  {
    q: "How does Mitsafe ensure software compliance with UAE VAT and financial practices?",
    a: "Our software engines generate compliant VAT invoices with itemized breakdowns, QR codes, TRN fields, and audit-ready reporting compatible with UAE Federal Tax Authority (FTA) guidelines.",
  },
  {
    q: "Do we get full source code and database ownership upon project completion?",
    a: "Yes! Under our Custom Software Development model, your business receives 100% intellectual property, full repository access, and complete database ownership without proprietary platform lock-in.",
  },
  {
    q: "Can Mitsafe connect multi-branch operations across different Emirates in real time?",
    a: "Absolutely. Our cloud systems synchronize sales, stock levels, kitchen orders, and customer accounts across Dubai, Abu Dhabi, Sharjah, and other locations with sub-second latency.",
  },
  {
    q: "What payment gateways and local integrations do you support?",
    a: "We natively integrate with UAE and GCC payment providers including Apple Pay, Telr, PayTabs, Network International, Stripe, and direct bank debit APIs.",
  },
];

export default function UaeLandingClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  // Interactive Vertical Showcase State with Auto-Rotation
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [deliveryModelTab, setDeliveryModelTab] = useState<"custom" | "managed">("custom");
  const [activeEmirateIndex, setActiveEmirateIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const totalSlides = uaeHeroSlides.length;

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
      setActivePillarIndex((prev) => (prev + 1) % servicePillars.length);
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

  const slide = uaeHeroSlides[currentSlide] || uaeHeroSlides[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans selection:bg-[#305EFF] selection:text-white">
      
      {/* =========================================================================
          1. HERO SECTION (Preserved exact structure: 3D Motion Carousel + Cascading Words)
          ========================================================================= */}
      <section
        className="relative min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex items-center justify-start overflow-hidden bg-[#060D1E]"
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
          {uaeHeroSlides.map((_, idx) => (
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
          FLOATING UAE METRIC RIBBON (Interactive Horizontal Quick Stats)
          ========================================================================= */}
      <div className="relative z-20 -mt-7 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 items-center">
          {uaeQuickStats.map((stat, sIdx) => {
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
          2. UAE BUSINESS INTRO (3D Word-by-Word Scroll Reveal + Framed Visual)
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
                    src="/images/uae_about.jpg"
                    alt="Mitsafe UAE Software Engineering Team in Dubai Office"
                    width={640}
                    height={460}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating 3D Hub Active Badge */}
                  <Floating3DObject duration={3.5} yOffset={8} rotateRange={3} className="absolute top-4 right-4 z-20">
                    <div className="bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[#00D4FF] text-xs font-black shadow-xl flex items-center gap-2">
                      <LiveRadarPulse color="bg-[#00D4FF]" />
                      <span>Dubai Tech Hub</span>
                    </div>
                  </Floating3DObject>

                  {/* Glassmorphic Stat Banner */}
                  <div
                    className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/90 shadow-2xl flex items-center justify-between"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#305EFF] text-white flex items-center justify-center font-black shadow-md">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900 uppercase">Dedicated UAE Delivery</div>
                        <div className="text-[11px] text-slate-600">Aligned with Gulf business rhythms</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold border border-blue-100">
                      GST Timezone
                    </span>
                  </div>
                </div>
              </TiltCard3D>
            </motion.div>

            {/* Right Column: Editorial with 3D Word-by-Word Scroll Reveal */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-[#305EFF]" />
                <span>DIGITAL SOLUTIONS FOR THE UAE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                <ScrollHeading3D text="Technology That Works the Way Your UAE Business Works" direction="left" />
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                UAE businesses operate in a fast-moving digital environment. Mitsafe helps companies replace disconnected tools and manual spreadsheets with custom software, ERP, POS, and AI workflows built around their operational flow.
              </p>

              {/* Vertical Highlight Stream */}
              <div className="space-y-3 pt-1">
                {[
                  {
                    icon: CheckCircle2,
                    title: "Bilingual & UAE-Compliant Workflows",
                    desc: "Systems built for English/Arabic operations with full VAT-ready transaction logs.",
                  },
                  {
                    icon: Layers,
                    title: "Multi-Branch Cloud Architecture",
                    desc: "Synchronize inventory, POS, and cash flow across Dubai, Abu Dhabi, and Northern Emirates.",
                  },
                  {
                    icon: Headphones,
                    title: "Direct Technical Engineering Support",
                    desc: "No call center middlemen. Direct access to solutions architects on UAE time.",
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
              <ScrollHeading3D text="Everything Your Business Needs to Go Digital" direction="left" />
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto">
              Select or watch the auto-advancing solution pillars below to explore real-time multi-branch sync and architecture.
            </p>
          </div>

          {/* Vertical Interactive Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Vertical Solution Pillars (Auto-Rotating & Clickable) */}
            <div className="lg:col-span-5 space-y-3">
              {servicePillars.map((pillar, idx) => {
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
                        uae-solution/{servicePillars[activePillarIndex].id}
                      </span>
                      <div className="w-8" />
                    </div>

                    <div className="relative h-48 sm:h-56">
                      <Image
                        src={servicePillars[activePillarIndex].image}
                        alt={servicePillars[activePillarIndex].imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md text-[#00D4FF] text-[11px] font-extrabold border border-white/20 shadow-md flex items-center gap-1.5">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>{servicePillars[activePillarIndex].liveStat}</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="px-3.5 py-2 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center gap-1.5">
                      {servicePillars[activePillarIndex].techStack.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-300 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Sub-Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {servicePillars[activePillarIndex].services.map((srv, sIdx) => (
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
            <ScrollHeading3D text="Technology Built Around Every UAE Industry" direction="right" />
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
            {[...uaeIndustries, ...uaeIndustries].map((ind, idx) => {
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
              <ScrollHeading3D text="Still Running Your Business Across Too Many Systems?" direction="left" />
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto">
              Compare fragmented, manual operations with a single connected technology engine.
            </p>
          </div>

          {/* Side-by-Side Vertical Comparison Stream */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* BEFORE: Legacy Pain */}
            <div className="bg-white border border-rose-200/90 rounded-3xl p-7 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-rose-100 pb-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-rose-500 font-bold">The Current Pain</span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">Disconnected Tools &amp; Manual Spreadsheets</h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-200 shrink-0">
                    <XCircle className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    "Mismatched Excel spreadsheets scattered across branch staff",
                    "Manual follow-ups leading to missed deals and lost leads",
                    "Separate inventory tools resulting in stock errors & order delays",
                    "Paper-based processes and slow internal sign-offs",
                    "No real-time reporting, forcing blind executive decisions",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-rose-100 text-xs text-rose-600 font-semibold">
                Result: Slower operations, higher overhead &amp; lost deals.
              </div>
            </div>

            {/* AFTER: Mitsafe Unified Engine */}
            <div className="bg-white border-2 border-[#305EFF] rounded-3xl p-7 flex flex-col justify-between shadow-xl relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#305EFF] font-bold">After Mitsafe UAE</span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">Unified Digital Operations Engine</h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#305EFF] flex items-center justify-center border border-blue-200 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    "Connected systems uniting sales, finance, inventory and operations",
                    "Automated workflows eliminating dozens of hours of manual entry weekly",
                    "Centralized customer records accessible securely across all branches",
                    "Real-time executive dashboards delivering live cash and stock visibility",
                    "Scalable cloud infrastructure supporting multi-emirate expansion",
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
                  Result: Complete visibility, speed &amp; control.
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
          6. UAE VAT & FINANCIAL SOFTWARE (Dashboard Showcase + 3D Scroll Words)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <AmbientGlowingOrb className="top-10 right-10 w-80 h-80 bg-blue-100/50" duration={8} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: UAE VAT & Operational Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
                <span>UAE-READY BUSINESS SOFTWARE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                <ScrollHeading3D text="Run Your Business With Better Financial & Operational Visibility" direction="left" />
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Manage sales, quotes, invoices, inventory, customer accounts, and VAT-ready financial reporting through a centralized software engine built for UAE companies.
              </p>

              {/* Vertical Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  { title: "Invoices & Billing", desc: "Automated billing and quote creation with digital receipts." },
                  { title: "Customer 360", desc: "Unified client credit limits and transaction ledgers." },
                  { title: "Inventory Sync", desc: "Low-stock alerts and inter-branch warehouse transfers." },
                  { title: "VAT-Ready Reports", desc: "Structured transaction logs for UAE tax compliance." },
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
                      uae-finance-ops.mitsafe.ae
                    </span>
                    <div className="w-8" />
                  </div>

                  <div className="relative">
                    <Image
                      src="/images/uae_vat_finance_dashboard.jpg"
                      alt="UAE Business Operations and Financial Management Dashboard"
                      width={640}
                      height={420}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* 3D Floating KPI Badges */}
                    <Floating3DObject duration={3.8} yOffset={7} rotateRange={2} className="absolute top-3 right-3 z-20">
                      <div className="bg-slate-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-[#00D4FF] text-xs font-black shadow-xl flex items-center gap-2">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>AED Financial Engine</span>
                      </div>
                    </Floating3DObject>
                  </div>

                  <div className="p-3.5 bg-white text-slate-900 text-center border-t border-slate-200">
                    <div className="text-xs sm:text-sm font-extrabold text-[#305EFF]">
                      UAE Multi-Branch &amp; Financial Operations Platform
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
              Choose the commercial engagement model that matches your business capital and operational strategy.
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
                Model 01: Custom Development (Ownership)
              </button>
              <button
                onClick={() => setDeliveryModelTab("managed")}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  deliveryModelTab === "managed"
                    ? "bg-[#305EFF] text-white shadow-md"
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
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase">
                        CapEx Ownership Model
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                        100% Custom Software &amp; Full Code Ownership
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        For businesses that need software designed specifically around their proprietary workflows, with 100% IP ownership transferred to you.
                      </p>
                      <ul className="space-y-2.5 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#305EFF]" />
                          <span>Built around your exact workflow with zero rigid restrictions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#305EFF]" />
                          <span>100% long-term code, database &amp; IP ownership</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#305EFF]" />
                          <span>Scalable enterprise cloud architecture on AWS UAE</span>
                        </li>
                      </ul>
                    </div>

                    <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">Pricing Structure</div>
                      <div className="text-2xl font-black text-slate-900">Milestone-Based</div>
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
                        OpEx Turnkey Solution
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                        Managed Software with Hosting &amp; Ongoing Support
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        For businesses that want a ready-to-deploy digital system with cloud hosting, automated daily backups, and continuous technical maintenance.
                      </p>
                      <ul className="space-y-2.5 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Lower upfront capital investment with predictable monthly/annual pricing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Fully hosted on secure cloud servers with 99.99% uptime</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Ongoing technical support, security patches, and feature updates</span>
                        </li>
                      </ul>
                    </div>

                    <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">Pricing Structure</div>
                      <div className="text-2xl font-black text-slate-900">Subscription SaaS</div>
                      <p className="text-xs text-slate-500">Predictable recurring operational cost with maintenance and hosting included.</p>
                      <Link
                        href="#quote"
                        data-modal="quote"
                        className="w-full py-3 rounded-full bg-slate-900 hover:bg-[#305EFF] text-white font-extrabold text-xs block transition-transform hover:scale-105 shadow-md"
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
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Structured Execution</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="From Business Challenge to Working Technology" direction="left" />
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
                title: "Discover & Analyze",
                desc: "We analyze your existing workflows, spreadsheets, and operational bottlenecks before writing code.",
                milestone: "Workflow Discovery Document",
              },
              {
                step: "02",
                title: "Plan Architecture",
                desc: "Define the right technology stack, database schema, payment gateways, and delivery milestones.",
                milestone: "Architecture & Scope Roadmap",
              },
              {
                step: "03",
                title: "UX/UI Design",
                desc: "Design intuitive, bilingual user interfaces that your staff and customers actually enjoy using.",
                milestone: "Interactive Prototypes",
              },
              {
                step: "04",
                title: "Build & Quality Assurance",
                desc: "Develop scalable code, integrate UAE payment APIs, and execute rigorous stress and security tests.",
                milestone: "Working Production Release",
              },
              {
                step: "05",
                title: "Support & Scaling",
                desc: "Monitor live operations, provide user onboarding, and continuously scale features as your business expands.",
                milestone: "Ongoing Partnership & SLA",
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
          9. UAE COVERAGE (7 Emirates Footprint Selector)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>National Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Supporting Businesses Across the UAE" direction="right" />
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto">
              Mitsafe provides custom software and managed technology solutions for teams operating in every Emirate.
            </p>

            {/* Horizontal Emirates Pill Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {uaeEmirates.map((em, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEmirateIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeEmirateIndex === idx
                      ? "bg-[#305EFF] text-white shadow-md scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span>🇦🇪</span>
                  <span>{em.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Emirate Spotlight Box */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEmirateIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇦🇪</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {uaeEmirates[activeEmirateIndex].name} Operations
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-bold">
                      {uaeEmirates[activeEmirateIndex].badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <span className="font-bold text-slate-900">Key Business Zones:</span> {uaeEmirates[activeEmirateIndex].hub}
                  </p>
                </div>

                <div className="shrink-0 text-center sm:text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase">Deployment Track Record</div>
                  <div className="text-lg sm:text-xl font-black text-[#305EFF]">
                    {uaeEmirates[activeEmirateIndex].projects}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* =========================================================================
          10. UAE BUSINESS OPERATIONAL FAQ (Interactive Vertical Accordion)
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Common Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Frequently Asked Questions by UAE Businesses" direction="left" />
            </h2>
          </div>

          <div className="space-y-3">
            {uaeFaqs.map((faq, fIdx) => {
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
          11. FINAL UAE CTA SECTION (Solid Dark Navy Background, Clean White Text)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#060D1E] text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00D4FF] text-xs font-extrabold uppercase tracking-wider">
            <span>🇦🇪 Let&apos;s Build in the UAE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Have a Business Challenge? <br />
            <span className="text-white">
              Let&apos;s Build the Right Technology Around It.
            </span>
          </h2>

          <p className="text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed text-slate-200">
            Tell us what is slowing your business down — manual processes, disconnected systems, outdated software or a digital product you want to launch. We&apos;ll help you identify the right technology approach.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="#quote"
              data-modal="quote"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#305EFF]/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <span>Book a Free UAE Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="#quote"
              data-modal="quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F204A] hover:bg-[#305EFF] text-white font-extrabold text-sm sm:text-base border border-blue-900/80 hover:border-[#305EFF] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Talk to Our Team</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
