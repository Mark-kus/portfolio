import { NextResponse } from "next/server";

export const allowedLanguages = ["en", "es"];

export function middleware(request) {
  const acceptLanguage = request.headers.get("accept-language");
  const preferredLanguage = acceptLanguage
    ? acceptLanguage.split(",")[0].split("-")[0]
    : "en";

  // Get the language from cookies or fallback to preferred language
  const langCookie = request.cookies.get("lang");
  const language = allowedLanguages.includes(langCookie)
    ? langCookie
    : preferredLanguage;

  const response = NextResponse.next();

  // Modify headers only for HTML files
  if (request.nextUrl.pathname.endsWith(".html")) {
    response.headers.set(
      "Cache-Control",
      "max-age=0, must-revalidate" // Ensure to use a compatible value
    );
  }

  // Set the cookie with the current language
  response.cookies.set("lang", language);

  return response;
}

export const config = {
  matcher: "/:path*",
};
