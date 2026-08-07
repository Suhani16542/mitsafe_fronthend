"use client";

import { ServiceCategory } from "@/types/hero";

export function HeroBackground({ category }: { category: ServiceCategory }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white">
      {/* Pure Solid White Background #FFFFFF only */}
      <div className="absolute inset-0 bg-white" />
    </div>
  );
}

