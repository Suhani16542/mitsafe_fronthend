"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { Check, ArrowRight, MessageSquare, ShieldCheck, Star, Zap, Sparkles, Layers, Cpu, HeartHandshake, PhoneCall } from "lucide-react";
import Button from "@/components/Button";

interface LocalParticle {
  id: number;
  shape: string;
  color: string;
  size: number;
  left: number;
  top: number;
  xEnd: number;
  yEnd: number;
  rotEnd: number;
  duration: number;
  delay: number;
  opacity: number;
}

const localColors = ["#2563FF", "#5EC8FF", "#A855F7", "#FF4FA2", "#B8E6FF"];
const localShapes = ["circle", "dot", "line", "star", "plus", "outline-circle", "diamond"];

function LocalParticleShape({ shape, color }: { shape: string; color: string }) {
  switch (shape) {
    case "circle":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill={color}>
          <circle cx="4" cy="4" r="4" />
        </svg>
      );
    case "dot":
      return (
        <svg width="100%" height="100%" viewBox="0 0 4 4" fill={color}>
          <circle cx="2" cy="2" r="2" />
        </svg>
      );
    case "line":
      return (
        <svg width="100%" height="100%" viewBox="0 0 12 4" stroke={color} strokeWidth="2.2" strokeLinecap="round">
          <line x1="1" y1="2" x2="11" y2="2" />
        </svg>
      );
    case "star":
      return (
        <svg width="100%" height="100%" viewBox="0 0 10 10" fill={color}>
          <path d="M5,0 L6.2,3.8 L10,5 L6.2,6.2 L5,10 L3.8,6.2 L0,5 L3.8,3.8 Z" />
        </svg>
      );
    case "plus":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" stroke={color} strokeWidth="2">
          <line x1="4" y1="0" x2="4" y2="8" />
          <line x1="0" y1="4" x2="8" y2="4" />
        </svg>
      );
    case "outline-circle":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" stroke={color} strokeWidth="1.8">
          <circle cx="4" cy="4" r="3.2" />
        </svg>
      );
    case "diamond":
      return (
        <svg width="100%" height="100%" viewBox="0 0 8 8" fill={color}>
          <polygon points="4,0 8,4 4,8 0,4" />
        </svg>
      );
    default:
      return null;
  }
}

// Scroll Reveal Helper
function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down" | "zoom";
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -50, filter: "blur(8px)" };
      case "right":
        return { opacity: 0, x: 50, filter: "blur(8px)" };
      case "up":
        return { opacity: 0, y: 40, filter: "blur(8px)" };
      case "down":
        return { opacity: 0, y: -40, filter: "blur(8px)" };
      case "zoom":
        return { opacity: 0, scale: 0.92, filter: "blur(8px)" };
      default:
        return { opacity: 0, filter: "blur(6px)" };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" } : getInitial()}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger Item variant for highlighting services
const highlightVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 100, damping: 16 }
  }
};

