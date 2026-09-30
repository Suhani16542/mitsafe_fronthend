"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Globe,
  AppWindow,
  GraduationCap,
  Truck,
  Code2,
  Sparkles,
  Layers,
  Building2,
  Cpu,
  ShoppingCart,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Lock,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

// --- WHAT WE BUILD DATA ---
const whatWeBuildData = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "High-converting corporate websites, brand platforms, and modern digital presence tailored for growing companies.",
  },
  {
    icon: AppWindow,
    title: "Web Applications",
    desc: "Robust full-stack web applications, dynamic customer portals, and intuitive cloud-based management dashboards.",
  },
  {
    icon: GraduationCap,
    title: "Education Platforms",
    desc: "Interactive coaching portals, student evaluation workflows, structured learning curriculums, and session management.",
  },
  {
    icon: Truck,
    title: "Logistics & Business Platforms",
    desc: "B2B global trade infrastructure, multi-modal freight portals, customs compliance desks, and supply-chain tools.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored business software, bespoke API integrations, automated operational workflows, and scalable architectures.",
  },
  {
    icon: Layers,
    title: "Interactive / Specialized Platforms",
    desc: "Domain-specific digital solutions, interactive real-time tools, booking engines, and specialized customer funnels.",
  },
];

// --- HOW WE DELIVER DATA ---
const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand business goals, target audience, and core product requirements.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Plan system architecture, UX wireframes, tech stack, and deliverable milestones.",
  },
  {
    step: "03",
    title: "Design",
    desc: "Craft pixel-perfect UI designs, interactive design systems, and responsive layouts.",
  },
  {
    step: "04",
    title: "Develop",
    desc: "Engineer production-ready frontend and backend code with optimal performance.",
  },
  {
    step: "05",
    title: "Test",
    desc: "Execute multi-device testing, security validation, and performance benchmarks.",
  },
  {
    step: "06",
    title: "Launch",
    desc: "Deploy to production cloud infrastructure with continuous monitoring and support.",
  },
];

// --- FEATURED REAL PROJECTS ---
const featuredProjects = [
  {
    id: "jms-groups",
    name: "JMS Groups",
    domain: "jmsgroups.com",
    website: "https://www.jmsgroups.com/",
    category: "Business Website",
    badgeColor: "bg-blue-50 text-[#305EFF] border-blue-200/80",
    shortDescription:
      "JMS Groups is a business-focused digital platform designed to present the organization's services, information and online presence through a professional web experience.",
    image: "/jms_groups_preview.jpg",
    builtHighlights: [
      "Corporate Brand Identity & Digital Presence",
      "Workforce & Talent Consulting Architecture",
      "Interactive Client Inquiries & Intake Funnel",
      "Mobile-Optimized Responsive Web Experience",
    ],
  },
  {
    id: "sadas-chess",
    name: "Sada's Chess Academy",
    domain: "sadaschess.online",
    website: "https://www.sadaschess.online/",
    category: "Education & Coaching Platform",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/80",
    shortDescription:
      "An online chess coaching platform focused on personalized training, tournament preparation, skill development and structured learning for students.",
    image: "/sadas_chess_preview.jpg",
    builtHighlights: [
      "Free 30-Minute Skill Assessment & Demo Booking",
      "Structured Learning Ecosystem & Curriculum",
      "FIDE-Rated Coach Credentials & Asian Medal Honors",
      "Instant WhatsApp Integration & Slot Confirmation",
    ],
  },
  {
    id: "skylink-global",
    name: "SkyLink Global",
    domain: "skylinkglobal.in",
    website: "https://www.skylinkglobal.in/",
    category: "Global Logistics & EXIM Platform",
    badgeColor: "bg-sky-50 text-sky-800 border-sky-200/80",
    shortDescription:
      "A B2B global logistics and EXIM platform connecting international trade, freight forwarding, customs compliance and supply-chain services.",
    image: "/skylink_global_preview.jpg",
    builtHighlights: [
      "Multi-Modal Ocean & Air Cargo Desks",
      "DGFT & Customs Trade Regulatory Architecture",
      "Active Multi-Port Global Trade Corridors Desk",
      "High-Velocity Enterprise B2B Consultation Funnel",
    ],
  },
];

