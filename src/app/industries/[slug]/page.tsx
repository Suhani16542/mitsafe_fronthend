import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { navbarIndustriesData, getIndustryBySlug } from "@/data/industriesDataNavbar";
import IndustryDetailPageClient from "./IndustryDetailPageClient";

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
    title: `${industry.title} Tech Solutions | Mitsafe`,
    description: industry.heroSubheadline,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailPageClient industry={industry} />;
}
