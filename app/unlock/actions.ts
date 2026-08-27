"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  SITE_LOCK_COOKIE,
  SITE_LOCK_ENABLED,
  SITE_LOCK_PATH,
  passwordMatches,
} from "@/lib/site-lock";

export async function unlockSite(formData: FormData) {
  if (!SITE_LOCK_ENABLED) {
    redirect("/");
  }

  const password = String(formData.get("password") ?? "");

  if (!passwordMatches(password)) {
    redirect(`${SITE_LOCK_PATH}?error=1`);
  }

  const jar = await cookies();
  jar.set(SITE_LOCK_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect("/");
}
