import { BlogPost, BlogStatus } from "@/types/adminBlog";
import { getStoredAdminToken } from "./admin.service";

/**
 * Resolves the Backend API Base URL for Client and Server environments.
 * Priority:
 * 1. process.env.NEXT_PUBLIC_API_URL (configured production URL)
 * 2. process.env.BACKEND_API_URL (server-side only fallback)
 * 3. Fallback: https://mitsafe-backend.onrender.com
 */
export function getApiBaseUrl(): string {
  // 1. Browser runtime: If running on localhost / 127.0.0.1, prioritize local backend (http://localhost:5000)
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
    if (isLocalhost) {
      const publicApiUrl = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/+$/, "");
      if (publicApiUrl && (publicApiUrl.includes("localhost") || publicApiUrl.includes("127.0.0.1"))) {
        return publicApiUrl;
      }
      return "http://localhost:5000";
    }
    const publicApiUrl = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/+$/, "");
    if (publicApiUrl) {
      return publicApiUrl;
    }
    return "https://mitsafe-backend.onrender.com";
  }

  // 2. Server-side runtime (Node.js / Next.js sitemap, SSR, API routes):
  // Check BACKEND_API_URL first (specifically for server-to-backend communication in local/staging/prod)
  const backendApiUrl = process.env.BACKEND_API_URL?.trim().replace(/\/+$/, "");
  if (backendApiUrl) {
    return backendApiUrl;
  }

  // Check NEXT_PUBLIC_API_URL next
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/+$/, "");
  if (publicApiUrl) {
    return publicApiUrl;
  }

  // In development, default to local backend
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000";
  }

  // Production fallback
  return "https://mitsafe-backend.onrender.com";
}

function getAdminHeaders(): Record<string, string> {
  const adminKey =
    process.env.NEXT_PUBLIC_BLOG_ADMIN_KEY ||
    process.env.NEXT_PUBLIC_BLOG_ADMIN_API_KEY ||
    "hyikhgt6drewa2drhjj555";
  
  const headers: Record<string, string> = {
    "x-blog-admin-key": adminKey,
  };

  const token = getStoredAdminToken();
  if (token && token !== "mitsafe_admin_session_active") {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}

export const DEFAULT_BLOG_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80";

export function getSafeBlogImageUrl(rawUrl?: string): string {
  if (!rawUrl || typeof rawUrl !== "string") return DEFAULT_BLOG_FALLBACK_IMAGE;
  const trimmed = rawUrl.trim();
  if (
    trimmed.startsWith("blob:") ||
    trimmed === "" ||
    trimmed === "undefined" ||
    trimmed === "null" ||
    trimmed === "false"
  ) {
    return DEFAULT_BLOG_FALLBACK_IMAGE;
  }
  return trimmed;
}

export function formatBlogPost(rawBlog: any): BlogPost {
  if (!rawBlog) return rawBlog;

  const authorObj =
    typeof rawBlog.author === "object" && rawBlog.author !== null
      ? rawBlog.author
      : {
          id: "auth-1",
          name: typeof rawBlog.author === "string" && rawBlog.author ? rawBlog.author : "Mitsafe Team",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
          role: "Mitsafe Team",
        };

  const idVal = rawBlog._id || rawBlog.id || "";

  return {
    id: idVal,
    title: rawBlog.title || "",
    slug: rawBlog.slug || "",
    excerpt: rawBlog.excerpt || "",
    content: rawBlog.content || "",
    category: rawBlog.category || "General",
    tags: Array.isArray(rawBlog.tags)
      ? rawBlog.tags
      : typeof rawBlog.tags === "string"
      ? rawBlog.tags.split(",").map((t: string) => t.trim())
      : [],
    keywords: Array.isArray(rawBlog.keywords)
      ? rawBlog.keywords
      : typeof rawBlog.keywords === "string" && rawBlog.keywords.trim()
      ? rawBlog.keywords.split(",").map((k: string) => k.trim()).filter(Boolean)
      : [],
    author: authorObj,
    readTime: rawBlog.readTime || "5 Min Read",
    featuredImage: getSafeBlogImageUrl(rawBlog.featuredImage),
    status: rawBlog.status || "draft",
    isFeatured: Boolean(rawBlog.featured || rawBlog.isFeatured),
    publishedAt: rawBlog.publishedAt ? new Date(rawBlog.publishedAt).toISOString().split("T")[0] : "",
    createdAt: rawBlog.createdAt ? new Date(rawBlog.createdAt).toISOString().split("T")[0] : "",
    views: rawBlog.views || 0,
  } as BlogPost;
}

export interface FetchBlogsParams {
  page?: number;
  limit?: number;
  category?: string;
  featured?: boolean;
  search?: string;
  sort?: string;
  status?: string;
}

/**
 * Fetch blogs list (supports page, limit, category, featured, search, sort, status)
 */
export async function getBlogs(params: FetchBlogsParams = {}, options: RequestInit = {}) {
  const BASE_URL = getApiBaseUrl();
  const query = new URLSearchParams();

  if (params.page) query.set("page", String(params.page));
  if (params.limit) query.set("limit", String(params.limit));
  if (params.category && params.category !== "all") query.set("category", params.category);
  if (params.featured !== undefined) query.set("featured", String(params.featured));
  if (params.search) query.set("search", params.search);
  if (params.sort) query.set("sort", params.sort);
  if (params.status) query.set("status", params.status);

  const endpoint = `${BASE_URL}/api/v1/blogs${query.toString() ? `?${query.toString()}` : ""}`;

  try {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        ...getAdminHeaders(),
        ...(options.headers || {}),
      },
      next: options.next !== undefined ? options.next : { revalidate: 30 },
      ...(options.cache ? { cache: options.cache } : {}),
      signal: options.signal || AbortSignal.timeout(15000),
    });

    const responseText = await res.text();
    let json: any = {};
    try {
      json = JSON.parse(responseText);
    } catch {
      json = { message: responseText };
    }

    if (!res.ok || !json.success) {
      console.error(`[BlogService Error] GET ${endpoint} returned ${res.status}:`, json);
      throw new Error(json.message || `Failed to fetch blogs (HTTP ${res.status})`);
    }

    const rawList = Array.isArray(json.data) ? json.data : [];
    const formattedList = rawList.map(formatBlogPost);

    return {
      success: true,
      data: formattedList,
      total: json.total || formattedList.length,
      page: json.page || 1,
      totalPages: json.totalPages || 1,
    };
  } catch (err: any) {
    console.error(`[BlogService Error] GET ${endpoint} failed:`, {
      url: endpoint,
      errorName: err.name,
      errorMessage: err.message,
    });
    throw err;
  }
}

