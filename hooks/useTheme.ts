'use client'
import { createContext, createElement, useContext, useEffect, useState, type ReactNode } from 'react'

// Theme ids are stored in localStorage — keep these literal values stable
// even if UI labels change in ThemeSwitcher.
// - 'dark'  = original navy art-nouveau palette (default for new users)
// - 'light' = warm parchment palette
//
// Mirrors useDeck pattern: Context + Provider + hook, hydrates from
// localStorage, syncs across tabs via the storage event, and writes
// document.documentElement.dataset.theme so CSS variables in globals.css
// pick up the change without any per-component re-styling.
//
// Anti-flash note: layouts include an inline <script> in <head> that
// sets data-theme BEFORE first paint. This Provider only handles
// post-hydration changes and cross-tab sync.

export type Theme = 'dark' | 'light'

const KEY = 'tarotify-theme'
const DEFAULT: Theme = 'dark'

interface ThemeContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyTheme(t: Theme) {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = t
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT)

  // Hydrate from localStorage (or the data-theme attribute set by the
  // anti-flash inline script). The inline script runs first, so the
  // attribute is usually already correct — we just need to sync React
  // state with it so the ThemeSwitcher renders the right active button.
  useEffect(() => {
    const attr = document.documentElement.dataset.theme
    if (attr === 'light' || attr === 'dark') {
      setThemeState(attr)
      return
    }
    const stored = localStorage.getItem(KEY)
    if (stored === 'light' || stored === 'dark') {
      setThemeState(stored)
      applyTheme(stored)
    }
  }, [])

  // Cross-tab sync: storage event fires in OTHER tabs only.
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key !== KEY) return
      const v = e.newValue
      if (v === 'light' || v === 'dark') {
        setThemeState(v)
        applyTheme(v)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  function setTheme(t: Theme) {
    setThemeState(t)
    applyTheme(t)
    try {
      localStorage.setItem(KEY, t)
    } catch {
      /* localStorage might be unavailable (Safari private mode, etc.) */
    }
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return createElement(
    ThemeContext.Provider,
    { value: { theme, setTheme, toggleTheme } },
    children,
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (ctx) return ctx
  // Fallback for components rendered outside the provider — defaults to
  // dark, setter is a no-op. Shouldn't happen with the root layout wrapper.
  return {
    theme: DEFAULT,
    setTheme: () => {},
    toggleTheme: () => {},
  }
}
