import React from "react";
import type { Metadata } from "next";
import BlogListClient from "./BlogListClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Technical Blog & Engineering Journal",
  description:
    "Explore architectural analyses, performance strategies, and engineering insights written by the Mitsafe software engineering team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Technical Blog & Engineering Journal | Mitsafe",
    description:
      "Explore architectural analyses, performance strategies, and engineering insights written by the Mitsafe software engineering team.",
    url: "https://mitsafe.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Blog & Engineering Journal | Mitsafe",
    description:
      "Explore architectural analyses, performance strategies, and engineering insights written by the Mitsafe software engineering team.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Blog", item: "/blog" },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <BlogListClient />
    </>
  );
}
