"use client";

import React from "react";
import { AlertTriangle, Trash2, X } from "lucide-react";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  title?: string;
  itemTitle?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmModal({
  isOpen,
  title = "Delete Item",
  itemTitle = "this item",
  onClose,
  onConfirm,
}: DeleteConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 z-10 animate-in zoom-in-95 duration-150 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-red-100 border border-red-200 text-red-600 mx-auto flex items-center justify-center mb-3">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <h3 className="text-base font-extrabold text-slate-900 font-display mb-1">
          {title}
        </h3>

        <p className="text-xs text-slate-500 font-normal mb-5 leading-relaxed">
          Are you sure you want to delete <strong className="text-slate-800">"{itemTitle}"</strong>? This action cannot be undone in this UI demo.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={onClose}
            className="w-1/2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="w-1/2 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-extrabold shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
