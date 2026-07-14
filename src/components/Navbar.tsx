"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Send,
  Code,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  TrendingUp,
  Palette,
  BookOpen,
  Briefcase,
  Sun,
  Moon
} from "lucide-react";
import Button from "./Button";
import { servicesData } from "@/data/services";
import { useTheme } from "./ThemeProvider";

const iconMap: Record<string, React.ComponentType<any>> = {
  Code: Code,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Bot: Cpu,
  Layers: Layers,
  Cloud: Cloud,
  TrendingUp: TrendingUp,
  Palette: Palette,
  BookOpen: BookOpen,
  Briefcase: Briefcase,
};

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.99,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.18,
      ease: "easeOut" as const,
    }
  },
  exit: {
    opacity: 0,
    y: 4,
    scale: 0.99,
    transition: {
      duration: 0.12,
      ease: "easeIn" as const
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -4 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut" as const
    }
  }
};

const columnVariants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut" as const,
    },
  },
};

const navbarFireflies = [
  { id: 1, left: "15%", top: "30%", size: 3, duration: 6, delay: 0, color: "#00E5FF" },
  { id: 2, left: "45%", top: "60%", size: 2.5, duration: 8, delay: 1.5, color: "#008FED" },
  { id: 3, left: "75%", top: "25%", size: 3.5, duration: 7, delay: 0.5, color: "#00E5FF" },
  { id: 4, left: "90%", top: "50%", size: 2, duration: 9, delay: 2, color: "#008FED" },
];

