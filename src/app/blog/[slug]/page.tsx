import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Bookmark } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import Button from "@/components/Button";
import { blogData } from "@/data/blog";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogData.find((b) => b.slug === resolvedParams.slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogData.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#FAFBFF] dark:bg-[#071426] min-h-screen pt-32 pb-20 cyber-grid relative text-[#0F172A] dark:text-white transition-colors duration-300">
      <div className="absolute inset-0 bg-[#FAFBFF]/90 dark:bg-[#071426]/90 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-300 hover:text-[#2563FF] dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#2563FF] dark:text-[#00D4FF]" />
          Back to Blog directory
        </Link>

        {/* Header Metadata */}
        <div className="flex flex-col gap-5 border-b border-slate-200 dark:border-white/5 pb-8 mb-10">
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#2563FF] dark:text-[#00D4FF] font-semibold">
            <span className="bg-[#2563FF]/5 dark:bg-[#00D4FF]/10 border border-[#2563FF]/15 dark:border-[#00D4FF]/25 rounded px-3 py-1 uppercase tracking-wider font-display">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-350">
              <Clock className="w-4 h-4 text-[#2563FF] dark:text-[#00D4FF]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium pt-2">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#2563FF] dark:text-[#00D4FF]" />
              Written by: {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#2563FF] dark:text-[#00D4FF]" />
              Published: {post.date}
            </span>
          </div>

        </div>

        {/* Cover visual Banner */}
        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 mb-10 shadow-2xl">
          <div className={`absolute inset-0 bg-gradient-to-tr ${post.imageColor} opacity-20`} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#071426]" />
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none text-slate-605 dark:text-slate-350 text-sm md:text-base leading-relaxed flex flex-col gap-6">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="flex flex-col gap-6
              [&>h2]:font-display [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-bold [&>h2]:text-[#0F172A] [&>h2]:dark:text-white [&>h2]:mt-6 [&>h2]:mb-2 [&>h2]:border-l-2 [&>h2]:border-[#2563FF] [&>h2]:dark:border-[#00D4FF] [&>h2]:pl-3
              [&>p]:leading-relaxed [&>p]:mb-4
              [&>code]:bg-slate-100 [&>code]:dark:bg-white/5 [&>code]:border [&>code]:border-slate-200 [&>code]:dark:border-white/5 [&>code]:rounded [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:text-xs [&>code]:text-[#2563FF] [&>code]:dark:text-[#00D4FF]
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#2563FF] [&>blockquote]:dark:border-[#00D4FF] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-600 [&>blockquote]:dark:text-slate-400 [&>blockquote]:my-6 [&>blockquote]:bg-white/[0.02] [&>blockquote]:py-3 [&>blockquote]:pr-3"
          />
        </article>

        {/* Footer info */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-white/5">
          <GlowCard className="bg-white/70 dark:bg-[#0B1A2E]/70 flex flex-col md:flex-row items-center gap-6 p-6 border-slate-200 dark:border-white/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#2563FF] to-[#00D4FF] flex items-center justify-center font-display font-extrabold text-white text-base shrink-0 shadow-[0_0_10px_rgba(37,99,255,0.35)]">
              {post.author.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-grow text-center md:text-left">
              <h4 className="font-display text-base font-bold text-[#0F172A] dark:text-white">
                About the Author
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-350 mt-1">
                {post.author} is a Principal Technology Strategist at Mitsafe, specialized in compiling web frameworks and deploying secure cloud nodes.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/blog" variant="secondary" icon={<Bookmark className="w-4 h-4 text-[#2563FF] dark:text-[#00D4FF]" />}>
                All Articles
              </Button>
            </div>
          </GlowCard>
        </div>

      </div>
    </div>
  );
}
