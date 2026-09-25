import React from "react";
import type { Metadata } from "next";
import AustraliaLandingClient from "./AustraliaLandingClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Software Development Company in Australia | Custom Software, ERP & CRM | Mitsafe",
  description:
    "Mitsafe Australia empowers businesses across Sydney, Melbourne, Brisbane, Perth & Adelaide with bespoke enterprise software, ERP, CRM, ATO Single Touch Payroll (STP) integrations, cloud architecture and digital transformation.",
  keywords: [
    "Software Development Company in Australia",
    "Custom Software Development Australia",
    "Software Company Sydney",
    "Software Company Melbourne",
    "Web Development Australia",
    "Mobile App Development Australia",
    "ERP Software Australia",
    "CRM Software Australia",
    "POS Software Australia",
    "E-commerce Development Australia",
    "Business Automation Australia",
    "AI Solutions Australia",
    "Cloud Solutions Australia",
    "Digital Transformation Australia",
    "IT Solutions Australia",
    "Custom Business Software Australia",
    "ATO STP Software Australia",
    "Privacy Act Compliant Software",
  ],
  alternates: {
    canonical: "/australia",
  },
  openGraph: {
    title: "Software Development Company in Australia | Custom Software, ERP & CRM | Mitsafe",
    description:
      "Mitsafe Australia empowers businesses across Sydney, Melbourne, Brisbane, Perth & Adelaide with bespoke enterprise software, ERP, CRM, ATO Single Touch Payroll (STP) integrations, cloud architecture and digital transformation.",
    url: "https://www.mitsafe.com/australia",
    type: "website",
    siteName: "Mitsafe Australia",
    locale: "en_AU",
    images: [
      {
        url: "https://www.mitsafe.com/images/australia_hero_1.jpg",
        width: 1200,
        height: 630,
        alt: "Mitsafe Australia - Business Software & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Australia | Custom Software, ERP & CRM | Mitsafe",
    description:
      "Mitsafe Australia empowers businesses across Sydney, Melbourne, Brisbane, Perth & Adelaide with bespoke enterprise software, ERP, CRM, ATO Single Touch Payroll (STP) integrations, cloud architecture and digital transformation.",
    images: ["https://www.mitsafe.com/images/australia_hero_1.jpg"],
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Australia Enterprise Solutions", item: "/australia" },
];

export default function AustraliaPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <AustraliaLandingClient />
    </>
  );
}

