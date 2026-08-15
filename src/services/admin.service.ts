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
  user?: AdminUser;
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
      return {
        success: false,
        message: json.message || json.error || "Invalid email or password",
      };
    }

    return {
      success: true,
      message: json.message || "Login successful",
      data: json.data || { admin: json.user || { email: formattedEmail } },
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
    const res = await fetch(`${ADMIN_API_BASE_URL}/me`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    if (res.status === 401 || res.status === 403) {
      return { authenticated: false };
    }

    const json = await res.json().catch(() => ({}));

    if (res.ok && (json.success || json.admin || json.user)) {
      return {
        authenticated: true,
        admin: json.data?.admin || json.admin || json.user || undefined,
      };
    }

    return { authenticated: false };
  } catch (err) {
    return { authenticated: false };
  }
}

/**
 * Perform Admin Logout
 * Direct endpoint: POST https://mitsafe-backend.onrender.com/api/v1/admin/logout
 */
export async function adminLogoutApi(): Promise<boolean> {
  try {
    const res = await fetch(`${ADMIN_API_BASE_URL}/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json().catch(() => ({}));
    return res.ok || json.success;
  } catch (err) {
    return false;
  }
}
