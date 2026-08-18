"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  adminLoginApi,
  adminCheckSessionApi,
  adminLogoutApi,
  getStoredAdminToken,
  clearStoredAdminData,
  AdminUser,
} from "@/services/admin.service";

interface AdminAuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  adminUser: AdminUser | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  checkSession: () => Promise<boolean>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const router = useRouter();

  const checkSession = useCallback(async (): Promise<boolean> => {
    // 1. Check if token exists
    const token = getStoredAdminToken();
    if (!token) {
      setIsAuthenticated(false);
      setAdminUser(null);
      clearStoredAdminData();
      setIsLoading(false);
      return false;
    }

    try {
      // 2. Strictly verify session with backend API
      const result = await adminCheckSessionApi();
      if (result.authenticated && result.admin) {
        setIsAuthenticated(true);
        setAdminUser(result.admin);
        return true;
      } else {
        setIsAuthenticated(false);
        setAdminUser(null);
        clearStoredAdminData();
        return false;
      }
    } catch {
      setIsAuthenticated(false);
      setAdminUser(null);
      clearStoredAdminData();
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; message?: string }> => {
    try {
      setIsLoading(true);
      const res = await adminLoginApi(email, password);
      if (res.success && res.data?.admin) {
        setIsAuthenticated(true);
        setAdminUser(res.data.admin);
        setIsLoading(false);
        return { success: true, message: res.message };
      }
      setIsAuthenticated(false);
      setAdminUser(null);
      clearStoredAdminData();
      setIsLoading(false);
      return { success: false, message: res.message || "Invalid email or password." };
    } catch (err: any) {
      setIsAuthenticated(false);
      setAdminUser(null);
      clearStoredAdminData();
      setIsLoading(false);
      return {
        success: false,
        message: err.message || "An unexpected error occurred during login.",
      };
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await adminLogoutApi();
    } finally {
      clearStoredAdminData();
      setIsAuthenticated(false);
      setAdminUser(null);
      setIsLoading(false);
      router.replace("/admin/login");
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        adminUser,
        login,
        logout,
        checkSession,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}


