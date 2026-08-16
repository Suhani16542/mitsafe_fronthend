import React from "react";
import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mitsafe's mission, our elite engineering team, and our core development principles.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Mitsafe",
    description:
      "Learn about Mitsafe's mission, our elite engineering team, and our core development principles.",
    url: "https://mitsafe.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mitsafe",
    description:
      "Learn about Mitsafe's mission, our elite engineering team, and our core development principles.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "About Us", item: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <AboutClient />
    </>
  );
}
