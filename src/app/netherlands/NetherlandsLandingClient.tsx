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
  Euro,
  Anchor,
  Compass,
  Lock,
  Globe2,
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
// 1. DATA DEFINITIONS & NETHERLANDS CONTENT
// ==========================================

const netherlandsHeroSlides = [
  {
    id: 0,
    eyebrow: "DUTCH TECHNOLOGY & SOFTWARE ENGINEERING PARTNER",
    flag: "🇳🇱",
    title: "Building High-Scale Web, Mobile & Cloud Software for Dutch Enterprises",
    desc: "From Amsterdam Silicon Canals to Rotterdam logistics hubs and Eindhoven Brainport, Mitsafe engineers resilient SaaS platforms, automated ERPs, and high-velocity digital solutions tailored for the Netherlands tech ecosystem.",
    primaryBtnText: "Book a Free Dutch Discovery Call",
    primaryBtnHref: "/contact",
    secondaryBtnText: "Explore Dutch Solutions",
    secondaryBtnHref: "#services",
    image: "/images/netherlands_hero_bg.jpg",
    badges: ["Amsterdam • Rotterdam • Eindhoven • Utrecht", "iDEAL, Mollie & Adyen Ready", "100% EU GDPR & Code Ownership"],
  },
  {
    id: 1,
    eyebrow: "LOGISTICS, SAAS SCALE & CLOUD ARCHITECTURE",
    flag: "🇳🇱",
    title: "High-Traffic Microservices, Cloud DevOps & Resilient Architectures",
    desc: "Scale your Dutch digital platforms with automated CI/CD pipelines, AWS/GCP European cloud infrastructure, high-throughput message brokers, and zero-downtime database clusters compliant with Dutch BTW (21%) and EU privacy.",
    primaryBtnText: "Consult Our Engineers",
    primaryBtnHref: "/contact",
    secondaryBtnText: "View Dutch Architecture",
    secondaryBtnHref: "#services",
    image: "/images/netherlands_about_workspace.jpg",
    badges: ["99.99% Uptime SLA", "EU Cloud Optimization", "Automated BTW 21% Engine"],
  },
  {
    id: 2,
    eyebrow: "MODERN MOBILE & AI AUTOMATION",
    flag: "🇳🇱",
    title: "Seamless Mobile Apps & Intelligent AI Automation Built to Scale",
    desc: "Launch engaging cross-platform mobile apps on Flutter and React Native and integrate custom AI workflow automation to eliminate repetitive tasks and accelerate Dutch business growth.",
    primaryBtnText: "Get an Instant Scope",
    primaryBtnHref: "/contact",
    secondaryBtnText: "Explore Tech Stack",
    secondaryBtnHref: "#services",
    image: "/portfolio_web_dev.webp",
    badges: ["iOS & Android Store Ready", "Next.js 15 & React 19", "Dedicated CET Sprint Squads"],
  },
];

const netherlandsQuickStats = [
  { label: "Dutch Systems Delivered", value: "120+", icon: Boxes },
  { label: "Code & IP Ownership", value: "100%", icon: ShieldCheck },
  { label: "EU Cloud Infrastructure", value: "99.99%", icon: Cloud },
  { label: "EU GDPR & AVG Ready", value: "Compliant", icon: Shield },
  { label: "CET / CEST Timezone", value: "Direct Support", icon: Clock },
];

