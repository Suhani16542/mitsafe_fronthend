"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Code, 
  Cloud, 
  Sparkles, 
  Smartphone, 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Terminal, 
  Activity, 
  Cpu, 
  ShieldCheck,
  ExternalLink
} from "lucide-react";
import { Role } from "@/data/roles";

const iconMap: Record<string, React.ComponentType<any>> = {
  Code,
  Cloud,
  Sparkles,
  Smartphone,
  Palette
};

// Unique visuals and assets for each role page - Zero duplication
const roleAssets: Record<string, { 
  image: string;
  bgImage: string;
}> = {
  "web-developer": {
    image: "/tradingview-mockup.png",
    bgImage: "/anyuni-mockup.png"
  },
  "devops-specialist": {
    image: "/pricing-devices-mockup.png",
    bgImage: "/farming-sustainability-mockup.png"
  },
  "ai-assistant": {
    image: "/seo-keyboard-mockup.png",
    bgImage: "/raichand-mockup.png"
  },
  "mobile-expert": {
    image: "/zupee-mockup.png",
    bgImage: "/wedding-matrimony-mockup.png"
  },
  "ui-ux-designer": {
    image: "/web-app-design-woman.png",
    bgImage: "/video-editing-mockup.png"
  }
};

interface RoleDetailClientProps {
  role: Role;
}

