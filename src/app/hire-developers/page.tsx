"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle, 
  HelpCircle, 
  Briefcase, 
  Code, 
  Database, 
  Cpu, 
  Smartphone, 
  Palette, 
  Cloud, 
  Layers, 
  UserCheck, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import LottieAnimation from "@/components/LottieAnimation";

const developerCategories = [
  {
    role: "Frontend Developers",
    desc: "Specialists in React, Next.js, Vue, and high-performance UI libraries.",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux"]
  },
  {
    role: "Backend Developers",
    desc: "Experts in Go, Node.js, Python, PostgreSQL, and scalable microservices.",
    icon: Database,
    skills: ["Go", "Node.js", "Python", "PostgreSQL", "gRPC", "Docker"]
  },
  {
    role: "Full Stack Engineers",
    desc: "Versatile builders capable of managing end-to-end database-to-UI architectures.",
    icon: Layers,
    skills: ["MERN Stack", "Next.js Fullstack", "SST / AWS", "GraphQL"]
  },
  {
    role: "AI & Automation Engineers",
    desc: "Engineers specializing in RAG architectures, custom agents, and LLM integrations.",
    icon: Cpu,
    skills: ["OpenAI API", "LangChain", "Pinecone", "Python", "Vector Databases"]
  },
  {
    role: "Mobile App Developers",
    desc: "Craftsmen for cross-platform Flutter/React Native or native Android & iOS code.",
    icon: Smartphone,
    skills: ["Flutter", "React Native", "Swift", "Kotlin", "Offline Sync"]
  },
  {
    role: "UI/UX Designers",
    desc: "Visual thinkers designing responsive layouts, assets, and corporate design guides.",
    icon: Palette,
    skills: ["Figma", "Adobe Suite", "Prototyping", "Design Systems"]
  },
  {
    role: "DevOps & Cloud Specialists",
    desc: "Architects for automated CI/CD schedules, Terraform, and AWS cluster management.",
    icon: Cloud,
    skills: ["AWS", "Docker", "Terraform", "Kubernetes", "CI/CD Pipelines"]
  }
];

const hiringSteps = [
  {
    step: "01",
    title: "Requirement Scoping",
    desc: "Share your developer needs, technologies, and workflow details with our architects."
  },
  {
    step: "02",
    title: "Candidate Matching",
    desc: "We screen and select developers matching your tech stack and operational schedule."
  },
  {
    step: "03",
    title: "Interview & Sandbox",
    desc: "Conduct technical interviews or assign a short sandbox test task to verify skills."
  },
  {
    step: "04",
    title: "Seamless Onboarding",
    desc: "Integrate the matched developers directly into your Slack, GitHub, and daily standups."
  }
];

const engagementModels = [
  {
    title: "Dedicated Monthly Developers",
    desc: "Full-time (160 hours/month) engineers integrated into your team, focused exclusively on your product pipeline.",
    badge: "Most Popular",
    benefits: ["Fully integrated", "Standard daily syncs", "Flexible roadmap scaling"]
  },
  {
    title: "Time & Material Hourly basis",
    desc: "Hire technical experts for custom tasks on an hourly basis. Perfect for bug patching or feature updates.",
    badge: "Flexible Spans",
    benefits: ["Pay only for hours run", "Weekly work logs", "Fast task prioritization"]
  },
  {
    title: "Fixed Price Projects",
    desc: "Provide layout maps and scope details. We build, host, and deliver the system for a predefined cost.",
    badge: "Milestone Driven",
    benefits: ["Predefined budget cap", "Structured milestones", "Guaranteed system handoff"]
  }
];

const faqs = [
  {
    q: "How quickly can your developers start working?",
    a: "Depending on your technology needs, we can match and deploy developers in as little as 3 to 5 business days."
  },
  {
    q: "Do your developers work in my local time zone?",
    a: "Yes, our developers adjust their schedules to ensure a minimum of 3-4 hours of real-time overlap for standups and Slack coordination."
  },
  {
    q: "What happens if a developer is not a good fit?",
    a: "We offer a 14-day zero-risk trial period. If you are unsatisfied, we will replace the developer immediately at no extra cost."
  },
  {
    q: "Can I transition contract developers to full-time hires later?",
    a: "Yes, we support contract-to-hire options. Speak with our engagement managers to map out the transition terms."
  }
];

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
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
};

