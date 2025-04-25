'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'black' | 'gray' | 'red' | 'yellow' | 'blue';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
  black: {
    background: 'bg-black',
    card: 'bg-zinc-900/50',
    border: 'border-zinc-800/50',
    text: 'text-white',
    textSecondary: 'text-gray-300',
    accent: 'bg-white'
  },
  gray: {
    background: 'bg-gray-900',
    card: 'bg-gray-800/50',
    border: 'border-gray-700/50',
    text: 'text-gray-100',
    textSecondary: 'text-gray-300',
    accent: 'bg-gray-400'
  },
  red: {
    background: 'bg-red-950',
    card: 'bg-red-900/50',
    border: 'border-red-800/50',
    text: 'text-red-50',
    textSecondary: 'text-red-200',
    accent: 'bg-red-500'
  },
  yellow: {
    background: 'bg-yellow-950',
    card: 'bg-yellow-900/50',
    border: 'border-yellow-800/50',
    text: 'text-yellow-50',
    textSecondary: 'text-yellow-200',
    accent: 'bg-yellow-500'
  },
  blue: {
    background: 'bg-blue-950',
    card: 'bg-blue-900/50',
    border: 'border-blue-800/50',
    text: 'text-blue-50',
    textSecondary: 'text-blue-200',
    accent: 'bg-blue-500'
  }
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function getThemeClasses(theme: Theme) {
  return themes[theme];
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('black');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} 