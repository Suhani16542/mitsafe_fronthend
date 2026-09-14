import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap Automatic Route Discovery Test",
  description: "This is a temporary page created to test automatic sitemap route discovery.",
};

export default function SitemapTestPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#FAFBFF] dark:bg-[#071426] transition-colors">
      <div className="max-w-2xl bg-white dark:bg-[#0B1A2E] p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-[#008FED]/10 text-[#008FED] text-xs font-mono font-bold uppercase tracking-wider">
          Temporary Test Route
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
          Sitemap Automatic Route Discovery Test
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          This is a temporary page created to test automatic sitemap route discovery.
        </p>
      </div>
    </div>
  );
}
