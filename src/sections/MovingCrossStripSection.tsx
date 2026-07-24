"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const marqueeItems = [
  "WEBSITE DEVELOPMENT",
  "MOBILE APP DEVELOPMENT",
  "GAME DEVELOPMENT",
  "ERP SOLUTIONS",
  "CRM SOLUTIONS",
  "CLOUD COMPUTING",
  "AI SOLUTIONS",
  "UI/UX DESIGN",
  "GRAPHIC DESIGN",
  "DIGITAL MARKETING",
  "SCHOOL ERP",
  "READYMADE POS",
];

export default function MovingCrossStripSection() {
  const { theme } = useTheme();

  // Back ribbon colors based on theme:
  // Solid Primary Blue
  const backBgColor = theme === "dark" 
    ? "bg-[#008FED]" 
    : "bg-[#008FED]"; // Blue

  const backTextColor = "text-black";

  const backShadowClass = theme === "dark"
    ? "shadow-[0_8px_30px_rgba(255,255,255,0.05)] border-y border-white/10"
    : "shadow-[0_8px_30px_rgba(0,0,0,0.05)] border-y border-slate-200";

  const backAccentColor = "text-black";

  return (
    <section className="relative overflow-hidden w-full bg-transparent py-4 sm:py-6 md:py-8 z-10 flex flex-col justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] -mt-4 lg:-mt-[5vh]">
      <div className="relative w-full h-[100px] sm:h-[125px] flex items-center justify-center">
        {/* Lower Strip: Light Grey */}
        <MarqueeStrip
          items={marqueeItems}
          direction="right"
          speed={400} // Speed remains identical as requested
          bgColor={backBgColor}
          textColor={backTextColor}
          rotateStyle={{ transform: "translateY(-50%) rotate(2.5deg)" }}
          zIndexClass="z-0"
          shadowClass={backShadowClass}
          accentColor={backAccentColor}
        />

        {/* Upper Strip: Pure White */}
        <MarqueeStrip
          items={marqueeItems}
          direction="left"
          speed={360} // Speed remains identical as requested
          bgColor="bg-white"
          textColor="text-slate-900"
          rotateStyle={{ transform: "translateY(-50%) rotate(-2.5deg)" }}
          zIndexClass="z-10"
          shadowClass="shadow-[0_10px_35px_rgba(0,0,0,0.08)] border-y border-slate-200"
          accentColor="text-[#008FED]"
        />
      </div>
    </section>
  );
}

interface StripProps {
  items: string[];
  direction: "left" | "right";
  speed: number;
  bgColor: string;
  textColor: string;
  rotateStyle: React.CSSProperties;
  zIndexClass: string;
  shadowClass?: string;
  accentColor: string;
}

function MarqueeStrip({
  items,
  direction,
  speed,
  bgColor,
  textColor,
  rotateStyle,
  zIndexClass,
  shadowClass = "",
  accentColor,
}: StripProps) {
  // Repeat items to ensure it fills the viewport and has seamless wrapping
  const repeatedItems = Array(6).fill(items).flat();

  return (
    <div
      style={rotateStyle}
      className={`absolute left-[-10%] w-[120%] ${bgColor} ${textColor} py-4 sm:py-4.5 md:py-5 overflow-hidden select-none ${zIndexClass} ${shadowClass} transition-transform duration-300`}
    >
      <div className="flex w-max">
        <motion.div
          animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-12 sm:gap-16 pr-12 sm:pr-16"
        >
          {[...repeatedItems, ...repeatedItems].map((item, idx) => (
            <span
              key={idx}
              className="font-display font-black text-sm sm:text-base md:text-xl tracking-widest flex items-center gap-3 sm:gap-4.5"
            >
              {/* Star Accent Indicator */}
              <span className={`${accentColor} drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]`}>
                ✦
              </span>
              <span className="font-bold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{item}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
