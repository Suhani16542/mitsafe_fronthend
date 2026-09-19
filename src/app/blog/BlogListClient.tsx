"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, Calendar, User, Clock, ArrowRight, Loader2, BookOpen, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { getBlogs, getCategories, DEFAULT_BLOG_FALLBACK_IMAGE } from "@/services/blog.service";
import { BlogPost } from "@/types/adminBlog";

interface BlogListClientProps {
  initialPosts?: BlogPost[];
  initialCategories?: string[];
}

const ITEMS_PER_PAGE = 6;

export default function BlogListClient({ initialPosts = [], initialCategories = ["All"] }: BlogListClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [categoriesList, setCategoriesList] = useState<string[]>(initialCategories.length > 0 ? initialCategories : ["All"]);
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [isLoading, setIsLoading] = useState(initialPosts.length === 0);

  useEffect(() => {
    let isMounted = true;

    // Only query on client if initialPosts was empty
    if (initialPosts.length === 0) {
      async function loadPublicBlogs(attempt = 1) {
        if (attempt === 1) setIsLoading(true);
        try {
          const [blogsRes, catRes] = await Promise.allSettled([
            getBlogs({ status: "published", limit: 100 }),
            getCategories(),
          ]);

          if (!isMounted) return;

          if (blogsRes.status === "fulfilled" && blogsRes.value.success && Array.isArray(blogsRes.value.data)) {
            setPosts(blogsRes.value.data);
          } else if (attempt < 2) {
            // If first attempt failed due to sleeping backend, retry once after short pause
            setTimeout(() => {
              if (isMounted) loadPublicBlogs(attempt + 1);
            }, 1500);
            return;
          }

          if (catRes.status === "fulfilled" && catRes.value.success && Array.isArray(catRes.value.data)) {
            setCategoriesList(["All", ...catRes.value.data]);
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

  // Ensure posts are sorted newest published/created first
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const timeA = new Date(a.publishedAt || a.createdAt || 0).getTime();
      const timeB = new Date(b.publishedAt || b.createdAt || 0).getTime();
      return timeB - timeA;
    });
  }, [posts]);

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [sortedPosts, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  // Read page from URL query params (defaults to 1)
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : totalPages > 0 ? Math.min(pageParam, totalPages) : 1;

  // Paginated subset of posts
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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

    // Smooth scroll to top of articles section
    const articlesSection = document.getElementById("articles-container");
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (searchParams.has("page")) {
      updateUrlPage(1);
    }
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (searchParams.has("page")) {
      updateUrlPage(1);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    if (searchParams.has("page")) {
      updateUrlPage(1);
    }
  };

  // Generate page numbers for pagination controls
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
    <div className="min-h-screen bg-[#FAFBFF] dark:bg-[#071426] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Hero Header Section */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-slate-200/80 dark:border-white/10 bg-gradient-to-b from-white via-white to-slate-50/50 dark:from-[#0B1A2E] dark:via-[#071426] dark:to-[#071426]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          
          <SectionHeader
            badge="Engineering Journal"
            title="Technical Insights, Scalability Architecture & Engineering Case Studies"
            subtitle="Explore deep-dive technical breakdowns on AI models, Next.js architecture, cloud infrastructure, and enterprise software engineering written by the Mitsafe engineering team."
            align="center"
          />

          {/* Search & Category Filter Bar */}
          <div className="mt-10 max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 items-center">
            
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search articles by title, topic, or keyword..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#305EFF] focus:border-transparent shadow-sm"
              />
            </div>

          </div>

          {/* Category Chips */}
          {categoriesList.length > 1 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#305EFF] text-white shadow-md shadow-[#305EFF]/25 scale-105"
                      : "bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-350 hover:border-[#305EFF] hover:text-[#305EFF]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Main Articles Listing */}
      <div id="articles-container" className="max-w-7xl mx-auto px-6 lg:px-8 py-16 scroll-mt-28">
        
        {/* Results stats */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-white/10 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-[#305EFF]" />
            <span>
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            </span>
          </div>

          {(searchQuery || selectedCategory !== "All") && (
            <button
              onClick={handleResetFilters}
              className="text-[#305EFF] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-full py-24 flex flex-col items-center justify-center gap-3 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin text-[#305EFF]" />
              <span className="text-sm font-medium">Loading published articles...</span>
            </div>
          ) : paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => {
              const authorName =
                typeof post.author === "string"
                  ? post.author
                  : post.author?.name || "Mitsafe Team";

              const displayImage = post.featuredImage || DEFAULT_BLOG_FALLBACK_IMAGE;
              const displayDate = post.publishedAt || post.createdAt || "";

              return (
                <div
                  key={post.id || post.slug}
                  className="bg-white dark:bg-[#0B1A2E] rounded-3xl border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Thumbnail Image */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block relative w-full h-52 overflow-hidden bg-slate-100 dark:bg-slate-800"
                    >
                      <Image
                        src={displayImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-[#071426]/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-[#305EFF] font-mono shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    {/* Content Section */}
                    <div className="px-6 space-y-2">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#305EFF]" />
                        <span>{post.readTime || "5 Min Read"}</span>
                      </div>

                      <h2 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover:text-[#305EFF] transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 space-y-4">
                    {displayDate && (
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-[#305EFF]" />
                        <span>{displayDate}</span>
                      </div>
                    )}
                    
                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed line-clamp-3 font-normal">
                      {post.excerpt}
                    </p>

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        <User className="w-3.5 h-3.5 text-[#305EFF]" />
                        <span className="truncate max-w-[110px]">{authorName}</span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#305EFF] hover:text-[#305EFF]/80 transition-colors group/link"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-20 bg-white dark:bg-[#0B1A2E] rounded-3xl border border-slate-200/80 dark:border-white/10 text-slate-500 dark:text-slate-400 text-sm">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="font-semibold text-slate-700 dark:text-slate-200">No articles found</p>
              <p className="text-xs mt-1 text-slate-400">Try selecting another category or clear search filters.</p>
            </div>
          )}
        </div>

        {/* Pagination Controls - Rendered only when total filtered articles > 6 */}
        {!isLoading && totalPages > 1 && (
          <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Range / Summary Counter */}
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 order-2 sm:order-1 text-center sm:text-left">
              Showing <span className="text-slate-900 dark:text-white font-bold">{startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredPosts.length)}</span> of{" "}
              <span className="text-slate-900 dark:text-white font-bold">{filteredPosts.length}</span> articles &bull; Page{" "}
              <span className="text-[#305EFF] font-bold">{currentPage}</span> of{" "}
              <span className="text-slate-900 dark:text-white font-bold">{totalPages}</span>
            </div>

            {/* Navigation Buttons */}
            <nav
              aria-label="Blog pagination"
              className="flex items-center gap-1.5 order-1 sm:order-2 flex-wrap justify-center"
            >
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                aria-label="Go to previous page"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  currentPage <= 1
                    ? "opacity-35 cursor-not-allowed bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-600 border border-slate-200/60 dark:border-white/5"
                    : "cursor-pointer bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-[#305EFF] hover:text-[#305EFF] hover:bg-[#305EFF]/5 active:scale-95 shadow-2xs"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center gap-1">
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
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                aria-label="Go to next page"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  currentPage >= totalPages
                    ? "opacity-35 cursor-not-allowed bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-600 border border-slate-200/60 dark:border-white/5"
                    : "cursor-pointer bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-[#305EFF] hover:text-[#305EFF] hover:bg-[#305EFF]/5 active:scale-95 shadow-2xs"
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}

      </div>
    </div>
  );
}
