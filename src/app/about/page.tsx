import React from "react";
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Mitsafe's mission, our elite engineering team, and our core development principles.",
};

export default function AboutPage() {
  return <AboutClient />;
}
