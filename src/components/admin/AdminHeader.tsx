"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAdminAuth } from "@/context/AdminAuthContext";
import {
  Search,
  Bell,
  Menu,
  ChevronDown,
  Plus,
  ExternalLink,
  ShieldCheck,
  User,
  Settings,
  LogOut,
} from "lucide-react";

interface AdminHeaderProps {
  onToggleMobileMenu: () => void;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export function getHeaderTitleByPath(pathname: string): { title: string; subtitle: string } {
  if (pathname === "/admin/blogs/create") {
    return {
      title: "Create New Blog",
      subtitle: "Write, format, and publish high-impact articles",
    };
  }
  if (pathname.startsWith("/admin/blogs/edit")) {
    return {
      title: "Edit Blog Post",
      subtitle: "Update blog details, content formatting, and status",
    };
  }
  if (pathname.startsWith("/admin/blogs/categories")) {
    return {
      title: "Category Management",
      subtitle: "Organize blog content into structured industry categories",
    };
  }
  return {
    title: "Blog Management Dashboard",
    subtitle: "Overview of published articles, drafts, and visitor metrics",
  };
}

export default function AdminHeader({
  onToggleMobileMenu,
  searchQuery = "",
  onSearchChange,
}: AdminHeaderProps) {
  const pathname = usePathname();
  const { logout } = useAdminAuth();
  const { title, subtitle } = getHeaderTitleByPath(pathname);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-slate-200/90 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20 font-sans text-slate-800 shadow-2xs">
      {/* Left Area: Mobile Menu Toggle & Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex flex-col text-left">
          <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight font-display leading-none">
            {title}
          </h1>
          <p className="text-xs text-slate-500 font-medium hidden sm:block mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right Area: Search, Create Quick CTA, Notifications, Profile */}
      <div className="flex items-center gap-2.5 sm:gap-4">
        {/* Search Input Box */}
        {onSearchChange && (
          <div className="relative hidden md:block w-64 lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search blogs, authors, tags..."
              className="w-full pl-9 pr-3.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50/70 focus:bg-white text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#305EFF] transition-all"
            />
          </div>
        )}

        {/* Quick Create CTA Button */}
        {pathname !== "/admin/blogs/create" && (
          <Link
            href="/admin/blogs/create"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#305EFF] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#305EFF]/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>New Blog</span>
          </Link>
        )}

        {/* Notification Bell Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
            className="relative p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#305EFF] ring-2 ring-white animate-pulse" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl py-3 px-4 z-50 text-left font-sans animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                <span className="text-xs font-bold text-slate-900">Notifications</span>
                <span className="text-[10px] font-bold text-[#305EFF] bg-[#305EFF]/10 px-2 py-0.5 rounded-full">
                  2 New
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-semibold text-slate-800">New draft saved</p>
                  <p className="text-[11px] text-slate-500">"Building Autonomous AI Agents" updated 10m ago</p>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-semibold text-slate-800">Category Active</p>
                  <p className="text-[11px] text-slate-500">AI & Automation category stats synchronized</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-6 w-px bg-slate-200 hidden sm:block" />

        {/* Admin Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 flex items-center justify-center shrink-0">
              <User className="w-4 h-4 text-slate-600" />
            </div>
            <span className="text-xs font-bold text-slate-800 hidden sm:inline-block">
              Admin Manager
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:inline-block" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-60 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 text-left font-sans animate-in fade-in zoom-in-95 duration-150">
              <div className="px-4 py-2.5 border-b border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 text-slate-600 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-slate-600" />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate">Admin Manager</p>
                  <p className="text-[10px] text-slate-500 font-medium truncate" title="moderntechnologies12@gmail.com">
                    moderntechnologies12@gmail.com
                  </p>
                </div>
              </div>
              <div className="py-1 text-xs">
                <Link
                  href="/admin/blogs"
                  onClick={() => setShowUserMenu(false)}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>Dashboard Overview</span>
                </Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 flex items-center gap-2 text-red-600 font-semibold transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
