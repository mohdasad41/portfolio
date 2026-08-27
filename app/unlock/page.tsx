import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { unlockSite } from "@/app/unlock/actions";
import { site } from "@/lib/site";
import {
  SITE_LOCK_COOKIE,
  SITE_LOCK_ENABLED,
} from "@/lib/site-lock";

export const metadata: Metadata = {
  title: "Unlock",
  robots: { index: false, follow: false },
};

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const invalid = error === "1";

  if (!SITE_LOCK_ENABLED) {
    redirect("/");
  }

  const jar = await cookies();
  if (jar.get(SITE_LOCK_COOKIE)?.value === "1") {
    redirect("/");
  }

  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6 py-24"
    >
      <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">
        {site.shortName}
      </p>
      <h1 className="mt-4 font-serif text-4xl tracking-tight">Not public yet.</h1>
      <p className="mt-4 text-base leading-7 text-muted">
        Enter the password to view this site.
      </p>
      <form action={unlockSite} className="mt-10 flex flex-col gap-4">
        <label className="sr-only" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
          className="h-12 rounded-full border border-line bg-transparent px-5 text-foreground outline-none focus:border-foreground"
        />
        {invalid ? (
          <p className="text-sm text-accent" role="alert">
            That password is not correct.
          </p>
        ) : null}
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Enter
        </button>
      </form>
    </main>
  );
}
