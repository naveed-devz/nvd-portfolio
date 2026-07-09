"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const THEMES = [
  { value: "default-glass", label: "Default Glass" },
  { value: "aurora-neon", label: "Aurora Neon" },
  { value: "midnight-grid", label: "Midnight Grid" },                                                                                                               
  { value: "minimal-paper", label: "Minimal Paper" },
  { value: "studio-dark", label: "Studio Dark" },
] as const;

type ThemeValue = (typeof THEMES)[number]["value"];

type ThemeContextValue = {
  theme: ThemeValue;
  setTheme: (theme: ThemeValue) => void;
};                                                                                                                                                                                                                                                                                                                         

const STORAGE_KEY = "portfolio-theme";                                                              
const DEFAULT_THEME: ThemeValue = "midnight-grid";

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeValue>(DEFAULT_THEME);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (storedTheme === "rehman-neon") {
      setThemeState("aurora-neon");
      document.documentElement.dataset.theme = "aurora-neon";
      window.localStorage.setItem(STORAGE_KEY, "aurora-neon");
      return;
    }

    if (storedTheme && THEMES.some((item) => item.value === storedTheme)) {
      const nextTheme = storedTheme as ThemeValue;
      setThemeState(nextTheme);
      document.documentElement.dataset.theme = nextTheme;
      return;
    }

    document.documentElement.dataset.theme = DEFAULT_THEME;
  }, []);

  const setTheme = (nextTheme: ThemeValue) => {
    setThemeState(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
