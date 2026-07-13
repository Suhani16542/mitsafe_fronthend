import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description: "Enterprise software systems built to match your operational workflows and optimize backend resource speeds.",
};

export default function SoftwareDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "software-development");
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
