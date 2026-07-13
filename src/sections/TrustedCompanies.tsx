"use client";

import React from "react";
import { Server, Cloud, Layers, Shield, Sparkles, CpuIcon, Terminal, Cpu } from "lucide-react";

const companies = [
  { name: "Amazon AWS", icon: Server },
  { name: "Google Cloud", icon: Cloud },
  { name: "Next.js Engine", icon: Layers },
  { name: "Stripe API", icon: Shield },
  { name: "Vercel CDNs", icon: Sparkles },
  { name: "Kubernetes K8s", icon: CpuIcon },
  { name: "TypeScript Core", icon: Terminal },
  { name: "Docker Containers", icon: Cpu },
];

export default function TrustedCompanies() {
  return (
    <section className="bg-[#F3F0FA] py-12 border-b border-[#E5E2F0] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6">
        <p className="text-center text-xs font-semibold tracking-widest text-[#7C3AED] uppercase">
          Empowering Next-Gen Technical Operations
        </p>
      </div>

      <div className="relative w-full flex items-center justify-center">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F3F0FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F3F0FA] to-transparent z-10 pointer-events-none" />

        <div className="ticker-track">
          {companies.map((company, index) => {
            const IconComp = company.icon;
            return (
              <div
                key={`c1-${index}`}
                className="flex items-center gap-2.5 mx-12 text-slate-600 hover:text-slate-900 transition-colors duration-300"
              >
                <IconComp className="w-5 h-5 text-[#7C3AED]" />
                <span className="font-display font-bold text-sm md:text-base tracking-wider uppercase">
                  {company.name}
                </span>
              </div>
            );
          })}

          {companies.map((company, index) => {
            const IconComp = company.icon;
            return (
              <div
                key={`c2-${index}`}
                className="flex items-center gap-2.5 mx-12 text-slate-600 hover:text-slate-900 transition-colors duration-300"
              >
                <IconComp className="w-5 h-5 text-[#7C3AED]" />
                <span className="font-display font-bold text-sm md:text-base tracking-wider uppercase">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
