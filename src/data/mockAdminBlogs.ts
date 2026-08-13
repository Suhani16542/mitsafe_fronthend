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
    name: "AI & Automation",
    slug: "ai-automation",
    description: "Cutting-edge artificial intelligence, machine learning models, and automated agent workflows.",
    count: 3,
    status: "active",
    createdAt: "2026-01-10",
  },
  {
    id: "cat-2",
    name: "Web Development",
    slug: "web-development",
    description: "Modern frontend frameworks, Next.js architecture, state management, and performance optimization.",
    count: 4,
    status: "active",
    createdAt: "2026-01-12",
  },
  {
    id: "cat-3",
    name: "Cloud & DevOps",
    slug: "cloud-devops",
    description: "Kubernetes orchestration, serverless deployments, CI/CD pipelines, and cloud security.",
    count: 2,
    status: "active",
    createdAt: "2026-01-15",
  },
  {
    id: "cat-4",
    name: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Design systems, user experience research, interactive micro-animations, and visual aesthetics.",
    count: 2,
    status: "active",
    createdAt: "2026-01-18",
  },
  {
    id: "cat-5",
    name: "Mobile Apps",
    slug: "mobile-apps",
    description: "Native iOS/Android development, React Native, and cross-platform app performance.",
    count: 1,
    status: "active",
    createdAt: "2026-01-20",
  },
  {
    id: "cat-6",
    name: "Cybersecurity",
    slug: "cybersecurity",
    description: "Enterprise security architecture, data protection, and compliance frameworks.",
    count: 0,
    status: "inactive",
    createdAt: "2026-02-01",
  },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Building Autonomous AI Agents with Next.js 16 and LangChain",
    slug: "building-autonomous-ai-agents-nextjs-16",
    excerpt: "Learn how to build, deploy, and scale self-governing AI agents integrated directly into modern React application workflows.",
    content: `
<h2>The Era of Autonomous AI Software Engineering</h2>
<p>Artificial Intelligence has rapidly evolved from simple chat interfaces into fully context-aware, autonomous systems capable of planning, invoking complex APIs, and executing multi-step business logic without constant human intervention.</p>
<h3>Key Architectural Layers</h3>
<ul>
  <li><strong>Perception & Memory:</strong> Vector embeddings, semantic caching, and persistent state storage.</li>
  <li><strong>Planning & Reasoning:</strong> ReAct frameworks, step decomposition, and self-correction feedback loops.</li>
  <li><strong>Execution & Tooling:</strong> Secure function calling, sandbox execution environments, and real-time streaming notifications.</li>
</ul>
<p>By leveraging Next.js 16 Server Actions and streaming primitives, enterprise applications can deliver instant UI updates while autonomous agents process complex workloads in the background.</p>
<blockquote>"Autonomous agents are not replacing developers; they are amplifying human engineering velocity by a factor of ten."</blockquote>
<p>Stay tuned as we explore production deployment strategies using Docker and Kubernetes in the next section.</p>
    `.trim(),
    category: "AI & Automation",
    tags: ["AI Agents", "Next.js 16", "LangChain", "TypeScript"],
    author: MOCK_AUTHORS[1],
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-02-10",
    createdAt: "2026-02-08",
    views: 1420,
  },
  {
    id: "blog-2",
    title: "Mastering Next.js 16 App Router & Turbopack Architecture",
    slug: "mastering-nextjs-16-app-router-turbopack",
    excerpt: "A deep dive into high-performance server rendering, static site generation, and Turbopack bundle optimizations.",
    content: `
<h2>Next-Level Frontend Performance with Next.js 16</h2>
<p>Modern web development demands ultra-fast initial page loads, seamless client transitions, and minimal client-side JavaScript bundles.</p>
<h3>What Makes Turbopack Fast?</h3>
<p>Turbopack is written in Rust and utilizes function-level incremental caching. Rather than recompiling entire module graphs, Turbopack updates only modified subtrees in milliseconds.</p>
<ol>
  <li>Instant HMR (Hot Module Replacement)</li>
  <li>Optimized tree-shaking out of the box</li>
  <li>Zero-config Rust-based image and CSS compilation</li>
</ol>
<p>Combining Server Components with streaming Suspense boundaries ensures your web app achieves top-tier Google Lighthouse performance scores effortlessly.</p>
    `.trim(),
    category: "Web Development",
    tags: ["Next.js 16", "Turbopack", "React", "Performance"],
    author: MOCK_AUTHORS[0],
    readTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: true,
    publishedAt: "2026-02-05",
    createdAt: "2026-02-02",
    views: 2890,
  },
  {
    id: "blog-3",
    title: "Scaling Kubernetes Clusters Cost-Effectively for Startup Workloads",
    slug: "scaling-kubernetes-clusters-cost-effectively",
    excerpt: "Practical techniques for optimizing cloud infrastructure spending with Kubernetes auto-scaling, spot instances, and resource requests.",
    content: `
<h2>Cloud Infrastructure Cost Optimization</h2>
<p>Cloud bills can quickly spiral out of control if containerized applications are not properly provisioned and scaled. Here is how top engineering teams keep Kubernetes costs lean.</p>
<h3>Key Optimization Strategies</h3>
<ul>
  <li><strong>Karpenter & Cluster Autoscaler:</strong> Dynamically provision right-sized EC2 instances based on pending pod requests.</li>
  <li><strong>Spot Instance Integration:</strong> Utilize fault-tolerant spot nodes for non-critical background processing queues.</li>
  <li><strong>Horizontal Pod Autoscaling (HPA):</strong> Scale application pods based on custom Prometheus metrics rather than simple CPU load.</li>
</ul>
<p>By enforcing strict memory and CPU requests, you eliminate node fragmentation and maximize resource utilization.</p>
    `.trim(),
    category: "Cloud & DevOps",
    tags: ["Kubernetes", "DevOps", "AWS", "Docker"],
    author: MOCK_AUTHORS[2],
    readTime: "10 min read",
    featuredImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-01-28",
    createdAt: "2026-01-25",
    views: 980,
  },
  {
    id: "blog-4",
    title: "Designing Glassmorphic & Cyberpunk Interfaces for SaaS Platforms",
    slug: "designing-glassmorphic-cyberpunk-interfaces",
    excerpt: "Explore visual design patterns, dynamic gradient glows, and tactile micro-interactions that captivate modern SaaS users.",
    content: `
<h2>Visual Aesthetic Architecture in 2026</h2>
<p>User interface design has moved away from stark minimalism towards rich, tactile visual depth featuring multi-layered glassmorphic blurs, subtle neon accents, and smooth physics-driven motion.</p>
<h3>Design Pillars</h3>
<p>To create futuristic interfaces without sacrificing usability or accessibility:</p>
<ul>
  <li>Use high-contrast typography hierarchy (Inter + Display serif/sans fonts).</li>
  <li>Apply subtle backdrops with <code>backdrop-filter: blur(12px)</code> and 1px translucent borders.</li>
  <li>Implement hardware-accelerated Framer Motion animations for instant feedback.</li>
</ul>
    `.trim(),
    category: "UI/UX Design",
    tags: ["UI/UX", "Figma", "CSS", "Tailwind"],
    author: MOCK_AUTHORS[3],
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
    status: "published",
    isFeatured: false,
    publishedAt: "2026-01-20",
    createdAt: "2026-01-18",
    views: 1760,
  },
  {
    id: "blog-5",
    title: "Building Real-Time Multi-Tenant Micro-SaaS Platforms",
    slug: "building-real-time-multi-tenant-microsaas",
    excerpt: "Architecting multi-tenant database isolation, custom domain routing, and webhooks for scalable B2B SaaS apps.",
    content: `
<h2>Draft Article: Multi-Tenant B2B Architecture</h2>
<p>Multi-tenancy enables a single application deployment to serve multiple isolated client organizations securely.</p>
<p>This draft covers row-level security (RLS) in PostgreSQL, tenant subdomain resolution via Next.js middleware, and automated subscription billing hooks.</p>
    `.trim(),
    category: "Web Development",
    tags: ["SaaS", "Microservices", "PostgreSQL", "Next.js"],
    author: MOCK_AUTHORS[0],
    readTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    status: "draft",
    isFeatured: false,
    publishedAt: "",
    createdAt: "2026-02-11",
    views: 0,
  },
  {
    id: "blog-6",
    title: "AI-Powered Test Automation & Continuous Quality Assurance",
    slug: "ai-powered-test-automation-qa",
    excerpt: "How generative AI tools write, execute, and self-heal end-to-end Playwright tests in modern CI pipelines.",
    content: `
<h2>Draft Article: Autonomous Software Testing</h2>
<p>Self-healing test frameworks dynamically adjust CSS selectors when UI components update, preventing broken CI pipeline runs.</p>
    `.trim(),
    category: "AI & Automation",
    tags: ["Testing", "AI", "Playwright", "CI/CD"],
    author: MOCK_AUTHORS[1],
    readTime: "4 min read",
    featuredImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    status: "draft",
    isFeatured: false,
    publishedAt: "",
    createdAt: "2026-02-12",
    views: 0,
  },
];
