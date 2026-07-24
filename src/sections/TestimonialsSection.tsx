"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

const partnerLogos = [
  { name: "SPMA" },
  { name: "BYTES29" },
  { name: "T-MOBILE" },
  { name: "RED LABEL" },
  { name: "MITSAFE" },
  { name: "MICROSOFT" }
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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

  // Duplicate items to ensure seamless wrapping inside the infinite marquee loop
  const marqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <div className="w-full px-6 lg:px-8">
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-white py-12 md:py-16 relative overflow-hidden border border-slate-100 rounded-[2.5rem] max-w-6xl mx-auto font-sans shadow-sm"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center mb-10 flex flex-col items-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 font-display shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>CLIENT REVIEWS</span>
            </motion.div>
            
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-4xl sm:text-5xl font-extrabold text-black tracking-[-0.03em] leading-tight"
            >
              When Our <span className="text-[#2563FF] inline-block" style={{ color: "#2563FF", WebkitTextFillColor: "#2563FF", background: "none" }}>Clients Say</span>
            </motion.h2>
          </div>

          {/* Cinematic Testimonial Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl text-center flex flex-col items-center bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-md group overflow-hidden"
          >
            {/* Top blue accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2563FF]" />

            {/* Background quotes */}
            <div className="absolute -top-6 left-6 w-24 h-24 text-slate-100 select-none pointer-events-none font-serif text-[14rem] leading-none">
              &ldquo;
            </div>

            {/* Centered Heart Graphic Icon */}
            <div className="w-14 h-14 relative flex items-center justify-center bg-blue-50 border border-blue-100 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-500 mb-6 z-10">
              <Heart className="w-7 h-7 text-[#2563FF] fill-current animate-pulse" />
            </div>

            {/* Immersive text quote */}
            <p className="text-base sm:text-xl leading-relaxed text-slate-800 italic font-normal z-10 max-w-2xl font-display">
              &ldquo;The range of services offered by Modern Technology is diverse, catering to various design needs. Whether it&apos;s graphic design, web design, or branding, their team exhibits versatility and a knack for understanding the unique requirements of each project.&rdquo;
            </p>

            {/* Author info */}
            <div className="flex flex-col items-center gap-2 mt-6 z-10">
              <h4 className="font-display text-lg font-bold text-slate-900 tracking-wide">
                T-zer Cabz
              </h4>
              <span className="text-[10px] text-[#2563FF] font-extrabold uppercase tracking-widest font-mono bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
                Customer
              </span>
            </div>
          </motion.div>

          {/* Separator line */}
          <span className="w-full h-px bg-slate-100 mt-10 mb-8" />

          {/* Infinite Horizontal Client Logos Marquee */}
          <div className="w-full overflow-hidden py-4 select-none relative z-10 max-w-4xl mx-auto">
            <div className="flex w-max">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity,
                }}
                className="flex whitespace-nowrap gap-6 pr-6"
              >
                {marqueeLogos.map((logo, idx) => (
                  <div key={idx} className="inline-block">
                    <div
                      className="min-w-[160px] max-w-[200px] py-4 px-6 bg-white hover:bg-[#F0F8FF] rounded-2xl border border-slate-200 shadow-sm hover:border-[#2563FF] hover:shadow-md transition-all duration-300 cursor-default flex items-center justify-center"
                    >
                      {logo.name === "SPMA" && (
                        <span className="font-display text-base font-black tracking-widest text-[#2563FF] flex items-center gap-1.5 hover:animate-pulse">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#2563FF] animate-ping" />
                          SPMA
                        </span>
                      )}
                      {logo.name === "BYTES29" && (
                        <span className="font-display text-base font-black tracking-widest text-slate-800 flex items-center gap-1">
                          BYTES<span className="text-[#2563FF] font-black">29</span>
                        </span>
                      )}
                      {logo.name === "T-MOBILE" && (
                        <span className="font-display text-base font-black tracking-wider text-slate-800 flex items-center gap-0.5">
                          <span className="text-[#2563FF] font-black">T</span>-MOBILE
                        </span>
                      )}
                      {logo.name === "RED LABEL" && (
                        <span className="font-display text-base font-black tracking-widest text-slate-800 border-b-2 border-blue-600/30 pb-0.5">
                          RED LABEL
                        </span>
                      )}
                      {logo.name === "MITSAFE" && (
                        <span className="font-display text-base font-black tracking-widest text-[#2563FF] flex items-center gap-1">
                          MIT<span className="text-slate-800">SAFE</span>
                        </span>
                      )}
                      {logo.name === "MICROSOFT" && (
                        <span className="font-display text-base font-black tracking-wider text-slate-800">
                          MICROSOFT
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
