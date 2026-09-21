import React from "react";
import type { Metadata } from "next";
import NetherlandsLandingClient from "./NetherlandsLandingClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Software & Web Development Company in Netherlands | Mitsafe Amsterdam",
  description:
    "Mitsafe delivers modern web applications, scalable SaaS platforms, mobile app development, iDEAL integration, and AI automation for Dutch enterprises across Amsterdam, Rotterdam, Eindhoven, and Utrecht.",
  alternates: {
    canonical: "/netherlands",
  },
  openGraph: {
    title: "Software & Web Development Company in Netherlands | Mitsafe",
    description:
      "Mitsafe delivers modern web applications, scalable SaaS platforms, mobile app development, and AI automation for Dutch enterprises.",
    url: "https://mitsafe.com/netherlands",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & Web Development in Netherlands | Mitsafe",
    description:
      "Modern web applications, scalable SaaS platforms, and AI automation for Dutch enterprises.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Netherlands", item: "/netherlands" },
];

export default function NetherlandsPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <NetherlandsLandingClient />
    </>
  );
}
