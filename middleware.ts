import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {

  const { pathname } = req.nextUrl;

  // Check admin authentication cookie
  const adminAuth = req.cookies.get("admin-auth");

  // Allow access to login page
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect all admin routes
  if (pathname.startsWith("/admin")) {

    if (!adminAuth) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

  }

  return NextResponse.next();
}

// Apply middleware only to admin routes
export const config = {
  matcher: ["/admin/:path*"],
};