import React from "react";
import type { Metadata } from "next";
import CountryLandingClient from "@/components/country/CountryLandingClient";
import { countryLandingData } from "@/data/countryLandingData";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

const config = countryLandingData.usa;

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  alternates: {
    canonical: config.seo.canonical,
  },
  openGraph: {
    title: config.seo.title,
    description: config.seo.description,
    url: `https://mitsafe.com${config.seo.canonical}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.title,
    description: config.seo.description,
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: config.countryName, item: config.seo.canonical },
];

export default function UsaPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <CountryLandingClient config={config} />
    </>
  );
}
