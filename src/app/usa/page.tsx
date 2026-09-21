import React from "react";
import type { Metadata } from "next";
import UsaLandingClient from "./UsaLandingClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Software & Web App Development Company in USA | Mitsafe",
  description:
    "Mitsafe delivers premier custom web applications, mobile app development, cloud architecture, and AI automation for fast-growing US enterprises and startups.",
  alternates: {
    canonical: "/usa",
  },
  openGraph: {
    title: "Software & Web App Development Company in USA | Mitsafe",
    description:
      "Mitsafe delivers premier custom web applications, mobile app development, cloud architecture, and AI automation for fast-growing US enterprises and startups.",
    url: "https://mitsafe.com/usa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & Web App Development Company in USA | Mitsafe",
    description:
      "Mitsafe delivers premier custom web applications, mobile app development, cloud architecture, and AI automation for fast-growing US enterprises and startups.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "USA", item: "/usa" },
];

export default function UsaPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <UsaLandingClient />
    </>
  );
}

