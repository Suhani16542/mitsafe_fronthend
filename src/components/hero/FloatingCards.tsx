"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon, Cloud, Cpu, Shield, Terminal, GitBranch, Code2, Layers, Globe2, Bolt, Smartphone, Bell, Users, BarChart3, ShoppingCart, CreditCard, Megaphone, Target, PenTool } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  cloud: Cloud,
  cpu: Cpu,
  shield: Shield,
  terminal: Terminal,
  git: GitBranch,
  code: Code2,
  layers: Layers,
  browser: Globe2,
  bolt: Bolt,
  phone: Smartphone,
  bell: Bell,
  users: Users,
  chart: BarChart3,
  cart: ShoppingCart,
  card: CreditCard,
  megaphone: Megaphone,
  target: Target,
  pen: PenTool,
};

const POSITIONS = [
  "left-[-8%] top-[8%]",
  "right-[-6%] top-[18%]",
  "left-[2%] bottom-[4%]",
];

export function FloatingCards({ id, iconKeys }: { id: string; iconKeys: string[] }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div key={id} className="contents">
          {iconKeys.slice(0, 3).map((key, i) => {
            const Icon = ICONS[key] ?? Bolt;
            return (
              <motion.div
                key={key + i}
                initial={{ opacity: 0, scale: 0.6, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.15 + i * 0.08 },
                  scale: { duration: 0.4, delay: 0.15 + i * 0.08 },
                  y: { duration: 3.5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
                }}
                className={`absolute ${POSITIONS[i]} flex items-center gap-2 rounded-xl border border-[#305EFF] bg-white/90 px-3 py-2 shadow-lg shadow-[#305EFF]/5 backdrop-blur`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-black">
                  <Icon className="h-3.5 w-3.5" />
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
