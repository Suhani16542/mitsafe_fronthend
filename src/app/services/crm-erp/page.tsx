import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema } from "@/lib/jsonld";

const service = servicesData.find((s) => s.slug === "crm-erp");

export const metadata: Metadata = {
  title: "CRM & ERP Custom Systems",
  description:
    "Custom CRM and ERP enterprise architectures, centralized data hubs, inventory trackers, and staff workflows built for security and efficiency.",
  alternates: {
    canonical: "/services/crm-erp",
  },
  openGraph: {
    title: "CRM & ERP Custom Systems | Mitsafe",
    description:
      "Custom CRM and ERP enterprise architectures, centralized data hubs, inventory trackers, and staff workflows built for security and efficiency.",
    url: "https://mitsafe.com/services/crm-erp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM & ERP Custom Systems | Mitsafe",
    description:
      "Custom CRM and ERP enterprise architectures, centralized data hubs, inventory trackers, and staff workflows built for security and efficiency.",
  },
};

export default function CrmErpPage() {
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
    serviceType: "CRM & ERP Software Engineering",
  });

  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema, faqSchema].filter(Boolean)} />
      <ServiceDetailPageLayout service={service} />
    </>
  );
}
