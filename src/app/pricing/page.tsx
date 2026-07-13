import React, { Suspense } from "react";
import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing Plans - Mitsafe",
  description: "Explore our flexible pricing plans and structured IT solutions tailored to your business needs, from basic portfolios to advanced custom architectures.",
};

export default function PricingPage() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-[#FBFDFE] text-slate-500 font-display font-medium">
        Loading Pricing...
      </div>
    }>
      <PricingClient />
    </Suspense>
  );
}
