import React from "react";
import type { Metadata } from "next";
import NewZealandLandingClient from "./NewZealandLandingClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Software & Web Development Company in New Zealand | Mitsafe Auckland",
  description:
    "Mitsafe delivers modern web applications, scalable SaaS platforms, mobile app development, Windcave integration, and AI automation for Kiwi enterprises across Auckland, Wellington, Christchurch, and Waikato.",
  alternates: {
    canonical: "/new-zealand",
  },
  openGraph: {
    title: "Software & Web Development Company in New Zealand | Mitsafe",
    description:
      "Mitsafe delivers modern web applications, scalable SaaS platforms, mobile app development, and AI automation for New Zealand enterprises.",
    url: "https://mitsafe.com/new-zealand",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & Web Development in New Zealand | Mitsafe",
    description:
      "Modern web applications, scalable SaaS platforms, and AI automation for Kiwi enterprises.",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "New Zealand", item: "/new-zealand" },
];

export default function NewZealandPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <NewZealandLandingClient />
    </>
  );
}
