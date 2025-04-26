import React from 'react'
import Card from './shared/Card'
import { FaGithub, FaLinkedin, FaDribbble, FaDiscord } from 'react-icons/fa';
import { BiSolidBookAlt } from 'react-icons/bi';
import Link from 'next/link';
import { useTheme, getThemeClasses } from "../context/ThemeContext"
import Button from './shared/Button';

const WelcomeCard = () => {
    const { theme, setTheme } = useTheme();
    const themeClasses = getThemeClasses(theme);
  return (
    <div className="col-span-8 row-span-2">
    <Card title="welcome" className="h-full">
      <div className="space-y-3">
        <h2 className={`text-2xl font-medium ${themeClasses.text}`}>
          Hi, I&apos;m <span className="font-bold">Aayush Bisht</span>,
        </h2>
        <p className={themeClasses.textSecondary}>
          a software developer with strong focus on the user experience, animations and micro interactions.
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
    
      </div>
    </Card>
  </div>
  )
}

export default WelcomeCard
