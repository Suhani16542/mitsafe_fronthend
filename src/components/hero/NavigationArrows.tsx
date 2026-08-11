"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavigationArrows({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Previous slide"
        onClick={onPrev}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-slate-300 hover:text-slate-700 hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-0 focus-visible:outline-none"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        aria-label="Next slide"
        onClick={onNext}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-slate-300 hover:text-slate-700 hover:bg-slate-50 hover:shadow-sm focus:outline-none focus:ring-0 focus-visible:outline-none"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