export default function RoleDetailClient({ role }: RoleDetailClientProps) {
  const assets = roleAssets[role.slug] || roleAssets["web-developer"];
  const IconComponent = iconMap[role.iconName] || Code;
  const [typedCode, setTypedCode] = useState<string[]>([]);
  const [simulatedChat, setSimulatedChat] = useState<{ sender: string; text: string }[]>([]);

  // Simulation effect for interactive showcase consoles
  useEffect(() => {
    if (role.slug === "devops-specialist") {
      const logs = [
        "[SYSTEM] Initializing Kubernetes pods...",
        "[SUCCESS] Microservices routing deployed",
        "[MONITOR] CPU: 14% | RAM: 4.8GB / 16GB",
        "[SECURITY] Firewalls active, 0 threats reported",
        "[PIPELINE] CI/CD checks completed. Build stable."
      ];
      let i = 0;
      const interval = setInterval(() => {
        setTypedCode((prev) => [...prev, logs[i % logs.length]]);
        i++;
        if (i > 10) setTypedCode([]);
      }, 2000);
      return () => clearInterval(interval);
    } else if (role.slug === "web-developer") {
      const lines = [
        "const nextConfig = { reactStrictMode: true };",
        "export default async function Page() {",
        "  const res = await fetch('https://api.mitsafe.com');",
        "  return <Dashboard data={res} />;",
        "}",
        "// Compilation successful (Ready in 38ms)"
      ];
      let i = 0;
      const interval = setInterval(() => {
        setTypedCode((prev) => [...prev, lines[i % lines.length]]);
        i++;
        if (i > 10) setTypedCode([]);
      }, 1500);
      return () => clearInterval(interval);
    } else if (role.slug === "ai-assistant") {
      const messages = [
        { sender: "client", text: "Calculate this quarter's ROI projection." },
        { sender: "bot", text: "Processing... ROI projected at +18.4% based on active operations." },
        { sender: "client", text: "Check database index compliance." },
        { sender: "bot", text: "All 14 indexing schemas comply with database regulations." }
      ];
      let i = 0;
      const interval = setInterval(() => {
        setSimulatedChat((prev) => [...prev, messages[i % messages.length]]);
        i++;
        if (i > 8) setSimulatedChat([]);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [role.slug]);

  return (
    <div className="cosmic-servicedetail-wrapper min-h-screen pt-32 pb-20 relative overflow-hidden text-[#1E1A39] dark:text-white transition-colors duration-300">
      
      {/* Custom Hero Texture Background Image - Unique for each page */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-10">
        <Image
          src={assets.bgImage}
          alt={`${role.title} Background Theme`}
          fill
          sizes="100vw"
          className="object-cover opacity-[0.035] mix-blend-overlay filter blur-[0.5px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFF]/95 via-[#FAFBFF]/80 to-[#FAFBFF] dark:from-[#071426]/95 dark:via-[#071426]/80 dark:to-[#071426]" />
      </div>

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[#F8F7FC]/40 dark:bg-transparent pointer-events-none z-0" />
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.05]">
        <div className="w-[1px] bg-[#008FED]/25 dark:bg-[#00D4FF]/10 h-full" />
        <div className="w-[1px] bg-[#008FED]/25 dark:bg-[#00D4FF]/10 h-full hidden sm:block" />
        <div className="w-[1px] bg-[#008FED]/25 dark:bg-[#00D4FF]/10 h-full" />
        <div className="w-[1px] bg-[#008FED]/25 dark:bg-[#00D4FF]/10 h-full hidden sm:block" />
        <div className="w-[1px] bg-[#008FED]/25 dark:bg-[#00D4FF]/10 h-full" />
      </div>

      {/* Standard Glowing Accent Blobs (Consistent across all pages) */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#008FED]/10 dark:bg-[#00D4FF]/5 blur-[120px] pointer-events-none -top-24 -right-12 z-0" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[#00D4FF]/10 dark:bg-[#008FED]/5 blur-[140px] pointer-events-none bottom-24 -left-12 z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8 uppercase tracking-wider">
          <Link href="/" className="hover:text-[#008FED] dark:hover:text-[#00D4FF] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#008FED] dark:text-[#00D4FF]">Expertise</span>
          <span>/</span>
          <span className="text-slate-650 dark:text-white font-bold">{role.title}</span>
        </div>

        {/* 1. PREMIUM UNIFIED HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#008FED]/10 dark:border-[#00D4FF]/20 bg-[#008FED]/5 dark:bg-[#00D4FF]/10 px-4.5 py-1 text-xs font-bold uppercase tracking-wider text-[#008FED] dark:text-[#00D4FF] shadow-sm w-fit font-mono"
            >
              <IconComponent className="w-3.5 h-3.5" />
              <span>MITSAFE PROFESSIONAL ROLE</span>
            </motion.div>

            <div className="flex flex-col gap-2">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E1A39] dark:text-white tracking-tight leading-tight font-display"
              >
                Enterprise <span className="text-[#008FED] dark:text-[#00D4FF]">{role.title}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-350 leading-relaxed font-normal max-w-xl"
              >
                {role.shortDescription}
              </motion.p>
            </div>

            {/* Quick benefits checkmarks list */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex flex-col gap-3 mt-2"
            >
              {role.benefits.slice(0, 3).map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3.5 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-[#008FED]/5 dark:bg-[#00D4FF]/10 border border-[#008FED]/15 dark:border-[#00D4FF]/25 text-[#008FED] dark:text-[#00D4FF] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Interactive Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-[#008FED]/10 dark:border-white/10 mt-4"
            >
              {role.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 group cursor-pointer">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#008FED] dark:text-[#00D4FF] font-display transition-transform group-hover:scale-105 inline-block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interactive Role Custom Showcase Visuals */}
          <div className="lg:col-span-6 flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] max-w-[500px] mx-auto rounded-[32px] overflow-hidden border border-[#008FED]/15 dark:border-white/10 shadow-sm bg-white dark:bg-[#0B1A2E]/70 p-4 group"
            >
              <Image 
                src={assets.image} 
                alt={`${role.title} Illustration`}
                fill
                sizes="(max-width: 500px) 100vw, 500px"
                className="object-cover opacity-80 group-hover:scale-103 transition-transform duration-700 pointer-events-none rounded-[32px]"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none rounded-[32px]" />

              {/* 1. WEB DEVELOPER SIMULATOR */}
              {role.slug === "web-developer" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-6 left-6 right-6 bg-slate-950/90 dark:bg-black/95 rounded-2xl p-4 border border-slate-800 dark:border-white/5 shadow-2xl font-mono text-[10px] sm:text-xs text-green-400 h-[150px] overflow-hidden text-left"
                >
                  <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2 mb-2 text-slate-500">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>Developer Console - v16.2.10</span>
                  </div>
                  <div className="flex flex-col gap-1 select-none">
                    {typedCode.map((line, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -5 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        key={idx}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 2. DEVOPS SPECIALIST SIMULATOR */}
              {role.slug === "devops-specialist" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-6 left-6 right-6 bg-slate-900/90 dark:bg-black/95 rounded-2xl p-4 border border-slate-850 dark:border-white/5 shadow-2xl font-mono text-[10px] sm:text-xs text-[#00E5FF] h-[150px] overflow-hidden text-left"
                >
                  <div className="flex items-center justify-between border-b border-slate-850 pb-2 mb-2 text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Cloud className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Kubernetes Cluster Status</span>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <div className="flex flex-col gap-1 select-none">
                    {typedCode.map((line, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        key={idx}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 3. AI ASSISTANT CHAT SIMULATOR */}
              {role.slug === "ai-assistant" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-[#071426]/95 rounded-2xl p-4 border border-slate-100 dark:border-white/5 shadow-2xl h-[160px] flex flex-col justify-between text-left"
                >
                  <div className="flex items-center gap-1.5 border-b border-slate-100 dark:border-white/5 pb-2 text-slate-800 dark:text-white font-bold text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#008FED] dark:text-[#00D4FF] animate-spin" />
                    <span>Secure Corporate Chat Agent</span>
                  </div>
                  <div className="flex flex-col gap-2 overflow-y-auto flex-grow py-2 text-[10px] sm:text-xs">
                    {simulatedChat.map((msg, idx) => (
                      <div 
                        key={idx}
                        className={`p-2 rounded-xl max-w-[85%] ${
                          msg.sender === "client" 
                            ? "bg-slate-100 dark:bg-[#0B1A2E]/60 text-slate-700 dark:text-slate-350" 
                            : "bg-[#008FED]/5 dark:bg-[#00D4FF]/10 text-[#008FED] dark:text-[#00D4FF] border border-[#008FED]/10 dark:border-[#00D4FF]/20"
                        }`}
                      >
                        {msg.text}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 4. MOBILE EXPERT OVERLAYS */}
              {role.slug === "mobile-expert" && (
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-10 right-10 bg-slate-900 dark:bg-[#071426]/95 text-white rounded-3xl p-3 border border-slate-800 dark:border-[#00D4FF]/15 shadow-2xl flex flex-col gap-2.5 w-[140px] items-center pointer-events-none select-none z-10"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-[#008FED]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-bold tracking-wider text-slate-400">FPS HEALTH</span>
                  <div className="h-6 w-full flex items-end justify-between gap-1 px-2">
                    {[3, 6, 8, 4, 9, 7, 9].map((h, i) => (
                      <div key={i} className="bg-[#008FED] dark:bg-[#00D4FF] rounded-sm w-[4px]" style={{ height: `${h * 10}%` }} />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 5. UI/UX DESIGNER TOOL OVERLAY */}
              {role.slug === "ui-ux-designer" && (
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 bg-white/95 dark:bg-[#071426]/95 rounded-2xl p-4 border border-slate-100 dark:border-white/5 shadow-2xl flex flex-col gap-2.5 w-[180px] pointer-events-none select-none z-10 text-left"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-white/5 pb-2">
                    <Palette className="w-3.5 h-3.5 text-[#008FED]" />
                    <span>Figma Components</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center bg-[#008FED]/5 dark:bg-[#00D4FF]/10 p-1.5 rounded-lg border border-[#008FED]/10 dark:border-[#00D4FF]/20">
                      <span className="text-[9px] font-bold text-[#008FED] dark:text-[#00D4FF]">Primary Button</span>
                      <div className="w-3 h-3 bg-[#008FED] dark:bg-[#00D4FF] rounded-sm" />
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 dark:bg-white/5 p-1.5 rounded-lg border border-slate-100 dark:border-white/5">
                      <span className="text-[9px] font-bold text-slate-650 dark:text-slate-350">Font: Satoshi</span>
                      <span className="text-[9px] text-slate-400 font-bold">14px</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* 2. SERVICES OR FEATURE CARDS SECTION */}
        <section className="mb-28">
          <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-[10px] font-bold text-[#008FED] dark:text-[#00D4FF] tracking-widest uppercase font-mono">
              EXPERT SERVICES
            </span>
            <h2 className="text-3xl font-bold text-[#1E1A39] dark:text-white font-display tracking-tight">
              Scope of Development & Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Professional deliverables engineered to fit modern enterprise security and performance targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {role.responsibilities.map((serviceName, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="bg-white/70 dark:bg-[#0B1A2E]/70 border border-[#008FED]/15 dark:border-white/10 rounded-[24px] p-6.5 shadow-sm hover:shadow-md hover:border-[#008FED]/30 dark:hover:border-white/20 transition-all duration-300 relative group overflow-hidden backdrop-blur-xl flex flex-col justify-between text-left"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#008FED]/5 dark:bg-white/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:bg-[#008FED]/10" />
                
                <div className="flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#008FED]/5 dark:bg-[#00D4FF]/10 border border-[#008FED]/10 dark:border-[#00D4FF]/20 flex items-center justify-center text-[#008FED] dark:text-[#00D4FF] group-hover:bg-[#008FED] dark:group-hover:bg-[#00D4FF] dark:group-hover:text-[#071426] transition-all duration-300 shadow-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  
                  <h3 className="font-display text-base font-bold text-[#1E1A39] dark:text-white leading-snug">
                    {serviceName}
                  </h3>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-[#008FED] dark:text-[#00D4FF] mt-6.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Explore Standards</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. BUSINESS BENEFITS & CAPABILITIES SPLIT SECTION */}
        <section className="mb-28 pt-16 border-t border-[#008FED]/10 dark:border-white/10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[10px] font-bold text-[#008FED] dark:text-[#00D4FF] tracking-widest uppercase font-mono">
                VALUE PROPOSITION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1A39] dark:text-white font-display tracking-tight leading-tight">
                Driving Business Value Through Code Excellence
              </h2>
              <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-normal">
                {role.longDescription}
              </p>

              <div className="flex items-center gap-4 bg-[#008FED]/5 dark:bg-[#00D4FF]/10 border border-[#008FED]/10 dark:border-[#00D4FF]/20 rounded-2xl p-4">
                <ShieldCheck className="w-8 h-8 text-[#008FED] dark:text-[#00D4FF] shrink-0" />
                <div className="flex flex-col text-xs text-slate-500 dark:text-slate-450">
                  <span className="font-bold text-[#1E1A39] dark:text-white">Secure Infrastructure</span>
                  <span>100% compliant database access pipelines.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {role.features.map((feature, idx) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  key={idx}
                  className="bg-white/80 dark:bg-[#0B1A2E]/80 border border-[#008FED]/15 dark:border-white/10 rounded-[24px] p-6 shadow-sm flex flex-col gap-2.5 hover:border-[#008FED]/30 dark:hover:border-white/20 transition-all duration-300 text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#008FED]/5 dark:bg-[#00D4FF]/10 border border-[#008FED]/10 dark:border-[#00D4FF]/20 flex items-center justify-center text-[#008FED] dark:text-[#00D4FF]">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#1E1A39] dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-550 dark:text-slate-450 leading-relaxed font-normal">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}

              <div className="bg-gradient-to-br from-[#008FED] via-[#0077D4] to-[#0D1E36] rounded-[24px] p-6 text-white flex flex-col justify-between min-h-[160px] shadow-sm border border-[#008FED]/15 dark:border-white/10 text-left">
                <div className="flex items-center justify-between">
                  <Cpu className="w-7 h-7 text-white/80" />
                  <ExternalLink className="w-4 h-4 text-white/80" />
                </div>
                <div className="flex flex-col gap-1.5 mt-6">
                  <span className="font-display font-bold text-sm">Enterprise Integrations</span>
                  <span className="text-[10px] text-white/80 leading-normal">Optimized configurations engineered for cross-department data safety.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TECH STACK badges section */}
        <section className="mb-28 py-16 bg-[#008FED]/5 dark:bg-[#0B1A2E]/50 border border-[#008FED]/10 dark:border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden text-left">
          <div className="absolute w-44 h-44 rounded-full bg-blue-200/10 dark:bg-blue-900/5 blur-3xl -top-10 -left-10 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <span className="text-[10px] font-bold text-[#008FED] dark:text-[#00D4FF] tracking-widest uppercase font-mono">
                ENGINEERING STACK
              </span>
              <h3 className="text-2xl font-bold text-[#1E1A39] dark:text-white font-display tracking-tight">
                Core Technologies & Tools
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                We leverage modern toolchains to keep your codebase maintainable, secure, and fast.
              </p>
            </div>
            
            <div className="lg:col-span-8 flex flex-wrap gap-3">
              {role.skills.map((tech, idx) => (
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={idx}
                  className="text-xs font-bold px-5 py-3.5 rounded-2xl border border-[#008FED]/15 dark:border-white/10 bg-white dark:bg-[#071426]/60 text-[#008FED] dark:text-[#00D4FF] shadow-sm uppercase tracking-wider cursor-pointer transition-colors hover:border-[#008FED]/30 dark:hover:border-[#00D4FF] hover:text-[#0077D4] dark:hover:text-white font-mono"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION SECTION */}
        <section className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-[#071426] to-[#0B1A2E] border border-[#008FED]/15 dark:border-white/10 p-8 md:p-16 text-center text-white shadow-lg flex flex-col items-center justify-center gap-6">
          <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          
          <span className="text-[10px] font-bold text-[#00D4FF] tracking-widest uppercase font-mono bg-cyan-950/40 border border-cyan-800/20 px-3 py-1 rounded-full w-fit">
            Ready to scale operations?
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display max-w-xl leading-tight text-white">
            Consult with our specialized {role.title} systems expert today.
          </h2>
          
          <p className="text-slate-300 max-w-md text-xs sm:text-sm leading-relaxed font-light">
            Develop context-aware APIs, robust cloud integrations, and secure databases. Our developers are ready to integrate with your existing workflow teams.
          </p>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#008FED] hover:bg-[#0077D4] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all hover:scale-103 shadow-[#008FED]/20"
          >
            <span>{role.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
