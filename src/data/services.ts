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
    ctaTitle: "Ready to Launch Your Next Web Platform?",
    ctaDescription: "Connect with our web development specialists to engineer a fast, secure, and conversion-optimized web solution tailored for your business.",
    overviewTitle: "High-Performance Platforms Designed to Scale Your Web Systems",
    heroCardTitle: "Enterprise Web Solutions",
    heroCardDescription: "Fully optimized for SEO, lightning-fast rendering speeds, and seamless CMS integration.",
    shortDescription: "We build fast, secure, responsive and SEO-friendly websites that drive results and grow your business.",
    iconName: "Code",
    longDescription: "Our professional web engineers write clean, premium code using modern web stacks. We specialize in building responsive corporate sites, custom web portals, and software integrations tailored to maximize digital presence and performance.",
    features: [
      "Custom Frontend & Backend Engineering",
      "Headless CMS & Serverless Deployments",
      "Dynamic Dashboard Integrations",
      "Full SEO & Performance Optimization",
      "Responsive Layouts for all Screen Sizes"
    ],
    benefits: [
      "Convert visitors into loyal active customers",
      "Ultra-fast loading speed for higher search rank",
      "Simple, easy-to-use content management systems",
      "Robust security configuration against attacks"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    process: [
      { step: "01", title: "Strategy Audit", desc: "Analyzing project scope, user profiles and visual identity." },
      { step: "02", title: "UX Wireframing", desc: "Constructing layout architectures and interactive user models." },
      { step: "03", title: "Full Code Setup", desc: "Coding responsive interfaces with modular React and Next.js layers." },
      { step: "04", title: "Quality Check", desc: "Testing browser support, core web vitals, and asset load speeds." },
      { step: "05", title: "Launch & Sync", desc: "Going live and configuring search console triggers." }
    ],
    stats: [
      { label: "Websites Shipped", value: "450+" },
      { label: "Core Web Vitals Score", value: "98/100" },
      { label: "SEO Performance Boost", value: "+45%" }
    ],
    industries: ["Finance", "Healthcare", "Real Estate", "Education", "eCommerce"],
    faqs: [
      {
        question: "Will my website be mobile-friendly and responsive?",
        answer: "Yes, every website we build is fully responsive, looking and performing beautifully on smartphones, tablets, laptops, and desktop screens."
      },
      {
        question: "Can I manage the website content myself?",
        answer: "Yes, we integrate modern headless CMS platforms (like Sanity, Strapi, or WordPress) so you can update text, images, and posts without writing any code."
      }
    ],
    subServiceGroups: [
      {
        name: "Business Websites",
        items: ["Corporate Website", "Business Website", "Startup Landing Page", "Portfolio Website", "Brochure Website"]
      },
      {
        name: "Web Applications",
        items: ["Custom SaaS Platform", "Web Portal Development", "Interactive Dashboard", "PWA (Progressive Web Apps)"]
      },
      {
        name: "CMS & Platforms",
        items: ["WordPress Development", "Webflow Integration", "Headless CMS Solutions", "Joomla & Drupal Services"]
      }
    ]
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    ctaTitle: "Ready to Launch a High-Performance Mobile App?",
    ctaDescription: "Speak with our mobile engineering team to design and build a scalable app for iOS and Android that keeps users fully engaged.",
    overviewTitle: "Fluid Native & Cross-Platform Apps Built for Seamless Mobile Experiences",
    heroCardTitle: "Mobile System Integration",
    heroCardDescription: "Orchestrated for zero-lag interactions, secure offline sync, and smooth Store validation.",
    shortDescription: "Native and cross-platform mobile apps for Android and iOS that drive engagement and real business results.",
    iconName: "Smartphone",
    longDescription: "Our mobile developers build robust applications for iOS and Android. Using native Swift/Kotlin alongside cross-platform Flutter/React Native, we engineer fluid interfaces, background sync managers, and offline storage systems.",
    features: [
      "Cross-Platform Flutter & React Native",
      "Native iOS Swift & Android Kotlin",
      "Secure Offline Storage & Sync",
      "Push Notification Integrations",
      "Store Submissions (App Store & Play Store)"
    ],
    benefits: [
      "Fluid user experience matching device conventions",
      "Fast feature releases via cross-platform frameworks",
      "Highly responsive offline cache management",
      "Robust client-side encryption protocols"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite"],
    process: [
      { step: "01", title: "Figma Mockups", desc: "Creating visual screens matching iOS and Android style guides." },
      { step: "02", title: "API Integration", desc: "Setting up data fetch protocols and authentication tokens." },
      { step: "03", title: "App Engineering", desc: "Writing fluid React Native hooks or Flutter state elements." },
      { step: "04", title: "Emulator Test", desc: "Validating navigation flows across a matrix of phone displays." },
      { step: "05", title: "Store Deploy", desc: "Structuring app descriptions and releasing to store testing tracks." }
    ],
    stats: [
      { label: "Active App Store Installs", value: "150K+" },
      { label: "Crash-Free Rate Score", value: "99.9%" },
      { label: "Performance Acceleration", value: "40%" }
    ],
    industries: ["Logistics", "Retail", "Healthcare", "Food Delivery", "Entertainment"],
    faqs: [
      {
        question: "Do you build apps for both Apple iOS and Android?",
        answer: "Yes, we build apps targeting both platforms using React Native/Flutter, allowing you to reach all users with a single codebase."
      },
      {
        question: "Will you help upload the apps to the App Store and Google Play Store?",
        answer: "Yes, we handle the entire release process, including metadata setup, visual asset generation, and platform submission."
      }
    ],
    subServiceGroups: [
      {
        name: "iOS Development",
        items: ["Native Swift Apps", "Apple Watch Extensions", "iPad Layout Optimization", "App Store Submission"]
      },
      {
        name: "Android Development",
        items: ["Native Kotlin Apps", "Tablet Configuration", "Play Store Deployment", "Material Design UI"]
      },
      {
        name: "Cross-Platform",
        items: ["React Native Applications", "Flutter App Engineering", "Unified Single Codebase", "WebView Integration"]
      }
    ]
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Software Development",
    ctaTitle: "Need Bespoke Enterprise Software?",
    ctaDescription: "Our software developers are ready to refactor your legacy databases or build modular backend services customized for your operations.",
    overviewTitle: "Custom Software Architectures Engineered for Enterprise Scaling",
    heroCardTitle: "Reliable Core Architectures",
    heroCardDescription: "Engineered for complex desktop interfaces, legacy migrations, and heavy multi-threaded runs.",
    shortDescription: "Custom desktop applications, legacy software refactoring, and scalable backend services.",
    iconName: "Cpu",
    longDescription: "We build reliable software tailored for enterprise workflows. From refactoring legacy applications to building high-speed backend data processors, we configure solutions focused on reliability, modularity, and high runtime performance.",
    features: [
      "Custom Desktop App Development",
      "High-Performance API Architectures",
      "Legacy Codebase Modernization",
      "Multi-Threaded Service Engines",
      "Secure System Administration"
    ],
    benefits: [
      "Completely custom layouts designed for internal staff",
      "Optimized database indexing for heavy query loads",
      "Elimination of monthly third-party software licensing",
      "Clean modular code ready for scaling requirements"
    ],
    technologies: ["C#", ".NET Core", "Java", "Python", "PostgreSQL", "Docker"],
    process: [
      { step: "01", title: "Operational Audit", desc: "Understanding company operations and legacy database schemas." },
      { step: "02", title: "Architecture Design", desc: "Structuring class libraries, data schemas, and API routes." },
      { step: "03", title: "Core Programming", desc: "Developing application logic with rigorous unit test checks." },
      { step: "04", title: "Data Import", desc: "Migrating old spreadsheet records safely into the database." },
      { step: "05", title: "System Handoff", desc: "Setting up server instances and training system administrators." }
    ],
    stats: [
      { label: "Systems Deployed", value: "90+" },
      { label: "Admin Hours Saved", value: "50%" },
      { label: "Migration Data Accuracy", value: "100%" }
    ],
    industries: ["Government", "Healthcare", "Supply Chain", "Legal", "Banking"],
    faqs: [
      {
        question: "Can you modernize our legacy database software?",
        answer: "Yes, we refactor outdated legacy databases and apps, migrating the data securely to modern cloud-based frameworks."
      },
      {
        question: "Do you write automated tests for custom software?",
        answer: "Yes, we integrate comprehensive automated test suites to ensure ongoing system stability and prevent future bugs."
      }
    ],
    subServiceGroups: [
      {
        name: "Desktop Applications",
        items: ["Windows .NET Systems", "Cross-Platform Electron Apps", "Local Service Utilities", "Hardware Drivers"]
      },
      {
        name: "Backend Engines",
        items: ["Multi-Threaded Processors", "High-Volume Message Queues", "Automated Event Loops", "Telemetry Collectors"]
      },
      {
        name: "System Modernization",
        items: ["Database Refactoring", "Legacy Code Audits", "Microservice Conversions", "Cloud Porting"]
      }
    ]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Automation",
    ctaTitle: "Ready to Automate Your Workflows with AI?",
    ctaDescription: "Consult our AI architects to deploy customized LLM agents and database automation tools that eliminate manual delays.",
    overviewTitle: "Intelligent Automation Systems to Maximize Workflow Velocity",
    heroCardTitle: "Cognitive Agent Operations",
    heroCardDescription: "Fully integrated with vector databases, RAG prompt safeguards, and self-triggering pipelines.",
    shortDescription: "Leverage AI agents and automation to optimize workflows, reduce costs and unlock new growth opportunities.",
    iconName: "Bot", // custom bot lookup
    longDescription: "We build advanced AI automation platforms. We specialize in configuring custom LLM agents, automated data collection scripts, AI-driven customer support bots, and system event triggers that reduce manual work.",
    features: [
      "Custom LLM Agent Development",
      "Retrieval-Augmented Generation (RAG)",
      "Automated Workflow Scheduling",
      "Predictive Data Analytics Models",
      "Natural Language Processor Bots"
    ],
    benefits: [
      "24/7 client response handling via AI chatbot",
      "Drastic reduction of manual operations time",
      "Immediate search lookup across internal documents",
      "Real-time alerts triggered by business anomalies"
    ],
    technologies: ["Python", "LangChain", "OpenAI API", "Pinecone Vector DB", "Node-RED", "Hugging Face"],
    process: [
      { step: "01", title: "Capability Check", desc: "Analyzing standard workflows to find repetitive tasks." },
      { step: "02", title: "Vector Base Setup", desc: "Injecting internal documents into a vector database." },
      { step: "03", title: "Agent Programming", desc: "Configuring LLM system prompt limits and validation logic." },
      { step: "04", title: "Test & Guardrails", desc: "Testing response models to prevent hallucination issues." },
      { step: "05", title: "API Release", desc: "Connecting the AI agent directly into Slack, email, or Web UI." }
    ],
    stats: [
      { label: "AI Chats Solved", value: "2M+" },
      { label: "Manual Hours Saved", value: "70%" },
      { label: "Data Search Velocity", value: "<100ms" }
    ],
    industries: ["Customer Support", "Legal Tech", "Finance", "Healthcare", "Real Estate"],
    faqs: [
      {
        question: "How do you prevent the AI from generating incorrect answers?",
        answer: "We employ strict Retrieval-Augmented Generation (RAG) prompts, forcing the AI to answer using only validated internal documents."
      },
      {
        question: "Can the AI bot integrate with our CRM?",
        answer: "Yes, we build custom API webhooks so the AI can pull client status or update lead details directly in your CRM."
      }
    ],
    subServiceGroups: [
      {
        name: "Conversational AI",
        items: ["Customer Support Chatbots", "Voice Assistant Hooks", "Slack & Teams AI Helpers", "Multi-Language Translators"]
      },
      {
        name: "Knowledge Engines",
        items: ["Document Vector Search", "Semantic PDF Indexers", "Automatic Summary Bots", "Legal Document Audits"]
      },
      {
        name: "Process Automation",
        items: ["Scheduled Web Scrapers", "Email Processing Flows", "Auto Invoicing Pipelines", "Notification Webhooks"]
      }
    ]
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    ctaTitle: "Ready to Redefine Your Visual Experience?",
    ctaDescription: "Our UI/UX designers will map out responsive user journeys and develop a premium corporate design system that establishes immediate trust.",
    overviewTitle: "Stunning User Journeys & Brand Systems Engineered to Convert",
    heroCardTitle: "Visual Identity Systems",
    heroCardDescription: "Crafted for maximum pixel precision, design consistency, and clean developer handoff.",
    shortDescription: "Beautiful corporate visual branding, interface wireframing, and custom design systems.",
    iconName: "Palette",
    longDescription: "We design beautiful, user-centered digital interfaces. From detailed wireframing to corporate design systems, we build layouts that communicate brand values and guide users smoothly to conversion points.",
    features: [
      "Custom Brand Identity & Logos",
      "Interactive Interface Mockups",
      "High-Fidelity Figma Prototypes",
      "Comprehensive Style Guide Sheets",
      "Responsive User Journey Mapping"
    ],
    benefits: [
      "Stunning visuals that instantly build user trust",
      "Optimized navigation paths for higher conversions",
      "Consistent UI look across all platforms",
      "Precise typography spacing specs for developers"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "Miro"],
    process: [
      { step: "01", title: "Visual Discovery", desc: "Aligning on brand tone, style examples, and colors." },
      { step: "02", title: "Wireframe Mapping", desc: "Structuring navigation loops and section layouts." },
      { step: "03", title: "High-Fi Design", desc: "Constructing modern user interfaces with custom graphic assets." },
      { step: "04", title: "Prototype Sync", desc: "Creating clickable interface flows for client testing." },
      { step: "05", title: "Asset Handover", desc: "Delivering organized Figma file styles and exports." }
    ],
    stats: [
      { label: "Mockup Screens Drawn", value: "1.2K+" },
      { label: "User Task Success Rate", value: "94%" },
      { label: "Conversion Lift average", value: "+30%" }
    ],
    industries: ["eCommerce", "SaaS Tech", "Healthcare", "Education", "Consulting"],
    faqs: [
      {
        question: "Do we receive the original design source files?",
        answer: "Yes, you receive complete ownership and access to the Figma file, containing all wireframes, design states, and vector assets."
      },
      {
        question: "What is your revision process during the design phase?",
        answer: "We present visual design directions early, offering structured feedback checkpoints to refine layouts before coding."
      }
    ],
    subServiceGroups: [
      {
        name: "Interface Design",
        items: ["SaaS Web Interfaces", "Mobile App Screens", "Dashboard Visual Mockups", "Responsive Landing Pages"]
      },
      {
        name: "Corporate Brand",
        items: ["Corporate Logo Sets", "Brand Identity Guidelines", "Vector Graphic Kits", "Digital Presentation Decks"]
      },
      {
        name: "Interactive Prototypes",
        items: ["Clickable Figma Flows", "Micro-Animation Guides", "User Usability Audits", "A/B Layout Testing"]
      }
    ]
  },
  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    title: "eCommerce Solutions",
    ctaTitle: "Ready to Optimize Your Shopping Platforms?",
    ctaDescription: "Our eCommerce engineers will build a headless storefront or custom payment gateways to drive down cart abandonment rates.",
    overviewTitle: "Secure Storefront Architectures Engineered to Scale Global Sales",
    heroCardTitle: "Transaction Pipeline Design",
    heroCardDescription: "Configured for instant product index lookups, Stripe gateway sync, and multi-vendor logs.",
    shortDescription: "Custom shopping platform engineering, multi-vendor marketplace setups, and payment integrations.",
    iconName: "CreditCard",
    longDescription: "We engineer scalable online shopping systems. From WooCommerce and Shopify integrations to completely custom headless storefronts, we configure secure catalogs, tax calculations, and payment gateways.",
    features: [
      "Custom Headless Storefronts",
      "Shopify & WooCommerce Integrations",
      "Multi-Vendor Marketplace Engines",
      "Secure In-App Checkout Funnels",
      "Automated Tax & Shipping Computes"
    ],
    benefits: [
      "Near-zero page latency for quick product loading",
      "Higher sales checkouts via optimized checkout paths",
      "Flexible multi-gateway payment integrations",
      "Live sync support for inventory tracking"
    ],
    technologies: ["Shopify API", "WooCommerce", "Stripe", "Next.js Storefront", "PostgreSQL", "Redis"],
    process: [
      { step: "01", title: "Catalog Review", desc: "Assessing product variants, shipping rules, and tax parameters." },
      { step: "02", title: "Store Architecture", desc: "Setting up database schemas for catalog indexing and carts." },
      { step: "03", title: "Coding Storefront", desc: "Engineering high-speed product grids and cart validation checkouts." },
      { step: "04", title: "Checkout Sandbox", desc: "Testing Stripe card transactions and invoice delivery setups." },
      { step: "05", title: "Store Launch", desc: "Going live and configuring catalog telemetry triggers." }
    ],
    stats: [
      { label: "Active eCommerce Stores", value: "80+" },
      { label: "Cart Abandonment Drop", value: "-25%" },
      { label: "Transaction volume processed", value: "$10M+" }
    ],
    industries: ["Retail", "Fashion", "B2B Supply", "Food & Drink", "Subscriptions"],
    faqs: [
      {
        question: "Can you sync store stock with our local warehouse ERP?",
        answer: "Yes, we set up custom webhooks that update digital catalog stock whenever physical inventories change."
      },
      {
        question: "Are your storefront configurations secure?",
        answer: "Absolutely, we use SSL protocols, secure server containers, and standard Stripe checkouts to protect user transactions."
      }
    ],
    subServiceGroups: [
      {
        name: "Shop Platforms",
        items: ["Custom Headless Stores", "Shopify Store setups", "WooCommerce Extensions", "Magento Projects"]
      },
      {
        name: "Marketplace Setup",
        items: ["Multi-Vendor Systems", "Vendor Catalog Portals", "Commission Splitting Logs", "Subscription Checkouts"]
      },
      {
        name: "Payment Gateways",
        items: ["Stripe Checkout Integrations", "PayPal API Support", "Apple & Google Pay setups", "Automated Invoice Logs"]
      }
    ]
  },
  {
    id: "crm-erp",
    slug: "crm-erp",
    title: "CRM & ERP",
    ctaTitle: "Ready to Unify Your Internal Workflows?",
    ctaDescription: "Let's build a custom ERP database or lead pipeline tracker to automate fee collection and eliminate data leaks.",
    overviewTitle: "Bespoke Management Hubs Tailored to Clean Operations",
    heroCardTitle: "Operational Roster Controls",
    heroCardDescription: "Optimized with role-based access rules, automated rosters, and billing summaries.",
    shortDescription: "Enterprise resource planning platforms, custom sales pipeline trackers, and student database management.",
    iconName: "Briefcase",
    longDescription: "We build advanced enterprise platforms. We specialize in custom CRM dashboards, pipeline managers, school database ERP systems, and billing sheets that streamline internal workflows.",
    features: [
      "Custom Sales Pipelines & Lead Logs",
      "Automated Student Roster Database ERP",
      "Fee Invoicing & Payment Sinks",
      "Role-Based Access Controls",
      "Unified Operational Dashboards"
    ],
    benefits: [
      "No lost client communications or fee leaks",
      "Automated alerts keep parents or staff informed",
      "Drastic reduction of spreadsheet administration time",
      "Clear metrics reporting for company decisions"
    ],
    technologies: ["React", "Go", "PostgreSQL", "Node.js", "Docker", "AWS RDS"],
    process: [
      { step: "01", title: "Workflow Analysis", desc: "Assessing legacy sheets, data schemas, and staff permissions." },
      { step: "02", title: "Roster Layout", desc: "Structuring user permissions and database relational mapping." },
      { step: "03", title: "Coding Platform", desc: "Programming custom dashboard modules and billing reports." },
      { step: "04", title: "Data Migration", desc: "Exporting old CSV sheets and importing database keys safely." },
      { step: "05", title: "System Release", desc: "Deploying secure database layers and training admin users." }
    ],
    stats: [
      { label: "Admin Work Hours Saved", value: "60%" },
      { label: "Pipeline Value Tracked", value: "$20M+" },
      { label: "Data Leakage Rate", value: "0%" }
    ],
    industries: ["Education", "Corporate Sales", "Real Estate", "Professional Services"],
    faqs: [
      {
        question: "Can we set different access roles for managers and staff?",
        answer: "Yes, our platforms feature role-based permissions, allowing users to view and edit only their assigned modules."
      },
      {
        question: "Is there a limit on how many client records we can store?",
        answer: "No, our database designs are built on scalable PostgreSQL databases that easily manage millions of rows."
      }
    ],
    subServiceGroups: [
      {
        name: "Enterprise ERP",
        items: ["School Roster ERP", "Student Portal Logins", "Fee Collection Hubs", "Payroll & HRM Systems"]
      },
      {
        name: "Custom CRM",
        items: ["Sales Pipeline Trackers", "Lead Score Dashboards", "Interaction History Logs", "Email Template Sinks"]
      },
      {
        name: "Business Reports",
        items: ["Profit & Cost Telemetry", "Role-Based Access Boards", "Automatic Invoice Senders", "Audit Event Logs"]
      }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    ctaTitle: "Ready to Drive More Qualified User Traffic?",
    ctaDescription: "Speak with our growth marketing architects to target high-intent keywords and configure high-converting paid search networks.",
    overviewTitle: "Data-Driven Marketing Engines Built to Accelerate Growth",
    heroCardTitle: "Conversion Attribution Analytics",
    heroCardDescription: "Engineered for technical SEO auditing, pixel setups, and real-time dashboard reports.",
    shortDescription: "Data-driven SEO audits, Google PPC configuration, and social media audience growth.",
    iconName: "TrendingUp",
    longDescription: "We engineer marketing setups that drive customer leads. We optimize search visibility through code-level SEO auditing, configure targeted Google Ads networks, and construct growth metrics dashboards.",
    features: [
      "Technical SEO Code Auditing",
      "Targeted Google PPC Configurations",
      "Retargeting Pixel Integrations",
      "Visual Performance Dashboards",
      "Social Graphic Asset Designs"
    ],
    benefits: [
      "Accelerated flow of daily inbound user leads",
      "Optimized cost-per-click spend levels",
      "Clear attribution reporting on marketing ROI",
      "Increased domain authority in Google index search"
    ],
    technologies: ["Google Analytics 4", "Google Ads Editor", "Semrush", "Meta Ads Manager", "Looker Studio"],
    process: [
      { step: "01", title: "Marketing Audit", desc: "Analyzing current web traffic, competitor ranks, and ads cost." },
      { step: "02", title: "Keyword Indexing", desc: "Identifying high-intent search terms to drive conversions." },
      { step: "03", title: "On-Page Optimization", desc: "Adding custom meta tags and improving web vitals load speeds." },
      { step: "04", title: "Campaign Launch", desc: "Setting up search ad structures and retargeting pixels." },
      { step: "05", title: "Weekly Tuning", desc: "Optimizing negative keywords and tracking attribution paths." }
    ],
    stats: [
      { label: "Organic Search Boost", value: "3.5x" },
      { label: "Cost-Per-Lead Savings", value: "35%" },
      { label: "Campaigns Active", value: "110+" }
    ],
    industries: ["Professional Services", "eCommerce", "SaaS Tech", "Education", "Healthcare"],
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer: "While paid ads generate traffic immediately, organic SEO optimizations typically show index improvements in 3 to 6 months."
      },
      {
        question: "Do we receive monthly marketing performance reports?",
        answer: "Yes, we build a custom Looker Studio dashboard that tracks your real-time traffic and ad conversions."
      }
    ],
    subServiceGroups: [
      {
        name: "Search Optimization",
        items: ["Technical SEO Auditing", "Keyword Intent Indexing", "Local Map Rankings", "Link Building Support"]
      },
      {
        name: "Paid Ads",
        items: ["Google Search Ads", "Display Banner Networks", "Social Retargeting Pixels", "A/B Ad Creative Tests"]
      },
      {
        name: "Marketing Data",
        items: ["Google Analytics setup", "Looker Dashboard Views", "Conversion Funnel Audits", "Lead Attribution Maps"]
      }
    ]
  },
  {
    id: "api-integration",
    slug: "api-integration",
    title: "API Integration",
    ctaTitle: "Need to Sync Multiple Business Applications?",
    ctaDescription: "Connect with our API integration engineers to configure secure webhooks, custom middleware, and automated background synchronization.",
    overviewTitle: "Unified API Gateways Linking Business Systems Securely",
    heroCardTitle: "Data Synchronization Hubs",
    heroCardDescription: "Engineered with OAuth2 credentials, token authorization, and Redis queuing.",
    shortDescription: "Custom API microservices development, webhook integrations, and third-party data synchronization.",
    iconName: "Layers",
    longDescription: "We build secure data integrations between business tools. We develop custom REST and GraphQL APIs, configure real-time webhooks, and sync data between CRM databases and third-party systems.",
    features: [
      "Custom REST & GraphQL API Engineering",
      "Webhook Pipeline Configurations",
      "Secure Auth Protocols (OAuth2/JWT)",
      "Automated Data Sync Schedulers",
      "Legacy Database Connector Utilities"
    ],
    benefits: [
      "Unified databases with no manual copy-pasting",
      "Instant real-time updates across multiple systems",
      "Secure authenticated data access channels",
      "Reliable error handling and transaction logs"
    ],
    technologies: ["Node.js", "Express", "GraphQL", "Postman", "Redis", "AWS Lambda"],
    process: [
      { step: "01", title: "API Audit", desc: "Reviewing third-party API limits, payloads, and auth flows." },
      { step: "02", title: "Protocol Design", desc: "Structuring request payloads, status codes, and error bounds." },
      { step: "03", title: "Coding Middleware", desc: "Developing secure Node.js routers with data format parsing." },
      { step: "04", title: "Sandbox Checking", desc: "Testing mock requests, high latency, and rate-limiting limits." },
      { step: "05", title: "Server Deploy", desc: "Going live and configuring system monitoring alerts." }
    ],
    stats: [
      { label: "APIs Integrated", value: "300+" },
      { label: "Data Latency Speed", value: "<40ms" },
      { label: "Sync Transactions/Day", value: "5M+" }
    ],
    industries: ["Finance", "SaaS Tech", "Supply Chain", "Real Estate", "eCommerce"],
    faqs: [
      {
        question: "Can you connect our custom software to QuickBooks?",
        answer: "Yes, we specialize in building custom API synchronizations with financial tools like QuickBooks and Stripe."
      },
      {
        question: "How do you handle API rate-limiting issues?",
        answer: "We implement queuing systems (like BullMQ or Redis) that retry requests if the platform hits rate limits."
      }
    ],
    subServiceGroups: [
      {
        name: "Custom Integration",
        items: ["REST API Middleware", "GraphQL Data Gateways", "Webhook Sync Handlers", "SDK Client Libraries"]
      },
      {
        name: "App Connections",
        items: ["Payment Gateway Sync", "CRM Database Webhooks", "Logistics & Shipping APIs", "Accounting Integrations"]
      },
      {
        name: "Secure Protocols",
        items: ["OAuth2 Flow Setup", "JWT Session Management", "API Key Decrypt Shields", "Rate-Limiting Guards"]
      }
    ]
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    ctaTitle: "Ready to Build Private Elastic Infrastructure?",
    ctaDescription: "Speak with our cloud engineers to automate your CI/CD pipelines, containerize backend applications, and secure private server networks.",
    overviewTitle: "Elastic Cloud Infrastructure Engineered for 100% Uptime",
    heroCardTitle: "Container Cluster Management",
    heroCardDescription: "Structured via Terraform IaC, container scheduling, and real-time alerts.",
    shortDescription: "Scalable cloud infrastructure, CI/CD pipeline automation, and 24/7 server cluster monitoring.",
    iconName: "Cloud",
    longDescription: "We engineer secure cloud architectures. We set up automated server deployment pipelines, configure container clusters, and manage server instances to guarantee high availability and low user latency.",
    features: [
      "Automated CI/CD Release Pipelines",
      "Docker & Kubernetes Container Systems",
      "Infrastructure-as-Code Setup (Terraform)",
      "Secure Virtual Private Clouds (VPC)",
      "24/7 Server Log Telemetry Auditing"
    ],
    benefits: [
      "Instant code deployment without app downtime",
      "Automatic scaling of server nodes during heavy traffic",
      "Enterprise-grade private networks for data safety",
      "Immediate alerts on runtime hardware issues"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus"],
    process: [
      { step: "01", title: "Infrastructure Review", desc: "Analyzing app traffic patterns, server nodes, and database scales." },
      { step: "02", title: "IaC Structuring", desc: "Writing Terraform templates to code the server resources." },
      { step: "03", title: "CI/CD Setup", desc: "Configuring GitHub Actions deployment triggers." },
      { step: "04", title: "Scale Validation", desc: "Running heavy synthetic traffic tests on Kubernetes clusters." },
      { step: "05", title: "Alert Configuration", desc: "Activating server telemetry monitors and SMS pager hooks." }
    ],
    stats: [
      { label: "Server Clusters Managed", value: "60+" },
      { label: "System Uptime Rate", value: "99.99%" },
      { label: "Release Velocity Boost", value: "8x" }
    ],
    industries: ["Fintech", "SaaS Tech", "High-Traffic Portals", "Enterprise Databases", "eCommerce"],
    faqs: [
      {
        question: "Do you support autoscaling for traffic surges?",
        answer: "Yes, we set up autoscaling algorithms that add server containers when CPU loads spike, scale down when idle."
      },
      {
        question: "Can you configure automated daily database backups?",
        answer: "Yes, we implement secure automated backup routines with replication across multiple geographic zones."
      }
    ],
    subServiceGroups: [
      {
        name: "Cloud Hosting",
        items: ["AWS Cloud Engineering", "Docker Container Systems", "Kubernetes Clustering", "Serverless Functions"]
      },
      {
        name: "CI/CD Automation",
        items: ["GitHub Actions Scripts", "Terraform Infrastructure", "Automated Release Tests", "Staging Environments"]
      },
      {
        name: "Security & Monitoring",
        items: ["VPC Private Subnets", "SSL/TLS Configurations", "Prometheus Log Monitors", "PagerAlert Integrations"]
      }
    ]
  }
];
