"use client";

import React, { useEffect, useState } from "react";
import { ListOrdered, ChevronRight } from "lucide-react";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface BlogTableOfContentsProps {
  items: TocItem[];
  className?: string;
  onItemClick?: () => void;
}

export default function BlogTableOfContents({
  items,
  className = "",
  onItemClick,
}: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!items || items.length === 0) return;

    if (!activeId && items[0]) {
      setActiveId(items[0].id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0% -65% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveId(id);
    const yOffset = -110;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    if (onItemClick) onItemClick();
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Table of Content"
      className={`w-full bg-white dark:bg-[#0B1A2E] rounded-2xl border border-slate-200 dark:border-white/10 p-5 text-left transition-all ${className}`}
    >
      {/* TOC Header */}
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-white/10">
        <div className="w-6 h-6 rounded-lg bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center">
          <ListOrdered className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#0F172A] dark:text-white">
          Table of Content
        </h3>
      </div>

      {/* Headings List */}
      <ul className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1 text-xs">
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          const isH3 = item.level === 3;
          const isH4 = item.level >= 4;

          return (
            <li
              key={`${item.id}-${idx}`}
              style={{
                paddingLeft: isH4 ? "1.25rem" : isH3 ? "0.75rem" : "0rem",
              }}
            >
              <button
                type="button"
                onClick={() => handleScrollTo(item.id)}
                className={`w-full text-left py-2 px-2.5 rounded-xl transition-all flex items-start gap-1.5 cursor-pointer leading-snug ${
                  isActive
                    ? "bg-[#305EFF]/10 text-[#305EFF] font-bold border-l-2 border-[#305EFF]"
                    : "text-slate-600 dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 font-medium"
                }`}
              >
                <ChevronRight
                  className={`w-3 h-3 mt-0.5 shrink-0 transition-transform ${
                    isActive ? "text-[#305EFF] translate-x-0.5" : "text-slate-400 opacity-60"
                  }`}
                />
                <span className="line-clamp-2">{item.text}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
