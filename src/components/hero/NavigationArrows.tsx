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
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        aria-label="Next slide"
        onClick={onNext}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
