"use client";

import React from "react";
import Image from "next/image";
import { X, Calendar, Clock, User, Sparkles, Tag, ArrowLeft } from "lucide-react";
import { BlogPost } from "@/types/adminBlog";

interface BlogPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: Partial<BlogPost>;
}

export default function BlogPreviewModal({
  isOpen,
  onClose,
  blog,
}: BlogPreviewModalProps) {
  if (!isOpen) return null;

  const defaultImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 font-sans overflow-y-auto">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card Box */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col z-10 animate-in zoom-in-95 duration-200">
        {/* Preview Top Header Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold font-mono tracking-wider uppercase">
              Live Article Preview Mode
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
              <span>Close Preview</span>
            </button>
          </div>
        </div>

        {/* Article Body Scrollable Viewport */}
        <div className="p-6 sm:p-10 overflow-y-auto custom-scrollbar space-y-6 text-left">
          {/* Article Header Metadata */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] border border-[#305EFF]/20 text-xs font-bold font-mono uppercase tracking-wider">
                {blog.category || "General"}
              </span>
              {blog.isFeatured && (
                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold font-mono uppercase tracking-wider">
                  ★ Featured Article
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold font-mono uppercase tracking-wider">
                {blog.status === "published" ? "Published" : "Draft"}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display leading-tight blog-main-title">
              {blog.title || "Untitled Blog Post"}
            </h1>

            {blog.excerpt && (
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                {blog.excerpt}
              </p>
            )}

            {/* Author & Publication Info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-b border-slate-100 py-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                  <Image
                    src={blog.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"}
                    alt={blog.author?.name || "Author"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">
                    {blog.author?.name || "Alex Morgan"}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {blog.author?.role || "Content Team"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{blog.publishedAt || new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{blog.readTime || "5 min read"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <Image
              src={blog.featuredImage || defaultImage}
              alt={blog.title || "Blog Image"}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Article Main Rendered HTML Content */}
          <div
            className="prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed space-y-4 pt-2"
            dangerouslySetInnerHTML={{
              __html:
                blog.content ||
                "<p>Your article content will appear here when written...</p>",
            }}
          />

          {/* Article Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-xs font-bold text-slate-500">Tags:</span>
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
