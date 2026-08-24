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
  Globe,
  Zap,
  ShieldCheck,
  Rocket,
  Bot,
  MapPin,
  Sparkles,
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Building2,
  Compass,
  Truck,
  Factory,
  Tv,
  Car,
} from "lucide-react";
import Button from "./Button";
import { servicesData } from "@/data/services";
import { navbarIndustriesData } from "@/data/industriesDataNavbar";
import { useTheme } from "./ThemeProvider";

const industryIconMap: Record<string, React.ComponentType<any>> = {
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Building2,
  Compass,
  Truck,
  Factory,
  Tv,
  Cloud,
  Car,
  Briefcase,
};

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
  {
    icon: Globe,
    text: "Custom Websites for Every Business",
  },
  {
    icon: Zap,
    text: "Fast, SEO-Friendly & High Performance",
  },
  {
    icon: Smartphone,
    text: "Fully Responsive on All Devices",
  },
  {
    icon: ShieldCheck,
    text: "Secure & Scalable Solutions",
  },
  {
    icon: Rocket,
    text: "Modern UI/UX for Better Conversions",
  },
  {
    icon: Bot,
    text: "AI-Powered Business Automation",
  },
  {
    icon: Cloud,
    text: "Cloud & API Integration",
  },
  {
    icon: Briefcase,
    text: "End-to-End Digital Solutions",
  },
];

const countryItems = [
  { code: "in", flag: "🇮🇳", flagUrl: "https://flagcdn.com/w40/in.png", name: "India" },
  { code: "us", flag: "🇺🇸", flagUrl: "https://flagcdn.com/w40/us.png", name: "United States" },
  { code: "gb", flag: "🇬🇧", flagUrl: "https://flagcdn.com/w40/gb.png", name: "United Kingdom" },
  { code: "ae", flag: "🇦🇪", flagUrl: "https://flagcdn.com/w40/ae.png", name: "UAE" },
  { code: "ca", flag: "🇨🇦", flagUrl: "https://flagcdn.com/w40/ca.png", name: "Canada" },
  { code: "au", flag: "🇦🇺", flagUrl: "https://flagcdn.com/w40/au.png", name: "Australia" },
  { code: "sg", flag: "🇸🇬", flagUrl: "https://flagcdn.com/w40/sg.png", name: "Singapore" },
  { code: "de", flag: "🇩🇪", flagUrl: "https://flagcdn.com/w40/de.png", name: "Germany" },
];

const messageWords = ["Building", "Digital", "Solutions", "Worldwide"];

import { useModal } from "@/context/ModalContext";
import ContactWhatsAppModal, { TOPBAR_PHONE_NUMBER } from "./ContactWhatsAppModal";

