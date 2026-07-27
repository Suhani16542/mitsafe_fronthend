"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";

function TeamAvatar({ index }: { index: number }) {
  const gradients = [
    { start: "#2563FF", end: "#00D4FF" },
    { start: "#00E5FF", end: "#0284C7" },
    { start: "#6366F1", end: "#3B82F6" },
    { start: "#10B981", end: "#059669" },
    { start: "#8B5CF6", end: "#6D28D9" },
  ];
  const grad = gradients[index % gradients.length];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full select-none pointer-events-none">
      <defs>
        <linearGradient id={`section-avatar-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.start} />
          <stop offset="100%" stopColor={grad.end} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#section-avatar-grad-${index})`} stroke="#FFFFFF" strokeWidth="3" />

      {/* DevOps Specialist */}
      {index === 0 && (
        <>
          <circle cx="50" cy="38" r="14" fill="#FFFFFF" />
          <path d="M24,76 C24,60 36,54 50,54 C64,54 76,60 76,76 Z" fill="#FFFFFF" />
          <rect x="42" y="34" width="16" height="5" rx="2.5" fill="#2563FF" />
        </>
      )}

      {/* Web Developer */}
      {index === 1 && (
        <>
          <circle cx="50" cy="38" r="14" fill="#FFFFFF" />
          <path d="M24,76 C24,60 36,54 50,54 C64,54 76,60 76,76 Z" fill="#FFFFFF" />
          <path d="M36,38 C36,26 64,26 64,38" stroke="#0284C7" strokeWidth="3.5" fill="none" />
        </>
      )}

      {/* AI Assistant Avatar - Glowing Robot Visor */}
      {index === 2 && (
        <>
          <rect x="28" y="28" width="44" height="32" rx="10" fill="#FFFFFF" />
          <rect x="34" y="34" width="32" height="14" rx="7" fill="#0F172A" />
          <circle cx="42" cy="41" r="3" fill="#00E5FF" />
          <circle cx="58" cy="41" r="3" fill="#00E5FF" />
          <path d="M28,78 C28,64 38,58 50,58 C62,58 72,64 72,78 Z" fill="#FFFFFF" />
          <circle cx="50" cy="22" r="3" fill="#00E5FF" />
          <line x1="50" y1="22" x2="50" y2="28" stroke="#FFFFFF" strokeWidth="2" />
        </>
      )}

      {/* UI/UX Designer */}
      {index === 3 && (
        <>
          <circle cx="50" cy="38" r="14" fill="#FFFFFF" />
          <path d="M24,76 C24,60 36,54 50,54 C64,54 76,60 76,76 Z" fill="#FFFFFF" />
          <circle cx="44" cy="38" r="2.5" fill="#10B981" />
          <circle cx="56" cy="38" r="2.5" fill="#10B981" />
        </>
      )}

      {/* Mobile Expert */}
      {index === 4 && (
        <>
          <circle cx="50" cy="38" r="14" fill="#FFFFFF" />
          <path d="M24,76 C24,60 36,54 50,54 C64,54 76,60 76,76 Z" fill="#FFFFFF" />
          <circle cx="43" cy="36" r="3" fill="none" stroke="#6D28D9" strokeWidth="2" />
          <circle cx="57" cy="36" r="3" fill="none" stroke="#6D28D9" strokeWidth="2" />
          <line x1="46" y1="36" x2="54" y2="36" stroke="#6D28D9" strokeWidth="2" />
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
    top: "18%",
    isGreen: false,
  },
  {
    role: "Web Developer",
    slug: "web-developer",
    xOffset: 30,
    yOffset: 45,
    left: "18%",
    bottom: "10%",
    isGreen: true,
  },
  {
    role: "AI Assistant",
    slug: "ai-assistant",
    xOffset: -15,
    yOffset: 35,
    left: "50%",
    top: "2%",
    transform: "translateX(-50%)",
    isGreen: false,
  },
  {
    role: "UI/UX Designer",
    slug: "ui-ux-designer",
    xOffset: 40,
    yOffset: -35,
    right: "18%",
    bottom: "10%",
    isGreen: true,
  },
  {
    role: "Mobile Expert",
    slug: "mobile-expert",
    xOffset: -35,
    yOffset: -20,
    right: "10%",
    top: "18%",
    isGreen: false,
  },
];

export default function MitsafeSection() {
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

  return (
    <section
      className="relative w-full overflow-hidden bg-white flex flex-col justify-center items-center py-6 sm:py-8 border-t border-blue-50"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* Moving background gradient */}
      <div className="absolute inset-0 moving-gradient-bg opacity-20 pointer-events-none" />

      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

      {/* 5 Vertical Background Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.45]">
        <div className="w-[1px] bg-slate-100/70 h-full" />
        <div className="w-[1px] bg-slate-100/70 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-100/70 h-full" />
        <div className="w-[1px] bg-slate-100/70 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-100/70 h-full" />
      </div>

      {/* Soft Blurry Orange Glow Orb */}
      <motion.div
        className="absolute rounded-full bg-[#F5A623]/3 pointer-events-none z-0 blur-2xl"
        style={{ width: "180px", height: "180px", right: "10%", top: "18%" }}
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
      {/* Medium Outline Orange Ring */}
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

      {/* Lagged Mouse Follower Glow */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-[#2563FF]/4 blur-[135px] pointer-events-none"
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



      {/* Section Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px] md:min-h-[360px] overflow-visible border-none bg-transparent">
          {/* Subtle AI/Futuristic Animation on Left and Right sides */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-between px-10 sm:px-20">
            <motion.div
              animate={{ opacity: [0.2, 0.6, 0.2], height: ["60px", "120px", "60px"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent rounded-full blur-[1px]"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.6, 0.2], height: ["120px", "60px", "120px"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-1 bg-gradient-to-b from-transparent via-[#008FED] to-transparent rounded-full blur-[1px]"
            />
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
                className="absolute w-[320px] sm:w-[520px] h-[120px] bg-gradient-to-r from-[#2563FF]/15 via-[#00E5FF]/10 to-[#2563FF]/15 rounded-full blur-3xl pointer-events-none -z-10"
              />

              {/* Massive Bold Minimalist Clash Display text */}
              <h2
                style={{ fontFamily: "'Clash Display', sans-serif" }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-[-0.02em] leading-none text-center select-none relative z-10 flex justify-center items-center text-black dark:text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.08)]"
              >
                MITSAFE
              </h2>

              {/* Thin animated gradient underline */}
              <div className="relative mt-5 w-44 sm:w-60 h-[3px] rounded-full overflow-hidden bg-slate-200/40 z-10">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#2563FF] via-[#00E5FF] to-[#2563FF] relative"
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

              {/* Short tagline */}
              <p className="mt-4 text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#2563FF]/90 uppercase font-sans text-center z-10">
                Enterprise AI & Digital Automation Systems
              </p>
            </motion.div>
          </motion.div>

          {/* Floating circular avatars and cursor pills — static radial arrangement around MITSAFE */}
          {avatarsData.map((avatar, idx) => (
            <div
              key={idx}
              className="hidden sm:block"
              style={{
                position: "absolute",
                left: avatar.left,
                top: avatar.top,
                bottom: avatar.bottom,
                right: avatar.right,
                transform: avatar.transform,
                zIndex: 20,
              }}
            >
              <Link href={`/roles/${avatar.slug}`} className="pointer-events-auto block">
                <div className="flex items-center gap-2.5 group cursor-pointer">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-md border-2 border-white hover:scale-105 transition-transform duration-300">
                    <TeamAvatar index={idx} />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold rounded-xl shadow-md border border-slate-200/80 bg-white text-slate-900 transition-all duration-300 whitespace-nowrap hover:bg-slate-50 hover:border-slate-300">
                    <CursorIcon />
                    <span>{avatar.role}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Mobile-only: badges in a horizontal row below the heading */}
          <div className="flex sm:hidden flex-wrap justify-center items-center gap-3 mt-6 px-2 z-20">
            {avatarsData.map((avatar, idx) => (
              <div key={`mobile-${idx}`}>
                <Link href={`/roles/${avatar.slug}`} className="pointer-events-auto block">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-9 h-9 rounded-full overflow-hidden shadow-sm border-2 border-white shrink-0">
                      <TeamAvatar index={idx} />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-lg shadow-sm border border-slate-200 bg-white text-slate-900 whitespace-nowrap">
                      <CursorIcon />
                      <span>{avatar.role}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
