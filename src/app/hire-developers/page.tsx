import React from "react";
import type { Metadata } from "next";
import HireDevelopersClient from "./HireDevelopersClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Hire Dedicated Software Developers",
  description:
    "Hire pre-vetted senior software engineers, frontend, backend, mobile app developers, and DevOps specialists. Fast onboarding within 48 hours.",
  alternates: {
    canonical: "/hire-developers",
  },
  openGraph: {
    title: "Hire Dedicated Software Developers | Mitsafe",
    description:
      "Hire pre-vetted senior software engineers, frontend, backend, mobile app developers, and DevOps specialists. Fast onboarding within 48 hours.",
    url: "https://mitsafe.com/hire-developers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated Software Developers | Mitsafe",
    description:
      "Hire pre-vetted senior software engineers, frontend, backend, mobile app developers, and DevOps specialists. Fast onboarding within 48 hours.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Hire Developers", item: "/hire-developers" },
];

const serviceSchema = generateServiceSchema({
  name: "Hire Dedicated Software Developers",
  description:
    "Scale your engineering team with pre-vetted full-stack, frontend, backend, and mobile software developers from Mitsafe.",
  url: "/hire-developers",
  serviceType: "Staff Augmentation & Dedicated Engineering Teams",
});

export default function HireDevelopersPage() {
  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema]} />
      <HireDevelopersClient />
    </>
  );
}
