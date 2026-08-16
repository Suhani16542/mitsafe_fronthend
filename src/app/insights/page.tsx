import React from "react";
import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Engineering Insights & Guides",
  description:
    "Explore architectural analyses, performance strategies, cloud scaling, and AI engineering insights from the Mitsafe technical team.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Engineering Insights & Guides | Mitsafe",
    description:
      "Explore architectural analyses, performance strategies, cloud scaling, and AI engineering insights from the Mitsafe technical team.",
    url: "https://mitsafe.com/insights",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Insights & Guides | Mitsafe",
    description:
      "Explore architectural analyses, performance strategies, cloud scaling, and AI engineering insights from the Mitsafe technical team.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Insights", item: "/insights" },
];

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <InsightsClient />
    </>
  );
}