/**
 * Fetch all published blogs for sitemap generation
 */
export async function getAllPublishedBlogs(): Promise<{ slug: string; updatedAt?: string }[]> {
  try {
    const firstPage = await getBlogs(
      { status: "published", limit: 100, page: 1 },
      { cache: "no-store" }
    );

    if (!firstPage.success || !Array.isArray(firstPage.data)) {
      return [];
    }

    const allPosts = [...firstPage.data];
    const totalPages = firstPage.totalPages || 1;

    if (totalPages > 1) {
      const pagePromises = [];
      for (let p = 2; p <= totalPages; p++) {
        pagePromises.push(
          getBlogs({ status: "published", limit: 100, page: p }, { cache: "no-store" })
            .then((res) => (res.success && Array.isArray(res.data) ? res.data : []))
            .catch(() => [])
        );
      }
      const restPages = await Promise.all(pagePromises);
      restPages.forEach((pageData) => {
        allPosts.push(...pageData);
      });
    }

    return allPosts
      .filter((post) => post && post.slug && typeof post.slug === "string" && post.slug.trim())
      .map((post) => ({
        slug: post.slug.trim(),
        updatedAt: (post as any).updatedAt || post.publishedAt || post.createdAt || undefined,
      }));
  } catch (err) {
    console.error("[BlogService] Failed to fetch all published blogs for sitemap:", err);
    return [];
  }
}

/**
 * Fetch single Blog by URL Slug
 */
