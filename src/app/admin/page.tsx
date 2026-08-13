"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminIndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/blogs");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-[#305EFF] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-semibold text-slate-500 font-mono">
          Loading Admin Dashboard...
        </p>
      </div>
    </div>
  );
}
