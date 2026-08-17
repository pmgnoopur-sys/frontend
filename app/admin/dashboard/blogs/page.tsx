"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBlogAuth } from "@/lib/blogAuth";
import { getBlogs, deleteBlog, saveBlog, updateBlog } from "@/lib/blogStorage";
import { Blog } from "@/types/blog";
import BlogForm from "@/components/BlogForm";
import { Trash2, Edit, Plus, LogOut, ArrowLeft } from "lucide-react";

export default function BlogAdminDashboard() {
  const { isAuthenticated, isLoading, logout } = useBlogAuth();
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/blog/adminlogin");
    }
  }, [isAuthenticated, isLoading, router]);

  useEffect(() => {
    if (isAuthenticated) {
      loadBlogs();
    }
  }, [isAuthenticated]);

  const loadBlogs = async () => {
    const blogs = await getBlogs();
    setBlogs(blogs);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      await deleteBlog(id);
      loadBlogs();
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setEditingBlog(null);
    setShowForm(true);
  };

  const handleFormSubmit = async (data: Omit<Blog, "id" | "createdAt" | "updatedAt">) => {
    if (editingBlog) {
      await updateBlog(editingBlog.id, data);
    } else {
      await saveBlog(data);
    }
    await loadBlogs();
    setShowForm(false);
    setEditingBlog(null);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingBlog(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900 border-b-2 border-[#FECB0F] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="flex items-center gap-2 text-white hover:text-[#FECB0F] transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </button>
            <h1 className="text-2xl font-bold text-white">Blog Admin Dashboard</h1>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-white hover:text-[#FECB0F] transition-all duration-300 transform hover:scale-105"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm ? (
          <BlogForm
            blog={editingBlog || undefined}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        ) : (
          <>
            {/* Add Blog Button */}
            <button
              onClick={handleAddNew}
              className="mb-6 flex items-center gap-2 bg-[#FECB0F] text-black px-4 py-2 rounded-md hover:bg-[#FFD54F] transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Add New Blog
            </button>

            {/* Blogs List */}
            {blogs.length === 0 ? (
              <div className="bg-gray-900 rounded-lg shadow-xl border-2 border-[#FECB0F] p-8 text-center">
                <p className="text-gray-300">No blogs yet. Create your first blog!</p>
              </div>
            ) : (
              <div className="bg-gray-900 rounded-lg shadow-xl border-2 border-[#FECB0F] overflow-hidden">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">
                        Keywords
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">
                        Created
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-[#FECB0F] uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {blogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-gray-800 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">{blog.title}</div>
                          <div className="text-sm text-gray-400">{blog.slug}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">{blog.author}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {blog.keywords?.map((keyword, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[#FECB0F] text-black"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => handleEdit(blog)}
                              className="text-[#FECB0F] hover:text-[#FFD54F] transition-colors"
                              title="Edit"
                            >
                              <Edit className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(blog.id)}
                              className="text-red-500 hover:text-red-400 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
