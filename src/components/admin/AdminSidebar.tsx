"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  FolderTree,
  Settings,
  X,
  ExternalLink,
  ChevronRight,
  LogOut,
  Sparkles,
} from "lucide-react";

interface AdminSidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const ADMIN_NAV_ITEMS = [
  {
    name: "Dashboard",
    href: "/admin/blogs",
    icon: LayoutDashboard,
    badge: null,
  },
  {
    name: "Blogs",
    href: "/admin/blogs",
    icon: FileText,
    badge: "6",
  },
  {
    name: "Create Blog",
    href: "/admin/blogs/create",
    icon: PlusCircle,
    badge: "New",
  },
  {
    name: "Categories",
    href: "/admin/blogs/categories",
    icon: FolderTree,
    badge: null,
  },
  {
    name: "Settings",
    href: "#settings",
    icon: Settings,
    badge: null,
    isModalAction: true,
  },
];

export default function AdminSidebar({
  mobileOpen = false,
  onCloseMobile,
}: AdminSidebarProps) {
  const pathname = usePathname();

  const sidebarContent = (
    <aside className="w-64 bg-white border-r border-slate-200/90 flex flex-col h-full select-none font-sans text-slate-800">
      {/* Brand Header */}
      <div className="h-16 px-6 border-b border-slate-200/80 flex items-center justify-between shrink-0">
        <Link href="/admin/blogs" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#305EFF] flex items-center justify-center text-white font-black text-sm shadow-md shadow-[#305EFF]/20 group-hover:scale-105 transition-transform">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 text-sm tracking-tight font-display">
              Mitsafe <span className="text-[#305EFF]">CMS</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 font-mono -mt-0.5">
              Blog Admin
            </span>
          </div>
        </Link>

        {/* Mobile Close Button */}
        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Main Navigation Items */}
      <div className="flex-1 overflow-y-auto px-3.5 py-5 space-y-1.5">
        <div className="px-3 pb-2 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest font-mono">
          Content Management
        </div>

        {ADMIN_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/admin/blogs"
              ? pathname === "/admin/blogs" || pathname === "/admin"
              : item.href !== "#settings" && pathname.startsWith(item.href);

          if (item.isModalAction) {
            return (
              <button
                key={item.name}
                onClick={() => alert("Settings configuration panel is available in backend integration phase.")}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#305EFF] transition-colors" />
                  <span>{item.name}</span>
                </div>
              </button>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onCloseMobile}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                isActive
                  ? "bg-[#305EFF] text-white shadow-md shadow-[#305EFF]/20 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 group-hover:text-[#305EFF]"
                  }`}
                />
                <span>{item.name}</span>
              </div>

              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono ${
                    isActive
                      ? "bg-white/20 text-white"
                      : item.badge === "New"
                      ? "bg-[#305EFF]/10 text-[#305EFF] border border-[#305EFF]/20"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

        <div className="pt-6 px-3 pb-2 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest font-mono">
          Quick Links
        </div>

        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-600 hover:text-[#305EFF] hover:bg-slate-50 transition-all group border border-slate-100"
        >
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#305EFF]" />
            <span>View Public Website</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#305EFF] transition-colors" />
        </Link>
      </div>

      {/* Admin User Footer Profile Card */}
      <div className="p-3.5 border-t border-slate-200/80 bg-slate-50/50">
        <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                alt="Admin Avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-slate-900 truncate">
                Admin Manager
              </span>
              <span className="text-[10px] font-medium text-slate-500 truncate">
                admin@mitsafe.com
              </span>
            </div>
          </div>
          <button
            onClick={() => alert("Admin Session Options")}
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
            title="Session Info"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <div className="hidden lg:block w-64 shrink-0 h-screen sticky top-0 z-30">
        {sidebarContent}
      </div>

      {/* Mobile Drawer Backdrop & Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-50 animate-in slide-in-from-left duration-300">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
