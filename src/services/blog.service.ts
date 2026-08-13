import { BlogPost, BlogStatus } from "@/types/adminBlog";

export function getApiBaseUrl(): string | null {
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  if (envUrl && envUrl.trim() !== "") {
    const trimmed = envUrl.trim();
    if (typeof window !== "undefined") {
      const isLocalhostDomain =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "[::1]";
      if (!isLocalhostDomain && (trimmed.includes("localhost") || trimmed.includes("127.0.0.1"))) {
        return null;
      }
    }
    return trimmed;
  }

  if (typeof window !== "undefined") {
    const isLocalhostDomain =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "[::1]";
    if (isLocalhostDomain) {
      return "http://localhost:5000";
    }
    return null;
  }

  return "http://localhost:5000";
}

function getAdminHeaders() {
  const adminKey =
    process.env.NEXT_PUBLIC_BLOG_ADMIN_KEY ||
    process.env.NEXT_PUBLIC_BLOG_ADMIN_API_KEY ||
    "hyikhgt6drewa2drhjj555";
  return {
    "x-blog-admin-key": adminKey,
  };
}

export function formatBlogPost(rawBlog: any): BlogPost {
  if (!rawBlog) return rawBlog;

  const authorObj =
    typeof rawBlog.author === "object" && rawBlog.author !== null
      ? rawBlog.author
      : {
          id: "auth-1",
          name: typeof rawBlog.author === "string" && rawBlog.author ? rawBlog.author : "Mitsafe Team",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
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
    tags: Array.isArray(rawBlog.tags) ? rawBlog.tags : typeof rawBlog.tags === "string" ? rawBlog.tags.split(",").map((t: string) => t.trim()) : [],
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
  try {
    const BASE_URL = getApiBaseUrl();
    if (!BASE_URL) {
      return {
        success: false,
        data: [],
        pagination: {
          page: params.page || 1,
          limit: params.limit || 10,
          total: 0,
          totalPages: 1,
        },
      };
    }

    const query = new URLSearchParams();
    if (params.page) query.append("page", params.page.toString());
    if (params.limit) query.append("limit", params.limit.toString());
    if (params.category && params.category !== "all") query.append("category", params.category);
    if (params.featured !== undefined) query.append("featured", params.featured.toString());
    if (params.search) query.append("search", params.search);
    if (params.sort) query.append("sort", params.sort);
    if (params.status) query.append("status", params.status);

    const queryString = query.toString();
    const url = `${BASE_URL}/api/v1/blogs${queryString ? `?${queryString}` : ""}`;

    const res = await fetch(url, { method: "GET", cache: "no-store" });
    const json = await res.json();

    if (!res.ok || !json.success) {
      return {
        success: false,
        data: [],
        pagination: {
          page: params.page || 1,
          limit: params.limit || 10,
          total: 0,
          totalPages: 1,
        },
      };
    }

    const formattedData = (json.data || []).map(formatBlogPost);

    return {
      success: true,
      data: formattedData,
      pagination: json.pagination || {
        page: params.page || 1,
        limit: params.limit || 10,
        total: formattedData.length,
        totalPages: 1,
      },
    };
  } catch (err: any) {
    return {
      success: false,
      data: [],
      pagination: {
        page: params.page || 1,
        limit: params.limit || 10,
        total: 0,
        totalPages: 1,
      },
    };
  }
}

/**
 * Fetch distinct blog categories
 */
export async function getCategories() {
  try {
    const BASE_URL = getApiBaseUrl();
    if (!BASE_URL) {
      return { success: false, data: [] };
    }

    const res = await fetch(`${BASE_URL}/api/v1/blogs/categories`, { method: "GET", cache: "no-store" });
    const json = await res.json();

    if (!res.ok || !json.success) {
      return { success: false, data: [] };
    }

    return {
      success: true,
      data: json.data || [],
    };
  } catch (err: any) {
    return { success: false, data: [] };
  }
}

/**
 * Fetch single blog by slug
 */
export async function getBlogBySlug(slug: string) {
  try {
    const BASE_URL = getApiBaseUrl();
    if (!BASE_URL) {
      return { success: false, data: null };
    }

    const res = await fetch(`${BASE_URL}/api/v1/blogs/${encodeURIComponent(slug)}`, {
      method: "GET",
      cache: "no-store",
    });
    const json = await res.json();

    if (!res.ok || !json.success) {
      return { success: false, data: null };
    }

    return {
      success: true,
      data: formatBlogPost(json.data),
    };
  } catch (err: any) {
    return { success: false, data: null };
  }
}

/**
 * Upload featured image for blog
 */
export async function uploadBlogImage(file: File) {
  try {
    const BASE_URL = getApiBaseUrl();
    if (!BASE_URL) {
      throw new Error("API URL unavailable on client-side remote domain");
    }

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(`${BASE_URL}/api/v1/blogs/upload-image`, {
      method: "POST",
      headers: {
        ...getAdminHeaders(),
      },
      body: formData,
    });

    const json = await res.json();

    if (!res.ok || !json.success) {
      throw new Error(json.message || "Image upload failed");
    }

    return {
      success: true,
      message: json.message,
      imageUrl: json.imageUrl,
      publicId: json.publicId,
    };
  } catch (err: any) {
    console.error("uploadBlogImage Error:", err);
    throw err;
  }
}

/**
 * Create a new Blog article
 */
export async function createBlog(payload: {
  title: string;
  excerpt?: string;
  content: string;
  category: string;
  tags?: string[] | string;
  author?: string;
  featuredImage?: string;
  featuredImagePublicId?: string;
  readTime?: string;
  status?: BlogStatus;
  featured?: boolean;
  slug?: string;
}) {
  try {
    const BASE_URL = getApiBaseUrl();
    if (!BASE_URL) {
      throw new Error("API URL unavailable on client-side remote domain");
    }

    const res = await fetch(`${BASE_URL}/api/v1/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAdminHeaders(),
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (!res.ok || !json.success) {
      throw new Error(json.message || "Failed to create blog post");
    }

    return {
      success: true,
      message: json.message,
      data: formatBlogPost(json.data),
    };
  } catch (err: any) {
    console.error("createBlog Error:", err);
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
  }
) {
  try {
    const bodyPayload: any = { ...payload };
    if (bodyPayload.isFeatured !== undefined) {
      bodyPayload.featured = bodyPayload.isFeatured;
    }
    if (typeof bodyPayload.author === "object" && bodyPayload.author !== null) {
      bodyPayload.author = bodyPayload.author.name;
    }

    const BASE_URL = getApiBaseUrl();
    if (!BASE_URL) {
      throw new Error("API URL unavailable on client-side remote domain");
    }

    const res = await fetch(`${BASE_URL}/api/v1/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...getAdminHeaders(),
      },
      body: JSON.stringify(bodyPayload),
    });

    const json = await res.json();

    if (!res.ok || !json.success) {
      throw new Error(json.message || "Failed to update blog post");
    }

    return {
      success: true,
      message: json.message,
      data: formatBlogPost(json.data),
    };
  } catch (err: any) {
    console.error("updateBlog Error:", err);
    throw err;
  }
}

