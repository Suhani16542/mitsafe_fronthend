import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/", "/get-a-quote"],
      },
    ],
    sitemap: "https://mitsafe.com/sitemap.xml",
  };
}
