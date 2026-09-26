"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Loader2,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { getBlogs, getCategories, DEFAULT_BLOG_FALLBACK_IMAGE } from "@/services/blog.service";
import { BlogPost } from "@/types/adminBlog";

interface BlogListClientProps {
  initialPosts?: BlogPost[];
  initialCategories?: string[];
}

// Exactly 12 blogs per page as strictly required
const ITEMS_PER_PAGE = 12;

const INITIAL_TAGS_TO_SHOW = 10;

const FALLBACK_POPULAR_TAGS = [
  "Web Development",
  "SEO",
  "Mobile App",
  "E-commerce",
  "AI",
  "WordPress",
  "Business Growth",
  "FinTech",
  "Digital Marketing",
  "Technology",
];

export default function BlogListClient({
  initialPosts = [],
  initialCategories = ["All"],
}: BlogListClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"latest" | "oldest" | "title">("latest");
  const [showAllTags, setShowAllTags] = useState(false);

  const [categoriesList, setCategoriesList] = useState<string[]>(
    initialCategories.length > 0 ? initialCategories : ["All"]
  );
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [isLoading, setIsLoading] = useState(initialPosts.length === 0);

  // Fetch blogs dynamically on client if initial SSR posts were empty
  useEffect(() => {
    let isMounted = true;

    if (initialPosts.length === 0) {
      async function loadPublicBlogs(attempt = 1) {
        if (attempt === 1) setIsLoading(true);
        try {
          const [blogsRes, catRes] = await Promise.allSettled([
            getBlogs({ status: "published", limit: 100 }),
            getCategories(),
          ]);

          if (!isMounted) return;

          if (
            blogsRes.status === "fulfilled" &&
            blogsRes.value.success &&
            Array.isArray(blogsRes.value.data)
          ) {
            setPosts(blogsRes.value.data);
          } else if (attempt < 2) {
            setTimeout(() => {
              if (isMounted) loadPublicBlogs(attempt + 1);
            }, 1500);
            return;
          }

          if (
            catRes.status === "fulfilled" &&
            catRes.value.success &&
            Array.isArray(catRes.value.data) &&
            catRes.value.data.length > 0
          ) {
            const cleanCats = ["All", ...catRes.value.data.filter((c) => c !== "All")];
            setCategoriesList(Array.from(new Set(cleanCats)));
          }
        } catch (err) {
          console.error("Failed to load public blog directory:", err);
        } finally {
          if (isMounted) {
            setIsLoading(false);
          }
        }
      }

      loadPublicBlogs();
    }

    return () => {
      isMounted = false;
    };
  }, [initialPosts]);

  // Ensure we only consider published blogs for public counting & display
  const publishedPosts = useMemo(() => {
    return posts.filter((p) => p.status === "published" || !p.status);
  }, [posts]);

  // DYNAMIC CATEGORIES: Extract all unique categories automatically from published blogs & API
  const allCategories = useMemo(() => {
    const catsFromPosts = publishedPosts
      .map((p) => p.category?.trim())
      .filter((cat): cat is string => Boolean(cat && cat.length > 0));

    const fromApi = categoriesList
      .map((c) => c?.trim())
      .filter((cat): cat is string => Boolean(cat && cat.length > 0));

    const combined = ["All", ...fromApi.filter((c) => c !== "All"), ...catsFromPosts];
    return Array.from(new Set(combined));
  }, [categoriesList, publishedPosts]);

  // DYNAMIC CATEGORY COUNTS: Dynamically counted from actual published blogs
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: publishedPosts.length,
    };

    allCategories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = publishedPosts.filter(
          (p) => (p.category || "").trim().toLowerCase() === cat.toLowerCase()
        ).length;
      }
    });

    return counts;
  }, [allCategories, publishedPosts]);

  // DYNAMIC TAGS: Extracted automatically from published blogs, sorted by frequency
  const { popularTags, hasMoreTags } = useMemo(() => {
    const tagCounts: Record<string, number> = {};

    publishedPosts.forEach((p) => {
      const pTags = Array.isArray(p.tags)
        ? p.tags
        : typeof p.tags === "string"
        ? (p.tags as string).split(",")
        : [];

      pTags.forEach((t) => {
        const clean = t.trim();
        if (clean) {
          tagCounts[clean] = (tagCounts[clean] || 0) + 1;
        }
      });
    });

    const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);
    const finalTagsList = sortedTags.length > 0 ? sortedTags : FALLBACK_POPULAR_TAGS;

    return {
      popularTags: finalTagsList,
      hasMoreTags: finalTagsList.length > INITIAL_TAGS_TO_SHOW,
    };
  }, [publishedPosts]);

  // Tags currently visible based on "Show more" state
  const visibleTags = useMemo(() => {
    if (showAllTags) return popularTags;
    return popularTags.slice(0, INITIAL_TAGS_TO_SHOW);
  }, [popularTags, showAllTags]);

  // Sort and filter posts based on user search, category, and tag selections
  const filteredPosts = useMemo(() => {
    const effectiveSearch = activeSearchTerm.trim().toLowerCase();

    return publishedPosts
      .filter((post) => {
        // Category filter
        const matchesCategory =
          selectedCategory === "All" ||
          (post.category || "").trim().toLowerCase() === selectedCategory.toLowerCase();

        // Tag filter
        const matchesTag =
          !selectedTag ||
          (Array.isArray(post.tags) &&
            post.tags.some((t) => t.trim().toLowerCase() === selectedTag.toLowerCase()));

        // Search filter
        const matchesSearch =
          !effectiveSearch ||
          post.title.toLowerCase().includes(effectiveSearch) ||
          post.excerpt.toLowerCase().includes(effectiveSearch) ||
          (post.category && post.category.toLowerCase().includes(effectiveSearch)) ||
          (Array.isArray(post.tags) &&
            post.tags.some((t) => t.toLowerCase().includes(effectiveSearch))) ||
          (Array.isArray(post.keywords) &&
            post.keywords.some((k) => k.toLowerCase().includes(effectiveSearch)));

        return matchesCategory && matchesTag && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "latest") {
          const timeA = new Date(a.publishedAt || a.createdAt || 0).getTime();
          const timeB = new Date(b.publishedAt || b.createdAt || 0).getTime();
          return timeB - timeA;
        }
        if (sortBy === "oldest") {
          const timeA = new Date(a.publishedAt || a.createdAt || 0).getTime();
          const timeB = new Date(b.publishedAt || b.createdAt || 0).getTime();
          return timeA - timeB;
        }
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [publishedPosts, selectedCategory, selectedTag, activeSearchTerm, sortBy]);

  // Total pages based on strictly 12 items per page
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  // Read page from URL query params (defaults to 1)
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const currentPage =
    isNaN(pageParam) || pageParam < 1
      ? 1
      : totalPages > 0
      ? Math.min(pageParam, totalPages)
      : 1;

  // Paginated subset of posts
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Helper to update URL page parameter
  const updateUrlPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newPage <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(newPage));
    }
    const queryStr = params.toString();
    const targetUrl = queryStr ? `${pathname}?${queryStr}` : pathname;
    router.push(targetUrl, { scroll: false });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    updateUrlPage(newPage);

    // Scroll to the top of the blog articles container
    const mainSection = document.getElementById("blog-listing-content");
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setActiveSearchTerm(searchQuery);
    updateUrlPage(1);
  };

  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
    if (!value.trim()) {
      setActiveSearchTerm("");
      updateUrlPage(1);
    }
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedTag(null);
    updateUrlPage(1);
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
    updateUrlPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveSearchTerm("");
    setSelectedCategory("All");
    setSelectedTag(null);
    setSortBy("latest");
    updateUrlPage(1);
  };

  // Format date nicely (e.g. "Sep 25, 2026")
  const formatDisplayDate = (rawDate?: string) => {
    if (!rawDate) return "";
    try {
      const date = new Date(rawDate);
      if (isNaN(date.getTime())) return rawDate;
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return rawDate;
    }
  };

  // Generate pagination page numbers
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [];
    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#071426] text-slate-900 dark:text-white transition-colors duration-300">
      {/* ========================================================================= */}
      {/* 1. FULL-WIDTH VIBRANT HERO BANNER (300-340px desktop, 240-280px mobile)    */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden flex items-center min-h-[250px] sm:min-h-[280px] md:min-h-[310px] lg:min-h-[330px] pt-28 pb-10 sm:pt-32 sm:pb-12 border-b border-slate-200/80 dark:border-white/10">
        {/* Full-width Cover Background Image - Crisp & Vibrant */}
        <Image
          src="/blog_hero.jpg"
          alt="Mitsafe Engineering Blog Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />

        {/* Minimal, Subtle Gradient Overlay for Text Readability without Dullness */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/45 to-transparent dark:from-[#071426]/85 dark:via-[#071426]/50 dark:to-transparent" />

        {/* Hero Content directly over the vibrant background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3 text-left">
            {/* Breadcrumb: Home > Blog */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 drop-shadow-xs">
              <Link
                href="/"
                className="hover:text-[#305EFF] dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <span className="text-slate-400 dark:text-slate-500">&gt;</span>
              <span className="text-[#305EFF] dark:text-blue-400 font-bold">
                Blog
              </span>
            </nav>

            {/* Main Heading: Our Blog */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight drop-shadow-xs">
              Our <span className="text-[#305EFF]">Blog</span>
            </h1>

            {/* Compact Subheading (1-2 lines on desktop) */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 max-w-xl leading-relaxed font-medium drop-shadow-xs">
              Explore expert insights, technology trends, and practical guides to grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN BLOG CONTENT AREA (TWO-COLUMN LAYOUT)                            */}
      {/* ========================================================================= */}
      <div
        id="blog-listing-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 scroll-mt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* --------------------------------------------------------------------- */}
          {/* LEFT SIDEBAR (Dynamic Categories & Dynamic Popular Tags)              */}
          {/* --------------------------------------------------------------------- */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-8">
            {/* Dynamic Categories Card */}
            <div className="bg-white dark:bg-[#0B1A2E] rounded-2xl border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-4 flex items-center justify-between">
                <span>Categories</span>
              </h2>

              <div className="space-y-1">
                {/* All Articles */}
                <button
                  type="button"
                  onClick={() => handleCategoryChange("All")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all text-left cursor-pointer ${
                    selectedCategory === "All"
                      ? "bg-[#EFF6FF] dark:bg-[#305EFF]/20 text-[#305EFF] dark:text-blue-400 font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#305EFF]"
                  }`}
                >
                  <span>All Articles</span>
                  <span
                    className={`text-xs font-mono ml-2 shrink-0 ${
                      selectedCategory === "All"
                        ? "text-[#305EFF] dark:text-blue-400 font-bold"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    {categoryCounts["All"] || 0}
                  </span>
                </button>

                {/* Dynamically Populated Category List */}
                {allCategories
                  .filter((cat) => cat !== "All")
                  .map((cat) => {
                    const isSelected =
                      selectedCategory.toLowerCase() === cat.toLowerCase();
                    const count = categoryCounts[cat] ?? 0;

                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleCategoryChange(cat)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all text-left cursor-pointer ${
                          isSelected
                            ? "bg-[#EFF6FF] dark:bg-[#305EFF]/20 text-[#305EFF] dark:text-blue-400 font-bold"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#305EFF]"
                        }`}
                      >
                        <span className="truncate">{cat}</span>
                        <span
                          className={`text-xs font-mono ml-2 shrink-0 ${
                            isSelected
                              ? "text-[#305EFF] dark:text-blue-400 font-bold"
                              : "text-slate-400 dark:text-slate-500"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Dynamic Popular Tags Card */}
            <div className="bg-white dark:bg-[#0B1A2E] rounded-2xl border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-3.5">
                Popular Tags
              </h2>

              <div className="flex flex-wrap gap-2">
                {visibleTags.map((tag) => {
                  const isSelected = selectedTag === tag;
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagClick(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#305EFF] text-white shadow-sm font-semibold scale-105"
                          : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-350 hover:bg-[#305EFF] hover:text-white border border-transparent"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>

              {/* Show More / Show Less for Tags */}
              {hasMoreTags && (
                <button
                  type="button"
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="mt-3.5 text-xs font-bold text-[#305EFF] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{showAllTags ? "Show Less" : `Show More (${popularTags.length - INITIAL_TAGS_TO_SHOW} more)`}</span>
                  {showAllTags ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              )}
            </div>
          </aside>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT MAIN CONTENT AREA                                               */}
          {/* --------------------------------------------------------------------- */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-6">
            {/* Top Search & Filter Bar */}
            <div className="bg-white dark:bg-[#0B1A2E] rounded-2xl border border-slate-200/80 dark:border-white/10 p-3 sm:p-4 shadow-xs">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
                {/* Search Form with Search Input and dedicated Search Button */}
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex-1 flex items-center gap-2"
                >
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearchInputChange(e.target.value)}
                      placeholder="Search articles, topics or keywords..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#305EFF] focus:bg-white dark:focus:bg-[#071426] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#305EFF] hover:bg-[#254bdb] text-white text-sm font-bold rounded-xl shadow-sm transition-all cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    Search
                  </button>
                </form>

                {/* Sort Dropdown & Dynamic Article Count */}
                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-white/5">
                  {/* Sort Dropdown */}
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="sort-select"
                      className="text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap"
                    >
                      Sort by:
                    </label>
                    <div className="relative">
                      <select
                        id="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="appearance-none bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-3 pr-8 py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#305EFF] cursor-pointer"
                      >
                        <option value="latest">Latest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="title">Title (A-Z)</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Total Count */}
                  <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                    {filteredPosts.length.toLocaleString()} Articles
                  </div>
                </div>
              </div>

              {/* Active Filter Badges */}
              {(activeSearchTerm || selectedCategory !== "All" || selectedTag) && (
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-white/5 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span>Active Filters:</span>
                    {selectedCategory !== "All" && (
                      <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-[#305EFF] font-semibold">
                        Category: {selectedCategory}
                      </span>
                    )}
                    {selectedTag && (
                      <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-[#305EFF] font-semibold">
                        Tag: {selectedTag}
                      </span>
                    )}
                    {activeSearchTerm && (
                      <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-[#305EFF] font-semibold">
                        &quot;{activeSearchTerm}&quot;
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="text-[#305EFF] hover:underline font-bold ml-auto cursor-pointer"
                  >
                    Reset all
                  </button>
                </div>
              )}
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* HORIZONTAL BLOG ARTICLE LIST                                      */}
            {/* ----------------------------------------------------------------- */}
            <div className="space-y-4 sm:space-y-5">
              {isLoading ? (
                <div className="py-24 bg-white dark:bg-[#0B1A2E] rounded-2xl border border-slate-200/80 dark:border-white/10 flex flex-col items-center justify-center gap-3 text-slate-400">
                  <Loader2 className="w-8 h-8 animate-spin text-[#305EFF]" />
                  <span className="text-sm font-medium">Loading published articles...</span>
                </div>
              ) : paginatedPosts.length > 0 ? (
                paginatedPosts.map((post) => {
                  const displayImage = post.featuredImage || DEFAULT_BLOG_FALLBACK_IMAGE;
                  const formattedDate = formatDisplayDate(post.publishedAt || post.createdAt);

                  return (
                    <article
                      key={post.id || post.slug}
                      className="bg-white dark:bg-[#0B1A2E] border border-slate-200/80 dark:border-white/10 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 group"
                    >
                      {/* Left: Thumbnail Image */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="relative w-full sm:w-56 md:w-64 h-48 sm:h-auto shrink-0 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 block"
                      >
                        <Image
                          src={displayImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 256px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>

                      {/* Middle & Right Content Details */}
                      <div className="flex-1 flex flex-col justify-between py-1 min-w-0">
                        <div>
                          {/* Category Tag */}
                          <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#305EFF] dark:text-blue-400 font-mono mb-1.5">
                            {post.category}
                          </div>

                          {/* Blog Title */}
                          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-[#305EFF] transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h2>

                          {/* Short Description / Excerpt */}
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 line-clamp-2 mt-2 leading-relaxed font-normal">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Bottom Meta & Read More */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                          {/* Date and Read Time */}
                          <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 font-medium">
                            {formattedDate && (
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                <span>{formattedDate}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{post.readTime || "5 min read"}</span>
                            </div>
                          </div>

                          {/* Read More Link */}
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#305EFF] dark:text-blue-400 hover:text-[#254bdb] dark:hover:text-blue-300 transition-colors group/link ml-auto"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="text-center py-20 bg-white dark:bg-[#0B1A2E] rounded-2xl border border-slate-200/80 dark:border-white/10 text-slate-500 dark:text-slate-400 text-sm">
                  <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    No articles found
                  </p>
                  <p className="text-xs mt-1 text-slate-400">
                    Try selecting another category or clear search filters.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="mt-4 px-4 py-2 bg-[#305EFF] text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* PAGINATION CONTROLS (EXACTLY 12 BLOGS PER PAGE)                  */}
            {/* ----------------------------------------------------------------- */}
            {!isLoading && totalPages > 1 && (
              <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Pagination Number Buttons */}
                <nav
                  aria-label="Blog pagination"
                  className="flex items-center gap-1.5 flex-wrap justify-center"
                >
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    aria-label="Go to previous page"
                    className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-bold transition-all ${
                      currentPage <= 1
                        ? "opacity-35 cursor-not-allowed bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-600 border border-slate-200/60 dark:border-white/5"
                        : "cursor-pointer bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-[#305EFF] hover:text-[#305EFF] hover:bg-[#305EFF]/5 active:scale-95 shadow-2xs"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Page Numbers */}
                  {getPageNumbers().map((p, idx) => {
                    if (p === "...") {
                      return (
                        <span
                          key={`ellipsis-${idx}`}
                          className="w-8 h-8 flex items-center justify-center text-xs text-slate-400 font-bold"
                        >
                          &hellip;
                        </span>
                      );
                    }

                    const pageNum = Number(p);
                    const isActive = pageNum === currentPage;

                    return (
                      <button
                        key={`page-${pageNum}`}
                        type="button"
                        onClick={() => handlePageChange(pageNum)}
                        aria-current={isActive ? "page" : undefined}
                        aria-label={`Page ${pageNum}`}
                        className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#305EFF] text-white shadow-md shadow-[#305EFF]/30 scale-105"
                            : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-[#305EFF] hover:text-[#305EFF] hover:bg-[#305EFF]/5"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    aria-label="Go to next page"
                    className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-bold transition-all ${
                      currentPage >= totalPages
                        ? "opacity-35 cursor-not-allowed bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-600 border border-slate-200/60 dark:border-white/5"
                        : "cursor-pointer bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-[#305EFF] hover:text-[#305EFF] hover:bg-[#305EFF]/5 active:scale-95 shadow-2xs"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </nav>

                {/* Pagination Article Range Count */}
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 order-2 sm:order-1 text-center sm:text-left">
                  Showing{" "}
                  <span className="text-slate-900 dark:text-white font-bold">
                    {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredPosts.length)}
                  </span>{" "}
                  of{" "}
                  <span className="text-slate-900 dark:text-white font-bold">
                    {filteredPosts.length}
                  </span>{" "}
                  articles
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
