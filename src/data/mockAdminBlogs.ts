import { BlogPost, BlogCategory, BlogAuthor } from "@/types/adminBlog";

export const MOCK_AUTHORS: BlogAuthor[] = [
  {
    id: "auth-1",
    name: "Alex Morgan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    role: "Chief Technology Officer",
  },
  {
    id: "auth-2",
    name: "Sophia Chen",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    role: "Lead AI Architect",
  },
  {
    id: "auth-3",
    name: "Marcus Vance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    role: "Head of Cloud & DevOps",
  },
  {
    id: "auth-4",
    name: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    role: "Principal Product Designer",
  },
];

export const MOCK_CATEGORIES: BlogCategory[] = [
  {
    id: "cat-1",
    name: "Web Development",
    slug: "web-development",
    description: "Modern frontend frameworks, Next.js architecture, state management, and performance optimization.",
    count: 5,
    status: "active",
    createdAt: "2026-01-12",
  },
  {
    id: "cat-2",
    name: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Native iOS/Android development, React Native, Flutter, and mobile user experiences.",
    count: 3,
    status: "active",
    createdAt: "2026-01-14",
  },
  {
    id: "cat-3",
    name: "SEO & Digital Marketing",
    slug: "seo-digital-marketing",
    description: "Search engine optimization, content marketing, growth strategies, and analytics.",
    count: 3,
    status: "active",
    createdAt: "2026-01-16",
  },
  {
    id: "cat-4",
    name: "AI & Technology",
    slug: "ai-technology",
    description: "Cutting-edge artificial intelligence, machine learning models, and automated agent workflows.",
    count: 4,
    status: "active",
    createdAt: "2026-01-10",
  },
  {
    id: "cat-5",
    name: "FinTech",
    slug: "fintech",
    description: "Secure payment gateways, financial software architecture, and decentralized finance.",
    count: 2,
    status: "active",
    createdAt: "2026-01-22",
  },
  {
    id: "cat-6",
    name: "E-commerce",
    slug: "e-commerce",
    description: "Scalable e-commerce stores, checkout optimization, and omnichannel retailing.",
    count: 2,
    status: "active",
    createdAt: "2026-01-24",
  },
  {
    id: "cat-7",
    name: "Business Growth",
    slug: "business-growth",
    description: "Digital transformation strategies, enterprise scaling, and startup growth roadmaps.",
    count: 2,
    status: "active",
    createdAt: "2026-01-26",
  },
  {
    id: "cat-8",
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Design systems, user experience research, interactive micro-animations, and visual aesthetics.",
    count: 2,
    status: "active",
    createdAt: "2026-01-18",
  },
  {
    id: "cat-9",
    name: "Cloud & DevOps",
    slug: "cloud-devops",
    description: "Kubernetes orchestration, serverless deployments, CI/CD pipelines, and cloud security.",
    count: 2,
    status: "active",
    createdAt: "2026-01-15",
  },
  {
    id: "cat-10",
    name: "Tips & Guides",
    slug: "tips-guides",
    description: "Actionable programming guides, developer productivity tips, and software architecture patterns.",
    count: 3,
    status: "active",
    createdAt: "2026-01-28",
  },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "How Modern Web Development Helps Businesses Grow",
    slug: "how-modern-web-development-helps-businesses-grow",
    excerpt: "Discover how a well-designed website builds trust, attracts customers and drives real business growth in 2026 and beyond.",
    content: `
<h2>The Impact of High-Performance Web Applications</h2>
<p>In modern digital commerce, your website is your digital storefront and primary conversion engine. Businesses investing in modern frontend performance and responsive design see immediate gains in user retention and search rankings.</p>
    `.trim(),
    category: "Web Development",
    tags: ["Web Development", "Business Growth", "Performance"],
    author: MOCK_AUTHORS[0],
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-09-25",
    createdAt: "2026-09-24",
    views: 3420,
  },
  {
    id: "blog-2",
    title: "Top Features of a Successful Mobile App in 2026",
    slug: "top-features-of-a-successful-mobile-app-2026",
    excerpt: "Explore the must-have features, latest trends and technologies for building user-focused mobile applications that retain users.",
    content: `
<h2>Mobile Application Excellence in 2026</h2>
<p>From seamless offline caching to instant biometrics and fluid micro-animations, successful mobile apps prioritize intuitive design and zero latency.</p>
    `.trim(),
    category: "Mobile App Development",
    tags: ["Mobile App", "React Native", "UI/UX"],
    author: MOCK_AUTHORS[1],
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-09-22",
    createdAt: "2026-09-21",
    views: 2980,
  },
  {
    id: "blog-3",
    title: "7 Proven SEO Strategies to Rank Higher in 2026",
    slug: "7-proven-seo-strategies-to-rank-higher-2026",
    excerpt: "Boost your website visibility and drive more organic traffic with these effective, algorithm-compliant SEO strategies.",
    content: `
<h2>Modern Search Engine Optimization</h2>
<p>Google's continuous AI updates require structured data schemas, authoritative technical depth, and lightning-fast Core Web Vitals to maintain top rankings.</p>
    `.trim(),
    category: "SEO & Digital Marketing",
    tags: ["SEO", "Digital Marketing", "Business Growth"],
    author: MOCK_AUTHORS[2],
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-09-20",
    createdAt: "2026-09-19",
    views: 4120,
  },
  {
    id: "blog-4",
    title: "How AI is Transforming Businesses Across Industries",
    slug: "how-ai-is-transforming-businesses-across-industries",
    excerpt: "Discover real-world applications of AI and how it is creating new opportunities for operational efficiency, automation and revenue.",
    content: `
<h2>Enterprise AI Transformation</h2>
<p>Autonomous AI agents, automated workflow orchestration, and generative predictive models are redefining how enterprise teams execute complex operations.</p>
    `.trim(),
    category: "AI & Technology",
    tags: ["AI", "Technology", "Automation"],
    author: MOCK_AUTHORS[3],
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-09-18",
    createdAt: "2026-09-17",
    views: 5210,
  },
  {
    id: "blog-5",
    title: "Architecting Secure Next-Gen FinTech Platforms",
    slug: "architecting-secure-next-gen-fintech-platforms",
    excerpt: "Best practices for building ultra-resilient financial applications with PCI-DSS compliance, encrypted transactions, and high availability.",
    content: `
<h2>FinTech Security Standards</h2>
<p>Ensuring compliance, zero-trust tokenization, and lightning-fast settlement pipelines in modern banking and financial platforms.</p>
    `.trim(),
    category: "FinTech",
    tags: ["FinTech", "Security", "Technology"],
    author: MOCK_AUTHORS[0],
    readTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-09-15",
    createdAt: "2026-09-14",
    views: 1890,
  },
  {
    id: "blog-6",
    title: "Scaling E-commerce Checkouts for High-Traffic Flash Sales",
    slug: "scaling-ecommerce-checkouts-for-flash-sales",
    excerpt: "How to eliminate bottlenecks, optimize inventory locking, and scale distributed database transactions during massive traffic spikes.",
    content: `
<h2>E-commerce Scalability Techniques</h2>
<p>Leveraging Redis caching, queue-based checkout buffers, and asynchronous payment confirmations to handle tens of thousands of concurrent checkouts.</p>
    `.trim(),
    category: "E-commerce",
    tags: ["E-commerce", "Web Development", "Performance"],
    author: MOCK_AUTHORS[1],
    readTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1556742049-0a67e5572263?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-09-12",
    createdAt: "2026-09-11",
    views: 2340,
  },
  {
    id: "blog-7",
    title: "Building Autonomous AI Agents with Next.js 16 and LangChain",
    slug: "building-autonomous-ai-agents-nextjs-16",
    excerpt: "Learn how to build, deploy, and scale self-governing AI agents integrated directly into modern React application workflows.",
    content: `
<h2>The Era of Autonomous AI Software Engineering</h2>
<p>Artificial Intelligence has rapidly evolved into fully context-aware, autonomous systems capable of planning, invoking complex APIs, and executing multi-step logic.</p>
    `.trim(),
    category: "AI & Technology",
    tags: ["AI", "Technology", "Next.js"],
    author: MOCK_AUTHORS[1],
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-09-10",
    createdAt: "2026-09-09",
    views: 3100,
  },
  {
    id: "blog-8",
    title: "Mastering Next.js 16 App Router & Turbopack Architecture",
    slug: "mastering-nextjs-16-app-router-turbopack",
    excerpt: "A deep dive into high-performance server rendering, static site generation, and Turbopack bundle optimizations.",
    content: `
<h2>Next-Level Frontend Performance with Next.js 16</h2>
<p>Modern web development demands ultra-fast initial page loads, seamless client transitions, and minimal client-side JavaScript bundles.</p>
    `.trim(),
    category: "Web Development",
    tags: ["Web Development", "Performance", "Technology"],
    author: MOCK_AUTHORS[0],
    readTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-09-08",
    createdAt: "2026-09-07",
    views: 4500,
  },
  {
    id: "blog-9",
    title: "Designing Glassmorphic & Cyberpunk Interfaces for SaaS Platforms",
    slug: "designing-glassmorphic-cyberpunk-interfaces",
    excerpt: "Explore visual design patterns, dynamic gradient glows, and tactile micro-interactions that captivate modern SaaS users.",
    content: `
<h2>Visual Aesthetic Architecture in 2026</h2>
<p>User interface design has moved away from stark minimalism towards rich, tactile visual depth featuring multi-layered glassmorphic blurs.</p>
    `.trim(),
    category: "UI/UX Design",
    tags: ["UI/UX", "Design", "CSS"],
    author: MOCK_AUTHORS[3],
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-09-05",
    createdAt: "2026-09-04",
    views: 2670,
  },
  {
    id: "blog-10",
    title: "Scaling Kubernetes Clusters Cost-Effectively for Startup Workloads",
    slug: "scaling-kubernetes-clusters-cost-effectively",
    excerpt: "Practical techniques for optimizing cloud infrastructure spending with Kubernetes auto-scaling, spot instances, and resource requests.",
    content: `
<h2>Cloud Infrastructure Cost Optimization</h2>
<p>Cloud bills can quickly spiral out of control if containerized applications are not properly provisioned and scaled.</p>
    `.trim(),
    category: "Cloud & DevOps",
    tags: ["Cloud & DevOps", "Kubernetes", "Technology"],
    author: MOCK_AUTHORS[2],
    readTime: "10 min read",
    featuredImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-09-02",
    createdAt: "2026-09-01",
    views: 1950,
  },
  {
    id: "blog-11",
    title: "10 Essential Developer Productivity Tips for Engineering Teams",
    slug: "10-essential-developer-productivity-tips",
    excerpt: "Boost your software engineering output with intelligent CLI workflows, AI pair-programming, and automated testing pipelines.",
    content: `
<h2>Engineering Velocity & Productivity</h2>
<p>Discover the productivity systems and tooling used by top engineering teams to ship features faster with zero regressions.</p>
    `.trim(),
    category: "Tips & Guides",
    tags: ["Tips & Guides", "Web Development", "Technology"],
    author: MOCK_AUTHORS[0],
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-08-28",
    createdAt: "2026-08-27",
    views: 3120,
  },
  {
    id: "blog-12",
    title: "Effective Digital Transformation Strategies for Mid-Market Enterprises",
    slug: "effective-digital-transformation-strategies",
    excerpt: "A practical roadmap for modernizing legacy monoliths into agile microservices, cloud ecosystems, and automated data pipelines.",
    content: `
<h2>Navigating Enterprise Digital Transformation</h2>
<p>Modernizing legacy software stacks requires cultural alignment, phased modular migrations, and robust API contracts.</p>
    `.trim(),
    category: "Business Growth",
    tags: ["Business Growth", "Technology", "Cloud & DevOps"],
    author: MOCK_AUTHORS[2],
    readTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-08-25",
    createdAt: "2026-08-24",
    views: 2840,
  },
  {
    id: "blog-13",
    title: "Building Cross-Platform Mobile Apps with React Native & Expo",
    slug: "building-cross-platform-mobile-apps-react-native-expo",
    excerpt: "Harness EAS build pipelines, native module bridging, and over-the-air updates for streamlined mobile development cycles.",
    content: `
<h2>Modern React Native Architecture</h2>
<p>Expo's modern toolchain has radically accelerated cross-platform iOS and Android mobile app shipping times.</p>
    `.trim(),
    category: "Mobile App Development",
    tags: ["Mobile App", "React Native", "Technology"],
    author: MOCK_AUTHORS[1],
    readTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-08-20",
    createdAt: "2026-08-19",
    views: 2150,
  },
  {
    id: "blog-14",
    title: "Advanced Voice & Conversational AI Integration for Customer Support",
    slug: "advanced-voice-conversational-ai-customer-support",
    excerpt: "Integrating real-time speech-to-text, low-latency LLMs, and multi-agent customer routing for 24/7 automated support.",
    content: `
<h2>Conversational AI Systems</h2>
<p>Real-time WebRTC audio streaming coupled with generative AI delivers human-quality interactive customer support at scale.</p>
    `.trim(),
    category: "AI & Technology",
    tags: ["AI", "Technology", "Business Growth"],
    author: MOCK_AUTHORS[3],
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-08-15",
    createdAt: "2026-08-14",
    views: 1980,
  },
  {
    id: "blog-15",
    title: "Optimizing Web Performance: Achieving 100 on Google Lighthouse",
    slug: "optimizing-web-performance-100-google-lighthouse",
    excerpt: "A comprehensive guide to critical CSS, font subsetting, image modern formats (WebP/AVIF), and eliminating render-blocking scripts.",
    content: `
<h2>The Quest for 100 Lighthouse Performance</h2>
<p>Achieving perfect web performance requires fine-tuning server response times, minimizing script execution, and optimizing DOM size.</p>
    `.trim(),
    category: "Tips & Guides",
    tags: ["Web Development", "Performance", "Tips & Guides", "SEO"],
    author: MOCK_AUTHORS[0],
    readTime: "9 min read",
    featuredImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-08-10",
    createdAt: "2026-08-09",
    views: 3780,
  },
];
