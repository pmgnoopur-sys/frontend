"use client";

import { Blog } from "@/types/blog";

const BLOGS_STORAGE_KEY = "blogs";

export function getBlogs(): Blog[] {
  if (typeof window === "undefined") return [];
  const blogs = localStorage.getItem(BLOGS_STORAGE_KEY);
  return blogs ? JSON.parse(blogs) : [];
}

export function saveBlog(blog: Omit<Blog, "id" | "createdAt" | "updatedAt" | "slug">): Blog {
  const blogs = getBlogs();
  const id = Date.now().toString();
  const slug = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const newBlog: Blog = {
    ...blog,
    id,
    slug,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  blogs.push(newBlog);
  localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(blogs));
  return newBlog;
}

export function updateBlog(id: string, updates: Partial<Blog>): Blog | null {
  const blogs = getBlogs();
  const index = blogs.findIndex((b) => b.id === id);
  if (index === -1) return null;
  
  blogs[index] = {
    ...blogs[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(blogs));
  return blogs[index];
}

export function deleteBlog(id: string): boolean {
  const blogs = getBlogs();
  const filtered = blogs.filter((b) => b.id !== id);
  if (filtered.length === blogs.length) return false;
  localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(filtered));
  return true;
}

export function getBlogById(id: string): Blog | null {
  const blogs = getBlogs();
  return blogs.find((b) => b.id === id) || null;
}
