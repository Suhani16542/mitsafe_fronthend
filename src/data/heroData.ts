import { HeroService } from "@/types/hero";

export const heroData: HeroService[] = [
  {
    id: 1,
    slug: "web-development",
    badge: "🚀 Web Development",
    title: "Modern Web",
    highlight: "Development",
    description:
      "We build blazing fast, SEO optimized, responsive websites using Next.js, React, TypeScript and modern cloud technologies.",

    image:
      "/images/hero/hero-web-development.png",

    mobileImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80",

    tech: [
      { title: "React", icon: "⚛️" },
      { title: "Next.js", icon: "▲" },
      { title: "TypeScript", icon: "TS" },
      { title: "Tailwind", icon: "🎨" },
      { title: "Node.js", icon: "🟢" },
      { title: "MongoDB", icon: "🍃" },
    ],

    floatingCards: [
      {
        title: "SEO Optimized",
        icon: "🚀",
        position: "top-left",
      },
      {
        title: "Fast Performance",
        icon: "⚡",
        position: "top-right",
      },
      {
        title: "Responsive",
        icon: "📱",
        position: "bottom-left",
      },
      {
        title: "Secure",
        icon: "🔒",
        position: "bottom-right",
      },
    ],

    stats: [
      {
        label: "Projects",
        value: "250+",
        icon: "🚀",
      },
      {
        label: "Clients",
        value: "180+",
        icon: "❤️",
      },
      {
        label: "Success",
        value: "99%",
        icon: "⭐",
      },
    ],

    primaryButton: {
      text: "Explore Services",
      href: "#services",
    },

    secondaryButton: {
      text: "Contact Us",
      href: "/contact",
    },
  },

  {
    id: 2,
    slug: "mobile-development",
    badge: "📱 Mobile Apps",
    title: "Mobile App",
    highlight: "Development",
    description:
      "Native Android, iOS and Flutter applications with premium UI and enterprise performance.",

    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",

    mobileImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80",

    tech: [
      { title: "Flutter", icon: "💙" },
      { title: "React Native", icon: "⚛️" },
      { title: "Swift", icon: "🍎" },
      { title: "Kotlin", icon: "🟣" },
      { title: "Firebase", icon: "🔥" },
      { title: "API", icon: "🔌" },
    ],

    floatingCards: [
      {
        title: "Android",
        icon: "🤖",
        position: "top-left",
      },
      {
        title: "iOS",
        icon: "🍎",
        position: "top-right",
      },
      {
        title: "Flutter",
        icon: "💙",
        position: "bottom-left",
      },
      {
        title: "Secure",
        icon: "🔒",
        position: "bottom-right",
      },
    ],

    stats: [
      {
        label: "Apps",
        value: "120+",
        icon: "📱",
      },
      {
        label: "Downloads",
        value: "2M+",
        icon: "⬇️",
      },
      {
        label: "Rating",
        value: "4.9",
        icon: "⭐",
      },
    ],

    primaryButton: {
      text: "View Apps",
      href: "#services",
    },

    secondaryButton: {
      text: "Contact",
      href: "/contact",
    },
  },
];