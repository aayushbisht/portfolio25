'use client';

import { useTheme, getThemeClasses } from './context/ThemeContext';

export default function Loading() {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <div className={`fixed inset-0 ${themeClasses.background} flex items-center justify-center z-50`}>
      <div className="flex space-x-2">
        <div className={`w-3 h-3 ${themeClasses.accent} rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
        <div className={`w-3 h-3 ${themeClasses.accent} rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
        <div className={`w-3 h-3 ${themeClasses.accent} rounded-full animate-bounce`}></div>
      </div>
    </div>
  );
} 