export async function getBlogBySlug(slug: string) {
  const BASE_URL = getApiBaseUrl();
  const endpoint = `${BASE_URL}/api/v1/blogs/${encodeURIComponent(slug)}`;

  try {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        ...getAdminHeaders(),
      },
      cache: "no-store",
    });

    const responseText = await res.text();
    let json: any = {};
    try {
      json = JSON.parse(responseText);
    } catch {
      json = { message: responseText };
    }

    if (!res.ok || !json.success) {
      console.error(`[BlogService Error] GET ${endpoint} returned ${res.status}:`, json);
      throw new Error(json.message || `Failed to fetch blog post (HTTP ${res.status})`);
    }

    return {
      success: true,
      data: formatBlogPost(json.data),
    };
  } catch (err: any) {
    console.error(`[BlogService Error] GET ${endpoint} failed:`, {
      url: endpoint,
      errorName: err.name,
      errorMessage: err.message,
    });
    throw err;
  }
}

/**
 * Fetch list of categories
 */
export async function getCategories() {
  const BASE_URL = getApiBaseUrl();
  const endpoint = `${BASE_URL}/api/v1/blogs/categories`;

  try {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        ...getAdminHeaders(),
      },
      cache: "no-store",
    });

    const responseText = await res.text();
    let json: any = {};
    try {
      json = JSON.parse(responseText);
    } catch {
      json = { message: responseText };
    }

    if (!res.ok || !json.success) {
      console.error(`[BlogService Error] GET ${endpoint} returned ${res.status}:`, json);
      throw new Error(json.message || "Failed to fetch categories");
    }

    let categoryNames: string[] = [];
    if (Array.isArray(json.data)) {
      categoryNames = json.data
        .map((item: any) => {
          if (typeof item === "string") return item.trim();
          if (typeof item === "object" && item !== null && item.name) {
            if (item.status && item.status !== "active") return null;
            return String(item.name).trim();
          }
          return null;
        })
        .filter((cat: any): cat is string => Boolean(cat && typeof cat === "string" && cat.length > 0));
    }

    return {
      success: true,
      data: categoryNames,
    };
  } catch (err: any) {
    console.error(`[BlogService Error] GET ${endpoint} failed:`, {
      url: endpoint,
      errorName: err.name,
      errorMessage: err.message,
    });
    return {
      success: false,
      data: [] as string[],
      error: err.message || "Failed to load categories from server",
    };
  }
}

/**
 * Upload an Image for a Blog post (Featured cover or inline article image)
 */
export async function uploadBlogImage(file: File) {
  const BASE_URL = getApiBaseUrl();
  const endpoint = `${BASE_URL}/api/v1/blogs/upload-image`;

  try {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("file", file);

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        ...getAdminHeaders(),
      },
      body: formData,
    });

    const responseText = await res.text();
    let json: any = {};
    try {
      json = JSON.parse(responseText);
    } catch {
      json = { message: responseText };
    }

    if (!res.ok || (json.success === false && !json.imageUrl && !json.data?.imageUrl && !json.data?.url && !json.url)) {
      console.error(`[BlogService Error] POST ${endpoint} returned ${res.status}:`, json);
      throw new Error(json.message || json.error || "Image upload failed on server.");
    }

    const permanentImageUrl =
      json.imageUrl ||
      json.data?.imageUrl ||
      json.data?.url ||
      json.url ||
      json.data?.secure_url ||
      json.secure_url ||
      json.data?.fileUrl ||
      json.fileUrl;

    const publicId =
      json.publicId ||
      json.data?.publicId ||
      json.data?.id ||
      json.id ||
      "";

    if (!permanentImageUrl) {
      throw new Error(json.message || "Server did not return a valid permanent image URL.");
    }

    return {
      success: true,
      message: json.message || "Image uploaded successfully",
      imageUrl: permanentImageUrl,
      publicId: publicId,
    };
  } catch (err: any) {
    console.error(`[BlogService Error] POST ${endpoint} failed:`, {
      url: endpoint,
      errorName: err.name,
      errorMessage: err.message,
    });
    throw err;
  }
}

/**
 * Upload a Video for a Blog post (inline article video) to Cloudinary
 * Calls POST /api/v1/blogs/upload-video with multipart/form-data
 */
