export interface SubServiceGroup {
  name: string;
  items: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string; // lookup string for Lucide icons
  longDescription: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  process: { step: string; title: string; desc: string }[];
  stats: { label: string; value: string }[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  subServiceGroups: SubServiceGroup[];
  ctaTitle?: string;
  ctaDescription?: string;
  overviewTitle?: string;
  heroCardTitle?: string;
  heroCardDescription?: string;
}

export const servicesData: Service[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    ctaTitle: "Ready to Build Your Enterprise Web Platform?",
    ctaDescription: "Partner with our senior web engineers to architect a fast, secure, and conversion-focused web application tailored to your business goals.",
    overviewTitle: "High-Performance Engineering Built to Scale Your Web Systems",
    heroCardTitle: "Enterprise Web Architecture",
    heroCardDescription: "Engineered with modern frameworks for sub-second page loads, ironclad security, and headless CMS integrations.",
    shortDescription: "Custom corporate websites, scalable SaaS platforms, client portals, and progressive web apps engineered for high performance and SEO excellence.",
    iconName: "Code",
    longDescription: "We deliver full-stack web engineering services designed for growing enterprises and ambitious startups. From responsive corporate platforms to complex web applications and headless CMS setups, our engineering team builds clean, maintainable codebases optimized for speed, accessibility, and high search engine rankings. Every project follows modern component architecture, strict security guidelines, and automated deployment pipelines.",
    features: [
      "Custom Frontend & Server-Side Rendering (Next.js & React)",
      "Headless CMS Integration (Sanity, Strapi & WordPress)",
      "Secure REST & GraphQL API Integration Layers",
      "Core Web Vitals & Technical SEO Optimization",
      "Progressive Web App (PWA) Offline Capabilities",
      "Enterprise SSL, CORS & Web Application Firewall (WAF)",
      "Automated CI/CD Deployment Pipelines (Vercel / AWS)"
    ],
    benefits: [
      "Accelerate visitor conversion rates with sub-second load speeds under 1.0 second",
      "Achieve top search engine rankings with semantic HTML5 & clean server-side rendering",
      "Empower your marketing team with intuitive, code-free headless content management",
      "Protect sensitive enterprise data with enterprise-grade SSL and security headers",
      "Scale user concurrency smoothly without server bottlenecks during high traffic spikes"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL", "PostgreSQL", "Vercel", "Docker", "Redis"],
    process: [
      { step: "01", title: "Architecture & Discovery", desc: "Analyzing tech stack requirements, user journeys, database schemas, and performance benchmarks." },
      { step: "02", title: "UI/UX & Component Design", desc: "Designing responsive design tokens, layout wireframes, and interactive component libraries in Figma." },
      { step: "03", title: "Full-Stack Engineering", desc: "Building modular frontend interfaces, microservices API layers, and secure database connections." },
      { step: "04", title: "Automated QA & Speed Audit", desc: "Executing automated unit tests, cross-browser audits, accessibility checks, and Core Web Vitals profiling." },
      { step: "05", title: "Production Deployment & Monitoring", desc: "Configuring automated deployment pipelines, SSL certificates, real-time logging, and continuous cloud monitoring." }
    ],
    stats: [
      { label: "Web Platforms Built", value: "380+" },
      { label: "Avg. Lighthouse Score", value: "98/100" },
      { label: "Page Speed Boost", value: "+65%" },
      { label: "Client SLA Uptime", value: "99.99%" }
    ],
    industries: ["Fintech & Banking", "Healthcare & Biotech", "Real Estate & Proptech", "SaaS & B2B Tech", "E-Commerce", "Education & EdTech"],
    faqs: [
      {
        question: "Will my website be fully responsive across all mobile and desktop devices?",
        answer: "Yes. Every web platform we build undergoes rigorous cross-device testing to ensure flawless layout responsiveness and interactive speed on mobile phones, tablets, laptops, and 4K desktop screens."
      },
      {
        question: "Which web frameworks and CMS platforms do you specialize in?",
        answer: "We specialize in modern JavaScript/TypeScript ecosystems including Next.js, React, Node.js, combined with headless CMS platforms like Sanity, Strapi, or custom headless WordPress setups."
      },
      {
        question: "How do you ensure top Google search engine rankings (SEO)?",
        answer: "We implement server-side rendering (SSR), static site generation (SSG), semantic HTML5 tags, dynamic metadata, open graph tags, structured schema markup, and automatic sitemap generation."
      },
      {
        question: "What maintenance and post-launch support options do you offer?",
        answer: "We provide dedicated post-launch support packages, including 24/7 server monitoring, security updates, feature enhancements, database backups, and guaranteed uptime SLAs."
      }
    ],
    subServiceGroups: [
      {
        name: "Corporate & Business Web",
        items: ["Enterprise Corporate Websites", "B2B Lead Generation Sites", "Startup Launch Platforms", "Interactive Portfolio Sites", "Multi-Language Web Systems"]
      },
      {
        name: "Web Applications & SaaS",
        items: ["Custom SaaS Web Applications", "Customer & Partner Portals", "Real-Time Analytics Dashboards", "Progressive Web Apps (PWAs)", "Cloud-Native Portal Architecture"]
      },
      {
        name: "CMS & Platform Integration",
        items: ["Headless CMS Architecture", "Custom E-Commerce Storefronts", "Legacy Content Migration", "API Microservices Integration", "Custom Plugin & Extension Building"]
      }
    ]
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    ctaTitle: "Ready to Launch a High-Impact Mobile Application?",
    ctaDescription: "Consult with our mobile software engineers to build intuitive native and cross-platform apps for iOS and Android.",
    overviewTitle: "Native & Cross-Platform Mobile Apps Built for Superior Performance",
    heroCardTitle: "Mobile Application Systems",
    heroCardDescription: "High-performance iOS and Android applications engineered for seamless user engagement and offline synchronization.",
    shortDescription: "Native iOS and Android app development, cross-platform React Native solutions, and mobile backend infrastructure designed for maximum user engagement.",
    iconName: "Smartphone",
    longDescription: "Our mobile app development team builds intuitive, feature-rich mobile applications that users love. Whether you need a native iOS app built in Swift, an Android app in Kotlin, or a cross-platform solution powered by React Native or Flutter, we deliver rock-solid performance, push notification infrastructure, and offline data sync. We handle every step from app architecture to App Store submission.",
    features: [
      "Native iOS (Swift / SwiftUI) & Android (Kotlin) Engineering",
      "Cross-Platform App Development (React Native & Flutter)",
      "Secure Offline Data Caching & Real-Time Sync Engines",
      "Push Notification & In-App Messaging Infrastructure",
      "Biometric Authentication (FaceID / TouchID) & Payment Gateways",
      "Bluetooth & Hardware Peripheral Device Integration",
      "Automated Mobile CI/CD & App Store Deployment Pipelines"
    ],
    benefits: [
      "Drive user retention with fluid 60fps mobile touch interfaces and micro-interactions",
      "Reach iOS and Android users simultaneously with cross-platform code efficiency",
      "Protect sensitive user credentials with biometric login and encrypted local storage",
      "Seamlessly publish apps to Apple App Store and Google Play Store with 100% compliance",
      "Engage users proactively through automated transactional push notifications"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite", "Node.js", "App Store Connect", "GraphQL", "Redux"],
    process: [
      { step: "01", title: "App Scoping & Wireframing", desc: "Mapping user flows, screen hierarchies, hardware permission requirements, and mobile backend architecture." },
      { step: "02", title: "Mobile UX/UI Design", desc: "Crafting tactile, touch-friendly interfaces, visual design tokens, and smooth micro-animations." },
      { step: "03", title: "Frontend & API Integration", desc: "Engineering mobile frontend components, state management, and secure API data connectors." },
      { step: "04", title: "Multi-Device Hardware Testing", desc: "Executing automated testing across multiple physical iOS and Android devices, screen sizes, and OS versions." },
      { step: "05", title: "App Store Publishing & Analytics", desc: "Managing App Store & Google Play submissions, compliance guidelines, and crash analytics setup." }
    ],
    stats: [
      { label: "Mobile Apps Shipped", value: "210+" },
      { label: "App Store Approval", value: "100%" },
      { label: "User Retention Lift", value: "+45%" },
      { label: "Avg. User App Rating", value: "4.9/5" }
    ],
    industries: ["Fintech & Mobile Wallets", "Healthcare & Telehealth", "On-Demand Services", "Fitness & Wellness", "Retail & Loyalty", "Logistics"],
    faqs: [
      {
        question: "Should I build a native app or a cross-platform app?",
        answer: "Cross-platform development (React Native / Flutter) is ideal for launching on both iOS and Android faster with a single codebase. Native development (Swift / Kotlin) is best for hardware-intensive features like custom Bluetooth protocols or heavy 3D rendering."
      },
      {
        question: "Do you handle the App Store and Google Play Store submission process?",
        answer: "Yes. We manage the full submission workflow, including developer account setup, App Store screenshots, privacy policy compliance, app review guidelines, and metadata optimization."
      },
      {
        question: "Can mobile apps work offline without an active internet connection?",
        answer: "Yes. We engineer local database caching (SQLite / Realm) that allows users to access app features offline, automatically syncing data to cloud servers once connectivity is restored."
      },
      {
        question: "How do you handle mobile app security and user data protection?",
        answer: "We implement SSL certificate pinning, encrypted local storage, biometric authentication, secure OAuth token management, and regular security audits."
      }
    ],
    subServiceGroups: [
      {
        name: "iOS Development",
        items: ["Native iPhone & iPad Applications", "Apple Pay Payment Integration", "Swift & SwiftUI Engineering", "TestFlight Beta Deployment", "WatchOS & Companion Apps"]
      },
      {
        name: "Android Development",
        items: ["Native Android Mobile Apps", "Kotlin & Jetpack Compose UI", "Google Play Billing & Subscriptions", "Multi-Screen Phone & Tablet Support", "Android Wearable Integrations"]
      },
      {
        name: "Cross-Platform Engineering",
        items: ["React Native Mobile Apps", "Flutter Cross-Platform Apps", "Shared Codebase Architecture", "Progressive Mobile Solutions", "Mobile Backend API Engineering"]
      }
    ]
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    ctaTitle: "Ready to Modernize Your Cloud Infrastructure?",
    ctaDescription: "Collaborate with our certified DevOps architects to automate deployments, reduce cloud expenditure, and achieve 99.99% uptime.",
    overviewTitle: "Automated Cloud Pipelines & Enterprise Infrastructure Management",
    heroCardTitle: "Enterprise Cloud Architecture",
    heroCardDescription: "Automated CI/CD pipelines, Kubernetes orchestration, and cloud cost management for high availability.",
    shortDescription: "Cloud migration, Kubernetes orchestration, CI/CD pipeline automation, infrastructure as code (IaC), and 24/7 cloud monitoring for AWS, Azure, and GCP.",
    iconName: "Cloud",
    longDescription: "We help organizations build resilient, scalable, and secure cloud environments. Our cloud engineers specialize in Infrastructure as Code (Terraform, CloudFormation), automated CI/CD deployment pipelines (GitHub Actions, GitLab), container orchestration (Kubernetes, Docker), and cloud expenditure optimization across AWS, Microsoft Azure, and Google Cloud Platform. We ensure your servers scale dynamically with zero downtime.",
    features: [
      "Automated CI/CD Pipeline Building (GitHub Actions, Jenkins, GitLab)",
      "Infrastructure as Code (IaC) with Terraform & Pulumi Templates",
      "Container Orchestration with Kubernetes (EKS, GKE, AKS) & Docker",
      "Cloud Security Audits, IAM Policy Enforcement & Compliance Guardrails",
      "24/7 Real-Time Cloud Monitoring, Alerting & Incident Response",
      "Multi-Region Cloud Failover & Automated Disaster Recovery",
      "Cloud Spend Optimization & Right-Sizing Architecture"
    ],
    benefits: [
      "Eliminate manual release errors with 100% automated deployment pipelines",
      "Reduce monthly cloud infrastructure expenditure by up to 35% through resource right-sizing",
      "Guarantee high availability with multi-region failover and dynamic auto-scaling",
      "Ensure SOC2, HIPAA, and ISO security compliance with automated cloud policies",
      "Accelerate developer velocity by enabling instant staging preview environments"
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "Helm"],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "Evaluating current cloud server performance, security vulnerabilities, deployment bottlenecks, and monthly costs." },
      { step: "02", title: "Cloud Architecture Blueprint", desc: "Designing scalable multi-region cloud topologies, load balancer rules, and IaC Terraform templates." },
      { step: "03", title: "Pipeline & Migration Execution", desc: "Building CI/CD deployment pipelines and executing zero-downtime database and server migrations." },
      { step: "04", title: "Security & Monitoring Setup", desc: "Configuring Grafana dashboards, log aggregation, automated intrusion alerts, and IAM roles." },
      { step: "05", title: "Managed Cloud Operations", desc: "Providing ongoing 24/7 server monitoring, security patching, backup verification, and cost optimizations." }
    ],
    stats: [
      { label: "Cloud Migrations", value: "140+" },
      { label: "Infrastructure Uptime", value: "99.99%" },
      { label: "Avg. Cloud Savings", value: "35%" },
      { label: "Deployment Speed Lift", value: "5x" }
    ],
    industries: ["SaaS & B2B Software", "Financial Services & Fintech", "E-Commerce Enterprises", "Logistics & Supply Chain", "Media & Streaming", "Healthcare"],
    faqs: [
      {
        question: "Which cloud providers and hosting platforms do you support?",
        answer: "We support all major cloud providers including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), as well as modern developer platforms like Vercel, Cloudflare, and DigitalOcean."
      },
      {
        question: "How do you achieve zero-downtime server deployments?",
        answer: "We utilize blue-green deployment strategies, canary releases, and automated health checks in Kubernetes to deploy code updates without dropping a single user request."
      },
      {
        question: "How can DevOps help reduce our monthly cloud server bill?",
        answer: "We analyze your server resource utilization, implement auto-scaling groups, convert idle workloads to serverless execution, set up spot instances, and remove unused cloud storage."
      },
      {
        question: "Do you provide 24/7 cloud server monitoring and incident response?",
        answer: "Yes. Our managed cloud services include round-the-clock automated alerts, automated system health checks, human incident response SLAs, and regular backup drills."
      }
    ],
    subServiceGroups: [
      {
        name: "Cloud Migration & Setup",
        items: ["Legacy-to-Cloud Infrastructure Migration", "AWS / Azure Infrastructure Setup", "Database Cloud Migration", "Multi-Cloud Strategy Architecture", "Disaster Recovery Configuration"]
      },
      {
        name: "DevOps & Automation",
        items: ["CI/CD Pipeline Building", "Infrastructure as Code (Terraform)", "Docker Containerization", "Kubernetes Cluster Management", "Automated Staging Environments"]
      },
      {
        name: "Security & Cost Control",
        items: ["24/7 Cloud Monitoring & Alerting", "Cloud Cost Optimization Audits", "Log Aggregation & Grafana", "SOC2 / HIPAA Compliance Hardening", "Managed Server Maintenance"]
      }
    ]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Automation",
    ctaTitle: "Ready to Automate Operations with Artificial Intelligence?",
    ctaDescription: "Schedule a consultation with our AI solutions architects to integrate intelligent agents, LLMs, and workflow automation into your business.",
    overviewTitle: "Custom AI Agents, LLM Integrations & Intelligent Workflow Automation",
    heroCardTitle: "Enterprise AI Infrastructure",
    heroCardDescription: "Custom AI agent development, RAG document search, and workflow automation tailored to eliminate manual overhead.",
    shortDescription: "Custom AI agent development, OpenAI/LLM integration, Retrieval-Augmented Generation (RAG), process automation, and predictive analytics for business transformation.",
    iconName: "Cpu",
    longDescription: "Empower your business with custom artificial intelligence and automation solutions. We engineer custom AI agents, deploy Retrieval-Augmented Generation (RAG) pipelines for internal enterprise knowledge bases, integrate Large Language Models (LLMs), and build automated workflow bots that eliminate repetitive manual labor while dramatically increasing operational throughput.",
    features: [
      "Custom AI Agent Development & Autonomous Task Automation",
      "Enterprise RAG Pipelines & Knowledge Base Vector Search",
      "LLM Integration (OpenAI GPT-4, Claude 3.5, Llama 3, Mistral)",
      "Intelligent Document Processing & OCR Data Extraction",
      "Predictive Analytics & Machine Learning Models",
      "Custom Slack, Teams & WhatsApp Automation Bots",
      "Private Self-Hosted AI Infrastructure Deployment"
    ],
    benefits: [
      "Automate up to 70% of repetitive operational tasks and customer service inquiries",
      "Enable instant semantic search across internal enterprise documents and manuals",
      "Improve executive decision-making with predictive analytics and machine learning",
      "Maintain 100% data privacy with self-hosted open-source AI models in private clouds",
      "Accelerate employee onboarding by providing conversational internal AI assistants"
    ],
    technologies: ["Python", "OpenAI API", "LangChain", "LlamaIndex", "Pinecone", "TensorFlow", "FastAPI", "Docker", "PyTorch", "ChromaDB"],
    process: [
      { step: "01", title: "AI Opportunity Audit", desc: "Identifying high-ROI business workflows suitable for AI automation, data modeling, and bot integration." },
      { step: "02", title: "Data Ingestion & Embedding Setup", desc: "Structuring unstructured enterprise documents, setting up vector databases, and generating embeddings." },
      { step: "03", title: "Model Tuning & Agent Building", desc: "Constructing custom RAG chains, prompt templates, tool-calling logic, and agent workflows." },
      { step: "04", title: "Interface Integration & Testing", desc: "Connecting AI agents seamlessly into existing web apps, mobile apps, CRM systems, or internal chat tools." },
      { step: "05", title: "Evaluation & Model Optimization", desc: "Tracking AI accuracy metrics, latency benchmarks, hallunication rates, and continuous prompt refinements." }
    ],
    stats: [
      { label: "AI Agents Deployed", value: "110+" },
      { label: "Hours Saved / Month", value: "18,000+" },
      { label: "Query Accuracy Rate", value: "97.2%" },
      { label: "Workflow Speedup", value: "4x" }
    ],
    industries: ["Legal & Compliance", "Healthcare & Telehealth", "Financial Advisory", "Customer Support", "Real Estate", "Insurance"],
    faqs: [
      {
        question: "Is our proprietary enterprise data kept secure when using AI models?",
        answer: "Absolutly. We implement self-hosted vector databases, private cloud deployments, and enterprise API agreements ensuring your data is never stored by third parties or used to train public models."
      },
      {
        question: "What is Retrieval-Augmented Generation (RAG) and how does it help?",
        answer: "RAG allows an AI model to answer queries based accurately on your company's actual internal PDF files, policy manuals, contracts, and database records without making up information."
      },
      {
        question: "Can AI agents connect directly into our CRM or internal software?",
        answer: "Yes. We build custom API tool connectors that allow AI agents to create support tickets, look up inventory, update CRM deals, send emails, or query database records automatically."
      },
      {
        question: "What is the typical timeline for building a custom enterprise AI agent?",
        answer: "Most custom AI agents and RAG document search systems are designed, built, tested, and integrated within 3 to 6 weeks depending on data complexity."
      }
    ],
    subServiceGroups: [
      {
        name: "AI Agents & Automation",
        items: ["Customer Support AI Agents", "Internal Operations Assistants", "Slack & Teams Automation Bots", "Automated Email & Ticket Responders", "Voice & Conversational AI"]
      },
      {
        name: "Enterprise Knowledge & RAG",
        items: ["Vector Database Search Architecture", "RAG Document Search Systems", "PDF & Contract Data Extraction", "Private Enterprise Knowledge Search", "Custom Embeddings Engineering"]
      },
      {
        name: "LLM & ML Engineering",
        items: ["OpenAI & Claude API Integration", "Custom LLM Fine-Tuning", "Predictive Analytics & Forecasting", "Computer Vision & Image OCR", "Open-Source Llama 3 Self-Hosting"]
      }
    ]
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Software Development",
    ctaTitle: "Ready to Build Custom Enterprise Software?",
    ctaDescription: "Speak with our senior software engineering leads to plan, architect, and execute your custom software system.",
    overviewTitle: "Robust Enterprise Software Engineering & Legacy System Modernization",
    heroCardTitle: "Custom Software Architecture",
    heroCardDescription: "Clean object-oriented codebases, microservices architecture, and scalable database systems built to last.",
    shortDescription: "Tailored enterprise software solutions, desktop applications, SaaS product development, and legacy code modernization built for operational scale.",
    iconName: "Layers",
    longDescription: "We build custom software systems engineered specifically to solve complex enterprise operational challenges. From complex backend architectures and scalable microservices to legacy code refactoring and dedicated team augmentation, our senior software engineers deliver robust software built with clean maintainable code standards.",
    features: [
      "Custom Enterprise Software Engineering & System Architecture",
      "Scalable Microservices Architecture & High-Throughput APIs",
      "Legacy Codebase Refactoring, Re-Platforming & Modernization",
      "Relational & NoSQL Database Schema Design & Tuning",
      "Dedicated Engineering Pod Augmentation & SLA Support",
      "Enterprise Multi-Tenant Data Isolation",
      "Comprehensive Automated Unit, Integration & E2E Testing"
    ],
    benefits: [
      "Streamline complex internal business workflows with software tailored to your operational rules",
      "Scale software throughput smoothly to handle millions of transactions without system bottlenecks",
      "Reduce technical debt and maintenance costs through modular microservices code standards",
      "Maintain 100% intellectual property ownership of your entire software source code and assets",
      "Integrate smoothly with existing legacy enterprise databases and third-party software tools"
    ],
    technologies: ["Node.js", "Python", "Go", "Java", "PostgreSQL", "Redis", "Docker", "RabbitMQ", "Kubernetes", "TypeScript"],
    process: [
      { step: "01", title: "Technical Blueprint & Discovery", desc: "Defining system architecture, database data schemas, security protocols, and operational workflows." },
      { step: "02", title: "Agile Sprint Planning", desc: "Establishing bi-weekly agile development sprints, milestone deliverables, and transparent progress demos." },
      { step: "03", title: "Core Systems Engineering", desc: "Developing scalable backend services, business logic modules, API middleware, and database layers." },
      { step: "04", title: "Automated QA & Security Testing", desc: "Executing comprehensive automated unit test suites, penetration testing, and performance profiling." },
      { step: "05", title: "Deployment & Ongoing SLA Support", desc: "Managing production rollout, developer documentation handover, and continuous maintenance SLAs." }
    ],
    stats: [
      { label: "Software Systems Built", value: "260+" },
      { label: "Code Coverage Avg.", value: "94%" },
      { label: "Client SLA Uptime", value: "99.99%" },
      { label: "Client Retention Rate", value: "98%" }
    ],
    industries: ["Logistics & Fleet Management", "Manufacturing & Supply Chain", "Financial Services", "Energy & Utilities", "Government & Public Sector"],
    faqs: [
      {
        question: "Do we retain full ownership of the custom software source code?",
        answer: "Yes. You maintain 100% complete ownership of all custom software source code, intellectual property, documentation, database schemas, and credentials."
      },
      {
        question: "Can you modernize our existing outdated legacy software system?",
        answer: "Yes. We specialize in refactoring monolithic legacy codebases into modern microservices, upgrading database structures, and refreshing web interfaces without disrupting ongoing daily business operations."
      },
      {
        question: "What development methodologies do your engineering teams follow?",
        answer: "We follow strict Agile / Scrum development practices with bi-weekly sprint demos, continuous integration, automated code reviews, and transparent Jira task tracking."
      },
      {
        question: "Can you provide dedicated software engineering teams for augmentation?",
        answer: "Yes. We offer dedicated engineering pods (frontend, backend, QA, DevOps) that seamlessly integrate with your internal team for long-term product development."
      }
    ],
    subServiceGroups: [
      {
        name: "Enterprise Systems",
        items: ["Custom Enterprise Software Engineering", "Workflow & Operation Systems", "Inventory & Warehouse Software", "B2B Multi-Tenant SaaS Products", "Client & Partner Web Portals"]
      },
      {
        name: "Backend Architecture",
        items: ["Microservices Architecture Design", "High-Throughput REST & GraphQL APIs", "Database Optimization & Sharding", "Message Queue Systems (RabbitMQ/Kafka)", "Serverless Backend Functions"]
      },
      {
        name: "Modernization & Pods",
        items: ["Legacy Code Refactoring & Upgrade", "Database & System Migration", "Software Maintenance & SLA Support", "Dedicated Developer Pods", "Technical Architecture Audits"]
      }
    ]
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    ctaTitle: "Ready to Elevate Your Product's User Experience?",
    ctaDescription: "Partner with our lead product designers to create user interfaces that boost retention, clarity, and brand engagement.",
    overviewTitle: "User-Centered Interface Design & Enterprise Product Systems",
    heroCardTitle: "UI/UX Design System",
    heroCardDescription: "User research, interactive Figma prototypes, design systems, and usability testing built to maximize product adoption.",
    shortDescription: "User research, wireframing, interactive prototyping, UI design systems, and product usability testing that convert visitors into active power users.",
    iconName: "Palette",
    longDescription: "Great software starts with exceptional user experience. Our product design team creates visually stunning, intuitive user interfaces grounded in deep user research and interaction design standards. We deliver complete Figma design systems, interactive prototypes, visual tokens, and responsive UI specs ready for seamless developer handoff.",
    features: [
      "User Research, Persona Mapping & User Journey Audits",
      "High-Fidelity Wireframes & Interactive Figma Prototypes",
      "Comprehensive UI Design Systems & Component Libraries",
      "Accessibility Compliance (WCAG 2.1 AA Standards)",
      "Developer-Ready Handoff Tokens & Asset Specs",
      "Mobile Touch UX Optimization & Micro-Interactions",
      "Usability Heatmap Testing & User Friction Audits"
    ],
    benefits: [
      "Increase product trial conversion rates with friction-free user onboarding flows",
      "Reduce customer support tickets through clear, self-explanatory user interface layout",
      "Accelerate developer build speed with structured Figma design systems and tokens",
      "Ensure consistent brand experience across web, mobile, and desktop software touchpoints",
      "Boost user retention and daily active app usage with intuitive micro-interactions"
    ],
    technologies: ["Figma", "Adobe XD", "Principle", "Lottie", "Storybook", "WCAG 2.1", "Miro", "Zeplin", "Framer", "Protopie"],
    process: [
      { step: "01", title: "Discovery & User Research", desc: "Conducting user interviews, competitive analysis, heuristic audits, and user persona mapping." },
      { step: "02", title: "Information Architecture", desc: "Structuring site maps, user journey flows, low-fidelity wireframe layouts, and task steps." },
      { step: "03", title: "Visual UI Design", desc: "Designing high-fidelity screens, visual theme design tokens, typography scales, and UI assets." },
      { step: "04", title: "Interactive Prototyping", desc: "Building clickable prototypes for usability validation, user testing, and stakeholder feedback." },
      { step: "05", title: "Developer Handoff & Tokens", desc: "Exporting clean Figma component libraries, spacing tokens, asset specs, and Storybook documentation." }
    ],
    stats: [
      { label: "Product UI Projects", value: "240+" },
      { label: "Task Completion Lift", value: "+48%" },
      { label: "Usability Rating Boost", value: "+65%" },
      { label: "Developer Handoff Speed", value: "2x" }
    ],
    industries: ["Fintech Apps", "SaaS Dashboards", "Healthcare Portals", "E-Commerce Platforms", "Mobile Applications", "EdTech"],
    faqs: [
      {
        question: "What specific design deliverables will we receive at project completion?",
        answer: "You will receive full access to clean organized Figma master files, clickable interactive prototypes, reusable UI design systems, brand guidelines, and developer handoff documentation."
      },
      {
        question: "Do you design for accessibility (WCAG compliance)?",
        answer: "Yes. All our color contrast ratios, font sizes, screen-reader labels, tap targets, and keyboard navigation adhere strictly to WCAG 2.1 AA accessibility standards."
      },
      {
        question: "How do you ensure seamless handoff from design to engineering?",
        answer: "We construct organized Figma design systems with auto-layout, clear component variants, CSS tokens, and provide direct developer walkthrough sessions."
      },
      {
        question: "Can you redesign an existing live product without starting from scratch?",
        answer: "Yes. We perform heuristic usability audits on live products, identify friction areas, and redesign critical user flows while keeping core brand recognition intact."
      }
    ],
    subServiceGroups: [
      {
        name: "Product Design",
        items: ["SaaS Dashboard UI/UX", "Mobile App Interface Design", "Web Application Interfaces", "Customer & Partner Portals", "E-Commerce Storefront UI"]
      },
      {
        name: "Research & Systems",
        items: ["User Journey & Flow Mapping", "Figma UI Design Systems", "Usability Testing & Audits", "Accessibility (WCAG) Audits", "UX Competitor Analysis"]
      },
      {
        name: "Interaction & Handoff",
        items: ["Clickable Interactive Prototypes", "Micro-Interactions & Lottie", "Design System Documentation", "Developer Handoff Support", "Design Token Configuration"]
      }
    ]
  },
  {
    id: "crm-erp",
    slug: "crm-erp",
    title: "CRM & ERP Solutions",
    ctaTitle: "Ready to Streamline Enterprise Operations with Custom ERP?",
    ctaDescription: "Consult with our enterprise integration specialists to unify your sales pipelines, inventory, and finance systems into one platform.",
    overviewTitle: "Custom Enterprise Resource Planning & Customer Management Systems",
    heroCardTitle: "Enterprise ERP & CRM Architecture",
    heroCardDescription: "Custom CRM pipelines, inventory tracking, financial modules, and automated workflow integrations.",
    shortDescription: "Tailored CRM pipeline development, enterprise ERP implementations, Salesforce/HubSpot customizations, and unified business data management.",
    iconName: "Briefcase",
    longDescription: "Unify your business operations with custom CRM and ERP solutions. We engineer custom sales management pipelines, automated inventory tracking systems, billing and financial modules, and seamlessly integrate platform solutions like Salesforce, HubSpot, Odoo, and custom enterprise databases to give leadership real-time operational visibility across departments.",
    features: [
      "Custom Sales CRM & Automated Lead Pipeline Management",
      "Enterprise ERP Implementation & Inventory Control",
      "Salesforce, HubSpot & Odoo Customization & Data Sync",
      "Automated Financial Invoicing, Billing & Tax Integration",
      "Real-Time Business Intelligence (BI) & Executive Dashboards",
      "Role-Based Access Control (RBAC) & Security Policies",
      "Automated Multi-Department Workflow Notifications"
    ],
    benefits: [
      "Eliminate data silos between sales, warehouse operations, and finance teams",
      "Accelerate deal closure rates with automated lead distribution and follow-up triggers",
      "Gain real-time visibility into inventory levels, supply chain metrics, and revenue growth",
      "Reduce operational overhead by automating manual data entry and spreadsheet tasks",
      "Ensure strict compliance with regulatory reporting and security role controls"
    ],
    technologies: ["PostgreSQL", "Node.js", "Python", "Salesforce API", "HubSpot API", "Odoo", "React", "Docker", "PowerBI", "Redis"],
    process: [
      { step: "01", title: "Department Workflow Audit", desc: "Mapping internal department workflows, data sources, user roles, and operational bottlenecks." },
      { step: "02", title: "System Architecture Design", desc: "Architecting unified relational data models, access permissions, and pipeline triggers." },
      { step: "03", title: "Custom Module Development", desc: "Engineering specialized CRM pipelines, inventory modules, executive dashboards, and sync logic." },
      { step: "04", title: "Legacy Data Cleanse & Migration", desc: "Cleaning, transforming, and securely importing legacy customer records, orders, and inventory data." },
      { step: "05", title: "Staff Onboarding & Rollout", desc: "Conducting hands-on user training sessions, documentation handover, and ongoing SLA support." }
    ],
    stats: [
      { label: "ERP/CRM Projects", value: "115+" },
      { label: "Sales Cycle Speedup", value: "+32%" },
      { label: "OpEx Overhead Saved", value: "35%" },
      { label: "Data Accuracy Sync", value: "99.9%" }
    ],
    industries: ["Manufacturing & Distribution", "Real Estate & Construction", "Financial Services", "Retail & Wholesale", "Professional Services", "Healthcare"],
    faqs: [
      {
        question: "Can you integrate our CRM with our warehouse and accounting software?",
        answer: "Yes. We engineer bi-directional API integrations that automatically sync leads, closed deals, warehouse inventory deductions, and financial invoices across your software stack."
      },
      {
        question: "Should we build a custom CRM/ERP or customize an existing platform?",
        answer: "If your business has unique operational workflows that off-the-shelf software cannot handle, a custom CRM/ERP provides complete control. For standard pipelines, customizing Salesforce or HubSpot is often faster."
      },
      {
        question: "How do you ensure enterprise data security and role-based access?",
        answer: "We implement granular Role-Based Access Control (RBAC), multi-factor authentication, database field encryption, audit logging, and automated cloud backups."
      },
      {
        question: "How long does a typical custom ERP/CRM implementation take?",
        answer: "Most custom CRM/ERP deployments take between 6 to 12 weeks depending on database migration scope, module customization, and third-party API requirements."
      }
    ],
    subServiceGroups: [
      {
        name: "Custom CRM Systems",
        items: ["Sales Pipeline Management", "Automated Lead Routing", "Customer Communication Logs", "Commission & Analytics Dashboards", "Client Portal Integration"]
      },
      {
        name: "Enterprise ERP Modules",
        items: ["Inventory & Supply Chain Control", "Financial & Invoicing Automation", "Human Resource & Payroll Systems", "Purchase Order Workflows", "Multi-Warehouse Management"]
      },
      {
        name: "Platform Customizations",
        items: ["Salesforce API Synchronization", "HubSpot CRM Custom Development", "Odoo ERP Custom Modules", "Legacy Database Migration", "PowerBI & Executive Reporting"]
      }
    ]
  },
  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    ctaTitle: "Ready to Scale Your Online E-Commerce Revenue?",
    ctaDescription: "Connect with our e-commerce engineering team to launch high-converting storefronts with instant checkout performance.",
    overviewTitle: "High-Converting Custom Storefronts & Headless E-Commerce Platforms",
    heroCardTitle: "Enterprise E-Commerce Engine",
    heroCardDescription: "Shopify Plus, WooCommerce, and headless e-commerce architectures optimized for sub-second checkout speeds.",
    shortDescription: "Custom e-commerce storefronts, Shopify Plus customizations, headless Commerce platforms (Next.js + Shopify/Stripe), and conversion rate optimization.",
    iconName: "CreditCard",
    longDescription: "We engineer high-performance e-commerce platforms designed to drive sales growth. From custom Shopify Plus storefronts and WooCommerce setups to modern headless e-commerce architectures combining Next.js with Shopify Storefront API and Stripe, we deliver lightning-fast product pages, streamlined checkout flows, and automated inventory sync across channels.",
    features: [
      "Headless E-Commerce Architecture (Next.js + Shopify / Stripe)",
      "Shopify Plus Theme Engineering & Custom App Building",
      "Global Multi-Currency & Multi-Language Localization",
      "Frictionless Payment Gateways (Stripe, PayPal, Apple Pay, Klarna)",
      "Automated ERP & Inventory Management Synchronization",
      "Subscription Billing & Recurring Revenue Workflows",
      "Advanced Search, Filtering & Personalized Product Recommendations"
    ],
    benefits: [
      "Maximize checkout conversions with friction-free 1-step payment flows",
      "Achieve sub-second product page load speeds for higher mobile ad conversions",
      "Scale smoothly during high-volume flash sales and Black Friday traffic spikes",
      "Manage multi-channel inventory, fulfillment, and shipping from one dashboard",
      "Increase Average Order Value (AOV) with automated cross-sell and upsell modules"
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Stripe", "WooCommerce", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "GraphQL", "Algolia"],
    process: [
      { step: "01", title: "Commerce Strategy & Audit", desc: "Analyzing target audience, product catalog structure, payment options, and checkout funnel friction points." },
      { step: "02", title: "Storefront UX/UI Design", desc: "Designing high-converting product detail pages, instant cart drawers, and mobile-optimized checkout screens." },
      { step: "03", title: "Storefront Engineering", desc: "Building responsive frontend components, connecting payment APIs, and setting up catalog search indexing." },
      { step: "04", title: "Payment & Tax Testing", desc: "Executing live transaction testing, multi-currency conversion checks, tax calculation triggers, and fulfillment tests." },
      { step: "05", title: "Launch & Funnel Optimization", desc: "Deploying storefront, setting up conversion tracking analytics, and monitoring checkout funnel metrics continuously." }
    ],
    stats: [
      { label: "Storefronts Launched", value: "185+" },
      { label: "Checkout Conversion Lift", value: "+38%" },
      { label: "Avg. Page Speed", value: "0.8s" },
      { label: "Annual GMV Processed", value: "$120M+" }
    ],
    industries: ["Fashion & Apparel", "Consumer Electronics", "Beauty & Cosmetics", "Subscription Brands (D2C)", "B2B Wholesale", "Food & Beverage"],
    faqs: [
      {
        question: "What is headless e-commerce and why should we consider it?",
        answer: "Headless e-commerce decouples the frontend user experience (built with Next.js for sub-second page loads) from the backend engine (Shopify/Stripe). This provides maximum page speed, custom visual flexibility, and superior mobile conversion rates."
      },
      {
        question: "Can you migrate our store from WooCommerce or Magento to Shopify or Headless?",
        answer: "Yes. We execute zero-downtime store migrations, transferring all products, customer accounts, order histories, 301 URL redirects, and SEO rankings safely."
      },
      {
        question: "How do you ensure fast page speeds for store catalogs with thousands of products?",
        answer: "We implement static site generation (SSG), incremental static regeneration (ISR), image optimization pipelines, and lightning-fast search indexing (Algolia / Meilisearch)."
      },
      {
        question: "Do you support multi-currency, localized tax, and international shipping?",
        answer: "Yes. We configure multi-currency price routing, dynamic VAT/tax calculation APIs, and integrated shipping carrier workflows (FedEx, UPS, DHL)."
      }
    ],
    subServiceGroups: [
      {
        name: "Shopify & Platform Engineering",
        items: ["Shopify Plus Custom Themes", "Shopify Private App Building", "WooCommerce Custom Development", "BigCommerce Engineering", "Platform Migration Services"]
      },
      {
        name: "Headless E-Commerce",
        items: ["Next.js Headless Storefronts", "Shopify Storefront GraphQL API", "Stripe Custom Checkout Workflows", "Medusa.js Open Source Commerce", "Serverless Store Architecture"]
      },
      {
        name: "Commerce Operations",
        items: ["Multi-Currency & Tax Sync", "ERP Inventory Synchronization", "Subscription & Recurring Revenue", "Algolia Search & Recommendations", "Conversion Rate Optimization (CRO)"]
      }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    title: "API & Integration Services",
    ctaTitle: "Ready to Connect Your Disparate Software Systems?",
    ctaDescription: "Consult with our API integration engineers to build secure REST and GraphQL endpoints that automate real-time data exchange.",
    overviewTitle: "Secure API Development, GraphQL Endpoints & System Microservices",
    heroCardTitle: "Enterprise API Layer",
    heroCardDescription: "High-throughput RESTful APIs, GraphQL infrastructure, microservices gateways, and third-party webhook integrations.",
    shortDescription: "Custom REST and GraphQL API engineering, microservices architecture, third-party software integration, and secure API management for seamless data flow.",
    iconName: "Code",
    longDescription: "Connect your software ecosystems with robust API engineering. We build high-throughput RESTful APIs, modern GraphQL interfaces, third-party software integrations, and secure API gateways that allow disparate enterprise applications to exchange data securely and reliably in real time without human intervention.",
    features: [
      "Custom RESTful & GraphQL API Architecture & Engineering",
      "Third-Party SaaS API Integration (Stripe, Twilio, Salesforce, HubSpot, SAP)",
      "Secure API Gateway Setup, Rate Limiting & OAuth2 Authentication",
      "Webhooks & Real-Time Event-Driven Messaging (Kafka, RabbitMQ, Redis)",
      "Comprehensive OpenAPI / Swagger Interactive Documentation",
      "Microservices Communication & Middleware Routing",
      "API Performance Profiling & Latency Reduction"
    ],
    benefits: [
      "Eliminate manual data entry between separate enterprise business applications",
      "Ensure 99.99% data synchronization accuracy across cloud databases and CRMs",
      "Protect sensitive endpoints with OAuth2, JWT tokens, and rate-limiting guardrails",
      "Empower third-party developers with interactive Swagger API testing portals",
      "Process millions of real-time webhooks and requests with sub-50ms latency"
    ],
    technologies: ["Node.js", "Python", "Go", "GraphQL", "PostgreSQL", "Redis", "Swagger", "Postman", "Docker", "RabbitMQ"],
    process: [
      { step: "01", title: "API Mapping & Specifications", desc: "Defining endpoint paths, request payloads, response schemas, authentication protocols, and rate limits." },
      { step: "02", title: "Database & Middleware Design", desc: "Architecting relational database queries, authentication middleware, error codes, and logging frameworks." },
      { step: "03", title: "API Engineering & Integration", desc: "Writing clean backend endpoints, external SaaS connectors, and event-driven webhook listeners." },
      { step: "04", title: "Security & Load Testing", desc: "Testing API throughput under heavy traffic loads, penetration testing, and token validation audits." },
      { step: "05", title: "OpenAPI Documentation & Handover", desc: "Publishing interactive OpenAPI / Swagger documentation portals and SDK developer tools." }
    ],
    stats: [
      { label: "APIs Built & Integrated", value: "340+" },
      { label: "Daily Transactions", value: "15M+" },
      { label: "Avg. API Latency", value: "<40ms" },
      { label: "Data Sync Accuracy", value: "99.99%" }
    ],
    industries: ["Fintech & Payments", "Healthcare Interoperability", "Logistics & Tracking", "SaaS Platforms", "Telecommunications", "E-Commerce"],
    faqs: [
      {
        question: "How do you ensure our custom API endpoints remain completely secure?",
        answer: "We implement OAuth2, JWT token authentication, HTTPS SSL encryption, rate limiting, IP whitelisting, payload sanitization, and strict CORS policies to prevent unauthorized access."
      },
      {
        question: "Do you provide interactive documentation for external developers?",
        answer: "Yes. We deliver interactive Swagger / OpenAPI documentation complete with endpoint testing tools, sample request payloads, and status code references."
      },
      {
        question: "Can you connect legacy software that lacks modern API endpoints?",
        answer: "Yes. We build custom API middleware wrappers and database connectors that expose legacy database records as clean modern RESTful endpoints."
      },
      {
        question: "How do you handle high API traffic volume without server crashes?",
        answer: "We utilize Redis caching, connection pooling, asynchronous message queues (RabbitMQ / Kafka), and horizontal server scaling."
      }
    ],
    subServiceGroups: [
      {
        name: "Custom API Engineering",
        items: ["RESTful API Architecture", "GraphQL API Infrastructure", "Microservices Communication", "Webhooks & Real-Time Event Stream", "API Gateway Routing & Caching"]
      },
      {
        name: "SaaS & Third-Party Sync",
        items: ["Payment Gateway APIs (Stripe/PayPal)", "CRM & Marketing API Integration", "Logistics & Shipping APIs", "SMS & Communication APIs (Twilio)", "ERP & Database Synchronization"]
      },
      {
        name: "API Management & Security",
        items: ["OAuth2 & JWT Auth Infrastructure", "API Gateway & Rate Limiting", "OpenAPI / Swagger Documentation", "API Monitoring & Latency Audits", "SDK & Developer Portal Creation"]
      }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    ctaTitle: "Ready to Scale Your Digital Visibility & Customer Acquisition?",
    ctaDescription: "Schedule a growth strategy call with our digital marketing specialists to build data-driven SEO and PPC campaigns.",
    overviewTitle: "Data-Driven Technical SEO, Performance Marketing & Growth Strategy",
    heroCardTitle: "Enterprise Growth Engine",
    heroCardDescription: "Technical SEO audits, high-ROI Google Ads (PPC) management, content strategy, and conversion rate optimization.",
    shortDescription: "Technical SEO optimization, targeted PPC campaign management, content marketing, lead generation, and conversion rate optimization (CRO) driven by analytics.",
    iconName: "TrendingUp",
    longDescription: "Drive targeted traffic and measurable revenue growth with data-driven digital marketing. Our digital growth team specializes in technical search engine optimization (SEO), high-ROI Google Ads and social PPC campaigns, content marketing strategies, and conversion rate optimization (CRO) that turn website visitors into qualified sales leads and loyal customers.",
    features: [
      "Technical & On-Page Search Engine Optimization (SEO)",
      "High-ROI PPC Campaign Management (Google Ads & LinkedIn Ads)",
      "Data Analytics, GA4 Setup & Custom Conversion Funnel Tracking",
      "Conversion Rate Optimization (CRO) & A/B Landing Page Testing",
      "B2B Content Strategy & High-Authority Link Building",
      "Local SEO & Google Business Profile Optimization",
      "Retargeting & Automated Lead Nurturing Campaigns"
    ],
    benefits: [
      "Increase organic search traffic from high-intent purchase keywords consistently",
      "Lower Customer Acquisition Costs (CAC) with targeted Google & LinkedIn Ad campaigns",
      "Understand exact user behavior with custom Google Analytics 4 conversion dashboards",
      "Turn existing web traffic into more qualified leads without increasing ad spend",
      "Outrank competitors on Google for key industry keywords and commercial queries"
    ],
    technologies: ["Google Analytics 4", "Google Search Console", "SEMrush", "Ahrefs", "Google Ads", "LinkedIn Ads", "Hotjar", "HubSpot", "Looker Studio"],
    process: [
      { step: "01", title: "Technical & Competitor Audit", desc: "Analyzing current search rankings, ad account performance, technical SEO gaps, and competitor strategies." },
      { step: "02", title: "Growth Strategy & Keyword Roadmap", desc: "Establishing target commercial keywords, ad budget allocation models, and measurable ROI benchmarks." },
      { step: "03", title: "Campaign Execution & On-Page SEO", desc: "Optimizing technical site elements, building high-converting landing pages, and launching PPC campaigns." },
      { step: "04", title: "Tracking & Conversion Testing", desc: "Setting up GA4 event tracking, heatmaps, and running A/B headline and copy ad experiments." },
      { step: "05", title: "Scaling & Monthly Reporting", desc: "Delivering transparent monthly ROI dashboards, scaling winning ad groups, and building authority links." }
    ],
    stats: [
      { label: "Organic Traffic Lift", value: "+195%" },
      { label: "Avg. Ad Return (ROAS)", value: "4.4x" },
      { label: "Leads Generated", value: "65,000+" },
      { label: "Avg. CPA Reduction", value: "30%" }
    ],
    industries: ["B2B SaaS", "E-Commerce Brands", "Professional Services", "Healthcare & Clinics", "Real Estate Agencies", "Fintech"],
    faqs: [
      {
        question: "How quickly can we expect results from SEO vs PPC advertising?",
        answer: "PPC advertising (Google Ads / LinkedIn Ads) delivers instant targeted traffic and leads as soon as campaigns go live. Technical SEO builds compounding organic growth, typically showing major keyword ranking increases within 3 to 6 months."
      },
      {
        question: "How do you track and measure return on investment (ROI)?",
        answer: "We configure custom Google Analytics 4 conversion tracking events for form submissions, call clicks, e-commerce purchases, and cost-per-lead (CPL) directly in Looker Studio dashboards."
      },
      {
        question: "What is Conversion Rate Optimization (CRO) and how does it help?",
        answer: "CRO optimizes your landing pages, headlines, button CTAs, and user flows to increase the percentage of site visitors who take action, generating more leads without raising ad budgets."
      },
      {
        question: "Do you handle ad copy, landing page design, and creative assets?",
        answer: "Yes. Our team handles complete campaign creation, including persuasive ad copy, custom landing page design, visual ad banners, and A/B split testing."
      }
    ],
    subServiceGroups: [
      {
        name: "Search Engine Optimization (SEO)",
        items: ["Technical SEO Audits", "On-Page & Keyword Optimization", "Authority Link Building", "Local & Enterprise SEO", "Content Marketing Strategy"]
      },
      {
        name: "Performance PPC Ads",
        items: ["Google Search & Shopping Ads", "LinkedIn B2B Lead Gen Campaigns", "Meta & Retargeting Ads", "Ad Copy & Creative A/B Testing", "Conversion Landing Page Building"]
      },
      {
        name: "Growth & Conversion Analytics",
        items: ["Google Analytics 4 (GA4) Setup", "Conversion Rate Optimization (CRO)", "Heatmap & User Behavior Audits", "Monthly ROI Dashboards (Looker)", "Lead Nurturing Workflows"]
      }
    ]
  }
];
