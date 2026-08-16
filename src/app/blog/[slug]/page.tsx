import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, Bookmark, ArrowRight, Tag } from "lucide-react";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/jsonld";
import { getBlogBySlug, getBlogs } from "@/services/blog.service";

export async function generateStaticParams() {
  try {
    const res = await getBlogs({ status: "published", limit: 100 });
    if (res.success && res.data) {
      return res.data.map((post: any) => ({
        slug: post.slug,
      }));
    }
  } catch (err) {
    console.error("generateStaticParams error:", err);
  }
  return [];
}

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
      return {
        title: `${post.title} | Mitsafe Blog`,
        description: post.excerpt,
        alternates: {
          canonical: `/blog/${resolvedParams.slug}`,
        },
        openGraph: {
          title: `${post.title} | Mitsafe Blog`,
          description: post.excerpt,
          url: `https://mitsafe.com/blog/${resolvedParams.slug}`,
          type: "article",
          publishedTime: post.publishedAt || post.createdAt,
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
            : undefined,
        },
        twitter: {
          card: "summary_large_image",
          title: `${post.title} | Mitsafe Blog`,
          description: post.excerpt,
          images: post.featuredImage ? [post.featuredImage] : undefined,
        },
      };
    }
  } catch (err) {
    // Fallback
  }
  return {
    title: "Article Not Found | Mitsafe Blog",
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

  const authorName = typeof post.author === "string" ? post.author : post.author?.name || "Mitsafe Team";
  const authorInitials = authorName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .slice(0, 2);

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: post.title, item: `/blog/${resolvedParams.slug}` },
  ];

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${resolvedParams.slug}`,
    imageUrl: post.featuredImage,
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.publishedAt || post.createdAt,
    authorName,
  });

  return (
    <div className="bg-[#FAFBFF] dark:bg-[#071426] min-h-screen pt-32 pb-24 relative text-[#0F172A] dark:text-white transition-colors duration-300 font-sans">
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), articleSchema]} />

      {/* Subtle Background Layer */}
      <div className="absolute inset-0 bg-[#FAFBFF]/90 dark:bg-[#071426]/90 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8">
          <Link href="/" className="hover:text-[#305EFF] transition-colors">
            Home
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <Link href="/blog" className="hover:text-[#305EFF] transition-colors">
            Blog
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="text-[#0F172A] dark:text-white font-bold truncate max-w-[200px] sm:max-w-xs">
            {post.title}
          </span>
        </nav>

        {/* Article Header & Metadata */}
        <header className="space-y-5 border-b border-slate-200/80 dark:border-white/10 pb-8 mb-10">
          {/* Category Badge & Read Time */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] border border-[#305EFF]/20 text-xs font-extrabold font-mono uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#305EFF]" />
              {post.readTime}
            </span>
          </div>

          {/* Article Title */}
          <h1
            style={{ color: "#0F172A" }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white leading-[1.18] tracking-tight blog-main-title"
          >
            {post.title}
          </h1>

          {/* Excerpt Subtitle */}
          {post.excerpt && (
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed border-l-2 border-[#305EFF] pl-4 py-1 italic">
              {post.excerpt}
            </p>
          )}

          {/* Author & Publication Info */}
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium pt-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#305EFF]/10 text-[#305EFF] border border-[#305EFF]/20 flex items-center justify-center font-bold text-xs">
                {authorInitials || "MT"}
              </div>
              <span className="font-bold text-[#0F172A] dark:text-white">
                {authorName}
              </span>
            </div>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#305EFF]" />
              <span>Published on {post.publishedAt || post.createdAt}</span>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        {post.featuredImage && (
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 mb-12 shadow-lg bg-slate-100 dark:bg-slate-900">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        )}

        {/* Structured Article HTML Body (Comfortable Reading Width max-w-3xl) */}
        <article className="max-w-3xl mx-auto space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="flex flex-col gap-6
              [&>h2]:font-display [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-extrabold [&>h2]:text-[#0F172A] [&>h2]:dark:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-l-4 [&>h2]:border-[#305EFF] [&>h2]:pl-4 [&>h2]:tracking-tight
              [&>h3]:font-display [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:text-[#0F172A] [&>h3]:dark:text-white [&>h3]:mt-8 [&>h3]:mb-3
              [&>p]:text-slate-700 [&>p]:dark:text-slate-300 [&>p]:text-base [&>p]:sm:text-lg [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:font-normal
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2.5 [&>ul]:text-slate-700 [&>ul]:dark:text-slate-300 [&>ul]:text-base [&>ul]:mb-6
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2.5 [&>ol]:text-slate-700 [&>ol]:dark:text-slate-300 [&>ol]:text-base [&>ol]:mb-6
              [&>li]:leading-relaxed
              [&>code]:bg-slate-100 [&>code]:dark:bg-white/10 [&>code]:border [&>code]:border-slate-200 [&>code]:dark:border-white/10 [&>code]:rounded-lg [&>code]:px-2 [&>code]:py-1 [&>code]:text-xs [&>code]:sm:text-sm [&>code]:font-mono [&>code]:text-[#305EFF] [&>code]:dark:text-[#00D4FF]
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#305EFF] [&>blockquote]:bg-[#305EFF]/5 [&>blockquote]:p-5 [&>blockquote]:rounded-r-2xl [&>blockquote]:italic [&>blockquote]:text-slate-800 [&>blockquote]:dark:text-slate-200 [&>blockquote]:my-8
              [&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-5 [&>pre]:rounded-2xl [&>pre]:overflow-x-auto [&>pre]:my-6 [&>pre]:font-mono [&>pre]:text-xs [&>pre]:sm:text-sm
              [&>img]:rounded-2xl [&>img]:my-8 [&>img]:border [&>img]:border-slate-200 [&>img]:shadow-md"
          />
        </article>

        {/* Author Bio Footer Box */}
        <footer className="mt-16 pt-10 border-t border-slate-200/80 dark:border-white/10 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-[#0B1A2E] rounded-3xl border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#305EFF] text-white flex items-center justify-center font-display font-extrabold text-lg shrink-0 shadow-md shadow-[#305EFF]/30">
              {authorInitials || "MT"}
            </div>

            <div className="flex-grow text-center sm:text-left">
              <h4 className="font-display text-base sm:text-lg font-extrabold text-[#0F172A] dark:text-white">
                Written by {authorName}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 mt-1 leading-relaxed">
                Mitsafe Engineering Team — Building high-performance web applications, scalable cloud infrastructure, and modern software architectures.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto justify-center">
              <Link
                href="/blog"
                className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-[#305EFF] text-xs font-bold text-slate-800 dark:text-white transition-all inline-flex items-center gap-2"
              >
                <Bookmark className="w-4 h-4 text-[#305EFF]" />
                <span>All Articles</span>
              </Link>
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#305EFF] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>

            <Link
              href="/get-a-quote"
              className="btn-primary-blue px-6 py-2.5 rounded-full bg-[#305EFF] hover:bg-[#2550E0] !text-white text-xs font-extrabold shadow-md transition-all inline-flex items-center gap-2"
            >
              <span className="!text-white">Get a Quote</span>
              <ArrowRight className="w-4 h-4 !text-white" />
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
