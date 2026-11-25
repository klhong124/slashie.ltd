import { NextResponse, type NextRequest } from "next/server";

/**
 * English is served from unprefixed URLs (/pricing) by rewriting to /en/pricing.
 * Traditional Chinese keeps its /zh-hk prefix. Direct /en/* URLs redirect to the
 * unprefixed form so each page has one public address. Generated metadata
 * images are left alone because their URLs carry the /en prefix.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/zh-hk" || pathname.startsWith("/zh-hk/")) {
    return NextResponse.next();
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    if (/\/(opengraph|twitter)-image/.test(pathname)) return NextResponse.next();
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/|api/|brand/|icon|apple-icon|favicon|robots\\.txt|sitemap\\.xml|.*\\.[a-zA-Z0-9]+$).*)"],
};
