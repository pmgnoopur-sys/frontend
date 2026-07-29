"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBlogAuth } from "@/lib/blogAuth";
import { LayoutDashboard, FileText, Users as UsersIcon, UserCog, LogOut } from "lucide-react";

export default function DashboardSelection() {
  const { isAuthenticated, isLoading, logout } = useBlogAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/blog/adminlogin");
    }
  }, [isAuthenticated, isLoading, router]);

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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      {/* Dashboard Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Admin Dashboard</h2>
        <p className="text-gray-600 mb-8">Select the dashboard you want to access</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blogs Dashboard Card */}
          <button
            onClick={() => router.push("/admin/dashboard/blogs")}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Blogs Dashboard</h3>
            </div>
            <p className="text-gray-600">
              Manage blog posts, create new content, edit existing articles, and handle blog-related tasks.
            </p>
          </button>

          {/* HR Dashboard Card */}
          <button
            onClick={() => router.push("/admin/dashboard/hr")}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <UsersIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">HR Dashboard</h3>
            </div>
            <p className="text-gray-600">
              Manage HR operations, employee data, recruitment, and other human resources tasks.
            </p>
          </button>

          {/* User Management Card */}
          <button
            onClick={() => router.push("/admin/dashboard/users")}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <UserCog className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">User Management</h3>
            </div>
            <p className="text-gray-600">
              Manage system users, roles, permissions, and view audit logs for security tracking.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
