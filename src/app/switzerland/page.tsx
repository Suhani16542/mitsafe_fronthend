import React from "react";
import type { Metadata } from "next";
import SwitzerlandLandingClient from "./SwitzerlandLandingClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Swiss Enterprise Software, FINMA Compliance, QR-Bill ERP & Cloud Solutions | Mitsafe Switzerland",
  description:
    "High-precision custom software development, revFADP-compliant cloud architectures, Swiss QR-Bill (ISO 20022) automation, and FINMA-ready wealthtech engineering for Swiss enterprises across Zurich, Geneva, Basel, and Zug.",
  alternates: {
    canonical: "/switzerland",
  },
  openGraph: {
    title: "Swiss Enterprise Software, FINMA Compliance & ERP Solutions | Mitsafe",
    description:
      "Precision cloud engineering, Swiss QR-Bill ERP systems, and revFADP data sovereignty for Swiss corporations and multi-cantonal enterprises.",
    url: "https://www.mitsafe.com/switzerland",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swiss Enterprise Software & ERP Solutions | Mitsafe Switzerland",
    description:
      "Precision cloud engineering, Swiss QR-Bill ERP systems, and revFADP data sovereignty for Swiss corporations.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Switzerland", item: "/switzerland" },
];

export default function SwitzerlandPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <SwitzerlandLandingClient />
    </>
  );
}
