"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { servicesData } from "@/data/services";

// Social SVG Icons matching the original style
const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.396-5.91 1.396-5.91s-.356-.71-.356-1.759c0-1.648.952-2.878 2.134-2.878 1.005 0 1.491.755 1.491 1.66 0 1.009-.644 2.516-.975 3.913-.277 1.173.585 2.13 1.74 2.13 2.088 0 3.693-2.202 3.693-5.382 0-2.813-2.022-4.781-4.908-4.781-3.344 0-5.309 2.508-5.309 5.101 0 1.009.389 2.091.874 2.68.096.117.11.219.081.339-.09.373-.288 1.172-.328 1.332-.053.21-.174.254-.401.149-1.497-.696-2.433-2.883-2.433-4.636 0-3.774 2.743-7.239 7.906-7.239 4.15 0 7.375 2.957 7.375 6.909 0 4.124-2.599 7.44-6.208 7.44-1.212 0-2.35-.63-2.739-1.374l-.747 2.846c-.27 1.026-1.002 2.315-1.492 3.111 1.13.349 2.327.538 3.567.538 6.62 0 12-5.378 12-11.992C24.017 5.367 18.638 0 12.017 0z" />
  </svg>
);

const GooglePlusIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.24 10.285V14.4h6.887c-.648 2.42-2.72 4.114-6.887 4.114-4.507 0-8.163-3.664-8.163-8.17 0-4.507 3.656-8.17 8.163-8.17 2.122 0 4.024.784 5.488 2.248l3.12-3.12C17.976.84 15.297 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c7.04 0 12.24-4.945 12.24-12.24 0-.825-.075-1.62-.218-2.395H12.24z" />
  </svg>
);

