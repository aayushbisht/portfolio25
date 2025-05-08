'use client';

import Link from 'next/link';
import { useTheme, getThemeClasses } from './context/ThemeContext';

export default function NotFound() {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center p-4`}>
      <div className="text-center space-y-4">
        <h1 className={`text-4xl font-bold ${themeClasses.text}`}>404 - Page Not Found</h1>
        <p className={themeClasses.textSecondary}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className={`${themeClasses.accent} text-black px-6 py-2 rounded-lg hover:opacity-90 transition-colors inline-block`}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 