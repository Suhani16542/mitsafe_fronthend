"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Clock } from "lucide-react";
import { blogData } from "@/data/blog";

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
    <div ref={lineRef} className="relative w-full h-24 flex justify-center items-center pointer-events-none z-0">
      <svg className="w-full max-w-lg h-full overflow-visible" viewBox="0 0 400 128" preserveAspectRatio="none">
        <defs>
          <linearGradient id="blueGradientVertical" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563FF" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <filter id="blueGlowVertical" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
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
          stroke="rgba(37,99,255,0.08)"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          className="opacity-60"
        />

        {/* Animated timeline line */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#blueGradientVertical)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#blueGlowVertical)"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={shouldDraw ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.7 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (shouldDraw) {
              setLineDone(true);
              onComplete();
            }
          }}
          className="drop-shadow-[0_2px_8px_rgba(37,99,255,0.25)]"
        />

        {/* Moving light pulse */}
        {shouldDraw && (
          <>
            <motion.path
              d={pathData}
              fill="none"
              stroke="#2563FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="24 120"
              animate={{ strokeDashoffset: [144, -144] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d={pathData}
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="4 200"
              animate={{ strokeDashoffset: [204, -204] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.2 }}
            />
          </>
        )}

        {/* Tiny nodes where the line changes direction/ends */}
        {shouldDraw && isDesktop && (
          <motion.circle
            cx={200}
            cy={64}
            r="3"
            fill="#2563FF"
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
            fill="#2563FF"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </svg>
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

function BlogCard({ post, idx, revealed, onReveal }: BlogCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.25 });

  useEffect(() => {
    if (isCardInView && !revealed && idx === 0) {
      onReveal();
    }
  }, [isCardInView, revealed, idx, onReveal]);

  return (
    <div ref={cardRef} className="relative w-full max-w-[530px] mx-auto lg:mx-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={revealed ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileHover={{
          y: -10,
          transition: { duration: 0.3 }
        }}
        className="flex flex-col h-full relative z-10 w-full"
      >
        <div
          className="group flex flex-col justify-between min-h-[440px] bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-10 transition-all duration-300 ease-in-out flex-grow w-full hover:border-[#2563FF] hover:shadow-xl overflow-hidden relative"
        >
          {/* Sliding top-to-bottom light-blue background effect */}
          <div className="absolute inset-0 bg-[#F0F8FF] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0 pointer-events-none" />

          {/* Card Content Wrapper */}
          <div className="flex flex-col gap-6 text-left relative z-10">
            {/* Category badge */}
            <div>
              <span className="bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wide">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>

            {/* Date and Reading Time Row */}
            <div className="flex items-center gap-5 text-sm text-slate-500 font-semibold font-sans">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4.5 h-4.5 text-blue-600" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4.5 h-4.5 text-blue-600" />
                {post.readTime}
              </span>
            </div>

            {/* Description (2-3 lines limit) */}
            <p className="text-lg text-slate-700 leading-relaxed font-normal line-clamp-3 group-hover:text-slate-800 transition-colors duration-300">
              {post.summary}
            </p>
          </div>

          {/* Divider */}
          <span className="w-full h-px bg-slate-100 my-6 block group-hover:bg-blue-200/40 transition-colors duration-300 relative z-10" />

          {/* Read More button */}
          <div className="flex items-start mt-auto relative z-10">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center justify-center gap-2.5 font-bold text-base text-white bg-[#2563FF] hover:bg-blue-700 px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm group/btn w-full sm:w-auto"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1.5 text-white" />
            </Link>
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

  const displayPosts = blogData.slice(0, 3);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white py-16 md:py-24 relative overflow-hidden border-t border-slate-100 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 font-display shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>ARTICLE JOURNAL</span>
          </motion.div>
          
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-5xl sm:text-6xl font-extrabold text-black tracking-[-0.03em] leading-tight"
          >
            Read Our Latest <span className="text-[#2563FF] inline-block" style={{ color: "#2563FF", WebkitTextFillColor: "#2563FF", background: "none" }}>News</span>
          </motion.h2>
          
          {/* Subtle blue accent line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1.5 bg-[#2563FF] mx-auto mt-6 rounded-full origin-center"
          />
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-8 text-lg text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Latest blogs, technology insights, industry trends, and company updates to help you stay informed.
          </motion.p>
        </div>

        {/* Alternate Zig-Zag Timeline Layout */}
        <div className="flex flex-col w-full relative mt-8 max-w-5xl mx-auto">
          
          {/* Row 0: Card 0 (Left Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full relative z-10">
            <div className="flex justify-end pr-0 lg:pr-8 w-full">
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
            <div className="flex justify-start pl-0 lg:pl-8 w-full">
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
            <div className="flex justify-end pr-0 lg:pr-8 w-full">
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
