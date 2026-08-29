import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { portfolioData } from "@/data/portfolio";
import { rolesData } from "@/data/roles";
import { navbarIndustriesData } from "@/data/industriesDataNavbar";
import { getAllPublishedBlogs } from "@/services/blog.service";

// Ensure sitemap is dynamically generated on-demand so new published blogs are immediately reflected
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://mitsafe.com").replace(/\/+$/, "");
  const lastModified = new Date();

  // 1. Core static indexable pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/company`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hire-developers`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // 2. Individual dedicated service pages (10 high-value services)
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // 3. Industry vertical solution pages
  const industryRoutes: MetadataRoute.Sitemap = navbarIndustriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 4. Portfolio case study pages
  const portfolioRoutes: MetadataRoute.Sitemap = portfolioData.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 5. Expert role engineering pages
  const roleRoutes: MetadataRoute.Sitemap = rolesData.map((role) => ({
    url: `${baseUrl}/roles/${role.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 6. Dynamic blog articles (Fetch live published posts from backend API)
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const publishedBlogs = await getAllPublishedBlogs();
    blogRoutes = publishedBlogs.map((post) => {
      let parsedDate = lastModified;
      if (post.updatedAt) {
        const d = new Date(post.updatedAt);
        if (!isNaN(d.getTime())) {
          parsedDate = d;
        }
      }

      const cleanSlug = post.slug.replace(/^\/+/, "");
      return {
        url: `${baseUrl}/blog/${cleanSlug}`,
        lastModified: parsedDate,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });
  } catch (err) {
    console.error("Error fetching live blogs for sitemap:", err);
  }

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...portfolioRoutes,
    ...roleRoutes,
    ...blogRoutes,
  ];
}
