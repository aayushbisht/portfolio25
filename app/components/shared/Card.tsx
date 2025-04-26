import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useTheme, getThemeClasses } from '../../context/ThemeContext';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, children, className = '' }: CardProps) => {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${themeClasses.card} backdrop-blur-sm rounded-2xl p-6 border ${themeClasses.border} ${className}`}
    >
      {title && (
        <h2 className="text-sm font-medium mb-4 text-gray-400 uppercase tracking-wider">{title}</h2>
      )}
      <div className={themeClasses.textSecondary}>{children}</div>
    </motion.div>
  );
};

export default Card; 