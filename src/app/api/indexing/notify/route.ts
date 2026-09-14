import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { submitToIndexNow, getBaseSiteUrl } from "@/lib/indexing";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const siteUrl = getBaseSiteUrl();

    let urlsToSubmit: string[] = [];

    if (Array.isArray(body.urls) && body.urls.length > 0) {
      urlsToSubmit = body.urls;
    } else if (body.slug) {
      const cleanSlug = String(body.slug).replace(/^\/+/, "");
      if (body.type === "blog" || !body.type) {
        urlsToSubmit.push(`${siteUrl}/blog/${cleanSlug}`);
      } else {
        urlsToSubmit.push(`${siteUrl}/${cleanSlug}`);
      }
    } else if (body.url) {
      urlsToSubmit.push(body.url);
    }

    // Always include the sitemap and blog index in notifications if blogs were changed
    if (urlsToSubmit.length === 0) {
      urlsToSubmit.push(`${siteUrl}/blog`, `${siteUrl}/sitemap.xml`);
    }

    // 1. Revalidate Next.js Server Cache & Sitemap
    try {
      revalidatePath("/sitemap.xml");
      revalidatePath("/blog");
      revalidatePath("/");
      if (body.slug) {
        revalidatePath(`/blog/${String(body.slug).replace(/^\/+/, "")}`);
      }
    } catch (revalErr) {
      console.warn("[Indexing Route] Next.js revalidation notice:", revalErr);
    }

    // 2. Submit to Search Engine IndexNow network
    const indexNowResult = await submitToIndexNow({
      urls: urlsToSubmit,
    });

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      revalidated: ["/sitemap.xml", "/blog", body.slug ? `/blog/${body.slug}` : "/"],
      indexNow: indexNowResult,
    });
  } catch (error: any) {
    console.error("[Indexing Route Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Internal server error during indexing notification",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const siteUrl = getBaseSiteUrl();
  return NextResponse.json({
    status: "active",
    message: "Mitsafe Search Engine Indexing & Instant Notification Service",
    sitemapUrl: `${siteUrl}/sitemap.xml`,
    robotsUrl: `${siteUrl}/robots.txt`,
  });
}
