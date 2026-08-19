import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { portfolioData } from "@/data/portfolio";
import { rolesData } from "@/data/roles";
import { navbarIndustriesData } from "@/data/industriesDataNavbar";
import { getBlogs } from "@/services/blog.service";

import type { BlogPost } from "@/types/adminBlog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mitsafe.com";
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
  let dynamicBlogSlugs: { slug: string; updatedAt?: string }[] = [];
  try {
    const liveBlogsRes = await getBlogs({ status: "published", limit: 100 });
    if (liveBlogsRes.success && liveBlogsRes.data && liveBlogsRes.data.length > 0) {
      dynamicBlogSlugs = liveBlogsRes.data.map((post: BlogPost) => ({
        slug: post.slug,
        updatedAt: post.publishedAt || post.createdAt,
      }));
    }
  } catch (err) {
    console.error("Error fetching live blogs for sitemap:", err);
  }

  const blogRoutes: MetadataRoute.Sitemap = dynamicBlogSlugs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...portfolioRoutes,
    ...roleRoutes,
    ...blogRoutes,
  ];
}
