import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema } from "@/lib/jsonld";

const service = servicesData.find((s) => s.slug === "web-development");

export const metadata: Metadata = {
  title: "Custom Web Development Services",
  description:
    "Secure, responsive, and performance-optimized enterprise web platforms, custom Next.js apps, headless CMS integrations, and high Core Web Vitals.",
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    title: "Custom Web Development Services | Mitsafe",
    description:
      "Secure, responsive, and performance-optimized enterprise web platforms, custom Next.js apps, headless CMS integrations, and high Core Web Vitals.",
    url: "https://mitsafe.com/services/web-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development Services | Mitsafe",
    description:
      "Secure, responsive, and performance-optimized enterprise web platforms, custom Next.js apps, headless CMS integrations, and high Core Web Vitals.",
  },
};

export default function WebDevelopmentPage() {
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
    serviceType: "Full-Stack Web Engineering",
  });

  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema, faqSchema].filter(Boolean)} />
      <ServiceDetailPageLayout service={service} />
    </>
  );
}
