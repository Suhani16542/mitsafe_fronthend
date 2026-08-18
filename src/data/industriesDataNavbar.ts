import React from "react";
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
  Briefcase
} from "lucide-react";

export interface TechSolutionItem {
  title: string;
  whatItDoes: string;
  whyUseful: string;
  mainBenefit: string;
  whereUsed: string;
  iconName: string;
}

export interface TechComparisonItem {
  technologyName: string;
  bestFor: string;
  speed: "Ultra Fast" | "Fast" | "Balanced";
  scalability: "Ultra High" | "High" | "Standard";
  costLevel: "Cost Effective" | "Balanced" | "Enterprise Premium";
  mainBenefit: string;
}

export interface IndustryUseCase {
  title: string;
  technology: string;
  application: string;
  impact: string;
  iconName: string;
}

export interface IndustryServiceRef {
  title: string;
  slug: string;
  description: string;
  iconName: string;
}

export interface IndustryDetail {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  badge: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubheadline: string;
  heroImage: string;
  overviewImage: string;
  description: string;
  overview: {
    whatIsIt: string;
    challenges: string[];
    whatBusinessesNeed: string[];
    howMitsafeSolves: string;
  };
  solutions: string[];
  techSolutions: TechSolutionItem[];
  techComparison: TechComparisonItem[];
  keyBenefits: {
    title: string;
    description: string;
  }[];
  industryServices: IndustryServiceRef[];
  useCases: IndustryUseCase[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  technologies: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  keywords?: string[];
}

export const navbarIndustriesData: IndustryDetail[] = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    slug: "healthcare-lifesciences",
    iconName: "HeartPulse",
    badge: "HIPAA & SOC2 Compliant",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "Healthcare & Life Sciences",
    heroSubheadline: "Build secure, HIPAA-compliant patient portals, sub-second telehealth platforms, and automated clinical EHR workflows designed specifically for modern healthcare providers.",
    heroImage: "/industries_showcase.png",
    overviewImage: "/about_company.png",
    description: "HIPAA-compliant platforms & telehealth systems.",
    keywords: [
      "healthcare app development company",
      "healthcare management system software",
      "healthcare app development",
      "healthcare software development",
      "healthcare software development company",
      "custom healthcare software solutions",
      "telemedicine app development",
      "ehr software development",
      "hipaa compliant software development",
      "patient portal software development",
      "medical app development",
      "clinical workflow automation software",
      "healthcare web development",
      "hospital management software",
      "healthcare digital transformation",
    ],
    overview: {
      whatIsIt: "Healthcare technology connects patients, doctors, and medical data through encrypted digital software portals, telemetry systems, and telehealth networks.",
      challenges: [
        "Strict HIPAA compliance enforcement & data privacy risks.",
        "Fragmented patient records stuck in legacy hospital EMR systems.",
        "High video latency & connection dropouts during telehealth calls.",
        "Manual clinical documentation causing physician burnout."
      ],
      whatBusinessesNeed: [
        "Zero-trust HIPAA compliant cloud database infrastructure.",
        "Interoperable HL7 FHIR APIs connecting hospital systems.",
        "Sub-second WebRTC video streaming for virtual care.",
        "AI-assisted clinical note transcription and chart summarization."
      ],
      howMitsafeSolves: "Mitsafe architects end-to-end HIPAA compliant digital ecosystems with AES-256 encrypted data pipelines, instant EHR integrations, and low-latency telehealth video Consultation portals."
    },
    solutions: ["Telehealth Architectures", "Patient Records Portals", "Clinical AI Tools", "Medical Device IoT Integrations"],
    techSolutions: [
      {
        title: "Telehealth & Remote Care Hubs",
        whatItDoes: "Enables secure 1-on-1 and multi-party HD video consultations between doctors and patients.",
        whyUseful: "Eliminates physical travel barriers while maintaining full HIPAA compliance.",
        mainBenefit: "99.99% video uptime and sub-second stream initialization.",
        whereUsed: "Virtual clinics, specialist consultations, & home care monitoring.",
        iconName: "HeartPulse"
      },
      {
        title: "HL7 FHIR Interoperability API",
        whatItDoes: "Standardizes patient record exchanges across Epic, Cerner, and custom clinic databases.",
        whyUseful: "Unifies patient health histories into a single coherent medical timeline.",
        mainBenefit: "Reduces duplicate diagnostic tests by up to 35%.",
        whereUsed: "Hospitals, diagnostic labs, & pharmacy networks.",
        iconName: "Activity"
      },
      {
        title: "AI Clinical Note Transcription",
        whatItDoes: "Converts doctor-patient audio conversations into structured medical chart notes.",
        whyUseful: "Saves physicians hours of manual typing after patient appointments.",
        mainBenefit: "Saves doctors up to 2 hours of daily administrative work.",
        whereUsed: "Outpatient clinics & emergency care departments.",
        iconName: "Cpu"
      },
      {
        title: "Medical Device Telemetry IoT",
        whatItDoes: "Collects continuous vitals data (heart rate, blood pressure, oxygen) from wearable sensors.",
        whyUseful: "Alerts care teams automatically when patient telemetry reaches critical thresholds.",
        mainBenefit: "Early detection of patient deterioration before emergency events.",
        whereUsed: "Post-surgery recovery & chronic disease management.",
        iconName: "Gauge"
      }
    ],
    techComparison: [
      {
        technologyName: "Next.js 16 + WebRTC",
        bestFor: "Real-time Telehealth & Patient Portals",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-150ms video connection & 99+ Lighthouse score."
      },
      {
        technologyName: "Python FastAPI + HL7 FHIR",
        bestFor: "EHR Data Integration & Microservices",
        speed: "Fast",
        scalability: "High",
        costLevel: "Balanced",
        mainBenefit: "Seamless hospital database sync with zero data loss."
      },
      {
        technologyName: "Private RAG Medical AI",
        bestFor: "Automated Clinical Documentation",
        speed: "Fast",
        scalability: "High",
        costLevel: "Enterprise Premium",
        mainBenefit: "Reduces clinical chart paperwork by 60%."
      }
    ],
    keyBenefits: [
      {
        title: "100% HIPAA & SOC2 Certified Security",
        description: "Bank-grade AES-256 encryption in transit and at rest with immutable audit logs."
      },
      {
        title: "Sub-200ms Record Queries",
        description: "Optimized database index structures for instant patient record retrieves during consultations."
      },
      {
        title: "Seamless Hospital EHR Sync",
        description: "Plug-and-play middleware connecting directly with Epic, Cerner, and Allscripts."
      },
      {
        title: "99.99% Telehealth Stream Uptime",
        description: "Multi-region WebRTC edge servers ensuring zero dropped video sessions."
      },
      {
        title: "Reduced Admin Overhead",
        description: "Automated appointment scheduling, intake forms, and prescription routing."
      },
      {
        title: "Future-Proof Architecture",
        description: "Modular cloud microservices built on modern containerized infrastructure."
      }
    ],
    industryServices: [
      {
        title: "Healthcare Web Development",
        slug: "web-development",
        description: "HIPAA-compliant web applications and patient access portals.",
        iconName: "Globe"
      },
      {
        title: "Telehealth Mobile Apps",
        slug: "mobile-app-development",
        description: "Native iOS and Android apps for virtual patient consultations.",
        iconName: "Smartphone"
      },
      {
        title: "Clinical AI & Automation",
        slug: "ai-automation",
        description: "AI-assisted clinical note generation and triage automation.",
        iconName: "Cpu"
      },
      {
        title: "Medical Cloud & DevOps",
        slug: "cloud-devops",
        description: "HIPAA-certified cloud deployment and automated backup pipelines.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Virtual Telemedicine Clinics",
        technology: "Next.js + WebRTC + Stripe",
        application: "Enables instant online appointment booking and HD video visits.",
        impact: "Expanded patient access by 300% without increasing clinic space.",
        iconName: "HeartPulse"
      },
      {
        title: "Unified Patient EMR Portals",
        technology: "HL7 FHIR + Node.js + PostgreSQL",
        application: "Consolidates lab results, medical history, and prescriptions into one dashboard.",
        impact: "Reduced patient check-in times from 15 minutes to under 2 minutes.",
        iconName: "Activity"
      },
      {
        title: "Remote Patient Monitoring (RPM)",
        technology: "IoT Telemetry + Python + AWS",
        application: "Tracks wearable medical device data for high-risk cardiac patients.",
        impact: "Cut emergency room re-admissions by 42%.",
        iconName: "Gauge"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Analyze clinical workflows, EHR standards, and HIPAA compliance requirements." },
      { step: "02", title: "Plan", description: "Architect secure data schemas, API gateways, and cloud deployment targets." },
      { step: "03", title: "Design", description: "Craft accessible, intuitive patient and physician UI/UX interfaces." },
      { step: "04", title: "Develop", description: "Build HIPAA-encrypted web and mobile applications with automated testing." },
      { step: "05", title: "Test", description: "Conduct rigorous security audits, penetration testing, and EHR sync validation." },
      { step: "06", title: "Launch & Support", description: "Deploy with zero downtime, continuous 24/7 monitoring, and SLA backing." }
    ],
    technologies: ["Next.js", "Python FastAPI", "HL7 FHIR", "WebRTC", "PostgreSQL", "AWS HealthLake"],
    faqs: [
      {
        question: "Are your healthcare applications fully HIPAA compliant?",
        answer: "Yes, all patient data pipelines, storage buckets, and communications undergo rigorous encryption (AES-256 in transit and at rest) with audit logging."
      },
      {
        question: "Can you integrate with existing EHR systems like Epic or Cerner?",
        answer: "We support standardized HL7 FHIR APIs and custom middleware adapters for seamless bidirectional data exchange with major hospital EHR systems."
      }
    ]
  },

