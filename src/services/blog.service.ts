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
  // 1. Read NEXT_PUBLIC_API_URL (injected at build time, accessible in browser and server)
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/+$/, "");
  if (publicApiUrl) {
    return publicApiUrl;
  }

  // 2. Server-side only (Node.js runtime): Fall back to BACKEND_API_URL
  if (typeof window === "undefined") {
    const backendApiUrl = process.env.BACKEND_API_URL?.trim().replace(/\/+$/, "");
    if (backendApiUrl) {
      return backendApiUrl;
    }
  }

  // 3. Client & Server fallback: Production Render backend
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
    featuredImage:
      rawBlog.featuredImage ||
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
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
export async function getBlogs(params: FetchBlogsParams = {}) {
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
      },
      next: { revalidate: 30 },
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
      next: { revalidate: 60 },
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

    return {
      success: true,
      data: json.data || [
        "Technology",
        "AI & Automation",
        "Cloud & Security",
        "Software Engineering",
      ],
    };
  } catch (err: any) {
    console.error(`[BlogService Error] GET ${endpoint} failed:`, {
      url: endpoint,
      errorName: err.name,
      errorMessage: err.message,
    });
    return {
      success: true,
      data: [
        "Technology",
        "AI & Automation",
        "Cloud & Security",
        "Software Engineering",
      ],
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

    if (!res.ok || !json.success) {
      console.error(`[BlogService Error] POST ${endpoint} returned ${res.status}:`, json);
      throw new Error(json.message || "Image upload failed");
    }

    return {
      success: true,
      message: json.message,
      imageUrl: json.imageUrl,
      publicId: json.publicId,
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
