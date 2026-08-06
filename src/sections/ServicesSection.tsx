"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Search,
  Globe,
  Share2,
  HelpCircle,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";

const homeServices = [
  {
    title: "Website Design & Development",
    desc: "Website design services refer to creating and designing a website, including tasks such as layout, color palette, and typography.",
    icon: Code,
    color: "from-[#2563FF] to-[#00BFFF]",
    tags: ["Custom Layouts", "Responsive Design", "WordPress & CMS", "E-commerce Platforms"],
    showcase: [
      "/showcase/web_1.png",
      "/showcase/web_2.png",
      "/showcase/web_3.png",
    ],
    slug: "/services/web-development",
  },
  {
    title: "Android & iOS App Development",
    desc: "Modern Technology offer the various types of application development services Android & iOS including custom API integrations.",
    icon: Smartphone,
    color: "from-[#2563FF] to-[#00BFFF]",
    tags: ["Android & iOS Apps", "Custom API Integrations", "Cross-Platform", "Mobile UX/UI"],
    showcase: [
      "/showcase/app_1.png",
      "/showcase/app_2.png",
      "/showcase/app_3.png",
    ],
    slug: "/services/mobile-app-development",
  },
  {
    title: "Search Engine Optimization",
    desc: "Search engine optimization (SEO) is the process of improving the quality and volume of web traffic to a website or web page.",
    icon: Search,
    color: "from-[#2563FF] to-[#00BFFF]",
    tags: ["On-Page/Off-Page", "Keyword Optimization", "Traffic Analysis", "SEO Audit"],
    showcase: [
      "/showcase/seo_1.png",
      "/showcase/seo_2.png",
      "/showcase/seo_3.png",
    ],
    slug: "/services/digital-marketing",
  },
  {
    title: "Web Hosting Service",
    desc: "Web hosting service is a type of Internet hosting service that hosts websites for clients, providing secure data storages.",
    icon: Globe,
    color: "from-[#2563FF] to-[#00BFFF]",
    tags: ["Secure Cloud Server", "99.9% Uptime", "SSD Data Storage", "24/7 Active Monitoring"],
    showcase: [
      "/showcase/hosting_1.png",
      "/showcase/hosting_2.png",
      "/showcase/hosting_3.png",
    ],
    slug: "/services/cloud-devops",
  },
  {
    title: "Social Media Marketing",
    desc: "Social media marketing is the use of social media platforms and websites to promote a product or service, boosting brand values.",
    icon: Share2,
    color: "from-[#2563FF] to-[#00BFFF]",
    tags: ["Brand Campaigns", "Lead Generation", "Engagement Growth", "Social Media Strategy"],
    showcase: [
      "/showcase/social_1.png",
      "/showcase/social_media_middle.png",
      "/video-editing-mockup.png",
    ],
    slug: "/services/digital-marketing",
  },
  {
    title: "IT Consultations",
    desc: "IT consulting services help clients plan, design, and implement their information technology systems to align with goals.",
    icon: HelpCircle,
    color: "from-[#2563FF] to-[#00BFFF]",
    tags: ["Infrastructure Audit", "Technology Roadmaps", "System Architecture", "Solutions Blueprint"],
    showcase: [
      "/hero-software-dev.png",
      "/solutions_engineering.png",
      "/about_company.png",
    ],
    slug: "/services/software-development",
  },
  {
    title: "Cyber Security Solutions",
    desc: "Cybersecurity solutions help clients protect their systems, networks, programs, and data from cyber attacks and threats.",
    icon: ShieldAlert,
    color: "from-[#2563FF] to-[#00BFFF]",
    tags: ["Data Encryption", "Threat Prevention", "Firewall Setup", "Vulnerability Assessment"],
    showcase: [
      "/portfolio_apex_crypto.png",
      "/portfolio_core_erp.png",
      "/hero-api.png",
    ],
    slug: "/services/cloud-devops",
  },
];

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (idx: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIdx(idx);
    }, 350);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredIdx(null);
  };

  const handleCardClick = (e: React.MouseEvent, idx: number) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#EAF4FF] via-[#F0F7FF] to-[#F8FBFF] py-10 md:py-16 relative overflow-hidden border-t border-[#D6E9FF] font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-6">
          {/* Badge */}
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-[#2563FF]/5 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#2563FF] font-display shadow-xs">
            OUR SERVICES
          </div>
          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight leading-[1.1] font-display"
          >
            <span className="text-[#0F172A]">End-to-End Digital Solutions</span> <br />
            <span className="font-black inline-block" style={{ color: "#1D4ED8", WebkitTextFillColor: "#1D4ED8" }}>
              Built Around Your Business
            </span>
          </h2>
        </div>

        {/* Services Rows Container */}
        <div className="flex flex-col gap-3.5 w-full">
          {homeServices.map((service, idx) => {
            const isHovered = hoveredIdx === idx;
            const Icon = service.icon;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => handleCardClick(e, idx)}
                className={`group relative w-full border rounded-[1.25rem] p-4 sm:p-5 overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-xs select-none ${isHovered
                    ? `bg-gradient-to-r ${service.color} border-transparent shadow-[0_12px_30px_rgba(37,99,255,0.15)] scale-[1.005]`
                    : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                layout="position"
              >
                {/* Horizontal row contents */}
                <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
                  {/* Left Column: Icon + Title & CTA Link */}
                  <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-3 rounded-2xl border transition-all duration-300 shadow-sm shrink-0 ${isHovered
                            ? "bg-white/15 border-white/10 text-white"
                            : "bg-[#2563FF]/10 border-[#2563FF]/20 text-[#2563FF]"
                          }`}
                      >
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <h3
                        className={`font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-tight tracking-tight transition-colors duration-300 ${isHovered ? "text-white" : "text-[#0F172A]"
                          }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <Link
                      href={service.slug}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 group/link ${isHovered ? "text-white" : "text-[#2563FF]"
                        }`}
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 ${isHovered ? "text-white" : "text-[#2563FF]"
                          }`}
                      />
                    </Link>
                  </div>

                  {/* Middle Column: Service Description */}
                  <div className="col-span-12 md:col-span-4 lg:col-span-5">
                    <p
                      className={`text-sm sm:text-base leading-relaxed font-medium transition-colors duration-300 ${isHovered ? "text-slate-100" : "text-slate-500"
                        }`}
                    >
                      {service.desc}
                    </p>
                  </div>

                  {/* Right Column: Tags Stack */}
                  <div className="col-span-12 md:col-span-3 lg:col-span-3 flex flex-wrap md:flex-col md:items-end gap-2 justify-start md:justify-center">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] sm:text-xs font-semibold py-1.5 px-3.5 rounded-full border transition-all duration-300 tracking-wide uppercase ${isHovered
                            ? "bg-white/10 border-white/15 text-white/90"
                            : "bg-[#F7FAFF] border-slate-200 text-slate-650"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Image Showcase Container (Refokus hover reveal) */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                    marginTop: isHovered ? 28 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                    mass: 0.8,
                  }}
                  className="overflow-hidden w-full relative"
                >
                  {/* Thin horizontal line separator inside card when active */}
                  <div
                    className={`w-full h-[1px] transition-colors duration-300 mb-6 ${isHovered ? "bg-white/15" : "bg-transparent"
                      }`}
                  />

                  {/* Showcase Images Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-1">
                    {service.showcase.map((imgUrl, imgIdx) => (
                      <motion.div
                        key={imgIdx}
                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                        animate={
                          isHovered
                            ? { y: 0, opacity: 1, scale: 1 }
                            : { y: 50, opacity: 0, scale: 0.95 }
                        }
                        transition={{
                          type: "spring",
                          stiffness: 85,
                          damping: 17,
                          delay: isHovered ? imgIdx * 0.06 : 0,
                        }}
                        className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-white/5 bg-slate-900/10"
                      >
                        <Image
                          src={imgUrl}
                          alt={`${service.title} Showcase ${imgIdx + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
