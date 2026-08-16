import React from "react";
import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Engineering Solutions",
  description:
    "Discover technical solutions from Mitsafe, including AI automation, custom software, enterprise SaaS platforms, cloud optimization, and cybersecurity.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Engineering Solutions | Mitsafe",
    description:
      "Discover technical solutions from Mitsafe, including AI automation, custom software, enterprise SaaS platforms, cloud optimization, and cybersecurity.",
    url: "https://mitsafe.com/solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Solutions | Mitsafe",
    description:
      "Discover technical solutions from Mitsafe, including AI automation, custom software, enterprise SaaS platforms, cloud optimization, and cybersecurity.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Solutions", item: "/solutions" },
];

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <SolutionsClient />
    </>
  );
}
