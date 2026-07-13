import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPageLayout from "@/components/ServiceDetailPageLayout";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "CRM & ERP Platform Services",
  description: "Enterprise CRM leads trackers, student ERP roster catalogs, payment fee invoicing, and secure access permissions.",
};

export default function CRMERPPage() {
  const service = servicesData.find((s) => s.slug === "crm-erp");
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
