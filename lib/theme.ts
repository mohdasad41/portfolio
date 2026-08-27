export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

export const THEME_COLORS = {
  light: "#f3eee6",
  dark: "#0c0c0b",
} as const;

export function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Private mode can block storage.
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", THEME_COLORS[theme]);
  }
}

export function themeFromDocument(): Theme {
  if (document.documentElement.classList.contains("light")) {
    return "light";
  }
  if (document.documentElement.classList.contains("dark")) {
    return "dark";
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export const themeInitScript = `(function(){var d=document.documentElement,k=${JSON.stringify(THEME_STORAGE_KEY)};var t=null;try{t=localStorage.getItem(k);}catch(e){}if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}d.classList.remove("light","dark");d.classList.add(t);d.style.colorScheme=t;var m=document.querySelector("meta[name=theme-color]");if(m)m.setAttribute("content",t==="light"?${JSON.stringify(THEME_COLORS.light)}:${JSON.stringify(THEME_COLORS.dark)});})();`;
