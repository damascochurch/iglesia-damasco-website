"use client"

import { useEffect } from "react"

export function ThemeScript() {
  useEffect(() => {
    // Get the system theme preference media query
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    // Function to update theme based on system preference
    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }

    // Set initial theme
    updateTheme(mediaQuery)

    // Listen for system theme changes
    mediaQuery.addEventListener("change", updateTheme)

    // Cleanup listener
    return () => mediaQuery.removeEventListener("change", updateTheme)
  }, [])

  return null
} 