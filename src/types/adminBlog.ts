export type BlogStatus = "published" | "draft";

export interface BlogAuthor {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
  status: "active" | "inactive";
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  readTime: string;
  featuredImage: string;
  status: BlogStatus;
  isFeatured: boolean;
  publishedAt: string;
  createdAt: string;
  views: number;
}

export interface BlogStats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
  featuredBlogs: number;
  totalCategories: number;
}

export interface BlogFilterState {
  search: string;
  category: string;
  status: string;
  sortBy: "newest" | "oldest" | "title" | "views";
}
