"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MovingStripProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function MovingStrip({
  items,
  direction = "left",
  speed = 30,
}: MovingStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate total layout width division
    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: direction === "left" ? -totalWidth : 0,
      ease: "none",
      duration: speed,
      repeat: -1,
    });

    // Handle mouseenter & mouseleave smoothly using timeScale tweening
    const handleMouseEnter = () => {
      gsap.to(tween, { timeScale: 0, duration: 0.6, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(tween, { timeScale: 1, duration: 0.6, ease: "power2.out" });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      tween.kill();
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full relative bg-[#E2E8F0] border-y border-slate-300 py-4 backdrop-blur-md z-20 select-none shadow-sm"
    >
      <div
        ref={trackRef}
        className="flex gap-16 whitespace-nowrap w-max text-slate-700 uppercase tracking-widest font-display text-sm md:text-lg font-bold"
      >
        {/* Render twice for continuous wrapping loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 cursor-pointer">
            <span className="text-[#A78BFA] animate-pulse">✦</span>
            <span className="hover:text-[#A78BFA] transition-colors duration-250">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
