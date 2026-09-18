"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Cpu,
  Globe,
  Layers,
  Database,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Server,
  Check,
  Star,
} from "lucide-react";

// Hero Slider Data with changing images and 3D text animations
const heroSlides = [
  {
    id: 0,
    eyebrow: "Digital Solutions For USA Businesses",
    flag: "🇺🇸",
    title: "Powering USA Businesses With Smart Digital Solutions",
    desc: "Mitsafe helps businesses across the USA build high-performing websites, mobile applications, custom software, e-commerce platforms, and scalable digital solutions designed for long-term growth.",
    primaryBtnText: "Get a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our Services",
    secondaryBtnHref: "#services",
    image: "/images/usa_hero_bg.jpg",
    badges: ["100% Code Ownership", "EST / CST / PST Overlap", "NDA & IP Protected"],
  },
  {
    id: 1,
    eyebrow: "Enterprise Cloud & AI Solutions",
    flag: "🇺🇸",
    title: "Engineering Scalable Custom Software & Cloud Infrastructure",
    desc: "Accelerate US enterprise growth with modern microservices, automated CI/CD DevOps pipelines, generative AI integrations, and zero-downtime database architectures with dedicated US time-zone engineering support.",
    primaryBtnText: "Get a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our Services",
    secondaryBtnHref: "#services",
    image: "/images/usa_mission_bg.jpg",
    badges: ["99.9% Uptime Guarantee", "AWS / GCP / Azure Ready", "SOC2 & ISO Ready"],
  },
  {
    id: 2,
    eyebrow: "Full-Cycle Product Engineering",
    flag: "🇺🇸",
    title: "High-Performance Mobile Apps & Web Platforms Built For Scale",
    desc: "From native iOS and Android applications to custom headless e-commerce and SaaS platforms, we turn ambitious US startup ideas into resilient, revenue-generating reality.",
    primaryBtnText: "Get a Free Consultation",
    primaryBtnHref: "#quote",
    secondaryBtnText: "Explore Our Services",
    secondaryBtnHref: "#services",
    image: "/images/usa_about_workspace.jpg",
    badges: ["iOS & Android Native", "Next.js & React 19", "Agile Sprints & Delivery"],
  },
];

// 6 Core Services matching reference 3x2 grid with Mitsafe branding
const usaServices = [
  {
    title: "Website Designing & Dev",
    desc: "Custom high-converting websites and modern web platforms built for speed, security, and enterprise growth.",
    icon: Globe,
    slug: "/services/web-development",
    image: "/showcase/web_1.webp",
    bullets: [
      "Custom UI/UX & Responsive Design",
      "Next.js, React & Modern Stacks",
      "Enterprise Web Portals & SaaS",
      "Ultra-Fast Load Speeds & SEO Ready",
    ],
  },
  {
    title: "Mobile App Development",
    desc: "Native iOS & Android and cross-platform apps built for fluid user retention and seamless app store releases.",
    icon: Smartphone,
    slug: "/services/mobile-app-development",
    image: "/showcase/app_1.webp",
    bullets: [
      "iOS & Android Native Development",
      "Flutter & React Native Cross-Platform",
      "Secure Cloud Backends & Realtime APIs",
      "App Store & Play Store Publishing",
    ],
  },
  {
    title: "E-Commerce Web Solutions",
    desc: "High-performance digital stores, multi-vendor marketplaces, and headless commerce engines tailored for conversion.",
    icon: Layers,
    slug: "/services/ecommerce-solutions",
    image: "/showcase/web_3.webp",
    bullets: [
      "Custom Headless Commerce Architecture",
      "Stripe, Apple Pay & PayPal Integration",
      "Real-time Inventory & Order Sync",
      "Optimized Checkout Funnels & UX",
    ],
  },
  {
    title: "Custom Software & Cloud",
    desc: "Tailored enterprise software, ERP/CRM integrations, and resilient cloud architectures with 99.9% uptime.",
    icon: Database,
    slug: "/services/software-development",
    image: "/showcase/web_2.webp",
    bullets: [
      "Bespoke Enterprise Software Systems",
      "Microservices & Serverless APIs",
      "AWS, GCP & Azure Cloud Migration",
      "Zero-Downtime Database Architecture",
    ],
  },
  {
    title: "AI Agents & Automation",
    desc: "Autonomous AI assistants, intelligent document processing, and generative AI models to scale business workflows.",
    icon: Cpu,
    slug: "/services/ai-automation",
    image: "/showcase/seo_1.webp",
    bullets: [
      "Custom LLM & ChatGPT Integrations",
      "Intelligent Workflow Automation",
      "Predictive Data Analytics & Dashboards",
      "Autonomous 24/7 AI Customer Bots",
    ],
  },
  {
    title: "Cloud Hosting & DevOps",
    desc: "Automated CI/CD pipelines, Docker/Kubernetes containerization, and proactive 24/7 cloud infrastructure security.",
    icon: Server,
    slug: "/services/cloud-devops",
    image: "/showcase/hosting_1.webp",
    bullets: [
      "Continuous CI/CD Automated Pipelines",
      "Kubernetes & Docker Orchestration",
      "Proactive 24/7 Server Health Monitoring",
      "Advanced Web Application Firewalls (WAF)",
    ],
  },
];

