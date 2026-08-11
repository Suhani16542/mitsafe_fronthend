"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  AppWindow, 
  Smartphone, 
  ShoppingCart, 
  Cloud, 
  Cpu, 
  Code2, 
  Layout,
  Building,
  GraduationCap,
  HeartPulse,
  Briefcase
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { testimonialsData } from "@/data/testimonials";

// --- DATA MAPPING FOR NEW IMAGES ---
const featuredCases = [
  {
    ...portfolioData.find(p => p.slug === "auro-terra-energy-website-design")!,
    img: "/portfolio_web_new.png"
  },
  {
    ...portfolioData.find(p => p.slug === "alpha-retrieval-ai-chatbots")!,
    img: "/portfolio_ai_new.png"
  },
  {
    ...portfolioData.find(p => p.slug === "fitquest-ios-android")!,
    img: "/portfolio_mobile_new.png"
  },
  {
    ...portfolioData.find(p => p.slug === "core-erp-database")!,
    title: "Global eCommerce Platform",
    category: "eCommerce Solutions",
    summary: "High-performance enterprise eCommerce admin dashboard and storefront.",
    description: "Designed a premium eCommerce platform capable of handling thousands of transactions with a custom admin dashboard.",
    img: "/portfolio_ecommerce_new.png"
  }
];

const expertiseData = [
  { icon: Globe, title: "Website Design", desc: "Corporate sites, landing pages & CMS platforms." },
  { icon: AppWindow, title: "Web Applications", desc: "Complex portals, dashboards & custom web tools." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Native & cross-platform iOS/Android apps." },
  { icon: ShoppingCart, title: "eCommerce Solutions", desc: "Scalable online stores & payment integrations." },
  { icon: Cloud, title: "SaaS Platforms", desc: "Multi-tenant software & subscription systems." },
  { icon: Cpu, title: "AI & Automation", desc: "LLMs, chatbots & intelligent workflow engines." },
  { icon: Code2, title: "Custom Software", desc: "ERP, CRM & bespoke enterprise solutions." },
  { icon: Layout, title: "UI/UX Design", desc: "Wireframes, prototyping & design systems." }
];

const processData = [
  { step: "01", title: "Discover", desc: "Understand business, goals, users, and core requirements." },
  { step: "02", title: "Strategy", desc: "Plan product structure, tech stack, and user journey." },
  { step: "03", title: "Design", desc: "Create high-fidelity UI/UX wireframes and visual direction." },
  { step: "04", title: "Develop", desc: "Build the product using modern, scalable engineering." },
  { step: "05", title: "Test", desc: "Rigorous testing for performance, security, and bugs." },
  { step: "06", title: "Launch", desc: "Deploy to production and provide ongoing improvements." }
];

const capabilitiesData = [
  "React", "Next.js", "Node.js", "Python", "Flutter", "React Native", 
  "AWS", "GCP", "PostgreSQL", "MongoDB", "Figma", "OpenAI", 
  "GraphQL", "Docker", "TailwindCSS", "Shopify"
];

const industriesData = [
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Briefcase, title: "Finance & Tech" },
  { icon: GraduationCap, title: "Education" },
  { icon: ShoppingCart, title: "eCommerce" },
  { icon: Building, title: "Real Estate" },
  { icon: Cloud, title: "SaaS & Startups" },
];

