import React, { Suspense } from "react";
import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Web Development Projects & Mobile App Development Portfolio",
  description:
    "Explore our web development portfolio, mobile app development projects, enterprise web applications, and custom software development case studies.",
  keywords: [
    "mobile app development",
    "mobile application development",
    "mobile app developers",
    "web development projects",
    "website development projects",
    "web application development",
    "web and app development",
    "custom app development projects",
    "software development case studies",
    "mobile app development portfolio",
    "web development portfolio",
    "full stack application development",
    "enterprise web applications",
    "ios and android app development",
    "custom software development portfolio",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Web Development Projects & Mobile App Development Portfolio | Mitsafe",
    description:
      "Explore our web development portfolio, mobile app development projects, enterprise web applications, and custom software development case studies.",
    url: "https://mitsafe.com/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Projects & Mobile App Development Portfolio | Mitsafe",
    description:
      "Explore our web development portfolio, mobile app development projects, enterprise web applications, and custom software development case studies.",
  },
  other: {
    keywords:
      "mobile app development, mobile application development, mobile app developers, web development projects, website development projects, web application development, web and app development, custom app development projects, software development case studies, mobile app development portfolio, web development portfolio, full stack application development, enterprise web applications, ios and android app development, custom software development portfolio",
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
