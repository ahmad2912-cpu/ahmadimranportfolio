import { useCallback, useEffect, useState } from 'react';

const THEME_KEY = 'portfolio-theme';

function resolveInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState(resolveInitialTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Apply theme to <html data-theme="..."> and persist the explicit choice
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  // When the user has NOT made an explicit choice, keep following the OS
  useEffect(() => {
    let explicit = false;
    try {
      explicit = localStorage.getItem(THEME_KEY) === 'light' || localStorage.getItem(THEME_KEY) === 'dark';
    } catch {
      /* ignore */
    }
    if (explicit) return undefined;

    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => setTheme(e.matches ? 'light' : 'dark');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsTransitioning(true);
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    window.setTimeout(() => setIsTransitioning(false), 500);
  }, []);

  return { theme, toggleTheme, isTransitioning };
}