// Interactive Comparison Panel inside banner
function HighlightBox({
  title,
  desc,
  icon: Icon
}: {
  title: string;
  desc: string;
  icon: any;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  const springScale = useSpring(1, springConfig);
  const springYOffset = useSpring(0, springConfig);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = boxRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    springScale.set(1.015);
    springYOffset.set(-4);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    springScale.set(1);
    springYOffset.set(0);
  };

  const backgroundGlow = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(200px circle at ${x}px ${y}px, rgba(37, 99, 255, 0.16), transparent 85%)`
  );

  return (
    <motion.div
      ref={boxRef}
      variants={highlightVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        scale: springScale,
        y: springYOffset,
      }}
      className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 md:p-6 transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#2563FF]/40 dark:hover:border-[#00D4FF]/40 hover:bg-white/[0.06] flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-md shadow-black/20 group will-change-transform w-full"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: backgroundGlow,
          zIndex: 0,
        }}
      />
      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left font-sans">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2563FF] dark:text-[#00D4FF] group-hover:scale-105 group-hover:bg-[#2563FF]/10 group-hover:border-[#2563FF]/20 transition-all duration-300 shrink-0">
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
        </div>
        
        <div className="flex flex-col gap-1.5 mt-1">
          <h4 className="font-display font-black text-sm text-[#2563FF] dark:text-[#00D4FF] tracking-wider uppercase flex items-center justify-center sm:justify-start gap-2 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF] dark:bg-[#00D4FF] animate-pulse" />
            {title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-3 shrink-0 font-sans">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono border border-white/5 bg-white/5 px-3 py-1.5 rounded-full">
          Fully Included
        </span>
        <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold shadow-sm">
          <Check className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

// Immersive Interactive Pricing Card
interface PlanType {
  name: string;
  price: string;
  priceSubtitle: string;
  description: string;
  features: string[];
  isRecommended: boolean;
  badge: string;
}

const cardEntryVariants = {
  hidden: {
    opacity: 0,
    scale: 0.90,
    y: 50,
    filter: "blur(14px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 20,
      mass: 0.85
    }
  }
};

const checklistContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.25
    }
  }
};

const checklistItemVariants = {
  hidden: { opacity: 0, x: -10, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  }
};

function InteractivePricingCard({
  plan,
  index,
  onCtaClick
}: {
  plan: PlanType;
  index: number;
  onCtaClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Custom offsets for desktop 3D deck look
  const getDeckTransforms = () => {
    if (plan.isRecommended) {
      return {
        desktopLift: -16,
        desktopScale: 1.05
      };
    }
    return {
      desktopLift: 0,
      desktopScale: 0.96
    };
  };

  const deck = getDeckTransforms();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const liftY = useMotionValue(deck.desktopLift);
  const scale = useMotionValue(1);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const springTiltX = useSpring(tiltX, { damping: 22, stiffness: 180 });
  const springTiltY = useSpring(tiltY, { damping: 22, stiffness: 180 });
  const springLiftY = useSpring(liftY, { damping: 20, stiffness: 150 });
  const springScale = useSpring(scale, { damping: 20, stiffness: 180 });
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    tiltX.set(((y - centerY) / centerY) * -4);
    tiltY.set(((x - centerX) / centerX) * 4);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    liftY.set(deck.desktopLift - 14);
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    liftY.set(deck.desktopLift);
    tiltX.set(0);
    tiltY.set(0);
    scale.set(1);
  };

  const backgroundGlow = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, ${
      plan.isRecommended ? "rgba(124, 58, 237, 0.16)" : "rgba(139, 92, 246, 0.11)"
    }, transparent 80%)`
  );

  return (
    <motion.div
      ref={cardRef}
      variants={cardEntryVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springTiltX,
        rotateY: springTiltY,
        y: springLiftY,
        scale: springScale
      }}
      animate={plan.isRecommended ? {
        boxShadow: [
          "0 20px 50px -12px rgba(124,58,237,0.06)",
          "0 20px 50px -12px rgba(124,58,237,0.16)",
          "0 20px 50px -12px rgba(124,58,237,0.06)"
        ]
      } : {}}
      transition={plan.isRecommended ? {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
      className={`relative overflow-hidden rounded-[32px] border p-8 flex flex-col justify-between backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-500 will-change-transform lg:origin-center ${
        plan.isRecommended
          ? "bg-white/95 dark:bg-[#0B1A2E]/95 border-[#2563FF]/45 dark:border-[#00D4FF]/45 shadow-xl hover:border-[#2563FF] dark:hover:border-[#00D4FF] hover:shadow-[0_30px_70px_-15px_rgba(37,99,255,0.24)] z-30 lg:scale-[1.05]"
          : index === 0
            ? "bg-white/70 dark:bg-[#0B1A2E]/70 border-slate-200 dark:border-white/5 shadow-md hover:border-[#2563FF]/25 dark:hover:border-[#00D4FF]/25 hover:shadow-[0_25px_60px_-15px_rgba(37,99,255,0.12)] z-10 lg:-rotate-2 lg:translate-x-3"
            : "bg-white/70 dark:bg-[#0B1A2E]/70 border-slate-200 dark:border-white/5 shadow-md hover:border-[#2563FF]/25 dark:hover:border-[#00D4FF]/25 hover:shadow-[0_25px_60px_-15px_rgba(37,99,255,0.12)] z-10 lg:rotate-2 lg:-translate-x-3"
      }`}
    >
      {/* Spotlight glow inside card */}
      <motion.div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: backgroundGlow,
          zIndex: 0,
        }}
      />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Header Block */}
        <div className="flex justify-between items-start gap-4 font-sans">
          <div className="flex flex-col text-left">
            <span className={`text-[10px] font-bold tracking-widest uppercase font-mono mb-1.5 ${
              plan.isRecommended ? "text-[#2563FF] dark:text-[#00D4FF]" : "text-slate-400"
            }`}>
              {plan.badge}
            </span>
            <h3 className="font-display font-extrabold text-2xl text-[#0F172A] dark:text-white tracking-tight leading-none font-sans">
              {plan.name}
            </h3>
          </div>
          {plan.isRecommended && (
            <span className="bg-gradient-to-r from-[#2563FF] to-[#00D4FF] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm animate-pulse font-sans">
              RECOMMENDED
            </span>
          )}
        </div>

        {/* Pricing Segment */}
        <div className="flex items-baseline text-left gap-2.5 py-5 border-y border-slate-100/80 font-sans">
          <span className="text-3xl sm:text-4xl font-display font-black text-[#2563FF] dark:text-[#00D4FF] tracking-tight font-sans">
            {plan.price}
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
            {plan.priceSubtitle}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed text-left font-normal font-sans">
          {plan.description}
        </p>

        {/* Bullet List Checklist with Stagger entries */}
        <div className="flex flex-col gap-4 text-left mt-2">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
            Key Features
          </span>
          <motion.ul 
            variants={checklistContainerVariants}
            className="flex flex-col gap-3"
          >
            {plan.features.map((feat, idx) => (
              <motion.li 
                key={idx}
                variants={checklistItemVariants}
                className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-350 font-normal leading-relaxed"
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                  plan.isRecommended 
                    ? "bg-[#2563FF]/10 border-[#2563FF]/25"
                    : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10"
                }`}>
                  <Check className={`w-3 h-3 ${
                    plan.isRecommended ? "text-[#2563FF] dark:text-[#00D4FF]" : "text-slate-500 dark:text-slate-400"
                  }`} />
                </div>
                <span>{feat}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div className="relative z-10 pt-8 border-t border-slate-100/80 mt-6 flex gap-3 font-sans">
        <Button
          onClick={onCtaClick}
          variant={plan.isRecommended ? "primary" : "outline"}
          className={`w-full !py-3.5 !text-xs !font-bold !rounded-2xl transition-all duration-300 ${
            plan.isRecommended
              ? "bg-gradient-to-r from-[#2563FF] to-[#00D4FF] text-white hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(37,99,255,0.3)]"
              : "border-slate-200 dark:border-white/15 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
          }`}
          icon={<MessageSquare className={`w-4 h-4 ${plan.isRecommended ? "text-white" : "text-[#2563FF] dark:text-[#00D4FF]"} transition-transform duration-300 group-hover/btn:scale-110`} />}
        >
          REGISTER NOW
        </Button>
        <Button
          onClick={onCtaClick}
          variant="outline"
          className="w-full justify-center group/btn border-slate-200 dark:border-white/15 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 hover:border-slate-300 dark:hover:border-white/25"
          icon={<MessageSquare className="w-4 h-4 text-[#2563FF] dark:text-[#00D4FF] transition-transform duration-300 group-hover/btn:scale-110" />}
        >
          CONTACT US
        </Button>
      </div>
    </motion.div>
  );
}

// Framer Motion Animation Variants for the Bento Grid section
const sectionContainerVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const bentoHeadingVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    filter: "blur(12px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

const bentoCardEntryVariants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: 25
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

const premiumSpringHover = {
  y: -7,
  scale: 1.02,
  boxShadow: "0 20px 40px -15px rgba(124, 58, 237, 0.12)",
  borderColor: "rgba(124, 58, 237, 0.25)",
  backgroundColor: "rgba(255, 255, 255, 0.95)"
};

const hoverSpringConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 24
};

// Sub-components for individual Bento Cards
function BentoCard1({ data }: { data: { title: string; text: string; icon: any } }) {
  const CardIcon = data.icon;
  return (
    <motion.div
      variants={bentoCardEntryVariants}
      whileHover={premiumSpringHover}
      transition={hoverSpringConfig}
      className="group relative overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-[#0B1A2E]/60 p-8 flex flex-col md:flex-row justify-between gap-8 transition-all duration-500 h-full min-h-[320px] lg:col-span-8 will-change-transform cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563FF]/3 via-transparent to-[#00D4FF]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="flex flex-col gap-4 text-left justify-center md:w-3/5 relative z-10">
        <div className="w-10 h-10 rounded-2xl bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 border border-[#2563FF]/10 dark:border-[#00D4FF]/20 flex items-center justify-center text-[#2563FF] dark:text-[#00D4FF] group-hover:scale-105 transition-transform duration-300 shrink-0">
          <CardIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
        </div>
        <h3 className="font-display font-bold text-xl text-[#0F172A] dark:text-white tracking-tight font-sans">
          {data.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal font-sans">
          {data.text}
        </p>
      </div>

      {/* Right Column Abstract SVG */}
      <div className="md:w-2/5 flex items-center justify-center relative min-h-[160px] md:min-h-auto">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f0f7_1px,transparent_1px),linear-gradient(to_bottom,#f1f0f7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:14px_24px] opacity-60 rounded-2xl" />
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-24 h-24 rounded-full border border-[#2563FF]/15 dark:border-white/5 flex items-center justify-center relative bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm shadow-inner"
        >
          <div className="w-16 h-16 rounded-full border border-dashed border-[#2563FF]/20 dark:border-white/10 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2563FF] to-[#00D4FF] opacity-25 blur-sm" />
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-1 left-1 w-2.5 h-2.5 rounded-full bg-[#2563FF]/80 dark:bg-[#00D4FF]/80"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function BentoCard2({ data }: { data: { title: string; text: string; icon: any } }) {
  const CardIcon = data.icon;
  return (
    <motion.div
      variants={bentoCardEntryVariants}
      whileHover={premiumSpringHover}
      transition={hoverSpringConfig}
      className="group relative overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-[#0B1A2E]/60 p-8 flex flex-col justify-between gap-6 transition-all duration-500 h-full min-h-[320px] lg:col-span-4 will-change-transform cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563FF]/3 via-transparent to-[#00D4FF]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="flex flex-col gap-4 text-left relative z-10">
        <div className="w-10 h-10 rounded-2xl bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 border border-[#2563FF]/10 dark:border-[#00D4FF]/20 flex items-center justify-center text-[#2563FF] dark:text-[#00D4FF] group-hover:scale-105 transition-transform duration-300 shrink-0">
          <CardIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
        </div>
        <h3 className="font-display font-bold text-xl text-[#0F172A] dark:text-white tracking-tight font-sans">
          {data.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-605 dark:text-slate-350 leading-relaxed font-normal font-sans">
          {data.text}
        </p>
      </div>

      {/* Highlight Badge */}
      <div className="relative z-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 px-5 py-3.5 rounded-2xl flex items-center justify-between shadow-inner font-sans transition-colors duration-300 group-hover:bg-slate-100/50 dark:group-hover:bg-slate-800/50">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
          Basic Rate
        </span>
        <span className="text-lg font-black text-[#2563FF] dark:text-[#00D4FF] transition-transform duration-300 group-hover:scale-105">
          ₹6,000
        </span>
      </div>
    </motion.div>
  );
}

function BentoCard3({ data }: { data: { title: string; text: string; icon: any } }) {
  const CardIcon = data.icon;
  return (
    <motion.div
      variants={bentoCardEntryVariants}
      whileHover={premiumSpringHover}
      transition={hoverSpringConfig}
      className="group relative overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-[#0B1A2E]/60 p-8 flex flex-col justify-between gap-6 transition-all duration-500 h-full min-h-[320px] lg:col-span-4 will-change-transform cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563FF]/3 via-transparent to-[#00D4FF]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="flex flex-col gap-4 text-left relative z-10">
        <div className="w-10 h-10 rounded-2xl bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 border border-[#2563FF]/10 dark:border-[#00D4FF]/20 flex items-center justify-center text-[#2563FF] dark:text-[#00D4FF] group-hover:scale-105 transition-transform duration-300 shrink-0">
          <CardIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
        </div>
        <h3 className="font-display font-bold text-xl text-[#0F172A] dark:text-white tracking-tight font-sans">
          {data.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal font-sans">
          {data.text}
        </p>
      </div>

      {/* Enterprise Badges */}
      <div className="relative z-10 flex flex-wrap gap-2 font-sans">
        <span className="text-[9px] font-bold text-[#2563FF] dark:text-[#00D4FF] border border-[#2563FF]/15 dark:border-[#00D4FF]/25 bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 px-3 py-1.5 rounded-full uppercase tracking-wider transition-colors duration-300 group-hover:bg-[#2563FF]/10 dark:group-hover:bg-[#00D4FF]/20">
          Marketplaces
        </span>
        <span className="text-[9px] font-bold text-slate-500 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3 py-1.5 rounded-full uppercase tracking-wider transition-colors duration-300 group-hover:bg-slate-100 dark:group-hover:bg-white/10">
          Native Mobile
        </span>
      </div>
    </motion.div>
  );
}

function BentoCard4({ data }: { data: { title: string; text: string; icon: any } }) {
  const CardIcon = data.icon;
  return (
    <motion.div
      variants={bentoCardEntryVariants}
      whileHover={premiumSpringHover}
      transition={hoverSpringConfig}
      className="group relative overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-[#0B1A2E]/60 p-8 flex flex-col md:flex-row justify-between gap-8 transition-all duration-500 h-full min-h-[320px] lg:col-span-8 will-change-transform cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563FF]/3 via-transparent to-[#00D4FF]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="flex flex-col gap-4 text-left justify-center md:w-3/5 relative z-10">
        <div className="w-10 h-10 rounded-2xl bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 border border-[#2563FF]/10 dark:border-[#00D4FF]/20 flex items-center justify-center text-[#2563FF] dark:text-[#00D4FF] group-hover:scale-105 transition-transform duration-300 shrink-0">
          <CardIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
        </div>
        <h3 className="font-display font-bold text-xl text-[#0F172A] dark:text-white tracking-tight font-sans">
          {data.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal font-sans">
          {data.text}
        </p>
      </div>

      {/* Right Column Consultation Widgets */}
      <div className="md:w-2/5 flex flex-col justify-center gap-3 relative z-10 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 p-6 rounded-2xl shadow-inner font-sans min-h-[140px] md:min-h-auto transition-colors duration-300 group-hover:bg-slate-100/50 dark:group-hover:bg-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Check className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Dedicated Consultations</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Check className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Response &lt; 24 Hours</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [particles, setParticles] = useState<LocalParticle[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const count = 35;
    const newParticles: LocalParticle[] = [];
    for (let i = 0; i < count; i++) {
      const shape = localShapes[Math.floor(Math.random() * localShapes.length)];
      const color = localColors[Math.floor(Math.random() * localColors.length)];
      const size = 12 + Math.random() * 16;
      newParticles.push({
        id: i,
        shape,
        color,
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        xEnd: (Math.random() - 0.5) * 80,
        yEnd: -100 - Math.random() * 150,
        rotEnd: (Math.random() - 0.5) * 360,
        duration: 25 + Math.random() * 30,
        delay: -Math.random() * 50,
        opacity: 0.15 + Math.random() * 0.25,
      });
    }
    setParticles(newParticles);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
    }, 4000);
  };

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Structured plans data directly extracted from text content details
  const pricingPlans: PlanType[] = [
    {
      name: "Basic Website / Starter Project",
      price: "₹6,000",
      priceSubtitle: "Starting From",
      description: "Ideal for portfolio websites, landing pages, or simple informational websites searching for a professional digital layout.",
      features: [
        "Custom Website Design",
        "Fully Responsive Web Layouts",
        "Portfolio & Landing Layouts",
        "Standard Web Animations",
        "Clean Speed Architecture",
        "Full Satisfaction & Refund Support"
      ],
      isRecommended: false,
      badge: "STARTER",
    },
    {
      name: "Professional / E-Commerce",
      price: "Flexible Rate",
      priceSubtitle: "Based on complexity & features",
      description: "Ideal for growing businesses requiring custom backends, databases, transactional gateways, and dynamic workflows.",
      features: [
        "Custom Administrative Dashboards",
        "Secure Payment Gateway Sinks",
        "Online Booking & Reservation logic",
        "Robust E-commerce Integrations",
        "Premium visual transitions & physics",
        "Custom API integration channels"
      ],
      isRecommended: true,
      badge: "MOST POPULAR",
    },
    {
      name: "Enterprise Software / SaaS Platforms",
      price: "Custom Project Scale",
      priceSubtitle: "Scales up to ₹6,000,000+",
      description: "Fully customized architectures, native mobile apps, multi-tenant SaaS products, and comprehensive organizational systems.",
      features: [
        "Advanced Corporate Web Portals",
        "Multi-Vendor Marketplace Systems",
        "Android & iOS App Integrations",
        "High-Grade Enterprise Software",
        "School ERP & School HRM Systems",
        "CRM Custom Dashboard Panels"
      ],
      isRecommended: false,
      badge: "ENTERPRISE",
    }
  ];

  // Grouped paragraphs preserving 100% of the original text, mapped to 4 content blocks
  const blocksData = [
    {
      title: "Complete IT Solutions",
      text: "Our company provides complete IT solutions for businesses, startups, brands, and individuals looking to build a strong digital presence. We specialize in website development, mobile application development, e-commerce platforms, custom software solutions, UI/UX design, and maintenance services. Whether you need a simple business website or a fully customized enterprise-level application, our team is ready to deliver the right solution based on your requirements and budget.",
      icon: Layers,
    },
    {
      title: "Flexible Pricing & Starter Cost",
      text: "Our pricing structure is flexible and depends on the project complexity, features, design requirements, integrations, platform selection, and overall development timeline. Basic websites and starter projects begin from ₹6,000, which is ideal for portfolio websites, landing pages, or simple informational websites. As the project requirements increase with advanced features such as admin panels, payment gateways, booking systems, custom dashboards, API integrations, animations, or e-commerce functionality, the pricing range may increase accordingly.",
      icon: Sparkles,
    },
    {
      title: "Enterprise Solutions & Platforms",
      text: "For advanced business portals, enterprise software, multi-vendor marketplaces, mobile applications for Android and iOS, SaaS platforms, or large-scale custom development projects, the cost can go up to ₹6,000,000 or more depending on the level of customization, scalability, and technologies involved. Every project is carefully analyzed to provide the most efficient, scalable, and cost-effective solution for our clients.",
      icon: Cpu,
    },
    {
      title: "Personalized Consultation & Support",
      text: "We believe every business has unique requirements, which is why we offer personalized consultation and project planning before starting development. Our team focuses on quality, performance, security, user experience, and long-term support to ensure the final product meets your business goals successfully. If you are planning to develop a website, mobile app, software, or any digital platform, we encourage you to register and connect with us. Share your project requirements with our experts, and we will guide you with the best possible solution, suitable technologies, estimated timeline, and pricing according to your needs. Please register and contact us today for more details, project discussions, and customized quotations. We are here to help you with the best IT services and solutions at every stage of your digital journey.",
      icon: HeartHandshake,
    }
  ];

  // Grid container stagger triggers
  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16
      }
    }
  };

  return (
    <div className="bg-[#FAFBFF] dark:bg-[#071426] text-[#0F172A] dark:text-white min-h-screen pt-24 pb-24 relative overflow-hidden pricing-page-container font-sans">
      
      {/* 5 Vertical Background Grid Lines matching landing page */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.3]">
        <div className="w-[1px] bg-slate-200 dark:bg-white/5 h-full" />
        <div className="w-[1px] bg-slate-200 dark:bg-white/5 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-200 dark:bg-white/5 h-full" />
        <div className="w-[1px] bg-slate-200 dark:bg-white/5 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-200 dark:bg-white/5 h-full" />
      </div>

      {/* Local Particles container overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute pointer-events-none"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              x: [0, p.xEnd],
              y: [0, p.yEnd],
              rotate: [0, p.rotEnd],
              opacity: [0, p.opacity, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <LocalParticleShape shape={p.shape} color={p.color} />
          </motion.div>
        ))}
      </div>

      {/* Floating decorative gradient background blobs (Breathing & Drifting) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 45, -25, 0],
            y: [0, -35, 20, 0],
            scale: [1, 1.12, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#2563FF]/3 dark:bg-[#00D4FF]/3 blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.90, 1.14, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[40%] right-[3%] w-[500px] h-[500px] rounded-full bg-[#00D4FF]/3 blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, 35, -35, 0],
            y: [0, 25, -25, 0],
            scale: [1, 1.06, 0.94, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[20%] left-[8%] w-[400px] h-[400px] rounded-full bg-[#F5A623]/2 blur-[120px]"
        />
      </div>

      {/* Slow Parallax Decorative Background Elements (Water Float Easing) */}
      <motion.div
        className="absolute rounded-full border border-[#2563FF]/8 dark:border-white/5 pointer-events-none z-0"
        style={{ width: "260px", height: "260px", left: "4%", top: "18%" }}
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -25, 25, 0],
          rotate: [0, 360]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute rounded-full border-2 border-[#F5A623]/6 pointer-events-none z-0"
        style={{ width: "180px", height: "180px", right: "6%", top: "45%" }}
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 30, -25, 0],
          rotate: [360, 0]
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute rounded-full bg-[#2563FF]/5 dark:bg-white/5 pointer-events-none z-0 shadow-sm"
        style={{ width: "16px", height: "16px", left: "14%", bottom: "35%" }}
        animate={{
          y: [0, 20, -20, 0],
          x: [0, 10, -10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <div className="relative w-full h-[360px] bg-gradient-to-br from-[#0B1530] via-[#0D183B] to-[#16295C] flex flex-col items-center justify-center text-center overflow-hidden z-10 px-6 curved-clip-hero shadow-inner">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,255,0.12)_0%,transparent_75%)] pointer-events-none" />
        <div className="absolute inset-0 cyber-grid opacity-[0.15] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl backdrop-blur-md"
          >
            <Sparkles className="w-5 h-5 text-[#A78BFA]" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-display font-black text-white tracking-tight text-gradient-cyan-blue py-1 font-sans"
          >
            Pricing
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-xs md:text-sm text-sky-100/90 font-semibold tracking-widest uppercase flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md font-sans"
          >
            <span className="hover:text-white transition-colors cursor-pointer">Home</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF] dark:bg-[#00D4FF] animate-pulse" />
            <span className="text-white font-bold">Pricing</span>
          </motion.div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mt-24">
        
        {/* Three Columns Top Headers Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 font-sans">
          
          <ScrollReveal direction="up" delay={0}>
            <div className="flex flex-col gap-4 text-left p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-[#0B1A2E]/50 backdrop-blur-md shadow-sm h-full hover:border-[#2563FF]/20 dark:hover:border-[#00D4FF]/20 transition-all duration-300">
              <div className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#2563FF] dark:text-[#00D4FF] border border-[#2563FF]/15 dark:border-[#00D4FF]/25 px-3 py-1 rounded-full bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 font-sans">
                PRICING
              </div>
              <h2 className="font-display text-2xl font-extrabold text-[#0F172A] dark:text-white tracking-tight font-sans">
                Choose Your Plan
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-350 font-normal font-sans">
                We are here to support you with all your IT needs. Please register and choose the service you require, and our team will guide you with the best solutions and reliable services tailored to your needs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-col gap-4 text-left p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-[#0B1A2E]/50 backdrop-blur-md shadow-sm h-full hover:border-[#2563FF]/20 dark:hover:border-[#00D4FF]/20 transition-all duration-300">
              <div className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#2563FF] dark:text-[#00D4FF] border border-[#2563FF]/15 dark:border-[#00D4FF]/25 px-3 py-1 rounded-full bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 font-sans">
                ABOUT
              </div>
              <h2 className="font-display text-2xl font-extrabold text-[#0F172A] dark:text-white tracking-tight font-sans">
                Competitive Rates
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-350 font-normal font-sans">
                We offer competitive rates and amazing pricing plans to help you find one that fits your needs and budget. If you are unsure which pricing plan to choose, don't worry, you can always get a refund from us.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col gap-4 text-left p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-[#0B1A2E]/50 backdrop-blur-md shadow-sm h-full hover:border-[#2563FF]/20 dark:hover:border-[#00D4FF]/20 transition-all duration-300">
              <div className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#2563FF] dark:text-[#00D4FF] border border-[#2563FF]/15 dark:border-[#00D4FF]/25 px-3 py-1 rounded-full bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 font-sans">
                FEATURES
              </div>
              <h2 className="font-display text-2xl font-extrabold text-[#0F172A] dark:text-white tracking-tight font-sans">
                Full Transparency
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-350 font-normal font-sans">
                Explore structured IT capabilities, comprehensive development timelines, flexible rates, and dedicated support configurations tailored directly to your scale.
              </p>
            </div>
          </ScrollReveal>

        </div>

        {/* Ambient Backlighting Behind Cards */}
        <div className="absolute left-1/2 top-[550px] -translate-x-1/2 -translate-y-1/2 w-[75%] h-[320px] bg-gradient-to-r from-[#2563FF]/5 via-[#00D4FF]/10 to-[#2563FF]/5 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* Premium Pricing Cards Interactive 3D Overlapping Stagger Grid */}
        <motion.div 
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-28 items-stretch relative z-10"
        >
          {pricingPlans.map((plan, index) => (
            <InteractivePricingCard
              key={index}
              plan={plan}
              index={index}
              onCtaClick={scrollToContact}
            />
          ))}
        </motion.div>

        {/* Coordinated Timeline-staggered Bento Grid Section (IT Solutions & Pricing Guide) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-85px" }}
          variants={sectionContainerVariants}
          className="border-t border-slate-200 dark:border-white/5 pt-24 mb-28 z-10 relative overflow-hidden"
        >
          {/* Subtle breathing backlight behind the Bento Grid */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <motion.div
              animate={{
                scale: [1, 1.08, 0.96, 1],
                opacity: [0.35, 0.5, 0.35]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[360px] bg-gradient-to-r from-[#2563FF]/4 via-[#00D4FF]/6 to-[#2563FF]/4 blur-[110px] rounded-full"
            />
          </div>

          {/* Centered Heading focal point with Blur + Scale entry reveal */}
          <motion.div variants={bentoHeadingVariants} className="text-center mb-16 flex flex-col items-center relative z-10">
            <div className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#2563FF] dark:text-[#00D4FF] border border-[#2563FF]/15 dark:border-[#00D4FF]/25 px-3 py-1.5 rounded-full bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 font-sans mb-4">
              CAPABILITIES & TERMS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight leading-tight font-sans select-none">
              IT Solutions & Pricing Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mt-4 font-sans leading-relaxed">
              Explore our structured IT capabilities, flexible pricing configurations, enterprise system architectures, and onboarding methodologies.
            </p>
          </motion.div>

          {/* Asymmetric Bento Grid Stacked Cards (Stagger-loaded one-by-one) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-stretch w-full relative z-10">
            <BentoCard1 data={blocksData[0]} />
            <BentoCard2 data={blocksData[1]} />
            <BentoCard3 data={blocksData[2]} />
            <BentoCard4 data={blocksData[3]} />
          </div>

        </motion.div>

        {/* Redesigned Premium Promotional Banner Card */}
        <ScrollReveal direction="zoom" delay={0.1} className="w-full mb-32">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#070F24] p-8 md:p-14 text-white shadow-2xl text-left">
            {/* Glowing corner overlay */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#7C3AED]/15 to-transparent blur-[110px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#A78BFA]/10 to-transparent blur-[90px] pointer-events-none" />
            <div className="absolute inset-0 cyber-grid opacity-[0.08] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column Content */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Tech Badge */}
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#A78BFA] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit font-sans">
                  <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" />
                  WE BUILD DIGITAL SUCCESS
                </div>

                {/* Main Heading */}
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase font-sans">
                  WE BUILD <span className="text-gradient bg-gradient-to-r from-[#A78BFA] to-purple-400 bg-clip-text text-transparent">WEBSITES</span> &{" "}
                  <span className="text-gradient bg-gradient-to-r from-[#A78BFA] to-purple-400 bg-clip-text text-transparent">APPS</span> THAT GROW YOUR BUSINESS
                </h3>

                {/* Checkmarks list */}
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold text-slate-200 mt-2">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-1 rounded-full font-sans">
                    <div className="w-4 h-4 rounded-full bg-[#A78BFA]/20 border border-[#A78BFA]/30 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-[#A78BFA]" />
                    </div>
                    Modern Design
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-1 rounded-full font-sans">
                    <div className="w-4 h-4 rounded-full bg-[#A78BFA]/20 border border-[#A78BFA]/30 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-[#A78BFA]" />
                    </div>
                    High Performance
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-1 rounded-full font-sans">
                    <div className="w-4 h-4 rounded-full bg-[#A78BFA]/20 border border-[#A78BFA]/30 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-[#A78BFA]" />
                    </div>
                    Secure & Scalable
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed max-w-xl font-normal font-sans">
                  From simple websites to powerful applications, we deliver smart, reliable and innovative IT solutions tailored to your needs.
                </p>

                {/* Pricing Range Panel */}
                <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 max-w-xl shadow-inner font-sans">
                  {/* Min price */}
                  <div className="flex flex-col text-center sm:text-left gap-1 shrink-0">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      PRICING RANGE
                    </span>
                    <span className="text-3xl font-extrabold text-white">
                      ₹6,00,000+
                    </span>
                    <span className="text-[9px] font-bold text-[#A78BFA] uppercase tracking-wider font-mono">
                      DEPENDS ON COMPLEXITY & FEATURES
                    </span>
                  </div>

                  {/* TO divider */}
                  <div className="font-display font-black text-xs text-[#A78BFA] border border-[#A78BFA]/20 px-3.5 py-1.5 rounded-xl bg-[#A78BFA]/5">
                    TO
                  </div>

                  {/* Max price */}
                  <div className="flex flex-col text-center sm:text-left gap-1 shrink-0">
                    <span className="text-[9px] font-bold text-transparent select-none uppercase tracking-widest font-mono hidden sm:block">
                      PRICING RANGE
                    </span>
                    <span className="text-3xl font-extrabold text-white">
                      ₹6,000
                    </span>
                    <span className="text-[9px] font-bold text-[#A78BFA] uppercase tracking-wider font-mono font-sans">
                      STARTING FROM
                    </span>
                  </div>
                </div>

                {/* CTA Actions */}
                <div className="flex flex-wrap gap-4 mt-3">
                  <Button
                    onClick={scrollToContact}
                    variant="primary"
                    className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white hover:scale-[1.03] active:scale-[0.98] transition-all hover:shadow-[0_0_25px_rgba(124,58,237,0.45)] group/btn relative overflow-hidden font-sans"
                    icon={<ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover/btn:translate-x-1" />}
                  >
                    REGISTER NOW
                  </Button>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 group/btn relative overflow-hidden font-sans"
                    icon={<MessageSquare className="w-4.5 h-4.5 text-[#A78BFA] transition-transform duration-300 group-hover/btn:scale-110" />}
                  >
                    CONTACT US
                  </Button>
                </div>

              </div>

              {/* Right Column Illustration */}
              <div className="lg:col-span-5 relative w-full h-[280px] md:h-[380px] flex items-center justify-center mt-6 lg:mt-0">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/40 p-1 backdrop-blur-sm group">
                  <div className="absolute inset-0 bg-[#7C3AED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src="/pricing-devices-mockup.png"
                    alt="Mockup of Laptop, Tablet and Mobile devices showing analytics dashboards"
                    fill
                    className="object-cover rounded-xl pointer-events-none scale-95 group-hover:scale-100 transition-transform duration-700 ease-out font-sans"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                {/* Floating rotating Guarantee Seal (Parent float wrapper + Child spin) */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 hidden sm:block z-20 cursor-pointer select-none font-sans"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] p-0.5 shadow-2xl border border-white/15 flex items-center justify-center"
                  >
                    <div className="w-full h-full rounded-full bg-[#070F24]/90 flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
                      {/* Glowing effect inside the seal */}
                      <div className="absolute inset-0 bg-[#A78BFA]/10 animate-pulse pointer-events-none" />
                      
                      {/* Central Icon */}
                      <ShieldCheck className="w-6 h-6 text-[#A78BFA] mb-1" />
                      
                      <span className="text-[8px] font-black text-white leading-tight uppercase font-mono tracking-wider font-sans">
                        100% QUALITY
                      </span>
                      <span className="text-[7.5px] font-extrabold text-[#A78BFA] leading-tight uppercase font-mono tracking-wider mt-0.5 font-sans">
                        GUARANTEE
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

            </div>

            {/* Redesigned Bottom Service Comparison Stack with hover highlights */}
            <motion.div 
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-45px" }}
              className="flex flex-col gap-4 mt-16 pt-12 border-t border-white/10"
            >
              <HighlightBox
                title="WEBSITES"
                desc="Responsive, Fast & Modern"
                icon={Layers}
              />
              <HighlightBox
                title="MOBILE APPS"
                desc="Android & iOS Development"
                icon={Cpu}
              />
              <HighlightBox
                title="E-COMMERCE"
                desc="Secure & Scalable Online Stores"
                icon={Sparkles}
              />
              <HighlightBox
                title="CUSTOM SOLUTIONS"
                desc="Tailored to Your Business Needs"
                icon={Zap}
              />
              <HighlightBox
                title="MAINTENANCE"
                desc="Support & Maintenance You Can Rely On"
                icon={HeartHandshake}
              />
            </motion.div>

          </div>
        </ScrollReveal>

        {/* Bottom Contact Us & Form Section */}
        <div ref={contactSectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 text-left pt-12 font-sans">
          
          {/* Left Column Information */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-start font-sans">
            <ScrollReveal direction="up" delay={0}>
              <div className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#2563FF] dark:text-[#00D4FF] border border-[#2563FF]/15 dark:border-[#00D4FF]/25 px-3.5 py-1.5 rounded-full bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 font-sans">
                GET IN TOUCH
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-[#0F172A] dark:text-white tracking-tight leading-none font-sans">
                Contact Us
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-350 font-normal font-sans">
                I have worls-class, flexible support via live chat, email and hone. I guarantee that you'll be able to have any issue resolved within 24 hours.
              </p>
            </ScrollReveal>
            
            {/* Quick Contacts Visual Widget */}
            <ScrollReveal direction="up" delay={0.3} className="mt-4">
              <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-[#0B1A2E]/70 backdrop-blur-md shadow-lg shadow-slate-200/50 flex flex-col gap-4 font-sans">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 border border-[#2563FF]/10 dark:border-[#00D4FF]/20 flex items-center justify-center">
                    <HeartHandshake className="w-4.5 h-4.5 text-[#2563FF] dark:text-[#00D4FF]" />
                  </div>
                  <div className="flex flex-col text-left font-sans">
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">Support Policy</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">Dedicated Project Consultations</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 border border-[#2563FF]/10 dark:border-[#00D4FF]/20 flex items-center justify-center">
                    <PhoneCall className="w-4.5 h-4.5 text-[#2563FF] dark:text-[#00D4FF]" />
                  </div>
                  <div className="flex flex-col text-left font-sans">
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">Response Speed</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-750 dark:text-slate-300">Guaranteed within 24 Hours</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column Contact Form */}
          <div className="lg:col-span-7 flex flex-col gap-6 font-sans">
            <ScrollReveal direction="up" delay={0}>
              <div className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#2563FF] dark:text-[#00D4FF] border border-[#2563FF]/15 dark:border-[#00D4FF]/25 px-3.5 py-1.5 rounded-full bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 font-sans">
                CONTACT US
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-display text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-none font-sans">
                Drop Us a Line
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed -mt-3 font-sans">
                Programs provi patient peace mind when option.
              </p>
            </ScrollReveal>

            {/* Inputs Form */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="p-8 rounded-[32px] border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#0B1A2E]/80 backdrop-blur-xl shadow-2xl shadow-slate-200/50">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-4 font-sans"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 shadow-md">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-slate-800 dark:text-white font-sans">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-455 max-w-sm font-sans">
                      Thank you for contacting us. Our technical team will reach out to you within the next 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5 font-sans">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name*"
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071426] text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#2563FF] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#2563FF]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm font-sans"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 font-sans">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email*"
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071426] text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#2563FF] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#2563FF]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm font-sans"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5 font-sans">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone"
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071426] text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#2563FF] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#2563FF]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm font-sans"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 font-sans">
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="Website*"
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071426] text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#2563FF] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#2563FF]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm font-sans"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 font-sans">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        rows={5}
                        className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#071426] text-slate-800 dark:text-white text-sm placeholder-slate-400 focus:border-[#2563FF] dark:focus:border-[#00D4FF] focus:ring-2 focus:ring-[#2563FF]/10 dark:focus:ring-[#00D4FF]/10 outline-none transition-all shadow-sm resize-none font-sans"
                        required
                      />
                    </div>

                    <div className="mt-3 flex justify-start font-sans">
                      <Button
                        type="submit"
                        variant="primary"
                        className="bg-[#2563FF] hover:bg-[#2563FF]/90 text-white hover:scale-[1.03] active:scale-[0.98] transition-all hover:shadow-[0_0_20px_rgba(37,99,255,0.3)] shadow-md group/btn relative overflow-hidden font-sans"
                        icon={<ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover/btn:translate-x-1" />}
                      >
                        SEND MESSAGE
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </div>
  );
}