export default function HireDevelopersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="cosmic-hire-wrapper min-h-screen relative overflow-hidden bg-white text-[#0F172A] transition-colors duration-300">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563FF/5_1px,transparent_1px),linear-gradient(to_bottom,#2563FF/5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-6 lg:px-8 z-10 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563FF]/5 border border-[#2563FF]/15 text-[10px] font-bold text-[#2563FF] uppercase tracking-widest font-mono w-fit">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Scale Your Engineering Capacity</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hire Elite <br />
              <span className="font-black inline-block" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>
                Software Engineers
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
              Add experienced, vetted technical talent directly to your sprint teams. We provide full-time frontend, backend, full-stack, and AI automation specialists matching your scheduling needs.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <div className="rounded-2xl relative p-[2px] bg-gradient-to-r from-[#2563FF] via-[#00D4FF] to-[#2563FF] bg-[length:200%_auto] shadow-[0_0_20px_rgba(37,99,255,0.4)]">
                <Link
                  href="#hire-form"
                  className="group relative inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-extrabold text-sm rounded-[14px] transition-all duration-300 overflow-hidden z-10"
                >
                  <span className="tracking-wide relative z-20 text-white font-black">Find Developers Now</span>
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#00D4FF] flex items-center justify-center text-white shadow-md relative z-20 group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </div>

              <div className="rounded-2xl relative p-[2px] bg-gradient-to-r from-[#2563FF] via-[#00D4FF] to-[#2563FF] bg-[length:200%_auto] shadow-[0_0_20px_rgba(37,99,255,0.4)]">
                <Link
                  href="#categories"
                  className="group relative inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-extrabold text-sm rounded-[14px] transition-all duration-300 overflow-hidden z-10"
                >
                  <span className="tracking-wide relative z-20 text-white font-black">Explore Tech Specialities</span>
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#00D4FF] flex items-center justify-center text-white shadow-md relative z-20 group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 35, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-center h-[280px] sm:h-[350px] lg:h-[450px]"
          >
            <div className="w-full h-full max-w-[550px] bg-white rounded-3xl border border-slate-200 p-4 shadow-lg backdrop-blur-sm relative overflow-hidden">
              <LottieAnimation 
                src="/animations/development.json" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Why Choose Our Developers */}
      <section className="py-20 bg-white border-y border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16 flex flex-col gap-3"
          >
            <span className="text-[10px] font-bold tracking-widest text-[#2563FF] uppercase font-mono">
              ENGINEERING STANDARDS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              Why Teams <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Trust Our Developers</span>
            </h2>
            <div className="w-12 h-1 bg-[#1D4ED8] mx-auto rounded-full mt-2" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Zero-Time Lag Integration", desc: "Our developers sync to your local schedules and communicate via Slack/Discord, ensuring smooth day-to-day coordination." },
              { icon: ShieldCheck, title: "100% IP & Source Control", desc: "All source code is committed directly to your private GitHub/GitLab repositories. NDA protections are fully guaranteed." },
              { icon: Calendar, title: "14-Day Zero-Risk Trial", desc: "Verify performance for two full weeks. If the matched engineer is not a perfect fit, we will make a replacement with zero fee." }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUpStagger}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col gap-4 text-left shadow-sm backdrop-blur-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#2563FF]/10 flex items-center justify-center text-[#1D4ED8]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Developer Categories */}
      <section id="categories" className="py-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 bg-white">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center mb-16 flex flex-col gap-3"
        >
          <span className="text-[10px] font-bold tracking-widest text-[#2563FF] uppercase font-mono">
            TALENT SPECTRUM
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            Hire by <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Technical Role</span>
          </h2>
          <div className="w-12 h-1 bg-[#1D4ED8] mx-auto rounded-full mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developerCategories.map((dev, idx) => {
            const Icon = dev.icon;
            return (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUpStagger}
                whileHover={{ y: -8, scale: 1.015 }}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-md flex flex-col justify-between text-left group"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#2563FF]/10 flex items-center justify-center text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                    {dev.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {dev.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6 flex flex-wrap gap-1">
                  {dev.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-bold px-2 py-0.5 rounded border border-[#2563FF]/15 bg-[#2563FF]/5 text-slate-650"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Hiring Process Steps (Timeline) */}
      <section className="py-20 bg-white border-y border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16 flex flex-col gap-3"
          >
            <span className="text-[10px] font-bold tracking-widest text-[#2563FF] uppercase font-mono">
              WORKFLOW TIMELINE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              Hiring Process in <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>4 Steps</span>
            </h2>
            <div className="w-12 h-1 bg-[#1D4ED8] mx-auto rounded-full mt-2" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {hiringSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUpStagger}
                whileHover={{ y: -6 }}
                className="flex flex-col gap-4 text-left bg-white border border-slate-200 rounded-3xl p-6 relative z-10 backdrop-blur-md transition-all duration-300"
              >
                <span className="font-mono text-3xl font-black text-[#1D4ED8]">
                  {step.step}
                </span>
                <h3 className="font-display text-base font-bold text-slate-900 mt-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 bg-white">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center mb-16 flex flex-col gap-3"
        >
          <span className="text-[10px] font-bold tracking-widest text-[#2563FF] uppercase font-mono">
            ENGAGEMENT MODELS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            Flexible <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Hiring Models</span>
          </h2>
          <div className="w-12 h-1 bg-[#1D4ED8] mx-auto rounded-full mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {engagementModels.map((model, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUpStagger}
              whileHover={{ y: -8, scale: 1.015 }}
              className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm backdrop-blur-md flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <span className="text-[8px] font-bold font-mono tracking-widest uppercase bg-[#2563FF]/10 border border-[#2563FF]/20 text-[#1D4ED8] px-2.5 py-1 rounded">
                  {model.badge}
                </span>
              </div>

              <div className="flex flex-col gap-5">
                <h3 className="font-display text-xl font-bold text-slate-900 pr-10">
                  {model.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {model.desc}
                </p>
                
                <ul className="flex flex-col gap-2.5 mt-2">
                  {model.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="text-xs text-slate-650 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100">
                <div className="rounded-2xl relative p-[2px] bg-gradient-to-r from-[#2563FF] via-[#00D4FF] to-[#2563FF] bg-[length:200%_auto] shadow-[0_0_20px_rgba(37,99,255,0.3)]">
                  <Link
                    href="#hire-form"
                    className="group relative inline-flex items-center justify-between w-full pl-6 pr-2.5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-extrabold text-xs rounded-[14px] transition-all duration-300 overflow-hidden z-10"
                  >
                    <span className="tracking-wide relative z-20 text-white font-black uppercase">Select This Model</span>
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#00D4FF] flex items-center justify-center text-white shadow-md relative z-20 group-hover:scale-105 transition-transform">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-y border-slate-200 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16 flex flex-col gap-3"
          >
            <span className="text-[10px] font-bold tracking-widest text-[#2563FF] uppercase font-mono">
              COMMON QUESTIONS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              Frequently Asked <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Questions</span>
            </h2>
            <div className="w-12 h-1 bg-[#1D4ED8] mx-auto rounded-full mt-2" />
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUpStagger}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left font-display font-bold text-sm sm:text-base text-slate-900 cursor-pointer select-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal pt-2 border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Form & CTA section */}
      <section id="hire-form" className="py-20 max-w-5xl mx-auto px-6 relative z-10 bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-slate-200 rounded-[32px] p-8 sm:p-12 shadow-lg backdrop-blur-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left"
        >
          
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#2563FF] uppercase">
              WORK WITH US
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Request Your <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Sprints Team</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              Tell us your developer requirements. We will analyze your specifications and map out developer availability within 24 hours.
            </p>
            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-650">
                <CheckCircle className="w-4 h-4 text-[#1D4ED8]" />
                <span>NDA Protected Setup</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-650">
                <CheckCircle className="w-4 h-4 text-[#1D4ED8]" />
                <span>Vetted Tech Talents</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-slate-50 border border-slate-200 focus:border-[#1D4ED8] outline-none text-xs sm:text-sm text-slate-800 rounded-xl px-4 py-3 w-full transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-slate-50 border border-slate-200 focus:border-[#1D4ED8] outline-none text-xs sm:text-sm text-slate-800 rounded-xl px-4 py-3 w-full transition-colors"
                />
              </div>
              
              <select
                required
                defaultValue=""
                className="bg-slate-50 border border-slate-200 focus:border-[#1D4ED8] outline-none text-xs sm:text-sm text-slate-600 rounded-xl px-4 py-3 w-full transition-colors"
              >
                <option value="" disabled>Role Needed</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="ai">AI Engineer</option>
                <option value="mobile">Mobile Developer</option>
                <option value="uiux">UI/UX Designer</option>
              </select>

              <textarea
                placeholder="Briefly describe your product stack or developer requirements..."
                rows={4}
                required
                className="bg-slate-50 border border-slate-200 focus:border-[#1D4ED8] outline-none text-xs sm:text-sm text-slate-800 rounded-xl px-4 py-3 w-full transition-colors resize-none"
              />

              <div className="rounded-2xl relative p-[2px] bg-gradient-to-r from-[#2563FF] via-[#00D4FF] to-[#2563FF] bg-[length:200%_auto] shadow-[0_0_20px_rgba(37,99,255,0.3)] mt-2">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-3 w-full py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-extrabold text-sm rounded-[14px] transition-all duration-300 overflow-hidden z-10 cursor-pointer"
                >
                  <span className="tracking-wide relative z-20 text-white font-black uppercase">Send Hiring Request</span>
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#00D4FF] flex items-center justify-center text-white shadow-md relative z-20 group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              </div>
            </form>
          </div>

        </motion.div>
      </section>

    </div>
  );
}
