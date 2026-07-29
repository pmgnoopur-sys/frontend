"use client";

import { useEffect, useState } from "react";
import { User, getUserByUsername, updateUserLastLogin, addAuditLog, initializeUsers } from "./userStorage";

export function useBlogAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    initializeUsers();
    
    // Check for new auth system first
    const authData = localStorage.getItem("pmg_auth");
    if (authData) {
      try {
        const { userId } = JSON.parse(authData);
        const users = JSON.parse(localStorage.getItem("pmg_users") || "[]");
        const user = users.find((u: User) => u.id === userId);
        if (user) {
          setCurrentUser(user);
          setIsAuthenticated(true);
        }
      } catch (e) {
        console.error("Error parsing auth data:", e);
      }
    } else {
      // Migrate old auth system
      const oldAuth = localStorage.getItem("blogAdminAuth");
      if (oldAuth === "true") {
        // Auto-login as admin for backward compatibility
        const users = JSON.parse(localStorage.getItem("pmg_users") || "[]");
        const adminUser = users.find((u: User) => u.username === "admin");
        if (adminUser) {
          localStorage.setItem("pmg_auth", JSON.stringify({ userId: adminUser.id, role: adminUser.role }));
          setCurrentUser(adminUser);
          setIsAuthenticated(true);
          localStorage.removeItem("blogAdminAuth");
        }
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = (username: string, password: string): { success: boolean; error?: string; user?: User } => {
    const user = getUserByUsername(username);
    
    if (!user) {
      return { success: false, error: "User not found" };
    }
    
    if (user.password !== password) {
      return { success: false, error: "Invalid password" };
    }
    
    // Store auth
    localStorage.setItem("pmg_auth", JSON.stringify({ userId: user.id, role: user.role }));
    setCurrentUser(user);
    setIsAuthenticated(true);
    
    // Update last login
    updateUserLastLogin(user.id);
    
    // Log the login
    addAuditLog({
      userId: user.id,
      username: user.username,
      role: user.role,
      action: "login",
      timestamp: new Date().toISOString(),
      details: `User ${user.username} logged in`,
    });
    
    return { success: true, user };
  };

  const logout = () => {
    if (currentUser) {
      // Log the logout
      addAuditLog({
        userId: currentUser.id,
        username: currentUser.username,
        role: currentUser.role,
        action: "logout",
        timestamp: new Date().toISOString(),
        details: `User ${currentUser.username} logged out`,
      });
    }
    
    localStorage.removeItem("pmg_auth");
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const hasRole = (role: "superadmin" | "hr" | "blog"): boolean => {
    return currentUser?.role === role || currentUser?.role === "superadmin";
  };

  return { isAuthenticated, isLoading, login, logout, currentUser, hasRole };
}


