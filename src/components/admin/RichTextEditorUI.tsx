"use client";

import React, { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Code,
  RotateCcw,
  Sparkles,
  Eye,
} from "lucide-react";

interface RichTextEditorUIProps {
  value: string;
  onChange: (val: string) => void;
  onPreviewClick?: () => void;
}

export default function RichTextEditorUI({
  value,
  onChange,
  onPreviewClick,
}: RichTextEditorUIProps) {
  const [activeFormats, setActiveFormats] = useState<Record<string, boolean>>({
    bold: false,
    italic: false,
    underline: false,
  });

  const toggleFormat = (key: string) => {
    setActiveFormats((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const insertSnippet = (prefix: string, suffix: string = "") => {
    onChange(`${value}\n${prefix}New formatted content block${suffix}`);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans text-slate-800">
      {/* Editor Toolbar Header */}
      <div className="bg-slate-50 border-b border-slate-200 p-2 sm:p-3 flex flex-wrap items-center justify-between gap-2 select-none">
        {/* Formatting Tools Group */}
        <div className="flex flex-wrap items-center gap-1">
          {/* Text Style formatting */}
          <button
            type="button"
            onClick={() => toggleFormat("bold")}
            className={`p-2 rounded-lg text-xs font-bold transition-all ${
              activeFormats.bold
                ? "bg-[#305EFF] text-white shadow-2xs"
                : "text-slate-600 hover:bg-slate-200/70"
            }`}
            title="Bold (Ctrl+B)"
          >
            <Bold className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => toggleFormat("italic")}
            className={`p-2 rounded-lg text-xs font-bold transition-all ${
              activeFormats.italic
                ? "bg-[#305EFF] text-white shadow-2xs"
                : "text-slate-600 hover:bg-slate-200/70"
            }`}
            title="Italic (Ctrl+I)"
          >
            <Italic className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => toggleFormat("underline")}
            className={`p-2 rounded-lg text-xs font-bold transition-all ${
              activeFormats.underline
                ? "bg-[#305EFF] text-white shadow-2xs"
                : "text-slate-600 hover:bg-slate-200/70"
            }`}
            title="Underline (Ctrl+U)"
          >
            <Underline className="w-4 h-4" />
          </button>

          <div className="h-5 w-px bg-slate-300 my-auto mx-1" />

          {/* Headings */}
          <button
            type="button"
            onClick={() => insertSnippet("<h2>", "</h2>")}
            className="p-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-200/70 transition-all flex items-center gap-1"
            title="Heading 2"
          >
            <Heading1 className="w-4 h-4 text-[#305EFF]" />
            <span className="text-[11px] font-extrabold font-mono">H2</span>
          </button>

          <button
            type="button"
            onClick={() => insertSnippet("<h3>", "</h3>")}
            className="p-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-200/70 transition-all flex items-center gap-1"
            title="Heading 3"
          >
            <Heading2 className="w-4 h-4 text-slate-600" />
            <span className="text-[11px] font-extrabold font-mono">H3</span>
          </button>

          <div className="h-5 w-px bg-slate-300 my-auto mx-1" />

          {/* Lists */}
          <button
            type="button"
            onClick={() => insertSnippet("<ul>\n  <li>", "</li>\n</ul>")}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200/70 transition-all"
            title="Bullet List"
          >
            <List className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => insertSnippet("<ol>\n  <li>", "</li>\n</ol>")}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200/70 transition-all"
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => insertSnippet("<blockquote>\n  ", "\n</blockquote>")}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200/70 transition-all"
            title="Blockquote"
          >
            <Quote className="w-4 h-4" />
          </button>

          <div className="h-5 w-px bg-slate-300 my-auto mx-1" />

          {/* Media & Links */}
          <button
            type="button"
            onClick={() => {
              const url = prompt("Enter hyperlink URL:", "https://mitsafe.com");
              if (url) insertSnippet(`<a href="${url}">`, "</a>");
            }}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200/70 transition-all"
            title="Insert Link"
          >
            <LinkIcon className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => {
              const imgUrl = prompt("Enter image URL:", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200");
              if (imgUrl) insertSnippet(`<img src="${imgUrl}" alt="Blog Image" />`);
            }}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200/70 transition-all"
            title="Insert Image"
          >
            <ImageIcon className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => insertSnippet("<code>", "</code>")}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200/70 transition-all"
            title="Code Block"
          >
            <Code className="w-4 h-4" />
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {onPreviewClick && (
            <button
              type="button"
              onClick={onPreviewClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-[#305EFF] text-slate-700 hover:text-[#305EFF] rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Preview</span>
            </button>
          )}

          <span className="text-[10.5px] font-mono text-slate-400 font-semibold px-2 py-1 rounded bg-white border border-slate-200">
            HTML Supported
          </span>
        </div>
      </div>

      {/* Editor Main Content Textarea */}
      <div className="relative bg-white">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your article content here... (Supports HTML tags like <h2>, <p>, <ul>, <blockquote>)"
          rows={14}
          className="w-full p-4 sm:p-5 bg-white text-slate-900 text-sm font-sans placeholder-slate-400 focus:outline-none resize-y leading-relaxed font-mono"
        />
      </div>

      {/* Word Count / Info Footer */}
      <div className="bg-slate-50 border-t border-slate-200 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium select-none">
        <div className="flex items-center gap-4">
          <span>Words: {value.trim() ? value.trim().split(/\s+/).length : 0}</span>
          <span>Characters: {value.length}</span>
        </div>
        <div className="flex items-center gap-1 text-[#305EFF] font-sans font-semibold">
          <Sparkles className="w-3 h-3" />
          <span>Rich Text Editor Ready</span>
        </div>
      </div>
    </div>
  );
}
