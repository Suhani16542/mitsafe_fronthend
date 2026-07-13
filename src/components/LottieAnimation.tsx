"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

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
  const [animationData, setAnimationData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    // Normalize URL: replace '/embed/' with '/' to get the raw JSON URL
    let targetUrl = src;
    if (targetUrl.includes("/embed/")) {
      targetUrl = targetUrl.replace("/embed/", "/");
    }

    async function fetchAnimation(url: string, isFallback: boolean = false): Promise<void> {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Ensure response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && !contentType.includes("application/json") && !url.endsWith(".json")) {
          throw new Error("Response is not JSON");
        }

        const data = await response.json();
        
        if (isMounted) {
          setAnimationData(data);
          setLoading(false);
          setError(false);
        }
      } catch (err) {
        console.warn(`Failed to load Lottie animation from ${url}:`, err);
        
        if (!isFallback) {
          // If the remote URL failed, try the local fallback
          console.log("Attempting to load local fallback animation...");
          await fetchAnimation("/animations/hero-lottie.json", true);
        } else {
          // If the fallback also failed
          if (isMounted) {
            setError(true);
            setLoading(false);
          }
        }
      }
    }

    setLoading(true);
    fetchAnimation(targetUrl);

    return () => {
      isMounted = false;
    };
  }, [src]);

  // Handle loading and fetch errors gracefully so the page doesn't break
  if (error) {
    return (
      <div 
        className={`relative w-full h-full overflow-hidden flex items-center justify-center bg-slate-800/5 dark:bg-slate-200/5 rounded-lg ${className}`} 
        style={style}
      >
        <span className="text-xs text-slate-400 font-display">Animation Unavailable</span>
      </div>
    );
  }

  if (loading) {
    return (
      <div 
        className={`animate-pulse bg-slate-800/10 dark:bg-slate-200/10 rounded-lg w-full h-full min-h-[200px] flex items-center justify-center ${className}`}
        style={style}
      >
        <span className="text-xs text-slate-400 font-display">Loading Animation...</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`} style={style}>
      {animationData && (
        <DotLottieReact
          data={animationData}
          autoplay={autoplay}
          loop={loop}
          dotLottieRefCallback={dotLottieRefCallback}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
