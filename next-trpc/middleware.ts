import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const protectedPaths = ["/dashboard"];

const middleware = withAuth(
  function middleware(request) {
    const token = request.nextauth?.token;
    const pathname = request.nextUrl.pathname;
    const protectedPathsWithLocale = protectedPaths;

    const callbackUrl = pathname || "/";
    if (!token && protectedPathsWithLocale.includes(pathname)) {
      return NextResponse.redirect(
        new URL(
          `/api/auth/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`,
          request.url
        )
      );
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => true,
    },
  }
);

export default middleware;
