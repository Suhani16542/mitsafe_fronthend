import React from "react";
import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";
import { getBlogs, getCategories } from "@/services/blog.service";
import { MOCK_BLOG_POSTS } from "@/data/mockAdminBlogs";
import { BlogPost } from "@/types/adminBlog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Engineering Insights & Guides",
  description:
    "Explore architectural analyses, performance strategies, cloud scaling, and AI engineering insights from the Mitsafe technical team.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Engineering Insights & Guides | Mitsafe",
    description:
      "Explore architectural analyses, performance strategies, cloud scaling, and AI engineering insights from the Mitsafe technical team.",
    url: "https://mitsafe.com/insights",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Insights & Guides | Mitsafe",
    description:
      "Explore architectural analyses, performance strategies, cloud scaling, and AI engineering insights from the Mitsafe technical team.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Insights", item: "/insights" },
];

export default async function InsightsPage() {
  let initialPosts: BlogPost[] = [];
  let initialCategories: string[] = ["All", "AI & Automation", "Web Development", "Cloud & DevOps", "UI/UX Design"];

  try {
    const [blogsRes, catRes] = await Promise.allSettled([
      getBlogs({ status: "published", limit: 100 }),
      getCategories(),
    ]);

    if (blogsRes.status === "fulfilled" && blogsRes.value.success && Array.isArray(blogsRes.value.data) && blogsRes.value.data.length > 0) {
      initialPosts = blogsRes.value.data;
    }

    if (catRes.status === "fulfilled" && catRes.value.success && Array.isArray(catRes.value.data) && catRes.value.data.length > 0) {
      initialCategories = ["All", ...catRes.value.data];
    }
  } catch (err) {
    console.error("[InsightsPage SSR] Error fetching initial data:", err);
  }

  // Fallback to high-quality curated technical articles if live API is temporarily unavailable
  if (initialPosts.length === 0) {
    initialPosts = MOCK_BLOG_POSTS.filter((p) => p.status === "published");
  }

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <InsightsClient initialPosts={initialPosts} initialCategories={initialCategories} />
    </>
  );
}
