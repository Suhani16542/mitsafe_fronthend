"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  adminLoginApi,
  adminCheckSessionApi,
  adminLogoutApi,
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
  const pathname = usePathname();

  const checkSession = useCallback(async (): Promise<boolean> => {
    try {
      const result = await adminCheckSessionApi();
      setIsAuthenticated(result.authenticated);
      if (result.authenticated && result.admin) {
        setAdminUser(result.admin);
      } else if (!result.authenticated) {
        setAdminUser(null);
      }
      return result.authenticated;
    } catch (err) {
      setIsAuthenticated(false);
      setAdminUser(null);
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
      const res = await adminLoginApi(email, password);
      if (res.success) {
        setIsAuthenticated(true);
        if (res.data?.admin) {
          setAdminUser(res.data.admin);
        }
        return { success: true, message: res.message };
      }
      return { success: false, message: res.message || "Invalid email or password." };
    } catch (err: any) {
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
      setIsAuthenticated(false);
      setAdminUser(null);
      setIsLoading(false);
      router.push("/admin/login");
      router.refresh();
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
