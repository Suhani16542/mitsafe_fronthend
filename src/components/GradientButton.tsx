"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function GradientButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  icon,
  fullWidth = false,
}: GradientButtonProps) {
  const buttonContent = (
    <motion.div
      animate={{
        scale: [1, 1.025, 1],
        boxShadow: [
          "0 0 15px rgba(37,99,255,0.4)",
          "0 0 25px rgba(37,99,255,0.7)",
          "0 0 15px rgba(37,99,255,0.4)"
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`rounded-2xl relative p-[2px] bg-gradient-to-r from-[#305EFF] via-[#00D4FF] to-[#305EFF] bg-[length:200%_auto] transform-gpu ${fullWidth ? "w-full" : "inline-block"} ${className}`}
    >
      {/* Animated Rotating Gradient Border Overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#305EFF] via-[#00D4FF] to-[#305EFF] opacity-90 pointer-events-none transform-gpu"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div
        className={`group relative inline-flex items-center justify-between gap-3 pl-6 pr-2.5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-extrabold text-sm rounded-[14px] transition-all duration-300 overflow-hidden z-10 ${fullWidth ? "w-full" : ""}`}
      >
        {/* Sweeping Light Beam */}
        <motion.div
          className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent skew-x-[-20deg] pointer-events-none z-20"
          animate={{
            x: ["-100%", "400%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1
          }}
        />

        <span className="tracking-wide relative z-20 text-white font-black">{children}</span>
        
        <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#305EFF] to-[#00D4FF] flex items-center justify-center text-white shadow-md relative z-20 group-hover:scale-105 transition-transform shrink-0">
          {icon || <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />}
        </span>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={fullWidth ? "w-full inline-block" : "inline-block"}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={fullWidth ? "w-full inline-block cursor-pointer" : "inline-block cursor-pointer"}>
      {buttonContent}
    </button>
  );
}
