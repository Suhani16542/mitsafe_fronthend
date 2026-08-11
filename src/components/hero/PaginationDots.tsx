"use client";

import clsx from "clsx";

export function PaginationDots({
  total,
  activeIndex,
  onSelect,
}: {
  total: number;
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => onSelect(i)}
            className="group relative h-2.5 rounded-full transition-all"
            style={{ width: active ? 24 : 10 }}
          >
            <span
              className={clsx(
                "absolute inset-0 rounded-full transition-colors",
                active ? "bg-[#305EFF]" : "bg-slate-200 group-hover:bg-[#305EFF]"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
