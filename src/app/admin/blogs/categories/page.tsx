"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FolderTree,
  Plus,
  Edit,
  Trash2,
  FileText,
  CheckCircle2,
  XCircle,
  Search,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import CategoryModal from "@/components/admin/CategoryModal";
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal";
import { MOCK_CATEGORIES } from "@/data/mockAdminBlogs";
import { BlogCategory } from "@/types/adminBlog";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<BlogCategory[]>(MOCK_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState("");

  // Modal States
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<BlogCategory | null>(null);
  const [deletingCategory, setDeletingCategory] = useState<BlogCategory | null>(null);

  // Filtered categories
  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Stats
  const activeCount = categories.filter((c) => c.status === "active").length;
  const totalArticles = categories.reduce((sum, c) => sum + c.count, 0);

  const handleSaveCategory = (catData: Partial<BlogCategory>) => {
    if (editingCategory) {
      setCategories((prev) =>
        prev.map((c) => (c.id === catData.id ? ({ ...c, ...catData } as BlogCategory) : c))
      );
    } else {
      setCategories((prev) => [
        {
          id: `cat-${Date.now()}`,
          name: catData.name || "New Category",
          slug: catData.slug || "new-category",
          description: catData.description || "",
          count: 0,
          status: catData.status || "active",
          createdAt: new Date().toISOString().split("T")[0],
        },
        ...prev,
      ]);
    }
    setEditingCategory(null);
  };

  const handleToggleStatus = (id: string) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "active" ? "inactive" : "active" }
          : c
      )
    );
  };

  const handleDeleteConfirm = () => {
    if (deletingCategory) {
      setCategories((prev) => prev.filter((c) => c.id !== deletingCategory.id));
      setDeletingCategory(null);
    }
  };

  return (
    <div className="space-y-6 font-sans text-slate-800 text-left">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Back to Blogs Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display">
              Category Management
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Organize blog posts by taxonomy, topic areas, and site structure.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setEditingCategory(null);
            setIsCategoryModalOpen(true);
          }}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#305EFF] text-white text-xs font-extrabold rounded-2xl shadow-md hover:bg-[#305EFF]/90 hover:scale-[1.01] active:scale-[0.99] transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Category</span>
        </button>
      </div>

      {/* Category Metric Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 font-mono tracking-wider uppercase">
              Total Categories
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#305EFF]/10 border border-[#305EFF]/20 flex items-center justify-center text-[#305EFF]">
              <FolderTree className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900 font-display mt-2">
            {categories.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 font-mono tracking-wider uppercase">
              Active Taxonomies
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900 font-display mt-2">
            {activeCount}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 font-mono tracking-wider uppercase">
              Assigned Articles
            </span>
            <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900 font-display mt-2">
            {totalArticles}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-4 shadow-2xs">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search categories by name, slug, or description..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-slate-50/70 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#305EFF] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                <th className="py-3.5 px-6">Category Name</th>
                <th className="py-3.5 px-4">Slug</th>
                <th className="py-3.5 px-4">Description</th>
                <th className="py-3.5 px-4 text-center">Blogs Count</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-xs font-medium">
              {filteredCategories.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    <p className="text-sm font-semibold">No categories found.</p>
                  </td>
                </tr>
              ) : (
                filteredCategories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-50/60 transition-colors">
                    {/* Name */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center font-bold text-xs shrink-0">
                          {cat.name.charAt(0)}
                        </div>
                        <span className="font-extrabold text-slate-900 text-xs">
                          {cat.name}
                        </span>
                      </div>
                    </td>

                    {/* Slug */}
                    <td className="py-4 px-4 font-mono text-[11px] text-slate-500 whitespace-nowrap">
                      /{cat.slug}
                    </td>

                    {/* Description */}
                    <td className="py-4 px-4 text-slate-600 max-w-xs truncate">
                      {cat.description || "No description provided."}
                    </td>

                    {/* Blog Count */}
                    <td className="py-4 px-4 text-center whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 font-mono font-bold text-slate-800 text-[11px]">
                        {cat.count} {cat.count === 1 ? "blog" : "blogs"}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleStatus(cat.id)}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1.5 cursor-pointer transition-all ${
                          cat.status === "active"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                            : "bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200"
                        }`}
                        title="Toggle Status"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            cat.status === "active" ? "bg-emerald-500" : "bg-slate-400"
                          }`}
                        />
                        <span className="capitalize">{cat.status}</span>
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => {
                            setEditingCategory(cat);
                            setIsCategoryModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-[#305EFF] hover:bg-[#305EFF]/10 transition-colors"
                          title="Edit Category"
                        >
                          <Edit className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => setDeletingCategory(cat)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete Category"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Category Modal */}
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => {
          setIsCategoryModalOpen(false);
          setEditingCategory(null);
        }}
        onSave={handleSaveCategory}
        initialCategory={editingCategory}
      />

      {/* Delete Category Modal */}
      {deletingCategory && (
        <DeleteConfirmModal
          isOpen={Boolean(deletingCategory)}
          title="Delete Category"
          itemTitle={deletingCategory.name}
          onClose={() => setDeletingCategory(null)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
}
