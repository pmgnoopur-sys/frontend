import { Blog } from "@/types/blog";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) throw new Error("Failed to fetch blogs");
    const blogs = await response.json();
    return blogs.map((blog: any) => ({
      ...blog,
      id: blog._id,
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt,
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function saveBlog(blog: Omit<Blog, "id" | "createdAt" | "updatedAt">): Promise<Blog> {
  try {
    const slug = blog.slug || blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...blog, slug }),
    });
    if (!response.ok) throw new Error("Failed to save blog");
    const savedBlog = await response.json();
    return {
      ...savedBlog,
      id: savedBlog._id,
      createdAt: savedBlog.createdAt,
      updatedAt: savedBlog.updatedAt,
    };
  } catch (error) {
    console.error("Error saving blog:", error);
    throw error;
  }
}

export async function updateBlog(id: string, updates: Partial<Blog>): Promise<Blog | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error("Failed to update blog");
    const updatedBlog = await response.json();
    return {
      ...updatedBlog,
      id: updatedBlog._id,
      createdAt: updatedBlog.createdAt,
      updatedAt: updatedBlog.updatedAt,
    };
  } catch (error) {
    console.error("Error updating blog:", error);
    return null;
  }
}

export async function deleteBlog(id: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete blog");
    return true;
  } catch (error) {
    console.error("Error deleting blog:", error);
    return false;
  }
}

export async function getBlogById(id: string): Promise<Blog | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) throw new Error("Failed to fetch blog");
    const blog = await response.json();
    return {
      ...blog,
      id: blog._id,
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt,
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/slug/${slug}`);
    if (!response.ok) throw new Error("Failed to fetch blog");
    const blog = await response.json();
    return {
      ...blog,
      id: blog._id,
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt,
    };
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}