const hoverFireflies = [
  { id: 101, left: "10%", top: "15%", size: 2, xAnim: [-2, 4, -2], yAnim: [-3, 3, -3], duration: 1.5, color: "#00E5FF" },
  { id: 102, left: "80%", top: "70%", size: 1.8, xAnim: [3, -3, 3], yAnim: [2, -4, 2], duration: 1.8, color: "#7C3AED" },
  { id: 103, left: "45%", top: "75%", size: 2.2, xAnim: [-3, 3, -3], yAnim: [3, -3, 3], duration: 1.6, color: "#00E5FF" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>("web-development");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const activeService = useMemo(() => {
    return servicesData.find(s => s.slug === activeCategorySlug) || servicesData[0];
  }, [activeCategorySlug]);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 25;
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Company", href: "/company" },
    { name: "Services", href: "/#premium-showcase", hasDropdown: true },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Hire Developers", href: "/hire-developers" },
  ];

  return (
    <>
      <header
        className={`fixed z-50 left-1/2 -translate-x-1/2 w-[90%] md:w-[86%] lg:w-[82%] max-w-[1120px] transition-all duration-300 border rounded-[30px] backdrop-blur-xl ${scrolled
            ? "top-5 bg-white/80 dark:bg-[#071426]/75 border-slate-200/50 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.25)] py-0.5"
            : "top-6 bg-white/75 dark:bg-[#071426]/70 border-slate-200/40 dark:border-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-1"
          }`}
      >
        {/* Subtle Glowing Fireflies floating in the background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {navbarFireflies.map((ff) => (
            <motion.div
              key={ff.id}
              animate={{
                opacity: [0.08, 0.7, 0.08],
                scale: [0.8, 1.2, 0.8],
                x: [0, 10, -5, 0],
                y: [0, -8, 6, 0],
              }}
              transition={{
                duration: ff.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: ff.delay,
              }}
              className="absolute rounded-full font-sans"
              style={{
                left: ff.left,
                top: ff.top,
                width: `${ff.size}px`,
                height: `${ff.size}px`,
                backgroundColor: ff.color,
                boxShadow: `0 0 8px ${ff.color}, 0 0 15px ${ff.color}80`,
              }}
            />
          ))}
        </div>

        <div className="w-full px-5 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">

          {/* Logo - kept exactly as it was, with cyan drop shadow highlight */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/mt-logo.png"
              alt="Modern Technology Logo"
              width={108}
              height={33}
              className="h-auto w-[108px] filter drop-shadow-[0_0_10px_rgba(0,229,255,0.35)] brightness-105 transition-transform duration-300 group-hover:scale-[1.02] dark:invert-0"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.name === "Home" && pathname === "/") ||
                (link.name === "Services" && pathname.startsWith("/services"));
              return (
                <div
                  key={link.name}
                  className="relative px-1 py-1 group"
                  onMouseEnter={() => {
                    setHoveredLink(link.name);
                    if (link.name === "Services") {
                      setServicesDropdownOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    if (link.name === "Services") {
                      setServicesDropdownOpen(false);
                    }
                  }}
                >
                  {/* Premium Active highlighted appearance */}
                  {isActive && (
                    <span className="absolute inset-0 bg-[#008FED]/5 dark:bg-gradient-to-r dark:from-[#00E5FF]/4 dark:to-[#7C3AED]/6 border border-[#008FED]/15 dark:border-[#00E5FF]/15 rounded-full shadow-[0_0_10px_rgba(0,143,237,0.05)] dark:shadow-[0_0_10px_rgba(0,229,255,0.1)] backdrop-blur-[2px] -z-10" />
                  )}

                  {/* Scaling Link Text Wrapper */}
                  <motion.div
                    animate={hoveredLink === link.name ? { scale: 1.03 } : { scale: 1 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.name === "Services" && pathname === "/") {
                          e.preventDefault();
                          const element = document.getElementById("premium-showcase");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                      style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif" }}
                      className={`font-medium text-[12px] tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none px-2.5 py-0.5 rounded-full ${isActive
                          ? "text-[#008FED] dark:text-[#00E5FF] font-bold"
                          : "text-slate-650 dark:text-[#E2E8F0] hover:text-[#008FED] dark:hover:text-white"
                        }`}
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 opacity-70 transition-transform duration-300 ${link.name === "Services" && servicesDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Redesigned Premium Hover Pill Background */}
                  {!isActive && hoveredLink === link.name && (
                    <motion.span
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-[#008FED]/5 dark:bg-gradient-to-r dark:from-[#00D4FF]/8 dark:to-[#008FED]/12 border border-[#008FED]/25 dark:border-[#00D4FF]/35 rounded-full backdrop-blur-sm -z-10"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        boxShadow: [
                          "0 0 15px rgba(0,143,237,0.1), inset 0 1px 1px rgba(255,255,255,0.8)",
                          "0 0 25px rgba(0,143,237,0.15), inset 0 1px 1px rgba(255,255,255,0.85)",
                          "0 0 15px rgba(0,143,237,0.1), inset 0 1px 1px rgba(255,255,255,0.8)"
                        ]
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        layout: { type: "spring", stiffness: 350, damping: 28 },
                        boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                      }}
                    />
                  )}

                  {/* Hover firefly particles gathering around the hovered link */}
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <>
                        {hoverFireflies.map((hf) => (
                          <motion.div
                            key={hf.id}
                            initial={{ opacity: 0, scale: 0.2 }}
                            animate={{
                              opacity: [0, 0.8, 0],
                              scale: [0.5, 1.2, 0.5],
                              x: hf.xAnim,
                              y: hf.yAnim,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: hf.duration,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute rounded-full pointer-events-none"
                            style={{
                              left: hf.left,
                              top: hf.top,
                              width: `${hf.size}px`,
                              height: `${hf.size}px`,
                              backgroundColor: hf.color,
                              boxShadow: `0 0 6px ${hf.color}, 0 0 10px ${hf.color}66`
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  {/* Services Mega Menu */}
                  {link.name === "Services" && (
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="fixed left-[52.5%] -translate-x-1/2 top-full mt-3 w-[92vw] lg:w-[940px] xl:w-[1020px] bg-white/95 dark:bg-[#071426]/95 border border-slate-200/80 dark:border-white/10 rounded-3xl p-6 shadow-[0_30px_70px_rgba(0,0,0,0.08)] dark:shadow-[0_40px_90px_rgba(0,0,0,0.5)] backdrop-blur-3xl z-50 grid grid-cols-12 gap-6 origin-top will-change-transform font-sans text-slate-800 dark:text-white"
                          onMouseEnter={() => setServicesDropdownOpen(true)}
                          onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                          {/* 1. Left Side: Service Categories */}
                          <motion.div
                            variants={columnVariants}
                            className="col-span-12 lg:col-span-4 border-r border-slate-100 dark:border-white/5 pr-4 flex flex-col gap-1.5 max-h-[440px] overflow-y-auto"
                          >
                            <span className="text-[10px] font-bold tracking-widest text-[#00D4FF] uppercase font-mono mb-2.5 px-3">
                              Categories
                            </span>
                            {servicesData.map((srv) => {
                              const IconComponent = iconMap[srv.iconName] || Code;
                              const isCatActive = activeCategorySlug === srv.slug;
                              return (
                                <button
                                  key={srv.slug}
                                  onMouseEnter={() => setActiveCategorySlug(srv.slug)}
                                  className={`group/btn flex items-center gap-3.5 p-2.5 rounded-xl text-left transition-all duration-200 w-full cursor-pointer border ${isCatActive
                                      ? "bg-gradient-to-r from-[#00D4FF]/10 to-[#008FED]/5 dark:from-[#00D4FF]/15 dark:to-[#008FED]/5 border-[#008FED]/30 dark:border-[#00D4FF]/30 text-[#008FED] dark:text-[#00D4FF] shadow-[0_4px_20px_rgba(0,212,255,0.05)]"
                                      : "bg-transparent border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-50/50 dark:hover:bg-white/5 hover:text-[#008FED] dark:hover:text-[#00D4FF] hover:translate-x-1"
                                    }`}
                                >
                                  <div
                                    className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-200 ${isCatActive
                                        ? "bg-gradient-to-tr from-[#00D4FF] to-[#008FED] text-white dark:text-[#071426] border-transparent shadow-[0_0_12px_rgba(0,212,255,0.3)]"
                                        : "bg-[#008FED]/5 dark:bg-[#008FED]/15 border-[#008FED]/10 dark:border-[#00D4FF]/20 text-[#008FED] dark:text-[#00D4FF] group-hover/btn:scale-105"
                                      }`}
                                  >
                                    <IconComponent className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="text-xs font-bold font-sans">
                                    {srv.title}
                                  </span>
                                </button>
                              );
                            })}
                          </motion.div>

                          {/* 2. Center: Selected Service Preview */}
                          <motion.div
                            variants={columnVariants}
                            className="col-span-12 lg:col-span-4 bg-slate-50/80 dark:bg-[#0B1A2E]/50 border border-slate-100 dark:border-white/5 rounded-2xl p-5 flex flex-col justify-between gap-5 relative overflow-hidden group/preview"
                          >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#008FED]/5 dark:from-[#00D4FF]/8 to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Top */}
                            <div className="flex flex-col gap-3 relative z-10 text-left">
                              <span className="text-[9px] font-bold tracking-widest text-[#00D4FF] uppercase font-mono">
                                Overview
                              </span>
                              <h3 className="text-base font-bold text-[#1E1A39] dark:text-white group-hover/preview:text-[#008FED] dark:group-hover/preview:text-[#00D4FF] transition-colors duration-300">
                                {activeService.title}
                              </h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                                {activeService.longDescription.slice(0, 160)}...
                              </p>
                            </div>

                            {/* Action Button */}
                            <div className="relative z-10 text-left">
                              <Link
                                href={`/services/${activeService.slug}`}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="inline-flex items-center gap-2 px-4.5 py-2 bg-gradient-to-r from-[#00D4FF] to-[#008FED] text-[#071426] font-bold rounded-full text-xs hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 group/btn cursor-pointer"
                              >
                                <span>Explore Service</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                              </Link>
                            </div>
                          </motion.div>

                          {/* 3. Right Side: Sub-Services & Features */}
                          <motion.div
                            variants={columnVariants}
                            className="col-span-12 lg:col-span-4 flex flex-col gap-5 max-h-[440px] overflow-y-auto pr-2"
                          >
                            <div className="flex flex-col gap-4 text-left">
                              {activeService.subServiceGroups.slice(0, 2).map((group, groupIdx) => (
                                <div key={groupIdx} className="flex flex-col gap-2">
                                  <span className="text-[9px] font-bold tracking-widest text-[#008FED]/85 dark:text-[#00D4FF]/85 uppercase font-mono">
                                    {group.name}
                                  </span>
                                  <ul className="flex flex-col gap-2">
                                    {group.items.slice(0, 4).map((item, itemIdx) => (
                                      <li key={itemIdx} className="text-[11px] text-slate-500 dark:text-slate-400 hover:text-[#00D4FF] hover:translate-x-1 transition-all duration-200 cursor-pointer font-normal flex items-center gap-2 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#008FED]/40 dark:bg-[#00D4FF]/40 group-hover/item:bg-[#00D4FF] transition-colors" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="border-t border-slate-100 dark:border-white/5 pt-3 flex flex-col gap-2 text-left">
                              <span className="text-[9px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase font-mono">
                                Technologies We Use
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {activeService.technologies.slice(0, 5).map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="text-[9px] font-bold px-2.5 py-0.5 rounded-full border border-slate-200/50 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/30 hover:text-[#00D4FF] hover:scale-105 transition-all duration-300 tracking-wide cursor-default select-none shadow-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                </div>
              );
            })}
          </nav>

          {/* Theme Toggle & Contact Us Button Container */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1 rounded-full border border-slate-200 dark:border-[rgba(0,212,255,0.15)] bg-slate-150 dark:bg-[#0B1A2E]/60 hover:bg-slate-200 dark:hover:bg-[#071426]/80 text-[#008FED] dark:text-[#00D4FF] hover:text-[#0077D4] dark:hover:text-[#00E5FF] transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center relative overflow-hidden group"
              aria-label="Toggle Theme"
            >
              {/* Sun icon for Dark mode (toggles to Light) */}
              <Sun className="w-4 h-4 transition-all duration-300 dark:block hidden rotate-0 group-hover:rotate-45" />
              {/* Moon icon for Light mode (toggles to Dark) */}
              <Moon className="w-4 h-4 transition-all duration-300 dark:hidden block rotate-0 group-hover:-rotate-12" />
            </button>

            {/* Contact Us Button */}
            <div className="hidden lg:block">
              <Button
                href="/contact"
                variant="primary"
                icon={<Send className="w-3.5 h-3.5 text-white" />}
                style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif" }}
                className="!bg-gradient-to-r !from-[#00D4FF] !to-[#008FED] hover:!from-[#00E5FF] hover:!to-[#008FED]/80 !border-transparent !shadow-[0_4px_12px_rgba(0,212,255,0.2)] hover:!shadow-[0_4px_20px_rgba(0,212,255,0.35)] !py-1 !px-3 !text-[11px] !font-bold !rounded-full hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Mobile Hamburg Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-slate-650 dark:text-slate-350 hover:text-[#008FED] dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 h-full w-[310px] bg-white dark:bg-[#071426] border-l border-[#008FED]/15 dark:border-[rgba(0,212,255,0.15)] p-8 shadow-2xl z-50 lg:hidden flex flex-col justify-between overflow-y-auto text-slate-800 dark:text-white"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/mt-logo.png"
                      alt="Modern Technology Logo"
                      width={157}
                      height={52}
                      className="h-auto w-[140px] filter drop-shadow-[0_0_10px_rgba(0,229,255,0.35)] brightness-105"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-500 dark:text-slate-450 hover:text-[#008FED] dark:hover:text-white cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      (link.name === "Home" && pathname === "/") ||
                      (link.name === "Services" && pathname.startsWith("/services"));
                    return (
                      <div key={link.name}>
                        {link.name === "Services" ? (
                          <div className="flex flex-col gap-1.5">
                            <button
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className={`font-display text-[14px] font-semibold w-full text-left block py-2 px-3.5 rounded-lg transition-colors cursor-pointer ${isActive ? "bg-[#008FED]/10 dark:bg-[#00D4FF]/15 text-[#008FED] dark:text-[#00E5FF]" : "text-slate-650 dark:text-slate-300 hover:bg-[#008FED]/5 dark:hover:bg-white/5 hover:text-[#008FED] dark:hover:text-white"
                                }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{link.name}</span>
                                <ChevronDown className={`w-4 h-4 opacity-50 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                              </div>
                            </button>
                            <AnimatePresence initial={false}>
                              {mobileServicesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease: "easeInOut" }}
                                  className="pl-4 flex flex-col gap-3 mt-2 border-l border-[#008FED]/20 dark:border-[#00D4FF]/25 font-sans overflow-hidden"
                                >
                                  {servicesData.map((srv) => {
                                    const IconComponent = iconMap[srv.iconName] || Code;
                                    return (
                                      <Link
                                        key={srv.slug}
                                        href={`/services/${srv.slug}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-xs text-slate-500 dark:text-slate-400 hover:text-[#008FED] dark:hover:text-[#00E5FF] flex items-center gap-2.5 py-1 transition-colors duration-200"
                                      >
                                        <IconComponent className="w-3.5 h-3.5 text-[#008FED]/70 dark:text-[#00E5FF]/75" />
                                        {srv.title}
                                      </Link>
                                    );
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`font-display text-[14px] font-semibold block py-2 px-3.5 rounded-lg transition-colors ${isActive
                                ? "bg-[#008FED]/10 dark:bg-[#00D4FF]/15 text-[#008FED] dark:text-[#00E5FF]"
                                : "text-slate-650 dark:text-slate-300 hover:bg-[#008FED]/5 dark:hover:bg-white/5 hover:text-[#008FED] dark:hover:text-white"
                              }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{link.name}</span>
                              {link.hasDropdown && (
                                <ChevronDown className="w-4 h-4 opacity-50" />
                              )}
                            </div>
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              <div className="mt-8 pt-6 border-t border-[#008FED]/15 dark:border-[rgba(0,212,255,0.15)]">
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<Send className="w-4 h-4 text-white" />}
                  className="w-full !bg-gradient-to-r !from-[#00D4FF] !to-[#008FED] hover:!from-[#00E5FF] hover:!to-[#008FED]/80 !border-transparent !shadow-[0_0_12px_rgba(0,212,255,0.3)] hover:!shadow-[0_0_20px_rgba(0,212,255,0.5)] !py-3 !text-sm !font-bold !rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}