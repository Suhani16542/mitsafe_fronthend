export interface HeroSlide {
  id: number;
  eyebrow: string;
  flag: string;
  title: string;
  desc: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
  image: string;
  badges: string[];
}

export interface CountryService {
  title: string;
  desc: string;
  iconKey: string;
  slug: string;
  image: string;
  bullets: string[];
}

export interface CountryFaq {
  id: string;
  title: string;
  content: string;
}

export interface ClientReview {
  name: string;
  role: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface CountryStat {
  value: string;
  label: string;
}

export interface CountryLandingConfig {
  slug: string;
  countryName: string;
  flag: string;
  timeZoneCode: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  heroSlides: HeroSlide[];
  about: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    p1: string;
    p2: string;
    experienceYears: string;
    checklist: string[];
    image?: string;
  };
  services: CountryService[];
  experienceFaqs: CountryFaq[];
  reviews: ClientReview[];
  stats: CountryStat[];
  mission: {
    title: string;
    desc: string;
    image?: string;
  };
  techStack: string[];
  bottomCta: {
    title: string;
    desc: string;
  };
}

export const countryLandingData: Record<string, CountryLandingConfig> = {
  // =========================================================================
  // 1. USA (Approved Design & Content Reference - Untouched)
  // =========================================================================
  usa: {
    slug: "usa",
    countryName: "USA",
    flag: "🇺🇸",
    timeZoneCode: "EST / CST / PST",
    seo: {
      title: "Software & Web App Development Company in USA | Mitsafe",
      description:
        "Mitsafe delivers premier custom web applications, mobile app development, cloud architecture, and AI automation for fast-growing US enterprises and startups.",
      canonical: "/usa",
    },
    heroSlides: [
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
    ],
    about: {
      badge: "Who We Are",
      headingPrefix: "MITSAFE USA",
      headingHighlight: "Engineering Scalable Digital Products",
      p1: "Mitsafe is an agile, full-cycle software and digital product engineering agency helping US startups, growth-stage brands, and enterprises modernize their digital presence. From custom web portals and responsive mobile applications to enterprise cloud systems, we engineer software that drives real revenue and operational efficiency.",
      p2: "Our distributed engineering model gives you the best of both worlds: dedicated US-time-zone communication, milestone-driven agile sprints, zero overhead, and 100% intellectual property ownership from day one.",
      experienceYears: "12+",
      checklist: [
        "100% Intellectual Property Ownership",
        "US Time Zone Aligned (EST/CST/PST)",
        "Senior Full-Stack Developers",
        "Milestone-Based Agile Sprints",
        "Strict NDAs & Enterprise Security",
        "Dedicated 24/7 Account Management",
      ],
      image: "/images/usa_about_workspace.jpg",
    },
    services: [
      {
        title: "Website Designing & Dev",
        desc: "Custom high-converting websites and modern web platforms built for speed, security, and enterprise growth.",
        iconKey: "globe",
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
        iconKey: "smartphone",
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
        iconKey: "layers",
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
        iconKey: "database",
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
        iconKey: "cpu",
        slug: "/services/ai-automation",
        image: "/showcase/seo_1.webp",
        bullets: [
          "Custom LLM & ChatGPT Integrations",
          "Intelligent Workflow Automation",
          "Predictive Data Analytics & AI Bots",
          "Enterprise API & CRM Orchestration",
        ],
      },
      {
        title: "Dedicated Tech Teams",
        desc: "Scale your engineering output with senior full-stack developers, UI/UX engineers, and DevOps architects.",
        iconKey: "server",
        slug: "/hire-developers",
        image: "/showcase/app_2.webp",
        bullets: [
          "Senior Vetted Software Engineers",
          "Direct Slack & Jira Daily Integration",
          "Flexible Hourly or Monthly Engagements",
          "Zero Recruitment Overhead or Hassle",
        ],
      },
    ],
    experienceFaqs: [
      {
        id: "item-1",
        title: "How does Mitsafe ensure effective US time-zone collaboration?",
        content:
          "We offer dedicated overlapping working hours aligned with Eastern (EST), Central (CST), and Pacific (PST) business schedules. Daily standups, transparent Jira boards, and real-time Slack channels keep you in total control.",
      },
      {
        id: "item-2",
        title: "Who owns the code and intellectual property produced?",
        content:
          "You retain 100% full intellectual property and source code ownership from sprint one. Every commit, architecture diagram, design asset, and cloud deployment is transferred directly to your repositories.",
      },
      {
        id: "item-3",
        title: "How do you handle enterprise security, NDAs, and compliance?",
        content:
          "Before any technical discussion or line of code is written, we execute binding mutual Non-Disclosure Agreements (NDAs). Our engineering workflows follow SOC2 principles, encrypted Git repositories, and strict role-based access controls.",
      },
      {
        id: "item-4",
        title: "What is the typical ramp-up time for a new project or team?",
        content:
          "For custom project builds, we complete discovery and technical scoping within 3 to 5 business days. Dedicated engineers and development squads can be onboarded and integrated into your sprints within 48 to 72 hours.",
      },
    ],
    reviews: [
      {
        name: "David Sterling",
        role: "VP of Product, FinTech",
        location: "New York, USA",
        rating: 5,
        review:
          "Mitsafe transformed our web and mobile apps. Their engineering team worked seamlessly within our Eastern timezone and delivered ahead of our quarterly roadmap.",
        avatar: "/avatars/avatar-1.webp",
      },
      {
        name: "Sarah Jenkins",
        role: "Founder & CEO, HealthTech",
        location: "Austin, Texas, USA",
        rating: 5,
        review:
          "The best development partner we've collaborated with. Their code quality, proactive communication, and modern architecture saved us months of engineering effort.",
        avatar: "/avatars/avatar-2.webp",
      },
      {
        name: "Michael Chen",
        role: "Head of Engineering, E-Com",
        location: "San Francisco, CA, USA",
        rating: 5,
        review:
          "Scaling our commerce platform to handle millions in monthly volume was flawless with Mitsafe. High-velocity sprints and exceptional attention to detail.",
        avatar: "/avatars/avatar-3.webp",
      },
    ],
    stats: [
      { value: "250+", label: "Successful Projects" },
      { value: "99.4%", label: "Client Satisfaction" },
      { value: "12+", label: "Years Experience" },
      { value: "50+", label: "Senior Engineers" },
    ],
    mission: {
      title: "Building Tomorrow’s Enterprise Software, Today",
      desc: "We partner with US leaders to craft resilient digital software, scalable web applications, and autonomous AI systems built for long-term category leadership.",
      image: "/images/usa_mission_bg.jpg",
    },
    techStack: [
      "Next.js 15",
      "React 19",
      "Node.js",
      "TypeScript",
      "Python",
      "Flutter",
      "React Native",
      "AWS Cloud",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
      "GraphQL",
    ],
    bottomCta: {
      title: "Ready to Scale Your US Digital Product?",
      desc: "Schedule a free technical discovery call with our solutions architects today.",
    },
  },

  // =========================================================================
  // 2. UAE (Dubai & Abu Dhabi Smart City & Gulf Enterprise Focus)
  // =========================================================================
  uae: {
    slug: "uae",
    countryName: "UAE",
    flag: "🇦🇪",
    timeZoneCode: "GST (UTC+4)",
    seo: {
      title: "Software & Web Development Company in UAE | Mitsafe Dubai",
      description:
        "Mitsafe delivers enterprise web applications, mobile app development, bilingual digital platforms, and AI automation for fast-growing UAE and Middle East businesses.",
      canonical: "/uae",
    },
    heroSlides: [
      {
        id: 0,
        eyebrow: "Digital Engineering For UAE Enterprises",
        flag: "🇦🇪",
        title: "Pioneering Smart Digital Transformation Across the UAE",
        desc: "Accelerate your business in Dubai, Abu Dhabi, and across the Emirates with high-velocity web platforms, bilingual mobile applications, and intelligent cloud systems built for the Gulf's modern digital economy.",
        primaryBtnText: "Request Free UAE Consultation",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore Our Solutions",
        secondaryBtnHref: "#services",
        image: "/images/uae_hero_bg.jpg",
        badges: ["Gulf Time Zone Aligned (GST)", "Bilingual UX & RTL Support", "100% IP & Source Code Ownership"],
      },
      {
        id: 1,
        eyebrow: "FinTech & Cloud Architecture",
        flag: "🇦🇪",
        title: "Enterprise Custom Software, VAT E-Commerce & Scalable Cloud",
        desc: "From UAE Central Bank-ready payment gateways and multi-currency commerce to automated logistics portals, we engineer high-reliability digital backbones for leading regional brands.",
        primaryBtnText: "Schedule Architecture Call",
        primaryBtnHref: "#quote",
        secondaryBtnText: "View Case Studies",
        secondaryBtnHref: "#services",
        image: "/images/uae_about_workspace.jpg",
        badges: ["Payment Gateway Ready", "99.99% Cloud SLA", "Strict Non-Disclosure"],
      },
      {
        id: 2,
        eyebrow: "Smart City AI & Next-Gen Mobile",
        flag: "🇦🇪",
        title: "Native Mobile Apps & AI Workflow Automation for the Emirates",
        desc: "Build engaging iOS and Android mobile experiences, automated conversational AI agents, and custom enterprise portals designed to scale with the UAE's rapid commercial expansion.",
        primaryBtnText: "Get an Instant Estimate",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore Tech Stack",
        secondaryBtnHref: "#services",
        image: "/engineering_hero_v2.webp",
        badges: ["iOS & Android Store Ready", "Arabic Natural Language Processing", "Dedicated Account Leads"],
      },
    ],
    about: {
      badge: "Empowering Gulf Innovation",
      headingPrefix: "MITSAFE UAE",
      headingHighlight: "Architecting World-Class Digital Products for the Middle East",
      p1: "Mitsafe empowers forward-thinking corporations, government initiatives, and high-growth startups across Dubai, Abu Dhabi, and the GCC region with bespoke software engineering and digital transformation. We bridge high-performance frontend interfaces with resilient, scalable backend infrastructures.",
      p2: "Our engineering model is tailored for the GCC business rhythm: real-time collaboration during Gulf Standard Time (GST), seamless English-Arabic localization, robust compliance with regional financial protocols, and guaranteed intellectual property protection.",
      experienceYears: "10+",
      checklist: [
        "Aligned with Gulf Standard Time (GST)",
        "Bilingual English/Arabic RTL UI Architecture",
        "UAE VAT & Regional Payment Integrations (Telr, PayTabs, Stripe)",
        "Enterprise-Grade Data Security & Strict NDAs",
        "Dedicated Agile Sprints & Milestone Delivery",
        "Full Intellectual Property & Repository Transfer",
      ],
      image: "/images/uae_about_workspace.jpg",
    },
    services: [
      {
        title: "Bilingual Web Development",
        desc: "High-converting corporate portals and web platforms engineered with flawless English & Arabic typography, ultra-fast speeds, and SEO dominance.",
        iconKey: "globe",
        slug: "/services/web-development",
        image: "/showcase/web_1.webp",
        bullets: [
          "Bilingual LTR & RTL UI/UX Frameworks",
          "Next.js, React & High-Performance Headless Web",
          "Government & Corporate Enterprise Portals",
          "Ultra-Fast GCC Cloud Hosting Optimization",
        ],
      },
      {
        title: "Custom Mobile App Development",
        desc: "Native iOS & Android mobile applications engineered for the modern smartphone-first Gulf audience with smooth bilingual onboarding.",
        iconKey: "smartphone",
        slug: "/services/mobile-app-development",
        image: "/showcase/app_1.webp",
        bullets: [
          "Native Swift, Kotlin & Flutter Multiplatform",
          "Biometric Authentication & Digital Wallets",
          "Real-time Geo-Tracking & Push Notifications",
          "App Store & Google Play Regional Releases",
        ],
      },
      {
        title: "GCC E-Commerce & Marketplaces",
        desc: "Scalable multi-vendor marketplaces, luxury retail portals, and omni-channel e-commerce engines tailored for high conversion across the Emirates.",
        iconKey: "layers",
        slug: "/services/ecommerce-solutions",
        image: "/showcase/web_3.webp",
        bullets: [
          "Multi-Currency (AED, SAR, USD) & VAT Setup",
          "Apple Pay, PayTabs, Network International & Stripe",
          "Same-Day Courier & Warehouse ERP Integrations",
          "High-Conversion Mobile Checkout Funnels",
        ],
      },
      {
        title: "Enterprise Custom Software & ERP",
        desc: "Custom operational software, real estate property portals, CRM suites, and cloud microservices built to automate complex Middle Eastern workflows.",
        iconKey: "database",
        slug: "/services/software-development",
        image: "/showcase/web_2.webp",
        bullets: [
          "Real Estate & Property Management Portals",
          "Bespoke ERP, Inventory & Supply Chain Systems",
          "AWS Middle East (UAE / Bahrain) Infrastructure",
          "High-Security Role-Based Access Controls",
        ],
      },
      {
        title: "AI Agents & Smart City Automation",
        desc: "Autonomous AI customer support agents, bilingual chatbots, and intelligent document parsing built to elevate business speed and service quality.",
        iconKey: "cpu",
        slug: "/services/ai-automation",
        image: "/showcase/seo_1.webp",
        bullets: [
          "Arabic & English Conversational AI Bots",
          "Automated Customer Service & WhatsApp Business AI",
          "Intelligent OCR & Trade Document Processing",
          "Custom Predictive Analytics Dashboards",
        ],
      },
      {
        title: "Dedicated UAE Engineering Squads",
        desc: "Augment your in-house IT team with senior full-stack developers, cloud architects, and QA engineers working in your exact business hours.",
        iconKey: "server",
        slug: "/hire-developers",
        image: "/showcase/app_2.webp",
        bullets: [
          "GST Time-Zone Dedicated Full-Stack Talent",
          "Seamless Daily Standups & Slack Collaboration",
          "Flexible Sprint Scaling Without Hiring Overhead",
          "Direct Code Commitments to Your Repositories",
        ],
      },
    ],
    experienceFaqs: [
      {
        id: "item-1",
        title: "How does Mitsafe support Arabic and English bilingual software requirements?",
        content:
          "All our web and mobile applications are architected with full internationalization (i18n), supporting right-to-left (RTL) Arabic layouts, tailored typography (like Cairo and IBM Plex Arabic), and instantaneous locale toggling.",
      },
      {
        id: "item-2",
        title: "How do your working hours align with UAE business schedules?",
        content:
          "Our engineering teams offer dedicated working overlap during Gulf Standard Time (GST, Monday through Friday, with flexible coverage for Sunday-Thursday schedules). We conduct live standups and provide instant communication over Slack and Teams.",
      },
      {
        id: "item-3",
        title: "Can you integrate UAE payment systems and VAT compliance?",
        content:
          "Yes. We have extensive experience integrating leading Middle Eastern payment gateways including Telr, PayTabs, Network International, Checkout.com, Apple Pay, and Stripe, complete with automated 5% UAE VAT invoicing and reporting.",
      },
      {
        id: "item-4",
        title: "What security and NDA standards protect our project?",
        content:
          "We sign comprehensive mutual NDAs and transfer 100% intellectual property rights to your organization. Code is hosted on your enterprise GitHub/GitLab repositories with end-to-end encryption.",
      },
    ],
    reviews: [
      {
        name: "Tariq Al-Mansoor",
        role: "VP of Digital Innovation",
        location: "Dubai, UAE",
        rating: 5,
        review:
          "Mitsafe engineered our bilingual real estate portal with exceptional speed and attention to detail. Their GST timezone alignment made sprint management effortless.",
        avatar: "/avatars/avatar-1.webp",
      },
      {
        name: "Fatima Al-Zahra",
        role: "Head of Product, FinTech",
        location: "Abu Dhabi, UAE",
        rating: 5,
        review:
          "The code quality and architectural rigor delivered by Mitsafe exceeded our expectations. Integrating regional payment gateways was seamless.",
        avatar: "/avatars/avatar-2.webp",
      },
      {
        name: "Khalid bin Rashid",
        role: "Managing Director, E-Com",
        location: "Sharjah, UAE",
        rating: 5,
        review:
          "From day one, Mitsafe understood our commercial goals across the GCC. Our mobile app retention and e-commerce conversions increased significantly.",
        avatar: "/avatars/avatar-3.webp",
      },
    ],
    stats: [
      { value: "180+", label: "Regional Deployments" },
      { value: "99.7%", label: "SLA Uptime" },
      { value: "10+", label: "Years in GCC Tech" },
      { value: "100%", label: "Code & IP Ownership" },
    ],
    mission: {
      title: "Empowering the Next Generation of Middle East Digital Leaders",
      desc: "We partner with visionary enterprises across Dubai, Abu Dhabi, and the GCC to architect scalable, secure, and beautiful digital software that defines market leadership.",
      image: "/images/uae_hero_bg.jpg",
    },
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Node.js",
      "Flutter",
      "AWS Middle East",
      "PostgreSQL",
      "Python AI",
      "Docker",
      "TailwindCSS",
      "GraphQL",
      "Redis",
    ],
    bottomCta: {
      title: "Ready to Build Scalable Software in the UAE?",
      desc: "Connect with our digital solutions architects for a tailored proposal within 24 hours.",
    },
  },

  // =========================================================================
  // 3. UK (London & Manchester Tech Hubs, FinTech & Enterprise SaaS)
  // =========================================================================
  uk: {
    slug: "uk",
    countryName: "UK",
    flag: "🇬🇧",
    timeZoneCode: "GMT / BST",
    seo: {
      title: "Software & Web App Development Company in UK | Mitsafe London",
      description:
        "Mitsafe delivers custom SaaS web platforms, mobile app development, FCA-ready fintech software, and AI automation for fast-growing UK enterprises and scale-ups.",
      canonical: "/uk",
    },
    heroSlides: [
      {
        id: 0,
        eyebrow: "Digital Engineering For UK Scale-Ups",
        flag: "🇬🇧",
        title: "Engineering Scalable Web, Mobile & Cloud Solutions for UK Businesses",
        desc: "Partner with senior software engineers to build resilient SaaS platforms, high-converting web applications, and iOS/Android products engineered for London, Manchester, and the wider UK tech ecosystem.",
        primaryBtnText: "Book a Free UK Discovery Call",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore UK Services",
        secondaryBtnHref: "#services",
        image: "/images/uk_hero_bg.jpg",
        badges: ["GMT / BST Working Overlap", "UK GDPR & DPA 2018 Compliant", "100% IP & Source Code Transfer"],
      },
      {
        id: 1,
        eyebrow: "FinTech & Enterprise SaaS",
        flag: "🇬🇧",
        title: "FCA-Compliant FinTech, Microservices & High-Scale Cloud Architecture",
        desc: "Accelerate your UK product roadmap with modern cloud-native architectures, Open Banking integrations, zero-downtime databases, and automated CI/CD pipelines.",
        primaryBtnText: "Consult Our Architects",
        primaryBtnHref: "#quote",
        secondaryBtnText: "View Solutions",
        secondaryBtnHref: "#services",
        image: "/images/uk_about_workspace.jpg",
        badges: ["99.9% Uptime SLA", "Open Banking Ready", "Enterprise SOC2 Protocols"],
      },
      {
        id: 2,
        eyebrow: "AI Automation & Native Mobile",
        flag: "🇬🇧",
        title: "Intelligent AI Workflows & Modern Mobile Apps Built for Retention",
        desc: "From custom machine learning assistants to polished cross-platform mobile apps on Flutter and React Native, we turn ambitious UK startup visions into market-dominating software.",
        primaryBtnText: "Get an Instant Scope",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore Tech Stack",
        secondaryBtnHref: "#services",
        image: "/engineering_culture.webp",
        badges: ["iOS & Android Native", "Next.js & React 19", "Milestone Agile Delivery"],
      },
    ],
    about: {
      badge: "UK Technology Partner",
      headingPrefix: "MITSAFE UK",
      headingHighlight: "Delivering Robust Software Engineering to British Innovators",
      p1: "Mitsafe provides full-cycle software engineering, web application development, and cloud modernization to UK enterprises, venture-backed scale-ups, and innovative British businesses. We build digital products designed to scale seamlessly under heavy commercial load.",
      p2: "Our delivery framework is optimized for the UK tech scene: substantial GMT/BST working overlap, transparent Jira sprint velocity, strict compliance with UK GDPR and the Data Protection Act 2018, and complete intellectual property ownership from day one.",
      experienceYears: "11+",
      checklist: [
        "Dedicated GMT & BST Timezone Overlap",
        "Full UK GDPR & Data Protection Act 2018 Compliance",
        "Senior Full-Stack Engineers & Solutions Architects",
        "Transparent Bi-Weekly Agile Sprint Schedulers",
        "Comprehensive NDAs & IP Ownership Handover",
        "Direct Slack, Teams & Jira Daily Collaboration",
      ],
      image: "/images/uk_about_workspace.jpg",
    },
    services: [
      {
        title: "Enterprise Web Applications",
        desc: "Scalable SaaS platforms, customer portals, and lightning-fast web applications built on Next.js, React, and robust TypeScript backends.",
        iconKey: "globe",
        slug: "/services/web-development",
        image: "/showcase/web_1.webp",
        bullets: [
          "Bespoke SaaS & Web Application Engineering",
          "Next.js 15, React 19 & Server Components",
          "Accessible, High-Converting UI/UX Design",
          "SEO Dominance & Core Web Vitals Optimization",
        ],
      },
      {
        title: "iOS & Android Mobile Apps",
        desc: "Intuitive native and multiplatform mobile applications engineered for high performance, smooth retention, and British market compliance.",
        iconKey: "smartphone",
        slug: "/services/mobile-app-development",
        image: "/showcase/app_1.webp",
        bullets: [
          "Flutter & React Native Cross-Platform Agility",
          "Native iOS (Swift) & Android (Kotlin) Precision",
          "Secure Biometrics & Push Messaging Pipelines",
          "Apple App Store & Google Play Release Lifecycle",
        ],
      },
      {
        title: "Headless E-Commerce Engines",
        desc: "Custom digital storefronts, B2B commerce platforms, and headless Shopify/custom setups engineered for ultra-fast checkout and high GBP revenue.",
        iconKey: "layers",
        slug: "/services/ecommerce-solutions",
        image: "/showcase/web_3.webp",
        bullets: [
          "Headless Commerce & Microservices Integration",
          "Stripe, Klarna, Apple Pay & PayPal Gateways",
          "Automated Inventory, ERP & UK Shipping Sync",
          "Frictionless Mobile-First Checkout UX",
        ],
      },
      {
        title: "Cloud Architecture & DevOps",
        desc: "Resilient cloud infrastructure on AWS, Azure, and Google Cloud with automated CI/CD deployment pipelines, containerization, and 99.9% uptime.",
        iconKey: "database",
        slug: "/services/software-development",
        image: "/showcase/web_2.webp",
        bullets: [
          "AWS & Azure London/Ireland Region Setups",
          "Docker, Kubernetes & Terraform Automation",
          "Microservices, REST & GraphQL API Gateways",
          "Zero-Downtime Migration & Database Scaling",
        ],
      },
      {
        title: "AI Automation & Custom LLMs",
        desc: "Generative AI integrations, intelligent automated workflows, and data pipelines that reduce operational overhead for UK enterprises.",
        iconKey: "cpu",
        slug: "/services/ai-automation",
        image: "/showcase/seo_1.webp",
        bullets: [
          "Custom LLM & Private AI Assistant Deployments",
          "Intelligent Document & Invoice Extraction",
          "Automated Business Workflow Orchestration",
          "Predictive Analytics & Executive Dashboards",
        ],
      },
      {
        title: "Dedicated British Sprint Squads",
        desc: "Augment your engineering department with seasoned full-stack engineers and technical leads who integrate directly into your daily routines.",
        iconKey: "server",
        slug: "/hire-developers",
        image: "/showcase/app_2.webp",
        bullets: [
          "Vetted Senior TypeScript, Python & Mobile Devs",
          "Direct Daily Slack Integration & UK Standups",
          "Flexible Monthly Engagements with Zero Friction",
          "Immediate Sprint Acceleration & Delivery",
        ],
      },
    ],
    experienceFaqs: [
      {
        id: "item-1",
        title: "How do you coordinate with UK teams during British business hours?",
        content:
          "We offer substantial daily working overlap with GMT and British Summer Time (BST). Our project leads and developers join your regular morning standups, sprint retrospectives, and communicate continuously via Slack and Jira.",
      },
      {
        id: "item-2",
        title: "How do you ensure UK GDPR and data protection compliance?",
        content:
          "All software architecture adheres strictly to UK GDPR and the Data Protection Act 2018. We implement encryption at rest and in transit, data minimization protocols, and deploy servers in UK or European cloud data centers (e.g. AWS eu-west-2 London).",
      },
      {
        id: "item-3",
        title: "What is your intellectual property and source code handover policy?",
        content:
          "You retain 100% full intellectual property ownership. Code is pushed directly to your organization's version control repositories from sprint one, with complete documentation and architecture schematics.",
      },
      {
        id: "item-4",
        title: "How quickly can we kick off development or scale an engineering squad?",
        content:
          "Following an initial technical discovery session, we provide detailed sprint plans within 72 hours. Dedicated engineers can integrate into your existing codebase within 3 to 5 business days.",
      },
    ],
    reviews: [
      {
        name: "Oliver Sterling",
        role: "Chief Technology Officer, SaaS",
        location: "London, UK",
        rating: 5,
        review:
          "Mitsafe acted as an organic extension of our London tech team. Their engineering rigor, clean code practices, and adherence to UK GDPR made the partnership a massive success.",
        avatar: "/avatars/avatar-1.webp",
      },
      {
        name: "Charlotte Davies",
        role: "Head of Product, FinTech",
        location: "Manchester, UK",
        rating: 5,
        review:
          "Delivering our high-frequency financial analytics platform required top-tier TypeScript and React talent. Mitsafe hit every milestone with perfection.",
        avatar: "/avatars/avatar-2.webp",
      },
      {
        name: "Alistair Campbell",
        role: "Managing Director, E-Commerce",
        location: "Edinburgh, UK",
        rating: 5,
        review:
          "Our headless commerce migration with Mitsafe doubled our site speed and drove a 35% increase in mobile conversions across the UK market.",
        avatar: "/avatars/avatar-3.webp",
      },
    ],
    stats: [
      { value: "220+", label: "UK & European Projects" },
      { value: "99.6%", label: "On-Time Sprint Delivery" },
      { value: "11+", label: "Years Experience" },
      { value: "100%", label: "UK GDPR Compliant" },
    ],
    mission: {
      title: "Building Resilient Digital Software for the Modern UK Economy",
      desc: "We equip ambitious British enterprises and scale-ups with world-class engineering, bulletproof security, and user experiences that capture market share.",
      image: "/images/uk_hero_bg.jpg",
    },
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Node.js",
      "Python",
      "Flutter",
      "AWS London",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
      "Kubernetes",
      "GraphQL",
    ],
    bottomCta: {
      title: "Ready to Accelerate Your UK Software Development?",
      desc: "Speak with our UK solutions architects today for a comprehensive technical proposal.",
    },
  },

  // =========================================================================
  // 4. Australia (Sydney & Melbourne Cloud Scale, Startups & Enterprise)
  // =========================================================================
  australia: {
    slug: "australia",
    countryName: "Australia",
    flag: "🇦🇺",
    timeZoneCode: "AEST / AEDT / AWST",
    seo: {
      title: "Software & Web Development Company in Australia | Mitsafe Sydney",
      description:
        "Mitsafe engineers premier custom web applications, mobile app development, scalable cloud systems, and AI automation for Australian enterprises and high-growth brands.",
      canonical: "/australia",
    },
    heroSlides: [
      {
        id: 0,
        eyebrow: "Digital Engineering For Australian Innovators",
        flag: "🇦🇺",
        title: "Powering Australian Enterprises With Scalable Digital Software",
        desc: "From Sydney and Melbourne to Brisbane and Perth, Mitsafe builds modern web applications, high-performance mobile apps, and robust cloud architectures engineered for sustainable Australian commercial growth.",
        primaryBtnText: "Book Free Australia Consultation",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore Our Services",
        secondaryBtnHref: "#services",
        image: "/images/australia_hero_bg.jpg",
        badges: ["AEST / AEDT Working Overlap", "Australian Privacy Principles (APP)", "100% IP & Code Ownership"],
      },
      {
        id: 1,
        eyebrow: "Cloud & Enterprise Microservices",
        flag: "🇦🇺",
        title: "Resilient Cloud Infrastructure, Modern APIs & Scalable Software",
        desc: "Modernize your Australian enterprise systems with AWS/Azure Sydney region deployments, microservices architectures, automated CI/CD pipelines, and zero-downtime database performance.",
        primaryBtnText: "Talk to Our Engineers",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore Architecture",
        secondaryBtnHref: "#services",
        image: "/images/australia_about_workspace.jpg",
        badges: ["AWS Sydney Region Ready", "99.95% Uptime SLA", "Agile Two-Week Sprints"],
      },
      {
        id: 2,
        eyebrow: "Native Mobile & AI Automation",
        flag: "🇦🇺",
        title: "Engaging Mobile Experiences & Intelligent AI Workflow Engines",
        desc: "Launch feature-rich iOS and Android mobile apps and integrate custom AI workflow automation designed to streamline operations and elevate customer loyalty across Australia.",
        primaryBtnText: "Get an Instant Quote",
        primaryBtnHref: "#quote",
        secondaryBtnText: "View Tech Capabilities",
        secondaryBtnHref: "#services",
        image: "/solutions_engineering.png",
        badges: ["iOS & Android Multiplatform", "Custom AI Integrations", "Direct Daily Standups"],
      },
    ],
    about: {
      badge: "Australian Tech Partner",
      headingPrefix: "MITSAFE AUSTRALIA",
      headingHighlight: "Engineering High-Velocity Digital Solutions for the APAC Region",
      p1: "Mitsafe partners with Australian startups, mid-market enterprises, and national brands to design, engineer, and scale high-impact software products. Whether launching a new digital venture or modernizing legacy infrastructure, our engineering squads deliver measurable commercial value.",
      p2: "We understand the nuances of the Australian technology landscape: direct daily collaboration during AEST and AEDT business hours, compliance with the Australian Privacy Principles (APP), transparent sprint cadence, and full intellectual property handover from sprint one.",
      experienceYears: "10+",
      checklist: [
        "AEST, AEDT & AWST Working Hour Alignment",
        "Strict Australian Privacy Act & APP Compliance",
        "Senior Full-Stack & Cloud Certified Engineers",
        "Two-Week Milestone-Driven Agile Sprints",
        "Complete Source Code & Intellectual Property Ownership",
        "Direct Jira, Slack & Microsoft Teams Integration",
      ],
      image: "/images/australia_about_workspace.jpg",
    },
    services: [
      {
        title: "Modern Web App Development",
        desc: "High-performance web portals, SaaS platforms, and enterprise web applications built with Next.js, React, and modern TypeScript architectures.",
        iconKey: "globe",
        slug: "/services/web-development",
        image: "/showcase/web_1.webp",
        bullets: [
          "Custom SaaS & Corporate Web Platforms",
          "Next.js, React 19 & High-Speed Rendering",
          "Responsive, Mobile-First Australian UI/UX",
          "Core Web Vitals & Local Search Optimization",
        ],
      },
      {
        title: "Mobile App Engineering",
        desc: "Native iOS and Android applications crafted for high engagement, offline resilience, and seamless integration with Australian payment ecosystems.",
        iconKey: "smartphone",
        slug: "/services/mobile-app-development",
        image: "/showcase/app_1.webp",
        bullets: [
          "Native iOS (Swift) & Android (Kotlin)",
          "Flutter & React Native Cross-Platform Agility",
          "Secure Biometric Auth & Cloud APIs",
          "App Store & Google Play Launch Management",
        ],
      },
      {
        title: "E-Commerce & Digital Retail",
        desc: "Scalable online storefronts, multi-vendor marketplaces, and headless digital commerce engines engineered for high Australian conversion rates.",
        iconKey: "layers",
        slug: "/services/ecommerce-solutions",
        image: "/showcase/web_3.webp",
        bullets: [
          "Headless E-Commerce & Custom Cart Architecture",
          "Afterpay, Zip, Stripe & Apple Pay Integration",
          "Australia Post & Regional Courier Logistics Sync",
          "Ultra-Fast Mobile Shopping Checkout Flows",
        ],
      },
      {
        title: "Custom Software & Cloud Systems",
        desc: "Enterprise ERP/CRM integrations, data workflows, and resilient AWS/Azure architectures deployed in Australian cloud regions.",
        iconKey: "database",
        slug: "/services/software-development",
        image: "/showcase/web_2.webp",
        bullets: [
          "Bespoke Enterprise Software & Backends",
          "AWS / Azure Sydney & Melbourne Region Hosting",
          "Microservices, REST & GraphQL Integrations",
          "Database Clustering & Automated Backups",
        ],
      },
      {
        title: "AI Workflows & Business Automation",
        desc: "Deploy customized AI copilots, intelligent customer service bots, and automated data processing pipelines to supercharge business productivity.",
        iconKey: "cpu",
        slug: "/services/ai-automation",
        image: "/showcase/seo_1.webp",
        bullets: [
          "Custom Enterprise AI Assistants & Chatbots",
          "Automated Document & Invoice Extraction",
          "Smart Data Workflows & CRM Integrations",
          "Real-time Predictive Analytics Dashboards",
        ],
      },
      {
        title: "Dedicated Australian Sprint Squads",
        desc: "Scale your internal engineering capacity with dedicated full-stack developers and QA specialists aligned with your exact Australian working hours.",
        iconKey: "server",
        slug: "/hire-developers",
        image: "/showcase/app_2.webp",
        bullets: [
          "Senior Vetted Full-Stack Developers",
          "Real-time AEST/AEDT Daily Collaboration",
          "Flexible Resource Scaling Without Lock-ins",
          "Direct Daily Commits to Your Repositories",
        ],
      },
    ],
    experienceFaqs: [
      {
        id: "item-1",
        title: "How do your developers collaborate with Australian timezones?",
        content:
          "We provide dedicated overlapping working hours during Australian Eastern Standard Time (AEST) and Australian Eastern Daylight Time (AEDT), with full coverage across AWST (Perth). Daily standups and real-time Slack channels ensure instant responsiveness.",
      },
      {
        id: "item-2",
        title: "How do you handle Australian data privacy and security?",
        content:
          "Our software engineering follows the Australian Privacy Principles (APPs) under the Privacy Act 1988. We configure secure data storage within Australian AWS or Microsoft Azure data centers (ap-southeast-2 Sydney / Melbourne) with full data encryption.",
      },
      {
        id: "item-3",
        title: "Who retains ownership of the code and intellectual property?",
        content:
          "You own 100% of all intellectual property, source code, design files, and documentation created. Everything is committed directly to your company’s Git repositories on a daily basis.",
      },
      {
        id: "item-4",
        title: "What is the typical timeframe to start an Australian project?",
        content:
          "We can complete initial technical discovery and architecture scoping within 3 to 5 business days. Dedicated engineers or full development squads can be onboarded into your sprints in under a week.",
      },
    ],
    reviews: [
      {
        name: "Lachlan Murphy",
        role: "Director of Technology",
        location: "Sydney, Australia",
        rating: 5,
        review:
          "Mitsafe delivered our enterprise SaaS platform on time and under budget. Having daily communication during AEST business hours made the entire experience frictionless.",
        avatar: "/avatars/avatar-1.webp",
      },
      {
        name: "Sophie Hemsworth",
        role: "Head of Digital Products",
        location: "Melbourne, Australia",
        rating: 5,
        review:
          "Their mobile app developers are world-class. Our Australian user base gave the new iOS and Android releases rave reviews for speed and intuitive UX.",
        avatar: "/avatars/avatar-2.webp",
      },
      {
        name: "Angus MacLeod",
        role: "Co-Founder & CTO",
        location: "Brisbane, Australia",
        rating: 5,
        review:
          "Mitsafe transformed our e-commerce architecture into a high-speed headless engine. Our conversion rate across Australia grew significantly post-launch.",
        avatar: "/avatars/avatar-3.webp",
      },
    ],
    stats: [
      { value: "190+", label: "APAC Deployments" },
      { value: "99.5%", label: "Satisfaction Rate" },
      { value: "10+", label: "Years Experience" },
      { value: "100%", label: "APP Privacy Compliant" },
    ],
    mission: {
      title: "Building Modern Digital Products for the Australian Future",
      desc: "We partner with visionary Australian leaders to architect scalable, high-performance web and mobile software engineered for market leadership.",
      image: "/images/australia_hero_bg.jpg",
    },
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Node.js",
      "Python",
      "Flutter",
      "AWS Sydney",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
      "GraphQL",
      "Redis",
    ],
    bottomCta: {
      title: "Ready to Build Your Next Australian Digital Venture?",
      desc: "Connect with our APAC solutions team today for a tailored technical discovery session.",
    },
  },

  // =========================================================================
  // 5. Switzerland (Zurich, Geneva & Crypto Valley High-Precision Engineering)
  // =========================================================================
  switzerland: {
    slug: "switzerland",
    countryName: "Switzerland",
    flag: "🇨🇭",
    timeZoneCode: "CET / CEST",
    seo: {
      title: "Software & Web Development Company in Switzerland | Mitsafe Zurich",
      description:
        "Mitsafe delivers high-precision custom software, secure web platforms, fintech applications, and cloud engineering for Swiss enterprises and innovators.",
      canonical: "/switzerland",
    },
    heroSlides: [
      {
        id: 0,
        eyebrow: "Swiss Precision Software Engineering",
        flag: "🇨🇭",
        title: "Engineering High-Precision Digital Software for Swiss Enterprises",
        desc: "Partner with dedicated software engineers to build ultra-secure web platforms, bespoke financial technology systems, and high-performance applications tailored for Zurich, Geneva, and the Swiss innovation ecosystem.",
        primaryBtnText: "Request Swiss Consultation",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Discover Our Capabilities",
        secondaryBtnHref: "#services",
        image: "/images/switzerland_hero_bg.jpg",
        badges: ["CET Time Zone Aligned", "Swiss FADP & GDPR Compliant", "100% IP & Data Sovereignty"],
      },
      {
        id: 1,
        eyebrow: "FinTech & High-Security Systems",
        flag: "🇨🇭",
        title: "Banking-Grade Security, Resilient Cloud & Custom Enterprise Portals",
        desc: "Build mission-critical digital systems with end-to-end data encryption, Swiss data sovereignty compliance, zero-downtime databases, and automated microservices architectures.",
        primaryBtnText: "Consult Technical Architects",
        primaryBtnHref: "#quote",
        secondaryBtnText: "View Architecture",
        secondaryBtnHref: "#services",
        image: "/images/switzerland_about_workspace.jpg",
        badges: ["High-Security Encryption", "99.99% Cloud Reliability", "Confidential Non-Disclosure"],
      },
      {
        id: 2,
        eyebrow: "Modern Mobile & Intelligent AI",
        flag: "🇨🇭",
        title: "Flawless Mobile Apps & Intelligent AI Automation for Swiss Brands",
        desc: "From native iOS and Android apps with multilingual Swiss German and French localization to intelligent enterprise document automation, we turn complex challenges into elegant software.",
        primaryBtnText: "Get an Instant Proposal",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore Tech Stack",
        secondaryBtnHref: "#services",
        image: "/portfolio_enterprise.webp",
        badges: ["Multilingual UI Architecture", "Next.js & React 19", "Transparent Agile Delivery"],
      },
    ],
    about: {
      badge: "Swiss Precision & Quality",
      headingPrefix: "MITSAFE SWITZERLAND",
      headingHighlight: "Crafting High-Precision, Secure Digital Products",
      p1: "Mitsafe delivers enterprise-grade software engineering, custom web applications, and resilient cloud architectures to Swiss financial institutions, MedTech innovators, and leading enterprises across Zurich, Geneva, Basel, and Zug.",
      p2: "Our delivery philosophy matches the Swiss standard of uncompromising excellence: strict adherence to the revised Swiss Federal Act on Data Protection (FADP) and GDPR, seamless CET timezone communication, transparent sprint retrospectives, and 100% intellectual property ownership.",
      experienceYears: "11+",
      checklist: [
        "Full Central European Time (CET) Alignment",
        "Swiss Federal Act on Data Protection (FADP) & GDPR Ready",
        "Banking-Grade Security Protocols & Strict NDAs",
        "Senior Solutions Architects & Full-Stack Developers",
        "Multilingual Architecture (DE, FR, IT, EN)",
        "100% Source Code & Intellectual Property Handover",
      ],
      image: "/images/switzerland_about_workspace.jpg",
    },
    services: [
      {
        title: "Enterprise Web Applications",
        desc: "Secure, ultra-fast web platforms and SaaS portals engineered with clean architectural design, Next.js, and modern TypeScript.",
        iconKey: "globe",
        slug: "/services/web-development",
        image: "/showcase/web_1.webp",
        bullets: [
          "Bespoke Enterprise Portals & SaaS Systems",
          "Next.js, React 19 & Type-Safe Architecture",
          "Multilingual (German, French, English) UI/UX",
          "High Performance & Core Web Vitals Excellence",
        ],
      },
      {
        title: "FinTech & Secure Mobile Apps",
        desc: "Native iOS and Android applications engineered for security-conscious Swiss users with biometric authorization and seamless API connectivity.",
        iconKey: "smartphone",
        slug: "/services/mobile-app-development",
        image: "/showcase/app_1.webp",
        bullets: [
          "Native Swift, Kotlin & Flutter Multiplatform",
          "Biometric Authentication & Encrypted Storage",
          "Real-time Financial & Data Feeds",
          "App Store & Google Play Release Lifecycle",
        ],
      },
      {
        title: "E-Commerce & Digital Commerce",
        desc: "High-end luxury digital stores, multi-currency commerce engines, and headless platforms engineered for Swiss Franc (CHF) conversion.",
        iconKey: "layers",
        slug: "/services/ecommerce-solutions",
        image: "/showcase/web_3.webp",
        bullets: [
          "Multi-Currency (CHF, EUR, USD) Configuration",
          "TWINT, PostFinance, Stripe & Apple Pay Integration",
          "Automated Swiss VAT & Invoicing Compliance",
          "Ultra-Fast Headless Checkout Architectures",
        ],
      },
      {
        title: "Secure Cloud Architecture",
        desc: "High-availability cloud systems deployed on AWS, Azure, or Swiss-based data centers with strict encryption and zero-downtime guarantees.",
        iconKey: "database",
        slug: "/services/software-development",
        image: "/showcase/web_2.webp",
        bullets: [
          "AWS Europe (Zurich) & Azure Swiss Cloud Setups",
          "Microservices, Containerization & Kubernetes",
          "End-to-End Encryption at Rest and in Transit",
          "Automated Disaster Recovery & Database Sync",
        ],
      },
      {
        title: "AI Automation & Document Parsing",
        desc: "Enterprise AI copilots, intelligent document extraction, and workflow automation built to optimize operational efficiency.",
        iconKey: "cpu",
        slug: "/services/ai-automation",
        image: "/showcase/seo_1.webp",
        bullets: [
          "Custom LLM & Private Enterprise AI Integration",
          "Multilingual Document & Contract Extraction",
          "Intelligent Workflow Automation Pipelines",
          "Predictive Analytics & Executive Dashboards",
        ],
      },
      {
        title: "Dedicated Swiss Engineering Squads",
        desc: "Augment your IT department with senior developers and technical architects working synchronously with your Swiss business schedule.",
        iconKey: "server",
        slug: "/hire-developers",
        image: "/showcase/app_2.webp",
        bullets: [
          "Senior Vetted Full-Stack & Cloud Engineers",
          "Direct Daily CET Standups & Slack Integration",
          "Flexible Sprint Scaling with Zero Admin Burden",
          "Direct Daily Commits to Your Repositories",
        ],
      },
    ],
    experienceFaqs: [
      {
        id: "item-1",
        title: "How does Mitsafe ensure compliance with Swiss data protection laws?",
        content:
          "All software architecture is engineered to comply with the revised Swiss Federal Act on Data Protection (FADP) and EU GDPR. We configure data storage in Swiss cloud availability zones (e.g. AWS Europe Zurich region) with zero unauthorized external transfers.",
      },
      {
        id: "item-2",
        title: "How do your working hours align with Swiss businesses?",
        content:
          "Our engineering teams operate in full alignment with Central European Time (CET / CEST). We participate in daily sprint ceremonies, code reviews, and maintain instant communication over Slack, Teams, and Jira.",
      },
      {
        id: "item-3",
        title: "Can you support Swiss-specific payment gateways like TWINT and PostFinance?",
        content:
          "Yes. We regularly integrate popular Swiss payment methods including TWINT, PostFinance, Swiss QR-Bill invoicing, Stripe, Apple Pay, and multi-currency processing in CHF and EUR.",
      },
      {
        id: "item-4",
        title: "What is your intellectual property protection framework?",
        content:
          "We sign comprehensive non-disclosure agreements (NDAs) and transfer 100% full intellectual property and source code ownership to your company. All code is committed directly to your enterprise repositories.",
      },
    ],
    reviews: [
      {
        name: "Beat Brunner",
        role: "Chief Information Officer, WealthTech",
        location: "Zurich, Switzerland",
        rating: 5,
        review:
          "Mitsafe’s engineering precision and commitment to Swiss data privacy standards made them the ideal development partner for our digital transformation.",
        avatar: "/avatars/avatar-1.webp",
      },
      {
        name: "Elena Von Arx",
        role: "Product Lead, MedTech",
        location: "Geneva, Switzerland",
        rating: 5,
        review:
          "Their developers delivered our multilingual medical portal with extraordinary code quality and attention to detail. Working in CET was seamless.",
        avatar: "/avatars/avatar-2.webp",
      },
      {
        name: "Lukas Meier",
        role: "Founder & CEO, SaaS",
        location: "Zug, Switzerland",
        rating: 5,
        review:
          "From architecture scoping to production launch, Mitsafe exhibited world-class technical competence. Our platform has handled peak loads effortlessly.",
        avatar: "/avatars/avatar-3.webp",
      },
    ],
    stats: [
      { value: "160+", label: "European Deployments" },
      { value: "99.8%", label: "System Reliability" },
      { value: "11+", label: "Years Experience" },
      { value: "100%", label: "Swiss FADP Compliant" },
    ],
    mission: {
      title: "Pioneering High-Precision Software for Swiss Leaders",
      desc: "We partner with visionary Swiss enterprises to build resilient, elegant, and secure digital software engineered for long-term commercial success.",
      image: "/images/switzerland_hero_bg.jpg",
    },
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Node.js",
      "Python",
      "Flutter",
      "AWS Zurich",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
      "Kubernetes",
      "GraphQL",
    ],
    bottomCta: {
      title: "Ready to Build High-Precision Software in Switzerland?",
      desc: "Schedule a confidential technical consultation with our solutions architects today.",
    },
  },

  // =========================================================================
  // 6. Netherlands (Amsterdam Silicon Canals, SaaS & Logistics)
  // =========================================================================
  netherlands: {
    slug: "netherlands",
    countryName: "Netherlands",
    flag: "🇳🇱",
    timeZoneCode: "CET / CEST",
    seo: {
      title: "Software & Web Development Company in Netherlands | Mitsafe Amsterdam",
      description:
        "Mitsafe delivers modern web applications, scalable SaaS platforms, mobile app development, and AI automation for Dutch enterprises and fast-growing tech brands.",
      canonical: "/netherlands",
    },
    heroSlides: [
      {
        id: 0,
        eyebrow: "Digital Engineering For Dutch Tech Leaders",
        flag: "🇳🇱",
        title: "Building High-Scale Web, Mobile & Cloud Software for Dutch Enterprises",
        desc: "Partner with expert full-stack engineers to craft high-velocity SaaS platforms, modern web applications, and intuitive mobile solutions tailored for Amsterdam, Rotterdam, and the vibrant Netherlands tech ecosystem.",
        primaryBtnText: "Book a Free Dutch Discovery Call",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore Our Solutions",
        secondaryBtnHref: "#services",
        image: "/images/netherlands_hero_bg.jpg",
        badges: ["CET Time Zone Aligned", "GDPR & EU Privacy Compliant", "100% IP & Code Ownership"],
      },
      {
        id: 1,
        eyebrow: "SaaS Scale & Cloud Architecture",
        flag: "🇳🇱",
        title: "High-Traffic Microservices, Cloud DevOps & Resilient Architectures",
        desc: "Scale your Dutch digital platforms with automated CI/CD pipelines, AWS/GCP European cloud infrastructure, high-throughput message brokers, and zero-downtime database clusters.",
        primaryBtnText: "Consult Our Engineers",
        primaryBtnHref: "#quote",
        secondaryBtnText: "View Architecture",
        secondaryBtnHref: "#services",
        image: "/images/netherlands_about_workspace.jpg",
        badges: ["99.9% Uptime SLA", "EU Cloud Optimization", "Automated DevOps"],
      },
      {
        id: 2,
        eyebrow: "Modern Mobile & AI Automation",
        flag: "🇳🇱",
        title: "Seamless Mobile Apps & Intelligent AI Automation Built to Scale",
        desc: "Launch engaging cross-platform mobile apps on Flutter and React Native and integrate custom AI workflow automation to eliminate repetitive tasks and accelerate business growth.",
        primaryBtnText: "Get an Instant Scope",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore Tech Stack",
        secondaryBtnHref: "#services",
        image: "/portfolio_web_dev.webp",
        badges: ["iOS & Android Store Ready", "Next.js & React 19", "Two-Week Agile Sprints"],
      },
    ],
    about: {
      badge: "Netherlands Tech Partner",
      headingPrefix: "MITSAFE NETHERLANDS",
      headingHighlight: "Engineering Scalable Digital Products for the European Market",
      p1: "Mitsafe provides full-cycle software development, bespoke web platforms, and cloud engineering to Dutch scale-ups, logistics leaders, and digital enterprises across Amsterdam, Rotterdam, Utrecht, and Eindhoven.",
      p2: "Our engineering model aligns seamlessly with Dutch tech standards: full CET timezone collaboration, rigorous GDPR data privacy compliance, pragmatic two-week agile sprints, and 100% intellectual property transfer from sprint one.",
      experienceYears: "10+",
      checklist: [
        "Full Central European Time (CET) Collaboration",
        "Strict EU GDPR Compliance & Secure Data Handling",
        "Senior Full-Stack Developers & Cloud Architects",
        "Milestone-Based Two-Week Agile Sprints",
        "Complete Source Code & Intellectual Property Ownership",
        "Direct Daily Standups & Slack/Teams Integration",
      ],
      image: "/images/netherlands_about_workspace.jpg",
    },
    services: [
      {
        title: "Modern Web Application Engineering",
        desc: "Scalable SaaS platforms, corporate portals, and high-converting web applications built on Next.js, React, and type-safe TypeScript backends.",
        iconKey: "globe",
        slug: "/services/web-development",
        image: "/showcase/web_1.webp",
        bullets: [
          "Bespoke SaaS Platforms & Enterprise Portals",
          "Next.js 15, React 19 & High-Velocity UI/UX",
          "High-Speed Architecture & Core Web Vitals",
          "Modular Component Systems & Clean Code",
        ],
      },
      {
        title: "iOS & Android Mobile Apps",
        desc: "Intuitive native and multiplatform mobile applications engineered for high performance, smooth retention, and seamless user experiences.",
        iconKey: "smartphone",
        slug: "/services/mobile-app-development",
        image: "/showcase/app_1.webp",
        bullets: [
          "Flutter & React Native Cross-Platform Agility",
          "Native iOS (Swift) & Android (Kotlin) Precision",
          "Real-time Push Notifications & Offline Sync",
          "App Store & Google Play Deployment Lifecycle",
        ],
      },
      {
        title: "Headless E-Commerce Engines",
        desc: "High-conversion digital storefronts, B2B marketplaces, and headless commerce architectures built for fast European checkout and growth.",
        iconKey: "layers",
        slug: "/services/ecommerce-solutions",
        image: "/showcase/web_3.webp",
        bullets: [
          "Headless E-Commerce & Microservices Setup",
          "iDEAL, Mollie, Adyen, Stripe & Klarna Integration",
          "Automated Inventory, ERP & Logistics Sync",
          "Optimized Mobile Checkout Funnels",
        ],
      },
      {
        title: "Cloud Infrastructure & DevOps",
        desc: "Resilient cloud architectures on AWS, GCP, and Azure with automated CI/CD pipelines, containerization, and 99.9% uptime guarantees.",
        iconKey: "database",
        slug: "/services/software-development",
        image: "/showcase/web_2.webp",
        bullets: [
          "AWS / GCP Amsterdam & European Region Hosting",
          "Docker, Kubernetes & Infrastructure as Code",
          "REST & GraphQL Microservices Architecture",
          "Database Clustering & Automated Backup Protocols",
        ],
      },
      {
        title: "AI Workflows & Business Automation",
        desc: "Custom generative AI assistants, automated document extraction, and smart data pipelines that reduce manual overhead for Dutch businesses.",
        iconKey: "cpu",
        slug: "/services/ai-automation",
        image: "/showcase/seo_1.webp",
        bullets: [
          "Custom Enterprise AI Copilots & Chatbots",
          "Intelligent Invoice & Supply Chain OCR",
          "Automated Business Workflow Pipelines",
          "Real-time Analytics & Executive Dashboards",
        ],
      },
      {
        title: "Dedicated Dutch Sprint Squads",
        desc: "Scale your engineering output with seasoned full-stack developers and technical leads working directly in your CET business hours.",
        iconKey: "server",
        slug: "/hire-developers",
        image: "/showcase/app_2.webp",
        bullets: [
          "Vetted Senior Full-Stack & Mobile Engineers",
          "Direct Daily Slack Integration & Standups",
          "Flexible Engagements with Zero Recruitment Hassle",
          "Daily Code Commits Directly to Your Repos",
        ],
      },
    ],
    experienceFaqs: [
      {
        id: "item-1",
        title: "How do your developers coordinate with Dutch teams?",
        content:
          "We offer complete working hour alignment with Central European Time (CET). Our developers participate in daily morning standups, sprint planning, and stay in continuous real-time contact via Slack, Teams, and Jira.",
      },
      {
        id: "item-2",
        title: "Can you integrate Dutch payment methods like iDEAL, Mollie, and Adyen?",
        content:
          "Yes. We have deep experience integrating iDEAL (via Mollie, Adyen, and Stripe), Klarna, Bancontact, Apple Pay, and automated SEPA direct debit workflows for the Dutch and Benelux markets.",
      },
      {
        id: "item-3",
        title: "How is data privacy and EU GDPR handled?",
        content:
          "All software architecture adheres strictly to EU GDPR regulations. We ensure encryption at rest and in transit, implement proper data retention controls, and deploy applications on European cloud regions (e.g. AWS eu-central-1 Frankfurt / eu-west-1 Ireland).",
      },
      {
        id: "item-4",
        title: "Who owns the code and intellectual property produced?",
        content:
          "Your organization retains 100% full intellectual property and source code ownership. Every code commit and documentation file is pushed directly to your organization’s Git repositories.",
      },
    ],
    reviews: [
      {
        name: "Willem van Dijk",
        role: "VP of Technology, SaaS",
        location: "Amsterdam, Netherlands",
        rating: 5,
        review:
          "Mitsafe’s engineering speed and architecture quality have been phenomenal. They integrated directly into our Amsterdam sprint cycle and accelerated our release roadmap by months.",
        avatar: "/avatars/avatar-1.webp",
      },
      {
        name: "Anouk de Boer",
        role: "Head of Product, Logistics",
        location: "Rotterdam, Netherlands",
        rating: 5,
        review:
          "The custom supply chain tracking portal Mitsafe built for us handled our European logistics volume flawlessly. Their CET alignment was a massive advantage.",
        avatar: "/avatars/avatar-2.webp",
      },
      {
        name: "Martijn Bakker",
        role: "Chief Architect, E-Com",
        location: "Utrecht, Netherlands",
        rating: 5,
        review:
          "Our headless e-commerce store with iDEAL integration performed beyond expectations. Site speed and mobile conversion rates jumped significantly.",
        avatar: "/avatars/avatar-3.webp",
      },
    ],
    stats: [
      { value: "175+", label: "European Deployments" },
      { value: "99.6%", label: "On-Time Delivery" },
      { value: "10+", label: "Years Experience" },
      { value: "100%", label: "GDPR Compliant" },
    ],
    mission: {
      title: "Engineering Digital Software for the Future of European Business",
      desc: "We partner with visionary Dutch enterprises to build scalable, high-performance web and mobile software engineered for market dominance.",
      image: "/images/netherlands_hero_bg.jpg",
    },
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Node.js",
      "Python",
      "Flutter",
      "AWS Europe",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
      "Kubernetes",
      "GraphQL",
    ],
    bottomCta: {
      title: "Ready to Scale Your Software Development in the Netherlands?",
      desc: "Contact our technical solutions team today for an in-depth project proposal.",
    },
  },

  // =========================================================================
  // 7. New Zealand (Auckland & Wellington Cloud Startups & Scale)
  // =========================================================================
  "new-zealand": {
    slug: "new-zealand",
    countryName: "New Zealand",
    flag: "🇳🇿",
    timeZoneCode: "NZST / NZDT",
    seo: {
      title: "Software & Web App Development Company in New Zealand | Mitsafe",
      description:
        "Mitsafe delivers custom web platforms, mobile app development, cloud architecture, and AI automation for New Zealand startups and established enterprises.",
      canonical: "/new-zealand",
    },
    heroSlides: [
      {
        id: 0,
        eyebrow: "Digital Engineering For Kiwi Innovators",
        flag: "🇳🇿",
        title: "Engineering Scalable Digital Software for New Zealand Businesses",
        desc: "Partner with senior software developers to build resilient SaaS platforms, high-converting websites, and feature-rich mobile apps engineered for Auckland, Wellington, Christchurch, and the growing Kiwi tech ecosystem.",
        primaryBtnText: "Book a Free NZ Discovery Call",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore Our Solutions",
        secondaryBtnHref: "#services",
        image: "/solutions_engineering.png",
        badges: ["NZST / NZDT Working Overlap", "NZ Privacy Act 2020 Compliant", "100% IP & Code Ownership"],
      },
      {
        id: 1,
        eyebrow: "Cloud Architecture & High-Scale SaaS",
        flag: "🇳🇿",
        title: "Resilient Cloud Infrastructure, Modern APIs & Scalable Backends",
        desc: "Modernize your New Zealand business with cloud-native AWS/Azure deployments, microservices architectures, automated CI/CD pipelines, and zero-downtime database performance.",
        primaryBtnText: "Talk to Our Engineers",
        primaryBtnHref: "#quote",
        secondaryBtnText: "View Solutions",
        secondaryBtnHref: "#services",
        image: "/portfolio_hero.webp",
        badges: ["AWS Australasia Region Ready", "99.9% Uptime Guarantee", "Agile Two-Week Sprints"],
      },
      {
        id: 2,
        eyebrow: "Mobile App Development & AI",
        flag: "🇳🇿",
        title: "Intuitive Mobile Experiences & Intelligent AI Workflow Engines",
        desc: "Launch engaging iOS and Android mobile apps and integrate custom AI workflow automation designed to streamline operations and scale your New Zealand brand globally.",
        primaryBtnText: "Get an Instant Scope",
        primaryBtnHref: "#quote",
        secondaryBtnText: "Explore Tech Stack",
        secondaryBtnHref: "#services",
        image: "/team_culture.webp",
        badges: ["iOS & Android Multiplatform", "Custom AI Integrations", "Direct Daily Standups"],
      },
    ],
    about: {
      badge: "New Zealand Tech Partner",
      headingPrefix: "MITSAFE NEW ZEALAND",
      headingHighlight: "Empowering Kiwi Startups & Enterprises with World-Class Engineering",
      p1: "Mitsafe delivers full-cycle software engineering, bespoke web applications, and cloud modernization to Kiwi startups, growth-stage brands, and established enterprises across Auckland, Wellington, Christchurch, and beyond.",
      p2: "We understand the collaborative Kiwi product culture: reliable daily communication during NZST and NZDT business hours, compliance with the New Zealand Privacy Act 2020, transparent milestone delivery, and 100% intellectual property ownership from sprint one.",
      experienceYears: "10+",
      checklist: [
        "NZST & NZDT Working Hour Alignment",
        "Full New Zealand Privacy Act 2020 Compliance",
        "Senior Full-Stack & Cloud Certified Engineers",
        "Transparent Two-Week Agile Sprint Cadence",
        "100% Source Code & Intellectual Property Handover",
        "Direct Jira, Slack & Microsoft Teams Daily Sync",
      ],
      image: "/engineering_culture.webp",
    },
    services: [
      {
        title: "Custom Web App Development",
        desc: "High-performance SaaS platforms, customer portals, and fast web applications built on Next.js, React, and modern TypeScript architectures.",
        iconKey: "globe",
        slug: "/services/web-development",
        image: "/showcase/web_1.webp",
        bullets: [
          "Custom SaaS Platforms & Enterprise Web Portals",
          "Next.js 15, React 19 & High-Speed Rendering",
          "Mobile-First Responsive Kiwi UI/UX",
          "Core Web Vitals & Local Search Optimization",
        ],
      },
      {
        title: "Mobile App Development",
        desc: "Native iOS and Android applications crafted for high user retention, smooth performance, and seamless payment integration.",
        iconKey: "smartphone",
        slug: "/services/mobile-app-development",
        image: "/showcase/app_1.webp",
        bullets: [
          "Native iOS (Swift) & Android (Kotlin)",
          "Flutter & React Native Cross-Platform Agility",
          "Secure Biometrics & Real-time Cloud APIs",
          "App Store & Google Play Launch Management",
        ],
      },
      {
        title: "E-Commerce & Digital Commerce",
        desc: "High-conversion online storefronts, multi-vendor marketplaces, and headless digital commerce engines engineered for New Zealand Dollar (NZD) sales.",
        iconKey: "layers",
        slug: "/services/ecommerce-solutions",
        image: "/showcase/web_3.webp",
        bullets: [
          "Headless E-Commerce & Custom Cart Setup",
          "Windcave, Stripe, Afterpay & Apple Pay Integration",
          "NZ Post & Regional Courier Logistics Sync",
          "High-Conversion Mobile Shopping Checkout UX",
        ],
      },
      {
        title: "Cloud Infrastructure & APIs",
        desc: "Resilient cloud systems on AWS and Azure with automated CI/CD deployment pipelines, containerization, and 99.9% uptime guarantees.",
        iconKey: "database",
        slug: "/services/software-development",
        image: "/showcase/web_2.webp",
        bullets: [
          "AWS / Azure Australasia Cloud Region Hosting",
          "Docker, Kubernetes & Infrastructure as Code",
          "REST & GraphQL Microservices Architecture",
          "Database Clustering & Automated Backup Protocols",
        ],
      },
      {
        title: "AI Workflows & Business Automation",
        desc: "Deploy customized AI copilots, intelligent customer service bots, and automated data pipelines to supercharge business productivity.",
        iconKey: "cpu",
        slug: "/services/ai-automation",
        image: "/showcase/seo_1.webp",
        bullets: [
          "Custom Enterprise AI Assistants & Chatbots",
          "Automated Document & Invoice Extraction",
          "Smart Data Workflows & CRM Integrations",
          "Real-time Predictive Analytics Dashboards",
        ],
      },
      {
        title: "Dedicated Kiwi Sprint Squads",
        desc: "Scale your internal engineering capacity with dedicated full-stack developers and QA specialists aligned with your exact NZ business schedule.",
        iconKey: "server",
        slug: "/hire-developers",
        image: "/showcase/app_2.webp",
        bullets: [
          "Senior Vetted Full-Stack Developers",
          "Real-time NZST/NZDT Daily Collaboration",
          "Flexible Resource Scaling Without Overhead",
          "Direct Daily Commits to Your Repositories",
        ],
      },
    ],
    experienceFaqs: [
      {
        id: "item-1",
        title: "How do your developers collaborate with New Zealand timezones?",
        content:
          "We offer dedicated overlapping working hours during New Zealand Standard Time (NZST) and New Zealand Daylight Time (NZDT). Daily standups and real-time Slack channels ensure smooth, uninterrupted project momentum.",
      },
      {
        id: "item-2",
        title: "Can you integrate New Zealand payment gateways like Windcave?",
        content:
          "Yes. We regularly integrate popular New Zealand payment methods including Windcave, Stripe, Afterpay, Apple Pay, and automated direct banking workflows in NZD.",
      },
      {
        id: "item-3",
        title: "How is data privacy handled under New Zealand law?",
        content:
          "All software architecture complies with the New Zealand Privacy Act 2020. We implement strict data encryption, access controls, and deploy applications to secure Australasian cloud availability zones.",
      },
      {
        id: "item-4",
        title: "Who retains ownership of the source code and intellectual property?",
        content:
          "You retain 100% full intellectual property and source code ownership. Every code commit and documentation file is committed directly to your company’s Git repositories.",
      },
    ],
    reviews: [
      {
        name: "Callum Thornton",
        role: "Head of Product, SaaS",
        location: "Auckland, New Zealand",
        rating: 5,
        review:
          "Mitsafe built our web platform with exceptional craftsmanship and speed. Having direct communication during NZST hours made the entire collaboration a pleasure.",
        avatar: "/avatars/avatar-1.webp",
      },
      {
        name: "Jessica Te Awa",
        role: "Digital Transformation Lead",
        location: "Wellington, New Zealand",
        rating: 5,
        review:
          "The mobile app Mitsafe developed for our Kiwi customers received glowing reviews for speed and intuitive UI. We could not have asked for a better development partner.",
        avatar: "/avatars/avatar-2.webp",
      },
      {
        name: "Hamish Reid",
        role: "Co-Founder & CTO",
        location: "Christchurch, New Zealand",
        rating: 5,
        review:
          "Our headless commerce rollout was seamless. Site speed and checkout conversions across New Zealand increased dramatically following the launch.",
        avatar: "/avatars/avatar-3.webp",
      },
    ],
    stats: [
      { value: "140+", label: "Australasia Projects" },
      { value: "99.5%", label: "Client Satisfaction" },
      { value: "10+", label: "Years Experience" },
      { value: "100%", label: "NZ Privacy Compliant" },
    ],
    mission: {
      title: "Crafting Resilient Digital Products for New Zealand Innovators",
      desc: "We partner with visionary Kiwi entrepreneurs and enterprises to build scalable, high-performance web and mobile software engineered for global impact.",
      image: "/portfolio_hero.webp",
    },
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Node.js",
      "Python",
      "Flutter",
      "AWS Australasia",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
      "GraphQL",
      "Redis",
    ],
    bottomCta: {
      title: "Ready to Build Scalable Software in New Zealand?",
      desc: "Connect with our Australasia solutions team today for a comprehensive technical discovery session.",
    },
  },
};
