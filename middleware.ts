import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "next-auth/middleware";
// This function can be marked `async` if using `await` inside

// export default withAuth(function middleware(request: NextRequest) {});
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     "/profile/:path*",
//     "/dashboard/:path*",
//     {
//       source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
//       missing: [
//         { type: "header", key: "next-router-prefetch" },
//         { type: "header", key: "purpose", value: "prefetch" },
//       ],
//     },
//   ],
// };