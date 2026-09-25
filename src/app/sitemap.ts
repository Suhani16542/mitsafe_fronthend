import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { servicesData } from "@/data/services";
import { portfolioData } from "@/data/portfolio";
import { rolesData } from "@/data/roles";
import { navbarIndustriesData } from "@/data/industriesDataNavbar";
import { getAllPublishedBlogs } from "@/services/blog.service";

// Ensure sitemap is dynamically generated on-demand so new pages and published blogs are immediately reflected
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Baseline stable release date for static pages to maintain Googlebot trust
const STATIC_LAST_MOD = new Date("2026-03-01T00:00:00.000Z");

// Paths that must be strictly excluded from the public sitemap
const EXCLUDED_DIR_NAMES = new Set([
  "admin",
  "api",
  "_components",
  "_lib",
  "_utils",
]);

// Redirected routes configured in next.config.ts that should not be indexed as standalone pages
const REDIRECTED_ROUTES = new Set([
  "/services",      // 301 redirects to /solutions
  "/our-team",      // 301 redirects to /about
  "/our-portfolio", // 301 redirects to /portfolio
  "/smm-services",  // 301 redirects to /services/digital-marketing
]);

/**
 * Recursively scans the Next.js App Router filesystem to automatically discover public static pages.
 */
function discoverStaticAppRoutes(appDir: string, baseUrl: string): MetadataRoute.Sitemap {
  const discoveredRoutes: MetadataRoute.Sitemap = [];

  function scanDirectory(currentDir: string, currentRoute: string = "") {
    if (!fs.existsSync(currentDir)) return;

    try {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const entryName = entry.name;

        // 1. Skip hidden directories/files or private folders starting with underscore
        if (entryName.startsWith("_") || entryName.startsWith(".")) {
          continue;
        }

        // 2. Skip dynamic route parameter folders like [slug] or [id] (handled by dynamic data mappers)
        if (entryName.startsWith("[") && entryName.endsWith("]")) {
          continue;
        }

        // 3. Handle Route Groups like (marketing) without adding group name to URL path
        if (entryName.startsWith("(") && entryName.endsWith(")")) {
          scanDirectory(path.join(currentDir, entryName), currentRoute);
          continue;
        }

        if (entry.isDirectory()) {
          // Check if directory is in exclusion list (admin, api, etc.)
          if (EXCLUDED_DIR_NAMES.has(entryName)) {
            continue;
          }

          const nextRouteSegment = currentRoute ? `${currentRoute}/${entryName}` : `/${entryName}`;

          // Check if top-level segment is excluded
          const topLevelSegment = nextRouteSegment.split("/")[1];
          if (EXCLUDED_DIR_NAMES.has(topLevelSegment)) {
            continue;
          }

          scanDirectory(path.join(currentDir, entryName), nextRouteSegment);
        } else if (entry.isFile()) {
          // Check for valid Next.js page files
          if (/^page\.(tsx|jsx|js|ts)$/.test(entryName)) {
            const routePath = currentRoute || ""; // Root route is empty string

            // Skip redirected routes
            if (REDIRECTED_ROUTES.has(routePath)) {
              continue;
            }

            const fullUrl = routePath ? `${baseUrl}${routePath}` : baseUrl;

            // Compute priority and changeFrequency based on route type
            let priority = 0.7;
            let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" = "monthly";

            if (routePath === "") {
              priority = 1.0;
              changeFrequency = "weekly";
            } else if (routePath === "/blog" || routePath === "/insights") {
              priority = 0.9;
              changeFrequency = "daily";
            } else if (routePath === "/hire-developers" || routePath.startsWith("/services/")) {
              priority = 0.9;
              changeFrequency = "weekly";
            } else if (
              routePath === "/about" ||
              routePath === "/company" ||
              routePath === "/solutions" ||
              routePath === "/pricing" ||
              routePath === "/portfolio"
            ) {
              priority = 0.8;
              changeFrequency = "monthly";
            } else if (routePath === "/terms" || routePath === "/refund-policy") {
              priority = 0.4;
              changeFrequency = "yearly";
            }

            discoveredRoutes.push({
              url: fullUrl,
              lastModified: routePath === "" || routePath === "/blog" ? new Date() : STATIC_LAST_MOD,
              changeFrequency,
              priority,
            });
          }
        }
      }
    } catch (err) {
      console.error("[Sitemap Scanner] Error reading directory:", currentDir, err);
    }
  }

  scanDirectory(appDir);
  return discoveredRoutes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.mitsafe.com").replace(/\/+$/, "");
  const sitemapUrlMap = new Map<string, MetadataRoute.Sitemap[number]>();

  // 1. Automatically discover all public static pages from the filesystem (e.g., /, /about, /sitemap-auto-test-2026, etc.)
  const appPath = path.resolve(process.cwd(), "src/app");
  const autoDiscoveredStaticRoutes = discoverStaticAppRoutes(appPath, baseUrl);
  autoDiscoveredStaticRoutes.forEach((item) => {
    sitemapUrlMap.set(item.url, item);
  });

  // 2. Dedicated service pages (10 high-value services)
  servicesData.forEach((service) => {
    const url = `${baseUrl}/services/${service.slug}`;
    if (!sitemapUrlMap.has(url)) {
      sitemapUrlMap.set(url, {
        url,
        lastModified: STATIC_LAST_MOD,
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  });

  // 3. Industry vertical solution pages
  navbarIndustriesData.forEach((ind) => {
    const url = `${baseUrl}/industries/${ind.slug}`;
    if (!sitemapUrlMap.has(url)) {
      sitemapUrlMap.set(url, {
        url,
        lastModified: STATIC_LAST_MOD,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  });

  // 4. Portfolio case study pages
  portfolioData.forEach((project) => {
    const url = `${baseUrl}/portfolio/${project.slug}`;
    if (!sitemapUrlMap.has(url)) {
      sitemapUrlMap.set(url, {
        url,
        lastModified: STATIC_LAST_MOD,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  });

  // 5. Expert role engineering pages
  rolesData.forEach((role) => {
    const url = `${baseUrl}/roles/${role.slug}`;
    if (!sitemapUrlMap.has(url)) {
      sitemapUrlMap.set(url, {
        url,
        lastModified: STATIC_LAST_MOD,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  });

  // 6. Dynamic blog articles (Fetch live published posts from backend API with fallback cache)
  try {
    const publishedBlogs = await getAllPublishedBlogs();
    publishedBlogs.forEach((post) => {
      let parsedDate = STATIC_LAST_MOD;
      if (post.updatedAt) {
        const d = new Date(post.updatedAt);
        if (!isNaN(d.getTime())) {
          parsedDate = d;
        }
      }

      const cleanSlug = post.slug.replace(/^\/+/, "");
      const url = `${baseUrl}/blog/${cleanSlug}`;

      sitemapUrlMap.set(url, {
        url,
        lastModified: parsedDate,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    });
  } catch (err) {
    console.error("[Sitemap Generation] Error fetching live blogs:", err);
  }

  // Convert map values to array for return
  return Array.from(sitemapUrlMap.values());
}
