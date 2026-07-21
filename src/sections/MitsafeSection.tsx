"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

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
        <linearGradient id={`section-avatar-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={grad.start} />
          <stop offset="100%" stopColor={grad.end} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#section-avatar-grad-${index})`} stroke="#FFFFFF" strokeWidth="3" />

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

      {/* Floating particles */}
      <ParticleBackground />

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

      {/* Parallax background glows / soft shapes */}
      {/* Outline Blue Ring */}
      <motion.div
        className="absolute rounded-full border-2 border-[#2563FF]/8 pointer-events-none z-0"
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
      {/* Small Solid Blue Sphere */}
      <motion.div
        className="absolute rounded-full bg-[#2563FF]/8 pointer-events-none z-0 shadow-sm"
        style={{ width: "22px", height: "22px", left: "16%", bottom: "20%" }}
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
      {/* Small Solid Orange Sphere */}
      <motion.div
        className="absolute rounded-full bg-[#F5A623]/8 pointer-events-none z-0 shadow-sm"
        style={{ width: "16px", height: "16px", right: "35%", top: "12%" }}
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
          {/* Subtle glowing fireflies / jugnu lights around the text and anim */}
          <div className="absolute inset-0 pointer-events-none overflow-visible z-0 flex items-center justify-center">
            {[
              { id: 1, left: "15%", top: "25%", size: 3.5, dur: 5.5, delay: 0 },
              { id: 2, left: "85%", top: "20%", size: 4, dur: 6.2, delay: 1 },
              { id: 3, left: "25%", top: "70%", size: 3, dur: 5.8, delay: 2 },
              { id: 4, left: "75%", top: "75%", size: 4.5, dur: 7, delay: 0.5 },
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

          {/* Floating circular avatars and cursor pills — radial arrangement around MITSAFE */}
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
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden shadow-md border-2 border-white hover:scale-105 transition-transform duration-300">
                    <TeamAvatar index={idx} />
                  </div>

                  <div
                    className={`flex items-center gap-1 px-2 py-0.5 text-[9px] sm:text-[10px] md:text-xs font-bold rounded-lg shadow-sm border transition-all duration-300 whitespace-nowrap ${
                      avatar.isGreen
                        ? "bg-[#8BE83A] text-slate-900 border-[#7cd02d]/25 group-hover:bg-[#9cf050]"
                        : "bg-[#2563FF] text-white border-blue-500/25 group-hover:bg-[#3b72f6]"
                    }`}
                  >
                    <CursorIcon />
                    <span>{avatar.role}</span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}

          {/* Mobile-only: badges in a horizontal scrollable row below the heading */}
          <div className="flex sm:hidden flex-wrap justify-center items-center gap-2.5 mt-6 px-2 z-20">
            {avatarsData.map((avatar, idx) => (
              <motion.div
                key={`mobile-${idx}`}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.15 + idx * 0.06 },
                  scale: { type: "spring", stiffness: 100, damping: 15, delay: 0.15 + idx * 0.06 },
                  y: { type: "spring", stiffness: 80, damping: 12, delay: 0.15 + idx * 0.06 },
                }}
              >
                <Link href={`/roles/${avatar.slug}`} className="pointer-events-auto block">
                  <motion.div
                    animate={{
                      y: [0, idx % 2 === 0 ? -4 : 4, 0],
                    }}
                    transition={{
                      y: { duration: 4 + idx * 0.3, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="flex items-center gap-1.5 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm border-2 border-white shrink-0">
                      <TeamAvatar index={idx} />
                    </div>
                    <div
                      className={`flex items-center gap-1 px-1.5 py-0.5 text-[8px] font-bold rounded-md shadow-sm border transition-all duration-300 whitespace-nowrap ${
                        avatar.isGreen
                          ? "bg-[#8BE83A] text-slate-900 border-[#7cd02d]/25"
                          : "bg-[#2563FF] text-white border-blue-500/25"
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
        </div>
      </div>
    </section>
  );
}
