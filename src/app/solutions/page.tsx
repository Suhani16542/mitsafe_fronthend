import React from "react";
import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Engineering Solutions | Modern Technology",
  description: "Discover our technical solutions, from AI Automation and Enterprise SaaS platforms to Cloud optimization, DevOps, and Cybersecurity.",
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
