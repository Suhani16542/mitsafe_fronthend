import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "eCommerce Development Services",
  description: "High-speed headless storefronts, multi-vendor marketplaces, Stripe checkout pipelines, and stock-sync APIs.",
};

export default function eCommerceSolutionsPage() {
  const service = servicesData.find((s) => s.slug === "ecommerce-solutions");
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
