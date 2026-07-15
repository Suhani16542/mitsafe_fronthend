"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Star, Check, Shield, Activity, Users, Globe, Briefcase } from "lucide-react";
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
  ]
};

const slideImagesBySlug: Record<string, string> = {
  "web-development": "/hero-web-dev.png",
  "mobile-app-development": "/hero-mobile-dev.png",
  "software-development": "/hero-software-dev.png",
  "ai-automation": "/hero-ai-solutions.png",
  "ui-ux-design": "/hero-ui-ux.png",
  "ecommerce-solutions": "/hero-ecommerce.png",
  "crm-erp": "/hero-crm-erp.png",
  "api-integration": "/hero-api.png",
  "cloud-devops": "/hero-cloud-devops.png",
  "digital-marketing": "/hero-web-dev.png",
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
      className="relative w-full overflow-hidden bg-[#F7FAFF] dark:bg-[#071426] min-h-[110vh] lg:min-h-[115vh] flex flex-col justify-start pt-28 sm:pt-32 lg:pt-36 pb-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* Light Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-[0.08] pointer-events-none" />

      {/* Mesh Gradient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#2563FF]/15 to-[#00BFFF]/15 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#6C63FF]/12 to-[#2563FF]/12 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#00BFFF]/8 blur-[120px] pointer-events-none -z-10" />

      {/* Moving background gradient */}
      <div className="absolute inset-0 moving-gradient-bg opacity-10 pointer-events-none" />

      {/* Floating particles */}
      <ParticleBackground />

      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />

      {/* 5 Vertical Background Grid Lines matching the reference screenshot */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.3]">
        <div className="w-[1px] bg-slate-200/50 dark:bg-white/5 h-full" />
        <div className="w-[1px] bg-slate-200/50 dark:bg-white/5 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-200/50 dark:bg-white/5 h-full" />
        <div className="w-[1px] bg-slate-200/50 dark:bg-white/5 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-200/50 dark:bg-white/5 h-full" />
      </div>

      {/* Lagged Mouse Follower Glow (Tactile cursor coordinates) */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-[#2563FF]/3 blur-[135px] pointer-events-none"
        animate={{
          x: mousePos.x * 55,
          y: mousePos.y * 55,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 18 }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#6C63FF]/3 blur-[140px] pointer-events-none"
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
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-start w-full">
              {/* Left Column: Heading and copy */}
              <div className="lg:col-span-7 flex flex-col items-start text-left w-full lg:-mt-6 pt-2 lg:pl-12">
                
                {/* Subtag line */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-[#2563FF]/5 dark:bg-[#2563FF]/15 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#2563FF] dark:text-[#00BFFF] shadow-sm font-sans"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563FF]"></span>
                  </span>
                  🚀 WE BUILD {currentService.title}
                </motion.div>

                {/* Service Heading word-by-word staggered reveal */}
                <motion.h2
                  variants={headingContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] font-black text-[#0F172A] dark:text-white leading-[1.1] tracking-tight max-w-2xl text-left"
                  style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif" }}
                >
                  {titleWords.map((word, i) => {
                    const isLast = i === titleWords.length - 1;
                    return (
                      <span key={i} className="overflow-hidden inline-flex py-1 -my-1 mr-3">
                        <motion.span
                          variants={headingWordVariants}
                          className={`inline-block ${isLast ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-[#6C63FF] dark:from-[#00BFFF] dark:to-[#6C63FF]" : ""}`}
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-5 text-[15px] text-[#475569] dark:text-slate-300 leading-relaxed max-w-[580px] font-medium tracking-wide text-left animate-fadeIn"
                >
                  {heroDescriptions[currentService.slug] || currentService.longDescription}
                </motion.p>

                {/* Tech stack square cards (exactly like reference image) */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="mt-6 flex flex-wrap gap-3.5 w-full justify-start"
                >
                  {(techIconsByService[currentService.slug] || []).map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 w-[74px] h-[74px] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(37,99,255,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-2xl mb-1">{tech.icon}</span>
                      <span className="text-[9.5px] font-extrabold text-[#475569] dark:text-slate-300 text-center px-1 truncate w-full font-sans">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                  {/* Decorative Add card */}
                  <div className="flex items-center justify-center bg-[#2563FF]/5 border border-dashed border-[#2563FF]/30 w-[74px] h-[74px] rounded-2xl cursor-default text-[#2563FF] hover:bg-[#2563FF]/10 transition-colors">
                    <span className="text-xl font-bold">+</span>
                  </div>
                </motion.div>

                {/* Magnetic CTAs */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-8 flex flex-wrap items-center gap-5 w-full justify-start"
                >
                  {/* Primary CTA */}
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2563FF] to-[#6C63FF] hover:from-[#2563FF]/95 hover:to-[#6C63FF]/95 text-white font-extrabold text-sm px-7 py-4 rounded-full shadow-[0_4px_14px_rgba(37,99,255,0.25)] hover:shadow-[0_8px_24px_rgba(37,99,255,0.45)] transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  {/* Secondary CTA */}
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md text-[#0F172A] dark:text-white font-bold text-sm px-7 py-4 rounded-full shadow-sm hover:shadow-md border border-slate-200 dark:border-white/10 hover:border-slate-350 dark:hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <span>View Portfolio</span>
                    <span className="text-[#2563FF] text-[10px] ml-1">▶</span>
                  </motion.a>
                </motion.div>

              </div>

              {/* Right Column: Premium custom animated illustration (aligned exactly like reference screenshot) */}
              <div className="lg:col-span-5 relative flex justify-center items-center lg:-mt-8 lg:-ml-8 xl:-ml-12 mt-6 z-30 w-full select-none">
                
                {/* Background aura gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2563FF]/15 via-[#6C63FF]/15 to-transparent blur-3xl rounded-full scale-90 pointer-events-none -z-10" />

                {/* Overlapping glowing background elements */}
                <div className="absolute w-[440px] h-[440px] rounded-full border border-blue-500/10 dark:border-blue-400/5 -z-10 pointer-events-none scale-105" />

                {/* Main Illustration container matching target dimensions and spacing */}
                <div className="relative w-full max-w-[580px] h-[430px] flex items-center justify-center p-0 overflow-visible">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 0.96, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -8 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-full flex justify-center items-center overflow-visible"
                    >
                      <Image
                        src={slideImagesBySlug[currentService.slug] || "/hero-web-dev.png"}
                        alt={currentService.title}
                        width={580}
                        height={430}
                        className="max-w-full max-h-full w-auto h-auto object-contain select-none z-10 mix-blend-multiply dark:mix-blend-normal"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  {/* Tag 1: Uptime */}
                  <motion.div
                    className="absolute -left-12 top-6 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 px-3 py-1.5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex items-center gap-1.5 z-20"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-emerald-500">🛡️</span>
                    <span className="text-[10.5px] font-extrabold text-slate-800 dark:text-white font-sans">99.99% Uptime</span>
                  </motion.div>

                  {/* Tag 2: AI Powered */}
                  <motion.div
                    className="absolute right-2 -top-10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 px-3 py-1.5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex items-center gap-1.5 z-20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  >
                    <span className="text-purple-500">🧠</span>
                    <span className="text-[10.5px] font-extrabold text-slate-800 dark:text-white font-sans">AI Powered Solutions</span>
                  </motion.div>

                  {/* Tag 3: API Ready */}
                  <motion.div
                    className="absolute -right-12 top-28 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 px-3 py-1.5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex items-center gap-1.5 z-20"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                  >
                    <span className="text-blue-500">🔌</span>
                    <span className="text-[10.5px] font-extrabold text-slate-800 dark:text-white font-sans">API Ready</span>
                  </motion.div>

                  {/* Tag 4: Response latency */}
                  <motion.div
                    className="absolute -right-14 bottom-24 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 px-3 py-1.5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex items-center gap-1.5 z-20"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <span className="text-amber-500">⚡</span>
                    <span className="text-[10.5px] font-extrabold text-slate-800 dark:text-white font-sans">12ms Response Time</span>
                  </motion.div>

                  {/* Tag 5: Projects Delivered */}
                  <motion.div
                    className="absolute -right-6 -bottom-6 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-white/10 px-3.5 py-2 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex items-center gap-1.5 z-20"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  >
                    <span className="text-blue-600">👥</span>
                    <span className="text-[10.5px] font-extrabold text-slate-800 dark:text-white font-sans">500+ Projects</span>
                  </motion.div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full mt-16 max-w-7xl mx-auto z-20">
          {featureCards.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/40 dark:border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(37,99,255,0.06)] hover:-translate-y-1 transition-all duration-300 cursor-default group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2563FF]/10 flex items-center justify-center text-lg text-[#2563FF] shrink-0 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <span className="text-[13px] font-extrabold text-[#0F172A] dark:text-white font-sans tracking-wide">
                {feat.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="w-full max-w-7xl mx-auto mt-10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-lg border border-slate-200/50 dark:border-white/10 rounded-3xl py-6 px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] divide-y lg:divide-y-0 lg:divide-x divide-slate-200/40 dark:divide-white/5 z-20 mb-8">
          <div className="flex items-center gap-4 justify-center py-2 lg:py-0">
            <div className="w-12 h-12 rounded-full bg-[#2563FF]/10 flex items-center justify-center text-[#2563FF]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xl font-black text-[#0F172A] dark:text-white">500+</div>
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Projects Delivered</div>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center py-2 lg:py-0">
            <div className="w-12 h-12 rounded-full bg-[#6C63FF]/10 flex items-center justify-center text-[#6C63FF]">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xl font-black text-[#0F172A] dark:text-white">50+</div>
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Expert Developers</div>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center py-2 lg:py-0">
            <div className="w-12 h-12 rounded-full bg-[#2563FF]/10 flex items-center justify-center text-[#2563FF]">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xl font-black text-[#0F172A] dark:text-white">15+</div>
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Countries Served</div>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center py-2 lg:py-0">
            <div className="w-12 h-12 rounded-full bg-[#6C63FF]/10 flex items-center justify-center text-[#6C63FF]">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xl font-black text-[#0F172A] dark:text-white">99%</div>
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>

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
