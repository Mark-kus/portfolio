import { NextResponse } from "next/server";

const allowedPathnames = ["/en", "/es"];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const acceptLanguage = request.headers.get("accept-language");
  const preferredLanguage = acceptLanguage
    ? acceptLanguage.split(",")[0].split("-")[0]
    : "en";

  if (!allowedPathnames.includes(pathname)) {
    const redirectPath = allowedPathnames.includes(`/${preferredLanguage}`)
      ? `/${preferredLanguage}`
      : "/en";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|favicon.ico).*)",
};
