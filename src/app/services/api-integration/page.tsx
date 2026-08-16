import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema } from "@/lib/jsonld";

const service = servicesData.find((s) => s.slug === "api-integration");

export const metadata: Metadata = {
  title: "API Integration & Microservices",
  description:
    "Architect secure REST & GraphQL endpoints, third-party connectors, webhooks, and scalable microservices architectures.",
  alternates: {
    canonical: "/services/api-integration",
  },
  openGraph: {
    title: "API Integration & Microservices | Mitsafe",
    description:
      "Architect secure REST & GraphQL endpoints, third-party connectors, webhooks, and scalable microservices architectures.",
    url: "https://mitsafe.com/services/api-integration",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "API Integration & Microservices | Mitsafe",
    description:
      "Architect secure REST & GraphQL endpoints, third-party connectors, webhooks, and scalable microservices architectures.",
  },
};

export default function APIIntegrationPage() {
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
    serviceType: "API & Backend Engineering",
  });

  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema, faqSchema].filter(Boolean)} />
      <ServiceDetailPageLayout service={service} />
    </>
  );
}
