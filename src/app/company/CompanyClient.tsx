"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  motion, 
  useInView 
} from "framer-motion";
import { 
  Brain, 
  Code, 
  Smartphone, 
  Palette, 
  Cloud, 
  Settings, 
  Bot, 
  Building2, 
  Zap, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Sliders,
  Users,
  Clock,
  Laptop,
  CheckCircle
} from "lucide-react";
import LottieAnimation from "@/components/LottieAnimation";
import Button from "@/components/Button";

// Custom Counter component to animate numbers when they scroll into view
const Counter = ({ value, duration = 1.5 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    if (start === end) return;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 12);
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// SVG curved dividers
const CurvedDividerTop = ({ className = "" }: { className?: string }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${className}`}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[90px]">
      <path 
        d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z" 
        className="fill-[#071426]"
      />
    </svg>
  </div>
);

const CurvedDividerBottom = ({ className = "" }: { className?: string }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${className}`}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[90px]">
      <path 
        d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" 
        className="fill-[#0B1A2E]"
      />
    </svg>
  </div>
);

// High-fidelity animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(3px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

const fadeInUpStagger = {
  hidden: { opacity: 0, y: 35, scale: 0.96, filter: "blur(3px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -45, filter: "blur(3px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 45, filter: "blur(3px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

export default function CompanyClient() {
  return (
    <div className="cosmic-company-wrapper bg-white text-[#0F172A] min-h-screen relative font-sans overflow-x-hidden">
      
      {/* Dynamic Background Fireflies & Floating Light Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.08, 0.22, 0.08] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] left-[4%] w-[380px] h-[380px] bg-[#2563FF]/8 rounded-full blur-[90px]"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, -25, 0], opacity: [0.06, 0.18, 0.06] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[38%] right-[4%] w-[480px] h-[480px] bg-[#7C3AED]/6 rounded-full blur-[105px]"
        />
        <motion.div 
          animate={{ y: [0, -25, 0], x: [0, -12, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[22%] left-[8%] w-[420px] h-[420px] bg-emerald-500/5 rounded-full blur-[85px]"
        />

        {/* Small floating firefly nodes */}
        {[
          { left: "10%", top: "20%", size: 3, delay: 0 },
          { left: "85%", top: "15%", size: 2.5, delay: 2 },
          { left: "20%", top: "50%", size: 3.5, delay: 1.5 },
          { left: "75%", top: "65%", size: 2, delay: 3.5 },
          { left: "40%", top: "80%", size: 3, delay: 0.8 },
          { left: "88%", top: "45%", size: 2.5, delay: 2.2 }
        ].map((f, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0.1, 0.6, 0.1], 
              y: [0, -15, 0],
              x: [0, 8, 0]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: f.delay 
            }}
            className="absolute rounded-full bg-[#2563FF]"
            style={{
              left: f.left,
              top: f.top,
              width: `${f.size}px`,
              height: `${f.size}px`,
              boxShadow: `0 0 10px #2563FF`
            }}
          />
        ))}
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-36 pb-32 flex flex-col items-center text-center px-6 lg:px-8 bg-white overflow-hidden z-10">
        
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Lottie Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-[280px] h-[220px] sm:w-[360px] sm:h-[280px] md:w-[480px] md:h-[350px] mb-8 relative flex justify-center items-center"
          >
            <LottieAnimation 
              src="/animations/Wondershare Landing Page.json" 
              className="w-full h-full animate-pulse-slow" 
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(0,212,255,0.25)] bg-[#2563FF]/10 px-4.5 py-1.5 text-xs font-semibold tracking-wider text-[#2563FF] uppercase backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Empowering Digital Growth
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl text-slate-900"
          >
            Engineering the Future of <br />
            <span className="font-extrabold inline-block" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Modern Technology</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-650 max-w-3xl leading-relaxed font-normal"
          >
            We build next-generation web platforms, secure database clusters, and specialized artificial intelligence models designed to take your enterprise further.
          </motion.p>
        </div>

        {/* Curved Wave divider at the bottom of the section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[70px]">
            <path 
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* 2. About the Company Section */}
      <section className="relative py-24 bg-white z-10 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={slideInLeft}
                className="flex flex-col gap-4"
              >
                <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
                  // WHO WE ARE
                </span>
                <h2 
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
                >
                  Pioneering <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Next-Gen Software</span> & Intelligent Systems
                </h2>
                <p className="text-sm sm:text-base text-slate-650 leading-relaxed font-normal">
                  Modern Technology is a premier software engineering firm built around solving complex system problems. We write premium TypeScript systems, orchestrate secure distributed cloud infrastructure, and develop tailored machine learning tools.
                </p>
                <p className="text-sm sm:text-base text-slate-650 leading-relaxed font-normal">
                  We exist to bridge the gap between high-level business goals and high-performance technical execution. By aligning system architectures with operational requirements, we build tools that scale automatically and keep corporate workflows completely secure.
                </p>
              </motion.div>

              {/* Vision, Mission, and Philosophy Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
                {[
                  { title: "Our Vision", desc: "To lead global digital innovation with systems that scale automatically and operate safely.", border: "border-[#2563FF]/20 hover:border-[#2563FF]/45 hover:shadow-[0_12px_24px_rgba(0,212,255,0.12)]", glow: "text-[#1D4ED8]" },
                  { title: "Our Mission", desc: "To build zero-compromise digital products focused on code speed, modularity, and high security.", border: "border-[#7C3AED]/20 hover:border-[#7C3AED]/45 hover:shadow-[0_12px_24px_rgba(124,58,237,0.12)]", glow: "text-[#1D4ED8]" },
                  { title: "Philosophy", desc: "Innovation without stability is a liability. We prioritize customer metrics and systems uptime above all.", border: "border-emerald-500/20 hover:border-emerald-500/45 hover:shadow-[0_12px_24px_rgba(16,185,129,0.12)]", glow: "text-[#1D4ED8]" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUpStagger}
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className={`bg-slate-50/60 border border-slate-200 rounded-2xl p-5 backdrop-blur-sm cursor-default transition-all duration-300 ${item.border}`}
                  >
                    <h4 className={`text-sm font-bold mb-2 ${item.glow}`}>{item.title}</h4>
                    <p className="text-xs text-slate-650 leading-relaxed font-normal">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Futuristic Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={slideInRight}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563FF]/15 to-transparent rounded-[32px] blur-2xl pointer-events-none" />
              <div className="relative border border-slate-200 rounded-[32px] overflow-hidden shadow-lg aspect-[4/3] w-full group/img">
                <Image 
                  src="/about_company.png" 
                  alt="Futuristic software architecture illustration" 
                  fill
                  className="object-cover group-hover/img:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. What We Do Section (Animated Cards) */}
      <section className="relative py-24 bg-white px-6 lg:px-8 border-t border-b border-slate-200 z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
              // WHAT WE DO
            </span>
            <h2 
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-3"
            >
              Enterprise-Grade <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Tech Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Solutions", icon: Brain, desc: "Developing state-of-the-art predictive models, NLP frameworks, and AI workflows tailored to your operational endpoints.", color: "border-[#7C3AED]/20 hover:border-[#7C3AED]/45 hover:shadow-[0_15px_30px_rgba(124,58,237,0.18)]" },
              { title: "Web Development", icon: Code, desc: "Engineering modular Next.js web applications, headless CMS platforms, and high-performance, responsive systems.", color: "border-[#2563FF]/20 hover:border-[#2563FF]/45 hover:shadow-[0_15px_30px_rgba(0,212,255,0.18)]" },
              { title: "Mobile App Development", icon: Smartphone, desc: "Building fluid cross-platform (React Native/Flutter) and native mobile apps designed with robust offline caching.", color: "border-[#008FED]/20 hover:border-[#008FED]/45 hover:shadow-[0_15px_30px_rgba(0,143,237,0.18)]" },
              { title: "UI/UX Design", icon: Palette, desc: "Formulating premium visual guidelines, interactive layout mockups, and client journeys centered on conversion metrics.", color: "border-purple-500/20 hover:border-purple-500/45 hover:shadow-[0_15px_30px_rgba(168,85,247,0.18)]" },
              { title: "Cloud Infrastructure", icon: Cloud, desc: "Orchestrating auto-scaling cloud clusters, server arrays, database replication, and zero-downtime architecture.", color: "border-emerald-500/20 hover:border-emerald-500/45 hover:shadow-[0_15px_30px_rgba(16,185,129,0.18)]" },
              { title: "DevOps", icon: Settings, desc: "Configuring complete CI/CD pipelines, containerized deployments via Docker and Kubernetes, and telemetry suites.", color: "border-rose-500/20 hover:border-rose-500/45 hover:shadow-[0_15px_30px_rgba(244,63,94,0.18)]" },
              { title: "AI Automation", icon: Bot, desc: "Automating routine company operations using customized autonomous LLM agents that query local database arrays safely.", color: "border-teal-500/20 hover:border-teal-500/45 hover:shadow-[0_15px_30px_rgba(20,184,166,0.18)]" },
              { title: "Enterprise Software", icon: Building2, desc: "Developing school ERP systems, custom internal business CRM portals, and scalable backends designed for team execution.", color: "border-indigo-500/20 hover:border-indigo-500/45 hover:shadow-[0_15px_30px_rgba(99,102,241,0.18)]" },
              { title: "Digital Transformation", icon: Zap, desc: "Migrating spreadsheet systems into integrated modern cloud workflows, ensuring 100% data integrity and accuracy.", color: "border-amber-500/20 hover:border-amber-500/45 hover:shadow-[0_15px_30px_rgba(245,158,11,0.18)]" }
            ].map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUpStagger}
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`bg-white border ${srv.color} rounded-[24px] p-6 shadow-sm flex flex-col justify-between gap-5 relative overflow-hidden group hover:bg-slate-50 transition-all duration-300 cursor-default`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#2563FF] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors duration-250">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How We Work Section (Timeline) */}
      <section className="relative py-24 bg-white px-6 lg:px-8 overflow-hidden z-10">
        
        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
              // OUR PROCESS
            </span>
            <h2 
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-3"
            >
              How We Deliver <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Excellence</span>
            </h2>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative border-l border-[#2563FF]/25 pl-8 ml-4 sm:ml-6 flex flex-col gap-12">
            {[
              { step: "01", title: "Discovery", desc: "We audit your existing tech stack, study operational bottlenecks, and finalize granular product requirements." },
              { step: "02", title: "Strategy", desc: "We model microservice architectures, finalize database indices, and design strict system security policies." },
              { step: "03", title: "Design", desc: "We sketch high-fidelity Figma screens and test prototypes to confirm user flow ergonomics and visual themes." },
              { step: "04", title: "Development", desc: "Our engineers write modular TypeScript code and build secure custom AI features using code standards." },
              { step: "05", title: "Testing", desc: "We run automated end-to-end integration tests, benchmark latency timings, and conduct cybersecurity reviews." },
              { step: "06", title: "Deployment", desc: "We configure autoscale triggers, push deployments to cloud providers, and sync DNS parameters." },
              { step: "07", title: "Support & Maintenance", desc: "We run 24/7 active telemetry audits, cloud resource assessments, and scale operations continuously." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.05, ease: "easeOut" }}
                whileHover={{ x: 8 }}
                className="relative group cursor-default"
              >
                {/* Timeline node icon indicator */}
                <div className="absolute -left-[45px] top-1.5 w-8 h-8 rounded-full bg-white border border-[#2563FF]/35 flex items-center justify-center text-xs font-bold text-[#2563FF] group-hover:bg-[#2563FF] group-hover:text-white transition-colors duration-300 shadow-md shadow-[#2563FF]/10">
                  {step.step}
                </div>
                <div className="bg-slate-50/50 border border-slate-200 rounded-2xl p-6 hover:border-[#2563FF]/30 hover:bg-slate-50/80 transition-all duration-300 shadow-sm">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="relative py-24 bg-white px-6 lg:px-8 border-t border-b border-slate-200 z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
              // VALUE PROPOSITION
            </span>
            <h2 
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-3"
            >
              Why Partner <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>With Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Innovation First", icon: Sparkles, desc: "We implement modern advancements in AI/LLMs and container systems to give you a competitive edge." },
              { title: "Strict Security", icon: ShieldAlert, desc: "We engineer solutions incorporating end-to-end data encryption and strict network access control." },
              { title: "Automatic Scale", icon: Sliders, desc: "All our architectures automatically scale up under heavy workloads, preserving speed metrics." },
              { title: "Peak Performance", icon: Zap, desc: "We optimize database indexes and configure cache systems for minimal application loading times." },
              { title: "Elite Tech Team", icon: Users, desc: "Our staff consists of seasoned engineers who write modular code following strict formatting criteria." },
              { title: "24/7 Monitoring", icon: Clock, desc: "Our active support monitors servers round-the-clock to prevent issues and maintain high uptime." },
              { title: "Modern Tech Stack", icon: Laptop, desc: "We utilize robust libraries (React, Next.js, Node.js) that offer safety and modularity." },
              { title: "Quality Assurance", icon: CheckCircle2, desc: "Every project undergoes extensive manual checks and unit testing before it is launched." }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-55px" }}
                  variants={fadeInUpStagger}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-3.5 hover:border-[#2563FF]/30 hover:bg-white/80 hover:shadow-[0_15px_30px_rgba(0,212,255,0.15)] transition-all duration-300 cursor-default group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2563FF]/10 flex items-center justify-center text-[#2563FF] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors duration-200">{item.title}</h4>
                  <p className="text-xs text-slate-650 leading-relaxed font-normal">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Company Statistics Section (Animated Counters) */}
      <section className="relative py-20 bg-white px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={imageReveal}
            className="bg-slate-50/50 border border-slate-200 rounded-[32px] p-10 md:p-14 backdrop-blur-md shadow-lg relative overflow-hidden"
          >
            {/* Soft decorative background circles */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#2563FF]/5 rounded-full blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#7C3AED]/5 rounded-full blur-[60px]" />

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center relative z-10">
              {[
                { value: 450, label: "Projects Completed", suffix: "+" },
                { value: 120, label: "Happy Clients", suffix: "+" },
                { value: 45, label: "Team Members", suffix: "" },
                { value: 18, label: "Countries Served", suffix: "" },
                { value: 10, label: "Years of Experience", suffix: "+" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight flex justify-center items-baseline gap-0.5">
                    <Counter value={stat.value} />
                    <span className="text-[#1D4ED8] font-semibold">{stat.suffix}</span>
                  </h3>
                  <span className="text-xs sm:text-sm text-slate-600 uppercase font-semibold tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Team Culture Section */}
      <section className="relative py-24 bg-white px-6 lg:px-8 border-b border-slate-200 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Futuristic Image with Reveal */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={slideInLeft}
              className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/15 to-transparent rounded-[32px] blur-2xl pointer-events-none" />
              <div className="relative border border-slate-200 rounded-[32px] overflow-hidden shadow-lg aspect-[4/3] w-full group/img">
                <Image 
                  src="/team_culture.png" 
                  alt="Modern Technology team culture illustration" 
                  fill
                  className="object-cover group-hover/img:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
              
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={slideInRight}
                className="flex flex-col gap-4"
              >
                <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
                  // TEAM CULTURE
                </span>
                <h2 
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
                >
                  A Culture Built on <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Engineering Integrity</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-650 leading-relaxed font-normal">
                  We believe that great software is created in environments that nurture intellectual curiosity and technical rigor. Our culture is formed around collaboration, where every designer and developer critiques, improves, and refines system metrics constantly.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                {[
                  { title: "Constant Learning", desc: "We host weekly code audits and architecture reviews to keep our team sharp and updated on frameworks." },
                  { title: "Deep Research", desc: "We dedicate development cycles to model local neural networks, ensuring we stay ahead in automation tech." },
                  { title: "Creativity Unleashed", desc: "We foster zero-silo discussions where team members are encouraged to suggest new UX concepts." },
                  { title: "Granular Problem Solving", desc: "We tackle complex client problems by breaking them down systematically into components." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUpStagger}
                    whileHover={{ x: 4 }}
                    className="flex gap-4 cursor-default group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/25 flex items-center justify-center text-[#7C3AED] shrink-0 mt-0.5 group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-255">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors duration-200">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Technology Stack Section */}
      <section className="relative py-24 bg-white px-6 lg:px-8 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
              // MODERN TECH STACK
            </span>
            <h2 
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-3"
            >
              Technologies We <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Utilize</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { name: "React", type: "Frontend Library", glow: "hover:border-[#2563FF]/35 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]", color: "text-[#1D4ED8]" },
              { name: "Next.js", type: "React Framework", glow: "hover:border-slate-300 hover:shadow-[0_0_15px_rgba(15,23,42,0.08)]", color: "text-slate-900" },
              { name: "TypeScript", type: "Typed JS Language", glow: "hover:border-blue-500/35 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]", color: "text-[#1D4ED8]" },
              { name: "Node.js", type: "JS Runtime Environment", glow: "hover:border-emerald-500/35 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]", color: "text-[#1D4ED8]" },
              { name: "Python", type: "AI & Data Science", glow: "hover:border-yellow-500/35 hover:shadow-[0_0_15px_rgba(234,179,8,0.15)]", color: "text-[#1D4ED8]" },
              { name: "AI / LLMs", type: "Machine Learning models", glow: "hover:border-purple-500/35 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]", color: "text-[#1D4ED8]" },
              { name: "Cloud Integration", type: "Autoscaling Cloud Systems", glow: "hover:border-sky-500/35 hover:shadow-[0_0_15px_rgba(14,165,233,0.15)]", color: "text-[#1D4ED8]" },
              { name: "Databases (SQL/NoSQL)", type: "Secure Data Warehouses", glow: "hover:border-indigo-500/35 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]", color: "text-[#1D4ED8]" }
            ].map((tech, idx) => (
              <motion.div 
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUpStagger}
                whileHover={{ y: -5, scale: 1.025 }}
                className={`bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center gap-2 transition-all duration-305 cursor-default ${tech.glow}`}
              >
                <div className={`text-2xl font-bold font-display ${tech.color}`}>{tech.name}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{tech.type}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="relative py-28 bg-white z-10 px-6 lg:px-8 border-t border-slate-200 flex flex-col items-center overflow-hidden">
        {/* Soft floating glow circle */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#2563FF]/6 rounded-full blur-[80px] pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={imageReveal}
          whileHover={{ scale: 1.008 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto text-center border border-slate-200 bg-slate-50/50 rounded-[32px] p-8 md:p-14 shadow-2xl relative z-10 flex flex-col items-center gap-6 hover:border-[#2563FF]/30 transition-all duration-300"
        >
          <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
            // GET IN TOUCH
          </span>
          <h2 
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            Ready to Build Something <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Extraordinary?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-650 max-w-2xl leading-relaxed font-normal">
            Whether you want to develop an autoscaling SaaS web platform, integrate customized AI chatbots, or modernise old systems, we have the engineering expertise to deploy solutions that convert metrics.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            {/* Get a Quote button matching exact capsule gradient badge design */}
            <div className="rounded-2xl relative p-[2px] bg-gradient-to-r from-[#2563FF] via-[#00D4FF] to-[#2563FF] bg-[length:200%_auto] shadow-[0_0_20px_rgba(37,99,255,0.4)]">
              <Link
                href="/get-a-quote"
                className="group relative inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-extrabold text-sm rounded-[14px] transition-all duration-300 overflow-hidden z-10"
              >
                <span className="tracking-wide relative z-20 text-white font-black">Get a Quote</span>
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#00D4FF] flex items-center justify-center text-white shadow-md relative z-20 group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Contact Our Engineers button matching exact capsule gradient badge design */}
            <div className="rounded-2xl relative p-[2px] bg-gradient-to-r from-[#2563FF] via-[#00D4FF] to-[#2563FF] bg-[length:200%_auto] shadow-[0_0_20px_rgba(37,99,255,0.4)]">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-extrabold text-sm rounded-[14px] transition-all duration-300 overflow-hidden z-10"
              >
                <span className="tracking-wide relative z-20 text-white font-black">Contact Our Engineers</span>
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#00D4FF] flex items-center justify-center text-white shadow-md relative z-20 group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
