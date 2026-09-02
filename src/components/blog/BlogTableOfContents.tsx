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
        rootMargin: "-130px 0% -60% 0%",
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
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (onItemClick) onItemClick();
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Table of Content"
      className={`w-full bg-white dark:bg-[#0B1A2E] rounded-2xl border border-slate-200 dark:border-white/10 p-5 text-left transition-all flex flex-col overflow-hidden ${className}`}
    >
      {/* TOC Header */}
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-white/10 shrink-0">
        <div className="w-6 h-6 rounded-lg bg-[#305EFF]/10 text-[#305EFF] flex items-center justify-center">
          <ListOrdered className="w-3.5 h-3.5" />
        </div>
        <div className="text-xs font-extrabold font-mono uppercase tracking-wider text-[#0F172A] dark:text-white">
          Table of Content
        </div>
      </div>

      {/* Headings List */}
      <ul
        data-lenis-prevent
        className="space-y-1 text-xs overflow-y-auto mitsafe-scrollbar flex-1 min-h-0 pr-1.5"
      >
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          const isH3 = item.level === 3;
          const isH4 = item.level === 4;
          const isH5Or6 = item.level >= 5;

          return (
            <li
              key={`${item.id}-${idx}`}
              style={{
                paddingLeft: isH5Or6 ? "1.75rem" : isH4 ? "1.25rem" : isH3 ? "0.75rem" : "0rem",
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
