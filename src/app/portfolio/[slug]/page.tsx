import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import PortfolioDetailClient from "./PortfolioDetailClient";

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
    title: project.title,
    description: project.summary,
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
    img: project.img
  };

  return <PortfolioDetailClient project={projectProps} />;
}
