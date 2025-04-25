import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, children, className = '' }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 h-full border border-zinc-800/50 ${className}`}
    >
      {title && (
        <h2 className="text-sm font-medium mb-4 text-gray-400 uppercase tracking-wider">{title}</h2>
      )}
      <div className="text-gray-200">{children}</div>
    </motion.div>
  );
};

export default Card; 