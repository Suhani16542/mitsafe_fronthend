import React from "react";
import type { Metadata } from "next";
import TermsClient from "./TermsClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions governing your engagement with Mitsafe's software services, platforms, and products.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Mitsafe",
    description:
      "Read the Terms & Conditions governing your engagement with Mitsafe's software services, platforms, and products.",
    url: "https://mitsafe.com/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Mitsafe",
    description:
      "Read the Terms & Conditions governing your engagement with Mitsafe's software services, platforms, and products.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Terms & Conditions", item: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <TermsClient />
    </>
  );
}
