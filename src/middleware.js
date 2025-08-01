import { NextResponse } from "next/server";
import { SUPPORTED_LANGUAGES } from "@/lib/language";

export const allowedLanguages = SUPPORTED_LANGUAGES;

export function middleware(request) {
  const acceptLanguage = request.headers.get("accept-language");
  const preferredLanguage = acceptLanguage
    ? acceptLanguage.split(",")[0].split("-")[0]
    : "en";

  // Get the language from cookies or fallback to preferred language
  const langCookie = request.cookies.get("lang");
  const language = allowedLanguages.includes(langCookie?.value)
    ? langCookie.value
    : allowedLanguages.includes(preferredLanguage)
    ? preferredLanguage
    : "en"; // Default to English if preferred language is not supported
  const response = NextResponse.next();

  // Modify headers only for HTML files
  if (request.nextUrl.pathname.endsWith(".html")) {
    response.headers.set(
      "Cache-Control",
      "max-age=0, must-revalidate", // Ensure to use a compatible value
    );
  }

  // Set the cookie with the current language
  response.cookies.set("lang", language);

  // Check for theme cookie and set it based on user preference if it doesn't exist
  const themeCookie = request.cookies.get("theme");
  if (themeCookie?.value !== "dark" && themeCookie?.value !== "light") {
    const preferenceHeader = request.headers.get("sec-ch-prefers-color-scheme");
    const prefersDarkMode = preferenceHeader
      ? preferenceHeader === "dark"
      : true;
    const theme = prefersDarkMode ? "dark" : "light";
    response.cookies.set("theme", theme);
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};
