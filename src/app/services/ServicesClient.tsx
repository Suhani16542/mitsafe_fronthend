"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Gamepad, 
  CreditCard, 
  Palette, 
  BookOpen, 
  Briefcase, 
  CheckCircle,
  Cpu,
  Layers,
  Cloud,
  TrendingUp
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import GlowCard from "@/components/GlowCard";
import GradientButton from "@/components/GradientButton";
import { servicesData } from "@/data/services";
import LottieAnimation from "@/components/LottieAnimation";

const iconMap: Record<string, React.ComponentType<any>> = {
  Code: Code,
  Smartphone: Smartphone,
  Gamepad: Gamepad,
  CreditCard: CreditCard,
  Palette: Palette,
  BookOpen: BookOpen,
  Briefcase: Briefcase,
  Cpu: Cpu,
  Bot: Cpu,
  Layers: Layers,
  Cloud: Cloud,
  TrendingUp: TrendingUp,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function ServicesClient() {
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const [dotLottie, setDotLottie] = useState<any>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!dotLottie) return;

    dotLottie.setFrame(43);
    dotLottie.play();

    const onFrameChange = ({ currentFrame }: { currentFrame: number }) => {
      const nextExpanded = currentFrame >= 74 || currentFrame <= 35;
      setIsExpanded((prev) => {
        if (prev !== nextExpanded) {
          return nextExpanded;
        }
        return prev;
      });
    };

    dotLottie.addEventListener("frame", onFrameChange);

    return () => {
      dotLottie.removeEventListener("frame", onFrameChange);
    };
  }, [dotLottie]);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 relative cosmic-services-wrapper text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 flex flex-col items-center gap-3">
          <span className="text-[10px] font-bold tracking-widest text-[#2563FF] uppercase font-mono bg-[#2563FF]/5 border border-[#2563FF]/15 px-3 py-1 rounded-full">
            Core Capabilities
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            What We <span className="font-black" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Engineer</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-normal">
            We specialize in writing premium TypeScript platforms, building custom LLM agents, and managing server clusters.
          </p>
        </div>

        {/* Centered Network Icon Animation */}
        <div className="flex justify-center items-center w-full mt-8 mb-6">
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] flex items-center justify-center relative bg-[#2563FF]/5 rounded-full shadow-sm border border-[#2563FF]/15 backdrop-blur-sm p-4">
            <LottieAnimation
              src="/animations/Network icon.json"
              className="w-full h-full"
              autoplay={true}
              loop={true}
              dotLottieRefCallback={(instance) => {
                setDotLottie(instance);
              }}
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          ref={gridRef}
          initial="hidden"
          animate={isGridInView && isExpanded ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {servicesData.map((srv, idx) => {
            const IconComp = iconMap[srv.iconName] || Code;
            return (
              <motion.div
                key={srv.slug}
                custom={idx}
                variants={cardVariants}
              >
                <div className="flex flex-col gap-6 justify-between bg-white border border-slate-200 rounded-3xl p-8 shadow-sm h-full hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-4">
                    
                    {/* Top */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#2563FF]/10 flex items-center justify-center text-[#1D4ED8] shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-[#0F172A]">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mt-2 font-normal">
                      {srv.shortDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 border-t border-slate-100 pt-4">
                      {srv.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">
                      Process: {srv.process.length} steps
                    </span>
                    
                    <Link
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] hover:text-[#1D4ED8]/80 transition-colors duration-200 group/link cursor-pointer"
                    >
                      View Process & Stats
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center flex flex-col items-center gap-6 bg-white border border-slate-200 p-10 rounded-[32px] shadow-sm">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
            Need a bespoke <span style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>custom solution</span> designed? Let's discuss.
          </h3>
          <GradientButton href="/contact">
            Speak with an Architect
          </GradientButton>
        </div>

      </div>
    </div>
  );
}
