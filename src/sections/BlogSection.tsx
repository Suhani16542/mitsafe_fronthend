"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { User, ArrowRight, Sparkles } from "lucide-react";
import { blogData } from "@/data/blog";

interface BackgroundParticle {
  id: number;
  type: "firefly" | "star" | "particle";
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
}

const backgroundParticles: BackgroundParticle[] = [
  // Fireflies (pulsing, moving)
  { id: 1, type: "firefly", left: "8%", top: "18%", size: 4, duration: 4.2, delay: 0 },
  { id: 2, type: "firefly", left: "88%", top: "12%", size: 3.5, duration: 5.1, delay: 1.5 },
  { id: 3, type: "firefly", left: "42%", top: "68%", size: 5, duration: 5.8, delay: 0.5 },
  { id: 4, type: "firefly", left: "22%", top: "82%", size: 4, duration: 4.6, delay: 2.2 },
  { id: 5, type: "firefly", left: "78%", top: "72%", size: 3, duration: 5.4, delay: 1.1 },
  { id: 6, type: "firefly", left: "62%", top: "28%", size: 4.5, duration: 4.9, delay: 0.8 },
  
  // Floating light particles (upward movement)
  { id: 7, type: "particle", left: "12%", top: "42%", size: 2, duration: 11, delay: 0 },
  { id: 8, type: "particle", left: "28%", top: "58%", size: 3, duration: 13, delay: 3 },
  { id: 9, type: "particle", left: "68%", top: "48%", size: 2.5, duration: 10, delay: 1.5 },
  { id: 10, type: "particle", left: "82%", top: "32%", size: 2, duration: 14, delay: 4 },
  
  // Sparkling stars (fast flicker)
  { id: 11, type: "star", left: "4%", top: "8%", size: 1.5, duration: 1.7, delay: 0.2 },
  { id: 12, type: "star", left: "96%", top: "6%", size: 2, duration: 2.0, delay: 0.7 },
  { id: 13, type: "star", left: "38%", top: "10%", size: 1.5, duration: 1.4, delay: 1.1 },
  { id: 14, type: "star", left: "48%", top: "86%", size: 2, duration: 2.3, delay: 0.3 },
  { id: 15, type: "star", left: "92%", top: "90%", size: 1.5, duration: 1.8, delay: 0.9 },
];

