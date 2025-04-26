'use client';

import { useTheme, getThemeClasses } from './context/ThemeContext';

export default function Loading() {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <div className={`fixed inset-0 ${themeClasses.background} flex items-center justify-center z-50`}>
      <div className={`w-16 h-16 border-4 border-t-transparent ${themeClasses.accent} rounded-full animate-spin`}></div>
    </div>
  );
} 