// Interactive Accordion for "Delivering the Best Customer Experience"
const experienceFaqs = [
  {
    id: "item-1",
    title: "End-to-End Product Architecture & Strategy",
    content:
      "From initial discovery workshops to high-fidelity Figma prototypes and scalable system architecture, we map every technical detail before writing a single line of code, ensuring zero wasted budget.",
  },
  {
    id: "item-2",
    title: "Real-Time Collaboration with US Time-Zone Overlap",
    content:
      "Our engineering leads maintain dedicated overlap with Eastern (EST), Central (CST), and Pacific (PST) business hours for live sprint standups, weekly demos, and immediate Slack/Teams responsiveness.",
  },
  {
    id: "item-3",
    title: "Rigorous QA, Automated Testing & Security Compliance",
    content:
      "Every release undergoes comprehensive end-to-end testing, automated regression pipelines, OWASP security audits, and strict NDA compliance to guarantee enterprise-grade software stability.",
  },
  {
    id: "item-4",
    title: "Transparent Milestone-Based Pricing & No Hidden Costs",
    content:
      "We operate on crystal-clear sprint deliverables with predefined milestones and transparent hourly or fixed-scope models. You retain full budget control and transparent visibility at all times.",
  },
  {
    id: "item-5",
    title: "Post-Launch Maintenance & Dedicated SLA Support",
    content:
      "Our commitment extends far beyond deployment. We provide ongoing 24/7 technical monitoring, security patch management, framework updates, and proactive SLA-backed support.",
  },
];

// Client Testimonials matching reference Google Review cards
const clientReviews = [
  {
    name: "Marcus Vance",
    role: "CTO, FinTech Solutions",
    location: "New York, USA",
    rating: 5,
    review:
      "Mitsafe engineered our complex fintech web application with zero defects. Their team overlapped seamlessly with our EST hours, delivering every sprint on schedule. Outstanding engineering partner!",
    avatar: "MV",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder & CEO, HealthBridge",
    location: "Austin, Texas",
    rating: 5,
    review:
      "The custom mobile app Mitsafe developed helped us scale from 1k to 100k active users effortlessly. Their code architecture is clean, highly scalable, and completely documented.",
    avatar: "SJ",
  },
  {
    name: "David Reynolds",
    role: "VP of Engineering, CloudScale",
    location: "San Francisco, CA",
    rating: 5,
    review:
      "We migrated our legacy monolithic systems to microservices and Kubernetes with Mitsafe. 99.99% uptime achieved and cloud costs cut by 35%. Highly recommended for US enterprises.",
    avatar: "DR",
  },
  {
    name: "Elena Rostova",
    role: "Product Director, RetailDirect",
    location: "Chicago, Illinois",
    rating: 5,
    review:
      "From headless Shopify development to AI-driven recommendation bots, Mitsafe exceeded every expectation. Their commitment to 100% IP ownership and transparent pricing made all the difference.",
    avatar: "ER",
  },
];

