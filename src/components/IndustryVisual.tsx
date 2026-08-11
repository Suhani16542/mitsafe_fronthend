"use client";

import React from "react";
import Image from "next/image";
import {
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
  Activity,
  ShieldCheck,
  Zap,
  Gauge,
  Lock,
  Server,
  BarChart3,
  CheckCircle2,
  RefreshCw,
  Search,
  Key,
  FileCheck,
  Database,
  Bell,
  CreditCard,
  UserCheck,
  Calendar,
  Folder,
  BookOpen,
  Check
} from "lucide-react";

interface IndustryVisualProps {
  slug: string;
  type: "hero" | "overview";
  imagePath?: string;
  title: string;
}

export default function IndustryVisual({ slug, type, imagePath, title }: IndustryVisualProps) {
  // If a generated image path exists for healthcare or fintech, render the image with a sleek frame
  if (imagePath && imagePath.startsWith("/images/industry/")) {
    return (
      <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-md relative overflow-hidden group w-full">
        <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority={type === "hero"}
          />
        </div>
        <div className="p-3.5 flex items-center justify-between text-left border-t border-slate-100 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#305EFF] animate-pulse" />
            <span className="text-xs font-bold text-[#0F172A]">{title}</span>
          </div>
          <span className="text-[11px] font-bold text-[#305EFF] bg-[#305EFF]/10 px-2.5 py-0.5 rounded-full font-mono">
            Mitsafe Certified
          </span>
        </div>
      </div>
    );
  }

  // Otherwise, render custom, industry-specific SaaS UI dashboard visuals in Mitsafe Blue & White
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md relative overflow-hidden w-full text-left font-sans group">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#305EFF]" />
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <span className="text-xs font-bold text-[#0F172A] ml-2 font-mono uppercase tracking-wider">
            {title} {type === "hero" ? "Platform UI" : "Telemetry System"}
          </span>
        </div>
        <span className="text-[10.5px] font-bold text-[#305EFF] bg-[#305EFF]/10 px-2.5 py-0.5 rounded-full font-mono">
          Live System
        </span>
      </div>

      {/* Render industry-specific visual content */}
      {slug === "healthcare-lifesciences" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HeartPulse className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">HIPAA Telehealth Gateway</span>
                <span className="text-[11px] text-slate-500">AES-256 Encrypted WebRTC Stream</span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
              99.99% Stream Uptime
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">HL7 FHIR EMR Query</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">Sub-150ms</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Clinical AI Accuracy</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">99.4%</span>
            </div>
          </div>
        </div>
      )}

      {slug === "finance-banking" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Landmark className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">PCI-DSS Level 1 Token Vault</span>
                <span className="text-[11px] text-slate-500">Real-Time Ledger Execution</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#305EFF] bg-[#305EFF]/10 px-2.5 py-0.5 rounded-full font-mono">
              Sub-30ms Lock
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">AI Fraud Block Speed</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">&lt; 15ms</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Peak Throughput</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">10,000 TPS</span>
            </div>
          </div>
        </div>
      )}

      {slug === "education-elearning" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">Multiplayer Virtual Canvas</span>
                <span className="text-[11px] text-slate-500">60fps Live Sync &amp; AI Quiz Grader</span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
              100k Concurrent
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Canvas Latency</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">&lt; 50ms</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">LTI 1.3 Compliance</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">Certified</span>
            </div>
          </div>
        </div>
      )}

      {slug === "e-commerce-retail" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">Headless Next.js 16 Storefront</span>
                <span className="text-[11px] text-slate-500">Sub-300ms Vector Search &amp; Omnichannel Stock</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#305EFF] bg-[#305EFF]/10 px-2.5 py-0.5 rounded-full font-mono">
              99+ Speed Score
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Cart Conversion Lift</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">+ 35%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Vector Search Speed</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">Sub-200ms</span>
            </div>
          </div>
        </div>
      )}

      {slug === "real-estate" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">WebGL 60fps 3D Tour Engine</span>
                <span className="text-[11px] text-slate-500">RESO MLS Data Sync &amp; Tenant Portal</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#305EFF] bg-[#305EFF]/10 px-2.5 py-0.5 rounded-full font-mono">
              60fps Mobile 3D
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">MLS Feed Sync</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">Real-Time API</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">e-Lease Execution</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">&lt; 15 Mins</span>
            </div>
          </div>
        </div>
      )}

      {slug === "travel-hospitality" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">Atomic Room Lock Booking Engine</span>
                <span className="text-[11px] text-slate-500">Contactless Check-in &amp; GDS Channel Sync</span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
              Zero Overbooking
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Direct Web Bookings</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">+ 42%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Check-In Queue Time</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">- 75%</span>
            </div>
          </div>
        </div>
      )}

      {slug === "logistics-supply-chain" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">Real-Time Fleet GPS Vector Telemetry</span>
                <span className="text-[11px] text-slate-500">AI Dynamic Route Optimizer &amp; Cold Chain</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#305EFF] bg-[#305EFF]/10 px-2.5 py-0.5 rounded-full font-mono">
              Sub-500ms GPS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Fuel Cost Reduction</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">22% Saved</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Tracking Capacity</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">50k Fleet</span>
            </div>
          </div>
        </div>
      )}

      {slug === "manufacturing" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Factory className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">Smart Factory IoT &amp; OEE Control Room</span>
                <span className="text-[11px] text-slate-500">Predictive Machinery Maintenance AI</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#305EFF] bg-[#305EFF]/10 px-2.5 py-0.5 rounded-full font-mono">
              Sub-10ms Sampling
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Machinery Breakdown</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">85% Prevented</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">PLC Protocols</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">Modbus / MQTT</span>
            </div>
          </div>
        </div>
      )}

      {slug === "media-entertainment" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Tv className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">HLS / WebRTC Video Streaming Pipeline</span>
                <span className="text-[11px] text-slate-500">Widevine &amp; FairPlay DRM Protection</span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
              Zero Buffering
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Live Stream Latency</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">&lt; 800ms</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">DAM Asset Search</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">70% Faster</span>
            </div>
          </div>
        </div>
      )}

      {slug === "saas-technology" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Cloud className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">Multi-Tenant B2B Enterprise SaaS</span>
                <span className="text-[11px] text-slate-500">Automated Stripe Billing &amp; Okta SAML SSO</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#305EFF] bg-[#305EFF]/10 px-2.5 py-0.5 rounded-full font-mono">
              Sub-50ms API
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Database Security</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">Row-Level RLS</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Enterprise SSO</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">SAML 2.0 / Okta</span>
            </div>
          </div>
        </div>
      )}

      {slug === "automotive" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Car className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">AWS IoT Connected Vehicle Gateway</span>
                <span className="text-[11px] text-slate-500">CAN Bus Telemetry &amp; Remote Commands</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#305EFF] bg-[#305EFF]/10 px-2.5 py-0.5 rounded-full font-mono">
              Sub-200ms Remote
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Telemetry Sampling</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">100 Param/Sec</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Dealer Service Booking</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">+ 35% Lift</span>
            </div>
          </div>
        </div>
      )}

      {slug === "professional-services" && (
        <div className="flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-[#305EFF]" />
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">Custom Enterprise CRM &amp; Client Vault</span>
                <span className="text-[11px] text-slate-500">Automated Time Tracking &amp; e-Signature</span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-mono">
              30% Less Admin
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">Billable Hour Recovery</span>
              <span className="text-sm font-bold text-[#0F172A] block mt-0.5 font-mono">+ 15% Recovered</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
              <span className="text-[10px] text-slate-400 font-mono uppercase font-bold">e-Sign Speed</span>
              <span className="text-sm font-bold text-[#305EFF] block mt-0.5 font-mono">80% Faster</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>Mitsafe Infrastructure</span>
        <span className="text-[#305EFF] font-bold">Enterprise Ready</span>
      </div>
    </div>
  );
}
