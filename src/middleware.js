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

  const response = NextResponse.next();

  // Modificar encabezados sólo para archivos HTML
  if (request.nextUrl.pathname.endsWith(".html")) {
    response.headers.set(
      "Cache-Control",
      "max-age=0, must-revalidate" // Asegúrate de usar un valor compatible
    );
  }

  return response;
}

export const config = {
  matcher: "/:lang([a-z]{0,3})",
};
