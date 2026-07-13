import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Web Development Services",
  description: "Secure, responsive, and performance-optimized enterprise web systems developed with modern technologies.",
};

export default function WebDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "web-development");
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
