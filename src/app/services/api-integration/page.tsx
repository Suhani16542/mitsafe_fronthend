import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "API Integration & Middleware Services",
  description: "Secure data middleware, real-time sync webhooks, OAuth2 authorization protocols, and automated transaction queuing.",
};

export default function APIIntegrationPage() {
  const service = servicesData.find((s) => s.slug === "api-integration");
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
