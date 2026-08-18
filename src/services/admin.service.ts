export const ADMIN_AUTH_COOKIE_NAME = "mitsafe_admin_token";
export const ADMIN_USER_STORAGE_KEY = "mitsafe_admin_user";
export const ADMIN_TOKEN_STORAGE_KEY = "mitsafe_admin_token";

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://mitsafe-backend.onrender.com"
).trim().replace(/\/+$/, "");

const ADMIN_API_BASE_URL = `${API_BASE_URL}/api/v1/admin`;

export interface AdminUser {
  id?: string;
  email?: string;
  name?: string;
  role?: string;
}

export interface AdminLoginResponse {
  success: boolean;
  message?: string;
  data?: {
    admin?: AdminUser;
    token?: string;
  };
  token?: string;
  user?: AdminUser;
}

/**
 * Cookie Helper: Set Admin Authentication Cookie
 */
export function setAdminAuthCookie(token: string, days: number = 7): void {
  if (typeof document === "undefined") return;
  const maxAge = days * 24 * 60 * 60;
  const isSecure = typeof window !== "undefined" && window.location.protocol === "https:";
  const secureFlag = isSecure ? "; Secure" : "";
  document.cookie = `${ADMIN_AUTH_COOKIE_NAME}=${encodeURIComponent(token)}; path=/; max-age=${maxAge}; SameSite=Lax${secureFlag}`;
}

/**
 * Cookie Helper: Get Admin Authentication Cookie
 */
export function getAdminAuthCookie(): string | null {
  if (typeof document === "undefined") return null;
  const nameEQ = `${ADMIN_AUTH_COOKIE_NAME}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}

/**
 * Cookie Helper: Clear Admin Authentication Cookie
 */
export function clearAdminAuthCookie(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${ADMIN_AUTH_COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0; SameSite=Lax`;
  // Also clear legacy cookie names if any exist
  document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0; SameSite=Lax";
  document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0; SameSite=Lax";
}

/**
 * Helper: Retrieve active stored Admin token from cookie or localStorage
 */
export function getStoredAdminToken(): string | null {
  const cookieToken = getAdminAuthCookie();
  if (cookieToken) return cookieToken;

  if (typeof window !== "undefined" && window.localStorage) {
    try {
      return localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY);
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Helper: Retrieve active stored Admin user details from localStorage
 */
export function getStoredAdminUser(): AdminUser | null {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const stored = localStorage.getItem(ADMIN_USER_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
}

/**
 * Helper: Save Admin user details to localStorage
 */
export function saveStoredAdminUser(user: AdminUser): void {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      localStorage.setItem(ADMIN_USER_STORAGE_KEY, JSON.stringify(user));
    } catch {
      // Storage unavailable or disabled
    }
  }
}

/**
 * Helper: Clear all Admin local storage items
 */
export function clearStoredAdminData(): void {
  clearAdminAuthCookie();
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY);
      localStorage.removeItem(ADMIN_USER_STORAGE_KEY);
    } catch {
      // Ignore
    }
  }
}

/**
 * Perform Admin Login with credentials
 * Direct endpoint: POST https://mitsafe-backend.onrender.com/api/v1/admin/login
 */
export async function adminLoginApi(email: string, password: string): Promise<AdminLoginResponse> {
  try {
    const formattedEmail = email.trim().toLowerCase();
    const res = await fetch(`${ADMIN_API_BASE_URL}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formattedEmail,
        password: password,
      }),
    });

    const json = await res.json().catch(() => ({}));

    if (!res.ok || !json.success) {
      clearStoredAdminData();
      return {
        success: false,
        message: json.message || json.error || "Invalid email or password",
      };
    }

    // Extract auth token & user
    const token =
      json.data?.token ||
      json.token ||
      json.data?.accessToken ||
      json.accessToken ||
      "mitsafe_admin_session_active";

    const adminUser: AdminUser =
      json.data?.admin ||
      json.admin ||
      json.data?.user ||
      json.user ||
      { email: formattedEmail };

    // Persist token in cookie for Next.js middleware and browser refresh
    setAdminAuthCookie(token);

    if (typeof window !== "undefined" && window.localStorage) {
      try {
        localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, token);
        saveStoredAdminUser(adminUser);
      } catch {
        // Ignore
      }
    }

    return {
      success: true,
      message: json.message || "Login successful",
      data: {
        admin: adminUser,
        token: token,
      },
      user: adminUser,
      token: token,
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Unable to connect to authentication server. Please check your network.",
    };
  }
}

/**
 * Check current Admin Session (/me endpoint)
 * Direct endpoint: GET https://mitsafe-backend.onrender.com/api/v1/admin/me
 */
export async function adminCheckSessionApi(): Promise<{
  authenticated: boolean;
  admin?: AdminUser;
}> {
  try {
    const token = getStoredAdminToken();

    // If no token or cookie exists, user is definitely not logged in
    if (!token) {
      clearStoredAdminData();
      return { authenticated: false };
    }

    const headers: Record<string, string> = {};
    if (token && token !== "mitsafe_admin_session_active") {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`${ADMIN_API_BASE_URL}/me`, {
      method: "GET",
      credentials: "include",
      headers,
      cache: "no-store",
    });

    if (res.status === 401 || res.status === 403) {
      clearStoredAdminData();
      return { authenticated: false };
    }

    const json = await res.json().catch(() => ({}));

    if (res.ok && (json.success || json.authenticated === true || json.admin || json.user)) {
      const adminData =
        json.data?.admin ||
        json.admin ||
        json.data?.user ||
        json.user ||
        getStoredAdminUser() ||
        undefined;

      if (adminData) {
        saveStoredAdminUser(adminData);
      }

      return {
        authenticated: true,
        admin: adminData,
      };
    }

    // If backend indicated false authentication
    clearStoredAdminData();
    return { authenticated: false };
  } catch (err) {
    // If network error occurred but we have a valid cookie/token, keep local session
    const storedUser = getStoredAdminUser();
    const token = getStoredAdminToken();
    if (token && storedUser) {
      return {
        authenticated: true,
        admin: storedUser,
      };
    }
    return { authenticated: false };
  }
}

/**
 * Perform Admin Logout
 * Direct endpoint: POST https://mitsafe-backend.onrender.com/api/v1/admin/logout
 */
export async function adminLogoutApi(): Promise<boolean> {
  try {
    const token = getStoredAdminToken();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (token && token !== "mitsafe_admin_session_active") {
      headers["Authorization"] = `Bearer ${token}`;
    }

    await fetch(`${ADMIN_API_BASE_URL}/logout`, {
      method: "POST",
      credentials: "include",
      headers,
    }).catch(() => null);

    clearStoredAdminData();
    return true;
  } catch (err) {
    clearStoredAdminData();
    return true;
  }
}
