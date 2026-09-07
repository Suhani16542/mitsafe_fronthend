import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Home, Compass, Layers, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Mitsafe",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center pt-36 pb-20 sm:pt-44 sm:pb-28 px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#305EFF/4_1px,transparent_1px),linear-gradient(to_bottom,#305EFF/4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#305EFF]/10 border border-[#305EFF]/20 text-[#305EFF] text-xs font-bold font-mono uppercase tracking-widest mb-6">
          <span>Error 404 • Resource Not Found</span>
        </div>

        {/* 404 Display Number */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black font-display tracking-tight text-slate-900 leading-none">
          4<span className="text-[#305EFF]">0</span>4
        </h1>

        {/* Main Heading */}
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
          Page Not Found
        </h2>

        {/* Descriptive Helper Text */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg font-medium">
          The link you followed may be broken, or the page may have been moved or removed during our platform upgrade.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#305EFF] hover:bg-[#2550E0] text-white text-xs sm:text-sm font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto cursor-pointer"
          >
            <Home className="w-4 h-4 text-white" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/solutions"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-300 bg-white hover:border-[#305EFF] text-slate-800 hover:text-[#305EFF] text-xs sm:text-sm font-bold shadow-2xs hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Solutions</span>
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-300 bg-white hover:border-[#305EFF] text-slate-800 hover:text-[#305EFF] text-xs sm:text-sm font-bold shadow-2xs hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>View Case Studies</span>
          </Link>
        </div>

        {/* Support Note */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 w-full flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <Mail className="w-3.5 h-3.5 text-slate-400" />
          <span>Need assistance? Reach our engineering desk at</span>
          <a
            href="mailto:contact@mitsafe.com"
            className="text-[#305EFF] font-bold hover:underline"
          >
            contact@mitsafe.com
          </a>
        </div>
      </div>
    </div>
  );
}
