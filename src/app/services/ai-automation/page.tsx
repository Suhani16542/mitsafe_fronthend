import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "AI & Workflow Automation Services",
  description: "Leverage intelligent custom LLM agents, vector database lookup RAG setups, and event scrapers to reduce manual time.",
};

export default function AIAutomationPage() {
  const service = servicesData.find((s) => s.slug === "ai-automation");
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
