import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema } from "@/lib/jsonld";

const service = servicesData.find((s) => s.slug === "ai-automation");

export const metadata: Metadata = {
  title: "AI & Workflow Automation Services",
  description:
    "Leverage intelligent custom LLM agents, vector database lookup RAG setups, and automated event pipelines to accelerate enterprise operations.",
  alternates: {
    canonical: "/services/ai-automation",
  },
  openGraph: {
    title: "AI & Workflow Automation Services | Mitsafe",
    description:
      "Leverage intelligent custom LLM agents, vector database lookup RAG setups, and automated event pipelines to accelerate enterprise operations.",
    url: "https://mitsafe.com/services/ai-automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Workflow Automation Services | Mitsafe",
    description:
      "Leverage intelligent custom LLM agents, vector database lookup RAG setups, and automated event pipelines to accelerate enterprise operations.",
  },
};

export default function AIAutomationPage() {
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
    serviceType: "AI & Automation Engineering",
  });

  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema, faqSchema].filter(Boolean)} />
      <ServiceDetailPageLayout service={service} />
    </>
  );
}
