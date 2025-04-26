'use client';

import ProjectCard from '../components/shared/ProjectCard';
import { useTheme, getThemeClasses } from '../context/ThemeContext';

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with Next.js and TypeScript, featuring real-time updates and a responsive design.',
    images: [
      '/project1-1.jpg',
      '/project1-2.jpg',
      '/project1-3.jpg',
    ],
    githubUrl: 'https://github.com/yourusername/project1',
    deploymentUrl: 'https://project1.demo.com',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Project 2',
    description: 'A blockchain-based decentralized application (dApp) built with Solidity and React.',
    images: [
      '/project2-1.jpg',
      '/project2-2.jpg',
    ],
    githubUrl: 'https://github.com/yourusername/project2',
    deploymentUrl: 'https://project2.demo.com',
    technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum'],
  },

  {
    title: 'Project 2',
    description: 'A blockchain-based decentralized application (dApp) built with Solidity and React.',
    images: [
      '/project2-1.jpg',
      '/project2-2.jpg',
    ],
    githubUrl: 'https://github.com/yourusername/project2',
    deploymentUrl: 'https://project2.demo.com',
    technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum'],
  },
  {
    title: 'Project 2',
    description: 'A blockchain-based decentralized application (dApp) built with Solidity and React.',
    images: [
      '/project2-1.jpg',
      '/project2-2.jpg',
    ],
    githubUrl: 'https://github.com/yourusername/project2',
    deploymentUrl: 'https://project2.demo.com',
    technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum'],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <button
            onClick={() => window.history.back()}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
} 