export async function uploadBlogVideo(file: File) {
  const BASE_URL = getApiBaseUrl();
  const endpoint = `${BASE_URL}/api/v1/blogs/upload-video`;
  const fallbackEndpoint = `${BASE_URL}/api/blogs/upload-video`;

  const formData = new FormData();
  formData.append("video", file);
  formData.append("file", file);

  const endpointsToTry = [endpoint, fallbackEndpoint];
  let lastError: Error | null = null;

  for (const url of endpointsToTry) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          ...getAdminHeaders(),
        },
        body: formData,
      });

      // If route not found on this path, try unversioned fallback
      if (res.status === 404 && url !== fallbackEndpoint) {
        continue;
      }

      const responseText = await res.text();
      let json: any = {};
      try {
        json = JSON.parse(responseText);
      } catch {
        json = { message: responseText };
      }

      if (!res.ok || json.success === false) {
        let cleanErrorMessage = "Video upload failed on server.";

        if (res.status === 413 || (typeof json.message === "string" && json.message.toLowerCase().includes("too large"))) {
          cleanErrorMessage = "Video file too large. Maximum allowed size is 50MB.";
        } else if (res.status === 400) {
          cleanErrorMessage = typeof json.message === "string" ? json.message : "Invalid video format. Only MP4, WebM, and MOV files are supported.";
        } else if (res.status === 401 || res.status === 403) {
          cleanErrorMessage = "Authentication required. Please verify admin credentials.";
        } else if (res.status >= 500) {
          cleanErrorMessage = "Server encountered an error while uploading video to Cloudinary. Please try again.";
        } else if (typeof json.message === "string" && json.message.trim()) {
          cleanErrorMessage = json.message.trim();
        } else if (typeof json.error === "string" && json.error.trim()) {
          cleanErrorMessage = json.error.trim();
        }

        console.error(`[BlogService Error] POST ${url} returned ${res.status}:`, cleanErrorMessage);
        throw new Error(cleanErrorMessage);
      }

      // Extract permanent Cloudinary video URL
      const permanentVideoUrl =
        json.videoUrl ||
        json.data?.videoUrl ||
        json.url ||
        json.data?.url ||
        json.data?.secure_url ||
        json.secure_url;

      const publicId =
        json.publicId ||
        json.data?.publicId ||
        json.data?.id ||
        json.id ||
        "";

      if (!permanentVideoUrl || permanentVideoUrl.startsWith("blob:")) {
        throw new Error("Server did not return a valid permanent Cloudinary video URL.");
      }

      return {
        success: true,
        message: json.message || "Video uploaded successfully to Cloudinary",
        videoUrl: permanentVideoUrl,
        publicId: publicId,
      };
    } catch (err: any) {
      lastError = err;
      if (err.message && !err.message.includes("404")) {
        break;
      }
    }
  }

  throw lastError || new Error("Failed to upload video to server. Please try again.");
}


/**
 * Create a new Blog article
 */
export async function createBlog(
  payload: Partial<Omit<BlogPost, "id" | "createdAt" | "views" | "author">> & {
    title: string;
    content: string;
    author?: string | any;
    featuredImagePublicId?: string;
    featured?: boolean;
    keywords?: string | string[];
  }
) {
  const BASE_URL = getApiBaseUrl();
  const endpoint = `${BASE_URL}/api/v1/blogs`;

  try {
    const bodyPayload: any = { ...payload };
    if (bodyPayload.isFeatured !== undefined) {
      bodyPayload.featured = bodyPayload.isFeatured;
    }
    if (typeof bodyPayload.author === "object" && bodyPayload.author !== null) {
      bodyPayload.author = bodyPayload.author.name;
    }
    if (typeof bodyPayload.keywords === "string") {
      bodyPayload.keywords = bodyPayload.keywords
        .split(",")
        .map((k: string) => k.trim())
        .filter(Boolean);
    }

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAdminHeaders(),
      },
      body: JSON.stringify(bodyPayload),
    });

    const responseText = await res.text();
    let json: any = {};
    try {
      json = JSON.parse(responseText);
    } catch {
      json = { message: responseText };
    }

    if (!res.ok || !json.success) {
      console.error(`[BlogService Error] POST ${endpoint} returned ${res.status}:`, json);
      throw new Error(json.message || "Failed to create blog post");
    }

    return {
      success: true,
      message: json.message,
      data: formatBlogPost(json.data),
    };
  } catch (err: any) {
    console.error(`[BlogService Error] POST ${endpoint} failed:`, {
      url: endpoint,
      errorName: err.name,
      errorMessage: err.message,
    });
    throw err;
  }
}

/**
 * Update an existing Blog article
 */
