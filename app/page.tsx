'use client';

import { useEffect, useState } from 'react';
import Card from './components/shared/Card';
import { FaGithub, FaLinkedin, FaDribbble, FaDiscord } from 'react-icons/fa';
import { BiSolidBookAlt } from 'react-icons/bi';
import Link from 'next/link';
import { useTheme, getThemeClasses } from './context/ThemeContext';
import ContactModal from './components/ContactModal';
import ExperienceCard from './components/ExperienceCard';
import WelcomeCard from './components/WelcomeCard';
import AboutMe from './components/AboutMe';
import WorkTogether from './components/WorkTogether';
import SideProjects from './components/SideProjects';
import ThemeTime from './components/ThemeTime';
import Button from './components/shared/Button';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const themeClasses = getThemeClasses(theme);
  const [currentTime, setCurrentTime] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
      }) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`h-screen w-screen flex items-center justify-center ${themeClasses.background} p-6 transition-colors duration-300`}>
      <div className="w-[60%] h-[90vh]">
        <div className="grid grid-cols-12 gap-3 h-full auto-rows-[minmax(0,auto)]">
          <WelcomeCard />
          <AboutMe />
          <WorkTogether onContactClick={() => setIsContactModalOpen(true)} />

          {/* Current Time and Side Projects */}
          <div className="col-span-4 grid grid-rows-2 gap-3">
            <ThemeTime />
            <SideProjects />
          </div>

          <ExperienceCard />

          {/* Side Projects */}
          {/* <div className="col-span-4">
            <Card title="Side Projects" className="h-full group cursor-pointer">
              <div className="flex justify-between items-center text-sm">
                <span>View</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Card>
          </div> */}

          {/* Playground */}
          {/* <div className="col-span-4">
            <Card title="Playground" className="h-full group cursor-pointer">
              <div className="flex justify-between items-center text-sm">
                <span>View experiments</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Card>
          </div> */}

          {/* Blog */}
          {/* <div className="col-span-4">
            <Card title="Blog" className="h-full group cursor-pointer">
              <div className="flex justify-between items-center text-sm">
                <span>Read articles</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Card>
          </div> */}

          {/* Works */}
          {/* <div className="col-span-4">
            <Card title="Works" className="h-full group cursor-pointer">
              <div className="flex justify-between items-center text-sm">
                <span>View projects</span>
                <div className="bg-white/10 px-2 py-0.5 rounded-md text-xs">
                  WORK IN PROGRESS
                </div>
              </div>
            </Card>
          </div> */}

          {/* Countries Map */}
          {/* <div className="col-span-8">
            <Card title="Countries I visited" className="h-full group cursor-pointer">
              <div className="flex justify-between items-center text-sm">
                <span>View map</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Card>
          </div> */}

          {/* Footer */}
          {/* <div className="col-span-4">
            <Card title="" className="h-full flex items-center justify-center">
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              </div>
            </Card>
          </div> */}
        </div>
      </div>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  );
}