export default function UsaLandingClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<string>("item-1");

  const totalSlides = heroSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Continuous auto-rotate every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans selection:bg-[#305EFF] selection:text-white">
      
      {/* =========================================================================
          1. HERO SECTION WITH 3D MOTION CAROUSEL & AUTO + MANUAL ROTATION
          ========================================================================= */}
      <section
        className="relative min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex items-center justify-start overflow-hidden bg-[#060D1E]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Looping Background Images with smooth fast Crossfade & Subtle Zoom */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.95, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                quality={95}
                className="object-cover object-center sm:object-right"
              />
            </motion.div>
          </AnimatePresence>

          {/* Left-focused gradient overlay to maintain 100% white text readability while keeping the image clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1E]/95 via-[#060D1E]/75 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/75 via-transparent to-[#060D1E]/35 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-[circle_at_top_left] from-[#305EFF]/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Container (Left Aligned with Fast 3D Slide-Up Motion from Bottom) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 w-full">
          <div className="max-w-2xl text-left" style={{ perspective: "1000px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="space-y-6"
              >
                {/* 3D Motion Eyebrow Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 25, rotateX: 25 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm"
                >
                  <span className="text-base leading-none">{slide.flag}</span>
                  <span className="usa-light-blue-text text-xs sm:text-[13px] font-extrabold tracking-wider uppercase">
                    {slide.eyebrow}
                  </span>
                </motion.div>

                {/* 3D Motion Main Heading — Fast word-by-word cascading roll-up */}
                <h1
                  className="usa-white-heading text-2xl sm:text-3xl lg:text-[2.4rem] font-black tracking-tight leading-[1.22] max-w-xl"
                  style={{ color: "#FFFFFF", perspective: "1000px" }}
                >
                  {slide.title.split(" ").map((word, index) => (
                    <span key={index} className="inline-block overflow-hidden pb-1 mr-2 sm:mr-2.5 last:mr-0">
                      <motion.span
                        className="inline-block"
                        initial={{ opacity: 0, y: 44, rotateX: -75, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                        transition={{
                          duration: 0.42,
                          delay: index * 0.028 + 0.03,
                          ease: [0.215, 0.61, 0.355, 1],
                        }}
                        style={{ transformOrigin: "bottom center", display: "inline-block" }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h1>

                {/* 3D Motion Supporting Paragraph — Fast word-by-word cascading reveal */}
                <p
                  className="usa-white-text text-xs sm:text-sm lg:text-[15px] font-normal leading-relaxed max-w-lg"
                  style={{ color: "#E2E8F0", perspective: "800px" }}
                >
                  {slide.desc.split(" ").map((word, index) => (
                    <span key={index} className="inline-block overflow-hidden mr-1 sm:mr-1.5 last:mr-0">
                      <motion.span
                        className="inline-block"
                        initial={{ opacity: 0, y: 22, rotateX: -55 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{
                          duration: 0.32,
                          delay: index * 0.01 + 0.14,
                          ease: [0.215, 0.61, 0.355, 1],
                        }}
                        style={{ transformOrigin: "bottom center", display: "inline-block" }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </p>

                {/* CTA Buttons with upward spring animation */}
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <Link
                    href={slide.primaryBtnHref}
                    data-modal="quote"
                    className="btn-primary-blue inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#305EFF] hover:bg-[#204ad8] font-extrabold text-sm sm:text-base shadow-xl shadow-[#305EFF]/35 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                    style={{ color: "#FFFFFF", backgroundColor: "#305EFF" }}
                  >
                    <span className="usa-white-heading">{slide.primaryBtnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={slide.secondaryBtnHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/25 backdrop-blur-sm transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <span className="usa-white-heading">{slide.secondaryBtnText}</span>
                  </a>
                </motion.div>

                {/* Quick Proof Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.26 }}
                  className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold"
                >
                  {slide.badges.map((badge, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
                      <span className="usa-white-text">{badge}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Left/Right Arrow Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#305EFF] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#305EFF] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Progress Indicators / Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? "w-8 bg-[#305EFF] shadow-[0_0_10px_#305EFF]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>


      {/* =========================================================================
          2. ABOUT MITSAFE USA SECTION (Classic Framed Visual Matching Reference)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Framed Image with Offset Border Effect matching Screenshot */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[480px]">
                {/* Offset Decorative Blue Frame */}
                <div className="absolute -top-5 -left-5 w-[90%] h-[92%] rounded-3xl border-4 border-[#305EFF] -z-0 hidden sm:block" />
                
                {/* Main Card Image with offset positioning */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 translate-x-2 translate-y-2">
                  <Image
                    src="/images/usa_about_workspace.jpg"
                    alt="Mitsafe Developers Engineering Scalable Digital Products"
                    width={640}
                    height={480}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating Stat Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#305EFF] text-white flex items-center justify-center font-black text-lg">
                      10+
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 uppercase tracking-tight">Years Of</div>
                      <div className="text-[11px] font-bold text-slate-600">Engineering Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: About Content & Value Checklist */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
                <span>Who We Are</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                MITSAFE USA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#305EFF] to-[#0052cc]">
                  Engineering Scalable Digital Products
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Mitsafe is an agile, full-cycle software and digital product engineering agency helping US startups, growth-stage brands, and enterprises modernize their digital presence. From custom web portals and responsive mobile applications to enterprise cloud systems, we engineer software that drives real revenue and operational efficiency.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our distributed engineering model gives you the best of both worlds: dedicated US-time-zone communication, milestone-driven agile sprints, zero overhead, and 100% intellectual property ownership from day one.
              </p>

              {/* Inline Stats & Checklist matching reference screenshot */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2 pb-2">
                <div className="flex items-center gap-3 pr-6 sm:border-r border-slate-200 shrink-0">
                  <div className="text-4xl sm:text-5xl font-black text-[#305EFF] tracking-tight font-sans">
                    12+
                  </div>
                  <div className="text-xs font-bold text-slate-700 leading-tight">
                    Years of <br />Experience
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                  {[
                    "100% Code Ownership",
                    "EST / CST / PST Overlap",
                    "Senior Full-Stack Engineers",
                    "Milestone Agile Sprints",
                    "Strict NDAs & Security",
                    "Dedicated 24/7 Support",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#305EFF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Consultation Link */}
              <div className="pt-2">
                <Link
                  href="#quote"
                  data-modal="quote"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0F204A] hover:bg-[#305EFF] text-white font-extrabold text-sm transition-all duration-300 shadow-md hover:scale-105"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. SERVICES SECTION (Matching Screenshot Royal Navy Style with Circular Badges)
          ========================================================================= */}
      <section id="services" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Our Core Services</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              We Provide The Best Services
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium">
              Enterprise-grade digital engineering solutions crafted for US startups and established brands.
            </p>
          </div>

          {/* 6 Rich Royal Navy Service Cards (Matching Screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {usaServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-[#0F204A] hover:bg-[#13285c] text-white rounded-2xl p-7 flex flex-col justify-between border border-blue-900/50 shadow-xl hover:shadow-2xl hover:border-[#305EFF] transition-all duration-300 hover:-translate-y-2"
                >
                  <div>
                    {/* Top Center White Circular Illustration Box (Matching Reference Screenshot) */}
                    <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-[#305EFF] mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-10 h-10 text-[#305EFF]" />
                    </div>

                    {/* Service Title — High Contrast White */}
                    <h3 className="text-lg sm:text-xl font-black text-white text-center tracking-tight mb-3">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-300 text-xs sm:text-[13px] text-center leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Feature Bullet List with Cyan Checkmarks */}
                    <ul className="space-y-2.5 pt-4 border-t border-white/10 text-left">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-200">
                          <Check className="w-3.5 h-3.5 text-[#00D4FF] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-6 mt-4 text-center border-t border-white/10">
                    <Link
                      href={service.slug}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#00D4FF] group-hover:text-white transition-colors"
                    >
                      <span>Explore Service</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          4. WHY CHOOSE US / CUSTOMER EXPERIENCE SECTION
          Multi-Device Mockup + Accordion
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Why US Clients Partner With Us</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              We’re Delivering the Best Customer Experience!
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium">
              A collaborative agile workflow tailored specifically for smooth cross-border execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Side: Multi-Device Responsive Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[460px] p-4 bg-slate-50 border border-slate-200 rounded-3xl shadow-lg">
                <Image
                  src="/pricing-devices-mockup.webp"
                  alt="Multi Device Responsive Software Engineering"
                  width={560}
                  height={420}
                  className="w-full h-auto object-contain drop-shadow-md"
                />
                <div className="mt-4 p-4 rounded-2xl bg-[#071126] text-white text-center">
                  <div className="usa-cyan-text text-base sm:text-lg font-black text-[#00D4FF]">
                    100% Cross-Device & Cloud Ready
                  </div>
                  <div className="usa-white-text text-xs text-slate-300 mt-1">
                    Engineered for iOS, Android, macOS & Web
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Accordion */}
            <div className="lg:col-span-7 space-y-3.5">
              {experienceFaqs.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-blue-50/60 border-[#305EFF] text-slate-900 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-900 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? "" : faq.id)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer"
                    >
                      <span className={isOpen ? "text-[#305EFF] font-black" : "text-slate-900 font-bold"}>
                        {faq.title}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#305EFF]" : "text-slate-400"
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100">
                            {faq.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          5. TECHNOLOGY SHOWCASE 4-COLUMN IMAGE BANNER
          ========================================================================= */}
      <section className="py-12 bg-[#060D1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Web & SaaS Platforms", img: "/showcase/web_1.webp" },
              { title: "Mobile App Ecosystems", img: "/showcase/app_1.webp" },
              { title: "Cloud & Microservices", img: "/showcase/hosting_1.webp" },
              { title: "AI Models & Analytics", img: "/showcase/seo_1.webp" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden border border-white/15 bg-slate-900"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E] via-[#060D1E]/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
                  <div className="usa-white-heading text-xs sm:text-sm font-black text-white tracking-tight leading-snug">
                    {item.title}
                  </div>
                  <div className="usa-cyan-text text-[10px] sm:text-xs font-bold text-[#00D4FF] mt-0.5">
                    Mitsafe Production Stack
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          6. WHAT OUR USA CLIENTS SAY (Google Review Cards Matching Screenshot)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#305EFF] text-xs font-extrabold uppercase tracking-wider">
              <span>Testimonials</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Our USA Clients Say
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium">
              Verified 5-star reviews from enterprise CTOs, startup founders, and product directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientReviews.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-[#305EFF]/50 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Review Header with Avatar & Star Rating */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0F204A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 leading-tight">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Quote */}
                  <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed line-clamp-4">
                    "{item.review}"
                  </p>
                </div>

                {/* Google Verified Review Badge */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span className="text-slate-900 font-extrabold">{item.role}</span>
                  <span className="text-[#305EFF]">Google 5.0 ★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          7. TRUST & IMPACT STATS COUNTERS (Divided Column Layout Matching Screenshot)
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 text-center">
            {[
              { value: "100+", label: "US Projects Delivered" },
              { value: "99.8%", label: "Client Satisfaction Rate" },
              { value: "24/7", label: "US Time-Zone SLA Support" },
              { value: "100%", label: "On-Time Sprint Delivery" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 sm:p-8">
                <div className="text-3xl sm:text-5xl font-black text-[#0F204A] font-sans tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-600 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          8. WIDE MID-PAGE MISSION BANNER (Matching Reference Screenshot)
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#060D1E]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/usa_mission_bg.jpg"
            alt="USA Business Skyline"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-[#071126]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="usa-white-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Our Mission is to Grow Your Business & More
          </h2>

          <p className="usa-white-text text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed text-slate-200">
            From early-stage MVPs to high-scale enterprise platforms, we architect solutions that scale with your ambitions.
          </p>

          <div className="pt-4">
            <Link
              href="#quote"
              data-modal="quote"
              className="btn-primary-blue inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#305EFF] hover:bg-[#204ad8] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#305EFF]/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              style={{ color: "#FFFFFF", backgroundColor: "#305EFF" }}
            >
              <span className="usa-white-heading">Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
          9. CLIENT & TECH STACK TRUST SHOWCASE
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">
            Enterprise Technologies We Engineer In
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            {[
              "Next.js 15",
              "React 19",
              "Node.js",
              "TypeScript",
              "Python & AI",
              "Flutter",
              "React Native",
              "AWS & GCP",
              "Docker / K8s",
              "PostgreSQL",
              "GraphQL",
              "Stripe & Headless",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold shadow-xs hover:border-[#305EFF] hover:text-[#305EFF] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          10. FINAL BOTTOM CTA RIBBON (Matching Screenshot Style)
          ========================================================================= */}
      <section className="py-12 bg-[#0F204A] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="usa-white-heading text-lg sm:text-2xl font-black text-white tracking-tight">
                Call Us Today For Your Free Consultation To Grow Your Business!
              </h3>
              <p className="usa-white-text text-slate-300 text-xs sm:text-sm mt-1">
                Get a custom technical architecture plan and estimation within 24 hours.
              </p>
            </div>

            <Link
              href="#quote"
              data-modal="quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-950 hover:bg-[#305EFF] hover:text-white font-black text-sm sm:text-base shrink-0 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Contact Us Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