const netherlandsServicePillars = [
  {
    id: "logistics-erp",
    num: "01",
    badge: "Logistics & Commerce",
    title: "Bespoke Dutch ERP, WMS & Port Logistics Software",
    headline: "Centralize Multi-Depot Operations & Port of Rotterdam Flow",
    desc: "Connect your enterprise into one synchronized digital operating platform. Seamlessly integrate automated customs documentation, bonded warehouse tracking, multi-currency accounting, and EDI freight synchronization.",
    image: "/showcase/hosting_1.webp",
    imageAlt: "Dutch Enterprise ERP and Port Logistics Management Dashboard",
    techStack: ["Next.js 15", "PostgreSQL", "AWS eu-central-1", "GraphQL", "TypeScript"],
    liveStat: "⚡ Real-Time Port & Warehouse Sync Active",
    services: [
      { title: "Bespoke Business ERP", desc: "Software engineered around your exact Dutch trade and supply chain workflows." },
      { title: "WMS & Freight Dispatch", desc: "Warehouse bin tracking, customs clearance, and automated courier API routing." },
      { title: "Multi-Store Retail & POS", desc: "Modern point-of-sale with live stock synchronization across Dutch branches." },
    ],
  },
  {
    id: "fintech-ideal",
    num: "02",
    badge: "FinTech & Payments",
    title: "iDEAL, Mollie, Adyen & Dutch BTW 21% Financial Engine",
    headline: "Automate Benelux Payments, SEPA & Belastingdienst Tax",
    desc: "Build engaging customer platforms, seamless mobile commerce experiences, and automated sales pipelines with Dutch payment gateways (iDEAL, Mollie, Adyen, Klarna, Bancontact, SEPA).",
    image: "/showcase/web_3.webp",
    imageAlt: "Dutch E-Commerce and Financial Payment Gateway Architecture",
    techStack: ["React Native", "Flutter", "iDEAL / Mollie", "Adyen APIs", "TypeScript"],
    liveStat: "🚀 3.2x Faster Benelux Checkout Speeds",
    services: [
      { title: "Automated Dutch BTW 21%", desc: "Real-time calculation of standard 21%, reduced 9%, and 0% export rates." },
      { title: "iDEAL & SEPA Checkout", desc: "Frictionless checkout flows with instant bank authorization and direct debits." },
      { title: "B2B Client Portals", desc: "Automated retainer billing, VAT reverse-charge rules, and digital receipts." },
    ],
  },
  {
    id: "ai-brainport",
    num: "03",
    badge: "Intelligence & High-Tech",
    title: "AI Automation, Brainport High-Tech & EU Cloud Systems",
    headline: "Automate Back-Office Workflows on Secure European Cloud",
    desc: "Scale your back-office with AI agents, document parsing OCR, and resilient AWS Frankfurt/Amsterdam cloud architecture designed for strict EU GDPR (AVG) and enterprise security compliance.",
    image: "/images/netherlands_about_workspace.jpg",
    imageAlt: "Dutch High-Tech Cloud Architecture and AI Automation Node",
    techStack: ["OpenAI LLM", "Python FastAPI", "AWS eu-central-1", "Docker", "GDPR / AVG"],
    liveStat: "🤖 91% Automated Invoice & Freight Processing",
    services: [
      { title: "AI Workflow Automation", desc: "Automate invoice reconciliation, bill of lading OCR, and repetitive tasks." },
      { title: "Managed Cloud & Hosting", desc: "Hosted in European datacentres with automated daily backups and 99.99% uptime." },
      { title: "Zero-Trust Cybersecurity", desc: "Role-based access controls (RBAC), end-to-end encryption, and audit logs." },
    ],
  },
];

