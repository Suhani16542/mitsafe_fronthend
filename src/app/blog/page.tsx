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
    <div className="bg-white min-h-screen pt-32 pb-20 cyber-grid relative">
      <div className="absolute inset-0 bg-white/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badge="Technical Blog"
          title="Engineering Insights"
          subtitle="Explore architectural analyses, performance strategies, and scaling guides written by our engineers."
          align="left"
        />

        {/* Search / Filters */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-[#E5E2F0] pb-8">
          
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-display font-medium text-xs md:text-sm border transition-all duration-300 cursor-pointer select-none ${
                  selectedCategory === cat
                    ? "bg-[#7C3AED]/5 border-[#A78BFA] text-[#7C3AED]"
                    : "bg-[#F3F0FA]/40 border-[#E5E2F0] text-slate-600 hover:text-white"
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
              className="w-full bg-[#F3F0FA]/60 text-sm text-white pl-9 pr-4 py-2.5 rounded-full border border-[#E5E2F0] focus:border-[#A78BFA] outline-none transition-colors"
            />
          </div>

        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <GlowCard key={post.slug} className="flex flex-col h-full justify-between gap-6 bg-[#F3F0FA]/60 group border-[#7C3AED]/20">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-[#7C3AED] font-semibold">
                    <span className="bg-[#7C3AED]/5 border border-[#7C3AED]/20 rounded px-2.5 py-1 uppercase tracking-wider font-display">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors duration-250 mt-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-4 border-t border-[#E5E2F0] mt-auto">
                  <div className="flex items-center gap-4 text-[10px] md:text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#7C3AED]" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#7C3AED]" />
                      {post.date}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#7C3AED] hover:text-white transition-colors duration-200 group/link cursor-pointer w-fit"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlowCard>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-slate-600 text-sm">
              No technical articles found matching the filters.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
