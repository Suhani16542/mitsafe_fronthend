"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  style?: React.CSSProperties;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  icon,
  iconPosition = "right",
  style,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-medium rounded-full transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] outline-none cursor-pointer text-sm md:text-base px-6 py-3 md:px-8 md:py-3.5 gap-2 select-none tracking-wide";

  const variants = {
    primary:
      "bg-[#305EFF] dark:bg-[#305EFF] text-white dark:text-white !text-white font-extrabold shadow-md hover:bg-[#2550E0] dark:hover:bg-[#2550E0] border border-transparent hover:text-white dark:hover:text-white btn-primary-blue",
    secondary:
      "bg-slate-900 dark:bg-[#0B1A2E] text-white dark:text-white border-2 border-slate-900 dark:border dark:border-[rgba(0,212,255,0.15)] hover:bg-slate-800 hover:text-white dark:hover:bg-[#071426] dark:hover:border-[#00D4FF]/30 backdrop-blur-md",
    outline:
      "border-2 border-[#008FED] dark:border-[#00D4FF] text-[#008FED] dark:text-[#00D4FF] hover:text-white dark:hover:text-[#071426] hover:bg-gradient-to-r hover:from-[#008FED] hover:to-[#00D4FF] dark:hover:from-[#00D4FF] dark:hover:to-[#008FED] hover:border-transparent hover:shadow-[0_0_15px_rgba(0,143,237,0.3)] dark:hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]",
    ghost:
      "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#0B1A2E]/50",
  };

  const renderContent = () => (
    <>
      {icon && iconPosition === "left" && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
    </>
  );

  const mergedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={mergedClasses} style={style}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={mergedClasses} style={style}>
      {renderContent()}
    </button>
  );
}
