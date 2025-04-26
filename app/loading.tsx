'use client';

import { useTheme, getThemeClasses } from './context/ThemeContext';
import Loader from './components/shared/Loader';

export default function Loading() {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader />
    </div>
  );
} 