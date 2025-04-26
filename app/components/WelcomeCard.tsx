import React, { useEffect, useState } from 'react'
import Card from './shared/Card'
import { FaGithub, FaLinkedin, FaDribbble, FaDiscord } from 'react-icons/fa';
import { BiSolidBookAlt } from 'react-icons/bi';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';
import Link from 'next/link';
import { useTheme, getThemeClasses } from "../context/ThemeContext"
import Button from './shared/Button';

const WelcomeCard = () => {
  const { theme, setTheme } = useTheme();
  const themeClasses = getThemeClasses(theme);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Software Developer', 'UI/UX Enthusiast', 'Problem Solver'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    if (currentIndex < currentRoleText.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentRoleText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (currentIndex === currentRoleText.length) {
          setTimeout(() => {
            setCurrentIndex(0);
            setCurrentRole((currentRole + 1) % roles.length);
          }, 2000);
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentRole]);

  return (
    <div className="col-span-8 row-span-2">
      <Card title="welcome" className="h-full">
        <div className="space-y-3">
          <h2 className={`text-2xl font-medium ${themeClasses.text}`}>
            Hi, I&apos;m <span className="font-bold">Aayush Bisht</span>,
          </h2>
          <div className="h-6">
           <span className='text-lg'>a{' '}</span> 
            <span className={`text-lg ${themeClasses.textSecondary}`}>
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className={themeClasses.textSecondary}>
          with a strong focus on user experience and a passion for solving complex problems across the stack.
          </p>
          
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-black/30 p-2 rounded-lg hover:bg-black/50 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" className="bg-black/30 p-2 rounded-lg hover:bg-black/50 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="bg-black/30 p-2 rounded-lg hover:bg-black/50 transition-colors">
              <FaDribbble size={20} />
            </a>
            <a href="#" className="bg-black/30 p-2 rounded-lg hover:bg-black/50 transition-colors">
              <BiSolidBookAlt size={20} />
            </a>
            <Button buttonType="resume" />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <Link href="/experience">
            <div className={`p-4 rounded-lg bg-black/30 ${themeClasses.text}`}>
              <div className="flex items-center gap-2 mb-2">
                <FaCode className="text-blue-500" />
                <span className="font-medium">1.5+ Years</span>
              </div>
              <p className="text-xs opacity-70">Experience</p>
            </div>
            </Link>
            <Link href="/projects">
            <div className={`p-4 rounded-lg bg-black/30 ${themeClasses.text}`}>
              <div className="flex items-center gap-2 mb-2">
                <FaLaptopCode className="text-green-500" />
                <span className="font-medium">20+</span>
              </div>
              <p className="text-xs opacity-70">Projects</p>
            </div>
            </Link>
            <div className={`p-4 rounded-lg bg-black/30 ${themeClasses.text}`}>
              <div className="flex items-center gap-2 mb-2">
                <FaServer className="text-purple-500" />
                <span className="font-medium">Full Stack</span>
              </div>
              <p className="text-xs opacity-70">Expertise</p>
            </div>
          </div>

          <div className={`mt-6 p-4 rounded-lg bg-black/30 ${themeClasses.text}`}>
            <p className="text-sm italic">
              &quot;Turning complex problems into simple, beautiful, and intuitive solutions.&quot;
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WelcomeCard;
