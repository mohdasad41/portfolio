import { timingSafeEqual } from "node:crypto";

/**
 * Temporary site lock. Set to `false` when the site is ready to go public,
 * or set SITE_LOCK=false in the environment.
 */
export const SITE_LOCK_ENABLED = process.env.SITE_LOCK !== "false";

export const SITE_LOCK_COOKIE = "site_unlock";
export const SITE_LOCK_PATH = "/unlock";
export const SITE_PASSWORD = process.env.SITE_PASSWORD ?? "8099";

export function isUnlockPath(pathname: string) {
  return pathname === SITE_LOCK_PATH || pathname.startsWith(`${SITE_LOCK_PATH}/`);
}

export function isPublicAsset(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname === "/icon.svg" ||
    pathname.startsWith("/opengraph-image")
  );
}

export function passwordMatches(input: string) {
  const expected = Buffer.from(SITE_PASSWORD);
  const received = Buffer.from(input);

  if (expected.length !== received.length) {
    return false;
  }

  return timingSafeEqual(expected, received);
}
