"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  ArrowRight,
  Key,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Share2,
  Check,
  Sparkles,
} from "lucide-react";
import { BlogPost } from "@/types/adminBlog";
import BlogTableOfContents, { TocItem } from "./BlogTableOfContents";
import BlogQuoteSidebar from "./BlogQuoteSidebar";

interface BlogDetailViewProps {
  post: BlogPost;
  slug: string;
}

const FALLBACK_CATEGORY_IMAGES: Record<string, string> = {
  Technology: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
  "AI & Automation": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
  "Cloud & Security": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
  "Software Engineering": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
  General: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
};

export default function BlogDetailView({ post, slug }: BlogDetailViewProps) {
  const [imageError, setImageError] = useState(false);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Author details
  const authorName =
    typeof post.author === "string"
      ? post.author
      : post.author?.name || "Mitsafe Team";

  const authorInitials = authorName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Resolved Featured Image URL (with reliable fallback)
  const resolvedFeaturedImage = useMemo(() => {
    if (post.featuredImage && !imageError) {
      return post.featuredImage;
    }
    const cat = post.category || "Technology";
    return FALLBACK_CATEGORY_IMAGES[cat] || FALLBACK_CATEGORY_IMAGES.General;
  }, [post.featuredImage, post.category, imageError]);

  // Unified HTML & TOC Parser (Handles HTML, Markdown, and Plain-Text articles)
  const { processedContent, tocItems } = useMemo(() => {
    if (!post.content || !post.content.trim()) {
      return {
        processedContent: "<p>No content available.</p>",
        tocItems: [{ id: "heading-overview", text: "Article Overview", level: 2 }],
      };
    }

    let content = post.content.trim();
    const isHtml = /<[a-z][\s\S]*>/i.test(content);

    // If content is plain text / newlines / markdown, convert to rich structured semantic HTML
    if (!isHtml) {
      const lines = content.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      const resultBlocks: string[] = [];
      let currentList: string[] = [];

      const flushList = () => {
        if (currentList.length > 0) {
          resultBlocks.push(
            "<ul>" + currentList.map((li) => "<li>" + li + "</li>").join("") + "</ul>"
          );
          currentList = [];
        }
      };

      lines.forEach((line) => {
        if (line.startsWith("•") || line.startsWith("- ") || line.startsWith("* ")) {
          const itemText = line.replace(/^[•\-\*]\s*/, "").trim();
          currentList.push(itemText);
        } else if (line.startsWith("### ")) {
          flushList();
          resultBlocks.push(`<h3>${line.replace(/^###\s+/, "")}</h3>`);
        } else if (line.startsWith("## ") || line.startsWith("# ")) {
          flushList();
          resultBlocks.push(`<h2>${line.replace(/^#{1,2}\s+/, "")}</h2>`);
        } else {
          flushList();
          const isNumberedSection = /^(\d+[\.\)]\s+[A-Z])/i.test(line) && line.length < 120;
          const isNamedSection =
            /^(Why |How |What |The Future|Key Benefits|Benefits of|Conclusion|Introduction|Summary)/i.test(line) &&
            line.length < 120 &&
            !line.endsWith(":");
          const isShortTitle =
            line.length < 65 &&
            !line.endsWith(".") &&
            !line.endsWith(":") &&
            !line.includes(",") &&
            /^[A-Z]/.test(line);

          if (isNumberedSection || isNamedSection || isShortTitle) {
            resultBlocks.push(`<h2>${line}</h2>`);
          } else {
            resultBlocks.push(`<p>${line}</p>`);
          }
        }
      });
      flushList();
      content = resultBlocks.join("\n");
    }

    // Clean up empty headings or empty paragraph artifacts (e.g. <h2><br></h2> or <h2></h2>)
    content = content
      .replace(/<(h[2-4])[^>]*>(\s*|<br\s*\/?>|&nbsp;|<span[^>]*><\/span>|<strong[^>]*><\/strong>)*<\/\1>/gi, "")
      .replace(/<p[^>]*>(\s*|<br\s*\/?>|&nbsp;)*<\/p>/gi, "");

    // Parse all <h2>, <h3>, <h4> tags to inject anchor IDs and construct TOC
    const toc: TocItem[] = [];
    let headingIndex = 0;
    const headingRegex = /<(h[2-4])([^>]*)>([\s\S]*?)<\/\1>/gi;

    const modifiedHtml = content.replace(
      headingRegex,
      (match, tag, existingAttrs, innerContent) => {
        const plainText = innerContent.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, "").trim();
        // If heading has no actual text, strip it completely to prevent stray border artifacts
        if (!plainText) return "";

        const idMatch = existingAttrs.match(/id=["']([^"']+)["']/i);
        let id = "";

        if (idMatch && idMatch[1]) {
          id = idMatch[1];
        } else {
          const slugified = plainText
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
          id = `heading-${headingIndex}-${slugified || "section"}`;
        }

        const level = parseInt(tag.charAt(1), 10);
        toc.push({
          id,
          text: plainText,
          level,
        });

        headingIndex++;

        if (!idMatch) {
          return `<${tag} id="${id}" ${existingAttrs}>${innerContent}</${tag}>`;
        }
        return match;
      }
    );

    if (toc.length === 0) {
      toc.push({ id: "heading-overview", text: "Article Overview", level: 2 });
      return {
        processedContent: `<h2 id="heading-overview">Article Overview</h2>\n${modifiedHtml}`,
        tocItems: toc,
      };
    }

    return { processedContent: modifiedHtml, tocItems: toc };
  }, [post.content]);

  // Parse Keywords (Separate from Tags)
  const keywordsList: string[] = useMemo(() => {
    if (!post.keywords) return [];
    if (Array.isArray(post.keywords)) {
      return post.keywords.map((k) => String(k).trim()).filter(Boolean);
    }
    if (typeof post.keywords === "string") {
      return post.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);
    }
    return [];
  }, [post.keywords]);

  // Parse Tags
  const tagsList: string[] = useMemo(() => {
    if (!post.tags) return [];
    if (Array.isArray(post.tags)) {
      return post.tags.map((t) => String(t).trim()).filter(Boolean);
    }
    if (typeof post.tags === "string") {
      return (post.tags as string)
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }
    return [];
  }, [post.tags]);

  // Format Date nicely
  const displayDate = useMemo(() => {
    const rawDate = post.publishedAt || post.createdAt;
    if (!rawDate) return "Recently Published";
    try {
      const d = new Date(rawDate);
      if (isNaN(d.getTime())) return rawDate;
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return rawDate;
    }
  }, [post.publishedAt, post.createdAt]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="bg-white dark:bg-[#071426] min-h-screen pt-28 sm:pt-32 pb-24 text-[#0F172A] dark:text-white transition-colors duration-300 font-sans">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* ═══════════════════════════════════════════════════════════════════
            TOP SECTION:
            1. BREADCRUMBS
            2. BLOG TITLE FIRST (Compact, balanced font size)
            3. SHORT SUMMARY DIRECTLY BELOW TITLE (Symmetric blue borders)
            4. DATE • READ TIME
           ═══════════════════════════════════════════════════════════════════ */}
        <header className="space-y-4 text-left max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400"
          >
            <Link href="/" className="hover:text-[#305EFF] transition-colors">
              Home
            </Link>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <Link href="/blog" className="hover:text-[#305EFF] transition-colors">
              Blog
            </Link>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-[#305EFF] font-bold truncate max-w-[220px] sm:max-w-md">
              {post.title}
            </span>
          </nav>

          {/* 1. Blog Title */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black text-[#0F172A] dark:text-white leading-[1.2] tracking-tight">
            {post.title}
          </h1>

          {/* 2. Short Summary / Excerpt Directly Below Title */}
          {post.excerpt && (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border-x-4 border-[#305EFF] text-slate-700 dark:text-slate-300 text-base sm:text-[17px] leading-relaxed italic">
              {post.excerpt}
            </div>
          )}

          {/* 3. Date + Read Time Sub-bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex flex-wrap items-center gap-3">
              {post.category && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] border border-[#305EFF]/20 text-[11px] font-extrabold font-mono uppercase tracking-wider">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
              )}
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#305EFF]" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Date: {displayDate}
                </span>
              </div>
              {post.readTime && (
                <>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#305EFF]" />
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {post.readTime}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Quick Share Action */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-[#305EFF] text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#305EFF] transition-all cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Divider Line */}
        <hr className="border-slate-100 dark:border-white/10 my-4" />

        {/* ═══════════════════════════════════════════════════════════════════
            MAIN 3-COLUMN CONTENT SECTION:
            [ LEFT: TABLE OF CONTENT ] | [ CENTER: FEATURED IMAGE + ARTICLE ] | [ RIGHT: QUOTE FORM ]
           ═══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ─────────────────────────────────────────────────────────────
              COLUMN 1 (LEFT): TABLE OF CONTENT (Sticky Desktop, 220–250px)
             ───────────────────────────────────────────────────────────── */}
          <div className="hidden lg:block lg:col-span-3 sticky top-28 space-y-4">
            <BlogTableOfContents items={tocItems} />

            {/* Back to All Articles link */}
            <Link
              href="/blog"
              className="w-full py-2.5 px-4 rounded-2xl bg-white dark:bg-[#0B1A2E] border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#305EFF] hover:border-[#305EFF] transition-all flex items-center justify-between group"
            >
              <span className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 group-hover:text-[#305EFF] transition-transform" />
                <span>All Articles</span>
              </span>
              <span className="text-[10px] uppercase font-mono text-slate-400">Back</span>
            </Link>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              COLUMN 2 (CENTER): FEATURED IMAGE + FULL ARTICLE CONTENT (650–760px)
             ───────────────────────────────────────────────────────────── */}
          <main className="lg:col-span-6 w-full min-w-0 space-y-8 text-left">
            
            {/* Mobile / Tablet Accordion Table of Content */}
            {tocItems.length > 0 && (
              <div className="block lg:hidden bg-slate-50 dark:bg-[#0B1A2E] rounded-2xl border border-slate-200/80 dark:border-white/10 p-4">
                <button
                  type="button"
                  onClick={() => setIsMobileTocOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#0F172A] dark:text-white cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#305EFF]" />
                    <span>Table of Content ({tocItems.length} headings)</span>
                  </div>
                  {isMobileTocOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {isMobileTocOpen && (
                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/10">
                    <BlogTableOfContents
                      items={tocItems}
                      onItemClick={() => setIsMobileTocOpen(false)}
                      className="!border-0 !p-0 !shadow-none !rounded-none"
                    />
                  </div>
                )}
              </div>
            )}

            {/* 🌟 FEATURED IMAGE (Fixed 16:9 aspect ratio, object-cover, full width of center column) */}
            <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
              <Image
                src={resolvedFeaturedImage}
                alt={post.title}
                fill
                className="object-cover"
                unoptimized
                priority
                onError={() => setImageError(true)}
              />
            </div>

            {/* 🌟 FULL ARTICLE CONTENT & INLINE IMAGES */}
            <article className="space-y-6 text-slate-700 dark:text-slate-300 text-[17px] sm:text-[18px] leading-[1.75] font-sans">
              <div
                dangerouslySetInnerHTML={{ __html: processedContent }}
                className="flex flex-col gap-6
                  [&>h2]:font-display [&>h2]:text-[24px] [&>h2]:sm:text-[28px] [&>h2]:font-black [&>h2]:text-[#0F172A] [&>h2]:dark:text-white [&>h2]:mt-10 [&>h2]:mb-3 [&>h2]:border-l-4 [&>h2]:border-[#305EFF] [&>h2]:pl-4 [&>h2]:tracking-tight [&>h2]:scroll-mt-28
                  [&>h3]:font-display [&>h3]:text-[20px] [&>h3]:sm:text-[22px] [&>h3]:font-extrabold [&>h3]:text-[#0F172A] [&>h3]:dark:text-white [&>h3]:mt-8 [&>h3]:mb-2 [&>h3]:scroll-mt-28
                  [&>h4]:font-display [&>h4]:text-[17px] [&>h4]:font-bold [&>h4]:text-[#0F172A] [&>h4]:dark:text-white [&>h4]:mt-6 [&>h4]:mb-2 [&>h4]:scroll-mt-28
                  [&>h2:empty]:hidden [&>h3:empty]:hidden [&>h4:empty]:hidden [&>p:empty]:hidden
                  [&>p]:text-slate-700 [&>p]:dark:text-slate-300 [&>p]:text-[17px] [&>p]:sm:text-[18px] [&>p]:leading-[1.75] [&>p]:mb-3 [&>p]:font-normal
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:text-slate-700 [&>ul]:dark:text-slate-300 [&>ul]:text-[17px] [&>ul]:mb-4
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:text-slate-700 [&>ol]:dark:text-slate-300 [&>ol]:text-[17px] [&>ol]:mb-4
                  [&>li]:leading-[1.75]
                  [&>strong]:font-bold [&>strong]:text-[#0F172A] [&>strong]:dark:text-white
                  [&>b]:font-bold [&>b]:text-[#0F172A] [&>b]:dark:text-white
                  [&>em]:italic
                  [&>u]:underline
                  [&>a]:text-[#305EFF] [&>a]:font-semibold [&>a]:underline hover:[&>a]:text-[#2550E0]
                  [&>hr]:border-slate-200 dark:border-white/10 [&>hr]:my-8
                  [&>code]:bg-slate-100 [&>code]:dark:bg-white/10 [&>code]:border [&>code]:border-slate-200 [&>code]:dark:border-white/10 [&>code]:rounded-lg [&>code]:px-2 [&>code]:py-0.5 [&>code]:text-xs [&>code]:sm:text-sm [&>code]:font-mono [&>code]:text-[#305EFF] [&>code]:dark:text-[#60A5FA]
                  [&>blockquote]:border-l-4 [&>blockquote]:border-[#305EFF] [&>blockquote]:bg-slate-50 dark:bg-white/5 [&>blockquote]:p-5 [&>blockquote]:rounded-r-2xl [&>blockquote]:italic [&>blockquote]:text-slate-800 [&>blockquote]:dark:text-slate-200 [&>blockquote]:my-6
                  [&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-5 [&>pre]:rounded-2xl [&>pre]:overflow-x-auto [&>pre]:my-6 [&>pre]:font-mono [&>pre]:text-xs [&>pre]:sm:text-sm
                  [&_img]:w-full [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-2xl [&_img]:my-6 [&_img]:border [&_img]:border-slate-200/80 [&_img]:dark:border-white/10 [&_img]:mx-auto [&_img]:block [&_img]:object-contain
                  [&>table]:w-full [&>table]:border-collapse [&>table]:my-6 [&>table]:text-xs [&>table]:sm:text-sm
                  [&>table_th]:border [&>table_th]:border-slate-200 [&>table_th]:dark:border-white/10 [&>table_th]:bg-slate-100 [&>table_th]:dark:bg-white/5 [&>table_th]:p-3 [&>table_th]:font-bold [&>table_th]:text-left
                  [&>table_td]:border [&>table_td]:border-slate-200 [&>table_td]:dark:border-white/10 [&>table_td]:p-3"
              />
            </article>

            {/* 11. KEYWORDS SECTION (Separate from Tags) */}
            {keywordsList.length > 0 && (
              <div className="pt-6 border-t border-slate-100 dark:border-white/10 space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-[#305EFF]" />
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] dark:text-white font-mono">
                    Keywords
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {keywordsList.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:border-[#305EFF] transition-colors"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 12. TAGS SECTION */}
            {tagsList.length > 0 && (
              <div className="pt-4 space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-slate-400" />
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                    Tags
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tagsList.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 13. SEAMLESS INTEGRATED AUTHOR SECTION (No floating heavy shadow card) */}
            <div className="pt-8 mt-8 border-t border-slate-150 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#305EFF]/10 text-[#305EFF] border border-[#305EFF]/20 flex items-center justify-center font-display font-extrabold text-base shrink-0">
                  {authorInitials || "MT"}
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Author
                  </div>
                  <h4 className="font-display text-base font-extrabold text-[#0F172A] dark:text-white">
                    Written by {authorName}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed max-w-md">
                    Mitsafe Engineering Team — Architecting scalable cloud systems and AI automation workflows.
                  </p>
                </div>
              </div>

              <Link
                href="/blog"
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-[#305EFF] text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#305EFF] transition-all inline-flex items-center gap-1.5 shrink-0"
              >
                <Bookmark className="w-3.5 h-3.5 text-[#305EFF]" />
                <span>All Articles</span>
              </Link>
            </div>

            {/* 14. SEAMLESS BOTTOM NAVIGATION (Clean in-flow design) */}
            <div className="pt-6 mt-4 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-[#305EFF] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>← Back to All Articles</span>
              </Link>

              <Link
                href="/get-a-quote"
                className="px-6 py-2.5 rounded-full bg-[#305EFF] hover:bg-[#2550E0] text-white text-xs font-extrabold shadow-sm hover:scale-[1.01] transition-all inline-flex items-center gap-2"
              >
                <span>Get a Free Quote →</span>
              </Link>
            </div>

            {/* Mobile / Tablet: Render Quote Sidebar below article */}
            <div className="block lg:hidden pt-6">
              <BlogQuoteSidebar postTitle={post.title} />
            </div>
          </main>

          {/* ─────────────────────────────────────────────────────────────
              COLUMN 3 (RIGHT): QUOTE FORM STICKY SIDEBAR (280–320px)
             ───────────────────────────────────────────────────────────── */}
          <div className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
            <BlogQuoteSidebar postTitle={post.title} />
          </div>

        </div>

      </div>
    </div>
  );
}
