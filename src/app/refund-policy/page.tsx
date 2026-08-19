import React from "react";
import type { Metadata } from "next";
import RefundPolicyClient from "./RefundPolicyClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Read the official Refund Policy for Mitsafe's software development, web & mobile applications, AI automation, cloud, and digital technology services.",
  alternates: {
    canonical: "https://mitsafe.com/refund-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Refund Policy | Mitsafe",
    description:
      "Read the official Refund Policy for Mitsafe's software development, web & mobile applications, AI automation, cloud, and digital technology services.",
    url: "https://mitsafe.com/refund-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Mitsafe",
    description:
      "Read the official Refund Policy for Mitsafe's software development, web & mobile applications, AI automation, cloud, and digital technology services.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Refund Policy", item: "/refund-policy" },
];

export default function RefundPolicyPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <RefundPolicyClient />
    </>
  );
}