/**
 * Toggle Blog draft / published status
 */
export async function updateBlogStatus(id: string, status: BlogStatus) {
  try {
    const BASE_URL = getApiBaseUrl();
    if (!BASE_URL) {
      throw new Error("API URL unavailable on client-side remote domain");
    }

    const res = await fetch(`${BASE_URL}/api/v1/blogs/${id}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...getAdminHeaders(),
      },
      body: JSON.stringify({ status }),
    });

    const json = await res.json();

    if (!res.ok || !json.success) {
      throw new Error(json.message || "Failed to update blog status");
    }

    return {
      success: true,
      message: json.message,
      data: formatBlogPost(json.data),
    };
  } catch (err: any) {
    console.error("updateBlogStatus Error:", err);
    throw err;
  }
}

/**
 * Delete Blog article
 */
export async function deleteBlog(id: string) {
  try {
    const BASE_URL = getApiBaseUrl();
    if (!BASE_URL) {
      throw new Error("API URL unavailable on client-side remote domain");
    }

    const res = await fetch(`${BASE_URL}/api/v1/blogs/${id}`, {
      method: "DELETE",
      headers: {
        ...getAdminHeaders(),
      },
    });

    const json = await res.json();

    if (!res.ok || !json.success) {
      throw new Error(json.message || "Failed to delete blog post");
    }

    return {
      success: true,
      message: json.message,
      data: json.data,
    };
  } catch (err: any) {
    console.error("deleteBlog Error:", err);
    throw err;
  }
}
