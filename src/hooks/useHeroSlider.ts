"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseHeroSliderOptions {
  length: number;
  autoPlayMs?: number;
  initialIndex?: number;
}

export type SlideDirection = 1 | -1;

export function useHeroSlider({ length, autoPlayMs = 300000, initialIndex = 0 }: UseHeroSliderOptions) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number, dir: SlideDirection) => {
      setDirection(dir);
      setIndex(((next % length) + length) % length);
    },
    [length]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);
  const goToIndex = useCallback(
    (target: number) => goTo(target, target > index ? 1 : -1),
    [goTo, index]
  );

  useEffect(() => {
    if (isPaused || autoPlayMs <= 0) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % length);
    }, autoPlayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, autoPlayMs, length]);

  return {
    index,
    direction,
    next,
    prev,
    goToIndex,
    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),
  };
}