const netherlandsIndustries = [
  {
    id: "fintech",
    title: "FinTech & Payment Scaleups",
    icon: Euro,
    desc: "iDEAL 2.0 integrations, automated SEPA reconciliation, KYC onboarding, and real-time financial reporting.",
    badge: "Amsterdam & Utrecht",
    stat: "DNB & AFM Compliant",
    img: "/images/industry/fintech_banking_hero.png",
  },
  {
    id: "logistics",
    title: "Port Logistics & Freight",
    icon: Anchor,
    desc: "Container yard tracking, customs documentation, automated dispatch routing & multi-currency freight billing.",
    badge: "Rotterdam & Schiphol",
    stat: "Real-Time EDI GPS Sync",
    img: "/showcase/hosting_1.webp",
  },
  {
    id: "agtech",
    title: "AgTech & Greenhouse Tech",
    icon: Factory,
    desc: "Automated climate telemetry, yield forecasting AI, cold-chain temperature logs & farm-to-shelf traceability.",
    badge: "Food Valley Wageningen",
    stat: "Zero-Waste Cold Chain QA",
    img: "/showcase/web_1.webp",
  },
  {
    id: "hightech",
    title: "High-Tech & Semiconductors",
    icon: Cpu,
    desc: "Cleanroom production MES, predictive machinery maintenance, and automated component quality control.",
    badge: "Eindhoven Brainport",
    stat: "Sub-Micron Quality Auditing",
    img: "/solutions_engineering.webp",
  },
  {
    id: "ecommerce",
    title: "E-Commerce & D2C Brands",
    icon: Store,
    desc: "Headless commerce, automated Mollie/iDEAL checkouts, barcode scanning, and multi-depot inventory sync.",
    badge: "Nationwide Benelux",
    stat: "+38% Mobile Conversions",
    img: "/showcase/web_3.webp",
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    icon: Stethoscope,
    desc: "Patient booking platforms, electronic health records (EHR), clinic billing, and NEN 7510 compliant portals.",
    badge: "Utrecht & Leiden",
    stat: "NEN 7510 Data Security",
    img: "/images/industry/healthcare_tech_hero.png",
  },
  {
    id: "cleantech",
    title: "Cleantech & Circular Energy",
    icon: Zap,
    desc: "EV charging grid telemetry, solar energy IoT metering, ESG compliance reporting, and carbon credit ledgers.",
    badge: "Delft & Arnhem",
    stat: "99.999% Telemetry Uptime",
    img: "/engineering_culture.webp",
  },
  {
    id: "services",
    title: "Professional & Legal Services",
    icon: Briefcase,
    desc: "Client matter management, automated retainer billing, employee timesheets & secure document vaults.",
    badge: "The Hague & Amsterdam",
    stat: "Automated Retainer Invoicing",
    img: "/images/netherlands_about_workspace.jpg",
  },
  {
    id: "hospitality",
    title: "Hospitality & Short-Stay Tech",
    icon: Compass,
    desc: "Omnichannel booking engines, automated tourist tax calculation, digital key NFC integrations, and CRM.",
    badge: "Amsterdam & Haarlem",
    stat: "+26% Direct Bookings",
    img: "/showcase/app_1.webp",
  },
  {
    id: "startups",
    title: "SaaS Scaleups & Tech Startups",
    icon: Rocket,
    desc: "Rapid MVP engineering, scalable cloud backends, automated user onboarding & lightweight administration.",
    badge: "Silicon Canals Hub",
    stat: "Rapid MVP in 4-6 Weeks",
    img: "/showcase/app_2.webp",
  },
];

const netherlandsCities = [
  { name: "Amsterdam", hub: "Silicon Canals • Zuidas Financial Mile • Keizersgracht", badge: "FinTech & Tech HQs", projects: "120+ Systems Deployed" },
  { name: "Rotterdam", hub: "Port of Rotterdam • Kop van Zuid • Erasmus Innovation Hub", badge: "Maritime & Logistics", projects: "45+ Logistics Platforms" },
  { name: "Eindhoven", hub: "High Tech Campus • Strijp-S • Brainport Tech Corridor", badge: "DeepTech & Hardware", projects: "35+ Systems" },
  { name: "Utrecht", hub: "Utrecht Science Park • Central Station Tech Hub", badge: "SaaS & HealthTech", projects: "30+ Cloud Solutions" },
  { name: "The Hague", hub: "Peace & Justice Tech • Beatrixkwartier • GovTech Hub", badge: "GovTech & LegalTech", projects: "22+ Platforms" },
  { name: "Delft & Leiden", hub: "TU Delft Campus • Leiden Bio Science Park", badge: "Robotics & LifeSciences", projects: "18+ DeepTech Apps" },
];

