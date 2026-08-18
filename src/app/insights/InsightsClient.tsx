"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Mail, 
  BookOpen,
  Loader2 
} from "lucide-react";
import Button from "@/components/Button";
import LottieAnimation from "@/components/LottieAnimation";
import { getBlogs, getCategories } from "@/services/blog.service";
import { BlogPost } from "@/types/adminBlog";

const defaultCategories = [
  "All",
  "AI & Automation",
  "Software Engineering",
  "Cloud & Security",
  "Technology"
];

const trendingTopics = [
  { title: "React 19 Server Actions in production setups", reads: "1.2k reads" },
  { title: "Securing vector embedding storage schemas", reads: "940 reads" },
  { title: "Minimizing cold-boot times on AWS Lambda deployments", reads: "810 reads" }
];

export default function InsightsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(defaultCategories);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const [blogsRes, catRes] = await Promise.allSettled([
          getBlogs({ status: "published", limit: 100 }),
          getCategories(),
        ]);

        if (blogsRes.status === "fulfilled" && blogsRes.value.success) {
          setPosts(blogsRes.value.data);
        }

        if (catRes.status === "fulfilled" && catRes.value.success && catRes.value.data.length > 0) {
          setCategories(["All", ...catRes.value.data]);
        }
      } catch (err) {
        console.error("Failed to load insights:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "All" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find((post) => post.isFeatured) || posts[0];

  return (
    <div className="cosmic-insights-wrapper min-h-screen relative overflow-hidden bg-[#FAFBFF] dark:bg-[#071426] transition-colors duration-300">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#008FED/5_1px,transparent_1px),linear-gradient(to_bottom,#008FED/5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008FED]/5 dark:bg-[#00D4FF]/10 border border-[#008FED]/15 dark:border-[#00D4FF]/25 text-[10px] font-bold text-[#008FED] dark:text-[#00D4FF] uppercase tracking-widest font-mono w-fit">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Knowledge & Insights</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1E1A39] dark:text-white tracking-tight leading-tight">
              Engineering <br />
              <span className="bg-gradient-to-r from-[#008FED] to-[#00D4FF] bg-clip-text text-transparent">
                Insights & Guides
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-normal max-w-xl">
              Explore deep dives on API security, cloud scalability, UI/UX prototyping, clean architecture guidelines, and vector AI search workflows.
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-center items-center h-[280px] sm:h-[320px] lg:h-[400px]">
            <div className="w-full h-full max-w-[530px] bg-white/40 dark:bg-white/5 rounded-3xl border border-[#008FED]/10 dark:border-white/10 p-4 shadow-lg backdrop-blur-sm relative overflow-hidden">
              <LottieAnimation 
                src="/animations/lf20.json" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Featured Spotlight Block */}
      {featuredPost && (
        <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-white/70 dark:bg-[#0B1A2E]/70 border border-[#008FED]/15 dark:border-white/10 rounded-[32px] p-6 sm:p-10 shadow-md backdrop-blur-md">
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#008FED] dark:text-[#00D4FF] bg-[#008FED]/10 dark:bg-[#00D4FF]/20 px-3 py-1 rounded-full uppercase">
              Featured Insight
            </span>
            
            <div className="mt-6 flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="space-y-4 max-w-2xl text-left">
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1E1A39] dark:text-white leading-snug">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
                  <span>{featuredPost.readTime || "5 Min Read"}</span>
                  <span>•</span>
                  <span>{featuredPost.publishedAt || "Recently Published"}</span>
                </div>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="px-6 py-3 rounded-full bg-[#305EFF] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#2550E0] transition-colors shrink-0 shadow-md"
              >
                Read Article
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search */}
      <section className="py-8 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#305EFF] text-white shadow-sm"
                    : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-[#305EFF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full pl-9 pr-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#305EFF]"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 pb-24 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center gap-3 text-slate-400 text-xs">
            <Loader2 className="w-8 h-8 animate-spin text-[#305EFF]" />
            <span>Loading engineering insights...</span>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.slug || post.id}
                className="bg-white dark:bg-[#0B1A2E] rounded-3xl border border-slate-200/90 dark:border-white/10 p-6 flex flex-col justify-between hover:shadow-lg transition-all text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#305EFF]/10 text-[#305EFF] font-bold text-[10px] font-mono uppercase">
                      {post.category}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {post.readTime || "5 Min Read"}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#305EFF] transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    {post.publishedAt || "Recently Published"}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#305EFF] font-bold inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-slate-400 text-sm">
            No published insights found matching your query.
          </div>
        )}
      </section>

    </div>
  );
}
