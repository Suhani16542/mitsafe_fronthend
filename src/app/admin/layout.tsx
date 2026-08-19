import React from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import AdminClientLayout from "@/components/admin/AdminClientLayout";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const rawAdminToken = cookieStore.get("mitsafe_admin_token")?.value;
  const adminToken = rawAdminToken ? decodeURIComponent(rawAdminToken).trim() : "";

  const isAuthenticated = Boolean(
    adminToken &&
    adminToken !== "" &&
    adminToken !== "undefined" &&
    adminToken !== "null" &&
    adminToken !== "false"
  );

  return (
    <AdminClientLayout initialAuthenticated={isAuthenticated}>
      {children}
    </AdminClientLayout>
  );
}
