import { motion } from 'framer-motion';
import { useTheme, getThemeClasses } from '../../context/ThemeContext';

interface TimelineCardProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  isLeft: boolean;
}

const TimelineCard = ({ title, company, duration, description, technologies, isLeft }: TimelineCardProps) => {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full md:w-[calc(50%-20px)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
    >
      <div className={`${themeClasses.card} backdrop-blur-sm rounded-2xl p-6 border ${themeClasses.border}`}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className={`text-xl font-medium ${themeClasses.text}`}>{title}</h3>
            <span className={`text-sm ${themeClasses.textSecondary}`}>{duration}</span>
          </div>
          <h4 className={`text-sm ${themeClasses.textSecondary}`}>{company}</h4>
          
          <div className="mt-4 space-y-2">
            {description.map((item, index) => (
              <p key={index} className={`text-sm ${themeClasses.textSecondary}`}>
                • {item}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={`px-2 py-1 text-xs rounded-full bg-white/5 ${themeClasses.textSecondary}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;