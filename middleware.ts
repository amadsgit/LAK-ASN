import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Route publik (boleh diakses tanpa login)
const PUBLIC_ROUTES = ["/"];

// Mapping role ke dashboard
const ROLE_REDIRECT: Record<string, string> = {
  KASUBAG_TU: "/dashboard/kasubagtu",
  PEGAWAI: "/dashboard/pegawai",
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Skip route internal Next.js & API
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  // 2. Ambil token NextAuth
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuth = !!token;
  const isPublic = PUBLIC_ROUTES.includes(pathname);

  // 3. Jika SUDAH LOGIN tapi akses halaman login (/)
  if (isAuth && isPublic) {
    const role = token?.role as string;
    const redirectPath = ROLE_REDIRECT[role] || "/dashboard";

    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  // 4. Jika BELUM LOGIN tapi akses dashboard
  if (!isAuth && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 5. Proteksi berdasarkan ROLE
  if (isAuth) {
    const role = token?.role as string;
    const allowedPath = ROLE_REDIRECT[role];

    // Kalau role tidak dikenal → paksa ke root
    if (!allowedPath) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Kalau akses dashboard tapi bukan miliknya
    if (
      pathname.startsWith("/dashboard") &&
      !pathname.startsWith(allowedPath)
    ) {
      return NextResponse.redirect(new URL(allowedPath, req.url));
    }
  }

  return NextResponse.next();
}

// 6. Matcher (exclude static file)
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|logopkm.png|akun.png).*)",
  ],
};