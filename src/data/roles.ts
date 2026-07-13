export interface RoleFeature {
  title: string;
  desc: string;
}

export interface Role {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  stats: { value: string; label: string }[];
  responsibilities: string[];
  skills: string[];
  features: RoleFeature[];
  benefits: string[];
  ctaText: string;
}

export const rolesData: Role[] = [
  {
    slug: "web-developer",
    title: "Web Developer",
    tagline: "Full Stack Web Application Engineering",
    shortDescription: "Architecting high-performance, modular websites and responsive web applications with state-of-the-art technologies.",
    longDescription: "We build modern, secure, and blazing-fast web systems optimized for modern search engines and extreme user traffic. Our full stack capability ensures seamless integration from databases to responsive frontend layouts.",
    iconName: "Code",
    stats: [
      { value: "100%", label: "Responsive Design" },
      { value: "Sub-1s", label: "Page Load Time" },
      { value: "SEO-Ready", label: "Semantic HTML" }
    ],
    responsibilities: [
      "Full Stack Web Development",
      "Frontend Development (React, Next.js, HTML, CSS, JavaScript)",
      "Backend Development (Node.js, Express, APIs)",
      "Database Integration & Architecture",
      "Responsive Website Development",
      "Web Application Development",
      "Performance Optimization & SEO"
    ],
    skills: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "TailwindCSS", "TypeScript", "REST APIs"],
    features: [
      { title: "Next.js SSR & SSG", desc: "Supercharged speed and robust SEO indexing using React's latest server-side rendering standards." },
      { title: "API Integrations", desc: "Flawless third-party integrations and backend pipelines using Node.js and Express." },
      { title: "Responsive Layouts", desc: "Fluid pixel-perfect styling that looks exceptional on phones, tablets, and desktops." }
    ],
    benefits: [
      "Ultra-fast page loads for maximum retention",
      "Higher conversion rates through premium visual design",
      "Scalable infrastructure designed for future growth",
      "Search engine optimized markup out of the box"
    ],
    ctaText: "Start Web Project"
  },
  {
    slug: "devops-specialist",
    title: "DevOps Specialist",
    tagline: "Automated Deployments & Infrastructure-as-Code",
    shortDescription: "Accelerating code deployment pipelines with high reliability, automated scaling, and zero-downtime migrations.",
    longDescription: "Our DevOps engineering automates the transition from commits to production. We configure robust cloud networks, microservices orchestration, and security measures to protect your infrastructure.",
    iconName: "Cloud",
    stats: [
      { value: "99.99%", label: "Uptime Achieved" },
      { value: "10x", label: "Faster Deployments" },
      { value: "24/7", label: "Server Monitoring" }
    ],
    responsibilities: [
      "CI/CD Pipeline Automation (GitHub Actions, Jenkins)",
      "Infrastructure-as-Code (Terraform, CloudFormation)",
      "Containerization & Orchestration (Docker, Kubernetes)",
      "Cloud Infrastructure Management (AWS, GCP, Azure)",
      "Zero-Downtime Application Deployments",
      "Proactive Monitoring, Logging & Alerting",
      "Security Compliance & Vulnerability Patching"
    ],
    skills: ["Terraform", "Docker", "Kubernetes", "AWS", "GitHub Actions", "Prometheus", "Linux", "IAM Security"],
    features: [
      { title: "Automated Scaling", desc: "Elastic compute scaling based on CPU, memory, or network load to control hosting costs." },
      { title: "Robust Backups", desc: "Hourly automatic database and system snapshots with automated restoration workflows." },
      { title: "Continuous Integration", desc: "Automated linting, formatting, and unit tests run before code merges to main branches." }
    ],
    benefits: [
      "High system uptime for business continuity",
      "Rapid deploy-to-production cycles and quick fixes",
      "Minimized cloud hosting and resource compute costs",
      "Certified security protocols protecting user data"
    ],
    ctaText: "Optimize Infrastructure"
  },
  {
    slug: "ai-assistant",
    title: "AI Assistant",
    tagline: "Cognitive Virtual Agents & Custom RAG Systems",
    shortDescription: "Deploying custom trained LLMs and voice agents to automate operations, client communication, and document analysis.",
    longDescription: "We design context-aware, secure AI assistants capable of parsing corporate databases, generating analytical insights, and resolving client inquiries instantly using Retrieval-Augmented Generation.",
    iconName: "Sparkles",
    stats: [
      { value: "80%", label: "Query Resolution" },
      { value: "24/7", label: "Instant Response" },
      { value: "Sub-2s", label: "Embedding Lookup" }
    ],
    responsibilities: [
      "Custom Conversational LLM Agents",
      "Retrieval-Augmented Generation (RAG) Architecture",
      "Vector Database Implementations (Pinecone, pgvector)",
      "Natural Language Processing & Translation",
      "Voice & Speech-to-Text Integrations",
      "Automated Customer Support Workflows",
      "Enterprise Document Analysis Pipelines"
    ],
    skills: ["LangChain", "OpenAI APIs", "Pinecone", "Python", "LlamaIndex", "FastAPI", "Vector Embeddings"],
    features: [
      { title: "Instant Knowledge Retrieval", desc: "Search across millions of corporate PDF/Word pages and retrieve answers in under a second." },
      { title: "Multi-Channel Deployment", desc: "Embed your AI bot seamlessly onto websites, WhatsApp, Slack, or Telegram." },
      { title: "Strict Content Safety", desc: "Guardrails configured to prevent hallucinations and keep responses inside corporate guidelines." }
    ],
    benefits: [
      "24/7 automated customer support desks",
      "Up to 80% operational support cost savings",
      "Zero-wait client inquiry resolution",
      "Actionable semantic insights from user queries"
    ],
    ctaText: "Build AI Agent"
  },
  {
    slug: "mobile-expert",
    title: "Mobile Expert",
    tagline: "Cross-Platform & Native Mobile Applications",
    shortDescription: "Crafting fluid iOS and Android mobile solutions with offline support, animations, and clean app store releases.",
    longDescription: "We build intuitive, high-performance mobile apps utilizing native tools and cross-platform frameworks. Every release goes through automated testing to guarantee stability across devices.",
    iconName: "Smartphone",
    stats: [
      { value: "60 FPS", label: "Smooth Transitions" },
      { value: "Offline", label: "Local Data Caching" },
      { value: "Native", label: "Hardware Sync" }
    ],
    responsibilities: [
      "Cross-Platform App Development (React Native, Flutter)",
      "Native iOS (Swift, UIKit) & Android (Kotlin) Development",
      "Offline-First Architectures & Synchronization",
      "Push Notification Campaigns & Deep Linking",
      "App Store (Apple App Store & Google Play) Publishing",
      "Mobile Security & Biometric Authentication",
      "Hardware Feature Integration (GPS, Camera, Bluetooth)"
    ],
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Redux", "Firebase", "App Store Connect", "SQLite"],
    features: [
      { title: "Unified Codebase", desc: "Write once, run beautifully on both iOS and Android with custom platform-specific optimizations." },
      { title: "Offline Storage", desc: "Let users complete actions offline and sync data seamlessly once connection restores." },
      { title: "Fluid 60FPS UI", desc: "Smooth gesture recognitions and physics-based transitions for native-like responsiveness." }
    ],
    benefits: [
      "Direct customer access channels via home screen presence",
      "Increased brand loyalty and user engagement metrics",
      "High ratings on Apple App Store & Google Play Store",
      "Scalable API syncing backends optimized for low data"
    ],
    ctaText: "Develop Mobile App"
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    tagline: "High-Fidelity Interaction Design & Brand Systems",
    shortDescription: "Creating visually striking, accessible interfaces and structured design systems that maximize user engagement.",
    longDescription: "Our design process starts with interactive wireframing and user journey mapping. We deliver polished typography, color palettes, and interactive prototypes tailored to modern brand guidelines.",
    iconName: "Palette",
    stats: [
      { value: "WCAG", label: "Accessibility Ready" },
      { value: "70%", label: "Dev-Hand off Saving" },
      { value: "Figma", label: "High Fidelity Design" }
    ],
    responsibilities: [
      "User Journey Mapping & Wireframing",
      "High-Fidelity Interface Design (Figma, Adobe XD)",
      "Interactive Prototype Development",
      "Corporate Brand Design & Design Systems",
      "Usability Testing & Feedback Loops",
      "Responsive Layout Designs (Desktop, Mobile, Tablet)",
      "WCAG Accessibility Compliance Auditing"
    ],
    skills: ["Figma", "Design Systems", "Prototyping", "Wireframing", "Adobe Creative Suite", "UX Research", "Typography"],
    features: [
      { title: "Tailored Component Libraries", desc: "Figma files structured with auto-layout and state-variants ready for developers." },
      { title: "Visual Hierarchy", desc: "Carefully calibrated grid margins and typographic scale to naturally guide user conversion paths." },
      { title: "Interactive Prototypes", desc: "Live mockups that mimic transitions and click-states for early stakeholder reviews." }
    ],
    benefits: [
      "70% reduction in development handoff miscommunications",
      "Elevated corporate brand perception and aesthetic value",
      "Drastically lower bounce rates through intuitive flow layouts",
      "Accessible design compatible with WCAG 2.1 specifications"
    ],
    ctaText: "Get Design Prototype"
  }
];
