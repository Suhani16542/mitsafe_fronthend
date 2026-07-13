import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { portfolioData } from "@/data/portfolio";
import { blogData } from "@/data/blog";
import { rolesData } from "@/data/roles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mitsafe.com";

  // Base index pages
  const routes = ["", "/about", "/services", "/industries", "/portfolio", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic services
  const servicesRoutes = servicesData.map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic case studies
  const portfolioRoutes = portfolioData.map((proj) => ({
    url: `${baseUrl}/portfolio/${proj.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic blog articles
  const blogRoutes = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // Dynamic expert roles
  const rolesRoutes = rolesData.map((role) => ({
    url: `${baseUrl}/roles/${role.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...servicesRoutes, ...portfolioRoutes, ...blogRoutes, ...rolesRoutes];
}
