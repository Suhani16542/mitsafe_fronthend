import React from "react";
import type { Metadata } from "next";
import CompanyClient from "./CompanyClient";

export const metadata: Metadata = {
  title: "Company | Modern Technology",
  description: "Learn who we are, what we do, and why we exist. Modern Technology engineers premium systems, custom AI tools, and reliable cloud infrastructures.",
};

export default function CompanyPage() {
  return <CompanyClient />;
}
