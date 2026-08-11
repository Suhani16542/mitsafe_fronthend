"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code,
  Smartphone,
  Cloud,
  Settings,
  Bot,
  Building2,
  Zap,
  CheckCircle,
  Globe,
  Palette,
  ShieldCheck,
  Activity,
  Briefcase,
  Terminal
} from "lucide-react";

// --- Custom Counter component ---
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

// --- Data ---
const expertiseData = [
  { icon: Globe, title: "Web Development", desc: "Enterprise Next.js apps, headless CMS & scalable portals." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native iOS/Android & cross-platform Flutter solutions." },
  { icon: Bot, title: "AI & Automation", desc: "LLMs, RAG architectures & intelligent workflow agents." },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS/GCP architectures, scalable clusters & serverless." },
  { icon: Settings, title: "DevOps", desc: "CI/CD pipelines, Docker/K8s & infrastructure as code." },
  { icon: Palette, title: "UI/UX Design", desc: "High-fidelity Figma prototypes & complete design systems." },
  { icon: Building2, title: "Enterprise Software", desc: "Bespoke ERP, CRM & data-intensive admin dashboards." },
  { icon: Zap, title: "Digital Transformation", desc: "Legacy system modernization & workflow digitizing." }
];

const processData = [
  { step: "01", title: "Discover", desc: "Understand business, goals, users, and core requirements." },
  { step: "02", title: "Strategy", desc: "Architect product structure, tech stack, and roadmap." },
  { step: "03", title: "Design", desc: "Create high-fidelity UI/UX wireframes and visual direction." },
  { step: "04", title: "Develop", desc: "Build the product using modern, scalable engineering." },
  { step: "05", title: "Test", desc: "Rigorous testing for performance, security, and bugs." },
  { step: "06", title: "Deploy", desc: "Launch to production with zero-downtime strategies." },
  { step: "07", title: "Support", desc: "Provide ongoing maintenance and iterative improvements." }
];

const capabilitiesData = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", 
  "Go", "AWS", "Docker", "Kubernetes", "PostgreSQL", 
  "GraphQL", "OpenAI", "Flutter", "React Native", "TailwindCSS"
];

const valueData = [
  { icon: ShieldCheck, title: "Security First", desc: "Strict adherence to OWASP guidelines and end-to-end encryption to keep corporate workflows completely secure." },
  { icon: Activity, title: "Scalable Solutions", desc: "Cloud-native architectures built to handle massive concurrent loads and scale automatically." },
  { icon: Briefcase, title: "Reliable Delivery", desc: "Transparent agile sprints ensuring on-time project completion with zero-compromise product launches." },
  { icon: Terminal, title: "Modern Architecture", desc: "Writing clean, type-safe, modular code that is easy to maintain, extend, and deploy rapidly." }
];

