import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  SITE_LOCK_COOKIE,
  SITE_LOCK_ENABLED,
  SITE_LOCK_PATH,
  isPublicAsset,
  isUnlockPath,
} from "@/lib/site-lock";

export function proxy(request: NextRequest) {
  if (!SITE_LOCK_ENABLED) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (isPublicAsset(pathname) || isUnlockPath(pathname)) {
    return NextResponse.next();
  }

  if (request.cookies.get(SITE_LOCK_COOKIE)?.value === "1") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = SITE_LOCK_PATH;
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg).*)"],
};
