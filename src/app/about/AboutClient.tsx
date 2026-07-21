"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  Laptop, 
  Server, 
  Code, 
  Smartphone, 
  Gamepad, 
  Palette, 
  BookOpen, 
  Briefcase, 
  Play, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Award
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useInView } from "framer-motion";
import Button from "@/components/Button";
import ParticleBackground from "@/components/ParticleBackground";

const serviceCards = [
  {
    title: "Website Designing & Development",
    icon: Code,
    desc: "WEBSITE DESIGN SERVICES REFER TO CREATING AND DESIGNING A WEBSITE, INCLUDING TASKS SUCH AS LAYOUT",
    accent: "from-[#7C3AED] to-[#8B5CF6]"
  },
  {
    title: "Android & iOS App Development",
    icon: Smartphone,
    desc: "MODERN TECHNOLOGY OFFER THE VARIOUS TYPES OF APPLICATION DEVELOPMENT SERVICES ANDROID & IOS",
    accent: "from-[#8B5CF6] to-[#A78BFA]"
  },
  {
    title: "Games Developmenrt",
    icon: Gamepad,
    desc: "MOBILE GAMES, CASINO GAMES, FANTASY GAMES, RNG GAMES & ALL TYPES OF LEGAL GAMES DEVELOPMENT",
    accent: "from-[#7C3AED] to-[#1E1A39]"
  },
  {
    title: "Graphic, Logo & UX/UI",
    icon: Palette,
    desc: "MODERN TECHNOLOGY PROVIDE THE BEST LOGO, GRAPHIC DEVELOPMENT AND USER INTERFACE",
    accent: "from-[#8B5CF6] to-[#E2DBF7]"
  },
  {
    title: "School ERP & School HRM",
    icon: BookOpen,
    desc: "A SCHOOL ERP, OR ENTERPRISE RESOURCE PLANNING, IS A SOFTWARE SYSTEM THAT HELPS SCHOOLS MANAGE",
    accent: "from-[#1E1A39] to-[#7C3AED]"
  },
  {
    title: "CRM & ERP Solutions",
    icon: Briefcase,
    desc: "MODERN TECHNOLOGY PROVIDE BEST CRM FOR YOUR BUSINESS AND THE GOAL OF CRM IS IMPROVE REALTIONSHIP WITH CUSTOMER",
    accent: "from-[#7C3AED] to-[#A78BFA]"
  }
];

const timelineMilestones = [
  {
    year: "2012",
    title: "Appoint IT team for own business",
    desc: "I recruit 3 to 4 people for my clinic marketing along with our youtube channel."
  },
  {
    year: "2014",
    title: "Got a project from Outside",
    desc: "Someone seeing our progress in clinic and youtube channel JMS groups approach our team to build CRM and portal."
  },
  {
    year: "2015",
    title: "Recruit 10 people for different projects",
    desc: "Got some quality projects from outside."
  },
  {
    year: "2016",
    title: "Legal establishment",
    desc: "In 2016 we registered our company by the name of Modern Technology first college campus also enrolled."
  },
  {
    year: "2017",
    title: "30 plus eployees",
    desc: "Starting our fully fledged business and recruiting employees for different technology."
  }
];

const testimonials = [
  {
    quote: "The range of services offered by Modern Technology is diverse, catering to various design needs. Whether it's graphic design, web design, or branding, their team exhibits versatility and a knack for understanding the unique requirements of each project.",
    author: "T-zer Cabz",
    role: "Customer"
  }
];

const clientLogos = [
  "Soulful Musik Academy",
  "TEZ 888",
  "SutraHR",
  "EPIC SKILL"
];

