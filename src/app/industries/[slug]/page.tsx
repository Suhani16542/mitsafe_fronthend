import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { navbarIndustriesData, getIndustryBySlug } from "@/data/industriesDataNavbar";
import IndustryDetailPageClient from "./IndustryDetailPageClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/jsonld";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return navbarIndustriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found | Mitsafe",
    };
  }

  return {
    title: `${industry.title} Tech Solutions`,
    description: industry.heroSubheadline,
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.title} Tech Solutions | Mitsafe`,
      description: industry.heroSubheadline,
      url: `https://mitsafe.com/industries/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.title} Tech Solutions | Mitsafe`,
      description: industry.heroSubheadline,
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Industries", item: `/industries/${slug}` },
    { name: industry.title, item: `/industries/${slug}` },
  ];

  const serviceSchema = generateServiceSchema({
    name: `${industry.title} Technology Solutions`,
    description: industry.heroSubheadline,
    url: `/industries/${slug}`,
    serviceType: "Industry Vertical Technology Solutions",
  });

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema]} />
      <IndustryDetailPageClient industry={industry} />
    </>
  );
}
