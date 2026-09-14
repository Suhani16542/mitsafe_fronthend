/**
 * Search Engine Indexing & Instant Notification Utilities
 * Implements the IndexNow Protocol (Bing, Yandex, Seznam, Naver) and sitemap revalidation.
 */

export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY || "e7f9a2b84c31405986dc01893de72026";

export function getBaseSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://mitsafe.com").replace(/\/+$/, "");
}

export interface NotifyIndexNowOptions {
  urls: string[];
  key?: string;
}

export interface IndexNowResult {
  success: boolean;
  statusCode?: number;
  message: string;
  submittedUrls: string[];
}

/**
 * Submits updated or newly published URLs to IndexNow (Bing, Yandex, etc.)
 */
export async function submitToIndexNow(options: NotifyIndexNowOptions): Promise<IndexNowResult> {
  const { urls, key = INDEXNOW_KEY } = options;
  const siteUrl = getBaseSiteUrl();
  const host = new URL(siteUrl).hostname;
  const keyLocation = `${siteUrl}/${key}.txt`;

  if (!urls || urls.length === 0) {
    return {
      success: false,
      message: "No URLs provided for indexing submission",
      submittedUrls: [],
    };
  }

  // Ensure all URLs are absolute and formatted cleanly
  const formattedUrls = urls.map((url) => {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return `${siteUrl}/${url.replace(/^\/+/, "")}`;
  });

  const payload = {
    host,
    key,
    keyLocation,
    urlList: formattedUrls,
  };

  try {
    // Submit to IndexNow master endpoint
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      return {
        success: true,
        statusCode: response.status,
        message: `Successfully notified IndexNow for ${formattedUrls.length} URL(s).`,
        submittedUrls: formattedUrls,
      };
    }

    const resText = await response.text().catch(() => "");
    return {
      success: false,
      statusCode: response.status,
      message: `IndexNow API returned status ${response.status}: ${resText}`,
      submittedUrls: formattedUrls,
    };
  } catch (error: any) {
    console.error("[IndexNow Error] Failed to submit URLs to IndexNow:", error);
    return {
      success: false,
      message: error?.message || "Network error while submitting to IndexNow",
      submittedUrls: formattedUrls,
    };
  }
}