export async function updateBlog(
  id: string,
  payload: Partial<Omit<BlogPost, "author">> & {
    author?: string | any;
    featuredImagePublicId?: string;
    featured?: boolean;
    keywords?: string | string[];
  }
) {
  const BASE_URL = getApiBaseUrl();
  const endpoint = `${BASE_URL}/api/v1/blogs/${id}`;

  try {
    const bodyPayload: any = { ...payload };
    if (bodyPayload.isFeatured !== undefined) {
      bodyPayload.featured = bodyPayload.isFeatured;
    }
    if (typeof bodyPayload.author === "object" && bodyPayload.author !== null) {
      bodyPayload.author = bodyPayload.author.name;
    }
    if (typeof bodyPayload.keywords === "string") {
      bodyPayload.keywords = bodyPayload.keywords
        .split(",")
        .map((k: string) => k.trim())
        .filter(Boolean);
    }

    const res = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...getAdminHeaders(),
      },
      body: JSON.stringify(bodyPayload),
    });

    const responseText = await res.text();
    let json: any = {};
    try {
      json = JSON.parse(responseText);
    } catch {
      json = { message: responseText };
    }

    if (!res.ok || !json.success) {
      console.error(`[BlogService Error] PUT ${endpoint} returned ${res.status}:`, json);
      throw new Error(json.message || "Failed to update blog post");
    }

    return {
      success: true,
      message: json.message,
      data: formatBlogPost(json.data),
    };
  } catch (err: any) {
    console.error(`[BlogService Error] PUT ${endpoint} failed:`, {
      url: endpoint,
      errorName: err.name,
      errorMessage: err.message,
    });
    throw err;
  }
}

/**
 * Toggle Blog draft / published status
 * Target endpoint: PATCH https://mitsafe-backend.onrender.com/api/v1/blogs/{id}/status
 */
export async function updateBlogStatus(id: string, status: BlogStatus) {
  const BASE_URL = getApiBaseUrl();
  const endpoint = `${BASE_URL}/api/v1/blogs/${id}/status`;
  const adminHeaders = getAdminHeaders();

  console.log(`[BlogService] Updating status for blog '${id}' to '${status}' via PATCH ${endpoint}`);

  try {
    const res = await fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...adminHeaders,
      },
      body: JSON.stringify({ status }),
    });

    const responseText = await res.text();
    let json: any = {};
    try {
      json = JSON.parse(responseText);
    } catch {
      json = { message: responseText };
    }

    if (!res.ok || !json.success) {
      const errorMsg = json.message || `Status update failed with HTTP ${res.status}`;
      console.error(`[BlogService Error] PATCH ${endpoint} returned HTTP ${res.status}:`, json);
      throw new Error(errorMsg);
    }

    return {
      success: true,
      message: json.message,
      data: formatBlogPost(json.data),
    };
  } catch (err: any) {
    const isNetworkOrCors =
      err.name === "TypeError" && err.message.toLowerCase().includes("fetch");
    console.error(`[BlogService Error] PATCH ${endpoint} failed:`, {
      url: endpoint,
      errorName: err.name,
      errorMessage: err.message,
      isNetworkOrCors,
      hint: isNetworkOrCors
        ? "Network/CORS/Connection error. Check that backend at https://mitsafe-backend.onrender.com is running and allows origin."
        : undefined,
    });
    throw err;
  }
}

/**
 * Delete Blog article
 */
export async function deleteBlog(id: string) {
  const BASE_URL = getApiBaseUrl();
  const endpoint = `${BASE_URL}/api/v1/blogs/${id}`;

  try {
    const res = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        ...getAdminHeaders(),
      },
    });

    const responseText = await res.text();
    let json: any = {};
    try {
      json = JSON.parse(responseText);
    } catch {
      json = { message: responseText };
    }

    if (!res.ok || !json.success) {
      console.error(`[BlogService Error] DELETE ${endpoint} returned ${res.status}:`, json);
      throw new Error(json.message || "Failed to delete blog post");
    }

    return {
      success: true,
      message: json.message,
      data: json.data,
    };
  } catch (err: any) {
    console.error(`[BlogService Error] DELETE ${endpoint} failed:`, {
      url: endpoint,
      errorName: err.name,
      errorMessage: err.message,
    });
    throw err;
  }
}
