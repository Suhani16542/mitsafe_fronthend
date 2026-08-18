import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Retrieve admin auth cookie
  const adminToken =
    request.cookies.get("mitsafe_admin_token")?.value ||
    request.cookies.get("admin_token")?.value ||
    request.cookies.get("admin_session")?.value ||
    request.cookies.get("token")?.value;

  const isLoginPage = pathname === "/admin/login";
  const isAdminRoot = pathname === "/admin" || pathname === "/admin/";
  const isAdminRoute = pathname === "/admin" || pathname.startsWith("/admin/");

  // 1. If accessing protected admin routes without an active admin token
  if (isAdminRoute && !isLoginPage && !adminToken) {
    const loginUrl = new URL("/admin/login", request.url);
    if (!isAdminRoot) {
      loginUrl.searchParams.set("from", pathname);
    }
    return NextResponse.redirect(loginUrl);
  }

  // 2. If authenticated admin visits login page, redirect to blogs dashboard
  if (isLoginPage && adminToken) {
    const fromParam = request.nextUrl.searchParams.get("from");
    const destination = fromParam && fromParam.startsWith("/admin") ? fromParam : "/admin/blogs";
    return NextResponse.redirect(new URL(destination, request.url));
  }

  // 3. If authenticated admin visits /admin root, redirect to /admin/blogs
  if (isAdminRoot && adminToken) {
    return NextResponse.redirect(new URL("/admin/blogs", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
  ],
};


