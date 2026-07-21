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

function Counter({ value, trigger }: { value: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (trigger) {
      const controls = animate(0, value, {
        duration: 2.0,
        ease: "easeOut",
        onUpdate: (val) => {
          setCount(Math.round(val));
        },
      });
      return () => controls.stop();
    } else {
      setCount(0);
    }
  }, [trigger, value]);

  return <>{count}</>;
}

export default function WhyChooseUs() {
  const rightColRef = useRef<HTMLDivElement>(null);
  const isRightColInView = useInView(rightColRef, { once: false, amount: 0.2 });

  return (
    <section id="about" className="bg-[#F3F0FA] dark:bg-[#071426] pt-12 md:pt-16 pb-12 md:pb-16 relative overflow-hidden border-t border-purple-50 dark:border-white/5">
      {/* 5 Vertical Background Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.3] dark:opacity-[0.15]">
        <div className="w-[1px] bg-slate-200 dark:bg-white/10 h-full" />
        <div className="w-[1px] bg-slate-200 dark:bg-white/10 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-200 dark:bg-white/10 h-full" />
        <div className="w-[1px] bg-slate-200 dark:bg-white/10 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-200 dark:bg-white/10 h-full" />
      </div>

      {/* Premium ambient glows */}
      <div className="absolute top-[15%] left-[-100px] w-[350px] h-[350px] rounded-full bg-[#00D4FF]/4 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[15%] right-[-100px] w-[450px] h-[450px] rounded-full bg-[#7C3AED]/3 blur-[130px] pointer-events-none -z-10" />

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
              initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 dark:bg-[#00D4FF]/10 px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#00D4FF] font-display shadow-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00D4FF]"></span>
              </span>
              ABOUT US
            </motion.div>

            {/* Title with Horizontal Slide + Fade In */}
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-white leading-tight tracking-[-0.03em] mb-6"
            >
              <span className="relative inline-block pb-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-[#00D4FF]">MT Games</span>
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2563FF] to-[#00D4FF] rounded-full animate-pulse" />
              </span>{" "}
              with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-[#00D4FF]">latest technology</span>{" "}
              <br className="hidden md:inline" />
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-[#00D4FF]">high end support</span>
            </motion.h2>

            {/* Description with Horizontal Slide + Fade In */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-slate-650 dark:text-slate-350 leading-relaxed font-medium mb-8 max-w-xl"
            >
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </motion.p>

            {/* Checklist with Horizontal Slide + Fade In */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10"
            >
              {bulletPoints.map((pt, idx) => (
                <li
                  key={idx}
                  className="bg-white/40 dark:bg-slate-900/30 border border-slate-200/40 dark:border-white/5 rounded-2xl p-4 flex items-center gap-3 transition-all duration-350 ease-out group hover:-translate-y-1.5 hover:bg-blue-50/20 dark:hover:bg-blue-950/15 hover:border-[#2563FF] hover:shadow-[0_8px_20px_rgba(37,99,255,0.08)] cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover:bg-[#2563FF]/15 group-hover:border-[#2563FF] group-hover:shadow-[0_0_8px_rgba(37,99,255,0.3)] transition-all duration-350">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 font-display">
                    {pt}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Button with Horizontal Slide + Fade In */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center font-display font-bold text-sm bg-gradient-to-r from-[#00D4FF] to-[#008FED] hover:from-[#00E5FF] hover:to-[#008FED]/90 text-white px-7 py-3.5 rounded-full shadow-[0_4px_14px_rgba(0,212,255,0.25)] hover:shadow-[0_8px_24px_rgba(0,212,255,0.45)] transition-all duration-300 border border-transparent cursor-pointer"
            >
              Talk to expert
            </motion.a>
          </div>

          {/* Right Column: Premium Staggered Glassmorphic Stats Deck Grid */}
          <div className="lg:col-span-6 relative w-full z-10" ref={rightColRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative w-full">
              
              {/* Card 1: Award winning games developed */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-1 bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/50 dark:border-white/10 p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-[#00D4FF]/40 group flex flex-col justify-between h-[200px]"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full flex flex-col justify-between"
                >
                  {/* Visual SVG Gamepad Controller */}
                  <div className="w-12 h-12 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] border border-[#00D4FF]/25 shadow-[0_4px_12px_rgba(0,212,255,0.15)] group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#00D4FF] drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="6" width="20" height="12" rx="4" />
                      <circle cx="7" cy="12" r="1.5" fill="currentColor" />
                      <path d="M6 12h2 M7 11v2" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="15.5" cy="10.5" r="1" fill="currentColor" />
                      <circle cx="18" cy="13" r="1" fill="currentColor" />
                      <path d="M11 9h2 M11 15h2" strokeLinecap="round" />
                    </svg>
                  </div>
                  
                  <div className="flex flex-col gap-1 text-left">
                    <span className="font-display text-4xl font-extrabold text-[#1E1A39] dark:text-white tracking-tight">
                      <Counter value={statMetrics[0].val} trigger={isRightColInView} />
                      <span className="text-[#008FED] dark:text-[#00D4FF]">{statMetrics[0].suffix}</span>
                    </span>
                    <p className="text-xs sm:text-[13px] font-bold text-slate-500 dark:text-slate-400 leading-snug">
                      {statMetrics[0].label}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2: Completed Projects */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-1 bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/50 dark:border-white/10 p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-[#00D4FF]/40 group flex flex-col justify-between h-[200px]"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="w-full h-full flex flex-col justify-between"
                >
                  {/* Visual SVG Line Graph Trend */}
                  <div className="w-full flex justify-start items-center">
                    <svg className="w-28 h-12 text-[#008FED] dark:text-[#00D4FF] overflow-visible" viewBox="0 0 100 40" fill="none">
                      <defs>
                        <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="chart-line" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#008FED" />
                          <stop offset="100%" stopColor="#00D4FF" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 35 Q 20 28 40 22 T 80 8 L 100 5 L 100 40 L 0 40 Z" fill="url(#chart-glow)" />
                      <motion.path
                        d="M 0 35 Q 20 28 40 22 T 80 8 L 100 5"
                        stroke="url(#chart-line)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={isRightColInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                      />
                      <circle cx="100" cy="5" r="2.5" fill="#00D4FF" />
                      <circle cx="100" cy="5" r="6" stroke="#00D4FF" strokeWidth="1" fill="none" className="animate-ping" style={{ transformOrigin: "100px 5px" }} />
                    </svg>
                  </div>
                  
                  <div className="flex flex-col gap-1 text-left">
                    <span className="font-display text-4xl font-extrabold text-[#1E1A39] dark:text-white tracking-tight">
                      <Counter value={statMetrics[1].val} trigger={isRightColInView} />
                      <span className="text-[#008FED] dark:text-[#00D4FF]">{statMetrics[1].suffix}</span>
                    </span>
                    <p className="text-xs sm:text-[13px] font-bold text-slate-500 dark:text-slate-400 leading-snug">
                      {statMetrics[1].label}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3: Happy Clients */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-1 sm:col-span-2 bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/50 dark:border-white/10 p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-[#00D4FF]/40 group flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                >
                  <div className="flex flex-col gap-1 text-left">
                    <span className="font-display text-4xl font-extrabold text-[#1E1A39] dark:text-white tracking-tight">
                      <Counter value={statMetrics[2].val} trigger={isRightColInView} />
                      <span className="text-[#008FED] dark:text-[#00D4FF]">{statMetrics[2].suffix}</span>
                    </span>
                    <p className="text-xs sm:text-[13px] font-bold text-slate-500 dark:text-slate-400 leading-snug max-w-xs">
                      {statMetrics[2].label}
                    </p>
                  </div>

                  {/* Visual Avatar Cluster */}
                  <div className="flex -space-x-3 overflow-hidden select-none shrink-0 group-hover:translate-x-1.5 transition-transform duration-300">
                    <div className="inline-block h-9 w-9 rounded-full border-2 border-white dark:border-[#071426] bg-gradient-to-tr from-[#00D4FF] to-[#008FED] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">JD</div>
                    <div className="inline-block h-9 w-9 rounded-full border-2 border-white dark:border-[#071426] bg-gradient-to-tr from-[#7C3AED] to-[#00D4FF] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">AM</div>
                    <div className="inline-block h-9 w-9 rounded-full border-2 border-white dark:border-[#071426] bg-gradient-to-tr from-[#F5A623] to-[#7C3AED] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">SR</div>
                    <div className="inline-block h-9 w-9 rounded-full border-2 border-white dark:border-[#071426] bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[9px] font-extrabold text-slate-600 dark:text-slate-350 shadow-sm">+350</div>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
