"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroService } from "@/types/hero";

const containerVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

export function HeroContent({
  service,
}: {
  service: HeroService;
  index: number;
  total: number;
}) {
  return (
    <div className="relative z-10 max-w-xl">
      {/* Dynamic Pill Badge matching Image 1 styling */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF2FF] text-[#0052FF] font-extrabold text-xs tracking-wide shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
        <span>{service.badge}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          variants={containerVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Dynamic Heading with main text in black and highlight in blue */}
          <h1 className="mt-3 text-2xl font-extrabold leading-[1.18] tracking-tight text-[#0F172A] sm:text-3xl lg:text-[2.35rem] font-sans">
            {service.heading.split('\n').map((line, i, arr) => (
              <span key={i} className="block text-[#0F172A]">
                {line}
                {i === arr.length - 1 && (
                  <span className="text-[#0052FF] inline font-extrabold ml-2" style={{ color: "#0052FF", WebkitTextFillColor: "#0052FF" }}>
                    {service.highlight}
                  </span>
                )}
              </span>
            ))}
          </h1>

          {/* Dynamic Paragraph Description matching Image 1 styling */}
          <p className="mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
            {service.description}
          </p>

          {/* Dynamic CTA Buttons matching Image 1 styling */}
          <div className="mt-5 flex flex-wrap items-center gap-3.5">
            <a
              href={service.primaryCta.href}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-[#0052FF] hover:bg-[#0042D9] px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-[0_6px_22px_rgba(0,82,255,0.32)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{service.primaryCta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={service.secondaryCta.href}
              className="group inline-flex items-center gap-2.5 rounded-xl border-2 border-[#0052FF] bg-white px-6 py-3 text-xs sm:text-sm font-extrabold text-[#0052FF] hover:bg-blue-50/70 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{service.secondaryCta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Dynamic Features Checklist with blue check icons */}
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
            {service.features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0052FF] text-white text-[11px] font-extrabold shadow-sm">
                  ✓
                </span>
                {f.label}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
