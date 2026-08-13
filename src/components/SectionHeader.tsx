"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  highlightLastWord?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
  highlightLastWord = true,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 flex flex-col ${
        isCenter ? "mx-auto items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-[rgba(0,212,255,0.2)] bg-[#305EFF]/5 dark:bg-[#00D4FF]/10 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wider text-[#305EFF] dark:text-[#00D4FF] uppercase"
        >
          <span className="h-2 w-2 rounded-full bg-[#305EFF] dark:bg-[#00D4FF] animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          highlightLastWord
            ? "text-[#0F172A] dark:text-white"
            : "force-solid-black-title text-black dark:text-white"
        } leading-tight`}
      >
        {highlightLastWord && title.includes(" ") ? (
          <>
            {title.substring(0, title.lastIndexOf(" "))}{" "}
            <span className="bg-gradient-to-r from-[#305EFF] to-[#00D4FF] dark:from-[#305EFF] dark:to-[#6C63FF] bg-clip-text text-transparent">
              {title.substring(title.lastIndexOf(" ") + 1)}
            </span>
          </>
        ) : (
          <span className="force-solid-black-title text-black dark:text-white">{title}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-350 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
