"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const caseStudies = [
  {
    title: "Metro Fintech",
    category: "Web Site Design / Dev",
    summary: "Branding, layout designing and development for a financial services firm displaying real-time mutual fund charts, SIP calculators, and schemes.",
    img: "/metro-fintech-mockup.png",
    slug: "metrofintech-mutual-fund-website-development"
  },
  {
    title: "Farming Sustainability",
    category: "Web Site Design / Dev",
    summary: "A clean eco-friendly interface design layout mockup for an agricultural sustainability startup, showing dashboard charts and analytics.",
    img: "/farming-sustainability-mockup.png",
    slug: "auro-terra-energy-website-design"
  },
  {
    title: "The Wedding",
    category: "Web Site Design / Dev",
    summary: "Custom web development and matrimonial portal design for a modern match-making platform, featuring search filters and simple navigation.",
    img: "/wedding-matrimony-mockup.png",
    slug: "more-matrimony"
  }
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

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire portfolio section wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Desktop Motion values for Slide 1
  const opacity1 = useTransform(scrollYProgress, [0, 0.20, 0.28, 1], [1, 1, 0, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.20, 0.28], [1, 1, 1.12]);
  const y1 = useTransform(scrollYProgress, [0, 0.20, 0.28], [0, 0, -40]);
  const pointerEvents1 = useTransform(scrollYProgress, [0, 0.20, 0.28], ["auto", "auto", "none"] as any);

  // Desktop Motion values for Slide 2
  const opacity2 = useTransform(scrollYProgress, [0, 0.23, 0.33, 0.58, 0.66, 1], [0, 0, 1, 1, 0, 0]);
  const scale2 = useTransform(scrollYProgress, [0, 0.23, 0.33, 0.58, 0.66], [0.88, 0.88, 1, 1, 1.12]);
  const y2 = useTransform(scrollYProgress, [0, 0.23, 0.33, 0.58, 0.66], [40, 40, 0, 0, -40]);
  const pointerEvents2 = useTransform(scrollYProgress, [0, 0.23, 0.33, 0.58, 0.66, 1], ["none", "none", "auto", "auto", "none", "none"] as any);

  // Desktop Motion values for Slide 3
  const opacity3 = useTransform(scrollYProgress, [0, 0.61, 0.69, 1], [0, 0, 1, 1]);
  const scale3 = useTransform(scrollYProgress, [0, 0.61, 0.69, 1], [0.88, 0.88, 1, 1.05]);
  const y3 = useTransform(scrollYProgress, [0, 0.61, 0.69], [40, 40, 0]);
  const pointerEvents3 = useTransform(scrollYProgress, [0, 0.61, 0.69], ["none", "none", "auto"] as any);

  // Dot Indicator Animations
  const dotScale1 = useTransform(scrollYProgress, [0, 0.20, 0.25], [1.5, 1.5, 1]);
  const dotColor1 = useTransform(scrollYProgress, [0, 0.20, 0.25], ["#00D4FF", "#00D4FF", "rgba(255,255,255,0.15)"]);
  
  const dotScale2 = useTransform(scrollYProgress, [0.20, 0.25, 0.58, 0.63], [1, 1.5, 1.5, 1]);
  const dotColor2 = useTransform(scrollYProgress, [0.20, 0.25, 0.58, 0.63], ["rgba(255,255,255,0.15)", "#00D4FF", "#00D4FF", "rgba(255,255,255,0.15)"]);

  const dotScale3 = useTransform(scrollYProgress, [0.58, 0.63, 1], [1, 1.5, 1.5]);
  const dotColor3 = useTransform(scrollYProgress, [0.58, 0.63, 1], ["rgba(255,255,255,0.15)", "#00D4FF", "#00D4FF"]);

  return (
    <div id="portfolio" ref={containerRef} className="relative bg-white font-sans">
      {/* DESKTOP PINNED STORYTELLING VERSION (lg screens) */}
      <div className="hidden lg:block h-[250vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          {/* Cyber Grid Lines */}
          <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-8 max-w-7xl mx-auto opacity-[0.25]">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-[1px] h-full bg-slate-200" />
            ))}
          </div>

          {/* Background Ambient Lights */}
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00D4FF]/3 to-transparent blur-[140px] pointer-events-none -z-10" />
          <div className="absolute bottom-[10%] right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#008FED]/2.5 to-transparent blur-[150px] pointer-events-none -z-10" />

          {/* Core Content Grid */}
          <div className="max-w-7xl mx-auto w-full px-8 grid grid-cols-12 gap-16 items-center relative z-10 h-full">
            
            {/* Left Side: Cinematic Image Showcase (cols 6) */}
            <div className="col-span-6 relative h-[60vh] flex items-center justify-center">
              
              {/* Image Frame Glass Container */}
              <div className="relative w-full h-full rounded-[3rem] bg-[#0B1A2E]/90 border border-[rgba(0,212,255,0.15)] p-5 overflow-hidden backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,212,255,0.06)]">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-950">
                  
                  {/* Slide 1 Image */}
                  <motion.div
                    style={{ opacity: opacity1, scale: scale1, pointerEvents: pointerEvents1 as any }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={caseStudies[0].img}
                      alt={caseStudies[0].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Slide 2 Image */}
                  <motion.div
                    style={{ opacity: opacity2, scale: scale2, pointerEvents: pointerEvents2 as any }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={caseStudies[1].img}
                      alt={caseStudies[1].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Slide 3 Image */}
                  <motion.div
                    style={{ opacity: opacity3, scale: scale3, pointerEvents: pointerEvents3 as any }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={caseStudies[2].img}
                      alt={caseStudies[2].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </motion.div>

                </div>
              </div>

              {/* Floating Back Parallax Shape */}
              <motion.div
                className="absolute rounded-full border border-[rgba(0,212,255,0.15)] bg-[#0B1A2E]/40 backdrop-blur-md pointer-events-none -z-10 shadow-lg"
                style={{ width: "240px", height: "240px", left: "-10%", bottom: "-10%" }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Right Side: Editorial Synchronized Copy Blocks (cols 6) */}
            <div className="col-span-6 relative h-[60vh] flex flex-col justify-center pl-8">
              
              {/* Slide 1 Content */}
              <motion.div
                style={{ opacity: opacity1, y: y1, pointerEvents: pointerEvents1 as any }}
                className="absolute inset-x-0 pl-8 flex flex-col items-start"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00D4FF] font-display shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{caseStudies[0].category}</span>
                </div>
                <h2 style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-5xl font-bold text-[#1E1A39] tracking-tight leading-tight mb-6">
                  {caseStudies[0].title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-lg">
                  {caseStudies[0].summary}
                </p>
                <Magnetic>
                  <Link
                    href={`/portfolio/${caseStudies[0].slug}`}
                    className="relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#00D4FF] text-[#071426] font-bold text-xs uppercase tracking-wider hover:bg-[#00BCE0] hover:text-white transition-all duration-300 shadow-md group"
                  >
                    <span>View Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Magnetic>
              </motion.div>

              {/* Slide 2 Content */}
              <motion.div
                style={{ opacity: opacity2, y: y2, pointerEvents: pointerEvents2 as any }}
                className="absolute inset-x-0 pl-8 flex flex-col items-start"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00D4FF] font-display shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{caseStudies[1].category}</span>
                </div>
                <h2 style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-5xl font-bold text-[#1E1A39] tracking-tight leading-tight mb-6">
                  {caseStudies[1].title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-lg">
                  {caseStudies[1].summary}
                </p>
                <Magnetic>
                  <Link
                    href={`/portfolio/${caseStudies[1].slug}`}
                    className="relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#00D4FF] text-[#071426] font-bold text-xs uppercase tracking-wider hover:bg-[#00BCE0] hover:text-white transition-all duration-300 shadow-md group"
                  >
                    <span>View Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Magnetic>
              </motion.div>

              {/* Slide 3 Content */}
              <motion.div
                style={{ opacity: opacity3, y: y3, pointerEvents: pointerEvents3 as any }}
                className="absolute inset-x-0 pl-8 flex flex-col items-start"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00D4FF] font-display shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{caseStudies[2].category}</span>
                </div>
                <h2 style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-5xl font-bold text-[#1E1A39] tracking-tight leading-tight mb-6">
                  {caseStudies[2].title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-lg">
                  {caseStudies[2].summary}
                </p>
                <Magnetic>
                  <Link
                    href={`/portfolio/${caseStudies[2].slug}`}
                    className="relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#00D4FF] text-[#071426] font-bold text-xs uppercase tracking-wider hover:bg-[#00BCE0] hover:text-white transition-all duration-300 shadow-md group"
                  >
                    <span>View Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Magnetic>
              </motion.div>

              {/* Dynamic Scroll Progress Dots */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20">
                <motion.div
                  style={{ scale: dotScale1, backgroundColor: dotColor1 }}
                  className="w-2.5 h-2.5 rounded-full bg-slate-200"
                />
                <motion.div
                  style={{ scale: dotScale2, backgroundColor: dotColor2 }}
                  className="w-2.5 h-2.5 rounded-full bg-slate-200"
                />
                <motion.div
                  style={{ scale: dotScale3, backgroundColor: dotColor3 }}
                  className="w-2.5 h-2.5 rounded-full bg-slate-200"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* MOBILE PREMIUM VERTICAL COLLAPSIBLE/SCROLLING VERSION (sm/md screens) */}
      <div className="block lg:hidden py-12 px-6 relative overflow-hidden border-t border-[rgba(0,212,255,0.15)]">
        
        {/* Glow details for Mobile */}
        <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#00D4FF]/3 blur-[90px] pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#008FED]/2.5 blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-xl mx-auto flex flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00D4FF] font-display shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFOLIO CASE STUDIES</span>
            </div>
            <h2 style={{ fontFamily: "'Clash Display', sans-serif" }} className="text-2xl font-bold text-[#1E1A39] tracking-tight mb-4">
              Our Case Studies
            </h2>
          </div>

          {/* Case Studies Staggered Layout List */}
          <div className="flex flex-col gap-10 w-full">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className="w-full flex flex-col bg-[#0B1A2E]/70 border border-[rgba(0,212,255,0.08)] rounded-[2rem] overflow-hidden shadow-sm"
              >
                {/* Visual Image */}
                <div className="relative aspect-[4/3] w-full bg-slate-950 border-b border-[rgba(0,212,255,0.15)]">
                  <Image
                    src={study.img}
                    alt={study.title}
                    fill
                    sizes="(max-width: 576px) 100vw, 576px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
                </div>

                {/* Content description */}
                <div className="p-8 flex flex-col items-start gap-4">
                  <span className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest font-mono bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <h3 className="font-display text-4xl font-bold text-slate-900">
                    {study.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {study.summary}
                  </p>
                  <Link
                    href={`/portfolio/${study.slug}`}
                    className="mt-4 w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00D4FF] text-[#071426] font-bold text-xs uppercase tracking-wider hover:bg-[#00BCE0] hover:text-white transition-all duration-300"
                  >
                    <span>View Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
