"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowLeft, Check, Calendar, Tag, Briefcase, ExternalLink } from "lucide-react";
import Button from "@/components/Button";

interface ProjectProps {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  service: string;
  summary: string;
  description: string;
  features: string[];
  techStack: string[];
  imageColor: string;
  img?: string;
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
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -40, filter: "blur(6px)" };
      case "right":
        return { opacity: 0, x: 40, filter: "blur(6px)" };
      case "up":
        return { opacity: 0, y: 30, filter: "blur(6px)" };
      case "down":
        return { opacity: 0, y: -30, filter: "blur(6px)" };
      case "zoom":
        return { opacity: 0, scale: 0.94, filter: "blur(6px)" };
      default:
        return { opacity: 0, filter: "blur(5px)" };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3D Tilt Wrapper for specs cards
function TiltContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 200, mass: 0.6 };
  const springTiltX = useSpring(tiltX, springConfig);
  const springTiltY = useSpring(tiltY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    tiltX.set(((y - centerY) / centerY) * -3.5);
    tiltY.set(((x - centerX) / centerX) * 3.5);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springTiltX,
        rotateY: springTiltY,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioDetailClient({ project }: { project: ProjectProps }) {
  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-32 pb-24 relative overflow-hidden font-sans text-slate-800">
      
      {/* 5 Vertical Background Lines matching main theme */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.3]">
        <div className="w-[1px] bg-slate-100 h-full" />
        <div className="w-[1px] bg-slate-100 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-100 h-full" />
        <div className="w-[1px] bg-slate-100 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-100 h-full" />
      </div>

      {/* Floating backlighting glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[8%] right-[5%] w-[450px] h-[450px] rounded-full bg-[#7C3AED]/3 blur-[120px]" />
        <div className="absolute top-[45%] left-[3%] w-[500px] h-[500px] rounded-full bg-[#A78BFA]/3 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb back path */}
        <ScrollReveal direction="down">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 hover:text-slate-850 mb-10 transition-colors group py-1.5"
          >
            <ArrowLeft className="w-4 h-4 text-[#7C3AED] transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Case Studies
          </Link>
        </ScrollReveal>

        {/* Cover Banner Card */}
        <ScrollReveal direction="up">
          <div className="relative aspect-[21/9] w-full rounded-[32px] overflow-hidden border border-slate-100 shadow-2xl mb-12 group">
            <div className={`absolute inset-0 bg-gradient-to-tr ${project.imageColor} opacity-[0.12] group-hover:scale-105 transition-transform duration-700`} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f0f7_1px,transparent_1px),linear-gradient(to_bottom,#f1f0f7_1px,transparent_1px)] bg-[size:20px_35px] opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-widest bg-white/90 border border-slate-100 rounded-full px-4.5 py-2 backdrop-blur-md shadow-sm">
                {project.category}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic content grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Main Content Block */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            <ScrollReveal direction="left" className="flex flex-col gap-4">
              <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0B1530] tracking-tight leading-none font-sans uppercase">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-semibold">
                {project.summary}
              </p>
            </ScrollReveal>

            {/* Overview & Challenge Section */}
            <ScrollReveal direction="left" className="flex flex-col gap-4 border-t border-slate-100 pt-6">
              <div className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#7C3AED] border border-[#7C3AED]/15 px-3 py-1 rounded-full bg-[#7C3AED]/5 font-sans">
                BACKGROUND
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1530] font-sans">
                Project Overview & Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                {project.description}
              </p>
            </ScrollReveal>

            {/* Technical Implementations Section */}
            <ScrollReveal direction="left" className="flex flex-col gap-5 border-t border-slate-100 pt-6">
              <div className="w-fit inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#7C3AED] border border-[#7C3AED]/15 px-3 py-1 rounded-full bg-[#7C3AED]/5 font-sans">
                SOLUTIONS
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B1530] font-sans">
                Technical Implementations
              </h3>
              <ul className="flex flex-col gap-3.5 mt-1.5">
                {project.features.map((feat, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-605 font-normal"
                  >
                    <div className="w-5.5 h-5.5 rounded-full bg-[#7C3AED]/5 border border-[#7C3AED]/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3 h-3 text-[#7C3AED]" />
                    </div>
                    <span>{feat}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>

          </div>

          {/* Right Sidebar specs widget */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <ScrollReveal direction="right">
              <TiltContainer className="bg-white/60 border border-slate-100 p-8 rounded-[32px] shadow-xl backdrop-blur-xl flex flex-col gap-6">
                
                <h3 className="font-display text-[10px] font-bold tracking-widest text-[#7C3AED] uppercase border-b border-slate-100 pb-3 font-mono">
                  Project Specs
                </h3>

                <div className="flex flex-col gap-5 text-xs sm:text-sm">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/5 border border-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] shrink-0">
                      <Briefcase className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider font-mono">Client</span>
                      <span className="text-[#0B1530] font-semibold mt-0.5">{project.client}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/5 border border-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] shrink-0">
                      <Tag className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider font-mono">Service Focus</span>
                      <span className="text-[#0B1530] font-semibold mt-0.5">{project.service}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/5 border border-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] shrink-0">
                      <Calendar className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider font-mono">Delivery Date</span>
                      <span className="text-[#0B1530] font-semibold mt-0.5">{project.year}</span>
                    </div>
                  </div>

                </div>

                {/* Technologies tags stack */}
                <div className="mt-2 pt-6 border-t border-slate-100 text-left">
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-3.5 block font-mono">
                    Technologies Utilized
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-bold text-[#7C3AED] bg-[#7C3AED]/5 border border-[#7C3AED]/10 rounded-full px-3 py-1 font-sans transition-colors hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/20 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </TiltContainer>
            </ScrollReveal>
          </div>

        </div>

        {/* CTA */}
        <ScrollReveal direction="zoom">
          <div className="mt-20 rounded-[32px] border border-slate-100 bg-slate-900/5 p-8 md:p-14 text-center flex flex-col items-center gap-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-[#7C3AED]/5 to-transparent blur-[80px]" />
            <h3 className="font-display text-xl sm:text-3xl font-black text-[#0B1530] tracking-tight leading-none font-sans">
              Looking for similar technical results?
            </h3>
            <p className="text-[#4A5568] text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
              Our engineers can model a similar high-performance workflow optimized for your specific parameters.
            </p>
            <div className="flex gap-4 mt-2">
              <Button href="/contact" variant="primary" className="bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white shadow-md">
                Request Architecture Session
              </Button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
