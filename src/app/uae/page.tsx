import React from "react";
import type { Metadata } from "next";
import UaeLandingClient from "./UaeLandingClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Software Development Company in UAE | Custom Software, ERP & CRM | Mitsafe",
  description:
    "Mitsafe UAE helps businesses across Dubai, Abu Dhabi & the Emirates build, automate and scale digital operations with custom software, ERP, CRM, POS, e-commerce, cloud and AI solutions.",
  keywords: [
    "Software Development Company in UAE",
    "Custom Software Development UAE",
    "Software Company Dubai",
    "Web Development UAE",
    "Mobile App Development UAE",
    "ERP Software UAE",
    "CRM Software UAE",
    "POS Software UAE",
    "E-commerce Development UAE",
    "Business Automation UAE",
    "AI Solutions UAE",
    "Cloud Solutions UAE",
    "Digital Transformation UAE",
    "IT Solutions UAE",
    "Custom Business Software UAE",
  ],
  alternates: {
    canonical: "/uae",
  },
  openGraph: {
    title: "Software Development Company in UAE | Custom Software, ERP & CRM | Mitsafe",
    description:
      "Mitsafe UAE helps businesses across Dubai, Abu Dhabi & the Emirates build, automate and scale digital operations with custom software, ERP, CRM, POS, e-commerce, cloud and AI solutions.",
    url: "https://mitsafe.com/uae",
    type: "website",
    siteName: "Mitsafe UAE",
    locale: "en_AE",
    images: [
      {
        url: "https://mitsafe.com/images/uae_hero_1.jpg",
        width: 1200,
        height: 630,
        alt: "Mitsafe UAE - Business Software & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in UAE | Custom Software, ERP & CRM | Mitsafe",
    description:
      "Mitsafe UAE helps businesses across Dubai, Abu Dhabi & the Emirates build, automate and scale digital operations with custom software, ERP, CRM, POS, e-commerce, cloud and AI solutions.",
    images: ["https://mitsafe.com/images/uae_hero_1.jpg"],
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "UAE Business Solutions", item: "/uae" },
];

export default function UaePage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <UaeLandingClient />
    </>
  );
}
