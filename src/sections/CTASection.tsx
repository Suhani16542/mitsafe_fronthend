"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquareIcon } from "lucide-react";
import Button from "@/components/Button";
import MovingStrip from "@/components/MovingStrip";

export default function CTASection() {
  const stripKeywords = [
    "Sub-Second Loads",
    "Autoscaling Nodes",
    "LLM Orchestrations",
    "Zero-Trust Blueprints",
    "TypeScript Standards",
    "Technical Telemetry",
  ];

  return (
    <section className="bg-white pb-12 lg:pb-16 relative overflow-hidden border-t border-[#E5E2F0] pt-8 lg:pt-10 flex flex-col gap-10">
      
      {/* Horizonal Moving Ribbon Ticker */}
      <MovingStrip items={stripKeywords} direction="right" speed={32} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* Glow Panel container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-16 text-center shadow-md"
        >
          {/* Cyber grid overlays */}
          <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/5 px-4.5 py-1.5 text-xs md:text-sm font-semibold tracking-widest text-[#7C3AED] uppercase font-display mx-auto">
            Get an Architecture Blueprint
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-3xl mx-auto">
            Ready to Build Your <span className="text-gradient-cyan-blue">Futuristic Web Stack</span>?
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Collaborate with our engineering team on robust frameworks, custom AI agents, or automated cloud scaling. We map out full architecture designs with no upfront commitments.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Architecture Session
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              icon={<MessageSquareIcon className="w-4 h-4 text-[#7C3AED]" />}
            >
              Talk with an Engineer
            </Button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
