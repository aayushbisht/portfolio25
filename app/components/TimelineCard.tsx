import { motion } from 'framer-motion';

interface TimelineCardProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  isLeft: boolean;
}

const TimelineCard = ({ title, company, duration, description, technologies, isLeft }: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full md:w-[calc(50%-20px)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
    >
      {/* Timeline dot */}
      <div className="hidden md:block absolute top-8 w-4 h-4 rounded-full bg-white/90 shadow-glow
        ${isLeft ? 'right-0 translate-x-[calc(50px+1.5rem)]' : 'left-0 -translate-x-[calc(50px+1.5rem)]'}">
        <div className="absolute inset-1 rounded-full bg-white animate-pulse"></div>
      </div>

      {/* Timeline line */}
      <div className="hidden md:block absolute top-8 w-[50px] h-[2px] bg-gradient-to-r from-white/50 to-white/90
        ${isLeft ? 'right-0 translate-x-6' : 'left-0 -translate-x-[calc(50px+1.5rem)]'}">
      </div>

      <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">{duration}</span>
          <h3 className="text-xl font-medium text-white">{title}</h3>
          <h4 className="text-lg text-gray-300">{company}</h4>
          
          <div className="mt-2 space-y-2">
            {description.map((item, index) => (
              <p key={index} className="text-sm text-gray-300">
                • {item}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
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