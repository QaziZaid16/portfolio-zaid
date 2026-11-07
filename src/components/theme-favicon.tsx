"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
    const theme =
      resolvedTheme ??
      (document.documentElement.classList.contains("dark") ? "dark" : "light");

    if (favicon) {
      favicon.href = theme === "dark" ? "/Zaid_light.svg" : "/Zaid_dark.svg";
    }
  }, [resolvedTheme]);

  return null;
}
