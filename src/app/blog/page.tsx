import React, { Suspense } from "react";
import type { Metadata } from "next";
import BlogListClient from "./BlogListClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";
import { getBlogs, getCategories } from "@/services/blog.service";
import { MOCK_BLOG_POSTS } from "@/data/mockAdminBlogs";
import { BlogPost } from "@/types/adminBlog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Technical Blog & Engineering Journal",
  description:
    "Explore architectural analyses, performance strategies, and engineering insights written by the Mitsafe software engineering team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Technical Blog & Engineering Journal | Mitsafe",
    description:
      "Explore architectural analyses, performance strategies, and engineering insights written by the Mitsafe software engineering team.",
    url: "https://www.mitsafe.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Blog & Engineering Journal | Mitsafe",
    description:
      "Explore architectural analyses, performance strategies, and engineering insights written by the Mitsafe software engineering team.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Blog", item: "/blog" },
];

export default async function BlogPage() {
  let initialPosts: BlogPost[] = [];
  let initialCategories: string[] = [
    "All",
    "Web Development",
    "Mobile App Development",
    "SEO & Digital Marketing",
    "AI & Technology",
    "FinTech",
    "E-commerce",
    "Business Growth",
    "UI/UX Design",
    "Cloud & DevOps",
    "Tips & Guides",
  ];

  try {
    const [blogsRes, catRes] = await Promise.allSettled([
      getBlogs({ status: "published", limit: 100 }),
      getCategories(),
    ]);

    if (blogsRes.status === "fulfilled" && blogsRes.value.success && Array.isArray(blogsRes.value.data) && blogsRes.value.data.length > 0) {
      initialPosts = blogsRes.value.data;
      const catsFromBlogs = initialPosts.map((p) => p.category?.trim()).filter(Boolean);
      initialCategories = Array.from(new Set([...initialCategories, ...catsFromBlogs]));
    }

    if (catRes.status === "fulfilled" && catRes.value.success && Array.isArray(catRes.value.data) && catRes.value.data.length > 0) {
      initialCategories = Array.from(new Set(["All", ...catRes.value.data, ...initialCategories.filter((c) => c !== "All")]));
    }
  } catch (err) {
    console.error("[BlogPage SSR] Error pre-fetching data:", err);
  }

  // Fallback to high-quality curated technical articles if live API is temporarily unavailable
  if (initialPosts.length === 0) {
    initialPosts = MOCK_BLOG_POSTS.filter((p) => p.status === "published");
  }

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <Suspense fallback={null}>
        <BlogListClient initialPosts={initialPosts} initialCategories={initialCategories} />
      </Suspense>
    </>
  );
}
