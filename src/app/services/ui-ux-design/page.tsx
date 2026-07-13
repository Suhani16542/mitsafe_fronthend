import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "UI/UX Design Services",
  description: "Futuristic visual layouts, design systems, vector assets, and clickable Figma high-fidelity prototypes.",
};

export default function UIUXDesignPage() {
  const service = servicesData.find((s) => s.slug === "ui-ux-design");
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
