import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  const pathName = request.nextUrl;
  if (!pathName.startsWith("/api/feedback")) {
    return NextResponse.json({
      status: 404,
    });
  }
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/api/:path*",
};
