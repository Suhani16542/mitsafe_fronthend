"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Check } from "lucide-react";

const bulletPoints = [
  "Professional Development",
  "High-End Client Support",
  "Responsive Layout Formats",
  "Pleasant User Experience"
];

const statMetrics = [
  {
    val: 35,
    suffix: "",
    label: "Award winning games developed"
  },
  {
    val: 487,
    suffix: "+",
    label: "Completed Projects with client satisfaction"
  },
  {
    val: 350,
    suffix: "+",
    label: "Happy Clients who love working with us"
  }
];

function FloatingDisk({
  val,
  suffix,
  label,
  index,
  yBobRange,
  duration,
  delay,
}: {
  val: number;
  suffix: string;
  label: string;
  index: number;
  yBobRange: number;
  duration: number;
  delay: number;
}) {
  const diskRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(diskRef, { once: false, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, val, {
        duration: 2.0,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Math.round(value));
        },
      });
      return () => controls.stop();
    } else {
      setCount(0);
    }
  }, [isInView, val]);

  const zIndex = 30 - index * 10;
  const topPosition = index === 0 ? "top-0" : index === 1 ? "top-[110px] sm:top-[130px]" : "top-[220px] sm:top-[260px]";

  return (
    <motion.div
      ref={diskRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ zIndex }}
      className={`absolute left-0 right-0 mx-auto w-full max-w-[340px] sm:max-w-[420px] ${topPosition}`}
    >
      <motion.div
        animate={{
          y: [0, -yBobRange, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        className="w-full aspect-[2.8/1] rounded-full relative group cursor-pointer"
      >
        {/* Glow Shadow beneath the disk */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#00D4FF] to-[#008FED] blur-lg opacity-25 translate-y-4 scale-[0.93] transition-opacity duration-500 group-hover:opacity-40" />

        {/* Outer glowing rim */}
        <div className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-b from-[#00D4FF] via-[#00D4FF] to-[#008FED] shadow-[0_15px_35px_rgba(0,212,255,0.15)] transition-shadow duration-500 group-hover:shadow-[0_20px_45px_rgba(0,212,255,0.35)]" />

        {/* Dark inner face */}
        <div className="absolute inset-[1.5px] rounded-full bg-gradient-to-b from-white to-[#F5F9FF] dark:from-[#071426] dark:to-[#0B1A2E] flex flex-col items-center justify-center px-8 py-4 overflow-hidden border border-[#008FED]/10 dark:border-white/5">
          {/* Subtle gradient overlay highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Number */}
          <span className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,143,237,0.15)] dark:drop-shadow-[0_2px_8px_rgba(0,212,255,0.3)]">
            <span>{count}</span>
            <span className="text-[#008FED] dark:text-[#00D4FF]">{suffix}</span>
          </span>

          {/* Label (Caps and spaced) */}
          <p className="font-display text-[9px] sm:text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest text-center mt-1 sm:mt-1.5 max-w-[220px] leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
            {label}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#F3F0FA] py-24 md:py-32 relative overflow-hidden border-t border-purple-50">
      {/* 5 Vertical Background Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.3]">
        <div className="w-[1px] bg-slate-200 h-full" />
        <div className="w-[1px] bg-slate-200 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-200 h-full" />
        <div className="w-[1px] bg-slate-200 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-200 h-full" />
      </div>

      {/* Decorative Blob */}
      <div className="absolute bottom-[10%] right-0 w-[450px] h-[450px] rounded-full bg-[#00D4FF]/3 blur-[120px] pointer-events-none" />

      {/* Floating Outlined Ring */}
      <motion.div
        className="absolute rounded-full border border-[#00D4FF]/8 pointer-events-none z-0"
        style={{ width: "200px", height: "200px", left: "5%", bottom: "15%" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: About/Story content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 px-4.5 py-1 text-xs font-bold uppercase tracking-wider text-[#00D4FF] font-display shadow-sm"
            >
              ABOUT US
            </motion.div>

            {/* Title with Horizontal Slide + Fade In */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1A39] leading-tight tracking-[-0.03em] mb-6"
            >
              MT Games with latest technology <br className="hidden md:inline" />
              and high end support
            </motion.h2>

            {/* Description with Horizontal Slide + Fade In */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium mb-8 max-w-xl"
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </motion.p>

            {/* Checklist with Horizontal Slide + Fade In */}
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10"
            >
              {bulletPoints.map((pt, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white font-display">
                    {pt}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Button with Horizontal Slide + Fade In */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center font-display font-bold text-sm bg-[#00D4FF] hover:bg-[#00BCE0] text-[#071426] px-7 py-3.5 rounded-full shadow-[0_6px_22px_rgba(0,212,255,0.25)] hover:shadow-[0_10px_28px_rgba(0,212,255,0.4)] transition-all duration-300"
            >
              Talk to expert
            </motion.a>
          </div>

          {/* Right Column: 3D Stacked Floating Disks */}
          <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[480px] mt-12 lg:mt-0">
            {statMetrics.map((stat, idx) => (
              <FloatingDisk
                key={idx}
                val={stat.val}
                suffix={stat.suffix}
                label={stat.label}
                index={idx}
                yBobRange={idx === 0 ? 12 : idx === 1 ? 15 : 10}
                duration={idx === 0 ? 4.8 : idx === 1 ? 5.6 : 5.2}
                delay={idx === 0 ? 0 : idx === 1 ? 0.4 : 0.8}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
