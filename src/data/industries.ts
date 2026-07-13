export interface Industry {
  slug: string;
  title: string;
  description: string;
  iconName: "Landmark" | "HeartPulse" | "ShoppingCart" | "Truck" | "ShieldAlert" | "GraduationCap";
  solutions: string[];
}

export const industriesData: Industry[] = [
  {
    slug: "finance-banking",
    title: "Finance & Banking",
    description: "Highly secure, low-latency financial systems, asset management portals, and AI-driven fraud detection engines.",
    iconName: "Landmark",
    solutions: [
      "End-to-end encrypted wire transfer protocols",
      "Real-time asset value calculation tickers",
      "Biometric-enabled client mobile portals",
      "AI models monitoring transaction anomalies"
    ]
  },
  {
    slug: "healthcare-lifesciences",
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant patient record migrations, telehealth systems, and medical analytics dashboards.",
    iconName: "HeartPulse",
    solutions: [
      "Secure private patient communication logs",
      "Cloud infrastructures with complete audits",
      "Medical records search powered by secure RAG",
      "Telehealth booking and stream stabilization"
    ]
  },
  {
    slug: "e-commerce-retail",
    title: "E-Commerce & Retail",
    description: "High-conversion headless shopping engines, personalized recommendations, and instant search catalog architectures.",
    iconName: "ShoppingCart",
    solutions: [
      "Headless integration with Shopify/BigCommerce",
      "Lighthouse 95+ performance optimization scores",
      "Sub-300ms catalog searching capabilities",
      "Predictive client recommendation analytics"
    ]
  },
  {
    slug: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    description: "Autonomous routing agents, shipment status trackers, and inventory optimization pipelines.",
    iconName: "Truck",
    solutions: [
      "Dynamic route calculations via AI agents",
      "GPS tracking alerts and automated notifications",
      "Predictive inventory stock depletion logs",
      "Automated vendor invoice management pipelines"
    ]
  },
  {
    slug: "cybersecurity-defense",
    title: "Cybersecurity & Defence",
    description: "Zero-trust network architectures, encryption key rotation servers, and compliance audits.",
    iconName: "ShieldAlert",
    solutions: [
      "Multi-factor biometric verification gates",
      "Real-time penetration test monitoring",
      "Database row-level tokenized encryption",
      "Automated system vulnerability scans"
    ]
  },
  {
    slug: "education-elearning",
    title: "Education & E-Learning",
    description: "Interactive virtual classrooms, learning progress dashboards, and customizable certification systems.",
    iconName: "GraduationCap",
    solutions: [
      "Real-time whiteboard collaborative web hubs",
      "Automated test grading and progress charts",
      "Course video distribution optimization pipelines",
      "Interactive digital certification vectors"
    ]
  }
];
