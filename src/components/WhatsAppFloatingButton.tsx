"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function WhatsAppFloatingButton() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Hide on admin routes if needed
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const whatsappUrl = "https://wa.me/916265944392";

  return (
    <div className="fixed bottom-3.5 right-3.5 sm:bottom-5 sm:right-5 z-40 print:hidden select-none">
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle tooltip for desktop hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 6, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className="hidden md:flex items-center absolute right-full mr-2.5 px-2.5 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-semibold shadow-md shadow-black/10 whitespace-nowrap pointer-events-none backdrop-blur-xs border border-white/10"
            >
              <span>Chat with us</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] ml-1.5 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Circular Floating Action Button - Compact Size */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Mitsafe on WhatsApp"
          title="Chat with Mitsafe on WhatsApp"
          className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] hover:bg-[#20BA56] text-white shadow-[0_3px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:scale-108 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        >
          {/* Pulsing ring indicator */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:opacity-0 transition-opacity pointer-events-none" />

          {/* Official WhatsApp SVG Icon */}
          <svg
            className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.54 15.13 4.12 13.54 4.12 11.91C4.12 7.37 7.82 3.67 12.04 3.67ZM8.83 7.35C8.65 7.35 8.35 7.42 8.11 7.68C7.86 7.95 7.18 8.59 7.18 9.88C7.18 11.17 8.12 12.41 8.25 12.59C8.38 12.76 10.1 15.41 12.72 16.54C13.34 16.81 13.83 16.97 14.21 17.09C14.84 17.29 15.4 17.26 15.86 17.19C16.37 17.11 17.43 16.55 17.65 15.92C17.87 15.3 17.87 14.77 17.81 14.66C17.74 14.55 17.56 14.49 17.29 14.35C17.02 14.22 15.7 13.57 15.45 13.48C15.21 13.39 15.03 13.35 14.85 13.62C14.67 13.88 14.16 14.49 14.01 14.66C13.85 14.84 13.7 14.86 13.43 14.73C13.16 14.59 12.29 14.31 11.26 13.39C10.45 12.67 9.91 11.78 9.76 11.51C9.6 11.25 9.74 11.1 9.88 10.97C10 10.85 10.16 10.64 10.3 10.48C10.43 10.31 10.48 10.19 10.57 10.01C10.66 9.84 10.61 9.68 10.55 9.55C10.48 9.42 9.99 8.22 9.78 7.73C9.58 7.25 9.38 7.32 9.22 7.31C9.08 7.31 8.91 7.35 8.83 7.35Z" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