function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    const maxDisplacement = 8;
    const distance = Math.sqrt(x * x + y * y);
    if (distance < 50) {
      setPosition({
        x: (x / 50) * maxDisplacement,
        y: (y / 50) * maxDisplacement,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
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

interface TimelineConnectorProps {
  active: boolean;
  onComplete: () => void;
  direction: "left-to-right" | "right-to-left";
  isDesktop: boolean;
}

function TimelineConnector({ active, onComplete, direction, isDesktop }: TimelineConnectorProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const isLineInView = useInView(lineRef, { once: true, amount: 0.4 });
  const [lineDone, setLineDone] = useState(false);

  const shouldDraw = active && isLineInView;

  // Path data based on desktop curves or mobile vertical straight lines
  const getPathData = () => {
    if (isDesktop) {
      if (direction === "left-to-right") {
        return "M 100,0 C 150,0 200,20 200,64 L 200,96 C 200,110 250,128 300,128";
      } else {
        return "M 300,0 C 250,0 200,20 200,64 L 200,96 C 200,110 150,128 100,128";
      }
    } else {
      return "M 200,0 L 200,128";
    }
  };

  const pathData = getPathData();

  return (
    <div ref={lineRef} className="relative w-full h-32 flex justify-center items-center pointer-events-none z-0">
      <svg className="w-full max-w-lg h-full overflow-visible" viewBox="0 0 400 128" preserveAspectRatio="none">
        <defs>
          <linearGradient id="purpleGradientVertical" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#008FED" />
          </linearGradient>
          <filter id="purpleGlowVertical" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dashed background guide path */}
        <path
          d={pathData}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          className="opacity-45"
        />

        {/* Animated glowing timeline line (softly illuminates and stays bright) */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#purpleGradientVertical)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#purpleGlowVertical)"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={shouldDraw ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.7 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (shouldDraw) {
              setLineDone(true);
              onComplete();
            }
          }}
          className="drop-shadow-[0_2px_12px_rgba(0,229,255,0.45)]"
        />

        {/* Moving light pulse + sparkles traveling down the curve */}
        {shouldDraw && (
          <>
            <motion.path
              d={pathData}
              fill="none"
              stroke="#00E5FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="24 120"
              animate={{ strokeDashoffset: [144, -144] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            />
            {/* Spark traveling precisely with line progress */}
            <motion.path
              d={pathData}
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="4 200"
              animate={{ strokeDashoffset: [204, -204] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.2 }}
            />
          </>
        )}

        {/* Tiny glowing nodes where the line changes direction/ends */}
        {shouldDraw && isDesktop && (
          <motion.circle
            cx={200}
            cy={64}
            r="3"
            fill="#00E5FF"
            className="shadow-[0_0_8px_#00E5FF]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
        )}

        {/* Pulsing indicator node at the end of path when done */}
        {lineDone && (
          <motion.circle
            cx={isDesktop ? (direction === "left-to-right" ? 300 : 100) : 200}
            cy={128}
            r="4.5"
            fill="#00E5FF"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </svg>

      {/* Floating Sparkles/Particles */}
      {shouldDraw && (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <motion.div
            animate={{ x: [-8, 8, -8], y: [10, 50, 90], opacity: [0, 0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[calc(50%-3px)] w-1.5 h-1.5 bg-[#00E5FF] rounded-full blur-[1px]"
          />
          <motion.div
            animate={{ x: [8, -8, 8], y: [30, 70, 110], opacity: [0, 0.7, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-[calc(50%-2px)] w-1.5 h-1.5 bg-[#008FED] rounded-full blur-[0.5px]"
          />
        </div>
      )}
    </div>
  );
}

interface BlogCardProps {
  post: any;
  idx: number;
  revealed: boolean;
  onReveal: () => void;
  isDesktop: boolean;
}

function BlogCard({ post, idx, revealed, onReveal, isDesktop }: BlogCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.25 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (isCardInView && !revealed && idx === 0) {
      onReveal();
    }
  }, [isCardInView, revealed, idx, onReveal]);

  return (
    <div ref={cardRef} className="relative w-full max-w-[430px] mx-auto lg:mx-0">
      {/* Soft Light Burst around card on reveal */}
      {revealed && (
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: [0.95, 1.25, 1.05], opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -inset-10 bg-gradient-to-r from-[#00E5FF]/10 to-[#008FED]/10 blur-2xl rounded-[3.5rem] pointer-events-none -z-10"
        />
      )}

      {/* Actual Card container (Dark Glassmorphism with thin glow border) */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={revealed ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
        }}
        whileHover={{
          y: -8,
          boxShadow: "0 20px 45px rgba(0, 229, 255, 0.1), 0 0 25px rgba(0, 229, 255, 0.05)",
          transition: { duration: 0.35, ease: "easeOut" }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex flex-col h-full relative z-10 w-full"
      >
        <div
          className={`group flex flex-col justify-between h-full bg-gradient-to-b from-[#0F223C]/95 to-[#071325]/95 border rounded-[3rem] p-9 sm:p-11 backdrop-blur-xl transition-all duration-400 ease-out flex-grow w-full ${
            hovered
              ? "border-[#00E5FF]/40 shadow-[0_20px_50px_rgba(0,229,255,0.06),0_0_20px_rgba(0,212,255,0.04)]"
              : "border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
          }`}
        >
          {/* Subtle hover background accent glow (zooms on hover) */}
          <div
            className={`absolute inset-0 bg-gradient-to-tr ${post.imageColor} opacity-0 group-hover:opacity-[0.05] transition-all duration-500 group-hover:scale-110 pointer-events-none`}
          />

          {/* Top content wrapper */}
          <div className="flex flex-col gap-5 text-left">
            {/* Category & Read Time Row */}
            <div className="flex items-center justify-between text-[10px] font-extrabold text-[#00E5FF] uppercase tracking-wider font-mono">
              <span className="bg-[#00E5FF]/10 border border-[#00E5FF]/20 px-3.5 py-1.5 rounded-full">
                {post.category}
              </span>
              <span className="text-slate-400">{post.readTime}</span>
            </div>

            {/* Title */}
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#00E5FF] transition-colors duration-300 leading-snug mt-2">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              {post.summary}
            </p>
          </div>

          {/* Divider line */}
          <span className="w-full h-px bg-white/10 my-6 block" />

          {/* Bottom Footer metadata & button row */}
          <div className="flex items-center justify-between mt-auto gap-4">
            {/* Metadata */}
            <div className="flex items-center gap-4 text-[10px] text-slate-400 font-extrabold uppercase tracking-widest font-mono">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#00E5FF]" />
                {post.author}
              </span>
            </div>

            {/* Read Full Article button */}
            <Magnetic>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-full bg-[#07111F] text-white border border-white/10 font-bold text-[10px] uppercase tracking-wider shadow-sm hover:bg-[#00E5FF] hover:text-[#07111F] hover:scale-[1.05] active:scale-[0.95] transition-all duration-300 group/btn"
              >
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [card0Revealed, setCard0Revealed] = useState(false);
  const [card1Revealed, setCard1Revealed] = useState(false);
  const [card2Revealed, setCard2Revealed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // GPU-accelerated motion values for mouse spot + lag trail
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const spring1X = useSpring(cursorX, { stiffness: 70, damping: 18 });
  const spring1Y = useSpring(cursorY, { stiffness: 70, damping: 18 });
  
  const spring2X = useSpring(cursorX, { stiffness: 45, damping: 14 });
  const spring2Y = useSpring(cursorY, { stiffness: 45, damping: 14 });

  const spring3X = useSpring(cursorX, { stiffness: 30, damping: 11 });
  const spring3Y = useSpring(cursorY, { stiffness: 30, damping: 11 });

  const displayPosts = blogData.slice(0, 3);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="bg-[#071426] py-32 md:py-44 relative overflow-hidden border-t 
border-white/5 font-sans"
      style={{
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.04]">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-white" />
        ))}
      </div>

      {/* GPU Accelerated Interactive Cursor Spotlight and Lagging Trails */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
          className="absolute w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none will-change-transform"
        />
        <motion.div
          style={{ x: spring1X, y: spring1Y, translateX: "-50%", translateY: "-50%" }}
          className="absolute w-44 h-44 bg-purple-500/5 rounded-full blur-2xl pointer-events-none will-change-transform"
        />
        <motion.div
          style={{ x: spring2X, y: spring2Y, translateX: "-50%", translateY: "-50%" }}
          className="absolute w-28 h-28 bg-[#00E5FF]/10 rounded-full blur-xl pointer-events-none will-change-transform"
        />
        <motion.div
          style={{ x: spring3X, y: spring3Y, translateX: "-50%", translateY: "-50%" }}
          className="absolute w-1.5 h-1.5 bg-[#00E5FF] rounded-full shadow-[0_0_8px_#00E5FF,0_0_15px_#00E5FF] pointer-events-none will-change-transform"
        />
      </div>

      {/* Ambient moving glow layers depth blooms (floating slow) */}
      <motion.div
        animate={{
          x: [-30, 20, -30],
          y: [-20, 30, -20],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[-5%] w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#00E5FF]/4 to-transparent blur-[140px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          x: [20, -35, 20],
          y: [30, -20, 30],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[-5%] w-[520px] h-[520px] rounded-full 
bg-gradient-to-bl from-[#008FED]/3 to-transparent blur-[150px] pointer-events-none -z-10"
      />

      {/* Floating Outline Circle */}
      <motion.div
        className="absolute rounded-full border border-white/10 bg-white/5 backdrop-blur-md pointer-events-none z-0 shadow-sm"
        style={{ width: "200px", height: "200px", left: "6%", top: "15%" }}
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Futuristic Night Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {backgroundParticles.map((pt) => {
          if (pt.type === "firefly") {
            return (
              <motion.div
                key={pt.id}
                animate={{
                  opacity: [0.1, 0.9, 0.1],
                  scale: [0.8, 1.2, 0.8],
                  x: [0, 15, -10, 0],
                  y: [0, -20, 10, 0],
                }}
                transition={{
                  duration: pt.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: pt.delay,
                }}
                className="absolute rounded-full bg-[#00E5FF] shadow-[0_0_12px_#00E5FF,0_0_20px_rgba(0,229,255,0.4)]"
                style={{
                  left: pt.left,
                  top: pt.top,
                  width: `${pt.size}px`,
                  height: `${pt.size}px`,
                }}
              />
            );
          }
          if (pt.type === "particle") {
            return (
              <motion.div
                key={pt.id}
                animate={{
                  opacity: [0.2, 0.7, 0.2],
                  y: [100, -100],
                  x: [0, 8, -8, 0],
                }}
                transition={{
                  duration: pt.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: pt.delay,
                }}
                className="absolute rounded-full bg-[#008FED]"
                style={{
                  left: pt.left,
                  top: pt.top,
                  width: `${pt.size}px`,
                  height: `${pt.size}px`,
                }}
              />
            );
          }
          if (pt.type === "star") {
            return (
              <motion.div
                key={pt.id}
                animate={{
                  opacity: [0.1, 0.8, 0.1],
                  scale: [0.9, 1.3, 0.9],
                }}
                transition={{
                  duration: pt.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: pt.delay,
                }}
                className="absolute rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                style={{
                  left: pt.left,
                  top: pt.top,
                  width: `${pt.size}px`,
                  height: `${pt.size}px`,
                }}
              />
            );
          }
          return null;
        })}

        {/* Ambient Shimmer Light Effect (diagonal scan/pulse) */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.015] to-transparent skew-x-12 pointer-events-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#00D4FF] font-display shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span>ARTICLE JOURNAL</span>
          </motion.div>
          
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-[-0.03em] leading-tight"
          >
            Read Our Latest News
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-6 text-base text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Latest Blogs and updates can be provided to you. In this section we also provide latest technology related updates.
          </motion.p>
        </div>

        {/* Alternate Zig-Zag Timeline Layout */}
        <div className="flex flex-col w-full relative mt-16 max-w-5xl mx-auto">
          
          {/* Center background guide line (desktop only) */}
          {isDesktop && (
            <div className="absolute left-1/2 top-10 bottom-10 w-[1.5px] -translate-x-1/2 bg-white/10 opacity-30 z-0 border-l border-dashed border-[#00E5FF]/20" />
          )}

          {/* Row 0: Card 0 (Left Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full relative z-10">
            <div className="flex justify-end pr-0 lg:pr-12 w-full">
              <BlogCard
                post={displayPosts[0]}
                idx={0}
                revealed={card0Revealed}
                onReveal={() => setCard0Revealed(true)}
                isDesktop={isDesktop}
              />
            </div>
            <div className="hidden lg:block" />
          </div>

          {/* Timeline Connector 0 -> 1 (Left to Right) */}
          <TimelineConnector
            active={card0Revealed}
            onComplete={() => setCard1Revealed(true)}
            direction="left-to-right"
            isDesktop={isDesktop}
          />

          {/* Row 1: Card 1 (Right Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full relative z-10">
            <div className="hidden lg:block" />
            <div className="flex justify-start pl-0 lg:pl-12 w-full">
              <BlogCard
                post={displayPosts[1]}
                idx={1}
                revealed={card1Revealed}
                onReveal={() => {}}
                isDesktop={isDesktop}
              />
            </div>
          </div>

          {/* Timeline Connector 1 -> 2 (Right to Left) */}
          <TimelineConnector
            active={card1Revealed}
            onComplete={() => setCard2Revealed(true)}
            direction="right-to-left"
            isDesktop={isDesktop}
          />

          {/* Row 2: Card 2 (Left Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full relative z-10">
            <div className="flex justify-end pr-0 lg:pr-12 w-full">
              <BlogCard
                post={displayPosts[2]}
                idx={2}
                revealed={card2Revealed}
                onReveal={() => {}}
                isDesktop={isDesktop}
              />
            </div>
            <div className="hidden lg:block" />
          </div>

        </div>

      </div>
    </section>
  );
}
