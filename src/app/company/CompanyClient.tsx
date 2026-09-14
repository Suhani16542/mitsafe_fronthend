"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Bot,
  Layers,
  Cloud,
  Palette,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  TrendingUp,
  Compass,
  Check,
  Building2,
  Workflow,
  Database,
  Lock,
  HeartHandshake,
  Cpu,
  ChevronRight,
  Server,
  Activity,
  Layers3,
  Rocket
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

// --- 1. What We Do Data (from PDF) ---
const whatWeDoServices = [
  {
    id: "web-dev",
    icon: Code,
    title: "Web Development",
    intro: "We build modern, responsive, and high-performance websites and web applications designed around your business goals.",
    capabilities: [
      "Custom business websites",
      "Enterprise web applications",
      "SaaS platforms",
      "Customer and partner portals",
      "E-commerce platforms",
      "Headless CMS solutions",
      "API integrations",
      "Progressive web applications",
      "Custom dashboards and admin systems",
      "Technical SEO and performance optimization",
    ],
    techNote: "We use modern technologies such as React, Next.js, TypeScript, Node.js, and other scalable frameworks to create fast and maintainable web solutions.",
    badge: "Full-Stack Web",
  },
  {
    id: "mobile-dev",
    icon: Smartphone,
    title: "Mobile App Development",
    intro: "We develop mobile applications for businesses looking to engage customers, streamline operations, or launch new digital products.",
    capabilities: [
      "iOS application development",
      "Android application development",
      "Cross-platform app development",
      "React Native development",
      "Flutter development",
      "Mobile backend development",
      "API integration",
      "Push notifications",
      "Real-time data synchronization",
      "Mobile application maintenance",
    ],
    techNote: "We focus on creating secure, intuitive, and high-performance applications that provide a consistent experience across devices.",
    badge: "iOS & Android",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation",
    intro: "Artificial intelligence is changing the way businesses operate. We help organizations use AI to automate repetitive processes, improve decision-making, and create smarter digital experiences.",
    capabilities: [
      "AI-powered applications",
      "Custom AI integrations",
      "AI chatbots",
      "Large Language Model integrations",
      "RAG-based applications",
      "Intelligent workflow automation",
      "AI-powered search",
      "Document processing",
      "Business process automation",
      "AI assistants and intelligent agents",
    ],
    techNote: "We focus on practical AI solutions that can be integrated into existing business workflows and digital products.",
    badge: "Next-Gen AI",
  },
  {
    id: "custom-software",
    icon: Layers,
    title: "Custom Software Development",
    intro: "When standard software cannot meet your business requirements, custom software can provide the flexibility you need. We develop custom software solutions for startups, growing companies, and enterprises, including:",
    capabilities: [
      "Enterprise software",
      "CRM systems",
      "ERP solutions",
      "Business management platforms",
      "Workflow management systems",
      "Inventory and operational software",
      "Multi-tenant SaaS platforms",
      "Customer portals",
      "Internal business applications",
      "Data-driven dashboards",
    ],
    techNote: "Our goal is to build software that fits your processes rather than forcing your business to adapt to generic software.",
    badge: "Bespoke Architecture",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    intro: "Modern applications need infrastructure that can scale with business growth. Our cloud and DevOps services help businesses build secure, reliable, and scalable environments across leading cloud platforms.",
    capabilities: [
      "Cloud architecture",
      "Cloud migration",
      "AWS solutions",
      "Infrastructure automation",
      "Docker containerization",
      "Kubernetes",
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Cloud security",
      "Performance optimization",
      "Monitoring and maintenance",
      "Cloud cost optimization",
    ],
    techNote: "We design infrastructure with scalability, reliability, security, and operational efficiency in mind.",
    badge: "Cloud Scale",
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design",
    intro: "Great technology needs a great user experience. Our UI/UX designers create intuitive interfaces that help users understand products quickly and complete tasks efficiently.",
    capabilities: [
      "UX research",
      "User journey mapping",
      "Information architecture",
      "Wireframing",
      "UI design",
      "Interactive prototypes",
      "Design systems",
      "Responsive design",
      "Mobile app design",
      "Web application design",
    ],
    techNote: "We combine business requirements, user needs, and visual design to create digital experiences that are simple, useful, and engaging.",
    badge: "Design Systems",
  },
];

