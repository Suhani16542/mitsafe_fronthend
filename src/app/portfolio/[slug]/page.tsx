import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import PortfolioDetailClient from "./PortfolioDetailClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/jsonld";

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = portfolioData.find((p) => p.slug === resolvedParams.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} - Case Study | Mitsafe`,
    description: project.summary,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - Case Study | Mitsafe`,
      description: project.summary,
      url: `https://mitsafe.com/portfolio/${project.slug}`,
      type: "article",
      images: project.img
        ? [
            {
              url: project.img,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Case Study | Mitsafe`,
      description: project.summary,
      images: project.img ? [project.img] : undefined,
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = portfolioData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const projectProps = {
    slug: project.slug,
    title: project.title,
    category: project.category,
    client: project.client,
    year: project.year,
    service: project.service,
    summary: project.summary,
    description: project.description,
    features: project.features,
    techStack: project.techStack,
    imageColor: project.imageColor,
    img: project.img,
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Portfolio", item: "/portfolio" },
    { name: project.title, item: `/portfolio/${project.slug}` },
  ];

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.summary,
    genre: project.category,
    url: `https://mitsafe.com/portfolio/${project.slug}`,
    image: project.img ? `https://mitsafe.com${project.img}` : undefined,
    creator: {
      "@type": "Organization",
      name: "Mitsafe",
      url: "https://mitsafe.com",
    },
  };

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), creativeWorkSchema]} />
      <PortfolioDetailClient project={projectProps} />
    </>
  );
}
