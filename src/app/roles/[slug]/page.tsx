import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rolesData } from "@/data/roles";
import RoleDetailClient from "./RoleDetailClient";

// Pre-render paths for Next.js static build
export function generateStaticParams() {
  return rolesData.map((role) => ({
    slug: role.slug
  }));
}

// Dynamically generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const role = rolesData.find((r) => r.slug === resolvedParams.slug);
  if (!role) return { title: "Role Not Found" };
  
  return {
    title: `${role.title} | MITSAFE Expert Team`,
    description: role.shortDescription,
  };
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const role = rolesData.find((r) => r.slug === resolvedParams.slug);
  if (!role) notFound();

  return <RoleDetailClient role={role} />;
}
