"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { AdminAuthProvider, useAdminAuth } from "@/context/AdminAuthContext";

function AdminLayoutContent({
  children,
  initialAuthenticated,
}: {
  children: React.ReactNode;
  initialAuthenticated?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAdminAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const isLoginPage = pathname === "/admin/login";

  // Protection Logic Effect
  useEffect(() => {
    if (!isLoading) {
      if (isLoginPage) {
        if (isAuthenticated) {
          router.replace("/admin/blogs");
        }
      } else {
        if (!isAuthenticated) {
          const redirectUrl =
            pathname && pathname !== "/admin" && pathname !== "/admin/"
              ? `/admin/login?from=${encodeURIComponent(pathname)}`
              : "/admin/login";
          router.replace(redirectUrl);
        }
      }
    }
  }, [pathname, isLoginPage, isAuthenticated, isLoading, router]);

  // If on login route
  if (isLoginPage) {
    if (isLoading) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#305EFF] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-semibold text-slate-500 font-mono">
              Verifying Session...
            </p>
          </div>
        </div>
      );
    }
    if (isAuthenticated) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#305EFF] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-semibold text-slate-500 font-mono">
              Redirecting to Dashboard...
            </p>
          </div>
        </div>
      );
    }
    return <>{children}</>;
  }

  // Protected Admin Routes Loading State
  if (isLoading && !initialAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-[#305EFF] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-slate-500 font-mono">
            Verifying Admin Session...
          </p>
        </div>
      </div>
    );
  }

  // If unauthenticated, show transition state while router redirects
  if (!isAuthenticated && !isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-[#305EFF] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-semibold text-slate-500 font-mono">
            Access Denied. Redirecting to Login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex font-sans antialiased selection:bg-[#305EFF]/20 selection:text-[#305EFF]">
      {/* Sidebar */}
      <AdminSidebar
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Viewport Column */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header */}
        <AdminHeader
          onToggleMobileMenu={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />

        {/* Content Body Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function AdminClientLayout({
  children,
  initialAuthenticated,
}: {
  children: React.ReactNode;
  initialAuthenticated?: boolean;
}) {
  return (
    <AdminAuthProvider>
      <AdminLayoutContent initialAuthenticated={initialAuthenticated}>
        {children}
      </AdminLayoutContent>
    </AdminAuthProvider>
  );
}
