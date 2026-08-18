"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  CheckCircle2,
  Clock,
  Star,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Loader2,
  AlertCircle,
} from "lucide-react";
import AdminStatsCard from "@/components/admin/AdminStatsCard";
import BlogPreviewModal from "@/components/admin/BlogPreviewModal";
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal";
import { BlogPost, BlogStats } from "@/types/adminBlog";
import {
  getBlogs,
  getCategories,
  updateBlogStatus,
  updateBlog,
  deleteBlog as deleteBlogApi,
} from "@/services/blog.service";

export default function BlogManagementPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Modal States
  const [previewBlog, setPreviewBlog] = useState<BlogPost | null>(null);
  const [deleteBlog, setDeleteBlog] = useState<BlogPost | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch blogs and categories from Backend API
  const loadData = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const [blogsRes, catRes] = await Promise.allSettled([
        getBlogs({ status: "all", limit: 100 }),
        getCategories(),
      ]);

      if (blogsRes.status === "fulfilled" && blogsRes.value.success) {
        setBlogs(blogsRes.value.data);
      } else if (blogsRes.status === "rejected") {
        setErrorMessage(blogsRes.reason?.message || "Failed to load blogs from server");
      }

      if (catRes.status === "fulfilled" && catRes.value.success) {
        setCategoriesList(catRes.value.data);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Network error loading blogs");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Filtered Blogs logic
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        !searchQuery ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (typeof blog.author === "string"
          ? (blog.author as string).toLowerCase().includes(searchQuery.toLowerCase())
          : (blog.author as any)?.name?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (Array.isArray(blog.tags) && blog.tags.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesCategory =
        selectedCategory === "all" ||
        blog.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesStatus =
        selectedStatus === "all" || blog.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [blogs, searchQuery, selectedCategory, selectedStatus]);

  // Calculated Stats
  const stats: BlogStats = useMemo(() => {
    const categoriesSet = new Set(categoriesList);
    blogs.forEach((b) => {
      if (b.category) categoriesSet.add(b.category);
    });

    return {
      totalBlogs: blogs.length,
      publishedBlogs: blogs.filter((b) => b.status === "published").length,
      draftBlogs: blogs.filter((b) => b.status === "draft").length,
      featuredBlogs: blogs.filter((b) => b.isFeatured).length,
      totalCategories: categoriesSet.size,
    };
  }, [blogs, categoriesList]);

  // Paginated View
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage) || 1;
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBlogs.slice(start, start + itemsPerPage);
  }, [filteredBlogs, currentPage]);

  // Action Handlers
  const handleTogglePublish = async (id: string) => {
    const targetBlog = blogs.find((b) => b.id === id);
    if (!targetBlog) return;
    const nextStatus = targetBlog.status === "published" ? "draft" : "published";

    try {
      setSuccessMessage("");
      setErrorMessage("");
      const res = await updateBlogStatus(id, nextStatus);
      if (res.success) {
        setBlogs((prev) =>
          prev.map((b) => (b.id === id ? res.data : b))
        );
        setSuccessMessage(`Blog status changed to '${nextStatus}' successfully`);
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to update blog status");
      setTimeout(() => setErrorMessage(""), 4000);
    }
  };

  const handleToggleFeatured = async (id: string) => {
    const targetBlog = blogs.find((b) => b.id === id);
    if (!targetBlog) return;
    const nextFeatured = !targetBlog.isFeatured;

    try {
      setSuccessMessage("");
      setErrorMessage("");
      const res = await updateBlog(id, { isFeatured: nextFeatured });
      if (res.success) {
        setBlogs((prev) =>
          prev.map((b) => (b.id === id ? res.data : b))
        );
        setSuccessMessage(`Blog featured state updated successfully`);
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to update featured state");
      setTimeout(() => setErrorMessage(""), 4000);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteBlog) return;
    setIsDeleting(true);
    try {
      setSuccessMessage("");
      setErrorMessage("");
      const res = await deleteBlogApi(deleteBlog.id);
      if (res.success) {
        setBlogs((prev) => prev.filter((b) => b.id !== deleteBlog.id));
        setDeleteBlog(null);
        setSuccessMessage("Blog post deleted successfully");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to delete blog post");
      setTimeout(() => setErrorMessage(""), 4000);
    } finally {
      setIsDeleting(false);
    }
  };

  const allCategoryOptions = useMemo(() => {
    const set = new Set<string>(categoriesList);
    blogs.forEach((b) => {
      if (b.category) set.add(b.category);
    });
    return Array.from(set);
  }, [categoriesList, blogs]);

  return (
    <div className="space-y-6 font-sans text-slate-800 text-left">
      {/* Top Banner & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display">
            Blog Posts
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
            Manage your articles, drafts, categories, and homepage feature placements.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={loadData}
            disabled={isLoading}
            className="p-2.5 rounded-2xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
            title="Refresh Blogs"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin text-[#305EFF]" : ""}`} />
          </button>

          <Link
            href="/admin/blogs/create"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#305EFF] text-white text-xs font-extrabold rounded-2xl shadow-md hover:bg-[#305EFF]/90 hover:scale-[1.01] active:scale-[0.99] transition-all self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Blog</span>
          </Link>
        </div>
      </div>

      {/* Notifications */}
      {successMessage && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2.5 shadow-2xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-center gap-2.5 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Statistics Metric Cards */}
      <AdminStatsCard stats={stats} />

      {/* Filter Controls & Search */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by title, author, or tags..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-slate-50/70 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#305EFF] focus:bg-white transition-all"
            />
          </div>

          {/* Filters: Category & Status */}
          <div className="flex items-center gap-2.5 overflow-x-auto hide-scrollbar pb-1 md:pb-0">
            {/* Category Select */}
            <div className="relative shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-3 pr-8 py-2.5 rounded-2xl border border-slate-200 bg-slate-50/70 text-xs font-bold text-slate-700 appearance-none focus:outline-none focus:border-[#305EFF] cursor-pointer"
              >
                <option value="all">All Categories</option>
                {allCategoryOptions.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Status Select */}
            <div className="relative shrink-0">
              <select
                value={selectedStatus}
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-3 pr-8 py-2.5 rounded-2xl border border-slate-200 bg-slate-50/70 text-xs font-bold text-slate-700 appearance-none focus:outline-none focus:border-[#305EFF] cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="published">Published</option>
                <option value="draft">Drafts</option>
              </select>
              <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Reset Filters */}
            {(searchQuery || selectedCategory !== "all" || selectedStatus !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedStatus("all");
                  setCurrentPage(1);
                }}
                className="p-2.5 rounded-2xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                title="Reset Filters"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Blog Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                <th className="py-3.5 px-4 sm:px-6">Article</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Author</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Featured</th>
                <th className="py-3.5 px-4 sm:px-6 text-center sticky right-0 bg-slate-50/90 backdrop-blur-xs shadow-[-6px_0_10px_-4px_rgba(0,0,0,0.06)]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-xs font-medium">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Loader2 className="w-6 h-6 text-[#305EFF] animate-spin" />
                      <p className="text-xs font-semibold text-slate-600">Loading blogs from database...</p>
                    </div>
                  </td>
                </tr>
              ) : paginatedBlogs.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400 font-sans">
                    <p className="text-sm font-semibold">No blog posts found matching criteria.</p>
                    <p className="text-xs mt-1 text-slate-400">Try adjusting search filters or create a new blog.</p>
                  </td>
                </tr>
              ) : (
                paginatedBlogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="hover:bg-slate-50/70 transition-colors group"
                  >
                    {/* Title & Image Thumbnail (Clickable to Edit) */}
                    <td className="py-4 px-4 sm:px-6">
                      <Link
                        href={`/admin/blogs/edit/${blog.id}`}
                        className="flex items-center gap-3.5 max-w-sm sm:max-w-md group/item cursor-pointer"
                        title="Click to Edit Blog"
                      >
                        <div className="relative w-14 h-11 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0 shadow-2xs group-hover/item:border-[#305EFF] transition-colors">
                          <Image
                            src={blog.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80"}
                            alt={blog.title}
                            fill
                            className="object-cover group-hover/item:scale-105 transition-transform duration-300"
                            unoptimized
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-1 group-hover/item:text-[#305EFF] transition-colors">
                            {blog.title}
                          </span>
                          <span className="text-[10.5px] font-mono text-slate-400 truncate">
                            /{blog.slug}
                          </span>
                        </div>
                      </Link>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-full bg-[#305EFF]/10 text-[#305EFF] border border-[#305EFF]/20 text-[11px] font-bold font-mono">
                        {blog.category}
                      </span>
                    </td>

                    {/* Author */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="text-xs font-semibold text-slate-700">
                        {blog.author?.name || (typeof blog.author === "string" ? blog.author : "Mitsafe Team")}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-4 whitespace-nowrap text-slate-500 font-mono text-[11px]">
                      {blog.publishedAt || blog.createdAt || "N/A"}
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <button
                        onClick={() => handleTogglePublish(blog.id)}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1.5 cursor-pointer transition-all ${
                          blog.status === "published"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                            : "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"
                        }`}
                        title="Click to toggle Draft / Published"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            blog.status === "published"
                              ? "bg-emerald-500"
                              : "bg-amber-500"
                          }`}
                        />
                        <span className="capitalize">{blog.status}</span>
                      </button>
                    </td>

                    {/* Featured Toggle */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleFeatured(blog.id)}
                        className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                          blog.isFeatured
                            ? "bg-purple-50 text-purple-600 border-purple-200"
                            : "bg-slate-50 text-slate-300 border-slate-200 hover:text-slate-500"
                        }`}
                        title={blog.isFeatured ? "Featured Article" : "Make Featured"}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </button>
                    </td>

                    {/* Actions Menu Buttons (Sticky Right) */}
                    <td className="py-4 px-4 sm:px-6 text-center whitespace-nowrap sticky right-0 bg-white group-hover:bg-slate-50/90 backdrop-blur-xs shadow-[-6px_0_10px_-4px_rgba(0,0,0,0.06)]">
                      <div className="flex items-center justify-center gap-2">
                        {/* Edit Button */}
                        <Link
                          href={`/admin/blogs/edit/${blog.id}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-[#305EFF] border border-blue-200 hover:bg-[#305EFF] hover:text-white transition-all font-bold text-xs shadow-2xs cursor-pointer"
                          title="Edit Blog Post"
                        >
                          <Edit className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </Link>

                        {/* Delete Button */}
                        <button
                          onClick={() => setDeleteBlog(blog)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white transition-all font-bold text-xs shadow-2xs cursor-pointer"
                          title="Delete Blog Post"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>

                        {/* View Preview */}
                        <button
                          onClick={() => setPreviewBlog(blog)}
                          className="p-1.5 rounded-xl text-slate-500 hover:text-[#305EFF] hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                          title="Quick Preview"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-200/80 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold text-slate-500">
          <div>
            Showing{" "}
            <span className="font-bold text-slate-800">
              {filteredBlogs.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}
            </span>{" "}
            to{" "}
            <span className="font-bold text-slate-800">
              {Math.min(currentPage * itemsPerPage, filteredBlogs.length)}
            </span>{" "}
            of <span className="font-bold text-slate-800">{filteredBlogs.length}</span> blogs
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="px-3 py-1 font-mono text-xs font-bold text-slate-800">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewBlog && (
        <BlogPreviewModal
          isOpen={Boolean(previewBlog)}
          onClose={() => setPreviewBlog(null)}
          blog={previewBlog}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteBlog && (
        <DeleteConfirmModal
          isOpen={Boolean(deleteBlog)}
          title="Delete Blog Post"
          itemTitle={deleteBlog.title}
          onClose={() => setDeleteBlog(null)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
}
