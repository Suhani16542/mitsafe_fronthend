import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema } from "@/lib/jsonld";

const service = servicesData.find((s) => s.slug === "ui-ux-design");

export const metadata: Metadata = {
  title: "UI/UX Product Design & Design Systems",
  description:
    "Intuitive product interfaces, Figma design systems, rapid interactive prototypes, usability testing, and conversion-focused UX architecture.",
  alternates: {
    canonical: "/services/ui-ux-design",
  },
  openGraph: {
    title: "UI/UX Product Design & Design Systems | Mitsafe",
    description:
      "Intuitive product interfaces, Figma design systems, rapid interactive prototypes, usability testing, and conversion-focused UX architecture.",
    url: "https://mitsafe.com/services/ui-ux-design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Product Design & Design Systems | Mitsafe",
    description:
      "Intuitive product interfaces, Figma design systems, rapid interactive prototypes, usability testing, and conversion-focused UX architecture.",
  },
};

export default function UIUXDesignPage() {
  if (!service) notFound();

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: `/services/${service.slug}` },
    { name: service.title, item: `/services/${service.slug}` },
  ];

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    serviceType: "UI/UX Product Design & Prototyping",
  });

  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema, faqSchema].filter(Boolean)} />
      <ServiceDetailPageLayout service={service} />
    </>
  );
}
