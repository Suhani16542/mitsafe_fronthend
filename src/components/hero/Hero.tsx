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

export function Hero() {
  const { index, next, prev, goToIndex, pause, resume } = useHeroSlider({
    length: heroServices.length,
    autoPlayMs: 6000,
  });

  const service = heroServices[index];

  return (
    <section
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="relative overflow-hidden bg-white"
    >
      <HeroBackground category={service.category} />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-8 lg:pt-28">
        {/* top: content left, image right — matches reference two-column layout */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <HeroContent service={service} index={index} total={heroServices.length} />

            <div className="relative z-10 mt-8 flex items-center gap-4">
              <NavigationArrows onPrev={prev} onNext={next} />
              <PaginationDots
                total={heroServices.length}
                activeIndex={index}
                onSelect={goToIndex}
              />
            </div>
          </div>

          <HeroImage service={service} />
        </div>

        {/* bottom: full-width icon strip, then full-width stat strip — matches reference */}
        <FeatureBar services={heroServices} activeIndex={index} onSelect={goToIndex} />
        <StatsBar stats={service.stats} id={service.id} />
      </div>
    </section>
  );
}