function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    const maxDisplacement = 6;
    const distance = Math.sqrt(x * x + y * y);
    if (distance < 40) {
      setPosition({
        x: (x / 40) * maxDisplacement,
        y: (y / 40) * maxDisplacement,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#071426] overflow-hidden pt-16 pb-10 font-sans">
      {/* Premium glowing divider line above footer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent z-10" />

      {/* Background Grid Lines */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-between pointer-events-none z-0 px-6 lg:px-8 max-w-7xl mx-auto opacity-[0.25]">
        <div className="w-[1px] bg-slate-800 h-full" />
        <div className="w-[1px] bg-slate-800 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-800 h-full" />
        <div className="w-[1px] bg-slate-800 h-full hidden sm:block" />
        <div className="w-[1px] bg-slate-800 h-full" />
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00D4FF]/3 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#008FED]/2 blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: 7 columns on xl, 4 columns on lg, 3 on md, 2 on sm, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 pb-12 border-b border-[rgba(0,212,255,0.12)]">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Image
                src="/mt-logo.png"
                alt="Modern Technology Logo"
                width={150}
                height={45}
                className="h-auto w-[130px] filter drop-shadow-[0_0_8px_rgba(0,212,255,0.15)] brightness-100"
              />
            </Link>
            <p className="text-slate-400 text-[13px] leading-relaxed mt-3 font-normal">
              We focus on the needs of small to middle market businesses to improve and grow their return.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Magnetic>
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  whileTap={{ scale: 0.95 }}
                  href="#" 
                  aria-label="Twitter" 
                  className="w-9 h-9 rounded-full bg-[#0B1A2E]/70 border border-[rgba(0,212,255,0.15)] hover:bg-[#00D4FF] hover:text-[#071426] hover:border-[#00D4FF] text-slate-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] flex items-center justify-center transition-all duration-300 cursor-pointer"
                >
                  <TwitterIcon />
                </motion.a>
              </Magnetic>
              <Magnetic>
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  whileTap={{ scale: 0.95 }}
                  href="#" 
                  aria-label="Google Plus" 
                  className="w-9 h-9 rounded-full bg-[#0B1A2E]/70 border border-[rgba(0,212,255,0.15)] hover:bg-[#00D4FF] hover:text-[#071426] hover:border-[#00D4FF] text-slate-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] flex items-center justify-center transition-all duration-300 cursor-pointer"
                >
                  <GooglePlusIcon />
                </motion.a>
              </Magnetic>
              <Magnetic>
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  whileTap={{ scale: 0.95 }}
                  href="#" 
                  aria-label="Pinterest" 
                  className="w-9 h-9 rounded-full bg-[#0B1A2E]/70 border border-[rgba(0,212,255,0.15)] hover:bg-[#00D4FF] hover:text-[#071426] hover:border-[#00D4FF] text-slate-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] flex items-center justify-center transition-all duration-300 cursor-pointer"
                >
                  <PinterestIcon />
                </motion.a>
              </Magnetic>
              <Magnetic>
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  whileTap={{ scale: 0.95 }}
                  href="#" 
                  aria-label="Linkedin" 
                  className="w-9 h-9 rounded-full bg-[#0B1A2E]/70 border border-[rgba(0,212,255,0.15)] hover:bg-[#00D4FF] hover:text-[#071426] hover:border-[#00D4FF] text-slate-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] flex items-center justify-center transition-all duration-300 cursor-pointer"
                >
                  <LinkedinIcon />
                </motion.a>
              </Magnetic>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="font-display text-[11px] font-extrabold tracking-widest text-[#00D4FF] uppercase">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {servicesData.slice(0, 6).map((srv) => (
                <li key={srv.slug}>
                  <Link href={`/services/${srv.slug}`} className="text-xs font-semibold text-slate-400 hover:text-[#00D4FF] hover:translate-x-1 transition-transform duration-300 block">
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Community */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="font-display text-[11px] font-extrabold tracking-widest text-[#00D4FF] uppercase">
              Community
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/about" className="text-xs font-semibold text-slate-400 hover:text-[#00D4FF] hover:translate-x-1 transition-transform duration-300 block">About Us</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-xs font-semibold text-slate-400 hover:text-[#00D4FF] hover:translate-x-1 transition-transform duration-300 block">Our Portfolio</Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs font-semibold text-slate-400 hover:text-[#00D4FF] hover:translate-x-1 transition-transform duration-300 block">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="font-display text-[11px] font-extrabold tracking-widest text-[#00D4FF] uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/about" className="text-xs font-semibold text-slate-400 hover:text-[#00D4FF] hover:translate-x-1 transition-transform duration-300 block">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-semibold text-slate-400 hover:text-[#00D4FF] hover:translate-x-1 transition-transform duration-300 block">Refund and Returns Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-semibold text-slate-400 hover:text-[#00D4FF] hover:translate-x-1 transition-transform duration-300 block">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-semibold text-slate-400 hover:text-[#00D4FF] hover:translate-x-1 transition-transform duration-300 block">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-semibold text-slate-400 hover:text-[#00D4FF] hover:translate-x-1 transition-transform duration-300 block">Legal Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: India Office */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="font-display text-[11px] font-extrabold tracking-widest text-[#00D4FF] uppercase flex items-center gap-1.5 select-none">
              <span>🇮🇳</span> India Office
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 group/info select-none">
                <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-[#00D4FF] shrink-0 mt-0.5 group-hover/info:border-[#00D4FF]/30 border border-transparent transition-colors">
                  <MapPin className="w-3 h-3" />
                </div>
                <span className="text-xs text-slate-400 leading-normal">
                  Sector 62, Noida, UP 201301
                </span>
              </li>
              <li className="flex items-center gap-2 group/info select-none">
                <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover/info:border-[#00D4FF]/30 border border-transparent transition-colors">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="text-xs text-slate-400 hover:text-[#00D4FF] transition-colors cursor-pointer">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-2 group/info select-none">
                <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover/info:border-[#00D4FF]/30 border border-transparent transition-colors">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="text-xs text-slate-400 hover:text-[#00D4FF] transition-colors cursor-pointer break-all">
                  india@mitsafe.com
                </span>
              </li>
            </ul>
          </div>

          {/* Column 6: Dubai Office */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="font-display text-[11px] font-extrabold tracking-widest text-[#00D4FF] uppercase flex items-center gap-1.5 select-none">
              <span>🇦🇪</span> Dubai Office
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 group/info select-none">
                <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-[#00D4FF] shrink-0 mt-0.5 group-hover/info:border-[#00D4FF]/30 border border-transparent transition-colors">
                  <MapPin className="w-3 h-3" />
                </div>
                <span className="text-xs text-slate-400 leading-normal">
                  Business Bay, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-2 group/info select-none">
                <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover/info:border-[#00D4FF]/30 border border-transparent transition-colors">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="text-xs text-slate-400 hover:text-[#00D4FF] transition-colors cursor-pointer">
                  +971 4 123 4567
                </span>
              </li>
              <li className="flex items-center gap-2 group/info select-none">
                <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover/info:border-[#00D4FF]/30 border border-transparent transition-colors">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="text-xs text-slate-400 hover:text-[#00D4FF] transition-colors cursor-pointer break-all">
                  dubai@mitsafe.com
                </span>
              </li>
            </ul>
          </div>

          {/* Column 7: USA Office */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="font-display text-[11px] font-extrabold tracking-widest text-[#00D4FF] uppercase flex items-center gap-1.5 select-none">
              <span>🇺🇸</span> USA Office
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 group/info select-none">
                <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-[#00D4FF] shrink-0 mt-0.5 group-hover/info:border-[#00D4FF]/30 border border-transparent transition-colors">
                  <MapPin className="w-3 h-3" />
                </div>
                <span className="text-xs text-slate-400 leading-normal">
                  100 Pine St, SF, CA 94111
                </span>
              </li>
              <li className="flex items-center gap-2 group/info select-none">
                <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover/info:border-[#00D4FF]/30 border border-transparent transition-colors">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="text-xs text-slate-400 hover:text-[#00D4FF] transition-colors cursor-pointer">
                  +1 (555) 019-2834
                </span>
              </li>
              <li className="flex items-center gap-2 group/info select-none">
                <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover/info:border-[#00D4FF]/30 border border-transparent transition-colors">
                  <Mail className="w-3 h-3" />
                </div>
                <span className="text-xs text-slate-400 hover:text-[#00D4FF] transition-colors cursor-pointer break-all">
                  usa@mitsafe.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-semibold text-slate-400">
            © {new Date().getFullYear()} Modern Technology. All rights reserved.
          </span>
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-400">
            <Link href="#" className="hover:text-[#00D4FF] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#00D4FF] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