// --- TECHNOLOGIES WE USE ---
const technologiesList = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "REST APIs",
  "Tailwind CSS",
  "GitHub",
  "Vercel",
  "Render",
];

// --- INDUSTRIES WE SERVE ---
const industriesList = [
  { icon: Building2, title: "Business" },
  { icon: GraduationCap, title: "Education" },
  { icon: Truck, title: "Logistics" },
  { icon: Cpu, title: "Technology" },
  { icon: ShoppingCart, title: "E-Commerce" },
  { icon: Briefcase, title: "Professional Services" },
];

export default function PortfolioClient() {
  const { openModal } = useModal();

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-page min-h-screen bg-white text-[#0F172A] selection:bg-[#305EFF]/15 selection:text-[#305EFF] font-sans antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32 bg-white border-b border-slate-100 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        
        {/* Subtle center ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#305EFF]/5 to-sky-400/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10 flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#305EFF] shadow-xs mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR WORK</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-[#0F172A] leading-[1.12]"
          >
            Projects <span className="text-[#305EFF]">We've Built</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 font-medium leading-relaxed"
          >
            Explore digital products, business platforms and technology solutions we've designed and developed for real-world businesses and organizations.
          </motion.p>

          {/* Subtle Agency Highlights Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-700"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/90 shadow-2xs">
              <Zap className="w-4 h-4 text-[#305EFF]" />
              <span>Production-Grade Performance</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/90 shadow-2xs">
              <Layers className="w-4 h-4 text-[#305EFF]" />
              <span>Modern Scalable Stack</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/90 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#305EFF]" />
              <span>Tailored Business Systems</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section className="py-20 md:py-28 lg:py-32 bg-white relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#305EFF] mb-3.5">
              CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A]">
              What We <span className="text-[#305EFF]">Build</span>
            </h2>
            <p className="mt-3.5 text-base text-slate-600 max-w-xl font-normal">
              Specialized digital solutions engineered for growth, usability, and long-term scalability.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whatWeBuildData.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(48,94,255,0.08)] hover:border-[#305EFF]/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-13 h-13 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-[#305EFF] mb-6 group-hover:bg-[#305EFF] group-hover:text-white group-hover:border-[#305EFF] transition-all duration-300 shadow-2xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HOW WE DELIVER (Connected Timeline Process) */}
      <section className="py-20 md:py-28 lg:py-32 bg-slate-50/70 relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#305EFF] mb-3.5">
              METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A]">
              How We <span className="text-[#305EFF]">Deliver</span>
            </h2>
            <p className="mt-3.5 text-base text-slate-600 max-w-xl font-normal">
              A structured 6-step roadmap engineered to take ideas from concept to high-impact production.
            </p>
          </div>

          {/* Timeline Process Grid with Connection */}
          <div className="relative">
            {/* Horizontal connection line for desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-[2px] bg-slate-200/90 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-6 lg:gap-4 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex flex-col items-center text-center bg-white lg:bg-transparent p-6 lg:p-3 rounded-2xl border border-slate-200/90 lg:border-none shadow-xs lg:shadow-none"
                >
                  {/* Step Node */}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#305EFF] text-[#305EFF] font-mono font-bold text-sm flex items-center justify-center shadow-xs mb-4">
                    {step.step}
                  </div>

                  {/* Step Info */}
                  <h3 className="text-base font-bold text-[#0F172A] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDIES (MAIN FOCUS) */}
      <section id="projects" className="py-20 md:py-28 lg:py-36 bg-white relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20 md:mb-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#305EFF] mb-3.5">
              CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black tracking-tight text-[#0F172A] leading-tight">
              Featured <span className="text-[#305EFF]">Case Studies</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl leading-relaxed">
              Real-world digital products and technology platforms engineered for verified organizations.
            </p>
          </div>

          {/* Case Studies Showcase */}
          <div className="flex flex-col gap-24 lg:gap-36">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 1; // Project 1 (Left Image), Project 2 (Right Image), Project 3 (Left Image)
              const isAlternateBg = idx === 1; // Subtle background variation for project 2

              return (
                <div
                  key={project.id}
                  className={`p-6 sm:p-10 lg:p-14 rounded-3xl border border-slate-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300 ${
                    isAlternateBg ? "bg-slate-50/70" : "bg-white"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                    } gap-10 lg:gap-16 items-center`}
                  >
                    {/* Project Image Column (Mockup Browser Style) */}
                    <div className="w-full lg:w-1/2">
                      <div className="group rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_16px_40px_rgba(15,23,42,0.08)] bg-slate-900 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(48,94,255,0.12)]">
                        {/* Browser Chrome Header */}
                        <div className="bg-slate-100 border-b border-slate-200/90 px-4 py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                          </div>
                          
                          {/* Domain Pill */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-500 shadow-2xs">
                            <Lock className="w-2.5 h-2.5 text-emerald-600" />
                            <span>https://{project.domain}</span>
                          </div>

                          <div className="w-10" />
                        </div>

                        {/* Image Preview */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
                          <Image
                            src={project.image}
                            alt={`${project.name} preview`}
                            fill
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                            priority={idx === 0}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Content Column */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                      {/* Category Badge */}
                      <span
                        className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-4 ${project.badgeColor}`}
                      >
                        {project.category}
                      </span>

                      {/* Project Name */}
                      <h3 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-4 leading-tight">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                        {project.shortDescription}
                      </p>

                      {/* "What We Built" Section */}
                      <div className="w-full bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 mb-8 shadow-2xs">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-3.5 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#305EFF]" />
                          <span>What We Built</span>
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {project.builtHighlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="text-xs sm:text-[13px] text-slate-600 flex items-start gap-2 font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#305EFF] mt-1.5 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Link / Button */}
                      <div className="flex items-center">
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#305EFF] text-white font-bold text-sm shadow-sm hover:bg-[#2049DF] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer"
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGIES WE USE */}
      <section className="py-20 md:py-24 bg-slate-50/70 relative border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between">
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#305EFF] mb-3.5">
              TECH STACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A] mb-3.5">
              Technologies <span className="text-[#305EFF]">We Use</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              We leverage modern, verified, and production-grade technologies to engineer high-performance platforms.
            </p>
          </div>

          <div className="w-full lg:w-7/12 flex flex-wrap justify-center lg:justify-end gap-2.5 sm:gap-3">
            {technologiesList.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="px-5 py-2.5 rounded-full border border-slate-200/90 bg-white text-sm font-bold text-slate-700 shadow-2xs hover:border-[#305EFF] hover:text-[#305EFF] transition-colors duration-200 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-20 md:py-28 bg-white relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#305EFF] mb-3.5">
              SECTORS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
              Industries <span className="text-[#305EFF]">We Serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {industriesList.map((ind, idx) => {
              const IconComponent = ind.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#305EFF]/30 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF] mb-3 group-hover:bg-[#305EFF] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    {ind.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 md:py-28 lg:py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 sm:p-12 md:p-16 text-center flex flex-col items-center border border-slate-200/90 shadow-[0_8px_32px_rgba(0,0,0,0.04)] bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#305EFF] mb-6">
              LET'S BUILD TOGETHER
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] mb-4">
              Have a Vision for a <span className="text-[#305EFF]">New Product?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-medium mb-8 leading-relaxed">
              Let's turn your idea into a modern, scalable digital experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => openModal("quote")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#305EFF] hover:bg-[#2049DF] text-white font-bold text-sm sm:text-base rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm sm:text-base rounded-full shadow-2xs hover:border-slate-400 transition-all duration-200 cursor-pointer"
              >
                <span>View Our Work</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