const netherlandsFaqs = [
  {
    q: "How does Mitsafe ensure software compliance with EU GDPR and Dutch AVG regulations?",
    a: "Our software is architected with strict adherence to the General Data Protection Regulation (GDPR / AVG). This includes role-based access control (RBAC), end-to-end AES-256 encryption, data residency within European cloud regions (AWS Frankfurt/Amsterdam), and automated Data Subject Access Request (DSAR) tools.",
  },
  {
    q: "Do we get full source code, intellectual property, and database ownership?",
    a: "Yes! Under our Bespoke Custom Software Development model, your Dutch business receives 100% intellectual property, full GitHub repository ownership, and complete database control with zero recurring vendor royalties or lock-in.",
  },
  {
    q: "Can you integrate Dutch payment gateways like iDEAL, Mollie, and Adyen?",
    a: "Yes! We have extensive experience integrating iDEAL (via Mollie, Adyen, and Stripe), Klarna, Bancontact, SEPA Direct Debit, and Apple Pay with automated 21% Dutch BTW invoicing and Belastingdienst-ready export logs.",
  },
  {
    q: "How do your developers collaborate with Dutch working hours?",
    a: "We offer complete working hour alignment with Central European Time (CET/CEST). Our developers participate in daily morning standups, sprint reviews, and communicate in real time via Slack, Microsoft Teams, and Jira.",
  },
];