export default function CompanyClient() {
  return (
    <div className="portfolio-wrapper min-h-screen bg-white text-[#0F172A] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Services</span>
            </div>

            <h1 className="mt-2.5 text-2xl font-extrabold leading-[1.16] sm:leading-[1.14] tracking-tight text-[#0F172A] sm:text-3xl lg:text-[2.35rem] xl:text-[2.65rem] font-sans">
              Pioneering <span className="solid-black-text">Next-Gen</span> <br className="hidden sm:block" />
              <span className="font-black inline-block solid-blue-text">
                Software
              </span>
            </h1>

            <p className="mt-3 max-w-[510px] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed sm:leading-[1.6] text-slate-700 font-medium font-sans">
              We build next-generation web platforms, secure database clusters, and specialized artificial intelligence models designed to take your enterprise further.
            </p>

            <div className="mt-4">
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#305EFF] via-indigo-600 to-[#305EFF] bg-[length:200%_auto] text-white font-bold text-sm sm:text-[15px] rounded-full shadow-xs hover:shadow-md hover:bg-[position:100%_0] transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_16px_35px_rgba(0,0,0,0.05)] bg-slate-50 group"
          >
            <Image 
              src="/engineering_hero_v2.png" 
              alt="Scalable Software Engineering"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="bg-slate-50 py-16 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200/60">
          {[
            { value: 450, label: "Projects Completed", suffix: "+" },
            { value: 120, label: "Happy Clients", suffix: "+" },
            { value: 45, label: "Team Members", suffix: "" },
            { value: 10, label: "Years Experience", suffix: "+" }
          ].map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center justify-center text-center ${idx === 0 ? "pl-0" : ""}`}>
              <h3 className="text-4xl md:text-5xl font-black font-display text-[#0F172A] tracking-tight flex justify-center items-baseline gap-0.5">
                <Counter value={stat.value} />
                <span className="text-[#305EFF]">{stat.suffix}</span>
              </h3>
              <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ENGINEERING EXPERTISE (WHAT WE DO) */}
      <section className="bg-white py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-0 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
              What We <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Build</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-medium max-w-2xl text-slate-600 font-sans mt-4">
              From high-performance frontend interfaces to complex database architecture, our team is equipped to handle end-to-end product development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {expertiseData.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-slate-200/90 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.05)] transition-all duration-400 ease-out p-8 sm:p-10 flex flex-col gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF] shrink-0 mb-2">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight tracking-tight font-display mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed font-medium text-slate-600 font-sans">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR ENGINEERING PROCESS (TIMELINE) */}
      <section className="bg-slate-50 py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-0 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-4">
              WORKFLOW
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
              How We <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Deliver</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {processData.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/90 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.05)] transition-all duration-400 ease-out p-8 sm:p-10 flex flex-col gap-4 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#305EFF]/5 rounded-bl-[100px] pointer-events-none" />
                <span className="text-[11px] sm:text-xs font-bold px-3 py-1 rounded-md font-mono bg-[#305EFF]/10 text-[#305EFF] w-fit mb-2">
                  PHASE {step.step}
                </span>
                <h3 className="text-xl font-bold leading-tight tracking-tight text-[#0F172A] font-display mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed font-medium text-slate-600 font-sans">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE OUR ENGINEERING TEAM (VALUE PROPOSITION) */}
      <section className="bg-white py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-0 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-4">
              OUR STANDARDS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
              Why Partner <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>With Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            {valueData.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="w-14 h-14 rounded-[16px] bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF] shrink-0 border border-[#305EFF]/15">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight tracking-tight font-display mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed font-medium text-slate-600 font-sans">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING CULTURE / FEATURED SECTION (ALTERNATING STYLE) */}
      <section className="bg-slate-50 py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_16px_35px_rgba(0,0,0,0.05)] bg-white group">
              <Image
                src="/engineering_featured.png"
                alt="Engineering Culture"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-6">
              WORK ENVIRONMENT
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-extrabold text-[#0F172A] mb-6 leading-tight font-display tracking-tight">
              A Culture of <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Excellence</span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-600 font-sans mb-8">
              We operate in an environment that prioritizes logic, security, and scalability. Our culture is formed around collaboration, where every designer and developer critiques, improves, and refines system metrics constantly.
            </p>

            <div className="flex flex-col gap-6">
              <div className="bg-white border border-slate-200/90 rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h4 className="text-sm font-bold text-[#0F172A] mb-3 font-display uppercase tracking-wider flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#305EFF]" />
                  Constant Learning
                </h4>
                <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-500 font-sans sm:ml-8">
                  Weekly code audits and architecture reviews to keep our team sharp.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200/90 rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h4 className="text-sm font-bold text-[#0F172A] mb-3 font-display uppercase tracking-wider flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#305EFF]" />
                  Granular Problem Solving
                </h4>
                <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-500 font-sans sm:ml-8">
                  We tackle complex client problems by breaking them down systematically.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 7. TECHNOLOGY STACK (COMPACT BADGES) */}
      <section className="bg-white py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          <div className="w-full lg:w-1/3 flex flex-col gap-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mx-auto lg:mx-0 mb-4">
              FRAMEWORKS & CLOUD
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A] mb-4">
              Our Technology <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Stack</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-600 font-sans mt-2">
              We leverage modern, robust, and scalable tools to build enterprise-grade software.
            </p>
          </div>
          <div className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-3">
            {capabilitiesData.map((tech, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 rounded-full border border-slate-200/90 bg-white text-sm sm:text-base font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#305EFF]/30 hover:text-[#305EFF] transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (WHITE PREMIUM PANEL) */}
      <section id="contact" className="bg-slate-50 py-16 md:py-24 lg:py-32 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] p-10 sm:p-14 md:p-16 text-center flex flex-col items-center gap-0 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] bg-white"
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#305EFF]/5 via-transparent to-[#305EFF]/5 pointer-events-none" />

            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit relative z-10 mb-6">
              GET IN TOUCH
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display relative z-10 mb-4">
              <span className="solid-black-text">Ready to Build Something</span> <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Extraordinary?</span>
            </h2>
            
            <p className="text-sm sm:text-base leading-relaxed font-medium max-w-xl text-slate-600 font-sans relative z-10 mt-2 mb-8">
              Whether you want to develop an autoscaling SaaS web platform, integrate customized AI chatbots, or modernise old systems, we have the engineering expertise to help.
            </p>
            
            <div className="flex items-center justify-center relative z-10">
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#305EFF] via-indigo-600 to-[#305EFF] bg-[length:200%_auto] text-white font-bold text-sm sm:text-[15px] rounded-full shadow-xs hover:shadow-md hover:bg-[position:100%_0] transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
