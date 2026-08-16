import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema } from "@/lib/jsonld";

const service = servicesData.find((s) => s.slug === "digital-marketing");

export const metadata: Metadata = {
  title: "Digital Marketing & Performance SEO",
  description:
    "Data-driven SEO strategies, conversion rate optimization, search ranking enhancements, and performance growth channels for modern brands.",
  alternates: {
    canonical: "/services/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing & Performance SEO | Mitsafe",
    description:
      "Data-driven SEO strategies, conversion rate optimization, search ranking enhancements, and performance growth channels for modern brands.",
    url: "https://mitsafe.com/services/digital-marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Performance SEO | Mitsafe",
    description:
      "Data-driven SEO strategies, conversion rate optimization, search ranking enhancements, and performance growth channels for modern brands.",
  },
};

export default function DigitalMarketingPage() {
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
    serviceType: "Digital Marketing & Technical SEO",
  });

  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema, faqSchema].filter(Boolean)} />
      <ServiceDetailPageLayout service={service} />
    </>
  );
}
