import React from "react";
import type { Metadata } from "next";
import UkLandingClient from "./UkLandingClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Software Development Company in UK | Custom Software, ERP & CRM | Mitsafe",
  description:
    "Mitsafe UK empowers British enterprises across London, Manchester, Birmingham & Edinburgh with bespoke enterprise software, ERP, CRM, HMRC MTD finance integrations, cloud architecture and digital transformation.",
  keywords: [
    "Software Development Company in UK",
    "Custom Software Development UK",
    "Software Company London",
    "Web Development UK",
    "Mobile App Development UK",
    "ERP Software UK",
    "CRM Software UK",
    "POS Software UK",
    "E-commerce Development UK",
    "Business Automation UK",
    "AI Solutions UK",
    "Cloud Solutions UK",
    "Digital Transformation UK",
    "IT Solutions UK",
    "Custom Business Software UK",
    "HMRC MTD Software UK",
    "UK GDPR Compliant Software",
  ],
  alternates: {
    canonical: "/uk",
  },
  openGraph: {
    title: "Software Development Company in UK | Custom Software, ERP & CRM | Mitsafe",
    description:
      "Mitsafe UK empowers British enterprises across London, Manchester, Birmingham & Edinburgh with bespoke enterprise software, ERP, CRM, HMRC MTD finance integrations, cloud architecture and digital transformation.",
    url: "https://mitsafe.com/uk",
    type: "website",
    siteName: "Mitsafe UK",
    locale: "en_GB",
    images: [
      {
        url: "https://mitsafe.com/images/uk_hero_1.jpg",
        width: 1200,
        height: 630,
        alt: "Mitsafe UK - Business Software & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in UK | Custom Software, ERP & CRM | Mitsafe",
    description:
      "Mitsafe UK empowers British enterprises across London, Manchester, Birmingham & Edinburgh with bespoke enterprise software, ERP, CRM, HMRC MTD finance integrations, cloud architecture and digital transformation.",
    images: ["https://mitsafe.com/images/uk_hero_1.jpg"],
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "UK Enterprise Solutions", item: "/uk" },
];

export default function UkPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <UkLandingClient />
    </>
  );
}

