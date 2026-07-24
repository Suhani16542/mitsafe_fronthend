"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HeroStat } from "@/types/hero";
import { Rocket, Users, Award, Headphones, ArrowUp } from "lucide-react";

const ICONS = [Rocket, Users, Award, Headphones];

// Full-width bordered stat row beneath the hero — matches the reference's
// "100+ Projects / 50+ Clients / 5+ Years / 24/7 Support" strip.
export function StatsBar({ stats, id }: { stats: HeroStat[]; id: string }) {
  return (
    <div className="relative z-10 mt-6 rounded-2xl bg-blue-50/60 px-6 py-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {stats.map((stat, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="flex items-center gap-1.5 text-xl font-bold text-slate-900">
                    {stat.value}
                    {stat.delta && (
                      <span className="flex items-center gap-0.5 text-[11px] font-semibold text-emerald-600">
                        <ArrowUp className="h-3 w-3" />
                        {stat.delta}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
