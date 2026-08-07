"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  TrendingUp,
  Code2,
  Terminal,
  Sparkles,
  Zap,
  ShieldCheck,
  Gamepad2,
  Layers,
  Users,
  Cpu,
  CreditCard,
  ShoppingBag,
  WifiOff,
  PenTool,
  GraduationCap,
  BookOpen,
  BarChart3,
  ShoppingCart,
  Megaphone,
} from "lucide-react";
import { HeroService } from "@/types/hero";

const cardVariants = {
  enter: { opacity: 0, scale: 0.96 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

const floatingBadgesByService: Record<string, Array<{ label: string; icon: any; position: string }>> = {
  "web-development": [
    { label: "Next.js 16", icon: Code2, position: "left-[-8%] top-[6%]" },
    { label: "React 19", icon: Globe, position: "left-[-12%] top-[36%]" },
    { label: "TypeScript", icon: Terminal, position: "left-[-6%] top-[66%]" },
    { label: "Tailwind CSS", icon: Sparkles, position: "right-[-4%] top-[4%]" },
    { label: "SEO Optimized", icon: TrendingUp, position: "right-[-6%] top-[34%]" },
  ],
  "mobile-app-development": [
    { label: "iOS & Swift", icon: Smartphone, position: "left-[-8%] top-[6%]" },
    { label: "Android Kotlin", icon: Smartphone, position: "left-[-12%] top-[36%]" },
    { label: "Flutter 3.0", icon: Zap, position: "left-[-6%] top-[66%]" },
    { label: "App Store Ready", icon: ShieldCheck, position: "right-[-4%] top-[4%]" },
    { label: "60 FPS UI", icon: Sparkles, position: "right-[-6%] top-[34%]" },
  ],
  "games-development": [
    { label: "Unity 3D Engine", icon: Gamepad2, position: "left-[-8%] top-[6%]" },
    { label: "Unreal Engine 5", icon: Layers, position: "left-[-12%] top-[36%]" },
    { label: "Multiplayer Engine", icon: Users, position: "left-[-6%] top-[66%]" },
    { label: "3D Physics Engine", icon: Cpu, position: "right-[-4%] top-[4%]" },
    { label: "Cross-Platform", icon: ShieldCheck, position: "right-[-6%] top-[34%]" },
  ],
  "readymade-pos": [
    { label: "Instant Billing", icon: CreditCard, position: "left-[-8%] top-[6%]" },
    { label: "Stock Inventory", icon: ShoppingBag, position: "left-[-12%] top-[36%]" },
    { label: "Thermal Printing", icon: Terminal, position: "left-[-6%] top-[66%]" },
    { label: "Offline Mode", icon: WifiOff, position: "right-[-4%] top-[4%]" },
    { label: "Barcode Scanner", icon: ShieldCheck, position: "right-[-6%] top-[34%]" },
  ],
  "ui-ux-design": [
    { label: "Figma Prototypes", icon: PenTool, position: "left-[-8%] top-[6%]" },
    { label: "Brand Identity", icon: Sparkles, position: "left-[-12%] top-[36%]" },
    { label: "Design Systems", icon: Layers, position: "left-[-6%] top-[66%]" },
    { label: "User Research", icon: Brain, position: "right-[-4%] top-[4%]" },
    { label: "UI Motion Design", icon: TrendingUp, position: "right-[-6%] top-[34%]" },
  ],
  "school-erp-hrm": [
    { label: "Student Portal", icon: GraduationCap, position: "left-[-8%] top-[6%]" },
    { label: "Automated Fees", icon: CreditCard, position: "left-[-12%] top-[36%]" },
    { label: "Staff HRM & Payroll", icon: Users, position: "left-[-6%] top-[66%]" },
    { label: "Exams & Reports", icon: BookOpen, position: "right-[-4%] top-[4%]" },
    { label: "Parent Mobile App", icon: Smartphone, position: "right-[-6%] top-[34%]" },
  ],
  "crm-erp-solutions": [
    { label: "Sales Pipelines", icon: BarChart3, position: "left-[-8%] top-[6%]" },
    { label: "Lead Scoring", icon: Users, position: "left-[-12%] top-[36%]" },
    { label: "Workflow Automation", icon: Zap, position: "left-[-6%] top-[66%]" },
    { label: "Cloud ERP Sync", icon: Cloud, position: "right-[-4%] top-[4%]" },
    { label: "Role-Based Auth", icon: ShieldCheck, position: "right-[-6%] top-[34%]" },
  ],
  "ecommerce-development": [
    { label: "Stripe & Checkout", icon: ShoppingCart, position: "left-[-8%] top-[6%]" },
    { label: "Headless Storefront", icon: Globe, position: "left-[-12%] top-[36%]" },
    { label: "Real-time Stock", icon: Layers, position: "left-[-6%] top-[66%]" },
    { label: "Fast Payment Gateway", icon: CreditCard, position: "right-[-4%] top-[4%]" },
    { label: "Conversion Lift", icon: TrendingUp, position: "right-[-6%] top-[34%]" },
  ],
  "digital-marketing": [
    { label: "Technical SEO 100", icon: TrendingUp, position: "left-[-8%] top-[6%]" },
    { label: "High ROI Ads", icon: Megaphone, position: "left-[-12%] top-[36%]" },
    { label: "Social Media Growth", icon: Users, position: "left-[-6%] top-[66%]" },
    { label: "Content Campaigns", icon: Sparkles, position: "right-[-4%] top-[4%]" },
    { label: "Lead Generation", icon: BarChart3, position: "right-[-6%] top-[34%]" },
  ],
  "software-development": [
    { label: "Custom Architecture", icon: Code2, position: "left-[-8%] top-[6%]" },
    { label: "Microservices", icon: Cpu, position: "left-[-12%] top-[36%]" },
    { label: "Cloud APIs", icon: Cloud, position: "left-[-6%] top-[66%]" },
    { label: "Enterprise SLA", icon: ShieldCheck, position: "right-[-4%] top-[4%]" },
    { label: "High Scalability", icon: TrendingUp, position: "right-[-6%] top-[34%]" },
  ],
};

export function HeroImage({ service }: { service: HeroService }) {
  const floatingBadges = floatingBadgesByService[service.id] || floatingBadgesByService["web-development"];

  return (
    <div className="relative z-20 mx-auto w-full max-w-xl lg:max-w-[560px] xl:max-w-[600px] mt-2 sm:mt-3 pt-1.5 flex items-center justify-center">
      {/* Pure White Background #FFFFFF - Network lines removed */}

      {/* Dynamic Floating Badges per Service */}
      {floatingBadges.map((badge, idx) => {
        const BadgeIcon = badge.icon;
        return (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.4, delay: 0.1 + idx * 0.08 },
              y: { duration: 3.4 + idx * 0.4, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`absolute ${badge.position} z-30 hidden sm:flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 bg-white text-slate-800 border border-slate-100/90 shadow-md transition-all cursor-pointer hover:scale-105 hover:border-blue-200`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-bold bg-[#EBF2FF] text-[#0052FF]">
              <BadgeIcon className="h-4 w-4" />
            </span>
            <span className="text-xs font-extrabold tracking-wide whitespace-nowrap">
              {badge.label}
            </span>
          </motion.div>
        );
      })}

      {/* 3D Mockup Image placed directly on background without container box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-full max-w-lg"
        >
          <img
            src={service.image || "/hero-transparent.png"}
            alt={service.badge}
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500 max-h-[360px] sm:max-h-[400px] lg:max-h-[420px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
          />

          {/* Sub-Image Highlights */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/90 px-3 py-1 text-[11px] font-extrabold text-[#0052FF] border border-blue-200/80 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0052FF] animate-pulse" />
              ⚡ High-Speed Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50/90 px-3 py-1 text-[11px] font-extrabold text-slate-700 border border-slate-200/80 shadow-xs">
              🛡️ Enterprise Grade SLA
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50/90 px-3 py-1 text-[11px] font-extrabold text-slate-700 border border-slate-200/80 shadow-xs">
              ⭐ 100% Custom Solutions
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
