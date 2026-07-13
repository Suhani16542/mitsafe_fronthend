"use client";

import React, { useState, useEffect } from "react";
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
    y: 16,
    scale: 0.98,
    filter: "blur(6px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.38,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.98,
    filter: "blur(4px)",
    transition: {
      duration: 0.22,
      ease: "easeInOut" as const
    }
  }
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const
    }
  }
};

const columnVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
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
  const pathname = usePathname();

  const activeService = servicesData.find(s => s.slug === activeCategorySlug) || servicesData[0];

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
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Company", href: "/company" },
    { name: "Services", href: "/#premium-showcase", hasDropdown: true },
    { name: "Industries", href: "/industries" },
    { name: "Solutions", href: "/solutions" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Hire Developers", href: "/hire-developers" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#FAFBFF]/90 dark:bg-[#071426]/90 border-[#008FED]/15 dark:border-[rgba(0,212,255,0.15)] shadow-md dark:shadow-[0_10px_30px_rgba(0,212,255,0.08)] backdrop-blur-md py-2"
            : "bg-[#FAFBFF]/75 dark:bg-[#071426]/75 border-b border-[#008FED]/10 dark:border-[rgba(0,212,255,0.08)] shadow-sm dark:shadow-[0_4px_20px_rgba(0,212,255,0.03)] backdrop-blur-md py-3"
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between relative z-10">
          
          {/* Logo - kept exactly as it was, with cyan drop shadow highlight */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/mt-logo.png"
              alt="Modern Technology Logo"
              width={188}
              height={58}
              className="h-auto w-[170px] filter drop-shadow-[0_0_10px_rgba(0,229,255,0.35)] brightness-105 transition-transform duration-300 group-hover:scale-[1.02] dark:invert-0"
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
                    <span className="absolute inset-0 bg-[#008FED]/5 dark:bg-gradient-to-r dark:from-[#00E5FF]/4 dark:to-[#7C3AED]/6 border border-[#008FED]/15 dark:border-[#00E5FF]/15 rounded-xl shadow-[0_0_10px_rgba(0,143,237,0.05)] dark:shadow-[0_0_10px_rgba(0,229,255,0.1)] backdrop-blur-[2px] -z-10" />
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
                      className={`font-display font-medium text-sm tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none px-3.5 py-1.5 rounded-lg ${
                        isActive
                          ? "text-[#008FED] dark:text-[#00E5FF] font-bold"
                          : "text-slate-650 dark:text-[#E2E8F0] hover:text-[#008FED] dark:hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 opacity-70 transition-transform duration-300 ${
                            link.name === "Services" && servicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Redesigned Premium Hover Pill Background */}
                  {!isActive && hoveredLink === link.name && (
                    <motion.span
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-[#008FED]/5 dark:bg-gradient-to-r dark:from-[#00D4FF]/8 dark:to-[#008FED]/12 border border-[#008FED]/25 dark:border-[#00D4FF]/35 rounded-xl backdrop-blur-sm -z-10"
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
                          className="fixed left-[52.5%] -translate-x-1/2 top-full mt-3.5 w-[92vw] lg:w-[940px] xl:w-[1020px] bg-white dark:bg-[#0B1A2E]/98 border border-[#008FED]/15 dark:border-[#00D4FF]/20 rounded-[32px] p-7 shadow-md dark:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.5)] backdrop-blur-2xl z-50 grid grid-cols-12 gap-6 origin-top will-change-transform font-sans text-slate-800 dark:text-white"
                          onMouseEnter={() => setServicesDropdownOpen(true)}
                          onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                          {/* 1. Left Side: Service Categories */}
                          <motion.div
                            variants={columnVariants}
                            className="col-span-12 lg:col-span-4 border-r border-[#008FED]/10 dark:border-[#00D4FF]/15 pr-4 flex flex-col gap-1.5 max-h-[440px] overflow-y-auto"
                          >
                            <span className="text-[10px] font-bold tracking-widest text-[#008FED] dark:text-[#00D4FF] uppercase font-mono mb-2 px-3">
                              Categories
                            </span>
                            {servicesData.map((srv) => {
                              const IconComponent = iconMap[srv.iconName] || Code;
                              const isCatActive = activeCategorySlug === srv.slug;
                              return (
                                <button
                                  key={srv.slug}
                                  onMouseEnter={() => setActiveCategorySlug(srv.slug)}
                                  className={`group/btn flex items-center gap-3.5 p-3 rounded-2xl text-left transition-all duration-300 w-full cursor-pointer border ${
                                    isCatActive
                                      ? "bg-[#008FED]/10 dark:bg-[#00D4FF]/20 border-[#008FED]/25 dark:border-[#00D4FF]/35 text-[#008FED] dark:text-[#00D4FF] shadow-sm"
                                      : "bg-transparent border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#008FED] dark:hover:text-white"
                                  }`}
                                >
                                  <div
                                    className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                                      isCatActive
                                        ? "bg-[#008FED] dark:bg-[#00D4FF] text-white dark:text-[#071426] border-transparent"
                                        : "bg-[#008FED]/5 dark:bg-[#008FED]/15 border-[#008FED]/15 dark:border-[#00D4FF]/30 text-[#008FED] dark:text-[#00D4FF] group-hover/btn:scale-110 group-hover/btn:bg-[#008FED]/15 dark:group-hover/btn:bg-[#00D4FF]/25"
                                    }`}
                                  >
                                    <IconComponent className="w-4 h-4" />
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
                            className="col-span-12 lg:col-span-4 bg-slate-50 dark:bg-[#071426]/40 border border-[#008FED]/10 dark:border-[#00D4FF]/20 rounded-[24px] p-5.5 flex flex-col justify-between gap-5 relative overflow-hidden group/preview"
                          >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#008FED]/5 dark:from-[#00D4FF]/12 to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            {/* Top */}
                            <div className="flex flex-col gap-3.5 relative z-10 transition-transform duration-500 group-hover/preview:scale-[1.02] origin-left">
                              <span className="text-[9px] font-bold tracking-widest text-[#008FED] dark:text-[#00D4FF] uppercase font-mono">
                                Overview
                              </span>
                              <h3 className="text-lg font-bold text-[#1E1A39] dark:text-white group-hover/preview:text-[#008FED] dark:group-hover/preview:text-[#00D4FF] transition-colors duration-300">
                                {activeService.title}
                              </h3>
                              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                                {activeService.longDescription.slice(0, 140)}...
                              </p>
                            </div>

                            {/* Action Button */}
                            <div className="relative z-10">
                              <Link
                                href={`/services/${activeService.slug}`}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="inline-flex items-center gap-2 px-4.5 py-2 bg-[#008FED] dark:bg-[#00D4FF] text-white dark:text-[#071426] rounded-full text-xs font-bold hover:bg-[#0077D4] dark:hover:bg-[#00BCE0] transition-all duration-300 group/btn"
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
                            <div className="flex flex-col gap-5">
                              {activeService.subServiceGroups.slice(0, 2).map((group, groupIdx) => (
                                <div key={groupIdx} className="flex flex-col gap-2">
                                  <span className="text-[9px] font-bold tracking-widest text-[#008FED]/85 dark:text-[#00D4FF]/85 uppercase font-mono">
                                    {group.name}
                                  </span>
                                  <ul className="flex flex-col gap-1.5">
                                    {group.items.slice(0, 4).map((item, itemIdx) => (
                                      <li key={itemIdx} className="text-[11px] text-slate-500 dark:text-slate-400 hover:text-[#008FED] dark:hover:text-white transition-colors cursor-default font-normal flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#008FED]/50 dark:bg-[#00D4FF]/50" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="border-t border-[#008FED]/10 dark:border-[#00D4FF]/15 pt-3 flex flex-col gap-2">
                              <span className="text-[9px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase font-mono">
                                Technologies We Use
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {activeService.technologies.slice(0, 5).map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="text-[9px] font-bold px-2 py-0.5 rounded-md border border-[#008FED]/25 dark:border-[#00D4FF]/30 bg-[#008FED]/5 dark:bg-[#00D4FF]/12 text-[#008FED] dark:text-[#00D4FF] tracking-wide"
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
              className="p-2.5 rounded-lg border border-slate-200 dark:border-[rgba(0,212,255,0.15)] bg-slate-150 dark:bg-[#0B1A2E]/60 hover:bg-slate-200 dark:hover:bg-[#071426]/80 text-[#008FED] dark:text-[#00D4FF] hover:text-[#0077D4] dark:hover:text-[#00E5FF] transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center relative overflow-hidden group"
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
                className="!bg-gradient-to-r !from-[#00D4FF] !to-[#008FED] hover:!from-[#00E5FF] hover:!to-[#008FED]/80 !border-transparent !shadow-[0_4px_12px_rgba(0,212,255,0.2)] hover:!shadow-[0_4px_20px_rgba(0,212,255,0.35)] !py-2 !px-4.5 !text-[13px] !font-bold !rounded-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Mobile Hamburg Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-650 dark:text-slate-350 hover:text-[#008FED] dark:hover:text-white transition-colors cursor-pointer"
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
                            <Link
                              href="/#premium-showcase"
                              onClick={(e) => {
                                setMobileMenuOpen(false);
                                if (pathname === "/") {
                                  e.preventDefault();
                                  const element = document.getElementById("premium-showcase");
                                  if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                  }
                                }
                              }}
                              className={`font-display text-[14px] font-semibold block py-2 px-3.5 rounded-lg transition-colors ${
                                isActive ? "bg-[#008FED]/10 dark:bg-[#00D4FF]/15 text-[#008FED] dark:text-[#00E5FF]" : "text-slate-650 dark:text-slate-300 hover:bg-[#008FED]/5 dark:hover:bg-white/5 hover:text-[#008FED] dark:hover:text-white"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{link.name}</span>
                                <ChevronDown className="w-4 h-4 opacity-50" />
                              </div>
                            </Link>
                            <div className="pl-4 flex flex-col gap-3 mt-2 border-l border-[#008FED]/20 dark:border-[#00D4FF]/25 font-sans">
                              {servicesData.map((srv) => {
                                const IconComponent = iconMap[srv.iconName] || Code;
                                return (
                                  <Link
                                    key={srv.slug}
                                    href={`/services/${srv.slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-[#008FED] dark:hover:text-[#00E5FF] flex items-center gap-2.5 py-0.5 transition-colors duration-200"
                                  >
                                    <IconComponent className="w-3.5 h-3.5 text-[#008FED]/70 dark:text-[#00E5FF]/75" />
                                    {srv.title}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`font-display text-[14px] font-semibold block py-2 px-3.5 rounded-lg transition-colors ${
                              isActive
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