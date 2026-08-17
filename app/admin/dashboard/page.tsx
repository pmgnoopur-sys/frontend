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
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900 border-b-2 border-[#FECB0F] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-white hover:text-[#FECB0F] transition-all duration-300 transform hover:scale-105"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      {/* Dashboard Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome to Admin Dashboard</h2>
        <p className="text-gray-300 mb-8">Select the dashboard you want to access</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blogs Dashboard Card */}
          <button
            onClick={() => router.push("/admin/dashboard/blogs")}
            className="bg-gray-900 rounded-lg shadow-xl border-2 border-[#FECB0F] p-8 hover:border-[#FFD54F] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#FECB0F] rounded-lg group-hover:bg-[#FFD54F] transition-colors">
                <FileText className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white">Blogs Dashboard</h3>
            </div>
            <p className="text-gray-300">
              Manage blog posts, create new content, edit existing articles, and handle blog-related tasks.
            </p>
          </button>

          {/* HR Dashboard Card */}
          <button
            onClick={() => router.push("/admin/dashboard/hr")}
            className="bg-gray-900 rounded-lg shadow-xl border-2 border-[#FECB0F] p-8 hover:border-[#FFD54F] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#FECB0F] rounded-lg group-hover:bg-[#FFD54F] transition-colors">
                <UsersIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white">HR Dashboard</h3>
            </div>
            <p className="text-gray-300">
              Manage HR operations, employee data, recruitment, and other human resources tasks.
            </p>
          </button>

          {/* User Management Card */}
          <button
            onClick={() => router.push("/admin/dashboard/users")}
            className="bg-gray-900 rounded-lg shadow-xl border-2 border-[#FECB0F] p-8 hover:border-[#FFD54F] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#FECB0F] rounded-lg group-hover:bg-[#FFD54F] transition-colors">
                <UserCog className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white">User Management</h3>
            </div>
            <p className="text-gray-300">
              Manage system users, roles, permissions, and view audit logs for security tracking.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
