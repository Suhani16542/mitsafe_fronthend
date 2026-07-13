import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description: "Native and hybrid Android and iOS applications built for high performance, smooth usability, and growth.",
};

export default function MobileAppDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "mobile-app-development");
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
