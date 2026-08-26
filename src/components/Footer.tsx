"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight, ChevronRight, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";

// Working Social Media SVG Icons
const XTwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }
  // Social media links in requested order: LinkedIn, Facebook, Instagram, X (Twitter), YouTube
  const socialLinks = [
    { name: "LinkedIn", icon: LinkedinIcon, url: "https://www.linkedin.com/company/modern-technology-indore/" },
    { name: "Facebook", icon: FacebookIcon, url: "https://facebook.com" },
    { name: "Instagram", icon: InstagramIcon, url: "https://instagram.com" },
    { name: "X (Twitter)", icon: XTwitterIcon, url: "https://x.com" },
    { name: "YouTube", icon: YoutubeIcon, url: "https://youtube.com" },
  ];

  return (
    <footer
      className="relative bg-white text-slate-900 border-t border-slate-200 overflow-hidden pt-8 pb-0 w-full"
      style={{ fontFamily: "'Sora', 'Manrope', sans-serif" }}
    >
      {/* Wave Accent Background Graphic */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">

        {/* Main Grid Layout - fully responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 pb-6 border-b border-slate-200 w-full">

          {/* Brand & Description Column (3 cols on XL) */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-4 pr-2 w-full">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <Image
                src="/image.webp"
                alt="Modern Technology Logo"
                width={320}
                height={95}
                className="h-[68px] sm:h-[76px] md:h-[82px] max-h-[95%] w-auto object-contain transition-transform duration-300 ease-out origin-left"
              />
            </Link>
            <p className="text-black text-[13px] leading-relaxed font-semibold mt-1">
              Mitsafe delivers future-ready digital solutions & IT services that help businesses innovate, scale and succeed in the digital era.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3.5 mt-2">
              {socialLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="text-black hover:opacity-75 transition-opacity cursor-pointer shrink-0"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links (2 cols on XL) */}
          <div className="lg:col-span-4 xl:col-span-2 flex flex-col gap-3 text-left w-full">
            <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 uppercase font-display relative pb-1.5 w-fit">
              Services
              <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#0052cc] rounded-full" />
            </h3>
            <ul className="flex flex-col gap-2 mt-1 w-full">
              {servicesData.slice(0, 6).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-xs sm:text-[13px] font-bold text-black hover:opacity-80 transition-opacity flex items-center gap-1.5 group w-fit py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-black shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    <span className="inline-block transition-all duration-300 group-hover:translate-x-1.5">
                      {srv.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 xl:col-span-2 flex flex-col gap-3 text-left w-full">
            <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 uppercase font-display relative pb-1.5 w-fit">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#0052cc] rounded-full" />
            </h3>
            <ul className="flex flex-col gap-2 mt-1 w-full">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Portfolio", href: "/portfolio" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Privacy Policy", href: "#" },
                { name: "Refund Policy", href: "/refund-policy" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-xs sm:text-[13px] font-bold text-black hover:opacity-80 transition-opacity flex items-center gap-1.5 group w-fit py-0.5">
                    <ChevronRight className="w-3.5 h-3.5 text-black shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    <span className="inline-block transition-all duration-300 group-hover:translate-x-1.5">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-4 w-full">
            <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 uppercase font-display relative pb-2 w-fit">
              Global Offices
              <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-[#0052cc] rounded-full" />
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-2 w-full items-stretch">
              <a
                href="https://www.google.com/maps/search/202+Business+Island,+Nipaniya,+Indore,+452010"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between h-full gap-2 hover:border-slate-350 transition-all duration-300 group/card w-full text-black hover:text-black"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] sm:text-xs font-bold tracking-wider text-black uppercase flex items-center gap-1.5">
                      <span>🇮🇳</span> India
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover/card:opacity-100 transition-all duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                  </div>
                  <div className="flex items-start gap-1.5 text-xs sm:text-[13px] text-black font-semibold mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                    <span className="leading-snug">202 Business Island, Nipaniya, Indore, 452010</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-200/60 text-xs sm:text-[13px] text-black font-semibold truncate">
                  <Mail className="w-3.5 h-3.5 text-black shrink-0" />
                  <span className="truncate">contact@mitsafe.com</span>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/Business+Bay,+Dubai,+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between h-full gap-2 hover:border-slate-350 transition-all duration-300 group/card w-full text-black hover:text-black"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] sm:text-xs font-bold tracking-wider text-black uppercase flex items-center gap-1.5">
                      <span>🇦🇪</span> Dubai
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover/card:opacity-100 transition-all duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                  </div>
                  <div className="flex items-start gap-1.5 text-xs sm:text-[13px] text-black font-semibold mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                    <span className="leading-snug">Business Bay, Dubai, UAE</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-200/60 text-xs sm:text-[13px] text-black font-semibold truncate">
                  <Mail className="w-3.5 h-3.5 text-black shrink-0" />
                  <span className="truncate">contact@mitsafe.com</span>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/100+Pine+St,+San+Francisco,+CA+94111"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-2xl p-3.5 flex flex-col justify-between h-full gap-2 hover:border-slate-350 transition-all duration-300 group/card w-full text-black hover:text-black"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] sm:text-xs font-bold tracking-wider text-black uppercase flex items-center gap-1.5">
                      <span>🇺🇸</span> USA
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover/card:opacity-100 transition-all duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                  </div>
                  <div className="flex items-start gap-1.5 text-xs sm:text-[13px] text-black font-semibold mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                    <span className="leading-snug">100 Pine St, SF, CA 94111</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-200/60 text-xs sm:text-[13px] text-black font-semibold truncate">
                  <Mail className="w-3.5 h-3.5 text-black shrink-0" />
                  <span className="truncate">contact@mitsafe.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 mt-2 w-full">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-slate-500 shrink-0" />
            <div className="flex flex-col text-left">
              <h4 className="text-[15px] sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                Let's Build Something Amazing Together
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm font-semibold mt-0.5">
                Have a project in mind? Let's turn your ideas into reality.
              </p>
            </div>
          </div>
          <Link href="/get-a-quote">
            <span
              className="group inline-flex items-center justify-center gap-2.5 h-11 px-6 bg-[#305EFF] hover:bg-[#305EFF] rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <span className="font-bold text-xs sm:text-sm" style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}>Get A Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: "#FFFFFF", stroke: "#FFFFFF" }} />
            </span>
          </Link>
        </div>
      </div>

      <div className="w-full bg-white border-t border-slate-200 text-slate-900 py-3 mt-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <span className="text-xs sm:text-[13px] font-semibold tracking-wide text-slate-900 opacity-90">
            © {new Date().getFullYear()} Mitsafe Technologies. All Rights Reserved.
          </span>
          <div className="flex items-center gap-4 text-xs sm:text-[13px] font-bold tracking-wide text-slate-900">
            <Link href="#" className="hover:text-black inline-block transition-transform duration-200 hover:scale-105">Privacy Policy</Link>
            <span className="opacity-40 text-slate-900">|</span>
            <Link href="/terms" className="hover:text-black inline-block transition-transform duration-200 hover:scale-105">Terms &amp; Conditions</Link>
            <span className="opacity-40 text-slate-900">|</span>
            <Link href="/refund-policy" className="hover:text-black inline-block transition-transform duration-200 hover:scale-105">Refund Policy</Link>
            <span className="opacity-40 text-slate-900">|</span>
            <Link href="#" className="hover:text-[#305EFF] inline-block transition-transform duration-200 hover:scale-105">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}