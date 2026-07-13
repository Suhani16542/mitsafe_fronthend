"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Star, Check } from "lucide-react";
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

function TeamAvatar({ index }: { index: number }) {
  const gradients = [
    { start: "#00D4FF", end: "#008FED" },
    { start: "#00E5FF", end: "#071426" },
    { start: "#008FED", end: "#0B1A2E" },
    { start: "#E0F7FF", end: "#00D4FF" },
    { start: "#00D4FF", end: "#0B1A2E" },
  ];
  const grad = gradients[index % gradients.length];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none pointer-events-none">
      <defs>
        <linearGradient id={`avatar-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.start} />
          <stop offset="100%" stopColor={grad.end} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#avatar-grad-${index})`} stroke="#FFFFFF" strokeWidth="3" />
      
      {index === 0 && (
        <>
          <circle cx="50" cy="40" r="15" fill="#FFFFFF" opacity="0.95" />
          <path d="M24,78 C24,62 36,56 50,56 C64,56 76,62 76,78 Z" fill="#FFFFFF" opacity="0.95" />
          <rect x="42" y="36" width="16" height="4" rx="2" fill="#00D4FF" />
        </>
      )}
      {index === 1 && (
        <>
          <circle cx="50" cy="40" r="16" fill="#FFFFFF" opacity="0.95" />
          <path d="M22,78 C22,62 34,56 50,56 C66,56 78,62 78,78 Z" fill="#FFFFFF" opacity="0.95" />
          <path d="M34,40 C34,25 66,25 66,40" stroke="#008FED" strokeWidth="3" fill="none" />
        </>
      )}
      {index === 2 && (
        <>
          <circle cx="50" cy="38" r="14" fill="#FFFFFF" opacity="0.95" />
          <path d="M26,76 C26,62 38,54 50,54 C62,54 74,62 74,76 Z" fill="#FFFFFF" opacity="0.95" />
          <circle cx="45" cy="38" r="2" fill="#00D4FF" />
          <circle cx="55" cy="38" r="2" fill="#00D4FF" />
        </>
      )}
      {index === 3 && (
        <>
          <circle cx="50" cy="40" r="15" fill="#FFFFFF" opacity="0.95" />
          <path d="M24,78 C24,62 36,56 50,56 C64,56 76,62 76,78 Z" fill="#FFFFFF" opacity="0.95" />
          <polygon points="50,30 45,42 55,42" fill="#10B981" />
        </>
      )}
      {index === 4 && (
        <>
          <circle cx="50" cy="40" r="15" fill="#FFFFFF" opacity="0.95" />
          <path d="M24,78 C24,62 36,56 50,56 C64,56 76,62 76,78 Z" fill="#FFFFFF" opacity="0.95" />
          <circle cx="45" cy="36" r="3" fill="none" stroke="#3B82F6" strokeWidth="2" />
          <circle cx="55" cy="36" r="3" fill="none" stroke="#3B82F6" strokeWidth="2" />
          <line x1="48" y1="36" x2="52" y2="36" stroke="#3B82F6" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}

const CursorIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current text-current transform -rotate-90 shrink-0" viewBox="0 0 24 24">
    <path d="M21 3L3 10.53v.97l6.84 2.8L12.65 21h.97L21 3z" />
  </svg>
);

const avatarsData = [
  {
    role: "DevOps Specialist",
    slug: "devops-specialist",
    xOffset: -45,
    yOffset: -30,
    left: "12%",
    top: "22%",
    isGreen: false,
  },
  {
    role: "Web Developer",
    slug: "web-developer",
    xOffset: 30,
    yOffset: 45,
    left: "22%",
    bottom: "16%",
    isGreen: true,
  },
  {
    role: "AI Assistant",
    slug: "ai-assistant",
    xOffset: -15,
    yOffset: 35,
    left: "48%",
    top: "22%",
    isGreen: false,
  },
  {
    role: "UI/UX Designer",
    slug: "ui-ux-designer",
    xOffset: 40,
    yOffset: -35,
    right: "22%",
    bottom: "16%",
    isGreen: true,
  },
  {
    role: "Mobile Expert",
    slug: "mobile-expert",
    xOffset: -35,
    yOffset: -20,
    right: "12%",
    top: "22%",
    isGreen: false,
  },
];

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
      className="relative w-full overflow-hidden bg-white min-h-[95vh] flex flex-col justify-start pt-12 lg:pt-14 pb-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* Font loaders for Satoshi & Clash Display are moved to layout.tsx head */}

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex flex-col justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col justify-start"
          >
            {/* ==========================================================================
               1. INTRO TYPOGRAPHY SECTION: Centered Clash Display Header with High Clearance
               ========================================================================== */}
            <div className="relative w-full flex flex-col items-center justify-center pt-12 pb-6 min-h-[140px] sm:min-h-[180px] overflow-visible border-none bg-transparent">
              
              {/* Subtle glowing fireflies / jugnu lights around the text and anim */}
              <div className="absolute inset-0 pointer-events-none overflow-visible z-0 flex items-center justify-center">
                {[
                  // Soft moving fireflies
                  { id: 1, left: "15%", top: "25%", size: 3.5, dur: 5.5, delay: 0 },
                  { id: 2, left: "85%", top: "20%", size: 4, dur: 6.2, delay: 1 },
                  { id: 3, left: "25%", top: "70%", size: 3, dur: 5.8, delay: 2 },
                  { id: 4, left: "75%", top: "75%", size: 4.5, dur: 7, delay: 0.5 },
                  // Small glowing dots / sparkles
                  { id: 5, left: "40%", top: "15%", size: 1.8, dur: 4.0, delay: 1.2 },
                  { id: 6, left: "60%", top: "80%", size: 2.2, dur: 4.8, delay: 0.8 },
                  { id: 7, left: "50%", top: "30%", size: 2.0, dur: 5.0, delay: 2.5 },
                ].map((pt) => (
                  <motion.div
                    key={pt.id}
                    animate={{
                      opacity: [0.08, 0.8, 0.08],
                      scale: [0.8, 1.2, 0.8],
                      x: [0, 10, -6, 0],
                      y: [0, -14, 8, 0],
                    }}
                    transition={{
                      duration: pt.dur,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: pt.delay,
                    }}
                    className="absolute rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF,0_0_15px_rgba(0,229,255,0.3)]"
                    style={{
                      left: pt.left,
                      top: pt.top,
                      width: `${pt.size}px`,
                      height: `${pt.size}px`,
                    }}
                  />
                ))}
              </div>

              {/* Entrance animated wrapper for the brand header */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center relative w-full overflow-visible z-10"
              >
                {/* Continuous subtle floating container */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center justify-center relative w-full overflow-visible"
                >
                  {/* Breathing gradient glow behind the text & animation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-[320px] sm:w-[520px] h-[120px] bg-gradient-to-r from-[#7C3AED]/15 via-[#00E5FF]/10 to-[#7C3AED]/15 rounded-full blur-3xl pointer-events-none -z-10"
                  />


                  {/* Massive Bold Minimalist Satoshi / Clash Display text with animated futuristic gradient shine */}
                  <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontFamily: "'Clash Display', sans-serif" }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-[-0.02em] leading-none text-center select-none relative z-10 flex justify-center items-center text-black dark:text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.08)]"
                  >
                    MITSAFE
                  </motion.h1>

                  {/* Thin animated gradient underline */}
                  <div className="relative mt-5 w-44 sm:w-60 h-[3px] rounded-full overflow-hidden bg-slate-200/40 z-10">
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#7C3AED] via-[#00E5FF] to-[#7C3AED] relative"
                    >
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      />
                    </motion.div>
                  </div>

                  {/* Short premium tagline */}
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                    className="mt-4 text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#7C3AED]/90 uppercase font-sans text-center z-10"
                  >
                    Enterprise AI & Digital Automation Systems
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Floating circular avatars and cursor pills centered around the text wrapper */}
              {avatarsData.map((avatar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.7, y: 15 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    x: mousePos.x * avatar.xOffset * 0.4,
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.2 + idx * 0.08 },
                    scale: { type: "spring", stiffness: 100, damping: 15, delay: 0.2 + idx * 0.08 },
                    y: { type: "spring", stiffness: 80, damping: 12, delay: 0.2 + idx * 0.08 },
                    x: { type: "spring", stiffness: 60, damping: 15 },
                  }}
                  style={{
                    position: "absolute",
                    left: avatar.left,
                    top: avatar.top,
                    bottom: avatar.bottom,
                    right: avatar.right,
                    zIndex: 20,
                  }}
                >
                  <Link href={`/roles/${avatar.slug}`} className="pointer-events-auto block">
                    {/* Slow float effect + Slight hover scale */}
                    <motion.div
                      animate={{
                        y: [0, idx % 2 === 0 ? -6 : 6, 0],
                        x: [0, idx % 2 === 0 ? 4 : -4, 0],
                      }}
                      whileHover={{ scale: 1.06, y: idx % 2 === 0 ? -10 : 2 }}
                      transition={{
                        y: {
                          duration: 4.5 + idx * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        x: {
                          duration: 4.5 + idx * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        scale: { duration: 0.25, ease: "easeOut" }
                      }}
                      className="flex items-center gap-2 group cursor-pointer"
                    >
                      {/* Circle Avatar crop */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md border-2 border-white hover:scale-105 transition-transform duration-300">
                        <TeamAvatar index={idx} />
                      </div>

                      {/* Cursor Tag */}
                      <div
                        className={`flex items-center gap-1.2 px-2 py-0.5 text-[9px] sm:text-xs font-bold rounded-lg shadow-sm border transition-all duration-300 ${
                          avatar.isGreen
                            ? "bg-[#8BE83A] text-slate-900 border-[#7cd02d]/25 group-hover:bg-[#9cf050]"
                            : "bg-[#7C3AED] text-white border-purple-500/25 group-hover:bg-[#8b4bf6]"
                        }`}
                      >
                        <CursorIcon />
                        <span>{avatar.role}</span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* ==========================================================================
               2. CREDFLOW BASE HERO LAYOUT: Spacious 2-Column Split Grid below Header
               ========================================================================== */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-8 lg:mt-10">
              {/* Left Column: Spacious Typography & CTAs */}
              <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
                {/* Service Heading word-by-word staggered reveal */}
                <motion.h2
                  variants={headingContainerVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-4xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-slate-900 leading-[1.2] tracking-[-0.03em] flex flex-wrap gap-x-2.5 gap-y-0.5"
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

                {/* Subtag line */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 1.35 }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-[#F3F0FA] px-4 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#7C3AED] shadow-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A623] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5A623]"></span>
                  </span>
                  We Build {typedText}
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.45 }}
                  className="mt-5 text-sm sm:text-[14.5px] md:text-base text-slate-500 leading-relaxed max-w-xl font-medium tracking-wide"
                >
                  {currentService.longDescription}
                </motion.p>

                {/* Bullet checklist features */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.55 }}
                  className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full"
                >
                  {currentService.features.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
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
                  transition={{ duration: 0.4, delay: 1.65 }}
                  className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
                >
                  <motion.a
                    href="#services"
                    whileHover={{
                      scale: 1.04,
                      x: mousePos.x * 12,
                      y: mousePos.y * 12,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 350, damping: 12 }}
                    className="inline-flex items-center justify-center gap-2 bg-[#00D4FF] hover:bg-[#00BCE0] text-[#071426] font-bold text-sm px-6 py-3.5 rounded-full shadow-[0_6px_22px_rgba(0,212,255,0.25)] hover:shadow-[0_10px_28px_rgba(0,212,255,0.4)] transition-shadow duration-300 border border-transparent cursor-pointer"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </motion.a>

                  <motion.a
                    href="/contact"
                    whileHover={{
                      scale: 1.04,
                      x: mousePos.x * 12,
                      y: mousePos.y * 12,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 350, damping: 12 }}
                    className="inline-flex items-center justify-center gap-2 bg-[#0B1A2E] hover:bg-[#071426] text-white hover:text-[#00D4FF] font-bold text-sm px-6 py-3.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-[rgba(0,212,255,0.15)] hover:border-[#00D4FF]/30 cursor-pointer transition-colors"
                  >
                    <span>Get in Touch</span>
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Column: High-End Service Illustration Mockup Preview */}
              <motion.div
                initial={{ opacity: 0, x: 55, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.75, delay: 1.75, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0 z-10"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    x: mousePos.x * 16,
                  }}
                  transition={{
                    y: {
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    x: {
                      type: "spring",
                      stiffness: 60,
                      damping: 15,
                    }
                  }}
                  style={{ y: mousePos.y * 16 }}
                  className="relative w-full aspect-[4/3] max-w-[460px] select-none"
                >
                  {/* Premium Rounded Frame Shadow (CredFlow Visual Style) */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-[#0B1A2E] shadow-[0_20px_50px_rgba(0,212,255,0.1)] bg-[#071426]">
                    <div className="w-full h-full overflow-hidden relative group">
                      <Image
                        src={slideImages[currentSlide % slideImages.length] || "/hero-image.png"}
                        alt={currentService.title}
                        fill
                        className="object-cover img-zoom-hover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-tr from-[#00D4FF]/15 to-[#008FED]/10 blur-xl rounded-full -z-10 animate-pulse" />
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#00D4FF]/8 to-transparent blur-2xl rounded-full -z-10" />
                </motion.div>
              </motion.div>
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
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx ? "w-6 bg-[#00D4FF]" : "w-2 bg-slate-650 hover:bg-[#00D4FF]/50"
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
