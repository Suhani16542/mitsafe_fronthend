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
  Mail,
  Send,
  Phone,
  Code,
  Smartphone,
  Cpu,
  Layers,
  Cloud,
  TrendingUp,
  Palette,
  BookOpen,
  Briefcase,
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

const announcementItems = [
  "🚀 Custom Website Development",
  "💼 SaaS Product Development",
  "📱 Mobile App Development",
  "🤖 AI & Automation Solutions",
  "☁️ Cloud & API Integration",
  "🎨 Modern UI/UX Design",
  "🔒 Secure & Scalable Applications",
  "🌍 Serving Clients Worldwide",
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [topBarHovered, setTopBarHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (topBarHovered) return;
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcementItems.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [topBarHovered]);

  useEffect(() => {
    const element = dropdownRef.current;
    if (servicesDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    if (!element) return;

    const handleWheel = (e: WheelEvent) => {
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
      {/* Fixed Wrapper containing both Top Bar and Navbar to prevent any overlapping on scroll */}
      <div className="fixed top-0 left-0 w-full z-50">
        
        {/* 1. Top Announcement Bar */}
        <div className="w-full h-[48px] md:h-[50px] bg-gradient-to-r from-[#1E54E2] via-[#2A67FF] to-[#1E54E2] border-b border-white/15 backdrop-blur-md text-white px-6 sm:px-10 lg:px-12 flex items-center justify-between pointer-events-auto gap-2 sm:gap-4 shadow-xs relative z-20 overflow-hidden">
          
          {/* Ambient Light Accent Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-300/15 via-transparent to-transparent pointer-events-none" />

          {/* Left Side: Email & Phone (Shifted ~24px right) */}
          <div className="flex items-center gap-2.5 sm:gap-4 text-white font-sans tracking-wide shrink-0 z-20">
            {/* 1. Email Icon + Email Address */}
            <a
              href="mailto:moderntechnologies12@gmail.com"
              className="flex items-center gap-2 text-white/95 hover:text-white transition-colors duration-200 group shrink-0"
            >
              <div className="w-6.5 h-6.5 rounded-full bg-white/15 border border-white/25 flex items-center justify-center group-hover:bg-white/25 transition-all duration-300 shrink-0 shadow-xs">
                <Mail className="w-3.5 h-3.5 text-cyan-300" />
              </div>
              <span className="text-[13.5px] sm:text-[14px] font-medium text-white tracking-wide hidden sm:inline">
                moderntechnologies12@gmail.com
              </span>
            </a>

            {/* Vertical Separator */}
            <div className="h-4 w-[1px] bg-white/25 hidden xs:block" />

            {/* 2. Phone Icon + Phone Number */}
            <a
              href="tel:+916265944392"
              className="flex items-center gap-2 text-white/95 hover:text-white transition-colors duration-200 group shrink-0"
            >
              <div className="w-6.5 h-6.5 rounded-full bg-white/15 border border-white/25 flex items-center justify-center group-hover:bg-white/25 transition-all duration-300 shrink-0 shadow-xs">
                <Phone className="w-3.5 h-3.5 text-cyan-300" />
              </div>
              <span className="text-[13.5px] sm:text-[14px] font-semibold text-white tracking-wide hidden md:inline">
                +91 6265944392
              </span>
            </a>
          </div>

          {/* 3. Vertical Services Slider */}
          <div
            className="flex-1 min-w-0 max-w-[300px] md:max-w-[340px] h-full relative flex items-center justify-center overflow-hidden z-10 mx-1 sm:mx-3 cursor-pointer"
            onMouseEnter={() => setTopBarHovered(true)}
            onMouseLeave={() => setTopBarHovered(false)}
          >
            {/* Top & Bottom Mask Fades */}
            <div className="absolute left-0 right-0 top-0 h-2.5 bg-gradient-to-b from-[#1E54E2] to-transparent z-20 pointer-events-none" />
            <div className="absolute left-0 right-0 bottom-0 h-2.5 bg-gradient-to-t from-[#1E54E2] to-transparent z-20 pointer-events-none" />

            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={announcementIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex items-center justify-center"
              >
                <div className="flex items-center justify-center gap-2 px-3.5 sm:px-4.5 py-1 rounded-full bg-white shadow-sm border border-white/90 hover:bg-slate-50 transition-all duration-300 group/pill shrink-0 max-w-full overflow-hidden">
                  <span className="text-slate-900 font-semibold text-[13.5px] sm:text-[14px] tracking-wide whitespace-nowrap truncate">
                    {announcementItems[announcementIndex]}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: 4. Brand Message + 5. Social Icons (Shifted ~24px left) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 z-20">
            {/* 4. Short Brand Message */}
            <span className="text-[13.5px] sm:text-[14px] font-semibold text-white/95 tracking-wide whitespace-nowrap hidden 2xl:inline">
              Innovative Digital Solutions for Every Business.
            </span>

            {/* Vertical Separator */}
            <div className="h-4 w-[1px] bg-white/25 hidden 2xl:block" />

            {/* 5. Social Media Icons (ALWAYS VISIBLE!) */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 text-white transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-xs group"
                title="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white group-hover:text-cyan-200 transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 text-white transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-xs group"
                title="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white group-hover:text-cyan-200 transition-colors" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.63.76-1.63 1.54V12h2.72l-.43 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 border border-white/20 text-white transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-xs group"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white group-hover:text-cyan-200 transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Floating Navbar directly below Top Bar (Never overlaps topbar on scroll) */}
        <div className="w-full flex justify-center pt-2.5 pointer-events-auto">
          <header className="w-[95%] max-w-[1360px] transition-all duration-300 border border-blue-200/80 dark:border-white/10 rounded-2xl sm:rounded-3xl backdrop-blur-2xl bg-white/95 dark:bg-[#071426]/95 shadow-[0_12px_40px_rgba(37,99,255,0.12)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.45)] h-[68px] flex items-center">
            <div className="w-full px-6 sm:px-8 lg:px-10 flex items-center justify-between relative z-10 h-full">

              <div className="flex items-center gap-[20px] h-full">
                {/* Logo */}
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

                {/* Desktop Nav Links */}
                <nav className="hidden lg:flex items-center gap-4 xl:gap-7 justify-center h-full ml-4">
                  {navLinks.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      (link.name === "Home" && pathname === "/") ||
                      (link.name === "Services" && pathname.startsWith("/services"));
                    return (
                      <div
                        key={link.name}
                        className="relative group flex items-center py-2 px-1.5 rounded-full h-full"
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
                        {/* Active Pill Indicator */}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavPill"
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 h-[3.5px] bg-[#2563FF] rounded-full shadow-[0_0_8px_rgba(37,99,255,0.6)]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}

                        {/* Scaling Link Text */}
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
                            className={`font-bold text-[14.5px] tracking-wide transition-all duration-300 flex items-center gap-1 cursor-pointer select-none px-2 py-1.5 relative group/item whitespace-nowrap ${isActive
                                ? "text-[#2563FF] font-extrabold"
                                : "text-slate-900 dark:text-white hover:text-[#2563FF] dark:hover:text-[#00D4FF]"
                              }`}
                          >
                            <span>{link.name}</span>
                            {link.hasDropdown && (
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${link.name === "Services" && servicesDropdownOpen ? "rotate-180 text-[#2563FF]" : "text-slate-700 dark:text-slate-300"
                                  }`}
                              />
                            )}

                            {/* Hover Underline effect */}
                            {!isActive && (
                              <span className="absolute bottom-1.5 left-2.5 right-2.5 h-[2px] bg-[#2563FF] scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-center" />
                            )}
                          </Link>
                        </motion.div>

                        {/* Services Mega Menu */}
                        {link.name === "Services" && mounted && typeof document !== "undefined" && createPortal(
                          <div
                            className="fixed left-1/2 -translate-x-1/2 w-[calc(100vw-48px)] max-w-[1180px] z-[9999] pointer-events-none"
                            style={{ top: "122px" }}
                          >
                            <AnimatePresence>
                              {servicesDropdownOpen && (
                                <motion.div
                                  ref={dropdownRef}
                                  variants={dropdownVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  className="w-full max-h-[calc(100vh-140px)] bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] dark:bg-[#071426]/95 dark:border-white/10 dark:shadow-[0_40px_90px_rgba(0,0,0,0.5)] dark:backdrop-blur-3xl grid grid-cols-12 gap-8 origin-top will-change-transform font-sans text-slate-800 dark:text-white overflow-hidden overscroll-contain pointer-events-auto"
                                  onMouseEnter={() => setServicesDropdownOpen(true)}
                                  onMouseLeave={() => setServicesDropdownOpen(false)}
                                >
                                  <style dangerouslySetInnerHTML={{
                                    __html: `
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
                                          className={`group/btn flex items-center justify-between p-3.5 rounded-r-2xl text-left transition-all duration-200 w-full cursor-pointer border-l-4 ${isCatActive
                                              ? "bg-[#1D74F5]/8 border-[#1D74F5] text-[#1D74F5] dark:bg-[#00D4FF]/10 dark:border-[#00D4FF] dark:text-[#00D4FF]"
                                              : "bg-transparent border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#1D74F5] dark:hover:text-[#00D4FF] hover:translate-x-1.5"
                                            }`}
                                        >
                                          <div className="flex items-center gap-3.5">
                                            <div
                                              className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center border transition-all duration-200 ${isCatActive
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
                                          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isCatActive
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

              {/* Action Button with Vibrant Continuous Motion Animations */}
              <div className="flex items-center gap-4">
                <div className="hidden lg:block">
                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                      boxShadow: [
                        "0 0 15px rgba(37,99,255,0.4), 0 0 30px rgba(0,212,255,0.2)",
                        "0 0 25px rgba(37,99,255,0.8), 0 0 45px rgba(0,212,255,0.5)",
                        "0 0 15px rgba(37,99,255,0.4), 0 0 30px rgba(0,212,255,0.2)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="rounded-2xl relative p-[2px] bg-gradient-to-r from-[#2563FF] via-[#00D4FF] to-[#2563FF] bg-[length:200%_auto]"
                  >
                    {/* Animated Rotating Gradient Border overlay */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2563FF] via-[#00D4FF] to-[#2563FF] opacity-90 pointer-events-none"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    <Link
                      href="/get-a-quote"
                      className="group relative inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-extrabold text-[13.5px] rounded-[14px] transition-all duration-300 overflow-hidden z-10"
                      style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif" }}
                    >
                      {/* Vibrant Cyan Sweeping Light Beam */}
                      <motion.div
                        className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent skew-x-[-20deg] pointer-events-none z-20"
                        animate={{ x: ["-180%", "400%"] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 0.8,
                          ease: "easeInOut"
                        }}
                      />

                      <span className="tracking-wide relative z-20 text-white font-black">Get a Quote</span>

                      {/* Gradient Circle with Bouncing Arrow */}
                      <motion.span
                        animate={{
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#2563FF] to-[#00D4FF] flex items-center justify-center text-white shadow-md relative z-20"
                      >
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowRight className="w-4 h-4 text-white" />
                        </motion.div>
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Mobile Hamburg Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 text-slate-900 dark:text-white hover:text-[#2563FF] transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>
          </header>
        </div>

      </div>

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
                      src="/image_removebg-preview.png"
                      alt="Modern Technology Logo"
                      width={100}
                      height={40}
                      className="h-auto w-[100px] filter drop-shadow-[0_0_10px_rgba(0,229,255,0.35)] brightness-105"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-500 dark:text-slate-400 hover:text-[#008FED] cursor-pointer"
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
                              className={`font-display text-[14px] font-semibold w-full text-left block py-2 px-3.5 rounded-lg transition-colors cursor-pointer ${isActive ? "bg-[#008FED]/10 dark:bg-[#00D4FF]/15 text-[#008FED] dark:text-[#00E5FF]" : "text-slate-650 dark:text-slate-300 hover:bg-[#008FED]/5 dark:hover:bg-white/5 hover:text-[#008FED]"
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
                              : "text-slate-650 dark:text-slate-300 hover:bg-[#008FED]/5 dark:hover:bg-white/5 hover:text-[#008FED]"
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