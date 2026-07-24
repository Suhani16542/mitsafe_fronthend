"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Terminal,
  Code2,
  Globe,
  Smartphone,
  Users,
  ShoppingCart,
  Megaphone,
  PenTool,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { HeroService } from "@/types/hero";

const ICON_MAP: Record<HeroService["illustration"], LucideIcon> = {
  cloud: Cloud,
  devtools: Terminal,
  software: Code2,
  web: Globe,
  mobile: Smartphone,
  crm: Users,
  ecommerce: ShoppingCart,
  marketing: Megaphone,
  uiux: PenTool,
  service10: Sparkles,
};

// Fixed mini-expertise row shown inside the mock panel — stays constant
// across slides (like the reference's "Our Expertise" grid) while the
// active service is highlighted.
const EXPERTISE_ROW: { key: HeroService["illustration"]; label: string }[] = [
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "cloud", label: "Cloud" },
  { key: "marketing", label: "Growth" },
];

const cardVariants = {
  enter: { opacity: 0, scale: 0.92, y: 14 },
  center: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: -14 },
};

export function HeroImage({ service }: { service: HeroService }) {
  const Icon = ICON_MAP[service.illustration];
  const [leftTag1, leftTag2, leftTag3] = service.orbitIcons;
  const leftTags = [
    { icon: leftTag1, label: service.features[0]?.label ?? service.badge },
    { icon: leftTag2, label: service.features[1]?.label ?? service.badge },
    { icon: leftTag3, label: service.features[2]?.label ?? service.badge },
  ];

  return (
    <div className="relative mx-auto w-full max-w-lg py-6">
      {/* faint dotted network lines connecting floating cards to the panel */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-blue-200"
        viewBox="0 0 460 400"
        fill="none"
      >
        <path d="M20,70 C90,70 110,110 165,130" stroke="currentColor" strokeDasharray="4 5" />
        <path d="M10,200 C80,200 110,190 165,190" stroke="currentColor" strokeDasharray="4 5" />
        <path d="M20,330 C90,330 110,280 175,255" stroke="currentColor" strokeDasharray="4 5" />
        <path d="M440,80 C370,80 340,110 300,135" stroke="currentColor" strokeDasharray="4 5" />
        <circle cx="20" cy="70" r="3" fill="#93C5FD" />
        <circle cx="10" cy="200" r="3" fill="#93C5FD" />
        <circle cx="20" cy="330" r="3" fill="#93C5FD" />
        <circle cx="440" cy="80" r="3" fill="#93C5FD" />
      </svg>

      {/* left-stacked floating labeled cards */}
      <div className="absolute left-[-6%] top-[10%] z-10 hidden flex-col gap-8 sm:flex" style={{ width: 150 }}>
        {leftTags.map((tag, i) => {
          const TagIcon = ICON_MAP[(tag.icon as HeroService["illustration"]) ?? "cloud"] ?? Sparkles;
          return (
            <motion.div
              key={service.id + tag.label + i}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.4, delay: 0.15 + i * 0.1 },
                x: { duration: 0.4, delay: 0.15 + i * 0.1 },
                y: { duration: 3.4 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="flex items-center gap-2.5 rounded-xl border border-blue-50 bg-white/95 px-3 py-2.5 shadow-lg shadow-blue-900/5 backdrop-blur"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <TagIcon className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium leading-tight text-slate-700">
                {tag.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* top-right floating badge card */}
      <motion.div
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.4, delay: 0.2 },
          y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-[-4%] top-[6%] z-10 hidden items-center gap-2.5 rounded-xl border border-blue-50 bg-white/95 px-3 py-2.5 shadow-lg shadow-blue-900/5 backdrop-blur sm:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-xs font-medium leading-tight text-slate-700">
          {service.badge}
        </span>
      </motion.div>

      {/* central mock panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-0 mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-blue-900/10"
        >
          {/* window chrome */}
          <div className="flex items-center gap-1.5 border-b border-slate-100 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>

          <div className="p-6">
            <p className="text-xs font-medium text-slate-400">Welcome to</p>
            <h3 className="mt-0.5 text-lg font-bold text-slate-900">
              Modern <span className="text-blue-600">Technology</span>
            </h3>

            <div className="mt-4 flex items-center gap-4">
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/30"
              >
                <Icon className="h-7 w-7" />
              </motion.span>
              <p className="text-xs leading-relaxed text-slate-500">
                {service.description.split(".")[0]}.
              </p>
            </div>

            {/* mini stat row */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              {service.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-100 bg-slate-50 px-2.5 py-2.5"
                >
                  <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] leading-tight text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* fixed expertise mini row */}
            <div className="mt-4 border-t border-slate-100 pt-4">
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Our Expertise
              </p>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {EXPERTISE_ROW.map((item) => {
                  const ItemIcon = ICON_MAP[item.key];
                  const active = item.key === service.illustration;
                  return (
                    <div
                      key={item.key}
                      className={`flex flex-col items-center gap-1 rounded-lg border px-1.5 py-2 transition-colors ${
                        active
                          ? "border-blue-200 bg-blue-50 text-blue-600"
                          : "border-slate-100 text-slate-400"
                      }`}
                    >
                      <ItemIcon className="h-3.5 w-3.5" />
                      <span className="text-[9px]">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
