"use client";

import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section className="relative overflow-hidden w-full bg-transparent py-6 sm:py-8 md:py-10 z-10 flex flex-col justify-center min-h-[140px] sm:min-h-[165px] md:min-h-[190px]">
      <div className="relative w-full h-[100px] sm:h-[125px] flex items-center justify-center">
        {/* Lower Strip: Corporate Deep Slate -> Charcoal Gradient with Accent Blue Stars */}
        <MarqueeStrip
          items={marqueeItems}
          direction="right"
          speed={400} // Speed remains identical as requested
          bgColor="bg-gradient-to-r from-[#071426]/95 via-[#0B1A2E]/95 to-[#071426]/95 backdrop-blur-md"
          textColor="text-white"
          rotateStyle={{ transform: "translateY(-50%) rotate(2.5deg)" }}
          zIndexClass="z-0"
          shadowClass="shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-y border-white/5"
          accentColor="text-[#00D4FF]"
        />

        {/* Upper Strip: Dynamic Brand Blue -> Aqua Gradient with Accent Orange Stars */}
        <MarqueeStrip
          items={marqueeItems}
          direction="left"
          speed={360} // Speed remains identical as requested
          bgColor="bg-gradient-to-r from-[#00D4FF]/95 via-[#008FED]/95 to-[#00D4FF]/95 backdrop-blur-md"
          textColor="text-[#071426]"
          rotateStyle={{ transform: "translateY(-50%) rotate(-2.5deg)" }}
          zIndexClass="z-10"
          shadowClass="shadow-[0_10px_35px_rgba(0,212,255,0.15)] border-y border-white/10"
          accentColor="text-white"
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
              <span className="font-bold tracking-wider">{item}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
