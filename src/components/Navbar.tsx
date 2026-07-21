"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
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
  Moon,
  ShieldCheck,
  Zap
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



const getServiceSlug = (name: string): string => {
  if (name === "PWA (Progressive Web Apps)") {
    return "progressive-web-apps";
  }
  return name
    .toLowerCase()
    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>("web-development");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Block scroll events propagation and toggle body overflow behavior
  useEffect(() => {
    const element = dropdownRef.current;
    if (servicesDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    if (!element) return;

    const handleWheel = (e: WheelEvent) => {
      // Native propagation stop prevents smooth scroll libraries (like Lenis) from scrolling the page
      e.stopPropagation();
    };

    element.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      element.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "";
    };
  }, [servicesDropdownOpen]);

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
        className={`fixed z-50 left-1/2 -translate-x-1/2 w-[82%] max-w-[1120px] transition-all duration-300 border border-white/20 dark:border-white/10 rounded-full backdrop-blur-2xl bg-white/75 dark:bg-[#071426]/70 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_45px_rgba(0,0,0,0.3)] h-[76px] flex items-center ${scrolled
          ? "top-4"
          : "top-6"
          }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-10 flex items-center justify-between relative z-10 h-full">

          <div className="flex items-center gap-[12px] h-full">
            {/* Logo - kept exactly as it was, with cyan drop shadow highlight */}
            <Link href="/" className="flex items-center group shrink-0">
              <Image
                src="/image_removebg-preview.png"
                alt="Modern Technology Logo"
                width={84}
                height={56}
                className="h-auto w-[84px] filter drop-shadow-[0_0_8px_rgba(0,229,255,0.2)] brightness-105"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 justify-center h-full">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.name === "Home" && pathname === "/") ||
                (link.name === "Services" && pathname.startsWith("/services"));
              return (
                <div
                  key={link.name}
                  className="relative group flex items-center py-2 px-1 rounded-full h-full"
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
                  {/* Premium Active highlighted appearance - Capsule line under text */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#2563FF] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Scaling Link Text Wrapper */}
                  <motion.div
                    animate={hoveredLink === link.name ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative z-10 flex items-center h-full"
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
                      className={`font-semibold text-[13.5px] tracking-normal transition-all duration-300 flex items-center gap-1 cursor-pointer select-none px-1.5 py-1.5 relative group/item whitespace-nowrap ${isActive
                        ? "text-[#2563FF] font-bold"
                        : "text-slate-655 dark:text-[#E2E8F0] hover:text-[#2563FF] dark:hover:text-[#2563FF]"
                        }`}
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 opacity-70 transition-transform duration-300 ${link.name === "Services" && servicesDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                      )}

                      {/* Hover Underline effect (only when NOT active) */}
                      {!isActive && (
                        <span className="absolute bottom-1 left-2.5 right-2.5 h-[2px] bg-[#2563FF] scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-center" />
                      )}
                    </Link>
                  </motion.div>

                  {/* Services Mega Menu */}
                  {link.name === "Services" && mounted && typeof document !== "undefined" && createPortal(
                    <div
                      className="fixed left-1/2 -translate-x-1/2 w-[calc(100vw-48px)] max-w-[1180px] z-[9999] pointer-events-none"
                      style={{ top: scrolled ? "104px" : "116px" }}
                    >
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            ref={dropdownRef}
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-full max-h-[calc(100vh-140px)] bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] dark:bg-[#071426]/95 dark:border-white/10 dark:shadow-[0_40px_90px_rgba(0,0,0,0.5)] dark:backdrop-blur-3xl grid grid-cols-12 gap-8 origin-top will-change-transform font-sans text-slate-800 dark:text-white overflow-hidden overscroll-contain pointer-events-auto"
                            onMouseEnter={() => setServicesDropdownOpen(true)}
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                          >
                            <style dangerouslySetInnerHTML={{__html: `
                              .hide-scrollbar::-webkit-scrollbar {
                                display: none !important;
                              }
                              .hide-scrollbar {
                                -ms-overflow-style: none !important;
                                scrollbar-width: none !important;
                              }
                            `}} />

                            {/* 1. Left Side: Service Categories */}
                            <motion.div
                              variants={columnVariants}
                              className="col-span-12 lg:col-span-3 border-r border-slate-200/50 dark:border-white/5 pr-4 flex flex-col gap-2 max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain hide-scrollbar"
                            >
                              <span className="text-[11px] font-bold tracking-wider text-[#1D74F5] dark:text-[#00D4FF] uppercase font-mono mb-2 px-3">
                                Categories
                              </span>
                              {servicesData.map((srv) => {
                                const IconComponent = iconMap[srv.iconName] || Code;
                                const isCatActive = activeCategorySlug === srv.slug;
                                return (
                                  <button
                                    key={srv.slug}
                                    onMouseEnter={() => setActiveCategorySlug(srv.slug)}
                                    className={`group/btn flex items-center justify-between p-3.5 rounded-r-2xl text-left transition-all duration-200 w-full cursor-pointer border-l-4 ${
                                      isCatActive
                                        ? "bg-[#1D74F5]/8 border-[#1D74F5] text-[#1D74F5] dark:bg-[#00D4FF]/10 dark:border-[#00D4FF] dark:text-[#00D4FF]"
                                        : "bg-transparent border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#1D74F5] dark:hover:text-[#00D4FF] hover:translate-x-1.5"
                                    }`}
                                  >
                                    <div className="flex items-center gap-3.5">
                                      <div
                                        className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center border transition-all duration-200 ${
                                          isCatActive
                                            ? "bg-gradient-to-tr from-[#00D4FF] to-[#008FED] text-white dark:text-[#071426] border-transparent shadow-[0_0_12px_rgba(0,212,255,0.3)]"
                                            : "bg-[#008FED]/5 dark:bg-[#008FED]/15 border-[#008FED]/10 dark:border-[#00D4FF]/20 text-[#008FED] dark:text-[#00D4FF] group-hover/btn:scale-105"
                                        }`}
                                      >
                                        <IconComponent className="w-3.5 h-3.5" />
                                      </div>
                                      <span className="text-[13.5px] font-bold font-sans tracking-wide">
                                        {srv.title}
                                      </span>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                                      isCatActive 
                                        ? "text-[#1D74F5] dark:text-[#00D4FF] translate-x-0.5" 
                                        : "text-slate-300 dark:text-slate-600 group-hover/btn:translate-x-0.5"
                                    }`} />
                                  </button>
                                );
                              })}
                            </motion.div>

                            {/* 2. Center: Selected Service Preview */}
                            <motion.div
                              variants={columnVariants}
                              className="col-span-12 lg:col-span-4 flex flex-col justify-start gap-5 text-left max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain hide-scrollbar"
                            >
                              <div className="flex flex-col gap-4">
                                <span className="text-[11px] font-bold tracking-wider text-[#1D74F5] dark:text-[#00D4FF] uppercase font-mono">
                                  Overview
                                </span>
                                <h2 className="text-3xl font-extrabold text-[#0F172A] dark:text-white tracking-tight font-display mb-1">
                                  {activeService.title}
                                </h2>
                                <div className="w-12 h-[3.5px] bg-[#1D74F5] dark:bg-[#00D4FF] rounded-full mb-2" />
                                <p className="text-[13px] text-slate-600 dark:text-slate-455 leading-relaxed font-normal font-sans">
                                  {activeService.longDescription}
                                </p>
                              </div>

                              {/* Action Button */}
                              <div className="text-left mt-1">
                                <Link
                                  href={`/services/${activeService.slug}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1D74F5] text-white hover:bg-[#1D74F5]/90 font-bold rounded-xl text-xs shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn cursor-pointer font-sans dark:bg-gradient-to-r dark:from-[#00D4FF] dark:to-[#008FED] dark:text-[#071426] dark:hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                                >
                                  <span>Explore {activeService.title}</span>
                                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </Link>
                              </div>
                            </motion.div>

                            {/* 3. Right Side: Sub-Services & Technologies */}
                            <motion.div
                              variants={columnVariants}
                              className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-6 border-l border-slate-200/50 dark:border-white/5 pl-6 text-left max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain hide-scrollbar"
                            >
                              <div className="flex flex-col gap-3">
                                <span className="text-[11px] font-bold tracking-wider text-[#1D74F5] dark:text-[#00D4FF] uppercase font-mono">
                                  Services under {activeService.title}
                                </span>
                                
                                <div className="flex flex-col gap-0 border-t border-slate-100 dark:border-white/5">
                                  {activeService.subServiceGroups.slice(0, 2).flatMap(g => g.items).slice(0, 8).map((item, itemIdx) => {
                                    const slug = getServiceSlug(item);
                                    return (
                                      <Link
                                        key={itemIdx}
                                        href={`/services/${activeService.slug}`}
                                        onClick={() => setServicesDropdownOpen(false)}
                                        className="group/item flex items-center justify-between py-3 px-2 border-b border-slate-100 dark:border-white/5 hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all duration-150 cursor-pointer font-sans"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-1.5 h-1.5 rounded-full bg-[#1D74F5] dark:bg-[#00D4FF] group-hover/item:scale-125 transition-transform shrink-0" />
                                          <span className="text-[13.5px] font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-[#1D74F5] dark:group-hover/item:text-[#00D4FF] transition-colors">
                                            {item}
                                          </span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-400 opacity-60 group-hover/item:translate-x-0.5 group-hover/item:opacity-100 transition-all shrink-0" />
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Tech Stack section at bottom */}
                              <div className="border-t border-slate-200/60 dark:border-white/5 pt-4 mt-2 flex flex-col gap-2.5">
                                <span className="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase font-mono">
                                  Technologies We Leverage
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {activeService.technologies.slice(0, 5).map((tech, techIdx) => (
                                    <span
                                      key={techIdx}
                                      className="text-[11px] font-semibold px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-[#1D74F5]/10 hover:border-[#1D74F5]/30 hover:text-[#1D74F5] dark:hover:bg-[#00D4FF]/10 dark:hover:border-[#00D4FF]/30 dark:hover:text-[#00D4FF] hover:scale-105 transition-all duration-300 tracking-wide cursor-default select-none shadow-sm font-sans text-slate-700 dark:text-slate-300"
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
                    </div>,
                    document.body
                  )}
                </div>
              );
            })}
          </nav>
          </div>

          {/* Theme Toggle & Contact Us Button Container */}
          <div className="flex items-center gap-4">
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
                icon={<Send className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 rotate-[-15deg]" />}
                style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif" }}
                className="!bg-gradient-to-r !from-[#2563EB] !to-[#06B6D4] hover:!from-[#2563EB]/90 hover:!to-[#06B6D4]/90 !border-transparent !shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:!shadow-[0_6px_20px_rgba(6,182,212,0.35)] !py-2 !px-4 !text-[13px] !font-semibold !rounded-full hover:scale-[1.03] active:scale-[0.97] hover:-translate-y-0.5 group"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Mobile Hamburg Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-slate-655 dark:text-slate-355 hover:text-[#2563FF] dark:hover:text-white transition-colors cursor-pointer"
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