"use client";

import React from "react";
import { FileText, CheckCircle2, Edit3, Star, TrendingUp } from "lucide-react";
import { BlogStats } from "@/types/adminBlog";

interface AdminStatsCardProps {
  stats: BlogStats;
}

export default function AdminStatsCard({ stats }: AdminStatsCardProps) {
  const statItems = [
    {
      title: "Total Blogs",
      value: stats.totalBlogs,
      label: "Articles in system",
      icon: FileText,
      iconColor: "text-[#305EFF]",
      bgColor: "bg-[#305EFF]/10",
      borderColor: "border-[#305EFF]/20",
    },
    {
      title: "Published",
      value: stats.publishedBlogs,
      label: "Live on website",
      icon: CheckCircle2,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200/80",
    },
    {
      title: "Drafts",
      value: stats.draftBlogs,
      label: "Work in progress",
      icon: Edit3,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200/80",
    },
    {
      title: "Featured Blogs",
      value: stats.featuredBlogs,
      label: "Pinned on homepage",
      icon: Star,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200/80",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 font-sans">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 font-mono tracking-wider uppercase">
                {item.title}
              </span>
              <div
                className={`w-9 h-9 rounded-xl ${item.bgColor} border ${item.borderColor} flex items-center justify-center ${item.iconColor}`}
              >
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
                {item.value}
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                {item.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
