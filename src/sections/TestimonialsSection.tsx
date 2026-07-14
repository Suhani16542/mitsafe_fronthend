"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

const partnerLogos = [
  { name: "SPMA" },
  { name: "BYTES29" },
  { name: "T-MOBILE" },
  { name: "RED LABEL" }
];

interface PartnerLogoCardProps {
  name: string;
  idx: number;
  springX: any;
  springY: any;
}

function PartnerLogoCard({ name, idx, springX, springY }: PartnerLogoCardProps) {
  const factorX = idx === 0 ? -1.2 : idx === 1 ? 0.7 : idx === 2 ? -0.7 : 1.2;
  const factorY = idx === 0 ? 0.9 : idx === 1 ? -1.2 : idx === 2 ? 1.2 : -0.9;
  
  const xOffset = useTransform(springX, (val: number) => val * factorX * 1.8);
  const yOffset = useTransform(springY, (val: number) => val * factorY * 1.8);

  return (
    <motion.div
      style={{ x: xOffset, y: yOffset }}
      className="w-full flex justify-center"
    >
      <Magnetic>
        <div
          className="w-full min-w-[150px] max-w-[200px] py-6 px-8 bg-[#0B1A2E]/70 hover:bg-[#071426]/70 backdrop-blur-xl rounded-2xl border border-[rgba(0,212,255,0.15)] shadow-sm hover:border-[#00D4FF]/25 hover:shadow-md transition-all duration-300 cursor-default flex items-center justify-center select-none"
        >
          {name === "SPMA" && (
            <span className="font-display text-base font-black tracking-widest text-[#00D4FF] flex items-center gap-1.5 hover:animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] animate-ping" />
              SPMA
            </span>
          )}
          {name === "BYTES29" && (
            <span className="font-display text-base font-black tracking-widest text-[#EC4899] flex items-center gap-1">
              BYTES<span className="text-white font-black">29</span>
            </span>
          )}
          {name === "T-MOBILE" && (
            <span className="font-display text-base font-black tracking-wider text-white flex items-center gap-0.5">
              <span className="text-[#EC4899] font-black">T</span>-MOBILE
            </span>
          )}
          {name === "RED LABEL" && (
            <span className="font-display text-base font-black tracking-widest text-[#EF4444] border-b-2 border-[#EF4444]/30 pb-0.5">
              RED LABEL
            </span>
          )}
        </div>
      </Magnetic>
    </motion.div>
  );
}

function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    const maxDisplacement = 8;
    const distance = Math.sqrt(x * x + y * y);
    if (distance < 50) {
      setPosition({
        x: (x / 50) * maxDisplacement,
        y: (y / 50) * maxDisplacement,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Set up motion values for cursor tracking parallax offsets
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="w-full px-6 lg:px-8">
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-[#F3F0FA] py-14 md:py-16 relative overflow-hidden border border-purple-100 rounded-[2rem] max-w-6xl mx-auto font-sans shadow-sm"
      >
      {/* Background Cyber Grid lines */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.25]">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-slate-200" />
        ))}
      </div>

      {/* Rotating Background Vector Light Rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/40 bg-transparent pointer-events-none z-0 hidden lg:block"
        style={{ width: "550px", height: "550px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/40 bg-transparent pointer-events-none z-0 hidden lg:block"
        style={{ width: "400px", height: "400px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Ambient gradient glows */}
      <div className="absolute top-[20%] left-1/4 w-[350px] h-[350px] rounded-full bg-[#00D4FF]/3 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-1/4 w-[350px] h-[350px] rounded-full bg-[#008FED]/2 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#00D4FF] font-display shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLIENT REVIEWS</span>
          </motion.div>
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-2xl sm:text-3xl font-bold text-[#1E1A39] tracking-[-0.03em] leading-tight"
          >
            When Our Clients Say
          </motion.h2>
        </div>

        {/* Large circular background behind the testimonial card with floating animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0 bg-[#0B1A2E]/5 dark:bg-[#0B1A2E]/10"
          style={{ width: "450px", height: "450px" }}
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Large Cinematic Testimonial Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl text-center flex flex-col items-center bg-[#0B1A2E]/90 border border-[rgba(0,212,255,0.15)] rounded-3xl p-8 md:p-12 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,212,255,0.06)] group overflow-hidden"
        >
          {/* Subtle glow border line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00D4FF] to-[#008FED] opacity-70" />

          {/* Subtle background quotes */}
          <div className="absolute -top-6 left-6 w-24 h-24 text-slate-200/50 select-none pointer-events-none font-serif text-[14rem] leading-none">
            &ldquo;
          </div>

          {/* Centered Heart Graphic Icon */}
          <div className="w-14 h-14 relative flex items-center justify-center bg-gradient-to-tr from-[#00D4FF] to-[#008FED] rounded-2xl shadow-[0_12px_35px_rgba(0,212,255,0.2)] hover:scale-105 transition-transform duration-500 mb-6 z-10">
            <Heart className="w-7 h-7 text-[#071426] fill-current animate-pulse" />
          </div>

          {/* Immersive text quotes editorial layout */}
          <p className="text-sm sm:text-lg leading-relaxed text-slate-700 italic font-normal z-10 max-w-2xl font-display">
            &ldquo;The range of services offered by Modern Technology is diverse, catering to various design needs. Whether it&apos;s graphic design, web design, or branding, their team exhibits versatility and a knack for understanding the unique requirements of each project.&rdquo;
          </p>

          {/* Author info */}
          <div className="flex flex-col gap-1 mt-6 z-10">
            <h4 className="font-display text-base font-bold text-[#1E1A39] tracking-wide">
              T-zer Cabz
            </h4>
            <span className="text-[9px] text-[#00D4FF] font-extrabold uppercase tracking-widest font-mono bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-3 py-0.5 rounded-full">
              Customer
            </span>
          </div>
        </motion.div>

        {/* Separator line */}
        <span className="w-full h-px bg-slate-200 mt-16 mb-12" />

        {/* Dynamic reactive Client Logo nodes */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center max-w-3xl mx-auto">
          {partnerLogos.map((logo, idx) => (
            <PartnerLogoCard
              key={idx}
              name={logo.name}
              idx={idx}
              springX={springX}
              springY={springY}
            />
          ))}
        </div>

      </div>
    </section>
    </div>
  );
}
