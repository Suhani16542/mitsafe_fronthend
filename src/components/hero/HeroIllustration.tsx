"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import { HeroService } from "@/types/hero";

const ICON_MAP: Record<HeroService["illustration"], React.ComponentType<{ className?: string }>> = {
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

// A consistent "dashboard card" shell whose accent + icon changes per
// service, so all 10 slides feel like one product family rather than
// 10 unrelated stock graphics.
export function HeroIllustration({ service }: { service: HeroService }) {
  const Icon = ICON_MAP[service.illustration];

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
      <svg viewBox="0 0 400 300" className="h-full w-full drop-shadow-2xl">
        <defs>
          <linearGradient id={`panel-${service.id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F8FAFF" />
            <stop offset="100%" stopColor="#EAF1FF" />
          </linearGradient>
          <linearGradient id={`accent-${service.id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#155EEF" />
          </linearGradient>
        </defs>

        {/* main panel */}
        <rect
          x="30"
          y="24"
          width="340"
          height="252"
          rx="22"
          fill={`url(#panel-${service.id})`}
          stroke="#DCE6F9"
        />

        {/* header bar */}
        <rect x="30" y="24" width="340" height="44" rx="22" fill="white" stroke="#DCE6F9" />
        <circle cx="54" cy="46" r="5" fill="#EF4444" opacity="0.5" />
        <circle cx="72" cy="46" r="5" fill="#F59E0B" opacity="0.5" />
        <circle cx="90" cy="46" r="5" fill="#22C55E" opacity="0.5" />
        <rect x="270" y="38" width="80" height="16" rx="8" fill={`url(#accent-${service.id})`} opacity="0.15" />

        {/* content skeleton bars */}
        <rect x="54" y="96" width="140" height="12" rx="6" fill="#CBD5E1" />
        <rect x="54" y="118" width="90" height="10" rx="5" fill="#E2E8F0" />

        {/* accent data card */}
        <rect x="54" y="150" width="140" height="90" rx="14" fill={`url(#accent-${service.id})`} />
        <rect x="220" y="150" width="120" height="42" rx="12" fill="white" stroke="#DCE6F9" />
        <rect x="220" y="200" width="120" height="42" rx="12" fill="white" stroke="#DCE6F9" />
      </svg>

      {/* central floating icon badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-blue-100"
      >
        <Icon className="h-9 w-9 text-blue-600" />
      </motion.div>
    </div>
  );
}
