import { useTheme, getThemeClasses } from '../../context/ThemeContext';

export default function Loader() {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <div className="flex items-center justify-center space-x-2">
      <div className={`w-3 h-3 rounded-full ${themeClasses.accent} animate-bounce`}></div>
      <div className={`w-3 h-3 rounded-full ${themeClasses.accent} animate-bounce [animation-delay:0.2s]`}></div>
      <div className={`w-3 h-3 rounded-full ${themeClasses.accent} animate-bounce [animation-delay:0.4s]`}></div>
    </div>
  );
} 