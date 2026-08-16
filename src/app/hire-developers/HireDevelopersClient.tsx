"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Database,
  Layers,
  Cpu,
  Smartphone,
  Cloud,
  CheckCircle,
  ShieldCheck,
  Zap,
  Globe,
  Briefcase,
  Users,
  Clock,
  Target,
  PenTool,
  Lock,
  Workflow
} from "lucide-react";

// Data
const expertiseData = [
  { icon: Code, title: "Frontend Development", desc: "React, Next.js, and Vue.js experts for highly interactive and performant UIs." },
  { icon: Database, title: "Backend Development", desc: "Node.js, Python, Go, and Java engineers building robust microservices." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform specialists using Flutter and React Native." },
  { icon: PenTool, title: "UI/UX Design", desc: "Product designers creating intuitive, user-centric interfaces and design systems." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS/GCP certified architects orchestrating Docker and Kubernetes clusters." },
  { icon: Cpu, title: "AI & Machine Learning", desc: "Data scientists and engineers deploying LLMs, RAG, and predictive models." },
  { icon: ShieldCheck, title: "QA & Testing", desc: "Automation and manual QA engineers ensuring zero-defect product launches." },
  { icon: Layers, title: "Full-Stack Engineering", desc: "Versatile engineers capable of handling end-to-end product architecture." }
];

const rolesData = [
  "Senior Software Engineer",
  "Tech Lead / Architect",
  "Product Manager",
  "UI/UX Designer",
  "DevOps Engineer",
  "QA Engineer",
  "Data Scientist",
  "Scrum Master"
];

const processData = [
  { step: "01", title: "Requirement Gathering", desc: "We analyze your tech stack, team culture, and project needs." },
  { step: "02", title: "Candidate Shortlisting", desc: "We match you with the top 1% of pre-vetted engineers." },
  { step: "03", title: "Technical Interview", desc: "You interview and evaluate the selected developers yourself." },
  { step: "04", title: "Seamless Onboarding", desc: "Developers are integrated into your workflow within 48 hours." },
  { step: "05", title: "Ongoing Support", desc: "A dedicated account manager ensures smooth daily operations." }
];

const engagementModels = [
  {
    title: "Dedicated Team",
    desc: "A full-time, autonomous engineering team managed by you. Ideal for long-term product development and rapid scaling.",
    icon: Users
  },
  {
    title: "Staff Augmentation",
    desc: "Add individual, specialized engineers to your existing in-house team to bridge skill gaps and accelerate timelines.",
    icon: Target
  },
  {
    title: "Project Based",
    desc: "Fixed-cost, end-to-end delivery of a specific product or feature set with guaranteed milestones and outcomes.",
    icon: Briefcase
  }
];

const techStackData = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "Go", "AWS", "Docker", "Kubernetes", "PostgreSQL",
  "MongoDB", "GraphQL", "Flutter", "React Native", "Vue.js"
];

export default function HireDevelopersClient() {
  return (
    <div className="portfolio-wrapper min-h-screen bg-white text-[#0F172A] overflow-hidden" style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif" }}>

      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-14 md:pt-44 md:pb-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 text-left lg:pl-4 xl:pl-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit">
              <Users className="w-3.5 h-3.5" />
              <span>Hire Top Talent</span>
            </div>

            <h1 className="mt-2.5 text-2xl font-extrabold leading-[1.16] sm:leading-[1.14] tracking-tight text-[#0F172A] sm:text-3xl lg:text-[2.35rem] xl:text-[2.65rem] font-sans">
              Hire Dedicated <span className="solid-black-text">Software</span> <br className="hidden sm:block" />
              <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>
                Developers
              </span>
            </h1>

            <p className="mt-3 max-w-[510px] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed sm:leading-[1.6] text-slate-700 font-medium font-sans">
              Scale your team with elite, pre-vetted engineers. We provide dedicated frontend, backend, and full-stack developers ready to integrate directly into your workflow and accelerate your roadmap.
            </p>

            <div className="mt-4">
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center gap-2.5 px-6 py-2.5 bg-gradient-to-r from-[#305EFF] via-indigo-600 to-[#305EFF] bg-[length:200%_auto] text-white font-medium text-[14px] rounded-full shadow-xs hover:shadow-md hover:bg-[position:100%_0] transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-0.5"
              >
                <span>Hire Developers Now</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_16px_35px_rgba(0,0,0,0.05)] bg-slate-50 lg:mr-4 xl:mr-6"
          >
            <Image
              src="/hire_dev_hero.png"
              alt="Hire Dedicated Software Developers Team"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 2. DEVELOPER EXPERTISE */}
      <section className="bg-slate-50 py-14 md:py-20 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="flex flex-col items-start text-left gap-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit">
                TECHNICAL EXPERTISE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
                Specialized <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Talent</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-600 max-w-md text-left md:text-right font-sans">
              Hire specialized engineers across the entire technology stack to build, scale, and maintain your digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="bg-white border border-slate-200/90 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.05)] transition-all duration-400 ease-out p-8 flex flex-col gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF] shrink-0">
                    <IconComponent className="w-5 h-5" />
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

      {/* 3. ROLES AND WHY HIRE */}
      <section className="bg-white py-14 md:py-20 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-4">
                AVAILABLE ROLES
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
                Build Your <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Dream Team</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rolesData.map((role, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200/90 bg-slate-50 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#305EFF]" />
                  <span className="font-bold text-sm text-[#0F172A] font-sans">{role}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit mb-4">
                THE ADVANTAGE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
                Why Hire Our <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Developers?</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF] shrink-0 mt-1">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0F172A] font-display">Pre-vetted Top 1% Talent</h4>
                  <p className="text-sm font-medium text-slate-500 font-sans mt-1">Rigorous technical and cultural screening ensures you only interview the best.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0F172A] font-display">Timezone Aligned</h4>
                  <p className="text-sm font-medium text-slate-500 font-sans mt-1">Developers working in overlapping hours with your in-house team for real-time collaboration.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#305EFF]/10 flex items-center justify-center text-[#305EFF] shrink-0 mt-1">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0F172A] font-display">Seamless Communication</h4>
                  <p className="text-sm font-medium text-slate-500 font-sans mt-1">Fluent English speakers who integrate directly into your Slack, Jira, and GitHub.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. HIRING PROCESS */}
      <section className="bg-slate-50 py-14 md:py-20 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="flex flex-col items-start text-left gap-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit">
                SIMPLE ONBOARDING
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
                How to <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Hire</span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
            {processData.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/90 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)] min-w-[250px] hover:border-slate-300 hover:shadow-md transition-all p-6 flex flex-col gap-3 group relative overflow-hidden"
              >
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#305EFF]/5 rounded-full pointer-events-none" />
                <span className="text-xl font-black text-slate-200 font-display mb-1">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-[#0F172A] leading-tight font-display">{step.title}</h3>
                <p className="text-xs leading-relaxed font-medium text-slate-500 font-sans">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ENGAGEMENT MODELS */}
      <section className="bg-white py-14 md:py-20 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="flex flex-col items-start text-left gap-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit">
                FLEXIBLE CONTRACTS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
                Engagement <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Models</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => {
              const IconComponent = model.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-slate-50 border border-slate-200/90 rounded-[32px] p-8 lg:p-10 flex flex-col gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#305EFF] shadow-sm border border-slate-200">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F172A] font-display mb-3">{model.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-slate-500 font-sans">{model.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS (FEATURED ALTERNATING STYLE) */}
      <section className="bg-slate-50 py-14 md:py-20 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_16px_35px_rgba(0,0,0,0.05)] bg-white group">
              <Image
                src="/hire_dev_featured.png"
                alt="Software Engineer Collaborating Remotely"
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
              PARTNERSHIP BENEFITS
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] mb-6 leading-tight font-display tracking-tight">
              Scale Without the <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Overhead</span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-600 font-sans mb-8">
              Skip the arduous recruitment process. We handle the sourcing, vetting, payroll, and retention, so you can focus purely on building your product.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h4 className="text-sm font-bold text-[#0F172A] mb-1 font-display uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#305EFF]" />
                  48-Hour Onboarding
                </h4>
                <p className="text-xs leading-relaxed font-medium text-slate-500 font-sans ml-6">
                  Get developers integrated into your project within two days.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h4 className="text-sm font-bold text-[#0F172A] mb-1 font-display uppercase tracking-wider flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#305EFF]" />
                  Strict IP Protection
                </h4>
                <p className="text-xs leading-relaxed font-medium text-slate-500 font-sans ml-6">
                  Comprehensive NDAs and security protocols to protect your code.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h4 className="text-sm font-bold text-[#0F172A] mb-1 font-display uppercase tracking-wider flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#305EFF]" />
                  Flexible Scaling
                </h4>
                <p className="text-xs leading-relaxed font-medium text-slate-500 font-sans ml-6">
                  Easily scale your team up or down based on project demands.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h4 className="text-sm font-bold text-[#0F172A] mb-1 font-display uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#305EFF]" />
                  Zero Admin
                </h4>
                <p className="text-xs leading-relaxed font-medium text-slate-500 font-sans ml-6">
                  We manage payroll, benefits, hardware, and HR compliance.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 7. TECHNOLOGY STACK (COMPACT BADGES) */}
      <section className="bg-white py-14 md:py-20 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="w-full lg:w-1/3 flex flex-col items-start text-left gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit">
              DEVELOPER STACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.1] font-display text-[#0F172A]">
              Hire for Any <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Technology</span>
            </h2>
          </div>
          <div className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-3">
            {techStackData.map((tech, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-full border border-slate-200/90 bg-white text-sm font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#305EFF]/30 hover:text-[#305EFF] transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (WHITE PREMIUM PANEL) */}
      <section id="contact" className="bg-slate-50 py-14 md:py-20 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] p-8 sm:p-12 md:p-16 text-center flex flex-col items-center gap-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] bg-white"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#305EFF] shadow-xs w-fit relative z-10">
              START HIRING
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] font-display text-[#0F172A] relative z-10">
              Ready to Scale Your <span className="font-black inline-block" style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF" }}>Engineering Team?</span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed font-medium max-w-xl text-slate-600 font-sans relative z-10 mt-2 mb-8">
              Tell us about your project requirements and we'll match you with the perfect developers within 48 hours.
            </p>

            <div className="mt-6 flex items-center justify-center relative z-10">
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center gap-2.5 px-6 py-2.5 bg-gradient-to-r from-[#305EFF] via-indigo-600 to-[#305EFF] bg-[length:200%_auto] text-white font-medium text-[14px] rounded-full shadow-xs hover:shadow-md hover:bg-[position:100%_0] transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-0.5"
              >
                <span>Request Developer Profiles</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
