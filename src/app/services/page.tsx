import React from "react";
import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our software engineering capabilities: Next.js Web Systems, Hybrid Mobile Apps, Custom AI integrations, and Autoscaling Cloud Solutions.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
