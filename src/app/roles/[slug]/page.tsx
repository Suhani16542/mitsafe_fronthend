import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rolesData } from "@/data/roles";
import RoleDetailClient from "./RoleDetailClient";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/jsonld";

// Pre-render paths for Next.js static build
export function generateStaticParams() {
  return rolesData.map((role) => ({
    slug: role.slug,
  }));
}

// Dynamically generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const role = rolesData.find((r) => r.slug === resolvedParams.slug);
  if (!role) return { title: "Role Not Found" };

  return {
    title: `${role.title} Expertise`,
    description: role.shortDescription,
    alternates: {
      canonical: `/roles/${role.slug}`,
    },
    openGraph: {
      title: `${role.title} Expertise | Mitsafe`,
      description: role.shortDescription,
      url: `https://mitsafe.com/roles/${role.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${role.title} Expertise | Mitsafe`,
      description: role.shortDescription,
    },
  };
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const role = rolesData.find((r) => r.slug === resolvedParams.slug);
  if (!role) notFound();

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Roles", item: `/roles/${role.slug}` },
    { name: role.title, item: `/roles/${role.slug}` },
  ];

  const serviceSchema = generateServiceSchema({
    name: `${role.title} Engineering Services`,
    description: role.shortDescription,
    url: `/roles/${role.slug}`,
    serviceType: "Dedicated Engineering Role",
  });

  return (
    <>
      <JsonLd data={[generateBreadcrumbSchema(breadcrumbs), serviceSchema]} />
      <RoleDetailClient role={role} />
    </>
  );
}
