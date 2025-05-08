'use client';

import ProjectCard from '../components/shared/ProjectCard';
import { useTheme, getThemeClasses } from '../context/ThemeContext';

const projects = [
  {
    title: 'SmartPrep',
    description: 'An AI-powered interview platform with feedback mechanism',
    images: [
      '/interview1.png',
      '/interview2.png',
      '/interview3.png',
      '/interview4.png'
    ],
    githubUrl: 'https://github.com/aayushbisht/interview-ai',
    deploymentUrl: 'https://smartprep25.vercel.app',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'VAPI', 'Google AI SDK'],
  },
  {
    title: 'Places',
    description: 'Platform to explore cities with AI guide',
    images: [
      '/places.png',
      '/places2.png',
      '/places3.png',
      '/places4.png',
      '/places5.png',
    ],
    githubUrl: 'https://github.com/aayushbisht/places',
    deploymentUrl: '',
    technologies: ['Next.js', 'Typescript', 'Tailwind CSS', 'Google Maps Platform APIs and SDKs', 'Google AI SDK'],
  },

  {
    title: 'Roadmapper',
    description: 'AI powered platform to generate roadmaps for building anything',
    images: [
      '/road1.png',
      '/road2.png',
      '/road3.png',
    ],
    githubUrl: 'https://github.com/aayushbisht/roadmapper',
    deploymentUrl: 'https://roadmapper25.vercel.app/',
    technologies: ['Next.js', 'Typescript', 'Tailwind CSS', 'Supabase', 'Google AI SDK'],
  },
  {
    title: 'Edulink',
    description: 'Platform that bridges the gap between colleges and companies facilitating seamless connections, networking and communication',
    images: [
      '/edulink.jpg',
      '/edulink2.jpg',
      '/edulink3.jpg'
    ],
    githubUrl: 'https://github.com/aayushbisht/EduLink',
    deploymentUrl: 'https://edulink2023.netlify.app',
    technologies: ['React', 'Node', 'Express', 'MongoDB', 'Socket.io', 'Bootstrap5'
    ],
  },
  {
    title: 'Kryporaise',
    description: 'A blockchain-based crowdfunding platform which enables secure, transparent and decentralized funding of campaigns.',
    images: [
      '/pa1.png',
      '/pa2.png',
      '/pa3.png'
    ],
    githubUrl: 'https://github.com/aayushbisht/KryptoRaise',
    deploymentUrl: '',
    technologies: ['React', 'Solidity', 'Tailwind', 'Thirdweb', 'Web3.js', 'Ether.js'
    ],
  },
  {
    title: 'RoyalRealms',
    description: 'A property management system built using MERN stack enabling users to list and buy properties',
    images: [
      '/royal1.jpg',
      '/royal2.jpg',
      '/royal3.jpg'
    ],
    githubUrl: 'https://github.com/aayushbisht/Real-Estate',
    deploymentUrl: 'https://royalrealms.onrender.com/',
    technologies: ['React', 'Node', 'Express', 'MongoDB', 'Firebase'
    ],
  },
  {
    title: 'MediBloc',
    description: 'A Blockchain-based medical record storage for patients and insurance companies',
    images: [
      '/medi1.png',
      '/medi2.png',
      '/medi3.png',
      '/medi4.png',
      '/medi5.png'
    ],
    githubUrl: 'https://github.com/aayushbisht/MediBloc-v2',
    deploymentUrl: '',
    technologies: ['React', 'Tailwind CSS', 'Solidity', 'IPFS', 'Infura'
    ],
  },
  {
    title: 'CryptoDrive',
    description: 'A decentralized file storing drive that enables users to securely store their files of any type over IPFS and share them with other users.',
    images: [
      '/drive1.png',
      '/drive2.png',
      '/drive3.png'
    ],
    githubUrl: 'https://github.com/aayushbisht/CryptoDrive',
    deploymentUrl: '',
    technologies: ['React', 'Solidity', 'IPFS', 'Pinata', 'Hardhat'
    ],
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