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
    <div className="relative z-10 max-w-xl w-full pb-2">
      {/* Dynamic Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF2FF] text-[#0052FF] font-extrabold text-xs tracking-wide shadow-xs">
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
          {/* Dynamic 2-Line Heading aligned with Navbar grid */}
          <h1 className="mt-2.5 text-2xl font-extrabold leading-[1.16] sm:leading-[1.14] tracking-tight text-[#0F172A] sm:text-3xl lg:text-[2.35rem] xl:text-[2.65rem] font-sans">
            <span className="block text-[#0F172A]">
              {service.heading}
            </span>
            <span className="text-[#0052FF] font-extrabold block mt-0.5" style={{ color: "#0052FF", WebkitTextFillColor: "#0052FF" }}>
              {service.highlight}
            </span>
          </h1>

          {/* Dynamic Paragraph Description with compact line-height */}
          <p className="mt-3 max-w-[510px] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed sm:leading-[1.6] text-slate-700 font-medium">
            {service.description}
          </p>

          {/* Dynamic CTA Buttons */}
          <div className="mt-4 flex items-center gap-3.5">
            <a
              href={service.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2.5 h-10 sm:h-11 rounded-xl bg-[#0052FF] hover:bg-[#0042D9] px-5 sm:px-6 text-xs sm:text-sm font-extrabold text-white shadow-[0_6px_22px_rgba(0,82,255,0.25)] transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <span>{service.primaryCta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={service.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2.5 h-10 sm:h-11 rounded-xl border-2 border-[#0052FF] bg-white px-5 sm:px-6 text-xs sm:text-sm font-extrabold text-[#0052FF] hover:bg-blue-50/70 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <span>{service.secondaryCta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Dynamic Features Checklist: 2+2 Layout Grid (2 on top, 2 on bottom) */}
          <ul className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-6 gap-y-2.5 max-w-[500px]">
            {service.features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-2 text-xs sm:text-[13.5px] font-semibold text-slate-800"
              >
                <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#0052FF] text-white text-[10px] font-bold shadow-xs">
                  ✓
                </span>
                <span className="truncate">{f.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
