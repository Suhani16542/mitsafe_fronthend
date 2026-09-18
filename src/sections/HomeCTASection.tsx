"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function HomeCTASection() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 border border-red-500/25 shadow-[0_25px_60px_-15px_rgba(239,68,68,0.25)] text-center"
          style={{
            background: "linear-gradient(135deg, #070E24 0%, #0F1D4A 50%, #1A0B1A 100%)",
          }}
        >
          {/* Background Decorative Dot Grid / Mesh Texture */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.22) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Glowing Red & Deep Blue Ambient Blur Orbs */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-red-600/35 blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#305EFF]/35 blur-[90px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 rounded-full bg-red-500/20 blur-[80px] pointer-events-none" />

          {/* Inner Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 mb-5 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span
                className="text-xs sm:text-[13px] font-bold tracking-wide uppercase !text-white"
                style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}
              >
                Transform Your Business Today
              </span>
            </div>

            {/* Main Heading - Pure Solid White with explicit span overrides */}
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display leading-[1.2] mb-4 !text-white"
              style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}
            >
              <span style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}>
                Ready to Build Next-Gen Software with Mitsafe?
              </span>
            </h2>

            {/* Supporting Text - Pure Solid White */}
            <p
              className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mb-8 !text-white"
              style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}
            >
              <span style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF", opacity: 0.95 }}>
                Partner with our elite engineering team to develop high-performance web platforms, custom AI automation agents, and scalable cloud solutions tailored to your growth.
              </span>
            </p>

            {/* Single Clear CTA Button - Bold Red Gradient with Pure White Text */}
            <Link
              href="#quote"
              data-modal="quote"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-rose-500 font-extrabold text-sm sm:text-base shadow-[0_8px_30px_rgba(239,68,68,0.5)] hover:shadow-[0_12px_40px_rgba(239,68,68,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer border border-white/20 !text-white"
              style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}
            >
              <span style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}>Get Your Free Quote</span>
              <ArrowRight className="w-5 h-5 text-white transition-transform duration-200 group-hover:translate-x-1" style={{ color: "#FFFFFF", stroke: "#FFFFFF" }} />
            </Link>

            {/* Trust Highlights - Pure Solid White */}
            <div className="mt-8 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold !text-white">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}>NDA &amp; IP Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-red-400" />
                <span style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}>24-Hour Proposal Turnaround</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
