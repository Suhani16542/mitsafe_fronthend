import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema } from "@/lib/jsonld";

const service = servicesData.find((s) => s.slug === "software-development");

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "Enterprise-grade bespoke software engineering, multi-tenant SaaS platforms, secure backend microservices, and database optimizations.",
  alternates: {
    canonical: "/services/software-development",
  },
  openGraph: {
    title: "Custom Software Development | Mitsafe",
    description:
      "Enterprise-grade bespoke software engineering, multi-tenant SaaS platforms, secure backend microservices, and database optimizations.",
    url: "https://mitsafe.com/services/software-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development | Mitsafe",
    description:
      "Enterprise-grade bespoke software engineering, multi-tenant SaaS platforms, secure backend microservices, and database optimizations.",
  },
};

export default function SoftwareDevelopmentPage() {
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
    serviceType: "Custom Enterprise Software Engineering",
  });

  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema, faqSchema].filter(Boolean)} />
      <ServiceDetailPageLayout service={service} />
    </>
  );
}
