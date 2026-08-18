export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  category: string;
  imageColor?: string;
  tags?: string[];
  featured?: boolean;
}

// All blogs are dynamically fetched from the Mitsafe Backend API.
export const blogData: BlogPost[] = [];
