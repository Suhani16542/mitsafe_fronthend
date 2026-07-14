"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Star, Check, Shield, Activity } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { servicesData } from "@/data/services";

const slideImages = [
  "/web-app-design-woman.png",
  "/anyuni-mockup.png",
  "/zupee-mockup.png",
  "/pricing-devices-mockup.png",
  "/hero-image.png",
  "/farming-sustainability-mockup.png",
  "/tradingview-mockup.png",
];

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

  // Slowed transition to 5.5s (5500ms)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 5500);
    return () => clearInterval(interval);
  }, [handleNext, isHovered]);

  // Mouse Parallax Track Coordinate State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentService = servicesData[currentSlide];

  // Helper for title mapping
  const serviceTitle =
    currentService.title === "Games Developmenrt"
      ? "Game Development"
      : currentService.title;

  // Split title into words for mask-reveal staggered layout
  const titleWords = serviceTitle.split(" ");

  // Stagger parameters for heading words (Triggers at 1.1s)
  const headingContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.1,
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

  // Cuberto-Style Shutter/Clip-path slide transition variants
  const slideVariants = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      opacity: 0.85,
      scale: 1.015,
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      opacity: 0.85,
      scale: 0.985,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const introLetters = "MITSAFE".split("");

  const letterContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Character reveal animation with unblurring, fade-in, and slide-up mask reveal
  const letterVariants = {
    hidden: {
      y: "50%",
      opacity: 0,
      filter: "blur(6px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-[url('/light1.jpg')] dark:bg-[#071426] bg-cover bg-center bg-no-repeat min-h-[110vh] lg:min-h-[115vh] flex flex-col justify-start pt-28 sm:pt-32 lg:pt-36 pb-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* Font loaders for Satoshi & Clash Display are moved to layout.tsx head */}

      {/* Subtle Light Mode background overlay for black text legibility */}
      <div className="absolute inset-0 bg-white/60 dark:bg-transparent z-0 pointer-events-none" />

      {/* Moving background gradient */}
      <div className="absolute inset-0 moving-gradient-bg opacity-20 pointer-events-none" />

      {/* Floating particles */}
      <ParticleBackground />

      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

      {/* 5 Vertical Background Grid Lines matching the reference screenshot */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.45]">
        <div className="w-[1px] bg-slate-100/70 h-full" />
        <div className="w-[1px] bg-slate-100/70 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-100/70 h-full" />
        <div className="w-[1px] bg-slate-100/70 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-100/70 h-full" />
      </div>

      {/* ==========================================================================
         DECORATIVE FLOATING CIRCLES AND SOFT SHAPES (Tactile parallax theme elements)
         ========================================================================== */}
      {/* 1. Large Outline Blue Ring */}
      <motion.div
        className="absolute rounded-full border-2 border-[#7C3AED]/8 pointer-events-none z-0"
        style={{ width: "240px", height: "240px", left: "6%", top: "12%" }}
        animate={{
          y: [0, -22, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 2. Soft Blurry Orange Glow Orb */}
      <motion.div
        className="absolute rounded-full bg-[#F5A623]/3 pointer-events-none z-0 blur-2xl"
        style={{ width: "180px", height: "180px", right: "10%", top: "28%" }}
        animate={{
          y: [0, 24, 0],
          x: [0, -18, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 3. Medium Outline Orange Ring */}
      <motion.div
        className="absolute rounded-full border border-[#F5A623]/10 pointer-events-none z-0"
        style={{ width: "190px", height: "190px", right: "18%", bottom: "16%" }}
        animate={{
          y: [0, -16, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 4. Small Solid Blue Sphere */}
      <motion.div
        className="absolute rounded-full bg-[#7C3AED]/6 pointer-events-none z-0 shadow-sm"
        style={{ width: "22px", height: "22px", left: "16%", bottom: "30%" }}
        animate={{
          y: [0, 26, 0],
          x: [0, 14, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 5. Small Solid Orange Sphere */}
      <motion.div
        className="absolute rounded-full bg-[#F5A623]/8 pointer-events-none z-0 shadow-sm"
        style={{ width: "16px", height: "16px", right: "35%", top: "16%" }}
        animate={{
          y: [0, -22, 0],
          x: [0, -16, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lagged Mouse Follower Glow (Tactile cursor coordinates) */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-[#7C3AED]/4 blur-[135px] pointer-events-none"
        animate={{
          x: mousePos.x * 55,
          y: mousePos.y * 55,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 18 }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#F5A623]/3 blur-[140px] pointer-events-none"
        animate={{
          x: mousePos.x * -55,
          y: mousePos.y * -55,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 18 }}
      />

      {/* Slide Wipe Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col justify-center mt-3 lg:mt-4"
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
              {/* Left Column: Heading and copy copy */}
              <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
                {/* Subtag line */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-100 dark:border-purple-900 bg-[#F3F0FA] dark:bg-[#1C142A] px-4 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-black dark:text-slate-200 shadow-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A623] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5A623]"></span>
                  </span>
                  We Build {typedText}
                </motion.div>

                {/* Service Heading word-by-word staggered reveal */}
                <motion.h2
                  variants={headingContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-4 text-4xl sm:text-5xl md:text-5xl lg:text-[3.2rem] xl:text-[4.2rem] font-extrabold text-black dark:text-white leading-[1.15] tracking-tight flex flex-wrap gap-x-2.5 gap-y-0.5 max-w-2xl text-left"
                >
                  {titleWords.map((word, i) => (
                    <span key={i} className="overflow-hidden inline-flex py-1 -my-1">
                      <motion.span
                        variants={headingWordVariants}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-3.5 text-sm sm:text-[14.5px] md:text-base text-black/85 dark:text-slate-300 leading-relaxed max-w-xl font-medium tracking-wide text-left"
                >
                  {heroDescriptions[currentService.slug] || currentService.longDescription}
                </motion.p>

                {/* Bullet checklist features */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl"
                >
                  {currentService.features.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-black/90 dark:text-slate-300">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0 border border-[#00D4FF]/20 shadow-sm">
                        <Check className="w-3 h-3 stroke-[3.5px]" />
                      </div>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Magnetic CTAs */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-6 flex flex-wrap items-center gap-4 w-full sm:w-auto"
                >
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00D4FF] to-[#008FED] hover:from-[#00E5FF] hover:to-[#008FED]/90 text-white font-extrabold text-sm px-6 py-3.5 rounded-full shadow-[0_4px_14px_rgba(0,212,255,0.25)] hover:shadow-[0_8px_24px_rgba(0,212,255,0.45)] transition-all duration-300 border border-transparent cursor-pointer"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </motion.a>

                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#0B1A2E]/5 hover:bg-[#0B1A2E]/10 dark:bg-[#0B1A2E]/60 dark:hover:bg-[#071426]/80 text-black dark:text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-sm hover:shadow-md border border-slate-200 dark:border-[rgba(0,212,255,0.15)] hover:border-slate-300 dark:hover:border-[#00D4FF]/30 cursor-pointer transition-all duration-300"
                  >
                    <span>Get in Touch</span>
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Column: High-End Service Illustration Mockup Preview */}
              <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0 z-10 w-full">
                
                {/* Subtle glow background behind the mockup */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-cyan-500/5 to-transparent blur-2xl rounded-full scale-90 -z-10 pointer-events-none" />

                {/* FLOATING DECORATIVE ELEMENTS */}
                {/* Glass Stat Card 1 */}
                <motion.div
                  className="absolute -left-16 top-6 bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-2.5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col gap-1 w-32 text-left cursor-default pointer-events-auto z-20 hidden xl:flex"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[8px] uppercase tracking-wider text-slate-450 dark:text-slate-400 font-bold">System Status</span>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="w-4.5 h-4.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                      <Shield className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-[10px] font-black text-black dark:text-white">99.9% Uptime</span>
                  </div>
                </motion.div>

                {/* Glass Sphere 1 (Bottom Left) */}
                <motion.div
                  className="absolute -left-10 -bottom-8 w-11 h-11 rounded-full border border-white/30 dark:border-white/15 backdrop-blur-[5px] shadow-[inset_0_1.5px_3px_rgba(255,255,255,0.4),0_10px_20px_rgba(0,0,0,0.15)] z-20 hidden lg:block"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, rgba(0,0,0,0.3) 100%)"
                  }}
                  animate={{
                    y: [0, 8, 0],
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                {/* Glowing Cyan Diamond (Top Left) */}
                <motion.div
                  className="absolute -left-4 -top-8 w-6 h-6 border border-cyan-400/40 bg-cyan-400/5 rounded-md shadow-[0_0_12px_rgba(34,211,238,0.25)] flex items-center justify-center z-20 hidden lg:block"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [45, 405],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="w-1 h-1 bg-cyan-405 rounded-full animate-pulse" />
                </motion.div>

                {/* Glass Sphere 2 (Top Right) */}
                <motion.div
                  className="absolute -right-10 -top-8 w-12 h-12 rounded-full border border-white/30 dark:border-white/15 backdrop-blur-[5px] shadow-[inset_0_1.5px_3px_rgba(255,255,255,0.4),0_10px_20px_rgba(0,0,0,0.15)] z-20 hidden lg:block"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, rgba(0,0,0,0.3) 100%)"
                  }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                />

                {/* Glass Stat Card 2 */}
                <motion.div
                  className="absolute -right-16 bottom-6 bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-2.5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col gap-1 w-32 text-left cursor-default pointer-events-auto z-20 hidden xl:flex"
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[8px] uppercase tracking-wider text-slate-455 dark:text-slate-400 font-bold">API Performance</span>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00D4FF]"></span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="w-4.5 h-4.5 rounded-md bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] shrink-0">
                      <Activity className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-[10px] font-black text-black dark:text-white">12ms Latency</span>
                  </div>
                </motion.div>

                {/* Glowing Purple Ring (Bottom Right) */}
                <motion.div
                  className="absolute -right-6 -bottom-8 w-6 h-6 border border-purple-400/40 bg-purple-400/5 rounded-full shadow-[0_0_12px_rgba(192,132,252,0.25)] flex items-center justify-center z-20 hidden lg:block"
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-3 h-3 border border-purple-400/30 rounded-full" />
                </motion.div>

                {/* ORIGINAL FRAME STYLE SHOWCASE */}
                <div className="relative w-full max-w-[440px] aspect-[4/3] select-none mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 0.96, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -10 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-[#0B1A2E] shadow-[0_20px_50px_rgba(0,212,255,0.1)] bg-[#071426]">
                        <div className="w-full h-full overflow-hidden relative group">
                          <Image
                            src={slideImages[currentSlide % slideImages.length] || "/hero-image.png"}
                            alt={serviceTitle}
                            fill
                            className="object-cover img-zoom-hover select-none"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0B1A2E]/85 backdrop-blur-md border border-[rgba(0,212,255,0.15)] flex items-center justify-center text-slate-350 hover:text-[#00D4FF] hover:border-[#00D4FF] hover:bg-[#071426] hover:scale-105 active:scale-95 shadow-md transition-all duration-300 hidden md:flex cursor-pointer"
        aria-label="Previous service"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.5px]" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0B1A2E]/85 backdrop-blur-md border border-[rgba(0,212,255,0.15)] flex items-center justify-center text-slate-350 hover:text-[#00D4FF] hover:border-[#00D4FF] hover:bg-[#071426] hover:scale-105 active:scale-95 shadow-md transition-all duration-300 hidden md:flex cursor-pointer"
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
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? "w-6 bg-[#00D4FF]" : "w-2 bg-slate-650 hover:bg-[#00D4FF]/50"
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
            fill="#0B1A2E"
            opacity="0.3"
          ></path>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#071426"
          ></path>
        </svg>
      </div>
    </div>
  );
}
