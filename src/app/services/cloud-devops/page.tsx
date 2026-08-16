import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema } from "@/lib/jsonld";

const service = servicesData.find((s) => s.slug === "cloud-devops");

export const metadata: Metadata = {
  title: "Cloud Infrastructure & DevOps",
  description:
    "Enterprise AWS, GCP, and Azure cloud migrations, Kubernetes clusters, Docker containers, CI/CD pipelines, and 24/7 reliability.",
  alternates: {
    canonical: "/services/cloud-devops",
  },
  openGraph: {
    title: "Cloud Infrastructure & DevOps | Mitsafe",
    description:
      "Enterprise AWS, GCP, and Azure cloud migrations, Kubernetes clusters, Docker containers, CI/CD pipelines, and 24/7 reliability.",
    url: "https://mitsafe.com/services/cloud-devops",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Infrastructure & DevOps | Mitsafe",
    description:
      "Enterprise AWS, GCP, and Azure cloud migrations, Kubernetes clusters, Docker containers, CI/CD pipelines, and 24/7 reliability.",
  },
};

export default function CloudDevOpsPage() {
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
    serviceType: "Cloud & DevOps Engineering",
  });

  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema, faqSchema].filter(Boolean)} />
      <ServiceDetailPageLayout service={service} />
    </>
  );
}
