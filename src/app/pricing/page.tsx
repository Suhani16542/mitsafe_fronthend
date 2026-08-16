import React, { Suspense } from "react";
import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Pricing Plans & Estimates",
  description:
    "Explore flexible pricing packages and structured IT solutions tailored to your business needs, from startup websites to enterprise architectures.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing Plans & Estimates | Mitsafe",
    description:
      "Explore flexible pricing packages and structured IT solutions tailored to your business needs, from startup websites to enterprise architectures.",
    url: "https://mitsafe.com/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans & Estimates | Mitsafe",
    description:
      "Explore flexible pricing packages and structured IT solutions tailored to your business needs, from startup websites to enterprise architectures.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Pricing", item: "/pricing" },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <Suspense
        fallback={
          <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-[#FBFDFE] text-slate-500 font-display font-medium">
            Loading Pricing...
          </div>
        }
      >
        <PricingClient />
      </Suspense>
    </>
  );
}
