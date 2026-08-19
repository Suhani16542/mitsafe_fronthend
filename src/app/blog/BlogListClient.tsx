"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, User, Clock, ArrowRight, Loader2, BookOpen, Sparkles, Tag } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { getBlogs, getCategories, DEFAULT_BLOG_FALLBACK_IMAGE } from "@/services/blog.service";
import { BlogPost } from "@/types/adminBlog";

export default function BlogListClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [categoriesList, setCategoriesList] = useState<string[]>(["All"]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPublicBlogs() {
      setIsLoading(true);
      try {
        const [blogsRes, catRes] = await Promise.allSettled([
          getBlogs({ status: "published", limit: 100 }),
          getCategories(),
        ]);

        if (blogsRes.status === "fulfilled" && blogsRes.value.success) {
          setPosts(blogsRes.value.data);
        }

        if (catRes.status === "fulfilled" && catRes.value.success) {
          setCategoriesList(["All", ...catRes.value.data]);
        }
      } catch (err) {
        console.error("Failed to load public blog directory:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadPublicBlogs();
  }, []);

  const filteredPosts = posts.filter((post) => {
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

  return (
    <div className="bg-[#FAFBFF] dark:bg-[#071426] min-h-screen pt-32 pb-24 relative text-[#0F172A] dark:text-white transition-colors duration-300 font-sans">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#FAFBFF]/90 dark:bg-[#071426]/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <SectionHeader
          as="h1"
          badge="ARTICLE JOURNAL"
          title="Explore Technical Articles"
          subtitle="Explore architectural analyses, performance strategies, and engineering insights written by the Mitsafe team."
          align="center"
          highlightLastWord={false}
          className="force-solid-black-title"
        />

        {/* Search & Category Filter Controls */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-[#0B1A2E] p-4 sm:p-5 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto hide-scrollbar pb-1 md:pb-0">
            {categoriesList.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-sans text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 select-none ${
                    isActive
                      ? "bg-[#305EFF] text-white shadow-md shadow-[#305EFF]/20 border border-[#305EFF]"
                      : "bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-[#305EFF]/50 hover:text-[#305EFF]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by topic..."
              className="w-full bg-slate-50 dark:bg-white/5 text-[#0F172A] dark:text-white pl-10 pr-4 py-2.5 rounded-full border border-slate-200/80 dark:border-white/10 focus:border-[#305EFF] dark:focus:border-[#305EFF] focus:bg-white focus:outline-none transition-all placeholder-slate-400 text-xs md:text-sm font-medium"
            />
          </div>

        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {isLoading ? (
            <div className="col-span-full py-24 text-center text-slate-500 dark:text-slate-400 text-sm flex flex-col items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 text-[#305EFF] animate-spin" />
              <span className="font-semibold text-slate-600 dark:text-slate-300">Loading articles from server...</span>
            </div>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              const authorName =
                typeof post.author === "string"
                  ? post.author
                  : post.author?.name || "Mitsafe Team";

              return (
                <div
                  key={post.slug || post.id}
                  className="bg-white dark:bg-[#0B1A2E] rounded-3xl border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="flex flex-col gap-4">
                    {/* Featured Image */}
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-white/5">
                      <Image
                        src={post.featuredImage || DEFAULT_BLOG_FALLBACK_IMAGE}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          if (target && target.src !== DEFAULT_BLOG_FALLBACK_IMAGE) {
                            target.src = DEFAULT_BLOG_FALLBACK_IMAGE;
                          }
                        }}
                      />
                    </div>

                    {/* Category & Read Time Badges */}
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="bg-[#305EFF]/10 border border-[#305EFF]/20 text-[#305EFF] px-3 py-1 rounded-full text-[11px] font-extrabold uppercase font-mono tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#305EFF]" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#0F172A] dark:text-white group-hover:text-[#305EFF] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed line-clamp-3 font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-6 flex items-center justify-between">
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

      </div>
    </div>
  );
}
