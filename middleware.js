import { NextResponse } from "next/server";

export function middleware(req) {
  // const token = req.cookies.get("session");
  // const token = "fake-jwt-token"; // For testing purposes
  const token = ""; // For testing purposes
  const { pathname } = req.nextUrl;

  const isAuthPage = pathname.startsWith("/auth");
  const isProtectedPage = pathname.startsWith("/authenticated");

  // Handle root route
  if (pathname === "/") {
    const redirectTo = token ? "/dashboard" : "/auth/login";
    return NextResponse.redirect(new URL(redirectTo, req.url));
  }

  // If not logged in and trying to access authenticated pages → go to login
  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // If logged in and trying to hit login → go to dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/authenticated/:path*", "/auth/:path*"],
};