export default function PortfolioClient() {
  return (
    <div className="portfolio-wrapper min-h-screen bg-white text-[#0F172A] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10 flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories & Case Studies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-2.5 text-2xl font-extrabold leading-[1.16] sm:leading-[1.14] tracking-tight text-[#0F172A] sm:text-3xl lg:text-[2.35rem] xl:text-[2.65rem] font-sans"
          >
            Our <span className="solid-black-text">Exclusive</span> <br className="hidden sm:block" />
            <span className="font-black inline-block solid-blue-text">
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 max-w-[510px] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed sm:leading-[1.6] text-slate-700 font-medium font-sans"
          >
            We design and develop custom websites, web applications, mobile platforms, eCommerce stores, and AI-powered solutions that drive business growth. 
          </motion.p>
        </div>
      </section>

      {/* 2. WHAT WE BUILD (Expertise) */}
      <section className="bg-white py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-0 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
              What We <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Build</span>
            </h2>
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

      {/* 3. HOW WE BUILD (Process) */}
      <section className="bg-slate-50 py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-0 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-4">
              OUR PROCESS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
              How We <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Deliver</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processData.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/90 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.05)] transition-all duration-400 ease-out p-8 sm:p-10 flex flex-col gap-4 group"
              >
                <span className="text-[11px] sm:text-xs font-bold px-3 py-1 rounded-md font-mono bg-[#305EFF]/10 text-[#305EFF] w-fit mb-2">
                  STEP {step.step}
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

      {/* 4. FEATURED CASE STUDIES */}
      <section className="bg-white py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-0 mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-4">
              SELECTED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A] mb-4">
              Featured <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Case Studies</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-medium max-w-2xl text-slate-600 font-sans mt-4">
              A deep dive into some of our most impactful projects, showcasing the challenges we solved and the results we delivered.
            </p>
          </div>

          <div className="flex flex-col gap-24 lg:gap-32">
            {featuredCases.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_16px_35px_rgba(0,0,0,0.05)] bg-slate-50 group">
                    <Image
                      src={project.img || ''}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 flex flex-col text-left">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit">
                      {project.category}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-6 leading-tight font-display tracking-tight">
                    {project.title}
                  </h3>

                  <div className="flex flex-col gap-6 mb-10">
                    <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] font-display mb-3">
                        The Challenge
                      </h4>
                      <p className="text-sm leading-relaxed font-medium text-slate-600 font-sans">
                        {project.summary}
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] font-display mb-3">
                        The Solution
                      </h4>
                      <p className="text-sm leading-relaxed font-medium text-slate-600 font-sans">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 text-[#305EFF] hover:text-indigo-600 font-display group/link"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-4 h-4 text-[#305EFF] group-hover/link:text-indigo-600 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGIES */}
      <section className="bg-slate-50 py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          <div className="w-full lg:w-1/3 flex flex-col gap-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mx-auto lg:mx-0 mb-4">
              CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A] mb-4">
              <span className="solid-black-text">Technologies</span> <span className="font-extrabold inline-block solid-blue-text">We Use</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-600 font-sans mt-4">
              We leverage modern, robust, and scalable technologies to build enterprise-grade digital solutions.
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

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="bg-white py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-0 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-4">
              INDUSTRIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
              Industries We <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Serve</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {industriesData.map((ind, idx) => {
              const IconComponent = ind.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/90 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.05)] transition-all duration-400 ease-out p-8 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#305EFF]/5 flex items-center justify-center text-[#305EFF] mb-2">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#0F172A] font-display">{ind.title}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="bg-slate-50 py-16 md:py-24 lg:py-28 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-0 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-4">
              SUCCESS STORIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
              What Clients <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonialsData.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-slate-200/90 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8 sm:p-10 flex flex-col justify-between text-left relative overflow-hidden group hover:border-slate-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.05)] transition-all duration-400 ease-out"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#305EFF] to-[#305EFF]/40" />
                <p className="text-sm sm:text-base text-slate-500 italic leading-relaxed font-medium font-sans">
                  "{t.quote}"
                </p>
                
                <div className="pt-6 border-t border-slate-100 mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-base font-bold text-[#305EFF] font-display">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0F172A] font-display mb-1">
                      {t.name}
                    </h4>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">
                      {t.role}, {t.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section id="contact" className="bg-white py-16 md:py-24 lg:py-32 relative overflow-hidden border-t border-slate-100 px-5 sm:px-8 lg:px-12">
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
              START YOUR PROJECT
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A] relative z-10 mb-4">
              Have a Vision for a <span className="font-extrabold inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>New Product?</span>
            </h2>
            
            <p className="text-sm sm:text-base leading-relaxed font-medium max-w-xl text-slate-600 font-sans relative z-10 mt-2 mb-8">
              Turn your idea into a scalable digital reality. Our engineering and design team is ready to deliver a premium product tailored to your business goals.
            </p>
            
            <div className="flex items-center justify-center relative z-10">
              {/* Using EXACT same button style from Navbar */}
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