  {
    id: "fintech",
    title: "FinTech & Banking",
    slug: "finance-banking",
    iconName: "Landmark",
    badge: "PCI-DSS Level 1 & Zero Trust",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "FinTech & Banking",
    heroSubheadline: "Engineer high-frequency transaction execution engines, AI fraud anomaly prevention, and tokenized payment portals designed for digital financial institutions.",
    heroImage: "/metro-fintech-mockup.png",
    overviewImage: "/tradingview-mockup.png",
    description: "Secure transaction managers & banking portals.",
    keywords: [
      "fintech solutions",
      "fintech app development company",
      "fintech software solutions",
      "fintech software development",
      "banking software development company",
      "financial software development",
      "custom fintech application development",
      "digital banking software solutions",
      "payment gateway integration services",
      "wealthtech app development",
      "secure banking app development",
      "lending software development",
      "financial technology consulting",
      "blockchain fintech solutions",
      "core banking system development",
    ],
    overview: {
      whatIsIt: "FinTech software powers digital banking, instant wire transfers, wealth management, and automated payment gateways with ultra-low latency.",
      challenges: [
        "Strict PCI-DSS Level 1 regulatory compliance and audit burdens.",
        "Sophisticated fraud attacks and real-time account takeover threats.",
        "Transaction timeouts and database locks during peak market hours.",
        "Complex legacy banking mainframe API integrations."
      ],
      whatBusinessesNeed: [
        "Sub-50ms transaction processing and ledger updates.",
        "Real-time AI neural networks scanning for payment anomalies.",
        "Bank-grade tokenized vault storage for cardholder details.",
        "Zero-downtime multi-region cloud failover architecture."
      ],
      howMitsafeSolves: "Mitsafe builds PCI-DSS Level 1 certified financial portals, event-driven ledger engines, and AI anomaly detection microservices for scalable banking platforms."
    },
    solutions: ["Payment Protocols", "AI Fraud Monitoring", "Asset Value Dashboards", "Algorithmic Wire Transfers"],
    techSolutions: [
      {
        title: "Real-Time Transaction Ledger",
        whatItDoes: "Processes and records thousands of financial transactions per second with sub-50ms latency.",
        whyUseful: "Ensures atomic balance updates and eliminates double-spending risks.",
        mainBenefit: "Handles over 10,000 transactions per second without server lag.",
        whereUsed: "Digital banks, payment gateways, & crypto exchanges.",
        iconName: "Landmark"
      },
      {
        title: "AI Fraud Anomaly Detection",
        whatItDoes: "Scans active transactions using machine learning to detect suspicious behavioral patterns.",
        whyUseful: "Blocks fraudulent charges instantly before money leaves the bank.",
        mainBenefit: "Reduces fraudulent chargebacks by up to 78%.",
        whereUsed: "Credit card processors & online payment checkouts.",
        iconName: "Shield"
      },
      {
        title: "PCI Token Vault Engine",
        whatItDoes: "Stores card numbers in secure tokenized vaults, substituting sensitive digits with encrypted keys.",
        whyUseful: "Keeps main database servers outside PCI audit scope while enabling recurring billing.",
        mainBenefit: "100% PCI-DSS Level 1 compliance guarantee.",
        whereUsed: "Subscription platforms & merchant acquirers.",
        iconName: "Lock"
      },
      {
        title: "Wealth Analytics Dashboard",
        whatItDoes: "Renders real-time stock ticker feeds, portfolio metrics, and automated rebalancing tools.",
        whyUseful: "Provides retail investors and wealth managers with instant market clarity.",
        mainBenefit: "60fps chart rendering with zero data lag.",
        whereUsed: "Neobanks, stock brokerages, & wealth portals.",
        iconName: "BarChart"
      }
    ],
    techComparison: [
      {
        technologyName: "Go / Rust + Kafka Microservices",
        bestFor: "High-Frequency Payments & Ledgers",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Enterprise Premium",
        mainBenefit: "Sub-30ms transaction execution with zero locks."
      },
      {
        technologyName: "Node.js + Redis Token Vaults",
        bestFor: "Neobank Mobile APIs & Payment Gates",
        speed: "Fast",
        scalability: "High",
        costLevel: "Cost Effective",
        mainBenefit: "Instant API responses with low server cost."
      },
      {
        technologyName: "PostgreSQL + Immutable Logs",
        bestFor: "Audit Trails & Financial Accounting",
        speed: "Fast",
        scalability: "High",
        costLevel: "Balanced",
        mainBenefit: "Complete transactional consistency and auditability."
      }
    ],
    keyBenefits: [
      {
        title: "Sub-50ms Transaction Processing",
        description: "Ultra-low-latency execution engines built for high-concurrency payment volumes."
      },
      {
        title: "100% PCI-DSS & SOC2 Compliance",
        description: "Tokenized data isolation adhering strictly to global financial standards."
      },
      {
        title: "Real-Time AI Fraud Shield",
        description: "Neural network anomaly monitors evaluating payments in under 20 milliseconds."
      },
      {
        title: "Zero-Downtime Failover",
        description: "Multi-region active-active cloud clusters guaranteeing 99.999% availability."
      },
      {
        title: "Multi-Currency Settlement Rails",
        description: "Built-in support for ISO 20022, SWIFT APIs, Stripe, and global liquidity providers."
      },
      {
        title: "Instant Mobile Banking UX",
        description: "Responsive web and mobile banking interfaces engineered for frictionless user onboarding."
      }
    ],
    industryServices: [
      {
        title: "FinTech Web Engineering",
        slug: "web-development",
        description: "Bank-grade web portals and financial dashboard applications.",
        iconName: "Globe"
      },
      {
        title: "Neobank Mobile Apps",
        slug: "mobile-app-development",
        description: "Secure iOS & Android mobile banking apps with biometric auth.",
        iconName: "Smartphone"
      },
      {
        title: "API & Payment Integration",
        slug: "api-integration",
        description: "Custom payment gateways, ISO 20022 rails, and SWIFT API bridges.",
        iconName: "Cpu"
      },
      {
        title: "Financial Cloud Infrastructure",
        slug: "cloud-devops",
        description: "PCI-certified AWS/Azure cloud deployments with automated failover.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Digital Neobank Platform",
        technology: "Go + PostgreSQL + React Native",
        application: "Powers instant mobile account creation, peer-to-peer transfers, and debit card management.",
        impact: "Scaled from 10,000 to 500,000 active users in 12 months with zero downtime.",
        iconName: "Landmark"
      },
      {
        title: "Algorithmic Payment Gateway",
        technology: "Node.js + Redis + Stripe API",
        application: "Routes merchant credit card transactions across lowest-cost liquidity rails.",
        impact: "Saved merchants 1.2% in average transaction processing fees.",
        iconName: "Lock"
      },
      {
        title: "Wealth & Crypto Portfolio Tracker",
        technology: "Kafka + Next.js 16 + WebSockets",
        application: "Streams live stock market tickers and asset allocations to global traders.",
        impact: "Maintains sub-50ms data synchronization under heavy market volatility.",
        iconName: "BarChart"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Audit financial compliance rules, target transaction throughput, and security requirements." },
      { step: "02", title: "Plan", description: "Design PCI tokenization schemas, event-driven ledger models, and failover topologies." },
      { step: "03", title: "Design", description: "Build intuitive, secure banking UIs optimized for speed and biometric authentication." },
      { step: "04", title: "Develop", description: "Implement high-speed microservices with automated unit, stress, and security test suites." },
      { step: "05", title: "Test", description: "Perform PCI compliance audits, penetration tests, and high-volume transaction stress tests." },
      { step: "06", title: "Launch & Support", description: "Deploy with active-active cloud clustering and 24/7 financial system monitoring." }
    ],
    technologies: ["Node.js", "Go", "Kafka", "Redis", "PCI Token Vaults", "PostgreSQL"],
    faqs: [
      {
        question: "How do you guarantee transaction security and audit trails?",
        answer: "We utilize append-only immutable ledger logs, database row-level tokenization, and real-time monitoring microservices."
      },
      {
        question: "Do you support multi-currency and cross-border payment rails?",
        answer: "Yes, our custom fintech platforms integrate with SWIFT, ISO 20022 APIs, Stripe, and distributed liquidity provider rails."
      }
    ]
  },

  {
    id: "education",
    title: "Education & E-Learning",
    slug: "education-elearning",
    iconName: "GraduationCap",
    badge: "Interactive EdTech Platforms",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "Education & E-Learning",
    heroSubheadline: "Empower institutions and online platforms with collaborative virtual whiteboards, automated AI grading, adaptive learning paths, and scalable course management ERPs.",
    heroImage: "/anyuni-mockup.png",
    overviewImage: "/web-app-design-woman.png",
    description: "Virtual classrooms & learning hubs.",
    keywords: [
      "education app development company",
      "e learning app development company",
      "education app development",
      "e learning software development",
      "lms software development",
      "custom elearning portal development",
      "online learning platform development",
      "edtech software development company",
      "educational web development",
      "virtual classroom software development",
      "e learning app developers",
      "school management software development",
      "interactive elearning solutions",
      "edtech mobile app development",
      "student portal development",
    ],
    overview: {
      whatIsIt: "EdTech platforms deliver interactive digital learning, live video classrooms, automated grading, and student progress telemetry across web and mobile browsers.",
      challenges: [
        "Server crashes and video buffering during concurrent online examination hours.",
        "Disengaged students caused by passive video lecture interfaces.",
        "Excessive teacher workload spent manually grading quizzes and assignments.",
        "Inability to personalize learning speeds for students of varying comprehension."
      ],
      whatBusinessesNeed: [
        "Auto-scaling cloud infrastructure capable of hosting 100,000+ concurrent students.",
        "Interactive 60fps multiplayer digital whiteboards and video streams.",
        "AI adaptive engines delivering personalized quiz paths based on student performance.",
        "Seamless LTI integration with existing school systems like Canvas and Blackboard."
      ],
      howMitsafeSolves: "Mitsafe builds modern, high-concurrency EdTech platforms with real-time WebSocket collaborative canvases, automated AI test grading, and mobile-first learning apps."
    },
    solutions: ["School Management ERP", "Interactive Classrooms", "Progress Dashboards", "AI Test Graders"],
    techSolutions: [
      {
        title: "Multiplayer Virtual Canvas",
        whatItDoes: "Allows teachers and students to write, draw, and solve equations together live on a shared digital whiteboard.",
        whyUseful: "Transforms passive remote lectures into engaging interactive problem-solving sessions.",
        mainBenefit: "60fps multiplayer rendering with sub-50ms input synchronization.",
        whereUsed: "Online tutoring, STEM classes, & virtual workshops.",
        iconName: "GraduationCap"
      },
      {
        title: "AI Adaptive Learning Path",
        whatItDoes: "Analyzes student quiz answers in real time and automatically adjusts problem difficulty.",
        whyUseful: "Helps struggling students master foundations while challenging advanced learners.",
        mainBenefit: "Improves student course completion rates by up to 40%.",
        whereUsed: "Language learning apps, test prep, & corporate training.",
        iconName: "Cpu"
      },
      {
        title: "Automated AI Assignment Grader",
        whatItDoes: "Grades multiple-choice tests and evaluates short essay answers against rubric guidelines.",
        whyUseful: "Frees educators from hours of manual repetitive paper marking.",
        mainBenefit: "Instant quiz results returned to students within seconds.",
        whereUsed: "Universities, MOOC platforms, & high schools.",
        iconName: "CheckCircle"
      },
      {
        title: "Institution ERP & Certificate Engine",
        whatItDoes: "Manages student enrollment, tuition fee processing, attendance logs, and digital diploma issuance.",
        whyUseful: "Centralizes school operations into one accessible web dashboard.",
        mainBenefit: "Automated cryptographic PDF diploma generation and verification.",
        whereUsed: "K-12 schools, universities, & certification academies.",
        iconName: "BookOpen"
      }
    ],
    techComparison: [
      {
        technologyName: "React + WebSockets & WebRTC",
        bestFor: "Real-Time Classrooms & Multiplayer Canvases",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-50ms canvas sync & buffer-free live HD video streams."
      },
      {
        technologyName: "Next.js 16 + TailwindCSS",
        bestFor: "Fast Course Content & Student Dashboards",
        speed: "Fast",
        scalability: "High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-second page loads and 99+ Lighthouse performance scores."
      },
      {
        technologyName: "Python ML + AWS CloudFront CDN",
        bestFor: "Adaptive Learning & High-Traffic Video Streaming",
        speed: "Fast",
        scalability: "Ultra High",
        costLevel: "Balanced",
        mainBenefit: "Seamless global video delivery even during peak exam traffic."
      }
    ],
    keyBenefits: [
      {
        title: "100,000+ Concurrent Student Scale",
        description: "Auto-scaling serverless cloud compute engineered to handle heavy examination spikes."
      },
      {
        title: "Buffer-Free Video Classrooms",
        description: "Adaptive multi-bitrate WebRTC video streaming optimized for low-bandwidth mobile networks."
      },
      {
        title: "Instant AI Test Analytics",
        description: "Automated quiz scoring and granular comprehension reports generated in seconds."
      },
      {
        title: "Canvas & Blackboard Interoperability",
        description: "Standard LTI 1.3 compliance for seamless single sign-on with existing school portals."
      },
      {
        title: "Verifiable Digital Certification",
        description: "Automated issuing of tamper-proof digital certificates and badges for graduates."
      },
      {
        title: "Mobile-First Learning Experience",
        description: "Fully responsive web and offline-capable mobile apps for learning on the go."
      }
    ],
    industryServices: [
      {
        title: "EdTech Web Applications",
        slug: "web-development",
        description: "High-speed learning portals and course management web apps.",
        iconName: "Globe"
      },
      {
        title: "E-Learning Mobile Apps",
        slug: "mobile-app-development",
        description: "iOS and Android apps with offline video downloads and interactive quizzes.",
        iconName: "Smartphone"
      },
      {
        title: "AI Grading & Learning Automation",
        slug: "ai-automation",
        description: "Adaptive quiz engines and automated assignment scoring tools.",
        iconName: "Cpu"
      },
      {
        title: "Global Video Cloud Hosting",
        slug: "cloud-devops",
        description: "Low-latency video streaming CDN pipelines and cloud scaling.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Global STEM Virtual Academy",
        technology: "React + WebSockets + Node.js",
        application: "Powers live interactive math and coding classes with shared whiteboards for 50,000 students.",
        impact: "Increased student course engagement times by 65%.",
        iconName: "GraduationCap"
      },
      {
        title: "AI-Powered Language Learning App",
        technology: "Python ML + React Native + AWS",
        application: "Delivers personalized vocabulary quizzes and speech pronunciation feedback.",
        impact: "Achieved an average app store user rating of 4.9 stars across 100k downloads.",
        iconName: "Cpu"
      },
      {
        title: "University Examination & ERP Hub",
        technology: "Next.js 16 + PostgreSQL + Stripe",
        application: "Manages online student registration, exam delivery, and tuition fee payments.",
        impact: "Handled 25,000 simultaneous exam submissions with zero server downtime.",
        iconName: "BookOpen"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Review curriculum workflows, student concurrency requirements, and LTI standards." },
      { step: "02", title: "Plan", description: "Design real-time WebSocket data schemas, video streaming CDNs, and database architecture." },
      { step: "03", title: "Design", description: "Create engaging, accessible UI designs tailored for students, teachers, and admins." },
      { step: "04", title: "Develop", description: "Build modern web and mobile learning platforms with robust automated testing." },
      { step: "05", title: "Test", description: "Simulate peak exam traffic loads and test multiplayer whiteboard responsiveness." },
      { step: "06", title: "Launch & Support", description: "Deploy to global edge networks with continuous 24/7 platform monitoring." }
    ],
    technologies: ["React", "WebSockets", "Node.js", "Python ML", "AWS CloudFront", "TailwindCSS"],
    faqs: [
      {
        question: "Can your e-learning platform handle peak examination traffic?",
        answer: "Our cloud architecture automatically auto-scales compute instances dynamically based on incoming student demand."
      },
      {
        question: "Do you offer custom digital certification issuance?",
        answer: "Yes, we build cryptographic digital diploma engines that generate verifiable PDF badges and certificates."
      }
    ]
  },

  {
    id: "ecommerce",
    title: "E-Commerce & Retail",
    slug: "e-commerce-retail",
    iconName: "ShoppingBag",
    badge: "Sub-300ms Search & High Conversion",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "E-Commerce & Retail",
    heroSubheadline: "Build headless e-commerce storefronts, sub-300ms vector search catalog engines, AI product recommenders, and multi-warehouse inventory automation.",
    heroImage: "/hero-ecommerce.png",
    overviewImage: "/portfolio_ecommerce_new.png",
    description: "Headless shopping engines & catalog search.",
    keywords: [
      "ecommerce web development",
      "ecommerce app development company",
      "ecommerce development company",
      "ecommerce website development company",
      "custom ecommerce solutions",
      "b2b ecommerce platform development",
      "ecommerce mobile application development",
      "retail software development",
      "online store development services",
      "ecommerce portal development",
      "omnichannel retail solutions",
      "headless ecommerce development",
      "shopify web development company",
      "multi vendor marketplace development",
      "ecommerce checkout optimization",
    ],
    overview: {
      whatIsIt: "Modern e-commerce technology decouples storefront user interfaces from backend shopping carts to deliver lightning-fast loading speeds and high conversion rates.",
      challenges: [
        "Slow page load times causing high cart abandonment rates.",
        "Storefront crashes during heavy Black Friday / promotional flash sales.",
        "Inaccurate inventory stock levels across multiple warehouse channels.",
        "Irrelevant product search results frustrating shoppers on mobile."
      ],
      whatBusinessesNeed: [
        "Headless Next.js storefronts achieving 95+ Google Lighthouse speed scores.",
        "Instant sub-300ms vector product search with smart typo tolerance.",
        "Machine learning product recommendation engines that increase Average Order Value (AOV).",
        "Automated real-time inventory telemetry synchronized with warehouse ERPs."
      ],
      howMitsafeSolves: "Mitsafe engineers high-conversion headless e-commerce platforms, instant vector catalog search pipelines, and multi-channel inventory microservices for ambitious retail brands."
    },
    solutions: ["Headless Shopping Integrations", "Sub-300ms Catalog Search", "AI Recommendation Engine", "Dynamic Inventory Trackers"],
    techSolutions: [
      {
        title: "Headless Next.js Storefront",
        whatItDoes: "Decouples the customer-facing online store from legacy backend e-commerce engines.",
        whyUseful: "Unlocks sub-second page loads, custom checkout flows, and complete design freedom.",
        mainBenefit: "95+ Lighthouse speed score and up to 35% higher cart conversions.",
        whereUsed: "Direct-to-consumer (DTC) brands & global retail portals.",
        iconName: "ShoppingBag"
      },
      {
        title: "Sub-300ms Vector Product Search",
        whatItDoes: "Delivers instant auto-complete product search results with visual filtering.",
        whyUseful: "Helps shoppers locate desired products instantly on mobile devices.",
        mainBenefit: "Increases search-to-buy conversion rate by 28%.",
        whereUsed: "Large catalog stores with 10,000+ SKU inventory items.",
        iconName: "Search"
      },
      {
        title: "AI Product Recommender Engine",
        whatItDoes: "Analyzes shopper browsing behavior to suggest complementary upsell products.",
        whyUseful: "Maximizes checkout basket size and total customer lifetime value.",
        mainBenefit: "Boosts Average Order Value (AOV) by 18-25%.",
        whereUsed: "Fashion, electronics, & subscription retail stores.",
        iconName: "Cpu"
      },
      {
        title: "Multi-Warehouse Inventory Sync",
        whatItDoes: "Updates product stock counts across Shopify, Amazon, and physical stores in real time.",
        whyUseful: "Prevents selling out-of-stock items and automates re-ordering alerts.",
        mainBenefit: "Zero overselling incidents across all sales channels.",
        whereUsed: "Omnichannel retailers & logistics fulfillment centers.",
        iconName: "RefreshCw"
      }
    ],
    techComparison: [
      {
        technologyName: "Headless Next.js 16 + Algolia Search",
        bestFor: "High-Speed Storefronts & Large Product Catalogs",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-200ms page loads and 35%+ higher sales conversions."
      },
      {
        technologyName: "Shopify Storefront API + Node.js",
        bestFor: "DTC Retail & Subscription E-Commerce",
        speed: "Fast",
        scalability: "High",
        costLevel: "Cost Effective",
        mainBenefit: "Frictionless checkout integrations with low maintenance."
      },
      {
        technologyName: "Custom Microservices + Redis Cache",
        bestFor: "Enterprise Omnichannel & Multi-Warehouse ERP",
        speed: "Fast",
        scalability: "Ultra High",
        costLevel: "Enterprise Premium",
        mainBenefit: "Handles high Black Friday flash sale spikes with zero downtime."
      }
    ],
    keyBenefits: [
      {
        title: "95+ Lighthouse Performance Score",
        description: "Sub-second initial page loads optimizing search engine rankings and conversion rates."
      },
      {
        title: "35%+ Higher Checkout Conversions",
        description: "Friction-free, mobile-optimized checkout workflows designed for maximum sales."
      },
      {
        title: "Zero Black Friday Downtime",
        description: "Cloud edge infrastructure built to handle 50x traffic surges effortlessly."
      },
      {
        title: "Instant Sub-300ms Catalog Search",
        description: "Typo-tolerant vector search helping shoppers find products instantly."
      },
      {
        title: "Real-Time Omnichannel Inventory",
        description: "Automated stock telemetry synchronized across web, mobile, and brick-and-mortar stores."
      },
      {
        title: "Personalized AI Upsells",
        description: "Smart machine learning product recommendations that increase Average Order Value."
      }
    ],
    industryServices: [
      {
        title: "Headless E-Commerce Development",
        slug: "web-development",
        description: "Lightning-fast Next.js storefronts connected to Shopify or custom backends.",
        iconName: "Globe"
      },
      {
        title: "Retail Mobile Shopping Apps",
        slug: "mobile-app-development",
        description: "Native mobile apps with instant 1-click checkout and push notifications.",
        iconName: "Smartphone"
      },
      {
        title: "E-Commerce AI & Search",
        slug: "ai-automation",
        description: "AI product recommendations and instant vector search engines.",
        iconName: "Cpu"
      },
      {
        title: "Retail Cloud & Edge CDNs",
        slug: "cloud-devops",
        description: "Auto-scaling serverless cloud hosting for peak retail sales events.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Headless Fashion Brand Storefront",
        technology: "Next.js 16 + Shopify API + TailwindCSS",
        application: "Replaced a slow legacy store with a headless Next.js frontend.",
        impact: "Cut mobile page load time from 4.8s to 0.6s and boosted checkout conversion by 38%.",
        iconName: "ShoppingBag"
      },
      {
        title: "Sub-300ms Electronics Search Engine",
        technology: "Algolia + Node.js + Algorithmic Filters",
        application: "Implemented instant vector search across 50,000 tech accessories.",
        impact: "Increased search bar usage by 140% and search revenue by 45%.",
        iconName: "Search"
      },
      {
        title: "Omnichannel Multi-Warehouse Sync",
        technology: "Node.js Microservices + Redis + PostgreSQL",
        application: "Synchronizes live inventory across 12 retail stores and web warehouses.",
        impact: "Eliminated out-of-stock order cancelations completely.",
        iconName: "RefreshCw"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Analyze product catalog complexity, sales traffic spikes, and conversion goals." },
      { step: "02", title: "Plan", description: "Design headless API architectures, vector search indices, and payment integrations." },
      { step: "03", title: "Design", description: "Create high-converting, mobile-first shopping UX with frictionless checkout flows." },
      { step: "04", title: "Develop", description: "Build fast Next.js storefronts and microservices with automated testing." },
      { step: "05", title: "Test", description: "Conduct flash-sale load testing, payment gateway checks, and SEO speed audits." },
      { step: "06", title: "Launch & Support", description: "Deploy to global edge CDNs with 24/7 sales monitoring and SLA backing." }
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Algolia / MeiliSearch", "TailwindCSS", "Stripe"],
    faqs: [
      {
        question: "Why switch to a headless e-commerce architecture?",
        answer: "Headless separates your store's frontend UI from backend business logic, unlocking sub-second page loads and complete design freedom."
      },
      {
        question: "Can you migrate existing storefronts without data loss?",
        answer: "Yes, we migrate product catalogs, customer histories, and orders seamlessly using automated ETL data pipelines."
      }
    ]
  },

  {
    id: "realestate",
    title: "Real Estate & Property",
    slug: "real-estate",
    iconName: "Building2",
    badge: "Interactive PropTech Platforms",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "Real Estate & PropTech",
    heroSubheadline: "Build 3D virtual tour property portals, automated tenant maintenance portals, e-signature lease systems, and live MLS RESO database synchronization.",
    heroImage: "/raichand-mockup.png",
    overviewImage: "/pricing-devices-mockup.png",
    description: "Property management & 3D listing platforms.",
    keywords: [
      "real estate app development company",
      "real estate website development company",
      "real estate software development company",
      "real estate web development",
      "custom real estate portal development",
      "property management software development",
      "real estate mobile app development",
      "real estate crm software development",
      "idx mls website development",
      "proptech software solutions",
      "commercial real estate software",
      "real estate listing platform development",
      "virtual tour real estate app",
      "real estate lead generation website",
      "real estate marketplace development",
    ],
    overview: {
      whatIsIt: "PropTech software digitizes real estate transactions, property management, 3D walkthroughs, tenant rent processing, and automated MLS listing updates.",
      challenges: [
        "Slow, unoptimized property listing pages with static low-res photos.",
        "Manual paper lease agreements and delayed tenant signatures.",
        "Disorganized maintenance request tracking causing tenant churn.",
        "Outdated property data feeds disconnected from regional MLS databases."
      ],
      whatBusinessesNeed: [
        "60fps WebGL 3D virtual property tours running smoothly on mobile GPUs.",
        "Self-service tenant portals for instant rent payment and maintenance ticketing.",
        "Automated e-signature lease workflows integrated with DocuSign/HelloSign.",
        "Live RESO Web API data sync with regional MLS databases."
      ],
      howMitsafeSolves: "Mitsafe builds custom PropTech web apps, WebGL 3D listing engines, automated tenant portals, and RESO Web API integrations for property agencies."
    },
    solutions: ["3D Virtual Tours", "Property Booking Portals", "Tenant Management ERP", "Automated Lease Signings"],
    techSolutions: [
      {
        title: "60fps WebGL 3D Virtual Tours",
        whatItDoes: "Renders interactive 360-degree virtual property walkthroughs directly inside browser pages.",
        whyUseful: "Allows prospective buyers and tenants to inspect properties remotely from anywhere.",
        mainBenefit: "Increases qualified property inquiry leads by 50%.",
        whereUsed: "Luxury real estate, commercial rentals, & new developments.",
        iconName: "Building2"
      },
      {
        title: "Tenant Rent & Maintenance Portal",
        whatItDoes: "Provides tenants with a web app to pay monthly rent, submit work orders, and review lease terms.",
        whyUseful: "Automates property manager collection duties and tracks maintenance progress.",
        mainBenefit: "Reduces late rent payments by up to 65%.",
        whereUsed: "Residential apartment complexes & property management firms.",
        iconName: "Key"
      },
      {
        title: "Automated e-Lease Signing Workflow",
        whatItDoes: "Generates digital lease contracts and routes them for instant electronic signatures.",
        whyUseful: "Eliminates physical paperwork delays and secures legal contract storage.",
        mainBenefit: "Reduces lease finalization time from days to under 15 minutes.",
        whereUsed: "Real estate brokerages & leasing agencies.",
        iconName: "FileCheck"
      },
      {
        title: "MLS RESO API Data Aggregator",
        whatItDoes: "Fetches live property listings, status updates, and pricing data directly from regional MLS feeds.",
        whyUseful: "Ensures website property listings are always accurate and up to date.",
        mainBenefit: "Automated real-time inventory updates with zero manual entry.",
        whereUsed: "Real estate portals & property search engines.",
        iconName: "Database"
      }
    ],
    techComparison: [
      {
        technologyName: "WebGL / Three.js + Next.js 16",
        bestFor: "Interactive 3D Virtual Tours & Modern Property Portals",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Cost Effective",
        mainBenefit: "60fps smooth 3D renders on mobile browsers with instant page load."
      },
      {
        technologyName: "Python FastAPI + RESO Web API",
        bestFor: "MLS Data Synchronization & Aggregation",
        speed: "Fast",
        scalability: "High",
        costLevel: "Balanced",
        mainBenefit: "Seamless property catalog updates from national MLS feeds."
      },
      {
        technologyName: "PostgreSQL + Stripe + DocuSign API",
        bestFor: "Tenant Portals & Lease Contract Workflows",
        speed: "Fast",
        scalability: "High",
        costLevel: "Cost Effective",
        mainBenefit: "Automated rent processing and instant e-signature lease execution."
      }
    ],
    keyBenefits: [
      {
        title: "60fps WebGL Mobile 3D Tours",
        description: "High-performance 3D property walkthroughs optimized for mobile GPUs."
      },
      {
        title: "Automated Rent & Maintenance Ticketing",
        description: "Self-service tenant portals that reduce property manager administrative work."
      },
      {
        title: "Seamless MLS RESO Synchronization",
        description: "Automatic property listing updates direct from regional real estate databases."
      },
      {
        title: "Instant e-Signature Lease Execution",
        description: "Integrated DocuSign workflows for rapid, legally binding contract signing."
      },
      {
        title: "Advanced Property Search & Filter",
        description: "Sub-second map filtering by location, price, amenities, and floor area."
      },
      {
        title: "Enterprise Data Security",
        description: "Encrypted document storage protecting sensitive tenant financial data."
      }
    ],
    industryServices: [
      {
        title: "PropTech Web Development",
        slug: "web-development",
        description: "High-speed property search web portals and virtual tour platforms.",
        iconName: "Globe"
      },
      {
        title: "Tenant Mobile Apps",
        slug: "mobile-app-development",
        description: "Mobile apps for rent payments, maintenance requests, and digital key access.",
        iconName: "Smartphone"
      },
      {
        title: "MLS & API Integration",
        slug: "api-integration",
        description: "RESO Web API, DocuSign, and payment gateway data bridges.",
        iconName: "Cpu"
      },
      {
        title: "Real Estate Cloud Infrastructure",
        slug: "cloud-devops",
        description: "High-bandwidth image and 3D media cloud asset hosting.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Luxury 3D Property Marketplace",
        technology: "Three.js + Next.js 16 + TailwindCSS",
        application: "Presents interactive 360-degree walkthroughs for multi-million dollar estates.",
        impact: "Generated 3.5x more remote international buyer leads.",
        iconName: "Building2"
      },
      {
        title: "Automated Tenant Management Portal",
        technology: "Next.js + Stripe + PostgreSQL",
        application: "Handles rent collections and maintenance work orders across 1,200 apartment units.",
        impact: "Reduced property manager admin tasks by 45 hours per month.",
        iconName: "Key"
      },
      {
        title: "Multi-State MLS Search Engine",
        technology: "Python + RESO Web API + Algolia",
        application: "Aggregates property feeds across 5 regional MLS databases into one search app.",
        impact: "Delivers sub-300ms search filtering across 100,000 active listings.",
        iconName: "Database"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Review property catalog structure, MLS data feeds, and tenant portal needs." },
      { step: "02", title: "Plan", description: "Architect WebGL media storage pipelines, RESO API sync routes, and database models." },
      { step: "03", title: "Design", description: "Craft elegant, image-focused UI layouts showcasing properties in their best light." },
      { step: "04", title: "Develop", description: "Build high-performance web portals and e-signature modules with clean code." },
      { step: "05", title: "Test", description: "Verify WebGL mobile GPU performance, MLS data accuracy, and payment security." },
      { step: "06", title: "Launch & Support", description: "Deploy to cloud edge infrastructure with continuous monitoring and 24/7 support." }
    ],
    technologies: ["Next.js", "Three.js / WebGL", "Python", "RESO Web API", "PostgreSQL"],
    faqs: [
      {
        question: "How do virtual tours perform on mobile devices?",
        answer: "Our WebGL 3D viewers are optimized for mobile GPUs, delivering 60fps interactive property walkthroughs on iOS and Android."
      },
      {
        question: "Can your system sync directly with local MLS databases?",
        answer: "Yes, we integrate using modern RESO Web API standards for real-time bidirectional property feed updates."
      }
    ]
  },

  {
    id: "travel",
    title: "Travel & Hospitality",
    slug: "travel-hospitality",
    iconName: "Compass",
    badge: "Real-Time Booking Engines",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "Travel & Hospitality",
    heroSubheadline: "Engineer real-time hotel reservation engines, contactless guest check-in web portals, itinerary aggregators, and zero-overbooking inventory locks.",
    heroImage: "/wedding-matrimony-mockup.png",
    overviewImage: "/hero-3d-mockup.png",
    description: "Guest booking engines & hotel platforms.",
    keywords: [
      "booking engine for hotels",
      "internet booking engine for hotels",
      "travel app development company",
      "online hotel booking system",
      "hotel reservation and booking system",
      "travel portal development",
      "hospitality software development company",
      "travel booking website development",
      "hotel management software development",
      "flight booking engine development",
      "custom travel software solutions",
      "tourism mobile app development",
      "hotel pms system development",
      "travel agency software development",
      "b2b travel portal development",
    ],
    overview: {
      whatIsIt: "Travel technology powers online hotel room bookings, flight aggregators, contactless guest check-in apps, and real-time room availability sync.",
      challenges: [
        "Double bookings caused by slow room inventory updates across OTAs.",
        "Long front desk queue lines during peak hotel check-in hours.",
        "High commission fees paid to third-party booking channels.",
        "Disconnected guest service requests for food order, room cleaning, and amenities."
      ],
      whatBusinessesNeed: [
        "Atomic distributed locks guaranteeing zero double-booking incidents.",
        "Contactless mobile web check-in apps enabling digital room keys.",
        "Direct booking engines with multi-currency payment settlement.",
        "Real-time channel manager synchronization with Booking.com and Expedia."
      ],
      howMitsafeSolves: "Mitsafe builds direct hotel booking platforms, WebSockets guest service apps, zero-overbooking reservation engines, and GDS channel manager API bridges."
    },
    solutions: ["Guest Booking Systems", "Reservation Engines", "Food Order Routers", "Itinerary Aggregators"],
    techSolutions: [
      {
        title: "Atomic Reservation Lock Engine",
        whatItDoes: "Locks room inventory instantly during customer checkout to prevent overbooking.",
        whyUseful: "Guarantees zero double bookings even during flash promotional sales.",
        mainBenefit: "100% overbooking prevention guarantee.",
        whereUsed: "Boutique hotels, resort chains, & tour operators.",
        iconName: "Compass"
      },
      {
        title: "Contactless Guest Check-In Web App",
        whatItDoes: "Enables guests to upload ID verification and check in from their mobile browser before arrival.",
        whyUseful: "Bypasses front desk lines and improves guest arrival satisfaction.",
        mainBenefit: "Reduces front desk check-in queue times by 75%.",
        whereUsed: "Hotels, vacation rentals, & cruise lines.",
        iconName: "Smartphone"
      },
      {
        title: "GDS / OTA Channel Manager API",
        whatItDoes: "Synchronizes room availability and rate prices across Booking.com, Expedia, and direct web channels.",
        whyUseful: "Eliminates manual rate updates and keeps global channel prices aligned.",
        mainBenefit: "Automated multi-channel price and availability sync.",
        whereUsed: "Hotel managers & property management networks.",
        iconName: "RefreshCw"
      },
      {
        title: "Guest Room Service Order Router",
        whatItDoes: "Allows guests to order room service, spa appointments, and housekeeping from their phone.",
        whyUseful: "Increases ancillary hotel service revenue while reducing phone call strain on staff.",
        mainBenefit: "Boosts room service ancillary sales by up to 30%.",
        whereUsed: "Resorts, luxury hotels, & serviced apartments.",
        iconName: "Bell"
      }
    ],
    techComparison: [
      {
        technologyName: "Go + Redis Atomic Locks + GraphQL",
        bestFor: "High-Concurrency Booking Engines & Instant Lock",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-100ms reservation sync with zero double-booking risk."
      },
      {
        technologyName: "Next.js 16 + Stripe Multi-Currency",
        bestFor: "Direct Hotel Booking Webstore",
        speed: "Fast",
        scalability: "High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-second direct bookings avoiding heavy OTA commissions."
      },
      {
        technologyName: "Node.js + WebSockets + PWA",
        bestFor: "Contactless Guest Mobile Portals",
        speed: "Fast",
        scalability: "High",
        costLevel: "Balanced",
        mainBenefit: "Instant room service orders and digital key check-ins."
      }
    ],
    keyBenefits: [
      {
        title: "Zero Double-Booking Warranty",
        description: "Atomic distributed memory locks ensuring single-seat inventory integrity."
      },
      {
        title: "Higher Direct Web Bookings",
        description: "Fast, mobile-optimized booking engines that save third-party commission fees."
      },
      {
        title: "75% Faster Front Desk Check-In",
        description: "Self-service mobile web check-in allowing guests to proceed directly to rooms."
      },
      {
        title: "Multi-Currency & Instant Conversion",
        description: "Accept payments globally in local guest currencies with automatic settlement."
      },
      {
        title: "Automated SMS & WhatsApp Alerts",
        description: "Instant booking confirmation receipts and trip itinerary updates sent directly to guest phones."
      },
      {
        title: "Real-Time Channel Manager Sync",
        description: "Seamless synchronization with Amadeus, Sabre, Booking.com, and Expedia."
      }
    ],
    industryServices: [
      {
        title: "Direct Hotel Web Engineering",
        slug: "web-development",
        description: "High-conversion direct booking websites and hotel brand portals.",
        iconName: "Globe"
      },
      {
        title: "Guest Mobile App Development",
        slug: "mobile-app-development",
        description: "Contactless mobile guest portals with digital room key support.",
        iconName: "Smartphone"
      },
      {
        title: "GDS & OTA API Integration",
        slug: "api-integration",
        description: "Channel manager API bridges for Amadeus, Sabre, and Booking.com.",
        iconName: "Cpu"
      },
      {
        title: "Travel Cloud Infrastructure",
        slug: "cloud-devops",
        description: "Auto-scaling serverless cloud compute for seasonal travel spikes.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Direct Resort Booking Engine",
        technology: "Next.js 16 + Go + Redis",
        application: "Built a high-speed direct web booking engine for a 500-room beach resort.",
        impact: "Increased direct web bookings by 42%, saving $120k in annual OTA commissions.",
        iconName: "Compass"
      },
      {
        title: "Contactless Mobile Guest Portal",
        technology: "React PWA + WebSockets + Stripe",
        application: "Allows hotel guests to check in and order room food from their mobile browser.",
        impact: "Reduced front desk check-in queue times by 75%.",
        iconName: "Smartphone"
      },
      {
        title: "Multi-OTA Channel Manager Sync",
        technology: "Go + GraphQL + Amadeus API",
        application: "Synchronizes live room inventory across 8 global booking channels in real time.",
        impact: "Zero overbooking incidents across 25,000 annual guest reservations.",
        iconName: "RefreshCw"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Analyze booking engine workflows, GDS integrations, and guest check-in goals." },
      { step: "02", title: "Plan", description: "Design atomic reservation locks, channel sync routes, and multi-currency schemas." },
      { step: "03", title: "Design", description: "Create inviting, mobile-friendly booking UIs focused on converting guests directly." },
      { step: "04", title: "Develop", description: "Implement high-speed reservation microservices and payment gateways." },
      { step: "05", title: "Test", description: "Conduct high-concurrency booking load tests and channel manager sync validation." },
      { step: "06", title: "Launch & Support", description: "Deploy on global cloud edge networks with 24/7 availability monitoring." }
    ],
    technologies: ["React", "Go", "Redis Locks", "Stripe", "GraphQL"],
    faqs: [
      {
        question: "Can your system synchronize with Amadeus, Sabre, or Booking.com?",
        answer: "Yes, we build custom API adapters connecting directly to major Global Distribution Systems (GDS) and OTA channel managers."
      },
      {
        question: "How do atomic locks prevent double bookings?",
        answer: "When a guest enters checkout, our Redis memory layer locks that specific room inventory for 10 minutes, preventing any parallel booking on OTAs."
      }
    ]
  },

  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    slug: "logistics-supply-chain",
    iconName: "Truck",
    badge: "Autonomous Fleet & GPS Telemetry",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "Logistics & Supply Chain",
    heroSubheadline: "Build real-time GPS fleet tracking dashboards, AI dynamic route optimization engines, cold-chain temperature monitors, and automated warehouse inventory logs.",
    heroImage: "/portfolio_cargo_track.png",
    overviewImage: "/farming-sustainability-mockup.png",
    description: "Fleet tracking & inventory optimization.",
    overview: {
      whatIsIt: "Logistics technology provides end-to-end visibility into fleet positions, cargo conditions, dynamic delivery routing, and automated warehouse stock replenishment.",
      challenges: [
        "Excessive vehicle fuel consumption caused by static inefficient delivery routes.",
        "Lack of real-time visibility into truck locations and delivery arrival times.",
        "Cold chain cargo spoilage due to undetected temperature fluctuations in transit.",
        "Manual paperwork and delayed proof-of-delivery signatures from drivers."
      ],
      whatBusinessesNeed: [
        "Sub-second GPS telemetry update intervals pushed to live dispatcher maps.",
        "AI dynamic routing algorithms calculating traffic, fuel efficiency, and drop windows.",
        "IoT sensor monitors logging cargo temperature and humidity during transit.",
        "Mobile driver apps with digital proof-of-delivery signature capture."
      ],
      howMitsafeSolves: "Mitsafe builds real-time vector map tracking dashboards, AI route optimization microservices, IoT telemetry databases, and mobile driver apps for logistics operators."
    },
    solutions: ["AI Dynamic Routing", "Real-Time Fleet Trackers", "Inventory Depletion Logs", "Vendor Invoice Automation"],
    techSolutions: [
      {
        title: "Sub-Second Real-Time GPS Tracking",
        whatItDoes: "Streams live vehicle positions, speed, and heading to dispatcher vector map dashboards.",
        whyUseful: "Gives logistics managers total visibility over active delivery fleets.",
        mainBenefit: "Sub-500ms map telemetry updates for thousands of trucks.",
        whereUsed: "Freight transport, courier delivery, & service fleets.",
        iconName: "Truck"
      },
      {
        title: "AI Dynamic Route Optimization",
        whatItDoes: "Calculates optimal multi-stop driver routes considering real-time traffic and fuel efficiency.",
        whyUseful: "Reduces total miles driven and speeds up package delivery times.",
        mainBenefit: "Cuts total fleet fuel expenses by up to 22%.",
        whereUsed: "Last-mile delivery, distribution hubs, & field service.",
        iconName: "Compass"
      },
      {
        title: "IoT Cold Chain Sensor Monitor",
        whatItDoes: "Logs real-time temperature and humidity readings inside refrigerated cargo trailers.",
        whyUseful: "Triggers instant alerts if cargo temperatures drift outside safe ranges.",
        mainBenefit: "Prevents perishable food and medicine spoilage during transit.",
        whereUsed: "Pharmaceutical logistics, food transport, & floral delivery.",
        iconName: "Gauge"
      },
      {
        title: "Mobile Driver Proof-of-Delivery App",
        whatItDoes: "Allows delivery drivers to capture digital customer signatures and photo receipts.",
        whyUseful: "Eliminates lost paper bills of lading and speeds up invoice payment cycles.",
        mainBenefit: "Instant digital proof of delivery uploaded to head office.",
        whereUsed: "Courier drivers, freight handlers, & cargo dispatchers.",
        iconName: "CheckCircle"
      }
    ],
    techComparison: [
      {
        technologyName: "TimescaleDB + WebSockets + Mapbox GL",
        bestFor: "Real-Time GPS Fleet Tracking & Dispatcher Maps",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-500ms live vehicle telemetry update across 50,000 trucks."
      },
      {
        technologyName: "Python Genetic AI + Node.js",
        bestFor: "Dynamic Route Optimization Microservices",
        speed: "Fast",
        scalability: "High",
        costLevel: "Balanced",
        mainBenefit: "Reduces fleet fuel consumption by 22% and delivery delays by 35%."
      },
      {
        technologyName: "React Native + AWS IoT Core",
        bestFor: "Driver Mobile Apps & Cargo Sensor Ingestion",
        speed: "Fast",
        scalability: "High",
        costLevel: "Cost Effective",
        mainBenefit: "Offline-capable driver app with real-time temperature sensor pushes."
      }
    ],
    keyBenefits: [
      {
        title: "Up to 22% Fleet Fuel Savings",
        description: "AI-calculated delivery routes that avoid traffic jams and minimize idle miles."
      },
      {
        title: "Sub-Second GPS Location Sync",
        description: "Real-time WebSocket telemetry pushes updating vehicle markers on dispatcher maps instantly."
      },
      {
        title: "Cold Chain Spoilage Prevention",
        description: "Continuous IoT sensor monitoring alerting dispatchers to temperature anomalies."
      },
      {
        title: "Instant Digital Proof-of-Delivery",
        description: "Mobile e-signatures and photo capture uploaded to cloud servers in seconds."
      },
      {
        title: "Automated Warehouse Inventory Sync",
        description: "Stock depletion logs synchronized automatically as packages leave loading docks."
      },
      {
        title: "Enterprise Fleet Telematics",
        description: "Integrated vehicle diagnostics tracking engine health, maintenance schedules, and driver habits."
      }
    ],
    industryServices: [
      {
        title: "Logistics Web Dashboard",
        slug: "web-development",
        description: "High-performance vector map tracking dashboards and dispatcher hubs.",
        iconName: "Globe"
      },
      {
        title: "Driver Mobile App Development",
        slug: "mobile-app-development",
        description: "Cross-platform mobile apps for drivers with route maps and e-signature proof of delivery.",
        iconName: "Smartphone"
      },
      {
        title: "AI Route & Inventory Automation",
        slug: "ai-automation",
        description: "AI route optimization algorithms and automated inventory depletion monitors.",
        iconName: "Cpu"
      },
      {
        title: "Logistics IoT Cloud Pipelines",
        slug: "cloud-devops",
        description: "High-throughput IoT telemetry ingestion and time-series database hosting.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Nationwide Freight Fleet Tracker",
        technology: "TimescaleDB + Mapbox GL + WebSockets",
        application: "Monitors 3,500 active long-haul trucks across national highway networks.",
        impact: "Improved on-time delivery rate from 82% to 97.4%.",
        iconName: "Truck"
      },
      {
        title: "AI Last-Mile Delivery Optimizer",
        technology: "Python AI + React Native Mobile",
        application: "Calculates optimal drop-off sequences for 200 urban courier vans daily.",
        impact: "Cut average fuel expenses by 22% and shortened daily shift hours by 45 minutes.",
        iconName: "Compass"
      },
      {
        title: "Pharma Cold-Chain IoT Monitor",
        technology: "AWS IoT Core + Node.js + InfluxDB",
        application: "Tracks vaccine temperature conditions inside refrigerated transport containers.",
        impact: "Zero cargo spoilage incidents across 50,000 delivered medical shipments.",
        iconName: "Gauge"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Audit fleet size, vehicle GPS hardware protocols, and dispatcher routing rules." },
      { step: "02", title: "Plan", description: "Design time-series telemetry schemas, WebSocket data pushes, and Mapbox map layers." },
      { step: "03", title: "Design", description: "Build clean dispatcher dashboard layouts focused on live fleet visibility and quick action." },
      { step: "04", title: "Develop", description: "Implement route optimization engines and offline driver mobile apps." },
      { step: "05", title: "Test", description: "Test GPS telemetry latency under poor cellular conditions and simulate fleet load spikes." },
      { step: "06", title: "Launch & Support", description: "Deploy on scalable cloud infrastructure with 24/7 telemetry monitoring." }
    ],
    technologies: ["React", "Python AI", "Mapbox GL", "WebSockets", "TimescaleDB"],
    faqs: [
      {
        question: "How often are GPS positions updated in the tracking dashboard?",
        answer: "We support real-time WebSocket telemetry pushes updated as fast as every 500 milliseconds per active vehicle."
      },
      {
        question: "Can your system integrate with existing vehicle OBD-II or CAN bus hardware?",
        answer: "Yes, we ingest standard cellular GPS telematics streams via custom MQTT or HTTPS payload decoders."
      }
    ]
  },

  {
    id: "manufacturing",
    title: "Manufacturing & Robotics",
    slug: "manufacturing",
    iconName: "Factory",
    badge: "Industrial IoT & Smart Factory",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "Manufacturing & Smart Factory",
    heroSubheadline: "Build industrial IoT telemetry pipelines, predictive machinery maintenance AI, Overall Equipment Effectiveness (OEE) dashboards, and automated PLC data monitors.",
    heroImage: "/solutions_engineering.png",
    overviewImage: "/engineering_hero.png",
    description: "IoT telemetry & factory pipeline monitors.",
    overview: {
      whatIsIt: "Smart factory technology connects industrial PLC controllers, robotic arms, and assembly line sensors into central cloud monitoring dashboards.",
      challenges: [
        "Unplanned machinery breakdowns causing costly assembly line shutdowns.",
        "Manual paper logs leading to inaccurate production metric tracking.",
        "Lack of visibility into Overall Equipment Effectiveness (OEE) across factory floors.",
        "Inability to detect component wear before severe mechanical damage occurs."
      ],
      whatBusinessesNeed: [
        "Sub-10ms sensor telemetry sampling across Modbus, OPC-UA, and MQTT protocols.",
        "AI predictive maintenance algorithms evaluating acoustic and vibration sensor data.",
        "Real-time control room dashboards displaying live OEE availability metrics.",
        "Automated scrap rate and inventory depletion tracking on assembly lines."
      ],
      howMitsafeSolves: "Mitsafe connects factory PLC hardware to cloud time-series databases, builds predictive ML maintenance models, and designs real-time industrial control dashboards."
    },
    solutions: ["IoT Telemetry Monitors", "Hardware Metrics Dashboard", "Factory Line Analytics", "Predictive Maintenance AI"],
    techSolutions: [
      {
        title: "Industrial IoT Sensor Ingestion",
        whatItDoes: "Ingests real-time vibration, temperature, and pressure data from factory machinery sensors.",
        whyUseful: "Provides control room engineers with minute-by-minute equipment health metrics.",
        mainBenefit: "Sub-10ms telemetry sampling across thousands of industrial sensors.",
        whereUsed: "Automotive assembly, chemical plants, & electronics factories.",
        iconName: "Factory"
      },
      {
        title: "Predictive Maintenance ML Engine",
        whatItDoes: "Analyzes equipment vibration logs using machine learning to detect micro-wear patterns.",
        whyUseful: "Flags component failure weeks in advance, allowing planned maintenance during non-production hours.",
        mainBenefit: "Prevents up to 85% of unplanned factory equipment breakdowns.",
        whereUsed: "Robotic arms, CNC machines, & heavy industrial turbines.",
        iconName: "Cpu"
      },
      {
        title: "Real-Time OEE Metrics Dashboard",
        whatItDoes: "Calculates Overall Equipment Effectiveness (OEE) by evaluating Availability, Performance, and Quality.",
        whyUseful: "Helps plant managers identify production bottlenecks and boost throughput.",
        mainBenefit: "Increases overall plant production efficiency by 15-20%.",
        whereUsed: "Factory control rooms & executive manufacturing dashboards.",
        iconName: "BarChart"
      },
      {
        title: "PLC & OPC-UA Protocol Bridge",
        whatItDoes: "Translates proprietary PLC hardware signals (Siemens, Allen-Bradley) into standard cloud APIs.",
        whyUseful: "Unifies legacy factory machinery data with modern web dashboards.",
        mainBenefit: "Connects legacy 20-year-old factory equipment to cloud dashboards.",
        whereUsed: "Industrial automation & smart factory upgrades.",
        iconName: "RefreshCw"
      }
    ],
    techComparison: [
      {
        technologyName: "MQTT + InfluxDB + Python ML",
        bestFor: "High-Frequency Industrial Telemetry & Predictive AI",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Enterprise Premium",
        mainBenefit: "Sub-10ms sensor sampling and 85% reduction in machinery failure."
      },
      {
        technologyName: "Node.js + React + Grafana",
        bestFor: "Control Room Dashboards & OEE Analytics",
        speed: "Fast",
        scalability: "High",
        costLevel: "Cost Effective",
        mainBenefit: "Real-time 60fps factory metrics visualization."
      },
      {
        technologyName: "OPC-UA Edge Gateway + PostgreSQL",
        bestFor: "PLC Industrial Hardware Interoperability",
        speed: "Fast",
        scalability: "High",
        costLevel: "Balanced",
        mainBenefit: "Seamless bridge connecting legacy PLCs to cloud databases."
      }
    ],
    keyBenefits: [
      {
        title: "85% Fewer Machinery Breakdown Incidents",
        description: "AI predictive maintenance detecting component wear weeks before physical failure."
      },
      {
        title: "Sub-10ms Industrial Telemetry Sampling",
        description: "Ultra-fast IoT sensor ingestion supporting Modbus, OPC-UA, and MQTT standards."
      },
      {
        title: "Real-Time OEE Factory Visibility",
        description: "Control room dashboards tracking availability, yield rates, and assembly line bottlenecks."
      },
      {
        title: "Legacy PLC Hardware Bridge",
        description: "Connect existing Siemens and Allen-Bradley hardware without replacing machinery."
      },
      {
        title: "Automated Production Quality Audit",
        description: "Computer vision quality inspection flagging defective parts on conveyor belts."
      },
      {
        title: "Energy & Resource Optimization",
        description: "Monitors factory power consumption and optimizes heavy machine duty cycles."
      }
    ],
    industryServices: [
      {
        title: "Industrial Web Control Dashboards",
        slug: "web-development",
        description: "Real-time OEE and assembly line web analytics dashboards.",
        iconName: "Globe"
      },
      {
        title: "Factory Line Mobile Apps",
        slug: "mobile-app-development",
        description: "Mobile technician apps for maintenance alerts and work orders.",
        iconName: "Smartphone"
      },
      {
        title: "Predictive Maintenance AI",
        slug: "ai-automation",
        description: "Machine learning algorithms evaluating sensor wear telemetry.",
        iconName: "Cpu"
      },
      {
        title: "IoT Time-Series Cloud Architecture",
        slug: "cloud-devops",
        description: "High-throughput InfluxDB and TimescaleDB time-series cloud pipelines.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Automotive Assembly Line Telemetry",
        technology: "MQTT + InfluxDB + React Control Dashboard",
        application: "Monitors 800 robotic welding arms across 3 factory floors in real time.",
        impact: "Increased overall equipment effectiveness (OEE) from 71% to 86%.",
        iconName: "Factory"
      },
      {
        title: "Predictive Bearing Wear AI",
        technology: "Python ML + Edge IoT Sensors",
        application: "Analyzes motor vibration telemetry to flag bearing failure before breakdowns.",
        impact: "Prevented 14 unplanned factory shutdowns, saving $380,000 in downtime costs.",
        iconName: "Cpu"
      },
      {
        title: "PLC Legacy Equipment Bridge",
        technology: "OPC-UA Edge Gateway + Node.js",
        application: "Connects 20-year-old stamping presses to modern cloud web dashboards.",
        impact: "Eliminated manual paper clipboard logging completely.",
        iconName: "RefreshCw"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Audit factory PLC protocols, sensor placement, and maintenance history." },
      { step: "02", title: "Plan", description: "Architect IoT edge gateways, time-series data schemas, and ML training pipelines." },
      { step: "03", title: "Design", description: "Create high-contrast control room dashboard UIs optimized for instant operator awareness." },
      { step: "04", title: "Develop", description: "Implement MQTT data ingestors, predictive ML models, and real-time dashboards." },
      { step: "05", title: "Test", description: "Stress-test sensor ingestion speeds and validate ML failure prediction accuracy." },
      { step: "06", title: "Launch & Support", description: "Deploy on industrial edge nodes with continuous monitoring and 24/7 SLA backing." }
    ],
    technologies: ["Node.js", "MQTT", "Python ML", "InfluxDB", "Grafana / React"],
    faqs: [
      {
        question: "What industrial IoT protocols do you support?",
        answer: "We interface directly with Modbus, OPC-UA, MQTT, and Siemens S7 controllers."
      },
      {
        question: "How does predictive maintenance prevent equipment breakdowns?",
        answer: "Our ML models analyze high-frequency vibration and temperature telemetry to detect microscopic mechanical friction trends long before a component physically breaks."
      }
    ]
  },

  {
    id: "media",
    title: "Media & Entertainment",
    slug: "media-entertainment",
    iconName: "Tv",
    badge: "Sub-Second Live Video Streaming",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "Media & Entertainment",
    heroSubheadline: "Build high-throughput HLS/DASH video streaming delivery networks, digital asset management (DAM) portals, sub-second live WebRTC streams, and subscription monetization platforms.",
    heroImage: "/video-editing-mockup.png",
    overviewImage: "/game-dev-showcase.png",
    description: "Streaming architectures & asset portals.",
    overview: {
      whatIsIt: "Media technology powers video-on-demand (VOD), sub-second live event streaming, digital asset management (DAM), and multi-tier subscription paywalls.",
      challenges: [
        "Constant video buffering and lag on low-bandwidth mobile connections.",
        "High digital piracy risks exposing unencrypted video content links.",
        "Slow search and retrieval across massive multi-terabyte creative asset libraries.",
        "High cloud bandwidth and video transcoding bill costs."
      ],
      whatBusinessesNeed: [
        "Adaptive multi-bitrate HLS/DASH video encoding pipelines for smooth playback.",
        "Widevine and FairPlay DRM content protection preventing unauthorized downloads.",
        "Global edge CDN streaming architecture ensuring sub-second video startup times.",
        "Enterprise Digital Asset Management (DAM) with automated AI tagging."
      ],
      howMitsafeSolves: "Mitsafe builds custom video-on-demand platforms, DRM-protected streaming networks, cloud transcoding pipelines, and high-performance digital asset portals."
    },
    solutions: ["Live Streaming Platforms", "Digital Asset Portals", "Content Monetization Hubs", "Dynamic Video Transcoding"],
    techSolutions: [
      {
        title: "Adaptive HLS / DASH Video Pipeline",
        whatItDoes: "Transcodes raw video uploads into multiple resolution bitrates (1080p, 720p, 480p, 360p).",
        whyUseful: "Ensures smooth playback without buffering wheels regardless of internet speed.",
        mainBenefit: "Zero buffering playback across mobile and desktop devices.",
        whereUsed: "Streaming platforms, educational video portals, & news media.",
        iconName: "Tv"
      },
      {
        title: "Widevine & FairPlay DRM Protection",
        whatItDoes: "Encrypts video streams with cryptographic key licenses issued only to authorized subscribers.",
        whyUseful: "Prevents screen recording, video scraping, and pirated distribution.",
        mainBenefit: "100% anti-piracy content protection guarantee.",
        whereUsed: "Subscription OTT platforms, movie portals, & premium courses.",
        iconName: "Lock"
      },
      {
        title: "Sub-Second Live WebRTC Streaming",
        whatItDoes: "Delivers ultra-low-latency live broadcasts to hundreds of thousands of concurrent viewers.",
        whyUseful: "Enables real-time interactive audience polling, chat, and live commerce.",
        mainBenefit: "Sub-second live broadcast latency (under 800ms).",
        whereUsed: "Live sports events, e-sports, & interactive auctions.",
        iconName: "Zap"
      },
      {
        title: "AI Digital Asset Management (DAM)",
        whatItDoes: "Organizes, tags, and indexes video clips, audio tracks, and high-res images using AI.",
        whyUseful: "Allows video editors and creative teams to find specific media assets instantly.",
        mainBenefit: "Reduces asset search time by up to 70%.",
        whereUsed: "Film studios, advertising agencies, & newsrooms.",
        iconName: "Folder"
      }
    ],
    techComparison: [
      {
        technologyName: "HLS / WebRTC + Cloudflare Stream CDN",
        bestFor: "Live Event Broadcasts & Video-On-Demand",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-second live video startup and zero buffering playback."
      },
      {
        technologyName: "Next.js 16 + Widevine DRM",
        bestFor: "Protected OTT Subscription Web Portals",
        speed: "Fast",
        scalability: "High",
        costLevel: "Balanced",
        mainBenefit: "Instant page browsing with complete anti-piracy encryption."
      },
      {
        technologyName: "FFmpeg + AWS Elemental Transcoder",
        bestFor: "High-Volume Multi-Bitrate Cloud Video Encoding",
        speed: "Fast",
        scalability: "Ultra High",
        costLevel: "Enterprise Premium",
        mainBenefit: "Automated adaptive video encoding pipelines."
      }
    ],
    keyBenefits: [
      {
        title: "Zero Video Buffering Playback",
        description: "Adaptive multi-bitrate streaming adjusting dynamically to viewer internet speed."
      },
      {
        title: "Hardware-Grade Anti-Piracy DRM",
        description: "Widevine and FairPlay video encryption stopping illegal video captures."
      },
      {
        title: "Sub-Second Live Broadcast Latency",
        description: "Low-latency WebRTC pipelines built for interactive sports and live chat."
      },
      {
        title: "Global Cloud CDN Edge Delivery",
        description: "Multi-terabit edge CDN distribution delivering fast video worldwide."
      },
      {
        title: "70% Faster Digital Asset Search",
        description: "AI-assisted media metadata tagging indexing videos, audio, and graphics."
      },
      {
        title: "Flexible Monetization Models",
        description: "Built-in support for SVOD (subscriptions), TVOD (pay-per-view), and AVOD (ad-supported)."
      }
    ],
    industryServices: [
      {
        title: "Media Web Platform Development",
        slug: "web-development",
        description: "High-speed video-on-demand web portals and OTT streaming apps.",
        iconName: "Globe"
      },
      {
        title: "OTT Mobile & TV Apps",
        slug: "mobile-app-development",
        description: "Native iOS, Android, Apple TV, and Smart TV video streaming applications.",
        iconName: "Smartphone"
      },
      {
        title: "AI Media Tagging & Automation",
        slug: "ai-automation",
        description: "AI video thumbnail generation and automated subtitle transcription.",
        iconName: "Cpu"
      },
      {
        title: "Global Video CDN Infrastructure",
        slug: "cloud-devops",
        description: "High-bandwidth edge CDN delivery setup and transcoding cloud pipelines.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Regional OTT Video Streaming Service",
        technology: "Next.js 16 + Cloudflare Stream + Stripe",
        application: "Delivers 5,000+ hours of movies and TV shows with subscriber paywalls.",
        impact: "Scaled to 250,000 active paid subscribers with 99.99% video playback uptime.",
        iconName: "Tv"
      },
      {
        title: "Live E-Sports Webcast Network",
        technology: "WebSockets + WebRTC + Redis",
        application: "Streams low-latency gaming tournaments with live chat for 150k viewers.",
        impact: "Achieved sub-second live stream latency (700ms) with zero stream crashes.",
        iconName: "Zap"
      },
      {
        title: "Broadcast Studio Digital Asset Vault",
        technology: "AWS S3 + FFmpeg + Python AI Tagging",
        application: "Indexes 100 Terabytes of archival footage for rapid video editor retrieval.",
        impact: "Cut video editor media search times by 70%.",
        iconName: "Folder"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Audit video catalog size, live concurrency targets, and DRM compliance needs." },
      { step: "02", title: "Plan", description: "Design adaptive bitrate encoding specs, CDN edge routing, and subscription database models." },
      { step: "03", title: "Design", description: "Create sleek video player UIs with custom controls, recommendations, and subtitle toggles." },
      { step: "04", title: "Develop", description: "Build video web apps, DRM licensing endpoints, and automated transcoding queues." },
      { step: "05", title: "Test", description: "Perform multi-device video playback checks, DRM key verification, and CDN stress tests." },
      { step: "06", title: "Launch & Support", description: "Deploy to global edge video delivery networks with 24/7 stream telemetry monitoring." }
    ],
    technologies: ["Next.js", "FFmpeg", "AWS Elemental / Cloudflare Stream", "S3", "TailwindCSS"],
    faqs: [
      {
        question: "How do you protect copyrighted video media from piracy?",
        answer: "We implement Widevine and FairPlay DRM encryptions with dynamic tokenized video playback URLs."
      },
      {
        question: "What is adaptive bitrate streaming?",
        answer: "Adaptive bitrate streaming breaks video into small chunks encoded at multiple resolutions. The video player automatically switches bitrates based on viewer internet speed to prevent buffering."
      }
    ]
  },

  {
    id: "saas",
    title: "SaaS & Technology",
    slug: "saas-technology",
    iconName: "Cloud",
    badge: "Multi-Tenant Enterprise SaaS",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "SaaS & Software Companies",
    heroSubheadline: "Engineer scalable multi-tenant SaaS platforms, automated Stripe subscription metering, row-level tenant security, and SAML 2.0 Enterprise Single Sign-On (SSO).",
    heroImage: "/hero-ai-solutions.png",
    overviewImage: "/hero-cloud-devops.png",
    description: "Multi-tenant platforms & microservices.",
    overview: {
      whatIsIt: "SaaS technology powers multi-tenant cloud software, recurring billing subscriptions, role-based access control (RBAC), and developer API infrastructures.",
      challenges: [
        "Complex multi-tenant database isolation to prevent cross-customer data leaks.",
        "High churn rates caused by slow dashboard loading times.",
        "Manual invoice and billing disputes from non-automated tier upgrades.",
        "Inability to close enterprise B2B deals due to missing SAML SSO / Okta support."
      ],
      whatBusinessesNeed: [
        "Isolated multi-tenant database schemas with sub-50ms API gateway responses.",
        "Automated usage-based billing, seat licensing, and dunning management via Stripe.",
        "Enterprise SAML 2.0 and OIDC authentication supporting Okta, Azure AD, and Google.",
        "Zero-downtime CI/CD deployment pipelines for rapid feature iteration."
      ],
      howMitsafeSolves: "Mitsafe builds enterprise-grade multi-tenant SaaS foundations, automated Stripe billing engines, Okta/SAML SSO integrations, and scalable Kubernetes microservices."
    },
    solutions: ["Multi-Tenant Platforms", "Subscription Auto-Billing", "Cloud API Infrastructures", "Granular RBAC Systems"],
    techSolutions: [
      {
        title: "Isolated Multi-Tenant Architecture",
        whatItDoes: "Enforces strict database row-level security or schema-per-tenant data isolation.",
        whyUseful: "Guarantees complete enterprise tenant data privacy with zero leak risk.",
        mainBenefit: "Sub-50ms query speeds with 100% tenant data isolation.",
        whereUsed: "B2B SaaS platforms, enterprise portals, & cloud tools.",
        iconName: "Cloud"
      },
      {
        title: "Automated Stripe Billing Engine",
        whatItDoes: "Handles recurring subscription plans, usage metering, seat licenses, and automated dunning.",
        whyUseful: "Automates all billing operations without requiring manual accounting touchpoints.",
        mainBenefit: "Reduces payment churn and invoice processing costs.",
        whereUsed: "Subscription software, API tools, & cloud platforms.",
        iconName: "CreditCard"
      },
      {
        title: "Enterprise SAML 2.0 / Okta SSO",
        whatItDoes: "Allows enterprise clients to log into your SaaS using their corporate Okta or Azure AD credentials.",
        whyUseful: "Removes security roadblocks to closing large enterprise enterprise contracts.",
        mainBenefit: "Unlocks high-value $50k+ ARR enterprise sales deals.",
        whereUsed: "B2B SaaS products selling into corporate enterprises.",
        iconName: "Lock"
      },
      {
        title: "Granular RBAC & Permission Matrix",
        whatItDoes: "Manages admin, manager, and user access permissions across organizational teams.",
        whyUseful: "Gives SaaS account admins total control over member privileges.",
        mainBenefit: "Prevents unauthorized access to sensitive company data.",
        whereUsed: "Team collaboration platforms & enterprise dashboards.",
        iconName: "UserCheck"
      }
    ],
    techComparison: [
      {
        technologyName: "Next.js 16 + PostgreSQL + Docker / K8s",
        bestFor: "Modern B2B Multi-Tenant SaaS Products",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-50ms API gateway responses & zero-downtime deployments."
      },
      {
        technologyName: "Node.js + Redis + Stripe Billing API",
        bestFor: "Usage-Based Subscription Billing & Metering",
        speed: "Fast",
        scalability: "High",
        costLevel: "Cost Effective",
        mainBenefit: "Automates subscription upgrades and invoice processing."
      },
      {
        technologyName: "SAML 2.0 / OIDC + Okta Middleware",
        bestFor: "Enterprise Single Sign-On (SSO)",
        speed: "Fast",
        scalability: "High",
        costLevel: "Balanced",
        mainBenefit: "Closes corporate enterprise security compliance requirements."
      }
    ],
    keyBenefits: [
      {
        title: "Sub-50ms API Gateway Responses",
        description: "Ultra-fast Next.js and microservice response times for seamless user experience."
      },
      {
        title: "Complete Multi-Tenant Isolation",
        description: "Row-level security or database-per-tenant models ensuring total data privacy."
      },
      {
        title: "Enterprise SAML / Okta SSO Ready",
        description: "Built-in Single Sign-On support to accelerate enterprise B2B sales cycles."
      },
      {
        title: "Automated Usage-Based Stripe Billing",
        description: "Seamless seat licensing, tier upgrades, proration, and dunning management."
      },
      {
        title: "Zero-Downtime Blue/Green Deployments",
        description: "Deploy new feature updates continuously without interrupting active users."
      },
      {
        title: "Scalable Microservices Topology",
        description: "Modular containerized infrastructure that grows effortlessly from 100 to 1,000,000 users."
      }
    ],
    industryServices: [
      {
        title: "SaaS Product Web Engineering",
        slug: "web-development",
        description: "High-speed Next.js multi-tenant web applications and client dashboards.",
        iconName: "Globe"
      },
      {
        title: "SaaS Mobile Applications",
        slug: "mobile-app-development",
        description: "iOS and Android companion apps with real-time push notifications.",
        iconName: "Smartphone"
      },
      {
        title: "AI Integration & Automation",
        slug: "ai-automation",
        description: "Embedded AI co-pilots, automated summaries, and smart workflow bots.",
        iconName: "Cpu"
      },
      {
        title: "Cloud & Kubernetes DevOps",
        slug: "cloud-devops",
        description: "Auto-scaling Docker/K8s cloud infrastructure with CI/CD deployment pipelines.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Enterprise Project Management SaaS",
        technology: "Next.js 16 + PostgreSQL + Docker",
        application: "Multi-tenant workspace tool supporting 50,000 active corporate users.",
        impact: "Achieved sub-50ms page load speeds and 99.99% system uptime.",
        iconName: "Cloud"
      },
      {
        title: "Usage-Based API Analytics Platform",
        technology: "Node.js + Redis + Stripe API",
        application: "Meters developer API calls and automatically generates monthly usage invoices.",
        impact: "Automated 100% of billing cycles with zero manual accounting errors.",
        iconName: "CreditCard"
      },
      {
        title: "B2B SaaS Enterprise SSO Gateway",
        technology: "SAML 2.0 + Okta + Azure AD",
        application: "Enabled Single Sign-On for Fortune 500 corporate software buyers.",
        impact: "Shortened enterprise sales closing cycles from 6 months to 3 weeks.",
        iconName: "Lock"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Audit multi-tenant requirements, subscription tiers, and security compliance standards." },
      { step: "02", title: "Plan", description: "Design database isolation schemas, Stripe billing pipelines, and SAML SSO auth flows." },
      { step: "03", title: "Design", description: "Craft clean, intuitive SaaS dashboard UIs optimized for user retention and daily workflow." },
      { step: "04", title: "Develop", description: "Build scalable microservices and web applications with automated unit and E2E tests." },
      { step: "05", title: "Test", description: "Conduct multi-tenant security leak audits, API load tests, and billing flow checks." },
      { step: "06", title: "Launch & Support", description: "Deploy on auto-scaling Kubernetes clusters with continuous 24/7 monitoring." }
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker / K8s", "Stripe"],
    faqs: [
      {
        question: "Do you support Enterprise Single Sign-On (SSO)?",
        answer: "Yes, we integrate SAML 2.0 and OIDC authentication with Okta, Azure AD, and Google Workspace."
      },
      {
        question: "How do you ensure data isolation between different SaaS tenant accounts?",
        answer: "We enforce PostgreSQL Row Level Security (RLS) policies or dedicated database schemas per tenant, ensuring zero data leakage between customer accounts."
      }
    ]
  },

  {
    id: "automotive",
    title: "Automotive & Mobility",
    slug: "automotive",
    iconName: "Car",
    badge: "Connected Car & Telematics",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "Automotive & Connected Mobility",
    heroSubheadline: "Build connected vehicle telematics apps, CAN bus diagnostic ingestors, dealership service scheduling portals, and real-time remote vehicle command gateways.",
    heroImage: "/zupee-mockup.png",
    overviewImage: "/seo-keyboard-mockup.png",
    description: "Connected vehicle apps & fleet telematics.",
    overview: {
      whatIsIt: "Automotive technology connects vehicles to mobile apps, ingests CAN bus hardware telemetry, automates dealership maintenance, and powers connected mobility fleets.",
      challenges: [
        "High-frequency CAN bus telemetry data drops over cellular vehicle connections.",
        "Delayed remote mobile app commands (door lock/unlock, climate start).",
        "Disorganized dealership service scheduling causing long customer wait times.",
        "Lack of predictive diagnostic alerts for battery and engine wear."
      ],
      whatBusinessesNeed: [
        "AWS IoT Core MQTT telemetry ingestion supporting millions of connected vehicles.",
        "Sub-200ms remote mobile app command execution over hardware cellular bridges.",
        "Automated dealership service appointment booking web applications.",
        "Machine learning diagnostic engines analyzing battery health and DTC error codes."
      ],
      howMitsafeSolves: "Mitsafe engineers mobile vehicle owner apps, high-throughput IoT telemetry ingestors, remote hardware command gateways, and dealership management portals."
    },
    solutions: ["Fleet Telematics Nodes", "Dealership Management", "Connected Vehicle Apps", "Remote Diagnostics"],
    techSolutions: [
      {
        title: "Connected Vehicle Owner App",
        whatItDoes: "Allows drivers to view vehicle location, fuel level, tire pressure, and remote lock/unlock.",
        whyUseful: "Delivers a premium digital companion experience for modern car owners.",
        mainBenefit: "Sub-200ms remote command execution speed.",
        whereUsed: "Electric vehicle (EV) OEMs, car rental fleets, & connected cars.",
        iconName: "Car"
      },
      {
        title: "CAN Bus Telemetry Ingestor",
        whatItDoes: "Logs real-time battery voltage, engine RPM, diagnostic codes (DTCs), and GPS position.",
        whyUseful: "Gives automakers and fleet managers complete real-time vehicle health insights.",
        mainBenefit: "Ingests over 100 telemetry parameters per second per vehicle.",
        whereUsed: "EV battery monitoring & commercial fleet telematics.",
        iconName: "Gauge"
      },
      {
        title: "Dealership Service Scheduler",
        whatItDoes: "Automates customer service booking, inventory lookup, and maintenance reminder alerts.",
        whyUseful: "Increases dealership service bay throughput and customer retention.",
        mainBenefit: "Boosts dealer service booking conversion by 35%.",
        whereUsed: "Auto dealerships, repair networks, & service centers.",
        iconName: "Calendar"
      },
      {
        title: "AI Vehicle Predictive Diagnostics",
        whatItDoes: "Evaluates sensor trends to predict battery or brake component failure before breakdowns.",
        whyUseful: "Alerts car owners to schedule service before getting stranded on the road.",
        mainBenefit: "Reduces roadside breakdown incidents by 50%.",
        whereUsed: "Connected car networks & EV battery management.",
        iconName: "Cpu"
      }
    ],
    techComparison: [
      {
        technologyName: "AWS IoT Core + React Native + MQTT",
        bestFor: "Connected Car Apps & Hardware Remote Commands",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-200ms remote command execution over hardware cellular links."
      },
      {
        technologyName: "Python ML + TimescaleDB Telemetry",
        bestFor: "EV Battery Health & Predictive Diagnostics",
        speed: "Fast",
        scalability: "High",
        costLevel: "Balanced",
        mainBenefit: "Detects battery degradation trends weeks in advance."
      },
      {
        technologyName: "Next.js 16 + PostgreSQL + Stripe",
        bestFor: "Dealership Management & Service Portals",
        speed: "Fast",
        scalability: "High",
        costLevel: "Cost Effective",
        mainBenefit: "Instant service booking with 99+ Lighthouse web speed."
      }
    ],
    keyBenefits: [
      {
        title: "Sub-200ms Remote Command Speed",
        description: "Instant cellular execution of mobile lock, unlock, and climate start commands."
      },
      {
        title: "100+ Parameters/Sec Telemetry Ingest",
        description: "High-throughput CAN bus data logging tracking battery, tire, and engine diagnostics."
      },
      {
        title: "50% Fewer Roadside Breakdowns",
        description: "AI predictive diagnostic alerts flagging vehicle component degradation early."
      },
      {
        title: "35% More Dealership Service Bookings",
        description: "Self-service mobile booking portals simplifying maintenance appointments."
      },
      {
        title: "Hardware Cryptographic Security",
        description: "Encrypted device key pairs preventing unauthorized remote vehicle control."
      },
      {
        title: "Cross-Platform iOS & Android Apps",
        description: "Sleek, responsive companion mobile applications for modern connected vehicle owners."
      }
    ],
    industryServices: [
      {
        title: "Automotive Web Portals",
        slug: "web-development",
        description: "Dealership management systems and vehicle owner account web apps.",
        iconName: "Globe"
      },
      {
        title: "Connected Vehicle Mobile Apps",
        slug: "mobile-app-development",
        description: "iOS and Android car companion apps with remote command triggers.",
        iconName: "Smartphone"
      },
      {
        title: "Predictive Vehicle AI",
        slug: "ai-automation",
        description: "Machine learning diagnostic engines for EV battery and engine health.",
        iconName: "Cpu"
      },
      {
        title: "Automotive IoT Cloud Architecture",
        slug: "cloud-devops",
        description: "AWS IoT Core MQTT telemetry ingestion and time-series database hosting.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "EV Connected Owner Companion App",
        technology: "React Native + AWS IoT Core + MQTT",
        application: "Enables EV drivers to monitor charging progress and start climate control remotely.",
        impact: "Achieved an active daily user engagement rate of 88% across 40,000 EV owners.",
        iconName: "Car"
      },
      {
        title: "Multi-Location Dealer Service Scheduler",
        technology: "Next.js 16 + PostgreSQL + SMS API",
        application: "Automates appointment booking and maintenance reminder notifications across 25 auto dealerships.",
        impact: "Increased service department revenue by 32%.",
        iconName: "Calendar"
      },
      {
        title: "Commercial Vehicle Diagnostics Hub",
        technology: "Python ML + TimescaleDB + WebSockets",
        application: "Ingests CAN bus DTC error codes from 5,000 commercial delivery vans.",
        impact: "Cut fleet maintenance repair costs by $220,000 annually.",
        iconName: "Gauge"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Audit vehicle telematics protocols, cellular TCU hardware specs, and user app goals." },
      { step: "02", title: "Plan", description: "Design MQTT telemetry ingest pipelines, encrypted key exchange, and database schemas." },
      { step: "03", title: "Design", description: "Craft intuitive mobile and web UIs tailored for quick remote control and vehicle health monitoring." },
      { step: "04", title: "Develop", description: "Implement high-speed IoT microservices and cross-platform mobile owner apps." },
      { step: "05", title: "Test", description: "Test remote command latency under weak cellular signals and verify security encryption." },
      { step: "06", title: "Launch & Support", description: "Deploy on AWS IoT cloud edge infrastructure with 24/7 telemetry monitoring." }
    ],
    technologies: ["React Native", "Python", "WebSockets", "AWS IoT Core", "PostgreSQL"],
    faqs: [
      {
        question: "Can your mobile apps send remote lock/unlock or start commands?",
        answer: "Yes, we build secure encrypted cloud gateway API bridges to hardware telematics control units (TCUs)."
      },
      {
        question: "How do you protect connected vehicles against remote hacking?",
        answer: "We enforce hardware-grade cryptographic key pair authentication and TLS 1.3 encrypted MQTT channels, ensuring only authorized owner tokens can issue vehicle commands."
      }
    ]
  },

  {
    id: "professionalservices",
    title: "Professional Services",
    slug: "professional-services",
    iconName: "Briefcase",
    badge: "Enterprise Workflow Automation",
    heroHeadline: "Technology Solutions for",
    heroHighlight: "Professional Services",
    heroSubheadline: "Build custom ERP & CRM systems, client document hub portals, automated time tracking, and e-signature billing workflows tailored for law firms, consultancies, and agencies.",
    heroImage: "/hero-crm-erp.png",
    overviewImage: "/contact-team-illustration.png",
    description: "Custom ERP, CRM & workflow automation.",
    overview: {
      whatIsIt: "Professional services technology streamlines client onboarding, project time tracking, billing invoicing, secure document sharing, and deal pipeline management.",
      challenges: [
        "Excessive time lost on manual administrative paperwork and invoice generation.",
        "Rigid, expensive off-the-shelf CRMs that don't match actual business workflows.",
        "Disorganized client communications and unsecure file sharing over email.",
        "Uncaptured billable hours leading to revenue leakage."
      ],
      whatBusinessesNeed: [
        "100% custom CRM and lead pipelines matching your exact sales stages.",
        "Secure client portals for instant file sharing, invoice payments, and project updates.",
        "Automated billable time tracking and one-click client invoicing.",
        "e-Signature contract workflows reducing contract finalization delays."
      ],
      howMitsafeSolves: "Mitsafe builds custom enterprise CRMs, secure client document portals, automated billing engines, and workflow automation microservices tailored around your business process."
    },
    solutions: ["Custom Enterprise CRM", "Workflow Automation", "Client Portal Analytics", "Time & Billing Tracking"],
    techSolutions: [
      {
        title: "Custom Enterprise CRM & Lead Pipeline",
        whatItDoes: "Tracks prospective leads, deal stages, communication history, and revenue forecasts.",
        whyUseful: "Replaces generic off-the-shelf software with a tool tailored 100% to your workflow.",
        mainBenefit: "Increases sales deal closing rates by up to 30%.",
        whereUsed: "Law firms, consultancies, marketing agencies, & accounting firms.",
        iconName: "Briefcase"
      },
      {
        title: "Secure Client Document Portal",
        whatItDoes: "Provides clients with a branded portal to review project updates, pay invoices, and upload files.",
        whyUseful: "Eliminates unsecure email file attachments and improves client satisfaction.",
        mainBenefit: "SOC2-compliant encrypted client document storage.",
        whereUsed: "Legal practices, financial advisory, & corporate consulting.",
        iconName: "Folder"
      },
      {
        title: "Automated Time & Billing Tracker",
        whatItDoes: "Logs consultant billable hours and automatically generates branded PDF invoices.",
        whyUseful: "Ensures every billable minute is captured and billed accurately.",
        mainBenefit: "Recovers up to 15% in previously unbilled staff hours.",
        whereUsed: "IT consultancies, architectural firms, & legal offices.",
        iconName: "Clock"
      },
      {
        title: "e-Signature Contract Workflow",
        whatItDoes: "Routes proposals and retainer agreements for instant electronic signature approval.",
        whyUseful: "Shortens client onboarding timelines from days to minutes.",
        mainBenefit: "Reduces contract signing turnaround times by 80%.",
        whereUsed: "Agencies, legal practices, & advisory firms.",
        iconName: "FileCheck"
      }
    ],
    techComparison: [
      {
        technologyName: "Next.js 16 + PostgreSQL + TailwindCSS",
        bestFor: "Custom Enterprise CRM & Client Portals",
        speed: "Ultra Fast",
        scalability: "Ultra High",
        costLevel: "Cost Effective",
        mainBenefit: "Sub-second page loads and 100% customizable workflow pipelines."
      },
      {
        technologyName: "Node.js + Stripe API + PDF Generator",
        bestFor: "Automated Time Tracking & Invoicing Engines",
        speed: "Fast",
        scalability: "High",
        costLevel: "Cost Effective",
        mainBenefit: "Automates 90% of recurring monthly client invoicing."
      },
      {
        technologyName: "DocuSign / HelloSign API Integration",
        bestFor: "e-Signature Proposal Execution",
        speed: "Fast",
        scalability: "High",
        costLevel: "Balanced",
        mainBenefit: "Cuts proposal signing turnaround time by 80%."
      }
    ],
    keyBenefits: [
      {
        title: "30%+ Reduction in Admin Overhead",
        description: "Automate repetitive data entry, proposal routing, and invoice reminders."
      },
      {
        title: "Recover Unbilled Hours",
        description: "Precise time tracking tools that capture every billable consultant minute."
      },
      {
        title: "SOC2-Compliant Client Portals",
        description: "Encrypted file sharing portals that protect sensitive client documents."
      },
      {
        title: "100% Customized CRM Pipelines",
        description: "Software designed around your exact sales stages—not rigid generic templates."
      },
      {
        title: "80% Faster Contract Execution",
        description: "Integrated e-signature workflows for instant proposal approvals."
      },
      {
        title: "Executive Revenue Analytics",
        description: "Real-time visual dashboards tracking deal pipelines, team utilization, and MRR."
      }
    ],
    industryServices: [
      {
        title: "Custom CRM & Web Portals",
        slug: "web-development",
        description: "Tailored enterprise CRM applications and secure client document portals.",
        iconName: "Globe"
      },
      {
        title: "Client Companion Mobile Apps",
        slug: "mobile-app-development",
        description: "Mobile apps for client communication, document reviews, and payments.",
        iconName: "Smartphone"
      },
      {
        title: "Workflow & Billing Automation",
        slug: "ai-automation",
        description: "Automated invoice generation, proposal routing, and CRM pipeline triggers.",
        iconName: "Cpu"
      },
      {
        title: "Enterprise Cloud Infrastructure",
        slug: "cloud-devops",
        description: "Secure, SOC2-certified cloud database hosting and encrypted file storage.",
        iconName: "Cloud"
      }
    ],
    useCases: [
      {
        title: "Legal Practice Management Portal",
        technology: "Next.js 16 + PostgreSQL + DocuSign API",
        application: "Handles client case files, retainer e-signatures, and billable time tracking for a 60-lawyer firm.",
        impact: "Cut administrative overhead by 35% and accelerated retainer payments.",
        iconName: "Briefcase"
      },
      {
        title: "Global Management Consulting CRM",
        technology: "Next.js + Node.js + Stripe API",
        application: "Manages enterprise lead pipelines and project billing across 8 international offices.",
        impact: "Increased deal pipeline conversion rates by 28%.",
        iconName: "BarChart"
      },
      {
        title: "Agency Client Portal & Asset Vault",
        technology: "Next.js + AWS S3 + WebSockets",
        application: "Provides clients with real-time project milestone tracking and deliverable file approvals.",
        impact: "Achieved a 98% client satisfaction rating and eliminated email attachment loss.",
        iconName: "Folder"
      }
    ],
    process: [
      { step: "01", title: "Discover", description: "Analyze your internal business stages, document workflows, and billing models." },
      { step: "02", title: "Plan", description: "Architect custom CRM pipeline schemas, file storage security, and API integrations." },
      { step: "03", title: "Design", description: "Craft clean, professional UI layouts optimized for consultant productivity and client ease." },
      { step: "04", title: "Develop", description: "Build custom web applications, e-signature engines, and automated billing queues." },
      { step: "05", title: "Test", description: "Perform document encryption audits, workflow pipeline checks, and user testing." },
      { step: "06", title: "Launch & Support", description: "Deploy with comprehensive team training, cloud backup pipelines, and 24/7 support." }
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "Stripe API"],
    faqs: [
      {
        question: "Can you customize the CRM workflow to match our internal process?",
        answer: "Unlike rigid off-the-shelf CRMs, our custom portals are built 100% around your exact business stages and approval rules."
      },
      {
        question: "Is client document storage secure and encrypted?",
        answer: "Yes, all uploaded files are encrypted using AES-256 in transit and at rest, with strict role-based access control (RBAC)."
      }
    ]
  }
];

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return navbarIndustriesData.find((ind) => ind.slug === slug);
}
