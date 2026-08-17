export interface BlogImage {
  url: string;
  altText: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  keywords: string[];
  createdAt: string;
  updatedAt: string;
  slug: string;
  images?: BlogImage[];
  metaDescription?: string;
  focusKeyword?: string;
  tags?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  category?: string;
  excerpt?: string;
  readingTime?: number;
  scheduledDate?: string;
  status?: 'draft' | 'published' | 'scheduled';
}
