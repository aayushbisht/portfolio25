'use client';

import { useEffect } from 'react';
import { useTheme, getThemeClasses } from './context/ThemeContext';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center p-4`}>
      <div className="text-center space-y-4">
        <h1 className={`text-4xl font-bold ${themeClasses.text}`}>Something went wrong!</h1>
        <p className={themeClasses.textSecondary}>
          An unexpected error occurred. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className={`${themeClasses.accent} text-black px-6 py-2 rounded-lg hover:opacity-90 transition-colors`}
        >
          Try again
        </button>
      </div>
    </div>
  );
} 