import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
import {
  publicUrls,
  authUrls,
  defaultDashboardUrl,
  protectedUrls,
} from "@/constants/navigation";
import { COOKIE_KEY } from "@/constants";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const referer = req.headers.get("referer");

  const isProtectedRoute = protectedUrls?.includes(path);
  const isPublicRoute = publicUrls.includes(path);
  const isAuthRoute = authUrls.includes(path);

  // ✅ Await cookies in middleware context
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_KEY)?.value;

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isAuthRoute && token) {
    const redirectUrl = referer
      ? new URL(referer)
      : new URL(defaultDashboardUrl, req.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
