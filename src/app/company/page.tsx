import React from "react";
import type { Metadata } from "next";
import CompanyClient from "./CompanyClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn who we are, what we do, and why we exist. Mitsafe engineers premium systems, custom AI tools, and reliable cloud infrastructures.",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "Company | Mitsafe",
    description:
      "Learn who we are, what we do, and why we exist. Mitsafe engineers premium systems, custom AI tools, and reliable cloud infrastructures.",
    url: "https://mitsafe.com/company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company | Mitsafe",
    description:
      "Learn who we are, what we do, and why we exist. Mitsafe engineers premium systems, custom AI tools, and reliable cloud infrastructures.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Company", item: "/company" },
];

export default function CompanyPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <CompanyClient />
    </>
  );
}
