"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import GlowCard from "@/components/GlowCard";
import Button from "@/components/Button";
import { blogData } from "@/data/blog";

const categories = ["All", "Technology", "AI & Automation", "Cloud Solutions"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "All" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#FAFBFF] dark:bg-[#071426] min-h-screen pt-32 pb-20 cyber-grid relative text-[#0F172A] dark:text-white transition-colors duration-300">
      <div className="absolute inset-0 bg-[#FAFBFF]/90 dark:bg-[#071426]/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badge="Technical Blog"
          title="Engineering Insights"
          subtitle="Explore architectural analyses, performance strategies, and scaling guides written by our engineers."
          align="left"
        />

        {/* Search / Filters */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-slate-200 dark:border-white/5 pb-8">
          
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-display font-medium text-xs md:text-sm border transition-all duration-300 cursor-pointer select-none ${
                  selectedCategory === cat
                    ? "bg-[#305EFF]/5 dark:bg-[#00D4FF]/10 border-[#305EFF] dark:border-[#00D4FF] text-[#305EFF] dark:text-[#00D4FF]"
                    : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-[#305EFF] dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-slate-50 dark:bg-white/5 text-[#0F172A] dark:text-white pl-9 pr-4 py-2.5 rounded-full border border-slate-200 dark:border-white/5 focus:border-[#305EFF] dark:focus:border-[#00D4FF] outline-none transition-colors placeholder-slate-450"
            />
          </div>

        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <GlowCard key={post.slug} className="flex flex-col h-full justify-between gap-6 bg-white/70 dark:bg-[#0B1A2E]/70 border-slate-200 dark:border-white/10 group">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-[#305EFF] dark:text-[#00D4FF] font-semibold font-mono">
                    <span className="bg-[#305EFF]/5 dark:bg-[#00D4FF]/10 border border-[#305EFF]/15 dark:border-[#00D4FF]/25 rounded px-2.5 py-1 uppercase tracking-wider font-display">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display text-lg md:text-xl font-bold text-[#0F172A] dark:text-white group-hover:text-[#305EFF] dark:group-hover:text-[#00D4FF] transition-colors duration-250 mt-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-4 border-t border-slate-100 dark:border-white/5 mt-auto">
                  <div className="flex items-center gap-4 text-[10px] md:text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#305EFF] dark:text-[#00D4FF]" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#305EFF] dark:text-[#00D4FF]" />
                      {post.date}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#305EFF] dark:text-[#00D4FF] hover:text-[#305EFF]/80 dark:hover:text-white transition-colors duration-200 group/link cursor-pointer w-fit"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlowCard>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-slate-500 dark:text-slate-400 text-sm">
              No technical articles found matching the filters.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