export default function Navbar() {
  const { openModal } = useModal();
  const { theme, toggleTheme } = useTheme();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>("web-development");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }
  const dropdownRef = useRef<HTMLDivElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [topBarHovered, setTopBarHovered] = useState(false);
  const [countryIndex, setCountryIndex] = useState(0);
  const [wordCount, setWordCount] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Continuous Word-by-Word Message Animation Timer Loop (450ms per word + 2.2s pause at complete sentence)
  useEffect(() => {
    const isComplete = wordCount >= messageWords.length;
    const delay = isComplete ? 2200 : 450;

    const timer = setTimeout(() => {
      setWordCount((prev) => (prev >= messageWords.length ? 1 : prev + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [wordCount]);

  // Vertical Country Slider Timer Effect
  useEffect(() => {
    const countryTimer = setInterval(() => {
      setCountryIndex((prev) => (prev + 1) % countryItems.length);
    }, 2400);
    return () => clearInterval(countryTimer);
  }, []);

  useEffect(() => {
    if (topBarHovered) return;
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcementItems.length);
    }, 1600);
    return () => clearInterval(interval);
  }, [topBarHovered]);

  useEffect(() => {
    const element = dropdownRef.current;
    if (servicesDropdownOpen || industriesDropdownOpen) {
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
  }, [servicesDropdownOpen, industriesDropdownOpen]);

  useEffect(() => {
    const element = industriesDropdownRef.current;
    if (!element) return;

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    element.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, [industriesDropdownOpen]);

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
    setIndustriesDropdownOpen(false);
    setMobileIndustriesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Company", href: "/company" },
    { name: "Services", href: "/#premium-showcase", hasDropdown: true },
    { name: "Industries", href: "#", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Hire Developers", href: "/hire-developers" },
    { name: "Blog", href: "/blog" },
  ];

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* Fixed Wrapper containing both Top Bar and Navbar to prevent any overlapping on scroll */}
      <div className="fixed top-0 left-0 w-full z-50">

        {/* 1. Pure White Rectangular Topbar — NO Border Radius on Topbar */}
        <div className="w-full h-[44px] sm:h-[46px] bg-white border-b border-slate-200/90 px-3 sm:px-8 lg:px-12 flex items-center justify-between gap-3 sm:gap-4 pointer-events-auto relative z-20 font-sans text-black">

          {/* Left Side: Contact Info + Animated Message + Country Selector */}
          <div className="flex items-center gap-2 sm:gap-3.5 lg:gap-4 shrink-0">
            {/* Email Icon + Email (Optional inline display) */}
            <a
              href="mailto:moderntechnologies12@gmail.com"
              className="hidden xl:flex items-center gap-1.5 text-black hover:opacity-75 transition-opacity shrink-0"
            >
              <Mail className="w-[17px] h-[17px] text-black shrink-0" />
              <span className="text-[13.5px] sm:text-[14px] font-normal text-black tracking-tight">
                moderntechnologies12@gmail.com
              </span>
            </a>

            <div className="hidden xl:block h-3.5 w-[1px] bg-slate-300 shrink-0" />

            {/* Phone Icon + Phone Number */}
            <a
              href={`tel:${TOPBAR_PHONE_NUMBER.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-black hover:opacity-75 transition-opacity shrink-0"
            >
              <Phone className="w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] text-black shrink-0" />
              <span className="text-[11.5px] sm:text-[14px] font-normal text-black tracking-tight whitespace-nowrap">
                {TOPBAR_PHONE_NUMBER}
              </span>
            </a>

            <div className="hidden sm:block h-3.5 w-[1px] bg-slate-300 shrink-0" />

            {/* 1. Continuous Word-by-Word Animated Message */}
            <div className="hidden md:inline-flex items-center gap-1.5 text-[13px] sm:text-[13.5px] lg:text-[14px] font-medium text-slate-800 tracking-tight whitespace-nowrap shrink-0">
              {messageWords.map((word, idx) => {
                const isVisible = idx < wordCount;
                return (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 3,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>

            {/* 2. Country Flag Icon + Country Name Slider (Positioned forward on the left after Building message) */}
            <div className="relative h-6 sm:h-7 w-[115px] sm:w-[165px] px-2 sm:px-3.5 rounded-full bg-slate-100/90 border border-slate-200/80 flex items-center justify-center overflow-hidden shrink-0 shadow-2xs">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={countryIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-[11.5px] sm:text-[13.5px] font-medium text-black"
                >
                  <img
                    src={countryItems[countryIndex].flagUrl}
                    alt={countryItems[countryIndex].name}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full object-cover shrink-0 shadow-2xs border border-slate-200"
                  />
                  <span className="font-medium text-black select-none truncate">
                    {countryItems[countryIndex].name}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Middle/Right: Smooth continuous scrolling marquee in space between Country Selector and Social Icons */}
          <div className="hidden lg:flex flex-1 min-w-0 overflow-hidden relative mx-3 xl:mx-6 items-center [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <motion.div
              className="flex gap-10 whitespace-nowrap text-[12.5px] lg:text-[13px] text-slate-400 font-normal select-none tracking-normal shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 20,
              }}
            >
              <span>Empowering Businesses with Smart Digital Solutions Worldwide</span>
              <span>Empowering Businesses with Smart Digital Solutions Worldwide</span>
              <span>Empowering Businesses with Smart Digital Solutions Worldwide</span>
              <span>Empowering Businesses with Smart Digital Solutions Worldwide</span>
            </motion.div>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/modern-technology-indore/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-75 transition-opacity flex items-center justify-center"
              title="LinkedIn"
            >
              <svg className="w-[20px] h-[20px] sm:w-[23px] sm:h-[23px] fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-75 transition-opacity flex items-center justify-center"
              title="Facebook"
            >
              <svg className="w-[19px] h-[19px] sm:w-[22px] sm:h-[22px] fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.63.76-1.63 1.54V12h2.72l-.43 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-75 transition-opacity flex items-center justify-center"
              title="Instagram"
            >
              <svg className="w-[19px] h-[19px] sm:w-[22px] sm:h-[22px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

          {/* 2. Floating Navbar directly below Top Bar (Pure White Background #FFFFFF - Zero Shadow) */}
        <div className="w-full flex justify-center pt-2.5 pointer-events-auto">
          <header className="w-[94%] sm:w-[95%] max-w-[1360px] transition-all duration-300 border border-slate-200/80 rounded-2xl sm:rounded-3xl bg-white h-[64px] sm:h-[68px] flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-6 xl:px-8 flex items-center justify-between relative z-10 h-full">

              {/* Logo (Dead-center vertical alignment on the left) */}
              <Link href="/" className="flex items-center justify-center shrink-0 h-full group">
                <Image
                  src="/image.webp"
                  alt="Mitsafe - Enterprise Software & AI Automation"
                  width={240}
                  height={75}
                  className="h-[48px] sm:h-[52px] md:h-[56px] max-h-[82%] w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03] origin-left"
                  priority
                />
              </Link>

              {/* Desktop Nav Links (shifted towards Contact Us with equal consistent spacing) */}
              <nav className="hidden lg:flex items-center justify-end gap-1 xl:gap-2.5 2xl:gap-3.5 h-full ml-auto mr-3 xl:mr-5 font-sans">
                  {navLinks.map((link) => {
                    const isServices = link.name === "Services";
                    const isIndustries = link.name === "Industries";
                    const isServicesOrDropdown = isServices || link.name === "Country";
                    const isActive =
                      pathname === link.href ||
                      (link.name === "Home" && pathname === "/") ||
                      (isServices && pathname.startsWith("/services")) ||
                      (isIndustries && pathname.startsWith("/industries")) ||
                      (link.name === "Blog" && pathname.startsWith("/blog"));
                    return (
                      <div
                        key={link.name}
                        className="relative group flex items-center py-2 px-0.5 rounded-full h-full"
                        onMouseEnter={() => {
                          setHoveredLink(link.name);
                          if (isServices) {
                            setServicesDropdownOpen(true);
                            setIndustriesDropdownOpen(false);
                          } else if (isIndustries) {
                            setIndustriesDropdownOpen(true);
                            setServicesDropdownOpen(false);
                          }
                        }}
                        onMouseLeave={() => {
                          setHoveredLink(null);
                          if (isServices) {
                            setServicesDropdownOpen(false);
                          } else if (isIndustries) {
                            setIndustriesDropdownOpen(false);
                          }
                        }}
                      >
                        {/* Active Pill Indicator */}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavPill"
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#305EFF] rounded-full shadow-xs"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}

                        {/* Link Text (font-medium weight) */}
                        <div className="relative z-10 flex items-center h-full">
                          {link.hasDropdown ? (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (isIndustries) {
                                  setIndustriesDropdownOpen((prev) => !prev);
                                } else if (isServices) {
                                  setServicesDropdownOpen((prev) => !prev);
                                }
                              }}
                              className={`font-medium text-[13.5px] xl:text-[14px] tracking-normal transition-all duration-200 flex items-center gap-1 cursor-pointer select-none px-2 py-1.5 relative group/item whitespace-nowrap ${isActive
                                ? "text-[#305EFF]"
                                : "text-slate-800 hover:text-[#305EFF]"
                                }`}
                            >
                              <span>{link.name}</span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                  (isServices && servicesDropdownOpen) || (isIndustries && industriesDropdownOpen)
                                    ? "rotate-180 text-[#305EFF]"
                                    : "text-slate-400 group-hover:text-[#305EFF]"
                                }`}
                              />

                              {/* Hover Underline effect */}
                              {!isActive && (
                                <span className="absolute bottom-1 left-2 right-2 h-[2px] bg-[#305EFF] scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-center" />
                              )}
                            </button>
                          ) : (
                            <Link
                              href={link.href}
                              className={`font-medium text-[13.5px] xl:text-[14px] tracking-normal transition-all duration-200 flex items-center gap-1 cursor-pointer select-none px-2 py-1.5 relative group/item whitespace-nowrap ${isActive
                                ? "text-[#305EFF]"
                                : "text-slate-800 hover:text-[#305EFF]"
                                }`}
                            >
                              <span>{link.name}</span>
                              {/* Hover Underline effect */}
                              {!isActive && (
                                <span className="absolute bottom-1 left-2 right-2 h-[2px] bg-[#305EFF] scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-center" />
                              )}
                            </Link>
                          )}
                        </div>

                        {/* Services Mega Menu */}
                        {isServicesOrDropdown && mounted && typeof document !== "undefined" && createPortal(
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
                                  className="w-full max-h-[calc(100vh-140px)] bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] grid grid-cols-12 gap-8 origin-top font-sans text-slate-800 overflow-hidden overscroll-contain pointer-events-auto"
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
                                    className="col-span-12 lg:col-span-3 border-r border-slate-200/50 pr-4 flex flex-col gap-2 max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain hide-scrollbar"
                                  >
                                    <span className="text-[11px] font-bold tracking-wider text-[#305EFF] uppercase font-mono mb-2 px-3">
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
                                            ? "bg-[#305EFF]/8 border-[#305EFF] text-[#305EFF]"
                                            : "bg-transparent border-transparent text-slate-600 hover:bg-slate-50 hover:text-[#305EFF] hover:translate-x-1.5"
                                            }`}
                                        >
                                          <div className="flex items-center gap-3.5">
                                            <div
                                              className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center border transition-all duration-200 ${isCatActive
                                                ? "bg-[#305EFF] text-white border-transparent shadow-[0_0_12px_rgba(48,94,255,0.3)]"
                                                : "bg-[#305EFF]/5 border-[#305EFF]/10 text-[#305EFF] group-hover/btn:scale-105"
                                                }`}
                                            >
                                              <IconComponent className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-[13.5px] font-medium font-sans tracking-wide">
                                              {srv.title}
                                            </span>
                                          </div>
                                          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isCatActive
                                            ? "text-[#305EFF] translate-x-0.5"
                                            : "text-slate-300 group-hover/btn:translate-x-0.5"
                                            }`} />
                                        </button>
                                      );
                                    })}
                                  </motion.div>

                                  {/* 2. Center: Selected Service Preview */}
                                  <motion.div
                                    variants={columnVariants}
                                    className="col-span-12 lg:col-span-4 flex flex-col justify-between text-left py-1"
                                  >
                                    <div className="flex flex-col gap-3">
                                      <span className="text-[11px] font-bold tracking-wider text-[#305EFF] uppercase font-mono">
                                        Overview
                                      </span>
                                      <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] tracking-tight font-display">
                                        {activeService.title}
                                      </h2>
                                      <div className="w-12 h-[3px] bg-[#305EFF] rounded-full my-0.5" />
                                      <p className="text-[13px] text-slate-600 leading-relaxed font-normal font-sans line-clamp-4">
                                        {activeService.longDescription}
                                      </p>
                                    </div>

                                    {/* Action Button */}
                                    <div className="text-left mt-4">
                                      <Link
                                        href={`/services/${activeService.slug}`}
                                        onClick={() => setServicesDropdownOpen(false)}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#305EFF] text-white hover:bg-[#305EFF]/90 font-medium rounded-xl text-xs shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn cursor-pointer font-sans"
                                      >
                                        <span>Explore {activeService.title}</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                      </Link>
                                    </div>
                                  </motion.div>

                                  {/* 3. Right Side: Sub-Services & Technologies */}
                                  <motion.div
                                    variants={columnVariants}
                                    className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-6 border-l border-slate-200/50 pl-6 text-left max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain hide-scrollbar"
                                  >
                                    <div className="flex flex-col gap-3">
                                      <span className="text-[11px] font-bold tracking-wider text-[#305EFF] uppercase font-mono">
                                        Services under {activeService.title}
                                      </span>

                                      <div className="flex flex-col gap-0 border-t border-slate-100">
                                        {activeService.subServiceGroups.slice(0, 2).flatMap(g => g.items).slice(0, 8).map((item, itemIdx) => {
                                          return (
                                            <Link
                                              key={itemIdx}
                                              href={`/services/${activeService.slug}`}
                                              onClick={() => setServicesDropdownOpen(false)}
                                              className="group/item flex items-center justify-between py-3 px-2 border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-150 cursor-pointer font-sans"
                                            >
                                              <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#305EFF] group-hover/item:scale-125 transition-transform shrink-0" />
                                                <span className="text-[13.5px] font-medium text-slate-800 group-hover/item:text-[#305EFF] transition-colors">
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
                                    <div className="border-t border-slate-200/60 pt-4 mt-2 flex flex-col gap-2.5">
                                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                                        Technologies We Leverage
                                      </span>
                                      <div className="flex flex-wrap gap-2">
                                        {activeService.technologies.slice(0, 5).map((tech, techIdx) => (
                                          <span
                                            key={techIdx}
                                            className="text-[11px] font-medium px-3 py-1.5 rounded-xl border border-slate-200/60 bg-slate-50 hover:bg-[#305EFF]/10 hover:border-[#305EFF]/30 hover:text-[#305EFF] hover:scale-105 transition-all duration-300 tracking-wide cursor-default select-none shadow-xs font-sans text-slate-700"
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

                        {/* Industries Mega Menu */}
                        {isIndustries && mounted && typeof document !== "undefined" && createPortal(
                          <div
                            className="fixed left-1/2 -translate-x-1/2 w-[calc(100vw-48px)] max-w-[1180px] z-[9999] pointer-events-none"
                            style={{ top: "122px" }}
                          >
                            <AnimatePresence>
                              {industriesDropdownOpen && (
                                <motion.div
                                  ref={industriesDropdownRef}
                                  variants={dropdownVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  className="w-full max-h-[calc(100vh-140px)] bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] grid grid-cols-12 gap-8 origin-top font-sans text-slate-800 overflow-hidden overscroll-contain pointer-events-auto"
                                  onMouseEnter={() => setIndustriesDropdownOpen(true)}
                                  onMouseLeave={() => setIndustriesDropdownOpen(false)}
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

                                  {/* 1. LEFT SIDE — INDUSTRIES INTRO */}
                                  <motion.div
                                    variants={columnVariants}
                                    className="col-span-12 lg:col-span-4 border-r border-slate-200/50 pr-6 flex flex-col justify-between text-left py-0.5"
                                  >
                                    <div className="flex flex-col gap-3">
                                      <span className="text-[11px] font-bold tracking-wider text-[#305EFF] uppercase font-mono">
                                        Industry Solutions
                                      </span>
                                      
                                      <h2 className="force-black-text text-2xl lg:text-3xl font-bold tracking-tight font-display select-none" style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>
                                        <span className="force-black-text" style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Industry-Tailored </span>
                                        <span className="force-black-text" style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Tech </span>
                                        <span className="force-black-text" style={{ color: "#000000", WebkitTextFillColor: "#000000" }}>Solutions</span>
                                      </h2>
                                      <div className="w-12 h-[3px] bg-[#305EFF] rounded-full my-0.5" />
                                      
                                      <p className="text-[13px] text-slate-600 leading-relaxed font-normal font-sans line-clamp-3">
                                        We architect domain-specific software systems, AI automation engines, and secure digital infrastructure designed for your sector&apos;s exact compliance &amp; performance demands.
                                      </p>

                                      {/* Feature visual card */}
                                      <div className="mt-1.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-2 shadow-2xs font-sans">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                                          <ShieldCheck className="w-4 h-4 text-[#305EFF] shrink-0" />
                                          <span>Enterprise Security &amp; Compliance</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[12px] font-medium text-slate-600">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#305EFF] shrink-0" />
                                          <span>HIPAA, SOC2, PCI-DSS &amp; ISO Compliant</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[12px] font-medium text-slate-600">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#305EFF] shrink-0" />
                                          <span>12+ Specialized Vertical Architectures</span>
                                        </div>
                                      </div>
                                    </div>

                                    {/* CTA Link */}
                                    <div className="text-left mt-3">
                                      <button
                                        onClick={() => {
                                          setIndustriesDropdownOpen(false);
                                          openModal("quote");
                                        }}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#305EFF] text-white hover:bg-[#305EFF]/90 font-medium rounded-xl text-xs shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn cursor-pointer font-sans"
                                      >
                                        <span>Get Custom Solution</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                      </button>
                                    </div>
                                  </motion.div>

                                  {/* 2. MAIN AREA — INDUSTRY CATEGORIES */}
                                  <motion.div
                                    variants={columnVariants}
                                    className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-3.5 max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain hide-scrollbar text-left pr-1"
                                  >
                                    {navbarIndustriesData.map((ind) => {
                                      const IndIcon = industryIconMap[ind.iconName] || Building2;
                                      return (
                                        <Link
                                          key={ind.id}
                                          href={`/industries/${ind.slug}`}
                                          onClick={() => setIndustriesDropdownOpen(false)}
                                          className="group/ind flex flex-col justify-between p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#305EFF]/40 hover:bg-[#305EFF]/[0.02] hover:shadow-md transition-all duration-200 cursor-pointer"
                                        >
                                          <div>
                                            <div className="flex items-center justify-between mb-2">
                                              <div className="w-8 h-8 rounded-xl bg-[#305EFF]/10 border border-[#305EFF]/20 text-[#305EFF] flex items-center justify-center transition-transform duration-200 group-hover/ind:scale-105">
                                                <IndIcon className="w-4 h-4" />
                                              </div>
                                              <ChevronRight className="w-4 h-4 text-slate-300 group-hover/ind:text-[#305EFF] group-hover/ind:translate-x-0.5 transition-all" />
                                            </div>

                                            <h4 className="text-[13.5px] font-medium font-sans text-black group-hover/ind:text-[#305EFF] transition-colors mb-1 tracking-wide">
                                              {ind.title}
                                            </h4>

                                            <p className="text-[12px] text-slate-500 line-clamp-1 mb-2 font-normal font-sans leading-snug">
                                              {ind.description}
                                            </p>
                                          </div>

                                          {/* Sub-solutions tags */}
                                          <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                                            {ind.solutions.slice(0, 2).map((sol, idx) => (
                                              <span
                                                key={idx}
                                                className="text-[10px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/50 group-hover/ind:bg-[#305EFF]/10 group-hover/ind:border-[#305EFF]/20 group-hover/ind:text-[#305EFF] transition-colors"
                                              >
                                                {sol}
                                              </span>
                                            ))}
                                          </div>
                                        </Link>
                                      );
                                    })}
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

              {/* Action Buttons: Contact Us (Secondary Outline) + Get a Quote (Primary Gradient) */}
              <div className="flex items-center gap-2 xl:gap-2.5">
                <div className="hidden lg:flex items-center gap-2 xl:gap-2.5">
                  {/* Secondary Outline: Contact Us */}
                  <button
                    type="button"
                    onClick={() => setContactModalOpen(true)}
                    className="h-[38px] px-3.5 xl:px-4 rounded-full border border-slate-200 hover:border-[#305EFF] bg-white hover:bg-slate-50 text-slate-700 hover:text-[#305EFF] font-medium text-[13px] xl:text-[13.5px] transition-all duration-200 inline-flex items-center justify-center cursor-pointer select-none whitespace-nowrap shadow-2xs"
                  >
                    Contact Us
                  </button>

                  {/* Primary Pill Gradient: Get a Quote */}
                  <button
                    type="button"
                    onClick={() => openModal("quote")}
                    className="group h-[38px] inline-flex items-center justify-center gap-2 px-4.5 xl:px-5 bg-gradient-to-r from-[#305EFF] via-indigo-600 to-[#305EFF] bg-[length:200%_auto] text-white font-medium text-[13px] xl:text-[13.5px] rounded-full shadow-xs hover:shadow-md hover:bg-[position:100%_0] transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Mobile Hamburg Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 text-slate-900 dark:text-white hover:text-[#305EFF] transition-colors cursor-pointer"
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
              className="fixed right-0 top-0 h-full w-[85vw] max-w-[320px] bg-white dark:bg-[#071426] border-l border-[#008FED]/15 dark:border-[rgba(0,212,255,0.15)] p-6 sm:p-8 shadow-2xl z-50 lg:hidden flex flex-col justify-between overflow-y-auto text-slate-800 dark:text-white"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/image_removebg-preview.webp"
                      alt="Mitsafe - Enterprise Software & AI Automation"
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
                      (link.name === "Services" && pathname.startsWith("/services")) ||
                      (link.name === "Industries" && pathname.startsWith("/industries")) ||
                      (link.name === "Blog" && pathname.startsWith("/blog"));
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
                        ) : link.name === "Industries" ? (
                          <div className="flex flex-col gap-1.5">
                            <button
                              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                              className={`font-display text-[14px] font-semibold w-full text-left block py-2 px-3.5 rounded-lg transition-colors cursor-pointer ${isActive ? "bg-[#305EFF]/10 text-[#305EFF]" : "text-slate-650 dark:text-slate-300 hover:bg-[#305EFF]/5 hover:text-[#305EFF]"
                                }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{link.name}</span>
                                <ChevronDown className={`w-4 h-4 opacity-50 transition-transform duration-300 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
                              </div>
                            </button>
                            <AnimatePresence initial={false}>
                              {mobileIndustriesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease: "easeInOut" }}
                                  className="pl-4 flex flex-col gap-2.5 mt-2 border-l border-[#305EFF]/20 font-sans overflow-hidden"
                                >
                                  {navbarIndustriesData.map((ind) => {
                                    const IndIcon = industryIconMap[ind.iconName] || Building2;
                                    return (
                                      <Link
                                        key={ind.id}
                                        href={`/industries/${ind.slug}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-xs text-slate-600 dark:text-slate-300 hover:text-[#305EFF] flex items-center justify-between py-1 transition-colors duration-200"
                                      >
                                        <div className="flex items-center gap-2.5">
                                          <IndIcon className="w-3.5 h-3.5 text-[#305EFF]" />
                                          <span>{ind.title}</span>
                                        </div>
                                        <ChevronRight className="w-3 h-3 text-slate-400" />
                                      </Link>
                                    );
                                  })}
                                  <button
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      openModal("quote");
                                    }}
                                    className="text-xs font-semibold text-[#305EFF] flex items-center gap-1.5 pt-1.5 hover:underline text-left cursor-pointer"
                                  >
                                    <span>Get Custom Industry Solution</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </button>
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

              <div className="mt-8 pt-6 border-t border-[#008FED]/15 dark:border-[rgba(0,212,255,0.15)] flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setContactModalOpen(true);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:text-[#008FED] hover:border-[#008FED] text-xs font-bold transition-colors flex items-center justify-center cursor-pointer"
                >
                  Contact Us
                </button>
                <Button
                  variant="primary"
                  icon={<Send className="w-4 h-4 text-white" />}
                  className="w-full !bg-gradient-to-r !from-[#00D4FF] !to-[#008FED] hover:!from-[#00E5FF] hover:!to-[#008FED]/80 !border-transparent !shadow-[0_0_12px_rgba(0,212,255,0.3)] hover:!shadow-[0_0_20px_rgba(0,212,255,0.5)] !py-3 !text-sm !font-bold !rounded-xl"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal("quote");
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp Quick Contact Modal */}
      <ContactWhatsAppModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
