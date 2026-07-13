import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Cloud Infrastructure & DevOps Services",
  description: "Secure AWS networking setups, container deployment pipelines, Kubernetes clusters, and telemetry telemetry analytics.",
};

export default function CloudDevOpsPage() {
  const service = servicesData.find((s) => s.slug === "cloud-devops");
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