// --- 2. Approach to Software Development (7 Steps from PDF) ---
const approachSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "We start by understanding your business objectives, target users, technical requirements, existing systems, and project goals.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Our team defines the product architecture, technology stack, development roadmap, and implementation strategy.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We create user flows, wireframes, UI designs, and prototypes that establish the foundation of the digital product.",
  },
  {
    step: "04",
    title: "Develop",
    desc: "Our developers build the solution using modern technologies, scalable architecture, clean code, and secure development practices.",
  },
  {
    step: "05",
    title: "Test",
    desc: "We perform functional, performance, security, compatibility, and usability testing to identify and resolve issues before launch.",
  },
  {
    step: "06",
    title: "Deploy",
    desc: "Once the product is ready, we deploy it to the required production environment and help ensure a smooth launch.",
  },
  {
    step: "07",
    title: "Support & Improve",
    desc: "Our relationship does not have to end after deployment. We can provide ongoing maintenance, improvements, optimization, and technical support as your product evolves.",
  },
];

// --- 3. Why Choose Mitsafe (7 Pillars from PDF) ---
const whyChoosePillars = [
  {
    icon: TargetIcon,
    title: "Business-Focused Technology",
    desc: "We don't build technology simply for the sake of technology. We focus on solutions that support your business objectives and operational requirements.",
  },
  {
    icon: ScaleIcon,
    title: "Scalable Architecture",
    desc: "Our solutions are designed with future growth in mind, allowing your product and infrastructure to evolve as your business expands.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "We work with modern frameworks, cloud platforms, development tools, and engineering practices to create maintainable digital products.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Development",
    desc: "Security is considered throughout the development lifecycle, from application architecture and authentication to infrastructure and deployment.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Development",
    desc: "We believe clients should have visibility into project progress, milestones, deliverables, and technical decisions.",
  },
  {
    icon: Workflow,
    title: "End-to-End Expertise",
    desc: "From strategy and UI/UX design to development, testing, deployment, and ongoing support, we can support the complete product lifecycle.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    desc: "Our objective is not just to deliver a project. We aim to become a reliable technology partner that can support your digital product as your business grows.",
  },
];

function TargetIcon(props: any) {
  return <Compass {...props} />;
}
function ScaleIcon(props: any) {
  return <TrendingUp {...props} />;
}

// --- 4. Technology Expertise Categories (from PDF) ---
const techCategories = [
  {
    category: "Frontend Technologies",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend Technologies",
    icon: Server,
    skills: ["Node.js", "Python", "Go", "REST APIs", "GraphQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Infrastructure Automation"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "SQL-based systems", "Scalable database architectures"],
  },
  {
    category: "AI Technologies",
    icon: Bot,
    skills: ["OpenAI", "LLM integrations", "RAG architectures", "AI-powered applications"],
  },
  {
    category: "Mobile Technologies",
    icon: Smartphone,
    skills: ["Flutter", "React Native", "iOS", "Android"],
  },
];

// --- 5. Industries We Serve (from PDF) ---
const industriesList = [
  "Healthcare",
  "Financial Services",
  "E-commerce",
  "Logistics",
  "Manufacturing",
  "Education",
  "Real Estate",
  "SaaS",
  "Professional Services",
  "Startups",
  "Enterprise Businesses",
];

// --- 6. Our Commitments (from PDF) ---
const commitments = [
  {
    title: "Secure",
    desc: "Designed with security and data protection in mind.",
    icon: Lock,
  },
  {
    title: "Scalable",
    desc: "Built to support future business growth.",
    icon: TrendingUp,
  },
  {
    title: "Reliable",
    desc: "Developed and tested for stable performance.",
    icon: ShieldCheck,
  },
  {
    title: "Maintainable",
    desc: "Structured with clean and organized code.",
    icon: Code,
  },
  {
    title: "User-Friendly",
    desc: "Designed around real user needs.",
    icon: Palette,
  },
  {
    title: "Business-Focused",
    desc: "Built to deliver practical business value.",
    icon: Building2,
  },
];

