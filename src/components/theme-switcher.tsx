"use client";

import { THEMES, useTheme } from "@/components/theme-provider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <label className="theme-switcher">
      <span className="theme-switcher-label">Theme</span>
      <select
        className="theme-switcher-select"
        value={theme}
        onChange={(event) => setTheme(event.target.value as (typeof THEMES)[number]["value"])}
        aria-label="Select portfolio theme"
      >
        {THEMES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
