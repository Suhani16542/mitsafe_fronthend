"use client";

import React, { useState } from "react";
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
  BookOpen 
} from "lucide-react";
import Button from "@/components/Button";
import LottieAnimation from "@/components/LottieAnimation";
import { blogData, BlogPost } from "@/data/blog";

const categories = [
  "All",
  "AI & Technology",
  "Software Engineering",
  "Cloud",
  "Cybersecurity",
  "Web Development"
];

const trendingTopics = [
  { title: "React 19 Server Actions in production setups", reads: "1.2k reads" },
  { title: "Securing vector embedding storage schemas", reads: "940 reads" },
  { title: "Minimizing cold-boot times on AWS Lambda deployments", reads: "810 reads" }
];

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogData.find((post) => post.featured) || blogData[0];

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
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6 text-left">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">{featuredPost.date} &bull; {featuredPost.readTime}</span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E1A39] dark:text-white leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  {featuredPost.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {featuredPost.tags?.map((t) => (
                    <span key={t} className="text-[9px] font-mono font-bold bg-[#008FED]/5 dark:bg-white/5 border border-[#008FED]/10 dark:border-white/10 text-slate-600 dark:text-slate-350 px-2.5 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-5 flex flex-col gap-6 justify-between border-l border-slate-100 dark:border-white/5 lg:pl-10 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#008FED]/10 dark:bg-[#00D4FF]/20 flex items-center justify-center font-bold text-[#008FED] dark:text-[#00D4FF]">
                    {featuredPost.author[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E1A39] dark:text-white">Written by {featuredPost.author}</h4>
                    <span className="text-[10px] text-slate-450 dark:text-slate-450 font-medium">Core Platform Architect</span>
                  </div>
                </div>

                <Button href={`/blog/${featuredPost.slug}`} variant="primary" className="w-fit">
                  Read Full Analysis
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Grid, Filters & Sidebar */}
      <section className="py-16 bg-slate-50/50 dark:bg-[#0B1A2E]/25 border-y border-[#008FED]/10 dark:border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side: Articles */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Categories & Search */}
              <div className="flex flex-col sm:flex-row gap-6 justify-between items-center border-b border-slate-100 dark:border-white/5 pb-8">
                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                  {categories.slice(0, 4).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full font-display font-semibold text-xs md:text-sm border transition-all duration-300 cursor-pointer select-none ${
                        selectedCategory === cat
                          ? "bg-[#008FED] text-white border-transparent shadow-md"
                          : "bg-white dark:bg-[#0B1A2E]/60 border-slate-200/80 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-[#008FED] dark:hover:text-[#00D4FF]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                
                <div className="relative w-full sm:w-72">
                  <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full bg-white dark:bg-[#071426]/60 border border-[#008FED]/15 dark:border-white/10 focus:border-[#008FED] outline-none text-xs sm:text-sm text-slate-800 dark:text-white rounded-full pl-10 pr-4 py-2.5 transition-colors"
                  />
                </div>
              </div>

              {/* Grid cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                {filteredPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="bg-white/70 dark:bg-[#0B1A2E]/70 border border-[#008FED]/15 dark:border-white/10 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow group"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono tracking-wider">
                        <span className="text-[#008FED] dark:text-[#00D4FF] font-bold uppercase">{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="font-display text-lg font-bold text-[#1E1A39] dark:text-white group-hover:text-[#008FED] dark:group-hover:text-[#00D4FF] transition-colors leading-tight">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal line-clamp-3">
                        {post.summary}
                      </p>

                      <div className="flex flex-wrap gap-1 mt-1">
                        {post.tags?.map((t) => (
                          <span key={t} className="text-[9px] font-mono bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-450 px-2 py-0.5 rounded">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-[#008FED] dark:text-[#00D4FF]" />
                        <span className="text-[10px] text-slate-400 dark:text-slate-450 font-bold">{post.author}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-[11px] font-bold text-[#008FED] dark:text-[#00D4FF] group/link">
                        <span>Read More</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right side: Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8 text-left">
              
              {/* Trending section */}
              <div className="bg-white/70 dark:bg-[#0B1A2E]/70 border border-[#008FED]/15 dark:border-white/10 rounded-3xl p-6 shadow-sm backdrop-blur-md flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#008FED] dark:text-[#00D4FF] uppercase tracking-wider font-mono">
                  <TrendingUp className="w-4 h-4" />
                  <span>Trending Topics</span>
                </div>
                
                <div className="flex flex-col gap-4.5 mt-2">
                  {trendingTopics.map((topic, idx) => (
                    <div key={idx} className="flex flex-col gap-1 border-b border-slate-100 dark:border-white/5 pb-3 last:border-0 last:pb-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#1E1A39] dark:text-white hover:text-[#008FED] dark:hover:text-[#00D4FF] transition-colors leading-snug cursor-pointer">
                        {topic.title}
                      </h4>
                      <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">{topic.reads}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter enrollment */}
              <div className="bg-gradient-to-tr from-[#7C3AED]/90 to-[#A78BFA]/90 text-white rounded-3xl p-6 shadow-sm flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute w-40 h-40 rounded-full bg-white/10 blur-2xl -bottom-10 -right-10 pointer-events-none" />
                
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono bg-white/20 px-3.5 py-1 rounded-full border border-white/20 w-fit">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Newsletter</span>
                </div>
                
                <h3 className="font-display text-lg font-bold leading-tight mt-1">
                  Stay updated with Technical Guides
                </h3>
                
                <p className="text-[11px] text-purple-100/90 leading-relaxed font-normal">
                  Subscribe to receive updates on architectural scaling guidelines, custom database schemas, and vector prompts.
                </p>
                
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5 mt-2 relative z-10">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    className="w-full bg-white/20 border border-white/30 focus:border-white outline-none text-xs text-white placeholder-purple-150 rounded-xl px-4 py-3 transition-colors"
                  />
                  <Button type="submit" variant="secondary" className="w-full text-center py-2.5 text-xs font-bold">
                    Subscribe
                  </Button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-white/70 dark:bg-[#0B1A2E]/70 border border-[#008FED]/15 dark:border-white/10 rounded-[32px] p-8 sm:p-12 shadow-lg backdrop-blur-md flex flex-col md:flex-row gap-8 justify-between items-center text-left">
          <div className="flex flex-col gap-3">
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#008FED] dark:text-[#00D4FF] uppercase">
              CONSULTING SERVICES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1E1A39] dark:text-white leading-tight">
              Looking for a Tech Partner?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal max-w-xl">
              We design, write, deploy, and scale digital systems tailored completely for your workflows. Request a consultation with our engineers.
            </p>
          </div>
          
          <Button href="/contact" variant="primary" className="shrink-0 shadow-md">
            Contact Our Team
          </Button>
        </div>
      </section>

    </div>
  );
}
