import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SITE_LOCK_COOKIE, SITE_LOCK_ENABLED, SITE_LOCK_PATH } from "@/lib/site-lock";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (SITE_LOCK_ENABLED) {
    const jar = await cookies();
    if (jar.get(SITE_LOCK_COOKIE)?.value !== "1") {
      redirect(SITE_LOCK_PATH);
    }
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Header />
      {children}
      <Footer />
    </>
  );
}
