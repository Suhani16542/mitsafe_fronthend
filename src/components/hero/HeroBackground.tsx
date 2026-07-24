"use client";

import { motion } from "framer-motion";
import { ServiceCategory } from "@/types/hero";

const CATEGORY_HUES: Record<ServiceCategory, { from: string; to: string }> = {
  infra: { from: "#38BDF8", to: "#155EEF" },
  build: { from: "#155EEF", to: "#6366F1" },
  growth: { from: "#6366F1", to: "#38BDF8" },
};

export function HeroBackground({ category }: { category: ServiceCategory }) {
  const hues = CATEGORY_HUES[category];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* faint dot grid, matches "premium SaaS" texture without being loud */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* aurora blob, hue animates smoothly between slide categories */}
      <motion.div
        className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full blur-3xl"
        animate={{
          background: `radial-gradient(circle, ${hues.from}33, ${hues.to}00 70%)`,
        }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[5%] h-[420px] w-[420px] rounded-full blur-3xl"
        animate={{
          background: `radial-gradient(circle, ${hues.to}26, ${hues.to}00 70%)`,
        }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.1 }}
      />

      {/* bottom wave, echoes reference's bottom curve but simplified */}
      <svg
        className="absolute bottom-0 left-0 w-full text-blue-50"
        viewBox="0 0 1440 160"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: 140 }}
      >
        <path
          d="M0,96 C240,150 480,20 720,48 C960,76 1200,140 1440,80 L1440,160 L0,160 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
