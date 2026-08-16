import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema } from "@/lib/jsonld";

const service = servicesData.find((s) => s.slug === "ecommerce-solutions");

export const metadata: Metadata = {
  title: "eCommerce Solutions & Headless Stores",
  description:
    "High-speed custom eCommerce platforms, headless Shopify & WooCommerce systems, secure checkout gateways, and inventory automations.",
  alternates: {
    canonical: "/services/ecommerce-solutions",
  },
  openGraph: {
    title: "eCommerce Solutions & Headless Stores | Mitsafe",
    description:
      "High-speed custom eCommerce platforms, headless Shopify & WooCommerce systems, secure checkout gateways, and inventory automations.",
    url: "https://mitsafe.com/services/ecommerce-solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Solutions & Headless Stores | Mitsafe",
    description:
      "High-speed custom eCommerce platforms, headless Shopify & WooCommerce systems, secure checkout gateways, and inventory automations.",
  },
};

export default function EcommerceSolutionsPage() {
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
    serviceType: "eCommerce Software Engineering",
  });

  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema, faqSchema].filter(Boolean)} />
      <ServiceDetailPageLayout service={service} />
    </>
  );
}