export default function CompanyClient() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState("web-dev");

  return (
    <div className="min-h-screen bg-[#FAFBFF] dark:bg-[#071426] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden font-sans">
      
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-slate-200/80 dark:border-white/10 overflow-hidden bg-gradient-to-b from-white via-white to-slate-50/50 dark:from-[#0B1A2E] dark:via-[#071426] dark:to-[#071426]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#305EFF/5_1px,transparent_1px),linear-gradient(to_bottom,#305EFF/5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#305EFF]/10 text-[#305EFF] border border-[#305EFF]/20 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Software Development & IT Solutions Company</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Mitsafe – Software Development &{" "}
                <span className="bg-gradient-to-r from-[#305EFF] via-[#008FED] to-[#00D4FF] bg-clip-text text-transparent">
                  IT Solutions Company
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
                <p>
                  Mitsafe is a software development and IT solutions company helping startups, growing businesses, and enterprises build scalable digital products. From web and mobile applications to AI, cloud infrastructure, enterprise software, and UI/UX design, we combine modern technology with practical business solutions.
                </p>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
                  We work with businesses across India and international markets to design, develop, modernize, and scale digital products that are secure, reliable, and built for long-term growth.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => openModal("quote")}
                  className="px-8 py-4 rounded-full bg-[#305EFF] hover:bg-[#2550E0] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#305EFF]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#what-we-do"
                  className="px-7 py-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#305EFF] text-slate-800 dark:text-slate-200 hover:text-[#305EFF] font-bold text-sm transition-all cursor-pointer inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </a>
              </div>
            </motion.div>

            {/* Hero Right Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden bg-white/60 dark:bg-[#0B1A2E]/70 border border-slate-200/90 dark:border-white/10 shadow-2xl p-5 backdrop-blur-md">
                
                {/* Hero Feature Illustration */}
                <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden bg-gradient-to-tr from-[#305EFF]/15 via-slate-100 dark:via-slate-800 to-transparent flex items-center justify-center">
                  <Image
                    src="/about_company.webp"
                    alt="Mitsafe Software Development & IT Solutions"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/80 via-transparent to-transparent" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#0B1A2E]/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-200/90 dark:border-white/15 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center font-bold">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Enterprise Scalability</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Security-First Architecture</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#008FED]/10 text-[#008FED] text-[10px] font-mono font-extrabold uppercase">
                      Active
                    </span>
                  </div>
                </div>

                {/* Micro tech pills */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2 text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5">Next.js</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5">TypeScript</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5">AI Workflows</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5">AWS Cloud</span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ========================================================
          2. WHO WE ARE
          ======================================================== */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] text-xs font-mono font-bold uppercase tracking-wider">
              <span>Overview</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Who We Are
            </h2>

            <p className="text-base sm:text-lg font-semibold text-[#305EFF] dark:text-[#00D4FF] leading-snug">
              Mitsafe is a technology and software development company focused on building digital solutions that solve real business challenges.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <p>
                Our expertise spans custom web development, mobile app development, enterprise software, artificial intelligence, cloud infrastructure, DevOps, UI/UX design, and digital transformation.
              </p>
              <p>
                We believe technology should do more than simply work. It should improve business processes, create better customer experiences, reduce operational complexity, and provide a foundation for future growth.
              </p>
              <p>
                From an initial idea to product development, deployment, and ongoing support, our team works closely with clients to turn business requirements into scalable digital solutions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-[#305EFF]/5 to-transparent dark:from-[#0B1A2E] dark:to-[#071426] p-8 sm:p-10 rounded-[32px] border border-slate-200/90 dark:border-white/10 shadow-lg space-y-6 text-left">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Our Core Technological Focus
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Custom Web Platforms",
                  "Mobile Applications",
                  "Enterprise Systems",
                  "Artificial Intelligence",
                  "Cloud & DevOps",
                  "UI/UX Experience Design",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#305EFF] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>Serving India & Global Markets</span>
                <span className="text-[#305EFF] font-bold">End-to-End Support</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          3. BUILDING DIGITAL PRODUCTS THAT MOVE BUSINESSES FORWARD
          ======================================================== */}
      <section className="py-20 bg-slate-100/60 dark:bg-[#0B1A2E]/50 border-y border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] text-xs font-mono font-bold uppercase tracking-wider">
              <span>Client-Centric Engineering</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Building Digital Products That Move Businesses Forward
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Every business has different goals, users, processes, and technical requirements. That&apos;s why we don&apos;t believe in one-size-fits-all development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                step: "Phase 1",
                title: "Launch a New Product",
                desc: "Turn your concepts and requirements into a market-ready digital product with modern architecture, rapid iterations, and intuitive design.",
                icon: Rocket,
              },
              {
                step: "Phase 2",
                title: "Improve Existing Platforms",
                desc: "Identify bottlenecks, optimize user experience, enhance security, and refactor workflows to elevate performance across devices.",
                icon: TrendingUp,
              },
              {
                step: "Phase 3",
                title: "Modernize Legacy Software",
                desc: "Migrate older codebases and architectures to scalable cloud environments, microservices, and modern frameworks with zero business disruption.",
                icon: Layers3,
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#071426] p-8 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#305EFF] uppercase tracking-wider">
                      {card.step}
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-white/5 p-4 rounded-2xl border border-slate-200/80 dark:border-white/10">
            We begin by understanding your business, identify the right technology strategy, design the user experience, develop the solution, test it thoroughly, and help you take it to production.
          </div>

        </div>
      </section>


      {/* ========================================================
          4. WHAT WE DO (6 Full Services with Detailed Capabilities)
          ======================================================== */}
      <section id="what-we-do" className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] text-xs font-mono font-bold uppercase tracking-wider">
            <span>Capabilities & Services</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What We Do
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            From modern web applications and mobile apps to custom enterprise platforms and cloud scaling, explore our complete range of capabilities.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeDoServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-[#0B1A2E] rounded-3xl border border-slate-200/90 dark:border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group"
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center group-hover:bg-[#305EFF] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Intro */}
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#305EFF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {service.intro}
                    </p>
                  </div>

                  {/* Capabilities Bullet List */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Key Capabilities:
                    </div>
                    <ul className="space-y-1.5">
                      {service.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#305EFF] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Note Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans italic">
                  {service.techNote}
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ========================================================
          5. OUR APPROACH TO SOFTWARE DEVELOPMENT (7 Steps)
          ======================================================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50/70 to-white dark:from-[#0B1A2E]/60 dark:to-[#071426] border-y border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-16">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] text-xs font-mono font-bold uppercase tracking-wider">
              <span>Methodology & Lifecycle</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our Approach to Software Development
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              We follow a structured development process designed to reduce uncertainty and maintain transparency throughout the project.
            </p>
          </div>

          {/* 7 Steps Visual Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {approachSteps.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white dark:bg-[#0B1A2E] p-7 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#305EFF]/5 to-transparent dark:from-[#305EFF]/10" : ""
                }`}
              >
                <div className="space-y-3">
                  <span className="text-2xl font-mono font-extrabold text-[#305EFF]">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          6. WHY CHOOSE MITSAFE? (7 Value Pillars)
          ======================================================== */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] text-xs font-mono font-bold uppercase tracking-wider">
            <span>Competitive Advantages</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Mitsafe?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            We focus on practical engineering and long-term partnerships that provide stable foundations for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {whyChoosePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`bg-white dark:bg-[#0B1A2E] p-8 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#305EFF]/5 via-white dark:via-[#0B1A2E] to-transparent" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ========================================================
          7. OUR TECHNOLOGY EXPERTISE (6 Categories from PDF)
          ======================================================== */}
      <section className="py-20 bg-slate-100/60 dark:bg-[#0B1A2E]/50 border-y border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] text-xs font-mono font-bold uppercase tracking-wider">
              <span>Stack & Frameworks</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our Technology Expertise
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              We use technologies selected according to project requirements, scalability, performance, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {techCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#071426] p-7 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================
          8. INDUSTRIES WE SERVE
          ======================================================== */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] text-xs font-mono font-bold uppercase tracking-wider">
            <span>Domain Verticals</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Industries We Serve
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Our technology solutions can be adapted to different business models, operational requirements, and industry workflows.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
          {industriesList.map((industry, idx) => (
            <div
              key={idx}
              className="px-5 py-3 rounded-2xl bg-white dark:bg-[#0B1A2E] border border-slate-200/90 dark:border-white/10 shadow-2xs hover:border-[#305EFF] transition-all flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
            >
              <div className="w-2 h-2 rounded-full bg-[#305EFF]" />
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================
          9. FROM IDEA TO SCALABLE PRODUCT & GLOBAL APPROACH
          ======================================================== */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50/80 dark:from-[#071426] dark:to-[#0B1A2E]/50 border-t border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            
            {/* From Idea to Scalable Digital Product */}
            <div className="bg-white dark:bg-[#071426] p-8 sm:p-10 rounded-[32px] border border-slate-200/90 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[11px] font-mono font-bold text-[#305EFF] uppercase tracking-wider">
                  Lifecycle Execution
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  From Idea to Scalable Digital Product
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Whether you have an idea for a new SaaS platform, need a custom business application, want to modernize an existing system, or need additional engineering expertise, Mitsafe can help you move from concept to execution.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  We combine product thinking, engineering expertise, modern technology, and business understanding to create solutions designed for real-world use.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                <button
                  onClick={() => openModal("quote")}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#305EFF] hover:underline cursor-pointer"
                >
                  <span>Discuss your product roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Our Global Approach */}
            <div className="bg-white dark:bg-[#071426] p-8 sm:p-10 rounded-[32px] border border-slate-200/90 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[11px] font-mono font-bold text-[#305EFF] uppercase tracking-wider">
                  International Reach
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Our Global Approach
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Mitsafe works with businesses across different markets and time zones, providing technology solutions for companies looking to build, improve, or scale their digital products.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Our international experience allows us to understand different business requirements while maintaining a strong focus on communication, transparency, quality, and timely delivery.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#305EFF]" />
                  <span>Serving India & International Markets</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          10. OUR COMMITMENT (6 Core Commitments from PDF)
          ======================================================== */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-16">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] text-xs font-mono font-bold uppercase tracking-wider">
            <span>Guiding Principles</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Commitment
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal">
            We are committed to building digital products that are:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0B1A2E] p-7 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* ========================================================
          11. FINAL CALL TO ACTION (from PDF)
          ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 pb-28">
        <div className="relative rounded-[36px] overflow-hidden bg-white dark:bg-[#0B1A2E] text-slate-900 dark:text-white p-10 sm:p-14 lg:p-16 text-center border border-slate-200/90 dark:border-white/10 shadow-xl space-y-8">
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#305EFF/5_1px,transparent_1px),linear-gradient(to_bottom,#305EFF/5_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <span className="px-4 py-1.5 rounded-full bg-[#305EFF]/10 border border-[#305EFF]/20 text-xs font-mono font-bold text-[#305EFF] dark:text-[#00D4FF] uppercase tracking-wider">
              Start Your Project
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Let&apos;s Build Your Next Digital Product
            </h2>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
              Have a project idea, an existing application that needs improvement, or a business process that could be automated? Talk to the Mitsafe team about your requirements.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Whether you need a software development company, web development partner, mobile app development team, AI development expertise, cloud and DevOps support, or UI/UX design services, we can help you plan and build the right solution.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal("quote")}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#305EFF] hover:bg-[#2550E0] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#305EFF]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-6 text-xs font-mono font-bold text-[#305EFF] dark:text-[#00D4FF] tracking-wider uppercase">
              Let&apos;s Build Something Amazing Together.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
