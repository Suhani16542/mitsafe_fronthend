"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Wait, Next.js Link is imported from "next/link", NOT "next/next/link"! Let's fix that.
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
import Button from "@/components/Button";
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

    // Set initial frame to 43 (where nodes are contracted at the center)
    dotLottie.setFrame(43);
    dotLottie.play();

    const onFrameChange = ({ currentFrame }: { currentFrame: number }) => {
      // Circles/nodes are contracted between frame 43 and 68.
      // Circles/nodes are expanded between frame 78 and 135, and 20 to 34.
      // Transition outwards happens between 68 and 78.
      // Transition inwards happens between 34 and 43.
      // We trigger expansion active state when currentFrame >= 74 || currentFrame <= 35.
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
    <div className="bg-white min-h-screen pt-32 pb-20 cyber-grid relative cosmic-services-wrapper">
      <div className="absolute inset-0 bg-white/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badge="Core Capabilities"
          title="What We Engineer"
          subtitle="We specialize in writing premium TypeScript platforms, building custom LLM agents, and managing server clusters."
          align="center"
        />

        {/* Centered Network Icon Animation */}
        <div className="flex justify-center items-center w-full mt-8 mb-6">
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] flex items-center justify-center relative bg-[#F3F0FA]/50 rounded-full shadow-sm border border-[#E5E2F0]/50 backdrop-blur-sm p-4">
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
                <GlowCard className="flex flex-col gap-6 justify-between bg-[#F3F0FA]/70 border-[#E5E2F0] h-full">
                  <div className="flex flex-col gap-4">
                    
                    {/* Top */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] shadow-[0_0_15px_rgba(0,200,255,0.4)] flex items-center justify-center text-white shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mt-2">
                      {srv.shortDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 border-t border-[#E5E2F0] pt-4">
                      {srv.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="pt-4 border-t border-[#E5E2F0] flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      Process: {srv.process.length} steps
                    </span>
                    
                    <Link
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED] hover:text-white transition-colors duration-200 group/link cursor-pointer"
                    >
                      View Process & Stats
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center flex flex-col items-center gap-6">
          <h3 className="font-display text-xl font-bold text-slate-900">
            Need a bespoke custom solution designed? Let's discuss.
          </h3>
          <Button href="/contact" variant="primary">
            Speak with an Architect
          </Button>
        </div>

      </div>
    </div>
  );
}
