"use client";

import { useEffect } from "react";
import {
  applyTheme,
  THEME_STORAGE_KEY,
  themeFromDocument,
} from "@/lib/theme";

function SunIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <circle cx="8" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 1.5v1.4M8 13.1v1.4M1.5 8h1.4M13.1 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M13.2 10.1A5.6 5.6 0 1 1 5.9 2.8 4.4 4.4 0 0 0 13.2 10.1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThemeToggle() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onSystemChange = () => {
      try {
        if (localStorage.getItem(THEME_STORAGE_KEY)) {
          return;
        }
      } catch {
        return;
      }
      applyTheme(media.matches ? "light" : "dark");
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        const next = themeFromDocument() === "light" ? "dark" : "light";
        applyTheme(next);
      }}
      aria-label="Toggle light and dark mode"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-foreground"
    >
      <span className="hidden light:block">
        <MoonIcon />
      </span>
      <span className="block light:hidden">
        <SunIcon />
      </span>
    </button>
  );
}