export default function NetherlandsLandingClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Interactive Vertical Showcase State with Auto-Rotation
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [deliveryModelTab, setDeliveryModelTab] = useState<"custom" | "managed">("custom");
  const [activeCityIndex, setActiveCityIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const totalSlides = netherlandsHeroSlides.length;

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
      setActivePillarIndex((prev) => (prev + 1) % netherlandsServicePillars.length);
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

  const slide = netherlandsHeroSlides[currentSlide] || netherlandsHeroSlides[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans selection:bg-[#305EFF] selection:text-white">

      {/* =========================================================================
          1. HERO SECTION (Exact 3D Motion Carousel + Cascading Words for Netherlands)
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
          {netherlandsHeroSlides.map((_, idx) => (
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
          FLOATING DUTCH METRIC ISLAND (Light High-Precision Quick Stats Ribbon)
          ========================================================================= */}
      <div className="relative z-20 -mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 items-center">
          {netherlandsQuickStats.map((stat, sIdx) => {
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
          2. DUTCH BUSINESS & CLOUD ARCHITECTURE (3D Matrix Canvas + Editorial Reveal)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <AmbientGlowingOrb className="top-10 left-10 w-96 h-96 bg-blue-100/60" duration={8} />
        <AmbientGlowingOrb className="bottom-10 right-10 w-96 h-96 bg-sky-100/40" duration={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: 3D Interactive Dutch Architecture Canvas */}
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
                      dutch-cloud-topology // amsterdam-eu-central-1
                    </span>
                    <LiveRadarPulse color="bg-emerald-400" />
                  </div>

                  <div className="relative h-[340px] sm:h-[380px] w-full bg-slate-950">
                    <Image
                      src="/images/netherlands_about_workspace.jpg"
                      alt="Mitsafe Dutch Software Architecture and Cloud Topology over Amsterdam Silicon Canals"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Floating 3D Hub Active Badge */}
                    <Floating3DObject duration={3.5} yOffset={8} rotateRange={3} className="absolute top-4 right-4 z-20">
                      <div className="bg-slate-950/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-500/40 text-[#00D4FF] text-xs font-black shadow-2xl flex items-center gap-2">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>Amsterdam Hub Active</span>
                      </div>
                    </Floating3DObject>

                    {/* Floating 3D Compliance Shield Badge */}
                    <Floating3DObject duration={4.2} yOffset={-8} rotateRange={-2} className="absolute top-4 left-4 z-20">
                      <div className="bg-slate-950/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-emerald-400 text-xs font-black shadow-2xl flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>100% EU GDPR &amp; AVG</span>
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
                            Dedicated Dutch Engineering Squads
                          </div>
                          <div className="text-[11px] text-slate-300">
                            Zero vendor lock-in • Complete IP transfer
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-sky-500/20 text-[#00D4FF] text-xs font-extrabold border border-sky-500/30">
                        CET / CEST Aligned
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
                <span>SOVEREIGN DIGITAL SOLUTIONS FOR THE NETHERLANDS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight leading-[1.15]">
                <ScrollHeading3D text="Software Engineered for How Dutch Enterprises Scale & Compete" direction="left" />
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dutch enterprises operate in high-velocity, innovative digital markets. Mitsafe replaces fragmented spreadsheets, expensive legacy ERP lock-ins, and slow integrations with custom-built enterprise platforms, automated iDEAL workflows, and resilient EU cloud pipelines.
              </p>

              {/* High-Impact Feature Cards */}
              <div className="space-y-3.5 pt-1">
                {[
                  {
                    icon: ShieldCheck,
                    badge: "EU Compliance",
                    title: "GDPR & Dutch AVG Governance",
                    desc: "Engineered to strict European privacy standards with granular access control, data encryption, and full audit logs.",
                  },
                  {
                    icon: Layers,
                    badge: "Logistics Sync",
                    title: "Port of Rotterdam & WMS Integration",
                    desc: "Synchronize inventory, container logistics, and freight documentation across Dutch depots with sub-second latency.",
                  },
                  {
                    icon: Headphones,
                    badge: "Direct Support",
                    title: "Direct CET Engineering Collaboration",
                    desc: "Work directly with lead architects and senior software engineers during Dutch business hours with transparent sprint reviews.",
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
                  href="/contact"
                  data-modal="quote"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm transition-all duration-300 shadow-xl shadow-[#305EFF]/30 hover:scale-105 cursor-pointer group"
                >
                  <span>Discuss Your Dutch Project</span>
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
              <span>Full-Cycle Dutch Software Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              <ScrollHeading3D text="Mission-Critical Digital Capabilities for Dutch Enterprises" direction="left" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Select or watch the auto-advancing solution pillars below to explore real-time port logistics and Dutch cloud architecture.
            </p>
          </div>

          {/* Vertical Interactive Split with Crisp Light Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column: Vertical Solution Pillars (Light Cards with Active Blue State) */}
            <div className="lg:col-span-5 space-y-4">
              {netherlandsServicePillars.map((pillar, idx) => {
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
                        dutch-solution/{netherlandsServicePillars[activePillarIndex].id}
                      </span>
                      <div className="w-8" />
                    </div>

                    <div className="relative h-56 sm:h-64">
                      <Image
                        src={netherlandsServicePillars[activePillarIndex].image}
                        alt={netherlandsServicePillars[activePillarIndex].imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/95 backdrop-blur-md text-[#00D4FF] text-[11px] font-extrabold border border-sky-500/40 shadow-xl flex items-center gap-1.5">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>{netherlandsServicePillars[activePillarIndex].liveStat}</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills (Light Style) */}
                    <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase mr-1 font-bold">Stack:</span>
                      {netherlandsServicePillars[activePillarIndex].techStack.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-700 px-2.5 py-0.5 rounded bg-white border border-slate-200 shadow-2xs font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Sub-Services (Light Cards) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {netherlandsServicePillars[activePillarIndex].services.map((srv, sIdx) => (
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
                      href="/contact"
                      data-modal="quote"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-xs shadow-lg shadow-[#305EFF]/30 transition-all hover:scale-105"
                    >
                      <span>Get Dutch Architecture</span>
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
          4. HORIZONTAL RUNNING CARDS TRACK (10 Dutch Industries)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
            <Factory className="w-3.5 h-3.5" />
            <span>Dynamic Dutch Industry Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <ScrollHeading3D text="Specialized Technology Built for Key Dutch Sectors" direction="right" />
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Hover over any industry card to inspect localized workflows, EU GDPR compliance, and ERP features.
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
            {[...netherlandsIndustries, ...netherlandsIndustries].map((ind, idx) => {
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
              Replace outdated spreadsheets and disjointed tools with a unified Dutch enterprise technology platform.
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
                    "Unsynchronized spreadsheets causing costly inventory and logistics dispatch errors",
                    "Manual follow-ups resulting in lost client opportunities across Dutch regions",
                    "Multiple SaaS subscriptions creating duplicate data and high overhead",
                    "Slow sign-off procedures and paper-based customs documentation",
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
                Result: Severe operational friction, GDPR compliance risks &amp; wasted developer hours.
              </div>
            </div>

            {/* AFTER: Mitsafe Unified Engine */}
            <div className="bg-white border-2 border-[#305EFF] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-blue-100 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#305EFF] font-bold">After Mitsafe Netherlands</span>
                    <h3 className="text-xl font-black text-slate-900 mt-0.5">Connected Enterprise Operations Platform</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#305EFF] flex items-center justify-center border border-blue-200 shrink-0 shadow-xs">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Synchronized business data uniting sales, iDEAL payments, inventory and logistics",
                    "Automated Dutch BTW 21% tax calculation and Belastingdienst-ready export logs",
                    "Real-time visibility across Amsterdam, Rotterdam, Eindhoven and regional branches",
                    "EU GDPR and AVG compliant cloud architecture with automated daily backups",
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
                  href="/contact"
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
          6. DUTCH BTW 21% & FINANCIAL SOFTWARE (Dashboard Showcase + 3D Scroll Words)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <AmbientGlowingOrb className="top-10 right-10 w-96 h-96 bg-blue-100/50" duration={8} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: Dutch BTW & Financial Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
                <Euro className="w-3.5 h-3.5 text-[#305EFF]" />
                <span>DUTCH BTW 21% &amp; FINANCIAL OPERATIONS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-900 tracking-tight leading-[1.15]">
                <ScrollHeading3D text="Financial Visibility with Belastingdienst Tax Alignment" direction="left" />
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Empower your Dutch organization with live financial tracking, automated quote-to-invoice workflows, multi-entity ledgers, and digital record compliance compatible with Dutch tax requirements.
              </p>

              {/* Vertical Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {[
                  { title: "EUR Invoicing & Billing", desc: "Automated billing, quote creation, and instant iDEAL / Mollie payment links." },
                  { title: "Multi-Entity Ledgers", desc: "Consolidated group reporting across Dutch subsidiaries and European branches." },
                  { title: "Live Stock & Margins", desc: "Accurate transaction tracking with real-time gross margin insights." },
                  { title: "Dutch BTW 21% Ready", desc: "Digital VAT records and structured data exports for quarterly tax filing." },
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
                  href="/contact"
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
                      dutch-fintrack.mitsafe.nl // btw-vat-reconciliation
                    </span>
                    <LiveRadarPulse color="bg-emerald-400" />
                  </div>

                  <div className="relative">
                    <Image
                      src="/showcase/web_2.webp"
                      alt="Dutch Business Operations and Financial Management Dashboard"
                      width={640}
                      height={420}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* 3D Floating KPI Badges */}
                    <Floating3DObject duration={3.8} yOffset={7} rotateRange={2} className="absolute top-4 right-4 z-20">
                      <div className="bg-slate-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-sky-500/40 text-[#00D4FF] text-xs font-black shadow-2xl flex items-center gap-2">
                        <LiveRadarPulse color="bg-[#00D4FF]" />
                        <span>EUR Financial Engine</span>
                      </div>
                    </Floating3DObject>
                  </div>

                  <div className="p-4 bg-slate-900 text-white text-center border-t border-slate-800 flex items-center justify-between px-6">
                    <div className="text-xs sm:text-sm font-extrabold text-[#00D4FF]">
                      Dutch Multi-Branch &amp; Financial Operations Engine
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">
                      BTW 21% Compliant (100%)
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
              Choose the commercial engagement model that matches your Dutch business capital and operational strategy.
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
                        For Dutch enterprises that require tailored proprietary software built around their competitive advantage, with 100% IP transferred to your company.
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
                          <span>Enterprise-grade security and EU GDPR / AVG compliant infrastructure</span>
                        </li>
                      </ul>
                    </div>

                    <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">Pricing Structure</div>
                      <div className="text-2xl font-black text-slate-900">Milestone-Based</div>
                      <p className="text-xs text-slate-500">Transparent phase-based pricing with defined deliverables and SLA commitments in EUR.</p>
                      <Link
                        href="/contact"
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
                        For Dutch organizations looking for a dependable digital platform with secure EU cloud hosting, proactive maintenance, and dedicated technical support.
                      </p>
                      <ul className="space-y-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Lower upfront capital commitment with predictable subscription fees</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Hosted in EU datacentres with continuous monitoring and daily backups</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Direct CET engineering support, routine security audits &amp; feature updates</span>
                        </li>
                      </ul>
                    </div>

                    <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center space-y-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">Pricing Structure</div>
                      <div className="text-2xl font-black text-slate-900">Subscription SaaS</div>
                      <p className="text-xs text-slate-500">Predictable monthly/annual pricing with full hosting, maintenance, and support included.</p>
                      <Link
                        href="/contact"
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
                title: "Discovery & Dutch Workflow Analysis",
                desc: "We analyze your existing workflows, Dutch supply chain bottlenecks, and legacy tools before drafting architectures.",
                milestone: "Discovery & Requirement Specification",
              },
              {
                step: "02",
                title: "Solution Architecture & Roadmap",
                desc: "Define the right tech stack, database schemas, iDEAL/Mollie payment integrations, and phased milestone roadmap.",
                milestone: "Technical Architecture Plan",
              },
              {
                step: "03",
                title: "UI/UX & Interactive Prototyping",
                desc: "Design intuitive user interfaces that your operations team and Dutch customers find fast and frictionless to use.",
                milestone: "Figma Prototypes & User Testing",
              },
              {
                step: "04",
                title: "Agile Development & Testing",
                desc: "Develop scalable code, integrate Benelux banking APIs, and execute rigorous unit and security tests.",
                milestone: "Production Release & Handover",
              },
              {
                step: "05",
                title: "Support & Ongoing Scaling",
                desc: "Monitor live operations, onboard staff, and continuously scale platform features with dedicated CET SLA support.",
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
          9. DUTCH REGIONAL COVERAGE (Key Cities Footprint Selector)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Nationwide Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Supporting Organizations Across the Netherlands" direction="right" />
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Mitsafe delivers custom software and managed cloud technology for enterprises operating in major Dutch tech corridors.
            </p>

            {/* Horizontal Cities Pill Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {netherlandsCities.map((city, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCityIndex(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    activeCityIndex === idx
                      ? "bg-[#305EFF] text-white shadow-lg scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span>🇳🇱</span>
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
                    <span className="text-2xl">🇳🇱</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {netherlandsCities[activeCityIndex].name} Operations
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-bold border border-blue-100">
                      {netherlandsCities[activeCityIndex].badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <span className="font-bold text-slate-900">Key Business Zones:</span> {netherlandsCities[activeCityIndex].hub}
                  </p>
                </div>

                <div className="shrink-0 text-center sm:text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase">Deployment Track Record</div>
                  <div className="text-lg sm:text-2xl font-black text-[#305EFF]">
                    {netherlandsCities[activeCityIndex].projects}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>


      {/* =========================================================================
          10. DUTCH BUSINESS OPERATIONAL FAQ (Interactive Vertical Accordion)
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider border border-blue-200">
              <Zap className="w-3.5 h-3.5" />
              <span>Common Dutch Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              <ScrollHeading3D text="Frequently Asked Questions by Dutch Businesses" direction="left" />
            </h2>
          </div>

          <div className="space-y-3.5">
            {netherlandsFaqs.map((faq, fIdx) => {
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
          11. FINAL DUTCH CTA SECTION (Solid Dark Navy Background, Clean White Text)
          ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#030712] text-white relative overflow-hidden border-t border-slate-800">
        <AmbientGlowingOrb className="top-10 left-1/4 w-96 h-96 bg-blue-600/20" duration={8} />
        <AmbientGlowingOrb className="bottom-10 right-1/4 w-96 h-96 bg-cyan-500/20" duration={10} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-sky-500/40 text-[#00D4FF] text-xs font-extrabold uppercase tracking-wider shadow-lg">
            <span>🇳🇱 Let&apos;s Build in the Netherlands</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Have a Dutch Business Challenge? <br />
            <span className="text-white">
              Let&apos;s Build the Right Technology Around It.
            </span>
          </h2>

          <p className="text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed text-slate-300">
            Tell us what is slowing your business down — manual processes, logistics bottlenecks, off-the-shelf software limitations, or a digital product you want to engineer. We&apos;ll help you map out the right technology approach.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              data-modal="quote"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#305EFF]/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <span>Book a Free Dutch Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="#quote"
              data-modal="quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F204A] hover:bg-[#305EFF] text-white font-extrabold text-sm sm:text-base border border-blue-900/80 hover:border-[#305EFF] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Talk to Our Dutch Architects</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
