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
  Gamepad2,
  CreditCard,
  BookOpen,
} from "lucide-react";
import { HeroService } from "@/types/hero";
import clsx from "clsx";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
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
  game: Gamepad2,
  pos: CreditCard,
  school: BookOpen,
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
    <div className="relative z-10 mt-10 sm:mt-12 rounded-2xl border border-slate-100 bg-white p-3 sm:p-4 shadow-sm">
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-1 pt-1 justify-start lg:justify-between px-1">
        {services.map((service, i) => {
          const Icon = ICON_MAP[service.illustration] || Sparkles;
          const active = i === activeIndex;
          return (
            <button
              key={service.id}
              onClick={() => onSelect(i)}
              className={clsx(
                "flex shrink-0 items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 text-left cursor-pointer border group",
                active
                  ? "border-slate-300 bg-slate-100/90 text-slate-900 shadow-xs scale-102"
                  : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-850"
              )}
            >
              <span
                className={clsx(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                  active
                    ? "bg-slate-200 text-slate-900"
                    : "bg-slate-100 text-slate-500 group-hover:text-slate-700"
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span
                className={clsx(
                  "text-xs font-bold whitespace-nowrap leading-tight tracking-wide",
                  active ? "text-slate-900" : "text-slate-700"
                )}
              >
                {service.badge}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