// Interactive Floating Card Component
function FloatingCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 8;
    const y = (e.clientY - rect.top - rect.height / 2) / 8;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`bg-white/70 backdrop-blur-xl border border-[#E5E2F0] rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(124,58,237,0.03)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.06)] hover:border-[#7C3AED]/20 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Elevated Glow Card with Glass Reflection Accent and Parallax Tracking (3D Tilt)
function GlowCardLight({
  children,
  className = "",
  glowColor = "rgba(124, 58, 237, 0.08)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  const springScale = useSpring(1, springConfig);
  const springYOffset = useSpring(0, springConfig);
  const [isFocused, setIsFocused] = useState(false);

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
    const rx = ((y - centerY) / centerY) * -5; 
    const ry = ((x - centerX) / centerX) * 5;
    
    rotateX.set(rx);
    rotateY.set(ry);
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
    springScale.set(1.02);
    springYOffset.set(-8);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
    rotateX.set(0);
    rotateY.set(0);
    springScale.set(1);
    springYOffset.set(0);
  };

  const backgroundGlow = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(300px circle at ${x}px ${y}px, ${glowColor}, transparent 80%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: springScale,
        y: springYOffset,
        transformStyle: "preserve-3d" as const,
      }}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-[#E5E2F0] bg-gradient-to-tr from-white/95 via-white/80 to-[#F3F0FA]/40 p-6 sm:p-8 md:p-10 shadow-[0_15px_45px_rgba(30,26,57,0.015),0_1px_3px_rgba(0,0,0,0.01)] backdrop-blur-xl hover:border-[#7C3AED]/25 hover:shadow-[0_30px_60px_rgba(124,58,237,0.05)] transition-[border-color,box-shadow] duration-350 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: backgroundGlow,
          zIndex: 0,
        }}
      />
      <div className="relative z-10 w-full h-full text-slate-800">{children}</div>
    </motion.div>
  );
}

// Magnetic Button Wrapper
function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - (rect.left + rect.width / 2);
    const y = clientY - (rect.top + rect.height / 2);
    // 0.35 factor ensures a subtle and luxurious magnetic feel
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

// Smooth Number Counter component
function Counter({ value, duration = 2.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

// Cinematic Line/Word Reveal
function CinematicText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-1">
          <motion.span
            initial={{ y: "100%", opacity: 0, filter: "blur(3px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.05,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`inline-block ${className}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

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
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const getInitial = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -35, filter: "blur(6px)" };
      case "right": return { opacity: 0, x: 35, filter: "blur(6px)" };
      case "up": return { opacity: 0, y: 30, filter: "blur(6px)" };
      case "down": return { opacity: 0, y: -30, filter: "blur(6px)" };
      case "zoom": return { opacity: 0, scale: 0.95, filter: "blur(6px)" };
      default: return { opacity: 0, filter: "blur(4px)" };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" } : getInitial()}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatingIllustration({
  children,
  className = "",
  direction = "zoom",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "zoom";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const getInitial = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -40, scale: 0.96, filter: "blur(8px)" };
      case "right": return { opacity: 0, x: 40, scale: 0.96, filter: "blur(8px)" };
      default: return { opacity: 0, scale: 0.96, filter: "blur(8px)" };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" } : getInitial()}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{
          y: -12,
          scale: 1.01,
          boxShadow: "0 25px 50px rgba(124, 58, 237, 0.03)"
        }}
        className="w-full h-full rounded-[2.5rem] overflow-hidden transition-shadow duration-300"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function AboutClient() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const corePillContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#FAFBFF] dark:bg-[#071426] text-[#0F172A] dark:text-white min-h-screen pt-24 pb-20 relative overflow-hidden about-client-container">
      <ParticleBackground />

      {/* Decorative Grid Blueprint Separator Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] inset-x-0 h-px border-t border-dashed border-purple-100/40 dark:border-white/5" />
        <div className="absolute top-[50%] inset-x-0 h-px border-t border-dashed border-purple-100/40 dark:border-white/5" />
        <div className="absolute top-[80%] inset-x-0 h-px border-t border-dashed border-purple-100/40 dark:border-white/5" />
        <div className="absolute left-[15%] inset-y-0 w-px border-l border-dashed border-purple-100/40 dark:border-white/5" />
        <div className="absolute right-[15%] inset-y-0 w-px border-l border-dashed border-purple-100/40 dark:border-white/5" />
      </div>

      {/* Decorative Ambient Blur Lights (Lavender & Soft Purple) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[6%] left-[-15%] w-[650px] h-[650px] rounded-full bg-[#E2DBF7]/20 blur-[140px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[42%] right-[-12%] w-[700px] h-[700px] rounded-full bg-[#F3F0FA]/40 blur-[150px]" 
        />
        <div className="absolute bottom-[8%] left-[-5%] w-[650px] h-[650px] rounded-full bg-[#E2DBF7]/15 blur-[140px]" />
      </div>

      {/* Floating Blueprint Coordinates Accent Nodes */}
      <div className="absolute top-[18%] left-[14.5%] -translate-x-1.5 z-10 w-3 h-3 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 pointer-events-none hidden lg:block" />
      <div className="absolute top-[49.5%] right-[14.8%] -translate-x-1.5 z-10 w-3 h-3 rounded-full bg-[#2563FF]/20 border border-[#2563FF]/40 pointer-events-none hidden lg:block" />

      {/* Floating Particles in Hero */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden max-w-7xl mx-auto px-6">
        <motion.div 
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-[#2563FF]/30 blur-[1px]" 
        />
        <motion.div 
          animate={{ y: [0, -35, 0], x: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[35%] right-[15%] w-3 h-3 rounded-full bg-[#2563FF]/20 blur-[1px]" 
        />
      </div>

      {/* ==========================================================================
         1. HERO: Asymmetric Left-Right Layout with Layered 3D Stack
         ========================================================================== */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 md:py-36 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Asymmetric Hero Heading with Line Reveal */}
          <div className="lg:col-span-7 text-left flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 dark:border-white/5 bg-[#2563FF]/5 dark:bg-[#2563FF]/15 text-[#2563FF] dark:text-[#00BFFF] text-[10px] font-extrabold uppercase tracking-widest font-mono shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>We Are Mitsafe</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#0F172A] dark:text-white tracking-tight leading-tight flex flex-col gap-2">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  Redefining
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-[#00D4FF] dark:from-[#00BFFF] dark:to-[#6C63FF]"
                >
                  Digital Spaces
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-slate-650 dark:text-slate-350 leading-relaxed max-w-xl font-normal"
            >
              MitSafe represents a fusion of technical standards and design aesthetics, crafting applications that perform at scale and wow at first glance.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2.5 mt-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono"
            >
              <span>Home</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF]/40 dark:bg-[#00BFFF]/40" />
              <span className="text-[#2563FF] dark:text-[#00BFFF]">About Us</span>
            </motion.div>
          </div>

          {/* Right: Layered Overlapping Glass 3D Stack (Floats slowly) */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
            {/* Ambient Back Glow Ring */}
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] opacity-25 blur-3xl animate-pulse pointer-events-none" />

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Layer 1: Base Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute w-[240px] h-[160px] bg-[#1E1A39] border border-[#1E1A39] rounded-[2.5rem] p-8 text-white shadow-xl -translate-x-8 -translate-y-8 flex flex-col justify-between"
              >
                <Award className="w-8 h-8 text-[#A78BFA]" />
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#A78BFA] font-bold">Est. Company</span>
                  <h4 className="text-xl font-black font-display mt-1">MitSafe 2016</h4>
                </div>
              </motion.div>

              {/* Layer 2: Floating Glass Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                animate={{ opacity: 1, scale: 1, rotate: 6 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute w-[250px] h-[170px] bg-white/70 backdrop-blur-xl border border-[#E5E2F0] rounded-[2.5rem] p-8 text-slate-800 shadow-2xl translate-x-8 translate-y-8 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between">
                  <Laptop className="w-7 h-7 text-[#7C3AED]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                </div>
                <div>
                  <span className="text-[8px] uppercase font-mono tracking-widest text-slate-400 font-bold">Total Scope</span>
                  <h4 className="text-lg font-black font-display mt-0.5 text-[#1E1A39]">500+ Projects</h4>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         2. CORE PILLARS: Sticky Side-by-Side Progress Layout
         ========================================================================== */}
      <section ref={corePillContainerRef} className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 border-t border-[#E5E2F0]/40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sticky Left Column with dynamic scroll indicator */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 text-left flex flex-col gap-6">
            <span className="text-[10px] font-extrabold text-[#2563FF] dark:text-[#00BFFF] uppercase tracking-widest font-mono bg-[#2563FF]/5 dark:bg-[#2563FF]/15 border border-slate-200 dark:border-white/5 px-3.5 py-1.5 rounded-full w-fit">
              Corporate Pillars
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-white leading-tight">
              How We Empower Your Next Digital Step
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed">
              We bridge high-end engineering standards with functional design, driving immediate market value for startups and corporate frameworks alike.
            </p>
            
            {/* Visual Progress bar container representing reading journey */}
            <div className="w-full h-1 bg-[#F3F0FA] dark:bg-white/5 rounded-full overflow-hidden mt-4 relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2563FF] to-[#00D4FF] dark:from-[#00BFFF] dark:to-[#6C63FF] rounded-full" 
                animate={{ width: ["0%", "100%", "50%"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Right Column: Giant offset Content blocks */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Block 1 */}
            <ScrollReveal direction="right">
              <GlowCardLight className="w-full relative">
                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-[#F3F0FA] dark:bg-white/5 border border-[#E5E2F0]/80 dark:border-white/10 flex items-center justify-center text-[#2563FF] dark:text-[#00BFFF] group-hover:bg-[#2563FF] dark:group-hover:bg-[#00D4FF] group-hover:text-white transition-all duration-300 shadow-md">
                  <Laptop className="w-8 h-8" />
                </div>
                <div className="max-w-xl text-left">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest font-mono text-[#2563FF] dark:text-[#00BFFF]">Pillar 01</span>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-[#0F172A] dark:text-white mt-2 mb-4">WEB / APP Consultancy</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
                    Web app consultancy involves providing expert advice and recommendations to businesses or individuals looking to develop, launch, and maintain a web application.
                  </p>
                </div>
              </GlowCardLight>
            </ScrollReveal>

            {/* Block 2 */}
            <ScrollReveal direction="right" delay={0.15}>
              <GlowCardLight className="w-full relative">
                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-[#F3F0FA] dark:bg-white/5 border border-[#E5E2F0]/80 dark:border-white/10 flex items-center justify-center text-[#2563FF] dark:text-[#00BFFF] group-hover:bg-[#2563FF] dark:group-hover:bg-[#00D4FF] group-hover:text-white transition-all duration-300 shadow-md">
                  <Server className="w-8 h-8" />
                </div>
                <div className="max-w-xl text-left">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest font-mono text-[#2563FF] dark:text-[#00BFFF]">Pillar 02</span>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-[#0F172A] dark:text-white mt-2 mb-4">Cloud computing</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
                    Along with the development we are here to guide you the proper cloud computing , cloud services and guidance to your business.
                  </p>
                </div>
              </GlowCardLight>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. ABOUT COMPANY: Immersive Asymmetric Bento Grid
         ========================================================================== */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-[#E5E2F0]/40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bento Block 1 (Large 7 Cols): Company Details in Indigo (With Counter Stats Row) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white dark:bg-[#0B1A2E]/70 border border-slate-200 dark:border-[rgba(0,212,255,0.15)] rounded-[3rem] p-10 md:p-14 text-[#0F172A] dark:text-white text-left flex flex-col justify-between relative overflow-hidden"
          >
            {/* Accent Glowing Top Sphere */}
            <div className="absolute top-[-20%] right-[-10%] w-72 h-72 rounded-full bg-[#2563FF] opacity-35 blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#2563FF] dark:text-[#00D4FF] border border-[#2563FF]/20 dark:border-[#00D4FF]/20 bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 px-3 py-1 rounded-full w-fit">
                <Award className="w-3.5 h-3.5" />
                <span>ABOUT US</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#0F172A] dark:text-white">
                High-end IT solutions to
              </h2>
              <p className="text-sm sm:text-base text-slate-650 dark:text-slate-350 leading-relaxed font-normal mt-2">
                Established in 2016, Mitsafe is a leading web-designing company and digital agency in Indore. We provide our services to UK, USA, and Australian clients. With our extensive experience of 7+ years, we have completed almost 500+ projects. We are glad to mention that we have 920K happy clients that we have built through our quality services. We help our clients speed up the way their businesses work. We work with many different technologies, such as Shopify, Js, PHP, and so on.
              </p>

              {/* Animated Counters stats row */}
              <div className="grid grid-cols-3 gap-6 border-t border-slate-200 dark:border-white/10 pt-8 mt-10">
                <div>
                  <h4 className="text-3xl sm:text-4xl font-display font-black text-[#2563FF] dark:text-white">
                    <Counter value={7} />+
                  </h4>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-[#00D4FF] font-bold">Years Exp</span>
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-display font-black text-[#2563FF] dark:text-white">
                    <Counter value={500} />+
                  </h4>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-[#00D4FF] font-bold">Projects</span>
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-display font-black text-[#2563FF] dark:text-white">
                    <Counter value={920} />K
                  </h4>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-[#00D4FF] font-bold">Clients</span>
                </div>
              </div>
            </div>

            <div className="mt-10 relative z-10">
              <Magnetic>
                <Button href="/services" variant="outline" className="border-slate-300 dark:border-white text-[#2563FF] dark:text-white hover:bg-[#2563FF] hover:text-white dark:hover:bg-white dark:hover:text-[#1E1A39]">
                  OUR SERVICES
                </Button>
              </Magnetic>
            </div>
          </motion.div>

          {/* Bento Block 2 (5 Cols): Video Dashboard Player with scale-up blur reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="lg:col-span-5 bg-gradient-to-br from-white to-slate-50 dark:from-[#0B1A2E] dark:to-[#071426] border border-slate-200 dark:border-white/5 rounded-[3rem] p-8 flex flex-col justify-between aspect-square lg:aspect-auto relative overflow-hidden shadow-sm"
          >
            {/* Top Bar Dashboard */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-[9px] font-extrabold uppercase tracking-widest font-mono text-[#2563FF] dark:text-[#00D4FF]">Video Dashboard</span>
            </div>

            {/* Video Frame Mockup Center */}
            <div className="w-full flex-grow my-6 bg-[#1D172E] rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="bento-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bento-grid)" />
                </svg>
              </div>

              {/* Pulsing play overlay */}
              <motion.div 
                whileHover={{ scale: 1.15 }}
                className="w-16 h-16 rounded-full bg-white text-[#2563FF] dark:text-[#071426] flex items-center justify-center cursor-pointer shadow-lg z-10"
              >
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping pointer-events-none" />
                <Play className="w-5 h-5 fill-[#2563FF] dark:fill-[#071426] translate-x-0.5 text-[#2563FF] dark:text-[#071426]" />
              </motion.div>

              {/* Fake Audio soundwave lines at bottom */}
              <div className="absolute bottom-3 inset-x-6 flex items-center gap-1.5 justify-center opacity-30">
                {[20, 60, 45, 90, 30, 80, 50, 75, 40].map((h, i) => (
                  <div key={i} className="w-1 bg-[#2563FF] dark:bg-[#00D4FF] rounded-full" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            {/* Info details */}
            <div className="flex items-center gap-3 text-left">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563FF] dark:bg-[#00D4FF] animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400">Corporate Reel Presentation</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==========================================================================
         4. FRESH IDEAS: Asymmetric Bento Card Services Showcase (With Stagger Entry & 3D Tilt)
         ========================================================================== */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-[#E5E2F0]/40 z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-[10px] font-extrabold text-[#2563FF] dark:text-[#00D4FF] bg-[#2563FF]/5 dark:bg-[#2563FF]/15 border border-slate-200 dark:border-white/5 px-4 py-1.5 rounded-full w-fit">
            WHAT WE DO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white mt-6 tracking-tight">
            Fresh Ideas for Every Business
          </h2>
          <span className="w-20 h-0.5 bg-[#2563FF] dark:bg-[#00D4FF] mt-4 block" />
          <h3 className="font-display text-base font-bold text-slate-500 uppercase tracking-widest mt-6">
            Perfect IT solution For Your Business
          </h3>
        </div>

        {/* Asymmetric Bento Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Wide layout (Span 2 cols on md) */}
          <ScrollReveal direction="zoom" className="md:col-span-2 h-full">
            <GlowCardLight className="w-full h-full flex flex-col justify-between text-left border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0B1A2E]/55 !shadow-none">
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#2563FF] dark:text-[#00D4FF] group-hover:rotate-6 transition-transform duration-300">
                  <Code className="w-6 h-6" />
                </div>
                <div className="max-w-md">
                  <h4 className="font-display text-xl sm:text-2xl font-black text-[#0F172A] dark:text-white">
                    {serviceCards[0].title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed mt-3 font-normal">
                    {serviceCards[0].desc}
                  </p>
                </div>
              </div>
              <div className="mt-8 text-[9px] font-extrabold uppercase tracking-widest font-mono text-[#2563FF] dark:text-[#00D4FF] flex items-center gap-1.5">
                <span>Capability Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </GlowCardLight>
          </ScrollReveal>

          {/* Card 2: Deep Indigo Card */}
          <ScrollReveal direction="zoom" delay={0.1} className="h-full">
            <GlowCardLight className="w-full h-full flex flex-col justify-between text-left !bg-[#1E1A39]/80 dark:!bg-[#0B1A2E]/80 border border-slate-200 dark:border-white/10 !shadow-none">
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:rotate-6 transition-transform duration-300">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                    {serviceCards[1].title}
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed mt-3 font-normal">
                    {serviceCards[1].desc}
                  </p>
                </div>
              </div>
              <div className="mt-8 text-[9px] font-extrabold uppercase tracking-widest font-mono text-[#00D4FF] dark:text-[#00D4FF] flex items-center gap-1.5">
                <span>Capability Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </GlowCardLight>
          </ScrollReveal>

          {/* Card 3: White Glass Card */}
          <ScrollReveal direction="zoom" delay={0.15} className="h-full">
            <GlowCardLight className="w-full h-full flex flex-col justify-between text-left">
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#2563FF] dark:text-[#00D4FF] group-hover:rotate-6 transition-transform duration-300">
                  <Gamepad className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white">
                    {serviceCards[2].title}
                  </h4>
                  <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed mt-3 font-normal">
                    {serviceCards[2].desc}
                  </p>
                </div>
              </div>
              <div className="mt-8 text-[9px] font-extrabold uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 group-hover:text-[#2563FF] dark:group-hover:text-[#00D4FF] transition-colors duration-300 flex items-center gap-1.5">
                <span>Capability Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </GlowCardLight>
          </ScrollReveal>

          {/* Card 4: White Glass Card */}
          <ScrollReveal direction="zoom" delay={0.2} className="h-full">
            <GlowCardLight className="w-full h-full flex flex-col justify-between text-left">
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#2563FF] dark:text-[#00D4FF] group-hover:rotate-6 transition-transform duration-300">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white">
                    {serviceCards[3].title}
                  </h4>
                  <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed mt-3 font-normal">
                    {serviceCards[3].desc}
                  </p>
                </div>
              </div>
              <div className="mt-8 text-[9px] font-extrabold uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 group-hover:text-[#2563FF] dark:group-hover:text-[#00D4FF] transition-colors duration-300 flex items-center gap-1.5">
                <span>Capability Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </GlowCardLight>
          </ScrollReveal>

          {/* Card 5: Wide Layout (Span 2 cols on md) */}
          <ScrollReveal direction="zoom" delay={0.25} className="md:col-span-2 h-full">
            <GlowCardLight className="w-full h-full flex flex-col justify-between text-left border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0B1A2E]/55 !shadow-none">
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#2563FF] dark:text-[#00D4FF] group-hover:rotate-6 transition-transform duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="max-w-md">
                  <h4 className="font-display text-xl sm:text-2xl font-black text-[#0F172A] dark:text-white">
                    {serviceCards[4].title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed mt-3 font-normal">
                    {serviceCards[4].desc}
                  </p>
                </div>
              </div>
              <div className="mt-8 text-[9px] font-extrabold uppercase tracking-widest font-mono text-[#2563FF] dark:text-[#00D4FF] flex items-center gap-1.5">
                <span>Capability Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </GlowCardLight>
          </ScrollReveal>

          {/* Card 6: Purple Gradient Card */}
          <ScrollReveal direction="zoom" delay={0.3} className="h-full">
            <GlowCardLight className="w-full h-full flex flex-col justify-between text-left !bg-gradient-to-tr !from-[#2563FF] !to-[#071426] !border-slate-200 dark:!border-white/10 !shadow-none">
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-white group-hover:rotate-6 transition-transform duration-300">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                    {serviceCards[5].title}
                  </h4>
                  <p className="text-sm text-purple-100 leading-relaxed mt-3 font-normal">
                    {serviceCards[5].desc}
                  </p>
                </div>
              </div>
              <div className="mt-8 text-[9px] font-extrabold uppercase tracking-widest font-mono text-white/80 flex items-center gap-1.5">
                <span>Capability Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </GlowCardLight>
          </ScrollReveal>

        </div>
      </section>

      {/* ==========================================================================
         5. TIMELINE: Sticky Scroll Storytelling Section
         ========================================================================== */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-[#E5E2F0]/40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sticky Left: Dynamic Year Display */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 text-left flex flex-col gap-6">
            <span className="text-[10px] font-extrabold text-[#2563FF] dark:text-[#00D4FF] bg-[#2563FF]/5 dark:bg-[#2563FF]/15 border border-slate-200 dark:border-white/5 px-4 py-1.5 rounded-full w-fit">
              OUR HISTORY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white leading-tight tracking-tight">
              The Story of Modern Technology
            </h2>

            {/* Dynamic visual indicator node */}
            <div className="flex items-center gap-6 mt-8 relative pl-12 h-20 overflow-hidden">
              <div className="absolute left-4 inset-y-0 w-0.5 bg-slate-200 dark:bg-white/5" />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#2563FF] dark:bg-[#00D4FF]" />
              <div className="flex flex-col gap-0.5">
                <span className="text-4xl md:text-5xl font-black font-display text-[#2563FF] dark:text-[#00D4FF]">
                  {timelineMilestones[activeTimelineIdx].year}
                </span>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">Current Milestone</span>
              </div>
            </div>
          </div>

          {/* Right: Chronological Milestone cards listing with viewport listeners */}
          <div className="lg:col-span-7 flex flex-col gap-12 pt-8 lg:pt-0">
            {timelineMilestones.map((m, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                onViewportEnter={() => setActiveTimelineIdx(idx)}
                transition={{ duration: 0.6 }}
                className="group relative bg-slate-50/30 dark:bg-[#0B1A2E]/20 hover:bg-white dark:hover:bg-[#0B1A2E]/50 border border-slate-200 dark:border-white/10 hover:border-[#2563FF]/20 dark:hover:border-[#00D4FF]/20 rounded-[3rem] p-10 text-left transition-all duration-300 shadow-sm"
              >
                {/* Year Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-[#2563FF] dark:text-[#00D4FF] text-[10px] font-mono font-extrabold uppercase tracking-wider mb-6">
                  {m.year}
                </span>
                <h4 className="font-display text-2xl font-black text-[#0F172A] dark:text-white mb-4">
                  {m.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-650 dark:text-slate-350 leading-relaxed font-normal">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
         6. EWEBOT: Layered Overlapping Feature Showcase
         ========================================================================== */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-[#E5E2F0]/40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Overlapping Graphic layout with scale-up blur-reveal */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[350px] sm:h-[450px]">
            {/* Base Background Visual Mock Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute w-[80%] aspect-square rounded-[3rem] bg-gradient-to-tr from-[#2563FF]/5 to-[#F3F0FA] dark:from-[#00D4FF]/5 dark:to-[#071426] border border-slate-200 dark:border-white/5 p-8 flex flex-col justify-between"
            >
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5E2F0] dark:bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5E2F0] dark:bg-white/10" />
              </div>
              <div className="w-full flex items-end justify-between gap-2 h-20">
                {[50, 30, 80, 40, 70, 95].map((h, i) => (
                  <div key={i} className="w-full bg-[#E5E2F0]/80 dark:bg-white/5 rounded-t-lg" style={{ height: `${h}%` }} />
                ))}
              </div>
            </motion.div>

            {/* Overlapping Glass Analytics Mockup Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.92, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.85, delay: 0.25 }}
              className="absolute w-[80%] aspect-square bg-white/70 dark:bg-[#0B1A2E]/70 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-[3rem] p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(37,99,255,0.06)] hover:scale-102 transition-transform duration-300 translate-x-8 translate-y-8"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
                <span className="text-[10px] font-extrabold font-mono uppercase tracking-widest text-[#2563FF] dark:text-[#00D4FF]">MitSafe Analytics</span>
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <div className="flex flex-col gap-3 my-4">
                <div className="h-4 w-3/4 rounded-lg bg-[#2563FF]/10 animate-pulse" />
                <div className="h-3 w-1/2 rounded bg-slate-100 dark:bg-white/5" />
              </div>
              
              {/* Circular Progress Wheel */}
              <div className="w-24 h-24 rounded-full border-8 border-[#F3F0FA] dark:border-white/5 border-t-[#2563FF] border-r-[#2563FF]/80 flex items-center justify-center self-center my-2 rotate-45">
                <span className="text-xs font-black font-display text-[#0F172A] dark:text-white -rotate-45">92%</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column Checklist */}
          <div className="lg:col-span-6 text-left flex flex-col gap-6">
            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#2563FF] dark:text-[#00D4FF] border border-[#2563FF]/15 dark:border-[#00D4FF]/25 px-3 py-1 rounded-full bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WHY CHOOSE US</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white leading-tight mt-3">
                Save Time & Effort With the Ewebot
              </h2>

              <div className="flex flex-col gap-8 mt-8">
                {/* Item 1 */}
                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 text-[#2563FF] dark:text-[#00D4FF] group-hover:bg-[#2563FF] dark:group-hover:bg-[#00D4FF] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-display text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#2563FF] dark:group-hover:text-[#00D4FF] transition-colors duration-300">
                      First Working Process
                    </h4>
                    <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-normal">
                      For startups and growing businesses, an online specialist can develop a digital marketing plan to help you grow.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 text-[#2563FF] dark:text-[#00D4FF] group-hover:bg-[#2563FF] dark:group-hover:bg-[#00D4FF] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-display text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#2563FF] dark:group-hover:text-[#00D4FF] transition-colors duration-300">
                      Dedicated Team Member
                    </h4>
                    <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-normal">
                      Your digital consultant will also be able to kickstart campaigns and maximise your marketing budget.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 text-[#2563FF] dark:text-[#00D4FF] group-hover:bg-[#2563FF] dark:group-hover:bg-[#00D4FF] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-display text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#2563FF] dark:group-hover:text-[#00D4FF] transition-colors duration-300">
                      24/7 Hours Support
                    </h4>
                    <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-normal">
                      We are open 24X7 you can drop message on our whatsapp or mail us.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         7. TESTIMONIALS & LOGOS: Cinematic Screen Quote Panel
         ========================================================================== */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-[#E5E2F0]/40 z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#2563FF] dark:text-[#00D4FF] bg-[#2563FF]/5 dark:bg-[#2563FF]/15 border border-slate-200 dark:border-white/5 px-4 py-1.5 rounded-full">
              TESTIMONIALS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white mt-6 tracking-tight">
              What Our Client's Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto relative px-10 md:px-24 py-16 rounded-[3.5rem] bg-gradient-to-br from-white to-slate-50 dark:from-[#0B1A2E] dark:to-[#071426] border border-slate-200 dark:border-white/5 shadow-[0_30px_60px_rgba(37,99,255,0.03)] backdrop-blur-xl">
          {/* Custom brackets */}
          <span className="absolute top-12 left-10 md:left-14 font-display font-black text-8xl text-[#2563FF]/10 dark:text-[#00D4FF]/10 pointer-events-none select-none">“</span>
          <span className="absolute bottom-6 right-10 md:right-14 font-display font-black text-8xl text-[#2563FF]/10 dark:text-[#00D4FF]/10 pointer-events-none select-none">”</span>

          {/* Navigation */}
          <button 
            onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-[#2563FF] dark:hover:text-[#00D4FF] hover:border-[#2563FF]/35 dark:hover:border-[#00D4FF]/35 hover:shadow-md hover:scale-[1.05] transition-all duration-300 cursor-pointer z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-[#2563FF] dark:hover:text-[#00D4FF] hover:border-[#2563FF]/35 dark:hover:border-[#00D4FF]/35 hover:shadow-md hover:scale-[1.05] transition-all duration-300 cursor-pointer z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTestimonial}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center gap-8 relative z-0"
            >
              {/* Center avatar shield card */}
              <div className="w-24 h-24 relative flex items-center justify-center bg-white dark:bg-[#071426] border border-slate-200 dark:border-white/5 rounded-[2rem] p-3 shadow-[0_10px_30px_rgba(30,26,57,0.04)] hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col items-center justify-center text-[10px] font-black uppercase text-[#0F172A] dark:text-white leading-tight">
                  <span className="text-[#2563FF] dark:text-[#00D4FF] font-extrabold text-sm tracking-tighter">T-ZER</span>
                  <span className="text-[7px] text-slate-400 font-bold -mt-0.5 tracking-tighter">CABZ</span>
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-slate-650 dark:text-slate-350 italic max-w-3xl font-medium px-4">
                "{testimonials[activeTestimonial].quote}"
              </p>

              <div className="flex flex-col gap-1.5">
                <h4 className="font-display text-lg font-bold text-[#0F172A] dark:text-white">
                  {testimonials[activeTestimonial].author}
                </h4>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 border border-[#2563FF]/15 dark:border-[#00D4FF]/25 text-[#2563FF] dark:text-[#00D4FF] text-[9px] font-extrabold uppercase tracking-wider font-mono">
                  {testimonials[activeTestimonial].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Partner Logos Strip */}
        <div className="border-t border-[#E5E2F0]/60 pt-16 mt-20 max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center"
          >
            {clientLogos.map((logo, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex items-center justify-center p-5 bg-white/50 dark:bg-[#0B1A2E]/50 rounded-[1.5rem] border border-slate-200 dark:border-white/5 shadow-sm cursor-default hover:border-[#2563FF]/25 dark:hover:border-[#00D4FF]/25 hover:shadow-[0_12px_25px_rgba(37,99,255,0.04)] transition-all duration-300"
              >
                <span className="font-display text-xs md:text-sm font-extrabold text-slate-400 dark:text-slate-500 hover:text-[#2563FF] dark:hover:text-[#00D4FF] transition-colors duration-300 tracking-wide uppercase font-mono">
                  {logo}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
