"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { setWasmUrl } from "@lottiefiles/dotlottie-react";

if (typeof window !== "undefined") {
  setWasmUrl("/dotlottie-player.wasm");
}

// Dynamically import the DotLottieReact player to disable SSR and enable lazy loading.
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-slate-800/10 dark:bg-slate-200/10 rounded-lg w-full h-full min-h-[200px] flex items-center justify-center">
        <span className="text-xs text-slate-400 font-display">Loading Animation...</span>
      </div>
    ),
  }
);

interface LottieAnimationProps {
  src?: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
  style?: React.CSSProperties;
  dotLottieRefCallback?: (dotLottie: any) => void;
}

export default function LottieAnimation({
  src = "https://lottie.host/09fd212f-fed9-423c-be64-4a513b3d9967/gzgD9fgfaf.json",
  autoplay = true,
  loop = true,
  className = "",
  style,
  dotLottieRefCallback,
}: LottieAnimationProps) {
  // Normalize URL: replace '/embed/' with '/' to get the raw JSON URL
  let targetUrl = src;
  if (targetUrl.includes("/embed/")) {
    targetUrl = targetUrl.replace("/embed/", "/");
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`} style={style}>
      <DotLottieReact
        src={targetUrl}
        autoplay={autoplay}
        loop={loop}
        dotLottieRefCallback={dotLottieRefCallback}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
