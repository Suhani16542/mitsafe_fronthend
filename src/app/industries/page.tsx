import React from "react";
import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | Modern Technology",
  description: "Explore the vertical industries we serve, including Finance, Healthcare, Education, SaaS, Startups, and Government with premium custom solutions.",
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
