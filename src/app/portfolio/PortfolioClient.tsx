"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles, Code, CheckCircle } from "lucide-react";
import Button from "@/components/Button";
import LottieAnimation from "@/components/LottieAnimation";
import GradientButton from "@/components/GradientButton";
import { portfolioData } from "@/data/portfolio";
import { testimonialsData } from "@/data/testimonials";

const categories = [
  "All",
  "Web Development",
  "AI Solutions",
  "Mobile Apps",
  "UI/UX Design",
  "Enterprise Software"
];

const stats = [
  { value: "50+", label: "Success Projects" },
  { value: "99.8%", label: "Client Satisfaction" },
  { value: "10+", label: "AI Models Deployed" },
  { value: "24/7", label: "Dedicated Support" }
];

const listContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 85,
      damping: 16
    }
  }
};

export default function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === selectedCategory);

  const featuredProjects = portfolioData.filter((p) => p.featured);

  return (
    <div className="cosmic-portfolio-wrapper min-h-screen relative overflow-hidden bg-white text-[#0F172A] transition-colors duration-300">
      
      {/* Curved Hero Banner Section */}
      <section className="relative pt-36 pb-28 md:pt-44 md:pb-40 bg-white overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#2563FF]/5 blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#2563FF]/5 blur-[130px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563FF]/5 border border-[#2563FF]/15 text-[10px] font-bold text-[#2563FF] uppercase tracking-widest font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Success Projects Archive</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0F172A] leading-tight"
          >
            Our Exclusive <br />
            <span className="font-black inline-block" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl"
          >
            Explore our curated database of custom web systems, AI chatbot solutions, mobile app architectures, and high-performance enterprise engines.
          </motion.p>
        </div>

        {/* Curved Wave Bottom SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            className="relative block w-full h-[60px] md:h-[100px] fill-white transition-colors duration-300"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,84.47,25.85,140.25,41.2,202.93,65.4,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-10 bg-white relative z-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((st, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col gap-2 items-center text-center"
              >
                <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#1D4ED8]">
                  {st.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-600">
                  {st.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects section */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 flex flex-col gap-3"
        >
          <span className="text-[10px] font-bold tracking-widest text-[#2563FF] uppercase font-mono">
            SELECTED HIGHLIGHTS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A]">
            Featured <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Case Studies</span>
          </h2>
          <div className="w-12 h-1 bg-[#1D4ED8] mx-auto rounded-full mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-200 rounded-[28px] overflow-hidden shadow-md flex flex-col justify-between h-full group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FBFDFE] border-b border-slate-100">
                {project.img ? (
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                    className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.imageColor} opacity-20`} />
                )}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono font-bold bg-[#2563FF]/10 border border-[#2563FF]/20 text-[#1D4ED8] px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex-grow p-8 flex flex-col justify-between text-left">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="bg-[#2563FF]/10 border border-[#2563FF]/15 text-[#1D4ED8] rounded-full px-3 py-1 uppercase tracking-wider font-display">
                    {project.category}
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">
                    Year: {project.year}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {project.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between mt-8">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-mono">
                  Case Study
                </span>
                
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1D4ED8] hover:text-[#1D4ED8]/80 transition-colors duration-200 group/link cursor-pointer"
                >
                  Explore Details
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main projects grid section with Category filter */}
      <section id="projects" className="py-20 bg-white relative z-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 flex flex-col gap-3"
          >
            <span className="text-[10px] font-bold tracking-widest text-[#2563FF] uppercase font-mono">
              ENGINEERING LOGS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A]">
              Full <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Project Directory</span>
            </h2>
            <div className="w-12 h-1 bg-[#1D4ED8] mx-auto rounded-full mt-2" />
          </motion.div>

          {/* Categories select tabs Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-display font-bold text-xs uppercase tracking-wider border transition-all duration-300 cursor-pointer select-none ${
                  selectedCategory === cat
                    ? "bg-[#2563FF] text-white border-transparent shadow-md shadow-[#2563FF]/15"
                    : "bg-white border-slate-200 text-slate-600 hover:border-[#2563FF] hover:text-[#2563FF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid list */}
          <motion.div 
            variants={listContainerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  variants={cardItemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  key={project.slug}
                  className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm backdrop-blur-md flex flex-col justify-between h-full group"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#FBFDFE] border-b border-slate-100">
                    {project.img ? (
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                        className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-tr ${project.imageColor} opacity-15`} />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] font-mono font-bold bg-white border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3 text-left">
                    <span className="text-[9px] font-bold text-[#1D4ED8] font-mono tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-normal line-clamp-3">
                      {project.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[9px] font-semibold bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-3 flex items-center justify-between">
                      <span className="text-[10px] text-slate-450">Client: {project.client}</span>
                      <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1D4ED8] group/link">
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Success Stories (Testimonials) Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 border-t border-slate-200 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 flex flex-col gap-3"
        >
          <span className="text-[10px] font-bold tracking-widest text-[#2563FF] uppercase font-mono">
            SUCCESS STORIES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A]">
            What Clients <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>Say</span>
          </h2>
          <div className="w-12 h-1 bg-[#1D4ED8] mx-auto rounded-full mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm backdrop-blur-md flex flex-col justify-between text-left"
            >
              <p className="text-xs sm:text-sm text-slate-550 italic leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="pt-4 border-t border-slate-100 mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2563FF]/10 flex items-center justify-center text-xs font-bold text-[#1D4ED8]">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">
                    {t.name}
                  </h4>
                  <span className="text-[10px] text-slate-450 font-medium">
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] p-8 sm:p-12 md:p-16 text-center flex flex-col items-center gap-6 shadow-2xl border border-slate-200 bg-white"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/40 pointer-events-none" />

          {/* Lottie Animation icon for CTA */}
          <div className="w-16 h-16 relative z-10">
            <LottieAnimation src="/animations/Network icon.json" className="w-full h-full" />
          </div>

          <span className="text-[11px] font-extrabold tracking-widest uppercase bg-[#2563FF]/10 text-[#1D4ED8] px-4 py-1.5 rounded-full w-fit relative z-10 border border-[#2563FF]/20">
            READY TO BUILD YOUR SYSTEM?
          </span>

          <span className="text-xs font-bold text-[#2563FF] uppercase tracking-wider font-mono">
            // START YOUR PROJECT
          </span>
          <h2 
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            Have a Vision for a <span className="font-extrabold" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>New Product?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-650 max-w-2xl leading-relaxed font-normal">
            Whether you want to build a custom SaaS platform, mobile application, or enterprise dashboard, our engineering team is ready to deliver.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <GradientButton href="/get-a-quote">
              Get a Quote
            </GradientButton>

            <GradientButton href="/contact">
              Contact Us
            </GradientButton>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
