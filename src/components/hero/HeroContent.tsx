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
      {/* Dynamic Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF2FF] text-[#0052FF] font-extrabold text-xs tracking-wide shadow-xs">
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
          {/* Dynamic Heading with balanced lines & line-height 1.15 */}
          <h1 className="mt-4 text-2xl font-extrabold leading-[1.18] sm:leading-[1.15] tracking-tight text-[#0F172A] sm:text-3xl lg:text-[2.4rem] font-sans">
            {service.heading.split('\n').map((line, i, arr) => (
              <span key={i} className="block text-[#0F172A]">
                {line}
                {i === arr.length - 1 && (
                  <span className="text-[#0052FF] font-extrabold ml-2 inline-block" style={{ color: "#0052FF", WebkitTextFillColor: "#0052FF" }}>
                    {service.highlight}
                  </span>
                )}
              </span>
            ))}
          </h1>

          {/* Dynamic Paragraph Description with max-w-[600px] and increased line-height */}
          <p className="mt-4 max-w-[580px] text-sm sm:text-[15px] leading-relaxed sm:leading-[1.7] text-slate-700 font-medium">
            {service.description}
          </p>

          {/* Dynamic CTA Buttons aligned on one line with equal height and padding */}
          <div className="mt-6 flex items-center gap-3.5">
            <a
              href={service.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2.5 h-11 rounded-xl bg-[#0052FF] hover:bg-[#0042D9] px-6 text-xs sm:text-sm font-extrabold text-white shadow-[0_6px_22px_rgba(0,82,255,0.32)] transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <span>{service.primaryCta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={service.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2.5 h-11 rounded-xl border-2 border-[#0052FF] bg-white px-6 text-xs sm:text-sm font-extrabold text-[#0052FF] hover:bg-blue-50/70 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <span>{service.secondaryCta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Dynamic Features Checklist with equal icon/text spacing and uniform font size */}
          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {service.features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0052FF] text-white text-[11px] font-bold shadow-xs">
                  ✓
                </span>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
