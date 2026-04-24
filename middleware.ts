import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /_next/ (Next.js internals)
     * 2. /_static (static files)
     * 3. /_vercel (Vercel internals)
     * 4. /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    "/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, test.localhost:3000)
  let hostname = req.headers
    .get("host")!
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  // Special case for localhost
  if (hostname.includes("localhost:3000")) {
    hostname = hostname.replace("localhost:3000", process.env.NEXT_PUBLIC_ROOT_DOMAIN || "krishnaacademy.com");
  }

  const searchParams = req.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // rewrites for api.krishnaacademy.com
  if (hostname === `api.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(new URL(`/api${path}`, req.url));
  }

  // rewrites for admin.krishnaacademy.com
  if (hostname === `admin.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(new URL(`/admin${path}`, req.url));
  }

  // rewrites for app.krishnaacademy.com
  if (hostname === `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(new URL(`/portal${path}`, req.url));
  }

  // rewrite root domain to /site
  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN ||
    hostname === `www.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
  ) {
    return NextResponse.rewrite(new URL(`/site${path}`, req.url));
  }

  // rewrite everything else to `/[domain]/[slug]` (dynamic subdomains if needed in future)
  // return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
  
  return NextResponse.next();
}
