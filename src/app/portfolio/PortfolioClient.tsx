"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles, Code, CheckCircle } from "lucide-react";
import Button from "@/components/Button";
import LottieAnimation from "@/components/LottieAnimation";
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
    <div className="cosmic-portfolio-wrapper min-h-screen relative overflow-hidden bg-[#FAFBFF] dark:bg-[#071426] text-[#0F172A] dark:text-white transition-colors duration-300">
      
      {/* Curved Hero Banner Section */}
      <section className="relative pt-36 pb-28 md:pt-44 md:pb-40 bg-gradient-to-b from-[#EBF3FC] to-[#D5E6FC] dark:from-[#0B1A2E] dark:to-[#071426] overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#2563FF]/12 blur-[120px] dark:bg-[#00D4FF]/5" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00D4FF]/10 blur-[130px] dark:bg-[#2563FF]/5" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 border border-[#2563FF]/15 dark:border-[#00D4FF]/25 text-[10px] font-bold text-[#2563FF] dark:text-[#00D4FF] uppercase tracking-widest font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Success Projects Archive</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0F172A] dark:text-white leading-tight"
          >
            Our Exclusive <br />
            <span className="bg-gradient-to-r from-[#2563FF] to-[#00D4FF] dark:from-[#00BFFF] dark:to-[#6C63FF] bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl"
          >
            Explore our curated database of custom web systems, AI chatbot solutions, mobile app architectures, and high-performance enterprise engines.
          </motion.p>
        </div>

        {/* Curved Wave Bottom SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            className="relative block w-full h-[60px] md:h-[100px] fill-[#FAFBFF] dark:fill-[#071426] transition-colors duration-300"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,84.47,25.85,140.25,41.2,202.93,65.4,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-10 bg-white/45 dark:bg-[#0B1A2E]/30 backdrop-blur-sm relative z-10">
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
                <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#2563FF] dark:text-[#00D4FF]">
                  {st.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {st.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects section */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 flex flex-col gap-3">
          <span className="text-[10px] font-bold tracking-widest text-[#2563FF] dark:text-[#00D4FF] uppercase font-mono">
            SELECTED HIGHLIGHTS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] dark:text-white">
            Featured Case Studies
          </h2>
          <div className="w-12 h-1 bg-[#2563FF] mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-white/70 dark:bg-[#0B1A2E]/70 border border-[#008FED]/15 dark:border-white/10 rounded-[28px] overflow-hidden shadow-md backdrop-blur-md flex flex-col justify-between h-full group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FBFDFE] border-b border-slate-100 dark:border-white/10">
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
                  <span className="text-[10px] font-mono font-bold bg-[#2563FF]/10 dark:bg-[#00D4FF]/20 border border-[#2563FF]/20 text-[#2563FF] dark:text-[#00D4FF] px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex-grow p-8 flex flex-col justify-between text-left">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="bg-[#2563FF]/10 dark:bg-[#00D4FF]/20 border border-[#2563FF]/15 dark:border-[#00D4FF]/25 text-[#2563FF] dark:text-[#00D4FF] rounded-full px-3 py-1 uppercase tracking-wider font-display">
                    {project.category}
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">
                    Year: {project.year}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-white group-hover:text-[#2563FF] dark:group-hover:text-[#00D4FF] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
                  {project.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/5 flex items-center justify-between mt-8">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest font-mono">
                  Case Study
                </span>
                
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2563FF] dark:text-[#00D4FF] hover:text-[#2563FF]/80 dark:hover:text-white transition-colors duration-200 group/link cursor-pointer"
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
      <section id="projects" className="py-20 bg-slate-50/50 dark:bg-[#0B1A2E]/20 relative z-10 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16 flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-widest text-[#2563FF] dark:text-[#00D4FF] uppercase font-mono">
              ENGINEERING LOGS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] dark:text-white">
              Full Project Directory
            </h2>
            <div className="w-12 h-1 bg-[#2563FF] mx-auto rounded-full mt-2" />
          </div>

          {/* Categories select tabs Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-display font-bold text-xs uppercase tracking-wider border transition-all duration-300 cursor-pointer select-none ${
                  selectedCategory === cat
                    ? "bg-[#2563FF] text-white border-transparent shadow-md shadow-[#2563FF]/15"
                    : "bg-white dark:bg-[#0B1A2E]/60 border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-350 hover:border-[#2563FF] dark:hover:border-[#00D4FF] hover:text-[#2563FF] dark:hover:text-white"
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
                  className="bg-white/70 dark:bg-[#0B1A2E]/70 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm backdrop-blur-md flex flex-col justify-between h-full group"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#FBFDFE] border-b border-slate-100 dark:border-white/10">
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
                      <span className="text-[9px] font-mono font-bold bg-white/95 dark:bg-[#071426]/95 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-350 px-2.5 py-0.5 rounded">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3 text-left">
                    <span className="text-[9px] font-bold text-[#2563FF] dark:text-[#00D4FF] font-mono tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#2563FF] dark:group-hover:text-[#00D4FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed font-normal line-clamp-3">
                      {project.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[9px] font-semibold bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 px-2.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-3 flex items-center justify-between">
                      <span className="text-[10px] text-slate-450 dark:text-slate-450">Client: {project.client}</span>
                      <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563FF] dark:text-[#00D4FF] group/link">
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
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 border-t border-slate-200 dark:border-white/10">
        <div className="text-center mb-16 flex flex-col gap-3">
          <span className="text-[10px] font-bold tracking-widest text-[#2563FF] dark:text-[#00D4FF] uppercase font-mono">
            SUCCESS STORIES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] dark:text-white">
            What Clients Say
          </h2>
          <div className="w-12 h-1 bg-[#2563FF] mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white/70 dark:bg-[#0B1A2E]/70 border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-sm backdrop-blur-md flex flex-col justify-between text-left"
            >
              <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 italic leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2563FF]/10 dark:bg-[#00D4FF]/20 flex items-center justify-center text-xs font-bold text-[#2563FF] dark:text-[#00D4FF]">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A] dark:text-white">
                    {t.name}
                  </h4>
                  <span className="text-[10px] text-slate-450 dark:text-slate-450 font-medium">
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] p-8 sm:p-12 md:p-16 text-center flex flex-col items-center gap-6 shadow-lg border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white"
        >
          {/* Futuristic background image visual unique to Portfolio page */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/portfolio_cta.png"
              alt="Futuristic CTA background portal"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover opacity-10 dark:opacity-20"
            />
            {/* Ambient gradients consistent with design tokens */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FAFCFF]/90 to-[#EAF2FC]/85 dark:from-[#071426]/95 dark:to-[#0B1A2E]/90" />
          </div>

          {/* Lottie Animation icon for CTA */}
          <div className="w-16 h-16 relative z-10">
            <LottieAnimation src="/animations/Network icon.json" className="w-full h-full" />
          </div>

          <span className="text-[10px] font-bold tracking-widest uppercase bg-[#2563FF]/10 dark:bg-white/10 text-[#2563FF] dark:text-[#00D4FF] px-3.5 py-1.5 rounded-full w-fit">
            Ready to Build Your System?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display relative z-10 max-w-2xl leading-tight text-[#0F172A] dark:text-white">
            Let's construct something extraordinary together.
          </h2>

          <p className="text-slate-600 dark:text-slate-350 max-w-lg leading-relaxed text-xs sm:text-sm">
            Discuss your system metrics with our technology strategists today. We configure secure API nodes, auto-scaling databases, and clean modern interfaces.
          </p>

          <div className="mt-4 flex gap-4">
            <Link 
              href="/get-a-quote" 
              className="inline-flex items-center justify-center font-display font-bold text-xs uppercase tracking-wider px-8 py-4 bg-[#2563FF] hover:bg-[#2563FF]/90 text-white hover:scale-[1.03] active:scale-[0.98] transition-all hover:shadow-[0_0_20px_rgba(37,99,255,0.3)] shadow-[0_4px_10px_rgba(37,99,255,0.15)] rounded-full cursor-pointer"
            >
              Request Project Quote
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center font-display font-medium rounded-full transition-all duration-300 px-6 py-3 border border-[#2563FF]/25 dark:border-white/30 text-[#2563FF] dark:text-white hover:bg-[#2563FF]/5 dark:hover:bg-white/10 gap-2">
              Browse Our Work
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
