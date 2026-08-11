"use client";

import { motion } from "framer-motion";
import { HeroStat } from "@/types/hero";
import {
  Rocket,
  Users,
  Award,
  Headphones,
  ShieldCheck,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

const ALL_ITEMS = [
  { label: "Custom Projects", value: "80+", delta: "+22%", icon: Rocket },
  { label: "Code Quality", value: "99%", delta: "Top 1%", icon: ShieldCheck },
  { label: "Uptime Guaranteed", value: "99.9%", delta: "SLA", icon: Clock },
  { label: "Happy Clients", value: "150+", delta: "+35%", icon: Users },
  { label: "Projects Delivered", value: "250+", delta: "+40%", icon: CheckCircle },
  { label: "Expert Developers", value: "45+", delta: "Senior", icon: Award },
  { label: "24/7 Live Support", value: "Instant", delta: "100%", icon: Headphones },
  { label: "Fast Performance", value: "10x", delta: "Optimized", icon: Zap },
  { label: "ROI Increase", value: "5x", delta: "Proven", icon: TrendingUp },
];

export function StatsBar({ stats, id }: { stats: HeroStat[]; id: string }) {
  // Combine custom stats with extended list for a continuous marquee loop
  const list = [...stats.map((s, idx) => ({ ...s, icon: [Rocket, Users, Award, Headphones][idx % 4] })), ...ALL_ITEMS];
  const items = [...list, ...list]; // Duplicate for seamless infinite loop

  return (
    <div className="relative z-10 mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-4 py-5 shadow-sm">
      {/* Soft gradient masks for seamless fade on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex shrink-0 items-center gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {items.map((item, i) => {
            const Icon = item.icon || Rocket;
            return (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-2.5 transition-all hover:border-slate-200 hover:bg-slate-100/80"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="flex items-center gap-1.5 text-base font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                    {item.delta && (
                      <span className="flex items-center gap-0.5 text-[10px] font-bold text-slate-700 bg-slate-200/80 px-1.5 py-0.5 rounded-md">
                        {item.delta}
                      </span>
                    )}
                  </p>
                  <p className="text-xs font-semibold text-slate-600 whitespace-nowrap">{item.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
