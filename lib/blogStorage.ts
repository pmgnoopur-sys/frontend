import { Blog } from "@/types/blog";
import { API_BASE_URL } from "@/lib/api";

export async function getBlogs(): Promise<Blog[]> {
  try {
    console.log("Attempting to fetch blogs");
    
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText} - ${errorText}`);
    }
    
    const blogs = await response.json();
    console.log(`Fetched ${blogs.length} blogs successfully`);
    
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
    console.log("Attempting to save blog with slug:", slug);
    
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...blog, slug }),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`Failed to save blog: ${response.status} ${response.statusText} - ${errorText}`);
    }
    
    const savedBlog = await response.json();
    console.log("Blog saved successfully:", savedBlog);
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
    console.log("Attempting to update blog with id:", id);
    
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`Failed to update blog: ${response.status} ${response.statusText} - ${errorText}`);
    }
    
    const updatedBlog = await response.json();
    console.log("Blog updated successfully:", updatedBlog);
    return {
      ...updatedBlog,
      id: updatedBlog._id,
      createdAt: updatedBlog.createdAt,
      updatedAt: updatedBlog.updatedAt,
    };
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error; // Changed from return null to throw error for consistent error handling
  }
}

export async function deleteBlog(id: string): Promise<boolean> {
  try {
    console.log("Attempting to delete blog with id:", id);
    
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: "DELETE",
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`Failed to delete blog: ${response.status} ${response.statusText} - ${errorText}`);
    }
    
    console.log("Blog deleted successfully");
    return true;
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error; // Changed from return false to throw error for consistent error handling
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
