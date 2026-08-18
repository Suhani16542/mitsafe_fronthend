import React from "react";
import type { Metadata } from "next";
import HireDevelopersClient from "./HireDevelopersClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Hire Dedicated Developers | Expert Software & Web Developers",
  description:
    "Hire dedicated developers and remote software engineers from Mitsafe. Scale your engineering team with pre-vetted full stack developers, React, Node.js, and mobile app developers.",
  keywords: [
    "hire dedicated developers",
    "hire software developers",
    "hire web developers",
    "hire mobile app developers",
    "hire full stack developers",
    "hire react developers",
    "hire nodejs developers",
    "hire nextjs developers",
    "hire dedicated development team",
    "hire remote developers",
    "hire frontend developers",
    "hire backend developers",
    "hire cloud engineers",
    "offshore software developers",
    "hire dedicated programmers",
  ],
  alternates: {
    canonical: "/hire-developers",
  },
  openGraph: {
    title: "Hire Dedicated Developers | Expert Software & Web Developers | Mitsafe",
    description:
      "Hire dedicated developers and remote software engineers from Mitsafe. Scale your engineering team with pre-vetted full stack developers, React, Node.js, and mobile app developers.",
    url: "https://mitsafe.com/hire-developers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated Developers | Expert Software & Web Developers | Mitsafe",
    description:
      "Hire dedicated developers and remote software engineers from Mitsafe. Scale your engineering team with pre-vetted full stack developers, React, Node.js, and mobile app developers.",
  },
  other: {
    keywords:
      "hire dedicated developers, hire software developers, hire web developers, hire mobile app developers, hire full stack developers, hire react developers, hire nodejs developers, hire nextjs developers, hire dedicated development team, hire remote developers, hire frontend developers, hire backend developers, hire cloud engineers, offshore software developers, hire dedicated programmers",
  },
};

const breadcrumbs = [
  { name: "Home", item: "/" },
  { name: "Hire Developers", item: "/hire-developers" },
];

const serviceSchema = generateServiceSchema({
  name: "Hire Dedicated Software Developers",
  description:
    "Scale your engineering team with pre-vetted full-stack, frontend, backend, and mobile software developers from Mitsafe.",
  url: "/hire-developers",
  serviceType: "Staff Augmentation & Dedicated Engineering Teams",
});

export default function HireDevelopersPage() {
  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema]} />
      <HireDevelopersClient />
    </>
  );
}
