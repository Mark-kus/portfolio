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
      "max-age=0, must-revalidate", // Ensure to use a compatible value
    );
  }

  // Set the cookie with the current language
  response.cookies.set("lang", language);

  // Check for theme cookie and set it based on user preference if it doesn't exist
  const themeCookie = request.cookies.get("theme");
  if (
    !themeCookie ||
    (themeCookie.value !== "dark" && themeCookie.value !== "light")
  ) {
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
