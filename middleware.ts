import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default withAuth(
  async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const isAuth = await getToken({ req: req });
    const protectedRoutes = ["/login"];
    const isAuthRoute = pathname.startsWith("/login");
    const isProtectedRoutes = protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (!isAuth && isProtectedRoutes) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (isAuthRoute && isAuth) {
      return NextResponse.redirect(new URL("/profile", req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/profile/:path*", "/auth/:path*", "/programmes/:path*"],
};
