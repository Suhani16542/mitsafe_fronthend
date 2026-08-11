"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/ModalContext";

export default function GetAQuotePage() {
  const router = useRouter();
  const { openModal } = useModal();

  useEffect(() => {
    // Open the global quote modal and redirect back to homepage
    openModal("quote");
    router.replace("/");
  }, [openModal, router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-[#305EFF] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-semibold text-slate-600">Opening Quote Form...</p>
      </div>
    </div>
  );
}
