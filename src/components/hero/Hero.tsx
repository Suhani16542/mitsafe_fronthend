"use client";

import { heroServices } from "@/data/heroServices";
import { useHeroSlider } from "@/hooks/useHeroSlider";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { StatsBar } from "./StatsBar";
import { FeatureBar } from "./FeatureBar";
import { PaginationDots } from "./PaginationDots";
import { NavigationArrows } from "./NavigationArrows";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Hero() {
  const { index, next, prev, goToIndex, pause, resume } = useHeroSlider({
    length: heroServices.length,
    autoPlayMs: 5000, // Automatic slide transition every 5 seconds
  });

  const service = heroServices[index];

  return (
    <section
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="relative overflow-hidden bg-white"
    >
      <HeroBackground category={service.category} />

      {/* Floating Side Navigation Arrows (Left & Right Edge) */}
      <button
        onClick={prev}
        aria-label="Previous Service"
        className="absolute left-2 sm:left-5 top-[38%] sm:top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-slate-700 shadow-lg backdrop-blur-md transition-all hover:bg-[#0052FF] hover:text-white hover:border-[#0052FF] hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={next}
        aria-label="Next Service"
        className="absolute right-2 sm:right-5 top-[38%] sm:top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-slate-700 shadow-lg backdrop-blur-md transition-all hover:bg-[#0052FF] hover:text-white hover:border-[#0052FF] hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-32 sm:pt-36 lg:px-8">
        {/* Two-column layout */}
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
          <div>
            <HeroContent service={service} index={index} total={heroServices.length} />
          </div>

          <div>
            <HeroImage service={service} />
          </div>
        </div>

        {/* Service FeatureBar icon strip */}
        <div className="w-full max-w-6xl mx-auto mt-8 sm:mt-10">
          <FeatureBar services={heroServices} activeIndex={index} onSelect={goToIndex} />
        </div>

        {/* Full-width statistics strip */}
        <div className="mt-8">
          <StatsBar stats={service.stats} id={service.id} />
        </div>
      </div>
    </section>
  );
}