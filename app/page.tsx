'use client';

import { useState, Suspense } from 'react';
import { useTheme, getThemeClasses } from './context/ThemeContext';
import dynamic from 'next/dynamic';
import ExperienceCard from './components/ExperienceCard';

const ContactModal = dynamic(() => import('./components/ContactModal'), {
  ssr: false,
  loading: () => null
});

const WelcomeCard = dynamic(() => import('./components/WelcomeCard'), {
  loading: () => <div className="col-span-8 row-span-2 h-full bg-black/30 rounded-2xl animate-pulse" />
});

const AboutMe = dynamic(() => import('./components/AboutMe'), {
  loading: () => <div className="col-span-4 row-span-2 h-full bg-black/30 rounded-2xl animate-pulse" />
});

const WorkTogether = dynamic(() => import('./components/WorkTogether'), {
  loading: () => <div className="col-span-4 h-full bg-black/30 rounded-2xl animate-pulse" />
});

const SideProjects = dynamic(() => import('./components/SideProjects'), {
  loading: () => <div className="h-full bg-black/30 rounded-2xl animate-pulse" />
});

const ThemeTime = dynamic(() => import('./components/ThemeTime'), {
  loading: () => <div className="h-full bg-black/30 rounded-2xl animate-pulse" />
});

export default function Home() {
  const { theme, setTheme } = useTheme();
  const themeClasses = getThemeClasses(theme);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className={`h-screen w-screen flex items-center justify-center ${themeClasses.background} p-6 transition-colors duration-300`}>
      <div className="w-[60%] h-[90vh]">
        <div className="grid grid-cols-12 gap-3 h-full auto-rows-[minmax(0,auto)]">
          <Suspense fallback={<div className="col-span-8 row-span-2 h-full bg-black/30 rounded-2xl animate-pulse" />}>
            <WelcomeCard />
          </Suspense>
          
          <Suspense fallback={<div className="col-span-4 row-span-2 h-full bg-black/30 rounded-2xl animate-pulse" />}>
            <AboutMe />
          </Suspense>
          
          <Suspense fallback={<div className="col-span-4 h-full bg-black/30 rounded-2xl animate-pulse" />}>
            <WorkTogether onContactClick={() => setIsContactModalOpen(true)} />
          </Suspense>

          <div className="col-span-4 grid grid-rows-2 gap-3">
            <Suspense fallback={<div className="h-full bg-black/30 rounded-2xl animate-pulse" />}>
              <ThemeTime />
            </Suspense>
            
            <Suspense fallback={<div className="h-full bg-black/30 rounded-2xl animate-pulse" />}>
              <SideProjects />
            </Suspense>
          </div>
          <ExperienceCard />
        </div>
      </div>
      
      {isContactModalOpen && (
        <Suspense fallback={null}>
          <ContactModal 
            isOpen={isContactModalOpen} 
            onClose={() => setIsContactModalOpen(false)} 
          />
        </Suspense>
      )}
    </main>
  );
}
