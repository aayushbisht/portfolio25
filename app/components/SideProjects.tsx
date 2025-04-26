import React from 'react';
import Card from './shared/Card';
import Link from 'next/link';
import { useTheme, getThemeClasses } from '../context/ThemeContext';

const SideProjects = () => {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <Link href="/projects">
      <Card title="Side Projects" className="h-full group cursor-pointer">
        <div className="flex justify-between items-center text-sm">
          <span className={themeClasses.text}>View</span>
          <span className={`group-hover:translate-x-1 transition-transform ${themeClasses.text}`}>→</span>
        </div>
      </Card>
    </Link>
  );
};

export default SideProjects; 