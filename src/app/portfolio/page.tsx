import React, { Suspense } from "react";
import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Our Exclusive portfolio - Mitsafe",
  description: "View some of our work and case studies for clients. We work to deliver success by building custom Web applications, branding, SEO, and more.",
};

export default function PortfolioPage() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-[#FBFDFE] text-slate-500 font-display font-medium">
        Loading Portfolio...
      </div>
    }>
      <PortfolioClient />
    </Suspense>
  );
}
