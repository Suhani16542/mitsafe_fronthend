import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Digital Growth & Marketing Services",
  description: "Technical search engine optimization (SEO), paid PPC marketing structures, Looker Studio charts, and conversion funnels.",
};

export default function DigitalMarketingPage() {
  const service = servicesData.find((s) => s.slug === "digital-marketing");
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
