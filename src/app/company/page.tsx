import React from "react";
import type { Metadata } from "next";
import CompanyClient from "./CompanyClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "IT Company & Software Development Company",
  description:
    "Mitsafe is a premier IT company, software company, and digital marketing agency delivering enterprise IT services, custom software, and digital transformation solutions.",
  keywords: [
    "it company",
    "software company",
    "digital marketing agency",
    "digital marketing company",
    "web development company",
    "software development company",
    "it consulting company",
    "custom software company",
    "enterprise it services",
    "technology solutions company",
    "digital transformation agency",
    "app development agency",
    "web design and development agency",
    "software engineering firm",
    "dedicated software agency",
  ],
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "IT Company & Software Development Company | Mitsafe",
    description:
      "Mitsafe is a premier IT company, software company, and digital marketing agency delivering enterprise IT services, custom software, and digital transformation solutions.",
    url: "https://mitsafe.com/company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Company & Software Development Company | Mitsafe",
    description:
      "Mitsafe is a premier IT company, software company, and digital marketing agency delivering enterprise IT services, custom software, and digital transformation solutions.",
  },
  other: {
    keywords:
      "it company, software company, digital marketing agency, digital marketing company, web development company, software development company, it consulting company, custom software company, enterprise it services, technology solutions company, digital transformation agency, app development agency, web design and development agency, software engineering firm, dedicated software agency",
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
