"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { useTheme } from "@/components/ThemeProvider";
import { servicesData } from "@/data/services";

const techIconsByService: Record<string, { name: string; icon: string }[]> = {
    "web-development": [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "TS" },
        { name: "Node.js", icon: "🟢" },
        { name: "Tailwind", icon: "🎨" },
        { name: "PostgreSQL", icon: "🐘" },
    ],
    "mobile-app-development": [
        { name: "Flutter", icon: "🐦" },
        { name: "React Native", icon: "⚛️" },
        { name: "Swift", icon: "🍎" },
        { name: "Kotlin", icon: "🅺" },
        { name: "Firebase", icon: "🔥" },
        { name: "Push Notify", icon: "🔔" },
    ],
    "software-development": [
        { name: ".NET", icon: "❖" },
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸" },
        { name: "PostgreSQL", icon: "🐘" },
    ],
    "ai-automation": [
        { name: "Python", icon: "🐍" },
        { name: "OpenAI", icon: "🤖" },
        { name: "LangChain", icon: "🦜" },
        { name: "Pinecone", icon: "🌲" },
        { name: "HuggingFace", icon: "🤗" },
        { name: "Flows", icon: "⚙️" },
    ],
    "ui-ux-design": [
        { name: "Figma", icon: "❖" },
        { name: "Illustrator", icon: "Ai" },
        { name: "Photoshop", icon: "Ps" },
        { name: "After Effects", icon: "Ae" },
        { name: "Miro", icon: "M" },
        { name: "Wireframe", icon: "✏️" },
    ],
    "ecommerce-solutions": [
        { name: "Next.js", icon: "▲" },
        { name: "Shopify API", icon: "🛍️" },
        { name: "Stripe", icon: "💳" },
        { name: "Redis", icon: "🔴" },
        { name: "WooCommerce", icon: "🛒" },
        { name: "PostgreSQL", icon: "🐘" },
    ],
    "crm-erp": [
        { name: "React", icon: "⚛️" },
        { name: "Go", icon: "🐹" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS RDS", icon: "☁️" },
        { name: "Node.js", icon: "🟢" },
    ],
    "api-integration": [
        { name: "GraphQL", icon: "☤" },
        { name: "REST API", icon: "🔌" },
        { name: "OAuth2", icon: "🔑" },
        { name: "Webhooks", icon: "🪝" },
        { name: "Node.js", icon: "🟢" },
        { name: "Redis", icon: "🔴" },
    ],
    "cloud-devops": [
        { name: "AWS", icon: "☁️" },
        { name: "Kubernetes", icon: "☸" },
        { name: "Terraform", icon: "🏗️" },
        { name: "Docker", icon: "🐳" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Prometheus", icon: "📊" },
    ],
    "digital-marketing": [
        { name: "Google Ads", icon: "📈" },
        { name: "Meta Ads", icon: "👥" },
        { name: "SEO Opt.", icon: "🔍" },
        { name: "Social Media", icon: "📱" },
        { name: "Analytics", icon: "📊" },
        { name: "Email Marketing", icon: "✉️" },
    ]
};

const slideImagesBySlug: Record<string, { light: string; dark: string }> = {
    "web-development": {
        light: "/images/hero/clean/hero-web-clean.png",
        dark: "/images/hero/clean/hero-web-clean.png",
    },
    "mobile-app-development": {
        light: "/images/hero/clean/hero-mobile-clean.png",
        dark: "/images/hero/clean/hero-mobile-clean.png",
    },
    "software-development": {
        light: "/images/hero/clean/hero-software-clean.png",
        dark: "/images/hero/clean/hero-software-clean.png",
    },
    "ai-automation": {
        light: "/images/hero/clean/hero-ai-clean.png",
        dark: "/images/hero/clean/hero-ai-clean.png",
    },
    "ui-ux-design": {
        light: "/images/hero/clean/hero-uiux-clean.png",
        dark: "/images/hero/clean/hero-uiux-clean.png",
    },
    "ecommerce-solutions": {
        light: "/images/hero/clean/hero-ecommerce-clean.png",
        dark: "/images/hero/clean/hero-ecommerce-clean.png",
    },
    "crm-erp": {
        light: "/images/hero/clean/hero-crm-clean.png",
        dark: "/images/hero/clean/hero-crm-clean.png",
    },
    "api-integration": {
        light: "/images/hero/clean/hero-api-clean.png",
        dark: "/images/hero/clean/hero-api-clean.png",
    },
    "cloud-devops": {
        light: "/images/hero/clean/hero-cloud-clean.png",
        dark: "/images/hero/clean/hero-cloud-clean.png",
    },
    "digital-marketing": {
        light: "/images/hero/clean/hero-digital-clean.png",
        dark: "/images/hero/clean/hero-digital-clean.png",
    },
};

interface FloatingBadge {
    icon: string;
    label: string;
}

const floatingBadgesBySlug: Record<string, FloatingBadge[]> = {
    "web-development": [
        { icon: "🛡️", label: "99.99% Uptime" },
        { icon: "⚡", label: "98/100 Web Vitals" },
        { icon: "🔍", label: "SEO Optimized" },
        { icon: "📱", label: "Fully Responsive" },
        { icon: "💻", label: "Headless CMS" },
    ],
    "mobile-app-development": [
        { icon: "📱", label: "iOS & Android" },
        { icon: "⚡", label: "60 FPS Native UX" },
        { icon: "🔒", label: "Biometric Secure" },
        { icon: "🔄", label: "Offline Syncing" },
        { icon: "🚀", label: "App Store Ready" },
    ],
    "software-development": [
        { icon: "💻", label: "Enterprise SaaS" },
        { icon: "⚙️", label: "Microservices" },
        { icon: "🔒", label: "End-to-End Encrypted" },
        { icon: "⚡", label: "Multi-Threaded" },
        { icon: "📊", label: "Automated Workflows" },
    ],
    "ai-automation": [
        { icon: "🛡️", label: "99.99% Uptime" },
        { icon: "🧠", label: "AI Powered Solutions" },
        { icon: "🔌", label: "API Ready" },
        { icon: "⚡", label: "12ms Response Time" },
        { icon: "🤖", label: "RAG & Vector AI" },
    ],
    "ui-ux-design": [
        { icon: "🎨", label: "Figma Prototypes" },
        { icon: "✨", label: "Modular Design System" },
        { icon: "👁️", label: "Accessibility AAA" },
        { icon: "📈", label: "+45% Conversion Boost" },
        { icon: "💎", label: "Modern Aesthetics" },
    ],
    "ecommerce-solutions": [
        { icon: "🛒", label: "Headless Commerce" },
        { icon: "💳", label: "Stripe & Apple Pay" },
        { icon: "⚡", label: "Instant Page Loads" },
        { icon: "📦", label: "Auto Inventory Sync" },
        { icon: "🔒", label: "PCI-DSS Compliant" },
    ],
    "crm-erp": [
        { icon: "📊", label: "Real-Time Telemetry" },
        { icon: "👥", label: "Role-Based Access" },
        { icon: "⚙️", label: "Process Automation" },
        { icon: "🔒", label: "Enterprise Security" },
        { icon: "📈", label: "Financial Reports" },
    ],
    "api-integration": [
        { icon: "🔌", label: "REST & GraphQL" },
        { icon: "🔑", label: "OAuth2 Secured" },
        { icon: "🪝", label: "Automated Webhooks" },
        { icon: "⚡", label: "10ms Sync Latency" },
        { icon: "🔄", label: "Zero Data Leaks" },
    ],
    "cloud-devops": [
        { icon: "☁️", label: "AWS & Kubernetes" },
        { icon: "🔄", label: "Automated CI/CD" },
        { icon: "🏗️", label: "Terraform IaC" },
        { icon: "🛡️", label: "Zero-Downtime Releases" },
        { icon: "📊", label: "Prometheus Monitoring" },
    ],
    "digital-marketing": [
        { icon: "📈", label: "High ROI Campaigns" },
        { icon: "🔍", label: "Technical SEO Audit" },
        { icon: "📊", label: "Analytics Telemetry" },
        { icon: "🚀", label: "Lead Generation" },
        { icon: "👥", label: "Social Media Ads" },
    ],
};

const typingPhrases = [
    "Websites",
    "Mobile Apps",
    "Games",
    "ERP Solutions",
    "AI Solutions",
];



const heroHeadings2Lines: Record<string, { line1: string; line2: string }> = {
    "web-development": { line1: "Web Development", line2: "High-Performance Platforms" },
    "mobile-app-development": { line1: "Mobile App Development", line2: "Native iOS & Android Apps" },
    "software-development": { line1: "Software Engineering", line2: "Custom Enterprise Systems" },
    "ai-automation": { line1: "AI & Automation", line2: "Intelligent Workflows" },
    "ui-ux-design": { line1: "UI/UX Product Design", line2: "Conversion-Focused Interfaces" },
    "ecommerce-solutions": { line1: "E-Commerce Solutions", line2: "Scalable Storefronts" },
    "crm-erp": { line1: "Enterprise CRM & ERP", line2: "Automated Pipelines" },
    "api-integration": { line1: "API & Microservices", line2: "Secure Integration" },
    "cloud-devops": { line1: "Cloud & DevOps", line2: "Reliable Infrastructure" },
    "digital-marketing": { line1: "Digital Marketing", line2: "Data-Driven Brand Growth" },
};

const conciseDescriptions: Record<string, string> = {
    "web-development": "Engineered for high speed, Core Web Vitals optimization, and enterprise scalability.",
    "mobile-app-development": "Cross-platform Flutter & React Native solutions with native performance and instant sync.",
    "software-development": "Custom desktop software, automated internal workflows, and high-throughput microservices.",
    "ai-automation": "Autonomous AI agents, vector database integration, and intelligent automation pipelines.",
    "ui-ux-design": "Interactive Figma prototypes, design systems, and conversion-focused user journeys.",
    "ecommerce-solutions": "Headless storefronts, custom payment APIs, and real-time inventory management.",
    "crm-erp": "Unified enterprise dashboards, student ledgers, and automated reporting systems.",
    "api-integration": "Secure OAuth2 API endpoints, custom webhooks, and low-latency data sync middleware.",
    "cloud-devops": "Kubernetes clusters, automated CI/CD pipelines, and zero-downtime server deployments.",
    "digital-marketing": "Precision SEO auditing, targeted ad campaigns, and real-time growth analytics."
};

export default function Hero() {
    const { theme } = useTheme();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const totalSlides = servicesData.length;

    // Typing Tagline Animation
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypedSpeed] = useState(150);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const currentPhrase = typingPhrases[phraseIndex];

        if (isDeleting) {
            timer = setTimeout(() => {
                setTypedText((prev) => prev.slice(0, -1));
                setTypedSpeed(45);
            }, typingSpeed);
        } else {
            timer = setTimeout(() => {
                setTypedText(currentPhrase.slice(0, typedText.length + 1));
                setTypedSpeed(75);
            }, typingSpeed);
        }

        if (!isDeleting && typedText === currentPhrase) {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 2200);
        } else if (isDeleting && typedText === "") {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
            setTypedSpeed(180);
        }

        return () => clearTimeout(timer);
    }, [typedText, isDeleting, phraseIndex, typingSpeed]);

    // Autoplay functionality
    const handleNext = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const handlePrev = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    // Slowed transition to 5.5s (5500ms)
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(handleNext, 5500);
        return () => clearInterval(interval);
    }, [handleNext, isHovered]);

    // Mouse Parallax Track Coordinate State
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX - innerWidth / 2) / (innerWidth / 2);
            const y = (clientY - innerHeight / 2) / (innerHeight / 2);
            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const currentService = servicesData[currentSlide];
    const currentBadges = floatingBadgesBySlug[currentService.slug] || [
        { icon: "🛡️", label: "99.99% Uptime" },
        { icon: "🧠", label: "AI Powered Solutions" },
        { icon: "🔌", label: "API Ready" },
        { icon: "⚡", label: "12ms Response Time" },
        { icon: "👥", label: "500+ Projects" },
    ];

    // Helper for title mapping
    const serviceTitle =
        currentService.title === "Games Developmenrt"
            ? "Game Development"
            : currentService.title;

    // Split title into words for mask-reveal staggered layout
    const titleWords = serviceTitle.split(" ");

    // Stagger parameters for heading words (Triggers at 1.1s)
    const headingContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 1.1,
            },
        },
    };

    const headingWordVariants = {
        hidden: {
            y: "110%",
            rotate: 1.5,
        },
        visible: {
            y: 0,
            rotate: 0,
            transition: {
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    // Cuberto-Style Shutter/Clip-path slide transition variants
    const slideVariants = {
        initial: {
            opacity: 0,
            scale: 1.012,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.988,
            transition: {
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    const introLetters = "MITSAFE".split("");

    const letterContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    // Character reveal animation with unblurring, fade-in, and slide-up mask reveal
    const letterVariants = {
        hidden: {
            y: "50%",
            opacity: 0,
            filter: "blur(6px)",
        },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    const featureCards = [
        { name: "AI Powered", icon: "🧠" },
        { name: "Mobile Apps", icon: "📱" },
        { name: "Cloud Solutions", icon: "☁️" },
        { name: "Web Development", icon: "💻" },
        { name: "Secure APIs", icon: "🔒" },
        { name: "24/7 Support", icon: "📞" },
    ];

    return (
        <div
            className="relative w-full overflow-hidden bg-white min-h-[100vh] flex flex-col justify-start pt-36 sm:pt-40 lg:pt-44 pb-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
            {/* Pure White Background #FFFFFF */}
            <div className="absolute inset-0 bg-white pointer-events-none" />

            {/* Slide Wipe Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-full flex flex-col justify-center mt-2 lg:mt-4"
                    >
                        {/* ── Two-Column Grid ── */}
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

                            {/* ── LEFT COLUMN (Perfect Straight Left-Grid Alignment) ── */}
                            <div className="lg:col-span-6 flex flex-col items-start text-left w-full pl-0">

                                {/* Subtag Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#305EFF]/10 border border-[#305EFF]/20 text-[#305EFF] font-semibold text-[11.5px] tracking-wide font-sans mb-3 ml-0"
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#305EFF] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#305EFF]"></span>
                                    </span>
                                    <span>ENTERPRISE IT & SAAS SOLUTIONS</span>
                                </motion.div>

                                {/* Main Heading (Shorter, Punchier 2-Line Title) */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: 0.2 }}
                                    className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold leading-[1.25] tracking-tight max-w-md text-left ml-0"
                                    style={{ fontFamily: "'Manrope', 'Plus Jakarta Sans', sans-serif" }}
                                >
                                    <span className="block text-slate-900">
                                        {(heroHeadings2Lines[currentService.slug] || { line1: currentService.title, line2: "For Scalable Business" }).line1}
                                    </span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#305EFF] via-[#305EFF] to-[#305EFF] mt-0.5">
                                        {(heroHeadings2Lines[currentService.slug] || { line1: currentService.title, line2: "For Scalable Business" }).line2}
                                    </span>
                                </motion.h2>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, delay: 0.3 }}
                                    className="mt-3 text-[14px] text-slate-600 leading-relaxed max-w-[440px] font-normal tracking-normal text-left ml-0"
                                >
                                    {conciseDescriptions[currentService.slug] || currentService.longDescription}
                                </motion.p>

                                {/* Tech Stack Pill Badges */}
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="mt-4 flex flex-wrap gap-2 w-full justify-start items-center ml-0"
                                >
                                    {(techIconsByService[currentService.slug] || []).map((tech, idx) => (
                                        <div
                                            key={idx}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/90 rounded-lg hover:border-[#305EFF]/40 hover:bg-[#305EFF]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shrink-0"
                                        >
                                            <span className="text-sm">{tech.icon}</span>
                                            <span className="text-[12px] font-medium text-slate-700 font-sans">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* CTA Buttons (Equal Dimensions w-[175px] h-11) & Trust Proof */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    className="mt-6 flex flex-col gap-3.5 w-full ml-0"
                                >
                                    <div className="flex flex-wrap items-center gap-3 w-full justify-start">
                                        {/* Primary CTA (Exact equal width & height) */}
                                        <motion.a
                                            href="#services"
                                            whileHover={{ scale: 1.02, y: -1 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full sm:w-[175px] h-11 inline-flex items-center justify-center gap-2 bg-[#305EFF] hover:bg-[#305EFF] text-white font-medium text-[13.5px] rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
                                        >
                                            <span>Explore Solutions</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.a>

                                        {/* Secondary CTA (Exact equal width & height) */}
                                        <motion.a
                                            href="/portfolio"
                                            whileHover={{ scale: 1.02, y: -1 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full sm:w-[175px] h-11 inline-flex items-center justify-center gap-2 bg-white text-slate-800 font-medium text-[13.5px] rounded-full border border-slate-200 hover:border-[#305EFF] transition-all duration-200 cursor-pointer"
                                        >
                                            <span>View Case Studies</span>
                                            <span className="text-[#305EFF] text-[10px]">▶</span>
                                        </motion.a>
                                    </div>

                                    {/* Trust Proof Banner */}
                                    <div className="flex items-center gap-2 pt-0.5 text-xs text-slate-500 font-sans ml-0">
                                        <span className="text-amber-500 font-semibold">★★★★★</span>
                                        <span className="font-medium text-slate-600">Trusted by 500+ global enterprises & startups</span>
                                    </div>
                                </motion.div>

                            </div>

                            {/* ── RIGHT COLUMN ── */}
                            <div className="lg:col-span-6 relative flex justify-center items-center lg:-ml-2 mt-8 lg:mt-0 z-30 w-full select-none">

                                {/* Main Illustration container - Pure White Seamless Blend */}
                                <div className="relative w-full max-w-[680px] h-[260px] sm:h-[360px] lg:h-[480px] flex items-center justify-center overflow-visible">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentSlide}
                                            initial={{ opacity: 0, scale: 0.96, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.98, y: -8 }}
                                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                            className="relative w-full h-full flex justify-center items-center overflow-visible"
                                        >
                                            <Image
                                                src={
                                                    (theme === "light"
                                                        ? slideImagesBySlug[currentService.slug]?.light
                                                        : slideImagesBySlug[currentService.slug]?.dark) ||
                                                    "/images/hero/clean/hero-web-clean.png"
                                                }
                                                alt={currentService.title}
                                                width={750}
                                                height={550}
                                                className={`max-w-full max-h-full w-auto h-auto object-contain select-none z-10 transition-all duration-300 ${currentService.slug === "ui-ux-design"
                                                    ? "scale-135 sm:scale-145 md:scale-150 lg:scale-160 origin-center"
                                                    : "scale-100"
                                                    }`}
                                                priority
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Tag 1: Top Left Badge */}
                                    {currentBadges[0] && (
                                        <motion.div
                                            key={`badge-0-${currentSlide}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute left-0 sm:-left-8 top-4 sm:top-12 bg-white border border-slate-200 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 z-20 shadow-xs"
                                        >
                                            <span className="text-xs sm:text-sm">{currentBadges[0].icon}</span>
                                            <span className="text-[10px] sm:text-xs font-medium text-slate-800 font-sans">{currentBadges[0].label}</span>
                                        </motion.div>
                                    )}

                                    {/* Tag 2: Top Right Badge */}
                                    {currentBadges[1] && (
                                        <motion.div
                                            key={`badge-1-${currentSlide}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                                            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                            className="absolute right-0 sm:right-2 top-0 sm:top-2 bg-white border border-slate-200 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 z-20 shadow-xs"
                                        >
                                            <span className="text-xs sm:text-sm">{currentBadges[1].icon}</span>
                                            <span className="text-[10px] sm:text-xs font-medium text-slate-800 font-sans">{currentBadges[1].label}</span>
                                        </motion.div>
                                    )}

                                    {/* Tag 3: Middle Right Badge */}
                                    {currentBadges[2] && (
                                        <motion.div
                                            key={`badge-2-${currentSlide}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
                                            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                            className="hidden sm:flex absolute -right-6 top-[38%] bg-white border border-slate-200 px-3.5 py-1.5 rounded-full items-center gap-2 z-20 shadow-xs"
                                        >
                                            <span className="text-sm">{currentBadges[2].icon}</span>
                                            <span className="text-xs font-medium text-slate-800 font-sans">{currentBadges[2].label}</span>
                                        </motion.div>
                                    )}

                                    {/* Tag 4: Lower Right Badge */}
                                    {currentBadges[3] && (
                                        <motion.div
                                            key={`badge-3-${currentSlide}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                                            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                            className="hidden sm:flex absolute -right-8 bottom-24 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full items-center gap-2 z-20 shadow-xs"
                                        >
                                            <span className="text-sm">{currentBadges[3].icon}</span>
                                            <span className="text-xs font-medium text-slate-800 font-sans">{currentBadges[3].label}</span>
                                        </motion.div>
                                    )}

                                    {/* Tag 5: Bottom Right Badge */}
                                    {currentBadges[4] && (
                                        <motion.div
                                            key={`badge-4-${currentSlide}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                                            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                            className="absolute right-2 sm:right-4 bottom-0 sm:-bottom-4 bg-white border border-slate-200 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 z-20 shadow-xs"
                                        >
                                            <span className="text-xs sm:text-sm">{currentBadges[4].icon}</span>
                                            <span className="text-[10px] sm:text-xs font-medium text-slate-800 font-sans">{currentBadges[4].label}</span>
                                        </motion.div>
                                    )}

                                </div>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Global feature cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 w-full mt-8 sm:mt-12 max-w-7xl mx-auto z-20">
                    {featureCards.map((feat, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-slate-200/90 rounded-xl p-2.5 sm:p-3.5 flex items-center gap-2 sm:gap-2.5 hover:border-[#305EFF]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default group"
                        >
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#305EFF]/10 flex items-center justify-center text-sm sm:text-base text-[#305EFF] shrink-0 group-hover:scale-105 transition-transform">
                                {feat.icon}
                            </div>
                            <span className="text-[11.5px] sm:text-[13px] font-medium text-slate-800 font-sans tracking-tight">
                                {feat.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>

            {/* Navigation Arrows - Clean no shadow */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#305EFF] hover:border-[#305EFF]/40 hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex cursor-pointer"
                aria-label="Previous service"
            >
                <ChevronLeft className="w-5 h-5 stroke-[2.5px]" />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#305EFF] hover:border-[#305EFF]/40 hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex cursor-pointer"
                aria-label="Next service"
            >
                <ChevronRight className="w-5 h-5 stroke-[2.5px]" />
            </button>

            {/* Pagination Page Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? "w-7 bg-[#305EFF]" : "w-2 bg-slate-300 hover:bg-slate-400"
                            }`}
                        aria-label={`Go to slide page ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Shutter bottom curve background separator */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10 pointer-events-none">
                <svg className="relative block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        fill="#FFFFFF"
                        opacity="0.3"
                    ></path>
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="#FFFFFF"
                    ></path>
                </svg>
            </div>
        </div>
    );
}
