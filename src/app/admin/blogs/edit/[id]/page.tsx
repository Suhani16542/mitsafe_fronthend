"use client";

import React, { useState, useEffect, use, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Send,
  Eye,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Tag,
  Star,
  Clock,
  User,
  FolderTree,
  Loader2,
} from "lucide-react";
import RichTextEditorUI from "@/components/admin/RichTextEditorUI";
import BlogPreviewModal from "@/components/admin/BlogPreviewModal";
import { BlogPost } from "@/types/adminBlog";
import { getBlogs, updateBlog, uploadBlogImage, getCategories } from "@/services/blog.service";

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export default function EditBlogPage({ params }: EditBlogPageProps) {
  const resolvedParams = use(params);
  const blogId = resolvedParams.id;
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isLoadingBlog, setIsLoadingBlog] = useState(true);

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [keywords, setKeywords] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [categoriesOptions, setCategoriesOptions] = useState<string[]>([
    "Technology",
    "AI & Automation",
    "Cloud & Security",
    "Software Engineering",
  ]);
  const [tagsInput, setTagsInput] = useState("");
  const [authorName, setAuthorName] = useState("Mitsafe Team");
  const [readTime, setReadTime] = useState("5 Min Read");

  const [featuredImage, setFeaturedImage] = useState(
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80"
  );
  const [featuredImagePublicId, setFeaturedImagePublicId] = useState("");

  const [status, setStatus] = useState<"published" | "draft">("published");
  const [isFeatured, setIsFeatured] = useState(false);

  // UI Feedback & Preview Modal State
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState("");
  const [errorToast, setErrorToast] = useState("");

  // Load target blog data and categories on mount
  useEffect(() => {
    async function loadData() {
      setIsLoadingBlog(true);
      try {
        const [blogsRes, catRes] = await Promise.allSettled([
          getBlogs({ status: "all", limit: 100 }),
          getCategories(),
        ]);

        if (catRes.status === "fulfilled" && catRes.value.success) {
          setCategoriesOptions(catRes.value.data);
        }

        if (blogsRes.status === "fulfilled" && blogsRes.value.success) {
          const target = blogsRes.value.data.find(
            (b: BlogPost) => b.id === blogId || (b as any)._id === blogId || b.slug === blogId
          );

          if (target) {
            setTitle(target.title);
            setSlug(target.slug);
            setKeywords(Array.isArray(target.keywords) ? target.keywords.join(", ") : target.keywords || "");
            setExcerpt(target.excerpt);
            setContent(target.content);
            setCategory(target.category);
            setTagsInput(Array.isArray(target.tags) ? target.tags.join(", ") : "");
            setAuthorName(
              typeof target.author === "string"
                ? target.author
                : target.author?.name || "Mitsafe Team"
            );
            setReadTime(target.readTime || "5 Min Read");
            setFeaturedImage(target.featuredImage);
            setFeaturedImagePublicId((target as any).featuredImagePublicId || "");
            setStatus(target.status);
            setIsFeatured(target.isFeatured);
          } else {
            setErrorToast("Blog post not found on server.");
          }
        }
      } catch (err: any) {
        setErrorToast(err.message || "Failed to load blog post details.");
      } finally {
        setIsLoadingBlog(false);
      }
    }

    loadData();
  }, [blogId]);

  // Image upload handler
  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const localUrl = URL.createObjectURL(file);
    setFeaturedImage(localUrl);

    setIsUploadingImage(true);
    setErrorToast("");
    setSuccessToast("");

    try {
      const res = await uploadBlogImage(file);
      if (res.success && res.imageUrl) {
        setFeaturedImage(res.imageUrl);
        setFeaturedImagePublicId(res.publicId || "");
        setSuccessToast("Featured image updated successfully!");
        setTimeout(() => setSuccessToast(""), 3000);
      }
    } catch (err: any) {
      setErrorToast(err.message || "Failed to upload image to server.");
      setTimeout(() => setErrorToast(""), 4000);
    } finally {
      setIsUploadingImage(false);
    }
  };

  const getConstructedBlog = (): Partial<BlogPost> => {
    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    return {
      id: blogId,
      title: title.trim() || "Untitled Blog Post",
      slug: slug.trim() || "untitled-blog-post",
      keywords: keywords.trim(),
      excerpt: excerpt.trim(),
      content,
      category,
      tags,
      author: {
        id: "auth-1",
        name: authorName || "Mitsafe Team",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
        role: "Content Team",
      },
      readTime,
      featuredImage,
      status,
      isFeatured,
      publishedAt: status === "published" ? new Date().toISOString().split("T")[0] : "",
      createdAt: new Date().toISOString().split("T")[0],
      views: 0,
    };
  };

  const handleUpdate = async (targetStatus: "published" | "draft") => {
    if (!title.trim()) {
      setErrorToast("Please enter a Blog Title.");
      setTimeout(() => setErrorToast(""), 4000);
      return;
    }

    setIsSubmitting(true);
    setErrorToast("");
    setSuccessToast("");

    try {
      const tagsArray = tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        keywords: keywords.trim(),
        excerpt: excerpt.trim(),
        content,
        category,
        tags: tagsArray,
        author: authorName.trim() || "Mitsafe Team",
        featuredImage,
        featuredImagePublicId,
        readTime,
        status: targetStatus,
        isFeatured,
      };

      const res = await updateBlog(blogId, payload);

      if (res.success) {
        setSuccessToast("Blog post updated successfully! Redirecting to dashboard...");
        setTimeout(() => {
          router.push("/admin/blogs");
        }, 1200);
      }
    } catch (err: any) {
      setErrorToast(err.message || "Failed to update blog post");
      setTimeout(() => setErrorToast(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingBlog) {
    return (
      <div className="py-20 flex flex-col items-center justify-center gap-3 font-sans text-slate-600">
        <Loader2 className="w-8 h-8 text-[#305EFF] animate-spin" />
        <p className="text-sm font-semibold">Loading blog details from server...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 font-sans text-slate-800 text-left">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Back to Blogs List"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display">
              Edit Blog Post
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Editing: <strong className="text-slate-800">{title || blogId}</strong>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="px-4 py-2 bg-white border border-slate-200 hover:border-[#305EFF] text-slate-700 hover:text-[#305EFF] rounded-2xl text-xs font-bold transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => {
              setStatus("draft");
              handleUpdate("draft");
            }}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>Save Draft</span>
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => {
              setStatus("published");
              handleUpdate("published");
            }}
            className="px-5 py-2 bg-[#305EFF] hover:bg-[#305EFF]/90 text-white rounded-2xl text-xs font-extrabold shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            <span>Update Blog</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {successToast && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2.5 shadow-2xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successToast}</span>
        </div>
      )}

      {errorToast && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-center gap-2.5 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          <span>{errorToast}</span>
        </div>
      )}

      {/* Two Column Form Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Left Form Area (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-2xs space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 font-display border-b border-slate-100 pb-3">
              Article Content Details
            </h3>

            {/* Title */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Blog Title <span className="text-[#305EFF]">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#305EFF] bg-slate-50/50"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                URL Slug
              </label>
              <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden text-xs font-mono">
                <span className="px-3 text-slate-400 select-none border-r border-slate-200 bg-slate-100/70">
                  /blog/
                </span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-3 py-2.5 bg-transparent text-slate-800 focus:outline-none font-mono"
                />
              </div>
            </div>

            {/* Keywords */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Keywords
              </label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="e.g. AI, artificial intelligence, business automation, digital transformation"
                className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#305EFF] bg-slate-50/50"
              />
              <p className="text-[11px] text-slate-400 font-medium mt-1">
                Add relevant keywords separated by commas.
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Short Excerpt / Summary
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#305EFF] bg-slate-50/50 resize-none"
              />
            </div>
          </div>

          {/* Rich Text Editor */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800 px-1">
              Article Body Content
            </label>
            <RichTextEditorUI
              value={content}
              onChange={setContent}
              onPreviewClick={() => setIsPreviewOpen(true)}
            />
          </div>
        </div>

        {/* Sidebar Right Controls (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Publication Controls */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-2xs space-y-4">
            <h3 className="text-xs font-extrabold text-slate-900 font-mono uppercase tracking-wider border-b border-slate-100 pb-3">
              Publication Settings
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Publication Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as "published" | "draft")}
                className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs font-bold text-slate-800 bg-slate-50/70 focus:outline-none focus:border-[#305EFF] cursor-pointer"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <FolderTree className="w-3.5 h-3.5 text-[#305EFF]" />
                <span>Category</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs font-bold text-slate-800 bg-slate-50/70 focus:outline-none focus:border-[#305EFF] cursor-pointer"
              >
                {categoriesOptions.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <Star className={`w-4 h-4 ${isFeatured ? "text-purple-600 fill-current" : "text-slate-400"}`} />
                <span className="text-xs font-bold text-slate-800">Featured Article</span>
              </div>
              <input
                type="checkbox"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="w-4 h-4 accent-[#305EFF] cursor-pointer rounded"
              />
            </div>
          </div>

          {/* Author & Metadata */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-2xs space-y-4">
            <h3 className="text-xs font-extrabold text-slate-900 font-mono uppercase tracking-wider border-b border-slate-100 pb-3">
              Author & Metadata
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#305EFF]" />
                <span>Author Name</span>
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-800 bg-slate-50/70 focus:outline-none focus:border-[#305EFF]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#305EFF]" />
                <span>Read Time</span>
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-800 bg-slate-50/70 focus:outline-none focus:border-[#305EFF]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#305EFF]" />
                <span>Tags</span>
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-800 bg-slate-50/70 focus:outline-none focus:border-[#305EFF]"
              />
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-2xs space-y-3">
            <h3 className="text-xs font-extrabold text-slate-900 font-mono uppercase tracking-wider border-b border-slate-100 pb-3">
              Cover Image
            </h3>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src={featuredImage}
                alt="Cover Preview"
                fill
                className="object-cover"
                unoptimized
              />
              {isUploadingImage && (
                <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center text-white text-xs font-bold gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Uploading Image...</span>
                </div>
              )}
            </div>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="p-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/70 hover:bg-[#305EFF]/5 hover:border-[#305EFF]/40 transition-all text-center cursor-pointer group"
            >
              <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-[#305EFF] mx-auto mb-1 transition-colors" />
              <p className="text-xs font-bold text-slate-700">
                {isUploadingImage ? "Uploading Image..." : "Click to Upload New Cover Image"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Live Article Preview Overlay */}
      <BlogPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        blog={getConstructedBlog()}
      />
    </div>
  );
}
