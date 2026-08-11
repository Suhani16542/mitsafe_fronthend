"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { servicesData } from "@/data/services";

const techIconsByService: Record<string, { name: string; icon: string }[]> = {
  "web-development": [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind", icon: "🎨" },
    { name: "PostgreSQL", icon: "🐘" },
  ],
  "mobile-app-development": [
    { name: "Flutter", icon: "🐦" },
    { name: "React Native", icon: "⚛️" },
    { name: "Swift", icon: "🍎" },
    { name: "Kotlin", icon: "🅺" },
    { name: "Firebase", icon: "🔥" },
    { name: "Push Notify", icon: "🔔" },
  ],
  "software-development": [
    { name: ".NET", icon: "❖" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸" },
    { name: "PostgreSQL", icon: "🐘" },
  ],
  "ai-automation": [
    { name: "Python", icon: "🐍" },
    { name: "OpenAI", icon: "🤖" },
    { name: "LangChain", icon: "🦜" },
    { name: "Pinecone", icon: "🌲" },
    { name: "HuggingFace", icon: "🤗" },
    { name: "Flows", icon: "⚙️" },
  ],
  "ui-ux-design": [
    { name: "Figma", icon: "❖" },
    { name: "Illustrator", icon: "Ai" },
    { name: "Photoshop", icon: "Ps" },
    { name: "After Effects", icon: "Ae" },
    { name: "Miro", icon: "M" },
    { name: "Wireframe", icon: "✏️" },
  ],
  "ecommerce-solutions": [
    { name: "Next.js", icon: "▲" },
    { name: "Shopify API", icon: "🛍️" },
    { name: "Stripe", icon: "💳" },
    { name: "Redis", icon: "🔴" },
    { name: "WooCommerce", icon: "🛒" },
    { name: "PostgreSQL", icon: "🐘" },
  ],
  "crm-erp": [
    { name: "React", icon: "⚛️" },
    { name: "Go", icon: "🐹" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS RDS", icon: "☁️" },
    { name: "Node.js", icon: "🟢" },
  ],
  "api-integration": [
    { name: "GraphQL", icon: "☤" },
    { name: "REST API", icon: "🔌" },
    { name: "OAuth2", icon: "🔑" },
    { name: "Webhooks", icon: "🪝" },
    { name: "Node.js", icon: "🟢" },
    { name: "Redis", icon: "🔴" },
  ],
  "cloud-devops": [
    { name: "AWS", icon: "☁️" },
    { name: "Kubernetes", icon: "☸" },
    { name: "Terraform", icon: "🏗️" },
    { name: "Docker", icon: "🐳" },
    { name: "CI/CD", icon: "🔄" },
    { name: "Prometheus", icon: "📊" },
  ],
  "digital-marketing": [
    { name: "Google Ads", icon: "📈" },
    { name: "Meta Ads", icon: "👥" },
    { name: "SEO Opt.", icon: "🔍" },
    { name: "Social Media", icon: "📱" },
    { name: "Analytics", icon: "📊" },
    { name: "Email Marketing", icon: "✉️" },
  ],
};

const slideImagesBySlug: Record<string, string> = {
  "web-development": "/images/hero/light/hero-web-light-png1.png",
  "mobile-app-development": "/images/hero/light/hero-mobile-light-1.png",
  "software-development": "/images/hero/light/hero-software-light-removebg-preview.png",
  "ai-automation": "/images/hero/light/hero-ai-light-png-removebg-preview.png",
  "ui-ux-design": "/images/hero/light/hero-uiux-light-removebg-preview.png",
  "ecommerce-solutions": "/images/hero/light/hero-ecomerce-light-png-removebg-preview.png",
  "crm-erp": "/images/hero/light/hero-crm-light-removebg-preview.png",
  "api-integration": "/images/hero/light/hero-api-light-png-removebg-preview.png",
  "cloud-devops": "/images/hero/light/hero-cloud-light-removebg-preview.png",
  "digital-marketing": "/images/hero/light/hero-digital-light-png-removebg-preview.png",
};

interface FloatingBadge {
  icon: string;
  label: string;
}

const floatingBadgesBySlug: Record<string, FloatingBadge[]> = {
  "web-development": [
    { icon: "🛡️", label: "99.99% Uptime" },
    { icon: "⚡", label: "98/100 Web Vitals" },
    { icon: "🔍", label: "SEO Optimized" },
    { icon: "📱", label: "Fully Responsive" },
    { icon: "💻", label: "Headless CMS" },
  ],
  "mobile-app-development": [
    { icon: "📱", label: "iOS & Android" },
    { icon: "⚡", label: "60 FPS Native UX" },
    { icon: "🔒", label: "Biometric Secure" },
    { icon: "🔄", label: "Offline Syncing" },
    { icon: "🚀", label: "App Store Ready" },
  ],
  "software-development": [
    { icon: "💻", label: "Enterprise SaaS" },
    { icon: "⚙️", label: "Microservices" },
    { icon: "🔒", label: "End-to-End Encrypted" },
    { icon: "⚡", label: "Multi-Threaded" },
    { icon: "📊", label: "Automated Workflows" },
  ],
  "ai-automation": [
    { icon: "🛡️", label: "99.99% Uptime" },
    { icon: "🧠", label: "AI Powered Solutions" },
    { icon: "🔌", label: "API Ready" },
    { icon: "⚡", label: "12ms Response Time" },
    { icon: "🤖", label: "RAG & Vector AI" },
  ],
  "ui-ux-design": [
    { icon: "🎨", label: "Figma Prototypes" },
    { icon: "✨", label: "Modular Design System" },
    { icon: "👁️", label: "Accessibility AAA" },
    { icon: "📈", label: "+45% Conversion Boost" },
    { icon: "💎", label: "Modern Aesthetics" },
  ],
  "ecommerce-solutions": [
    { icon: "🛒", label: "Headless Commerce" },
    { icon: "💳", label: "Stripe & Apple Pay" },
    { icon: "⚡", label: "Instant Page Loads" },
    { icon: "📦", label: "Auto Inventory Sync" },
    { icon: "🔒", label: "PCI-DSS Compliant" },
  ],
  "crm-erp": [
    { icon: "📊", label: "Real-Time Telemetry" },
    { icon: "👥", label: "Role-Based Access" },
    { icon: "⚙️", label: "Process Automation" },
    { icon: "🔒", label: "Enterprise Security" },
    { icon: "📈", label: "Financial Reports" },
  ],
  "api-integration": [
    { icon: "🔌", label: "REST & GraphQL" },
    { icon: "🔑", label: "OAuth2 Secured" },
    { icon: "🪝", label: "Automated Webhooks" },
    { icon: "⚡", label: "10ms Sync Latency" },
    { icon: "🔄", label: "Zero Data Leaks" },
  ],
  "cloud-devops": [
    { icon: "☁️", label: "AWS & Kubernetes" },
    { icon: "🔄", label: "Automated CI/CD" },
    { icon: "🏗️", label: "Terraform IaC" },
    { icon: "🛡️", label: "Zero-Downtime Releases" },
    { icon: "📊", label: "Prometheus Monitoring" },
  ],
  "digital-marketing": [
    { icon: "📈", label: "High ROI Campaigns" },
    { icon: "🔍", label: "Technical SEO Audit" },
    { icon: "📊", label: "Analytics Telemetry" },
    { icon: "🚀", label: "Lead Generation" },
    { icon: "👥", label: "Social Media Ads" },
  ],
};

const typingPhrases = [
  "Websites",
  "Mobile Apps",
  "Games",
  "ERP Solutions",
  "AI Solutions",
];

const heroDescriptions: Record<string, string> = {
  "web-development": "We engineer high-speed headless storefronts, pixel-perfect corporate portals, and custom SaaS platforms. Our responsive layouts are optimized for Core Web Vitals, maximum SEO visibility, and secure content delivery systems that establish immediate user trust.",
  "mobile-app-development": "Launch cross-platform iOS and Android apps powered by Flutter or React Native alongside native Swift and Kotlin layers. We design background sync managers, local data caches, and push notification flows optimized for App Store validation.",
  "software-development": "Accelerate operations with bespoke desktop software and scalable API microservices built on C# .NET, Java, and Python. We refactor complex legacy databases, automate internal workflows, and index schemas for heavy multi-threaded runs.",
  "ai-automation": "Unleash cognitive agent automation integrated with Pinecone vector databases, RAG prompt guardrails, and autonomous self-triggering email and Slack pipelines. Eliminate manual operations and scale internal workflow velocity instantly.",
  "ui-ux-design": "Develop premium corporate identity packages, interactive high-fidelity Figma prototypes, and modular design systems. We optimize user journey navigation paths, task success rates, and interface layouts for maximum visual conversion rates.",
  "ecommerce-solutions": "Scale online sales pipelines with headless commerce frontends, custom Stripe payment integrations, and automated inventory sync loops. Our setups are built to load instantly, streamline product indexing, and decrease cart abandonment rates.",
  "crm-erp": "Unify your databases into a custom student ledger, enterprise CRM dashboard, or pipeline tracker with role-based permissions. Avoid admin fee leaks, eliminate tracking delays, and generate real-time profit and operational reports.",
  "api-integration": "Link your software systems via secure OAuth2 credentials, custom webhook processors, and bulletproof background data synchronization middleware. We build GraphQL and REST endpoints designed for low latency and automated error recovery.",
  "cloud-devops": "Deploy private virtual server networks, Kubernetes container clusters, and automated CI/CD pipelines managed via Terraform IaC. Secure continuous integration checks, zero-downtime hot releases, and Prometheus log telemetry alerts."
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = servicesData.length;

  // Typing Tagline Animation
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypedSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = typingPhrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1));
        setTypedSpeed(45);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
        setTypedSpeed(75);
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      setTypedSpeed(180);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex, typingSpeed]);

  // Autoplay functionality
  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 5500);
    return () => clearInterval(interval);
  }, [handleNext, isHovered]);

  const currentService = servicesData[currentSlide];
  const currentBadges = floatingBadgesBySlug[currentService.slug] || [
    { icon: "🛡️", label: "99.99% Uptime" },
    { icon: "🧠", label: "AI Powered Solutions" },
    { icon: "🔌", label: "API Ready" },
    { icon: "⚡", label: "12ms Response Time" },
    { icon: "👥", label: "500+ Projects" },
  ];

  const serviceTitle =
    currentService.title === "Games Developmenrt"
      ? "Game Development"
      : currentService.title;

  const titleWords = serviceTitle.split(" ");

  const headingContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const headingWordVariants = {
    hidden: {
      y: "110%",
      rotate: 1.5,
    },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const slideVariants = {
    initial: {
      opacity: 0,
      scale: 1.012,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.988,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const featureCards = [
    { name: "AI Powered", icon: "🧠" },
    { name: "Mobile Apps", icon: "📱" },
    { name: "Cloud Solutions", icon: "☁️" },
    { name: "Web Development", icon: "💻" },
    { name: "Secure APIs", icon: "🔒" },
    { name: "24/7 Support", icon: "📞" },
  ];

  return (
    <div
      className="relative w-full overflow-hidden bg-white min-h-[100vh] lg:min-h-[105vh] flex flex-col justify-start pt-28 sm:pt-32 pb-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      <div className="absolute inset-0 bg-white pointer-events-none" />

      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full flex-grow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col justify-center mt-2 lg:mt-4"
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">

              {/* ── LEFT COLUMN (6-Cols) ── */}
              <div className="lg:col-span-6 flex flex-col items-start text-left w-full lg:pl-2">

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#305EFF]/80 bg-[#305EFF]/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#305EFF] shadow-xs font-sans"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#305EFF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#305EFF]"></span>
                  </span>
                  <span>🚀 WE BUILD {currentService.title}</span>
                  <span className="border-l border-[#305EFF] pl-2 text-[#305EFF] font-mono text-[11px]">
                    {typedText}<span className="animate-pulse">|</span>
                  </span>
                </motion.div>

                <motion.h2
                  variants={headingContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-black text-slate-900 leading-[1.1] tracking-tight max-w-xl text-left"
                  style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif" }}
                >
                  {titleWords.map((word, i) => {
                    const isLast = i === titleWords.length - 1;
                    return (
                      <span key={i} className="overflow-hidden inline-flex py-1 -my-1 mr-3">
                        <motion.span
                          variants={headingWordVariants}
                          className={`inline-block ${isLast ? "text-transparent bg-clip-text bg-gradient-to-r from-[#305EFF] to-[#3B82F6]" : ""}`}
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-5 text-base sm:text-[15.5px] text-slate-600 leading-relaxed max-w-[500px] font-normal tracking-normal text-left"
                >
                  {heroDescriptions[currentService.slug] || currentService.longDescription}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="mt-6 flex flex-wrap gap-2.5 w-full justify-start items-center"
                >
                  {(techIconsByService[currentService.slug] || []).map((tech, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="flex flex-col items-center justify-center bg-white border border-slate-200/90 w-[60px] h-[60px] rounded-2xl shadow-xs hover:border-[#305EFF]/40 transition-all duration-300 cursor-pointer shrink-0"
                    >
                      <span className="text-xl mb-0.5">{tech.icon}</span>
                      <span className="text-[9px] font-bold text-slate-600 text-center px-0.5 truncate w-full font-sans leading-tight">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                  <div className="flex items-center justify-center bg-[#305EFF]/60 border border-dashed border-[#305EFF] w-[60px] h-[60px] rounded-2xl cursor-default text-[#305EFF] hover:bg-[#305EFF]/50 transition-colors shrink-0">
                    <span className="text-xl font-bold">+</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-8 flex flex-wrap items-center gap-4 w-full justify-start"
                >
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2.5 h-12 bg-[#305EFF] hover:bg-[#305EFF] text-white font-bold text-sm px-8 rounded-full shadow-[0_6px_20px_rgba(37,99,255,0.3)] hover:shadow-[0_8px_28px_rgba(37,99,255,0.45)] transition-all duration-300 cursor-pointer group"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2.5 h-12 bg-white text-slate-900 font-bold text-sm px-8 rounded-full border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 cursor-pointer"
                  >
                    <span>View Portfolio</span>
                    <span className="text-[#305EFF] text-[10px]">▶</span>
                  </motion.a>
                </motion.div>

              </div>

              {/* ── RIGHT COLUMN (6-Cols: Large Content-Height Image + Badges Floating Directly Around Image) ── */}
              <div className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0 z-30 w-full select-none">

                {/* Main Image Frame (Equal height to left content) */}
                <div className="relative w-full max-w-[620px] lg:max-w-[680px] h-[480px] sm:h-[540px] flex items-center justify-center overflow-visible">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 0.96, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -8 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-full h-full flex justify-center items-center overflow-visible"
                    >
                      <Image
                        src={slideImagesBySlug[currentService.slug] || "/images/hero/light/hero-web-light-png-removebg-preview.png"}
                        alt={currentService.title}
                        width={900}
                        height={700}
                        priority
                        className="w-full h-full object-contain select-none z-10 scale-110 sm:scale-115 transition-all duration-300 filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* 🔹 Badges Positioned Directly Around/Floating Near Image Bounds 🔹 */}
                  {currentBadges[0] && (
                    <motion.div
                      key={`badge-0-${currentSlide}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -left-2 sm:-left-6 top-4 bg-white/95 backdrop-blur-md border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-[0_6px_20px_rgba(15,23,42,0.08)] flex items-center gap-2 z-20 whitespace-nowrap"
                    >
                      <span className="text-sm">{currentBadges[0].icon}</span>
                      <span className="text-[11px] font-bold text-slate-800 font-sans">{currentBadges[0].label}</span>
                    </motion.div>
                  )}

                  {currentBadges[1] && (
                    <motion.div
                      key={`badge-1-${currentSlide}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                      transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                      className="absolute -right-2 sm:-right-6 top-2 bg-white/95 backdrop-blur-md border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-[0_6px_20px_rgba(15,23,42,0.08)] flex items-center gap-2 z-20 whitespace-nowrap"
                    >
                      <span className="text-sm">{currentBadges[1].icon}</span>
                      <span className="text-[11px] font-bold text-slate-800 font-sans">{currentBadges[1].label}</span>
                    </motion.div>
                  )}

                  {currentBadges[2] && (
                    <motion.div
                      key={`badge-2-${currentSlide}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
                      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      className="absolute -right-4 sm:-right-8 top-[42%] bg-white/95 backdrop-blur-md border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-[0_6px_20px_rgba(15,23,42,0.08)] flex items-center gap-2 z-20 whitespace-nowrap"
                    >
                      <span className="text-sm">{currentBadges[2].icon}</span>
                      <span className="text-[11px] font-bold text-slate-800 font-sans">{currentBadges[2].label}</span>
                    </motion.div>
                  )}

                  {currentBadges[3] && (
                    <motion.div
                      key={`badge-3-${currentSlide}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      className="absolute -right-2 sm:-right-6 bottom-16 bg-white/95 backdrop-blur-md border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-[0_6px_20px_rgba(15,23,42,0.08)] flex items-center gap-2 z-20 whitespace-nowrap"
                    >
                      <span className="text-sm">{currentBadges[3].icon}</span>
                      <span className="text-[11px] font-bold text-slate-800 font-sans">{currentBadges[3].label}</span>
                    </motion.div>
                  )}

                  {currentBadges[4] && (
                    <motion.div
                      key={`badge-4-${currentSlide}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                      transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute right-6 -bottom-2 bg-white/95 backdrop-blur-md border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-[0_6px_20px_rgba(15,23,42,0.08)] flex items-center gap-2 z-20 whitespace-nowrap"
                    >
                      <span className="text-sm">{currentBadges[4].icon}</span>
                      <span className="text-[11px] font-bold text-slate-800 font-sans">{currentBadges[4].label}</span>
                    </motion.div>
                  )}

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full mt-12 max-w-7xl mx-auto z-20">
          {featureCards.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-[#305EFF]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-lg text-[#305EFF] shrink-0 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <span className="text-[13px] font-bold text-slate-800 font-sans tracking-wide">
                {feat.name}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-slate-700 hover:text-[#305EFF] hover:border-[#305EFF]/40 hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex cursor-pointer"
        aria-label="Previous service"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.5px]" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-slate-700 hover:text-[#305EFF] hover:border-[#305EFF]/40 hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex cursor-pointer"
        aria-label="Next service"
      >
        <ChevronRight className="w-5 h-5 stroke-[2.5px]" />
      </button>

      {/* Pagination Page Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx ? "w-7 bg-[#305EFF]" : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide page ${idx + 1}`}
          />
        ))}
      </div>

      {/* Shutter bottom curve background separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10 pointer-events-none">
        <svg className="relative block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#FFFFFF"
            opacity="0.3"
          ></path>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </div>
  );
}