"use client";

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
import clsx from "clsx";

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

// Full-width 8(+)-icon strip in a single bordered card, like the reference's
// "Web Development / Mobile App Development / ..." row beneath the hero.
export function FeatureBar({
  services,
  activeIndex,
  onSelect,
}: {
  services: HeroService[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="relative z-10 mt-16 rounded-2xl border border-slate-100 bg-white px-4 py-6 shadow-sm">
      <div className="grid grid-cols-3 gap-y-6 sm:grid-cols-5 lg:grid-cols-10 lg:gap-y-0">
        {services.map((service, i) => {
          const Icon = ICON_MAP[service.illustration];
          const active = i === activeIndex;
          return (
            <button
              key={service.id}
              onClick={() => onSelect(i)}
              className="flex flex-col items-center gap-2.5 px-1 text-center"
            >
              <span
                className={clsx(
                  "flex h-12 w-12 items-center justify-center rounded-xl border transition-colors",
                  active
                    ? "border-blue-200 bg-blue-50 text-blue-600"
                    : "border-slate-100 text-slate-400 hover:border-blue-100 hover:text-blue-500"
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span
                className={clsx(
                  "text-[11px] font-semibold leading-tight",
                  active ? "text-blue-700" : "text-slate-600"
                )}
              >
                {service.badge.split(" ").slice(0, 2).join(" ")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
