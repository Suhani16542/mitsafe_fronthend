export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  service: string;
  summary: string;
  description: string;
  features: string[];
  techStack: string[];
  imageColor: string; // Gradient description
  img?: string; // Path to image asset
  featured?: boolean;
}

export const portfolioData: Project[] = [
  {
    slug: "auro-terra-energy-website-design",
    title: "Auro Terra Energy | Website Design",
    category: "Web Development",
    client: "Auro Terra Energy",
    year: "2024",
    service: "Website Designing & Development",
    summary: "Branding, layout designing and development for a renewable energy solutions company, establishing an elegant online presence.",
    description: "Auro Terra Energy required a clean, professional portal to showcase their clean solar panels and energy solutions. We built a high-performance, responsive corporate website featuring a pleasant user experience, detailed service sections, and a simple inquiry pipeline.",
    features: [
      "Responsive layout optimized for devices",
      "Elegant solar services pages",
      "Interactive query & contact forms",
      "High speed hosting configurations"
    ],
    techStack: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    imageColor: "from-[#305EFF] to-cyan-500",
    img: "/portfolio_auro_terra.png",
    featured: true
  },
  {
    slug: "alpha-retrieval-ai-chatbots",
    title: "Alpha Retrieval | Enterprise AI Chatbots",
    category: "AI Solutions",
    client: "Alpha Corp",
    year: "2024",
    service: "AI & Automation Solutions",
    summary: "Configuring custom LLM agents and retrieval pipelines for high-performance enterprise search.",
    description: "We built an advanced AI retrieval chatbot platform integrated with private company databases. Using custom RAG prompt strategies, vector indexes, and self-triggering pipelines, the tool handles thousands of queries with minimal latency.",
    features: [
      "Vector database semantic search",
      "OAuth2 credential safety rules",
      "LLM agent automated scheduling",
      "Real-time usage tracking boards"
    ],
    techStack: ["React", "Python", "FastAPI", "Pinecone", "LangChain"],
    imageColor: "from-[#305EFF] to-indigo-500",
    img: "/portfolio_alpha_retrieval.png",
    featured: true
  },
  {
    slug: "fitquest-ios-android",
    title: "FitQuest | Health Tracker App",
    category: "Mobile Apps",
    client: "FitQuest Inc",
    year: "2024",
    service: "Mobile App Development",
    summary: "Native and cross-platform wellness applications with real-time biometric widgets and offline sync.",
    description: "A wellness application for iOS and Android featuring real-time sleep monitors, workout builders, step tracking, and offline data sync.",
    features: [
      "HealthKit and Google Fit syncing",
      "Biometric tracking dashboards",
      "Offline sync database mapping",
      "Apple & Google store validation"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Node.js"],
    imageColor: "from-[#008FED] to-[#0077D4]",
    img: "/portfolio_fitquest.png",
    featured: true
  },
  {
    slug: "apex-crypto-dashboard",
    title: "Apex Crypto | Interface Rebrand",
    category: "UI/UX Design",
    client: "Apex Finance Group",
    year: "2023",
    service: "UI/UX Design Prototyping",
    summary: "High-fidelity crypto trading dashboards and corporate design systems.",
    description: "We redesigned the trading portal for Apex Finance, mapping out responsive user journeys, vector asset components, and high-fidelity prototype flows.",
    features: [
      "High fidelity prototype wireframes",
      "Pixel perfect web design components",
      "Interactive trading dashboard mockup",
      "Figma system style guide handover"
    ],
    techStack: ["Figma", "Adobe Illustrator", "Prototyping", "Design System"],
    imageColor: "from-[#008FED] to-[#0077D4]",
    img: "/portfolio_apex_crypto.png",
    featured: true
  },
  {
    slug: "more-matrimony",
    title: "More Matrimony",
    category: "Web Development",
    client: "More Matrimony Team",
    year: "2024",
    service: "Website Designing & Development",
    summary: "Custom web development and portal design for a modern match-making platform, featuring search filters and simple navigation.",
    description: "More Matrimony is a matchmaking portal designed to bring people together. The platform features robust membership filters, search capabilities, registration gates, and secure profiles database integration.",
    features: [
      "User profile database setup",
      "Search & filter criteria settings",
      "Secure member registration",
      "Responsive dashboard UI"
    ],
    techStack: ["PHP", "JavaScript", "CSS3", "MySQL"],
    imageColor: "from-[#008FED] to-[#0077D4]",
    img: "/portfolio_more_matrimony.png"
  },
  {
    slug: "anyuni-educational-consultants",
    title: "Anyuni – Educational Consultants",
    category: "Web Development",
    client: "Anyuni Consultants",
    year: "2023",
    service: "Website Designing & Development",
    summary: "Portal designing and academic directories setup for an international student consulting firm.",
    description: "Anyuni provides consulting services to students seeking admissions in foreign universities. We built a fast web portal listing courses, universities, scholarship systems, and visa application guides.",
    features: [
      "University directory index",
      "Student consultation forms",
      "Document upload portal",
      "SEO friendly metadata setup"
    ],
    techStack: ["WordPress", "Elementor Pro", "JS", "CSS"],
    imageColor: "from-[#008FED] to-[#0077D4]",
    img: "/portfolio_anyuni.png"
  },
  {
    slug: "smart-agent-workflows",
    title: "Smart Agent | Automated Customer Workflows",
    category: "AI Solutions",
    client: "Logix Retail",
    year: "2024",
    service: "AI & Automation Solutions",
    summary: "Automating ticket triage and response pipelines using self-learning LLM routers.",
    description: "Designed a self-learning LLM router that categorizes customer tickets, extracts key parameters, and runs background automated solutions.",
    features: [
      "Automatic ticket classification",
      "Third-party webhook integration",
      "Natural language email responder",
      "Audit logs & operator review interface"
    ],
    techStack: ["Node.js", "Express", "OpenAI API", "MongoDB"],
    imageColor: "from-[#008FED] to-[#0077D4]",
    img: "/portfolio_smart_agent.png"
  },
  {
    slug: "cargo-track-logistics",
    title: "Cargo Track | GPS Fleet Logistics App",
    category: "Mobile Apps",
    client: "Cargo Transports",
    year: "2023",
    service: "Mobile App Development",
    summary: "GPS asset tracking and routing application for logistics teams, featuring map interfaces and push alerts.",
    description: "FLEET gps app designed to help truck operators register routes, report status, sync cargo bills, and receive instant push updates.",
    features: [
      "React Native",
      "TypeScript",
      "Google Maps API",
      "Redis"
    ],
    techStack: ["React Native", "TypeScript", "Google Maps API", "Redis"],
    imageColor: "from-[#008FED] to-[#0077D4]",
    img: "/portfolio_cargo_track.png"
  },
  {
    slug: "core-erp-database",
    title: "Core ERP | Distributed Database Platform",
    category: "Enterprise Software",
    client: "Vektor Heavy Industries",
    year: "2023",
    service: "Software Engineering & Architecture",
    summary: "Bespoke internal ERP system linking warehouse storage, logistics, and billing.",
    description: "Custom ERP designed for manufacturing scaling. We linked multi-region warehouses, customized billing sheets, and automated inventory sync.",
    features: [
      "Distributed database synchronization",
      "Automatic ledger entries setup",
      "Role based access control configurations",
      "Advanced server analytics panels"
    ],
    techStack: ["Go", "gRPC", "PostgreSQL", "React", "Docker"],
    imageColor: "from-[#008FED] to-[#0077D4]",
    img: "/portfolio_core_erp.png"
  },
  {
    slug: "zupee-online-game",
    title: "Zupee – Online Game",
    category: "Enterprise Software",
    client: "Zupee Games",
    year: "2023",
    service: "Games Development",
    summary: "RNG compliant browser gaming portal featuring Ludo, Snake & Ladders, and real-time cash tournaments.",
    description: "We designed and coded a highly engaging web game interface. The client needed RNG fairness validation, low-latency socket servers, and a premium dashboard showing stats and scores.",
    features: [
      "Multiplayer socket sync",
      "Secure wallet operations",
      "RNG-certified dice engines",
      "Interactive graphical components"
    ],
    techStack: ["HTML5", "Canvas API", "Socket.io", "Node.js"],
    imageColor: "from-[#008FED] to-[#0077D4]",
    img: "/portfolio_zupee.png"
  },
  {
    slug: "metrofintech-mutual-fund-website-development",
    title: "Metrofintech – Mutual fund website development",
    category: "Enterprise Software",
    client: "Metrofintech Ltd",
    year: "2022",
    service: "Website Designing & Development",
    summary: "Web development for a financial services firm displaying real-time mutual fund charts, SIP calculators, and schemes.",
    description: "Metrofintech requested a secure, informative portal for mutual fund schemes. We coded interactive SIP interest calculators, graphs displaying scheme trends, and user registration pipelines.",
    features: [
      "SIP interest return calculator",
      "Interactive scheme trend charts",
      "Secure user onboarding logs",
      "Financial news feed integration"
    ],
    techStack: ["PHP", "JavaScript", "Chart.js", "Bootstrap"],
    imageColor: "from-[#008FED] to-[#0077D4]",
    img: "/portfolio_mobile_apps.png"
  },
  {
    slug: "seo",
    title: "SEO",
    category: "Enterprise Software",
    client: "SEO Partners",
    year: "2023",
    service: "SEO & Search Engine Optimization",
    summary: "Organic traffic optimization, key phrase ranking audits, and link profiles cleanup.",
    description: "Comprehensive search engine optimization campaign, audit, and ranking enhancements for enterprise organic traffic growth.",
    features: [
      "On-page technical SEO audits",
      "Content strategy & keywords maps",
      "Speed optimizations suggestions",
      "Analytics tracking integration"
    ],
    techStack: ["Google Analytics", "Ahrefs", "Semrush", "Search Console"],
    imageColor: "from-[#008FED] to-[#0077D4]",
    img: "/portfolio_cta.png"
  },
  {
    slug: "the-raichand",
    title: "The Raichand",
    category: "Web Development",
    client: "The Raichand Group",
    year: "2023",
    service: "Website Designing & Development",
    summary: "Minimalist corporate website design and layout prototyping for a luxury conglomerate brand.",
    description: "Luxury brand layout styling, design prototyping, and robust frontend engineering to represent Raichand's global holdings.",
    features: [
      "Minimalist layout style integration",
      "Speed and performance optimization",
      "Responsive layouts validation",
      "Contact inquiry forms"
    ],
    techStack: ["React", "TailwindCSS", "Next.js", "Framer Motion"],
    imageColor: "from-slate-700 to-slate-900",
    img: "/portfolio_hero.png"
  },
  {
    slug: "tradingview",
    title: "TradingView",
    category: "Web Development",
    client: "TradingView Community",
    year: "2023",
    service: "Website Designing & Development",
    summary: "High-performance charts dashboard, frontend integration and responsive UI coding for trading tools.",
    description: "Developing custom dashboards, charts configurations, and low latency interfaces for trading systems community widgets.",
    features: [
      "Interactive charts dashboard widget",
      "Socket synchronization logic",
      "Dark / Light modes configuration",
      "Speed optimization specs"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "ChartJS"],
    imageColor: "from-[#305EFF] to-slate-800",
    img: "/portfolio_ui_ux.png"
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    category: "Web Development",
    client: "Studio Creators",
    year: "2022",
    service: "Website Designing & Development",
    summary: "Interactive media portfolio website displaying high-fidelity video streams, vlogs, and media player panels.",
    description: "Media showcase portal with customized players, video galleries layout, streaming optimization, and robust navigation structures.",
    features: [
      "Custom video stream player components",
      "Grid layouts for media galleries",
      "Fast content delivery network setup",
      "Interactive overlay elements"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Plyr API"],
    imageColor: "from-cyan-600 to-[#305EFF]",
    img: "/portfolio_web_dev.png"
  }
];
