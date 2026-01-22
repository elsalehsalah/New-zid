'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as Theme;
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else {
      // Default to light if no stored preference
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (!mounted) {
      // Set initial light mode styles before mount
      root.dataset.theme = 'light';
      root.classList.remove('dark');
      body.style.backgroundColor = '#eeeeee';
      body.style.color = '#3c1c54';
      return;
    }
    
    root.dataset.theme = theme;
    if (theme === 'dark') {
      root.classList.add('dark');
      body.style.backgroundColor = '#09001A';
      body.style.color = '#ffffff';
    } else {
      root.classList.remove('dark');
      body.style.backgroundColor = '#eeeeee';
      body.style.color = '#3c1c54';
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isLight = theme === 'light';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLight }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

