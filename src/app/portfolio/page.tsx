import React, { Suspense } from "react";
import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Exclusive Portfolio & Case Studies",
  description:
    "View our verified software case studies, web applications, mobile platforms, eCommerce stores, and enterprise AI automation projects.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Exclusive Portfolio & Case Studies | Mitsafe",
    description:
      "View our verified software case studies, web applications, mobile platforms, eCommerce stores, and enterprise AI automation projects.",
    url: "https://mitsafe.com/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exclusive Portfolio & Case Studies | Mitsafe",
    description:
      "View our verified software case studies, web applications, mobile platforms, eCommerce stores, and enterprise AI automation projects.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Portfolio", item: "/portfolio" },
];

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <Suspense
        fallback={
          <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-[#FBFDFE] text-slate-500 font-display font-medium">
            Loading Portfolio...
          </div>
        }
      >
        <PortfolioClient />
      </Suspense>
    </>
  );
}
