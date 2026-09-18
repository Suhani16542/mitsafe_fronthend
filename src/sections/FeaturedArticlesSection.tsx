"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, BookOpen, Sparkles, Loader2, Compass } from "lucide-react";
import { getBlogs, DEFAULT_BLOG_FALLBACK_IMAGE } from "@/services/blog.service";
import { MOCK_BLOG_POSTS } from "@/data/mockAdminBlogs";
import { BlogPost } from "@/types/adminBlog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export default function FeaturedArticlesSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadFeaturedBlogs() {
      try {
        const res = await getBlogs({
          status: "published",
          limit: 3,
          sort: "-publishedAt -createdAt",
        });

        if (isMounted) {
          if (res.success && Array.isArray(res.data) && res.data.length > 0) {
            setPosts(res.data.slice(0, 3));
          } else {
            // Fallback to mock published articles
            const fallback = MOCK_BLOG_POSTS.filter((p) => p.status === "published").slice(0, 3);
            setPosts(fallback);
          }
        }
      } catch (err) {
        console.warn("[FeaturedArticlesSection] Using curated fallback articles:", err);
        if (isMounted) {
          const fallback = MOCK_BLOG_POSTS.filter((p) => p.status === "published").slice(0, 3);
          setPosts(fallback);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadFeaturedBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden border-t border-slate-100 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#305EFF]/5 to-[#00D4FF]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          {/* Badge with subtle float */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            whileHover={{ scale: 1.05 }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#305EFF]/20 bg-[#305EFF]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#305EFF] font-display shadow-xs cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#305EFF] animate-pulse" />
            <span>Featured Articles</span>
          </motion.div>

          {/* Title with smooth entrance */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display leading-[1.15]"
          >
            Latest Engineering &amp;{" "}
            <span className="text-[#305EFF] relative inline-block">
              Tech Insights
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#305EFF] to-[#00D4FF] rounded-full origin-left"
              />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed"
          >
            Explore our latest research on software engineering, AI automation, cloud architectures, and digital transformation.
          </motion.p>
        </div>

        {/* 3-Column Dynamic Animated Articles Grid */}
        {isLoading && posts.length === 0 ? (
          <div className="py-16 flex flex-col items-center justify-center gap-3 text-slate-400">
            <Loader2 className="w-7 h-7 animate-spin text-[#305EFF]" />
            <span className="text-xs sm:text-sm font-semibold">Loading featured articles...</span>
          </div>
        ) : posts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full max-w-7xl mx-auto"
          >
            {posts.map((post, idx) => {
              const displayImage = post.featuredImage || DEFAULT_BLOG_FALLBACK_IMAGE;
              const displayDate = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : "Recently Published";

              return (
                <motion.article
                  key={post.slug || post.id || idx}
                  variants={cardVariants}
                  whileHover={{
                    y: -7,
                    boxShadow: "0 22px 40px -15px rgba(48, 94, 255, 0.18)",
                    borderColor: "rgba(48, 94, 255, 0.35)",
                    transition: { duration: 0.28, ease: "easeOut" },
                  }}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between group transition-colors duration-300"
                >
                  <div>
                    {/* Featured Cover Thumbnail with Smooth Zoom Animation */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100"
                    >
                      <Image
                        src={displayImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-108 group-hover:brightness-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {post.category && (
                        <div className="absolute top-3.5 left-3.5 z-10">
                          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-extrabold uppercase tracking-wider text-[#305EFF] shadow-sm group-hover:bg-[#305EFF] group-hover:text-white transition-colors duration-300">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </Link>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6 space-y-3 text-left">
                      {/* Date & Read Time */}
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#305EFF]" />
                          <span>{displayDate}</span>
                        </div>
                        {post.readTime && (
                          <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{post.readTime}</span>
                          </div>
                        )}
                      </div>

                      {/* Article Title */}
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#305EFF] transition-colors duration-200 line-clamp-2 leading-snug">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      {/* Excerpt / Summary */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Read Article Button */}
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-slate-100">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-between w-full font-bold text-xs sm:text-sm text-[#305EFF] hover:text-[#2550E0] transition-colors group/btn pt-1"
                    >
                      <span>Read Article</span>
                      <div className="w-7 h-7 rounded-lg bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1.5 group-hover/btn:bg-[#305EFF] group-hover/btn:text-white shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200" />
                      </div>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        ) : (
          <div className="py-12 text-center text-slate-400 text-sm">
            No published articles available yet.
          </div>
        )}

        {/* View All Articles Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center justify-center gap-2.5 h-11 px-7 rounded-full border-2 border-[#305EFF] bg-white text-[#305EFF] hover:bg-[#305EFF] hover:text-white font-extrabold text-xs sm:text-sm shadow-xs hover:shadow-lg hover:shadow-[#305EFF]/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>Explore All Articles</span>
            <BookOpen className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
