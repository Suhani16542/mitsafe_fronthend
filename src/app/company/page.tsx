import React from "react";
import type { Metadata } from "next";
import CompanyClient from "./CompanyClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Us – Software Development & IT Solutions Company",
  description:
    "Mitsafe is a software development and IT solutions company helping startups, growing businesses, and enterprises build scalable digital products across India and international markets.",
  keywords: [
    "About Mitsafe",
    "software development company",
    "IT solutions company",
    "custom web development",
    "mobile app development",
    "AI and automation company",
    "cloud infrastructure services",
    "enterprise software development",
    "UI UX design agency",
    "digital transformation",
    "technology solutions provider",
  ],
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "About Us – Software Development & IT Solutions Company | Mitsafe",
    description:
      "Mitsafe is a software development and IT solutions company helping startups, growing businesses, and enterprises build scalable digital products.",
    url: "https://mitsafe.com/company",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Mitsafe – Software Development & IT Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – Software Development & IT Solutions Company | Mitsafe",
    description:
      "Mitsafe is a software development and IT solutions company helping startups, growing businesses, and enterprises build scalable digital products.",
    images: ["/twitter-image.png"],
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "About Us", item: "/company" },
];

export default function CompanyPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <CompanyClient />
    </>
  );
}
