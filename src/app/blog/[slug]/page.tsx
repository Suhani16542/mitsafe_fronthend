import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/jsonld";
import { getBlogBySlug, getBlogs } from "@/services/blog.service";
import BlogDetailView from "@/components/blog/BlogDetailView";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const res = await getBlogBySlug(resolvedParams.slug);
    if (res.success && res.data) {
      const post = res.data;
      const authorName =
        typeof post.author === "string" ? post.author : post.author?.name || "Mitsafe Team";

      // Parse keywords strictly from current blog's keywords field
      let keywordsList: string[] = [];
      if (Array.isArray(post.keywords)) {
        keywordsList = post.keywords.map((k) => String(k).trim()).filter(Boolean);
      } else if (typeof post.keywords === "string" && post.keywords.trim()) {
        keywordsList = post.keywords
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean);
      }

      const canonicalUrl = `https://mitsafe.com/blog/${resolvedParams.slug}`;
      const description = post.excerpt || `${post.title} — Technical analysis and insights by Mitsafe.`;
      const publishedDate = post.publishedAt || post.createdAt || new Date().toISOString();
      const modifiedDate = (post as any).updatedAt || post.publishedAt || post.createdAt || new Date().toISOString();
      const keywordsString = keywordsList.join(", ");

      return {
        title: `${post.title} | Mitsafe`,
        description,
        keywords: keywordsList.length > 0 ? keywordsList : undefined,
        alternates: {
          canonical: canonicalUrl,
        },
        openGraph: {
          title: post.title,
          description,
          url: canonicalUrl,
          siteName: "Mitsafe",
          type: "article",
          publishedTime: publishedDate,
          modifiedTime: modifiedDate,
          authors: [authorName],
          images: post.featuredImage
            ? [
                {
                  url: post.featuredImage,
                  width: 1200,
                  height: 630,
                  alt: post.title,
                },
              ]
            : [
                {
                  url: "https://mitsafe.com/opengraph-image.png",
                  width: 1200,
                  height: 630,
                  alt: "Mitsafe Technologies",
                },
              ],
        },
        twitter: {
          card: "summary_large_image",
          title: post.title,
          description,
          images: post.featuredImage ? [post.featuredImage] : ["https://mitsafe.com/opengraph-image.png"],
        },
        other: {
          ...(keywordsString ? { keywords: keywordsString } : {}),
          "article:published_time": publishedDate,
          "article:modified_time": modifiedDate,
          "article:author": authorName,
        },
      };
    }
  } catch (err) {
    console.error("Error generating metadata for blog slug:", err);
  }

  return {
    title: "Article Not Found | Mitsafe Blog",
    description: "The requested engineering blog article could not be found.",
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  let post = null;

  try {
    const res = await getBlogBySlug(resolvedParams.slug);
    if (res.success && res.data) {
      post = res.data;
    }
  } catch (err) {
    console.error(`Error fetching blog slug ${resolvedParams.slug}:`, err);
  }

  if (!post) {
    notFound();
  }

  const authorName =
    typeof post.author === "string" ? post.author : post.author?.name || "Mitsafe Team";

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: post.title, item: `/blog/${resolvedParams.slug}` },
  ];

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt || post.title,
    url: `/blog/${resolvedParams.slug}`,
    imageUrl: post.featuredImage,
    datePublished: post.publishedAt || post.createdAt,
    dateModified: (post as any).updatedAt || post.publishedAt || post.createdAt,
    authorName,
    keywords: post.keywords,
  });

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), articleSchema]} />
      <BlogDetailView post={post} slug={resolvedParams.slug} />
    </>
  );
}
