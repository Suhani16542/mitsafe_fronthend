"use client";

import React, { useState, useEffect } from "react";
import { X, FolderPlus, Save, AlertCircle } from "lucide-react";
import { BlogCategory } from "@/types/adminBlog";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (categoryData: Partial<BlogCategory>) => void;
  initialCategory?: Partial<BlogCategory> | null;
}

export default function CategoryModal({
  isOpen,
  onClose,
  onSave,
  initialCategory,
}: CategoryModalProps) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (initialCategory) {
      setName(initialCategory.name || "");
      setSlug(initialCategory.slug || "");
      setDescription(initialCategory.description || "");
      setStatus(initialCategory.status || "active");
    } else {
      setName("");
      setSlug("");
      setDescription("");
      setStatus("active");
    }
    setErrorMsg("");
  }, [initialCategory, isOpen]);

  if (!isOpen) return null;

  const handleNameChange = (val: string) => {
    setName(val);
    if (!initialCategory) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "")
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter a category name.");
      return;
    }

    onSave({
      id: initialCategory?.id || `cat-${Date.now()}`,
      name: name.trim(),
      slug: slug.trim() || name.toLowerCase().replace(/\s+/g, "-"),
      description: description.trim(),
      status,
      count: initialCategory?.count ?? 0,
      createdAt: initialCategory?.createdAt || new Date().toISOString().split("T")[0],
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 z-10 animate-in zoom-in-95 duration-150 text-left">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#305EFF]/10 border border-[#305EFF]/20 flex items-center justify-center text-[#305EFF]">
              <FolderPlus className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 font-display">
              {initialCategory ? "Edit Category" : "Add New Category"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Category Name <span className="text-[#305EFF]">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="e.g. AI & Automation"
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#305EFF] bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Slug
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="e.g. ai-automation"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 focus:outline-none focus:border-[#305EFF] bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of this category..."
              rows={3}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#305EFF] bg-slate-50/50 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "active" | "inactive")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#305EFF] bg-slate-50/50 cursor-pointer"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-bold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#305EFF] text-white hover:bg-[#305EFF]/90 rounded-xl text-xs font-extrabold shadow-md transition-all flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>{initialCategory ? "Update" : "Create"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
