import React from "react";
import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms & Conditions for using Mitsafe's platform, products, and services.",
};

export default function TermsPage() {
  return <TermsClient />;
}
