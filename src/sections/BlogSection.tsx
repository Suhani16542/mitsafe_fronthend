"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Clock, BookOpen, Send, TrendingUp, Cpu, Layers } from "lucide-react";
import { blogData } from "@/data/blog";

const categoryIcons: Record<string, any> = {
  "Software Engineering": Cpu,
  "Mobile App Development": Layers,
  "Cloud & Security": TrendingUp,
};

function BlogCard({ post, idx }: { post: any; idx: number }) {
  const IconComponent = categoryIcons[post.category] || BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      whileHover={{ y: -5 }}
      className="flex flex-col h-full group"
    >
      <div className="flex flex-col justify-between h-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 transition-all duration-300 group-hover:border-slate-300 group-hover:shadow-lg relative overflow-hidden">
        {/* Sliding top-to-bottom neutral background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0 pointer-events-none" />

        {/* Card Content Top */}
        <div className="flex flex-col gap-3 relative z-10 text-left">
          {/* Header Row: Category Badge & Read Time */}
          <div className="flex items-center justify-between">
            <span className="bg-[#305EFF]/10 border border-[#305EFF]/20 px-3 py-1 rounded-full text-[11px] font-extrabold text-[#305EFF] uppercase tracking-wide flex items-center gap-1.5">
              <IconComponent className="w-3 h-3 text-black" />
              {post.category}
            </span>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3 text-black" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-slate-900 transition-colors duration-300 leading-snug">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          {/* Date */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
            <Calendar className="w-3 h-3 text-black" />
            <span>{post.date}</span>
          </div>

          {/* Summary / Description */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
            {post.summary}
          </p>
        </div>

        {/* Card Footer / Read Article Link */}
        <div className="pt-4 border-t border-slate-100 group-hover:border-slate-200 mt-4 relative z-10 transition-colors">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center justify-between w-full font-extrabold text-xs sm:text-sm text-[#305EFF] hover:text-[#305EFF] transition-colors"
          >
            <span>Read Full Article</span>
            <div className="w-7 h-7 rounded-lg bg-[#305EFF]/10 text-black flex items-center justify-center transition-all duration-300 shadow-sm">
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const displayPosts = blogData.slice(0, 3);

  return (
    <section
      ref={containerRef}
      className="bg-white py-16 md:py-24 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#305EFF] font-display shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-black" />
            <span>ARTICLE JOURNAL</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold text-black tracking-[-0.03em] leading-tight"
          >
            Read Our Latest{" "}
            <span
              className="text-[#305EFF] inline-block"
              style={{ color: "#305EFF", WebkitTextFillColor: "#305EFF", background: "none" }}
            >
              News
            </span>
          </motion.h2>

          {/* Subtle blue accent line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="w-16 h-1 bg-[#305EFF] mx-auto mt-4 rounded-full origin-center"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-normal leading-relaxed"
          >
            Latest blogs, technology insights, industry trends, and company updates.
          </motion.p>
        </div>

        {/* 3-Column Image-Free Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
          {displayPosts.map((post, idx) => (
            <BlogCard key={post.slug || idx} post={post} idx={idx} />
          ))}
        </div>

        {/* Action Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Get a Quote Button */}
          <Link
            href="/get-a-quote"
            className="group inline-flex items-center justify-center gap-2.5 h-11 px-6 bg-[#305EFF] hover:bg-[#305EFF] text-white font-extrabold text-xs sm:text-sm rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Explore All Articles Button */}
          <Link
            href="/blog"
            className="group inline-flex items-center justify-center gap-2.5 h-11 px-6 border-2 border-[#305EFF] bg-white text-[#305EFF] hover:bg-[#305EFF]/50 font-extrabold text-xs sm:text-sm rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
          >
            <span>Explore All Articles</span>
            <BookOpen className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
