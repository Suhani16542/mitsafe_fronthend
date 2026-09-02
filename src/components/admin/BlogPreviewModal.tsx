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
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900">
                  {typeof blog.author === "string" ? blog.author : blog.author?.name || "Mitsafe Team"}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {typeof blog.author === "object" ? blog.author?.role || "Content Team" : "Content Team"}
                </span>
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
            className="prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed space-y-4 pt-2
              [&>h1]:text-2xl [&>h1]:font-black [&>h1]:text-slate-900
              [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:font-extrabold [&>h2]:text-slate-900 [&>h2]:border-l-4 [&>h2]:border-[#305EFF] [&>h2]:pl-3
              [&>h3]:text-lg [&>h3]:sm:text-xl [&>h3]:font-bold [&>h3]:text-slate-900
              [&>h4]:text-base [&>h4]:sm:text-lg [&>h4]:font-bold [&>h4]:text-slate-900
              [&>h5]:text-sm [&>h5]:sm:text-base [&>h5]:font-bold [&>h5]:text-slate-900
              [&>h6]:text-xs [&>h6]:sm:text-sm [&>h6]:font-bold [&>h6]:text-slate-900
              [&_img]:w-full [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-2xl [&_img]:my-6 [&_img]:border [&_img]:border-slate-200 [&_img]:mx-auto [&_img]:block
              [&_video]:w-full [&_video]:max-w-full [&_video]:h-auto [&_video]:rounded-2xl [&_video]:my-6 [&_video]:border [&_video]:border-slate-200 [&_video]:mx-auto [&_video]:block [&_video]:shadow-md [&_video]:bg-black"
            dangerouslySetInnerHTML={{
              __html:
                (blog.content ? blog.content.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/gi, "<h2$1>$2</h2>") : "") ||
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
