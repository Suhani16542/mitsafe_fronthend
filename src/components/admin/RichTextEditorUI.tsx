"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Bold,
  Italic,
  Underline,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Code,
  Eye,
  Loader2,
  Sparkles,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  PlusCircle,
  Undo2,
  Redo2,
  RemoveFormatting,
  Code2,
} from "lucide-react";
import { uploadBlogImage } from "@/services/blog.service";

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
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const savedSelectionRef = useRef<Range | null>(null);

  const [mode, setMode] = useState<"visual" | "html">("visual");
  const [currentBlock, setCurrentBlock] = useState("p");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const [externalImageUrl, setExternalImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  // Sync value from props into contentEditable innerHTML when value changes externally
  useEffect(() => {
    if (editorRef.current && mode === "visual") {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || "<p><br></p>";
      }
    }
  }, [value, mode]);

  // Update toolbar active states (bold, italic, current block) based on cursor position
  const updateToolbarState = useCallback(() => {
    if (typeof document === "undefined") return;

    setIsBold(document.queryCommandState("bold"));
    setIsItalic(document.queryCommandState("italic"));
    setIsUnderline(document.queryCommandState("underline"));

    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      savedSelectionRef.current = selection.getRangeAt(0).cloneRange();

      let node: Node | null = selection.anchorNode;
      if (node && node.nodeType === Node.TEXT_NODE) {
        node = node.parentNode;
      }
      if (node && node instanceof HTMLElement) {
        const tag = node.tagName.toLowerCase();
        if (["h2", "h3", "h4", "blockquote", "pre"].includes(tag)) {
          setCurrentBlock(tag);
        } else {
          setCurrentBlock("p");
        }
      }
    }
  }, []);

  const handleEditorInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      // If editor is empty, keep clean empty paragraph
      if (html === "<p><br></p>" || html === "<br>" || html === "") {
        onChange("");
      } else {
        onChange(html);
      }
      updateToolbarState();
    }
  };

  const executeCommand = (command: string, arg: string | undefined = undefined) => {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand(command, false, arg);
      handleEditorInput();
    }
  };

  const setBlockFormat = (tag: string) => {
    executeCommand("formatBlock", tag.startsWith("<") ? tag : `<${tag}>`);
    setCurrentBlock(tag.replace(/[<>]/g, ""));
  };

  const restoreSelection = () => {
    if (savedSelectionRef.current && typeof window !== "undefined") {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(savedSelectionRef.current);
      }
    }
  };

  const insertHtmlAtCursor = (htmlToInsert: string) => {
    if (editorRef.current) {
      editorRef.current.focus();
      restoreSelection();

      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();

        const template = document.createElement("template");
        template.innerHTML = htmlToInsert.trim();
        const frag = template.content;
        const lastChild = frag.lastChild;

        range.insertNode(frag);

        if (lastChild) {
          range.setStartAfter(lastChild);
          range.setEndAfter(lastChild);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        document.execCommand("insertHTML", false, htmlToInsert);
      }

      handleEditorInput();
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError("");
    setUploadSuccess("");

    try {
      const res = await uploadBlogImage(file);
      if (res.success && res.imageUrl) {
        const imgTag = `<p><img src="${res.imageUrl}" alt="${file.name.replace(/\.[^/.]+$/, "")}" class="rounded-2xl max-w-full my-6" /></p><p><br></p>`;
        insertHtmlAtCursor(imgTag);
        setUploadSuccess("Article image inserted successfully!");
        setShowImageModal(false);
        setTimeout(() => setUploadSuccess(""), 3000);
      }
    } catch (err: any) {
      setUploadError(err.message || "Failed to upload image.");
      setTimeout(() => setUploadError(""), 4000);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleInsertExternalUrl = () => {
    if (!externalImageUrl.trim()) return;
    const alt = imageAlt.trim() || "Article illustration";
    const imgTag = `<p><img src="${externalImageUrl.trim()}" alt="${alt}" class="rounded-2xl max-w-full my-6" /></p><p><br></p>`;
    insertHtmlAtCursor(imgTag);
    setExternalImageUrl("");
    setImageAlt("");
    setShowImageModal(false);
  };

  const handleInsertLink = () => {
    const selection = window.getSelection();
    const selectedText = selection?.toString();
    const url = prompt("Enter hyperlink URL:", "https://");
    if (url) {
      if (!selectedText) {
        insertHtmlAtCursor(`<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
      } else {
        executeCommand("createLink", url);
      }
    }
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs font-sans text-slate-800">
      {/* Hidden file input for article image upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* ── TOOLBAR HEADER ── */}
      <div className="bg-slate-50 border-b border-slate-200 p-2 sm:p-3 flex flex-wrap items-center justify-between gap-2 select-none">
        {/* Left Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-1.5">
          {/* Paragraph / Heading Block Selector */}
          <select
            value={currentBlock}
            onChange={(e) => setBlockFormat(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-800 hover:border-[#305EFF] focus:outline-none focus:border-[#305EFF] cursor-pointer shadow-2xs"
            title="Choose Text Format"
          >
            <option value="p">Paragraph (Normal)</option>
            <option value="h2">Heading 2 (H2)</option>
            <option value="h3">Heading 3 (H3)</option>
            <option value="blockquote">Quote (Blockquote)</option>
            <option value="pre">Code Block</option>
          </select>

          <div className="h-5 w-px bg-slate-300 my-auto mx-0.5" />

          {/* Quick H2 button */}
          <button
            type="button"
            onClick={() => setBlockFormat(currentBlock === "h2" ? "p" : "h2")}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-extrabold font-mono transition-all flex items-center gap-1 cursor-pointer ${
              currentBlock === "h2"
                ? "bg-[#305EFF] text-white shadow-2xs"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
            title="Heading 2"
          >
            <Heading1 className="w-3.5 h-3.5" />
            <span>H2</span>
          </button>

          {/* Quick H3 button */}
          <button
            type="button"
            onClick={() => setBlockFormat(currentBlock === "h3" ? "p" : "h3")}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-extrabold font-mono transition-all flex items-center gap-1 cursor-pointer ${
              currentBlock === "h3"
                ? "bg-[#305EFF] text-white shadow-2xs"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
            title="Heading 3"
          >
            <Heading2 className="w-3.5 h-3.5" />
            <span>H3</span>
          </button>

          <div className="h-5 w-px bg-slate-300 my-auto mx-0.5" />

          {/* Bold */}
          <button
            type="button"
            onClick={() => executeCommand("bold")}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isBold
                ? "bg-[#305EFF] text-white shadow-2xs"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
            title="Bold (Ctrl+B)"
          >
            <Bold className="w-3.5 h-3.5" />
          </button>

          {/* Italic */}
          <button
            type="button"
            onClick={() => executeCommand("italic")}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isItalic
                ? "bg-[#305EFF] text-white shadow-2xs"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
            title="Italic (Ctrl+I)"
          >
            <Italic className="w-3.5 h-3.5" />
          </button>

          {/* Underline */}
          <button
            type="button"
            onClick={() => executeCommand("underline")}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isUnderline
                ? "bg-[#305EFF] text-white shadow-2xs"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
            title="Underline (Ctrl+U)"
          >
            <Underline className="w-3.5 h-3.5" />
          </button>

          <div className="h-5 w-px bg-slate-300 my-auto mx-0.5" />

          {/* Bullet list */}
          <button
            type="button"
            onClick={() => executeCommand("insertUnorderedList")}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
            title="Bullet List (• List)"
          >
            <List className="w-3.5 h-3.5" />
          </button>

          {/* Numbered list */}
          <button
            type="button"
            onClick={() => executeCommand("insertOrderedList")}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
            title="Numbered List (1. List)"
          >
            <ListOrdered className="w-3.5 h-3.5" />
          </button>

          {/* Blockquote */}
          <button
            type="button"
            onClick={() => setBlockFormat("blockquote")}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
            title="Quote Box (Blockquote)"
          >
            <Quote className="w-3.5 h-3.5" />
          </button>

          {/* Link */}
          <button
            type="button"
            onClick={handleInsertLink}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
            title="Insert Link"
          >
            <LinkIcon className="w-3.5 h-3.5" />
          </button>

          {/* Image Insert/Upload */}
          <button
            type="button"
            onClick={() => {
              updateToolbarState();
              setShowImageModal(true);
            }}
            className="px-3 py-1.5 rounded-xl bg-[#305EFF]/10 hover:bg-[#305EFF]/20 text-[#305EFF] border border-[#305EFF]/20 transition-all flex items-center gap-1.5 font-extrabold text-xs cursor-pointer shadow-2xs"
            title="Insert / Upload Article Image"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Image</span>
          </button>

          {/* Clear formatting */}
          <button
            type="button"
            onClick={() => executeCommand("removeFormat")}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-slate-100 transition-all cursor-pointer"
            title="Clear Formatting"
          >
            <RemoveFormatting className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Toolbar Controls: Mode toggle & Preview */}
        <div className="flex items-center gap-2">
          {/* Visual vs HTML Mode switch */}
          <div className="inline-flex rounded-xl border border-slate-200 bg-white p-0.5 text-xs font-bold">
            <button
              type="button"
              onClick={() => setMode("visual")}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                mode === "visual"
                  ? "bg-[#305EFF] text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Visual
            </button>
            <button
              type="button"
              onClick={() => setMode("html")}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                mode === "html"
                  ? "bg-[#305EFF] text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>HTML</span>
            </button>
          </div>

          {onPreviewClick && (
            <button
              type="button"
              onClick={onPreviewClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:border-[#305EFF] text-slate-700 hover:text-[#305EFF] rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
          )}
        </div>
      </div>

      {/* Upload Feedback Banners */}
      {isUploading && (
        <div className="bg-[#305EFF]/10 border-b border-[#305EFF]/20 p-2.5 px-4 flex items-center gap-2 text-xs font-bold text-[#305EFF]">
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
          <span>Uploading article image to cloud server...</span>
        </div>
      )}

      {uploadSuccess && (
        <div className="bg-emerald-50 border-b border-emerald-200 p-2.5 px-4 flex items-center gap-2 text-xs font-bold text-emerald-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{uploadSuccess}</span>
        </div>
      )}

      {uploadError && (
        <div className="bg-red-50 border-b border-red-200 p-2.5 px-4 flex items-center gap-2 text-xs font-bold text-red-800">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{uploadError}</span>
        </div>
      )}

      {/* ── EDITOR MAIN CONTENT AREA ── */}
      <div className="relative bg-white min-h-[360px]">
        {mode === "visual" ? (
          /* WYSIWYG ContentEditable Area (Type normally like Google Docs!) */
          <div
            ref={editorRef}
            contentEditable
            onInput={handleEditorInput}
            onKeyUp={updateToolbarState}
            onMouseUp={updateToolbarState}
            onBlur={handleEditorInput}
            className="w-full min-h-[360px] p-5 sm:p-7 text-slate-900 text-base leading-relaxed focus:outline-none font-sans
              [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-extrabold [&>h2]:text-slate-900 [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:border-l-4 [&>h2]:border-[#305EFF] [&>h2]:pl-3
              [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-2
              [&>p]:text-slate-700 [&>p]:leading-relaxed [&>p]:mb-4
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-1 [&>ul]:mb-4 [&>ul]:text-slate-700
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-1 [&>ol]:mb-4 [&>ol]:text-slate-700
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#305EFF] [&>blockquote]:bg-[#305EFF]/5 [&>blockquote]:p-4 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:my-4
              [&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:font-mono [&>pre]:text-xs [&>pre]:my-4
              [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-xl [&_img]:my-4 [&_img]:border [&_img]:border-slate-200"
            style={{ minHeight: "360px" }}
          />
        ) : (
          /* Raw HTML Mode (For power users) */
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={16}
            placeholder="<p>Write raw HTML here...</p>"
            className="w-full p-5 bg-slate-900 text-slate-100 text-xs font-mono focus:outline-none resize-y leading-relaxed"
          />
        )}
      </div>

      {/* Word Count / Info Footer */}
      <div className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500 font-medium select-none gap-2">
        <div className="flex items-center gap-4">
          <span>Words: {value.replace(/<[^>]+>/g, " ").trim() ? value.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length : 0}</span>
          <span>Characters: {value.replace(/<[^>]+>/g, "").length}</span>
        </div>
        <div className="flex items-center gap-1 text-[#305EFF] font-sans font-semibold">
          <Sparkles className="w-3 h-3" />
          <span>Rich Text Visual Editor Active</span>
        </div>
      </div>

      {/* ── IMAGE INSERTION MODAL ── */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0B1A2E] rounded-3xl border border-slate-200 dark:border-white/10 p-6 max-w-md w-full shadow-2xl space-y-5 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white font-display">
                  Insert Article Image
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold cursor-pointer p-1"
              >
                ✕
              </button>
            </div>

            {/* Option 1: Direct File Upload */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                Option 1: Upload from Device
              </label>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="w-full p-4 border-2 border-dashed border-[#305EFF]/40 bg-[#305EFF]/5 hover:bg-[#305EFF]/10 rounded-2xl transition-all text-center cursor-pointer flex flex-col items-center gap-1 group"
              >
                <UploadCloud className="w-6 h-6 text-[#305EFF] mb-0.5" />
                <span className="text-xs font-extrabold text-[#305EFF]">
                  {isUploading ? "Uploading to Cloud..." : "Click to Choose Image File"}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">PNG, JPG, WebP up to 5MB</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
              <span>OR</span>
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
            </div>

            {/* Option 2: Image URL */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                Option 2: Paste Image URL
              </label>
              <input
                type="text"
                value={externalImageUrl}
                onChange={(e) => setExternalImageUrl(e.target.value)}
                placeholder="https://images.unsplash.com/... or https://..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-xs text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#305EFF]"
              />
              <input
                type="text"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                placeholder="Image description (alt text)..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-xs text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#305EFF]"
              />
              <button
                type="button"
                onClick={handleInsertExternalUrl}
                disabled={!externalImageUrl.trim()}
                className="w-full py-2.5 px-4 rounded-xl bg-[#305EFF] hover:bg-[#2550E0] text-white text-xs font-extrabold shadow-sm transition-all disabled:opacity-40 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Insert URL Image</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
