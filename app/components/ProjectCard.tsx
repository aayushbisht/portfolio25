import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  githubUrl: string;
  deploymentUrl: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, images, githubUrl, deploymentUrl, technologies }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800/50"
    >
      {/* Image Carousel */}
      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-black/20">
        <img
          src={images[currentImageIndex]}
          alt={`${title} screenshot ${currentImageIndex + 1}`}
          className="object-cover w-full h-full"
        />
        
        {/* Carousel Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <button
            onClick={previousImage}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Project Info */}
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
        >
          <FaGithub size={16} />
          <span>Source</span>
        </a>
        <a
          href={deploymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
        >
          <FaExternalLinkAlt size={14} />
          <span>Live Demo</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 