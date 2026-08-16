import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema } from "@/lib/jsonld";

const service = servicesData.find((s) => s.slug === "mobile-app-development");

export const metadata: Metadata = {
  title: "Mobile App Development (iOS & Android)",
  description:
    "Cross-platform Flutter and React Native mobile applications, native performance optimizations, offline sync, and App Store deployments.",
  alternates: {
    canonical: "/services/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development (iOS & Android) | Mitsafe",
    description:
      "Cross-platform Flutter and React Native mobile applications, native performance optimizations, offline sync, and App Store deployments.",
    url: "https://mitsafe.com/services/mobile-app-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development (iOS & Android) | Mitsafe",
    description:
      "Cross-platform Flutter and React Native mobile applications, native performance optimizations, offline sync, and App Store deployments.",
  },
};

export default function MobileAppDevelopmentPage() {
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
    serviceType: "Mobile Application Engineering",
  });

  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema, faqSchema].filter(Boolean)} />
      <ServiceDetailPageLayout service={service} />
    </>
  );
}
