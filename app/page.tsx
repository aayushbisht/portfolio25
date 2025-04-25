'use client';

import { useEffect, useState } from 'react';
import Card from './components/Card';
import { FaGithub, FaLinkedin, FaDribbble, FaDiscord } from 'react-icons/fa';
import { BiSolidBookAlt } from 'react-icons/bi';
import Link from 'next/link';
import { useTheme, getThemeClasses } from './context/ThemeContext';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const themeClasses = getThemeClasses(theme);
  const [currentTime, setCurrentTime] = useState('');

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
          {/* Welcome Section - Large Card */}
          <div className="col-span-8 row-span-2">
            <Card title="welcome" className="h-full">
              <div className="space-y-3">
                <h2 className={`text-2xl font-medium ${themeClasses.text}`}>
                  Hi, I&apos;m <span className="font-bold">Aayush Bisht</span>,
                </h2>
                <p className={themeClasses.textSecondary}>
                  a software developer with strong focus on the user experience, animations and micro interactions.
                </p>
                {/* <p className="text-base text-gray-300">
                  Feel free to reach out to me if you have any projects in mind, or just to say hello.
                </p> */}
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
                  <button className={`${themeClasses.accent} text-black px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-colors`}>
                    Get Resume
                  </button>
                </div>
            
              </div>
            </Card>
          </div>

          {/* About Me - Small Card */}
          <div className="col-span-4 row-span-2">
            <Card title="About me" className="h-full">
              <div className="space-y-2">
                <p className="text-sm">Hi, I'm a full-stack software developer from India.</p>
                <p className="text-xs text-gray-400">My primary tools of choice includes:</p>
                <ul className="list-none space-y-0.5 text-sm">
                  <li>• Nextjs</li>
                  <li>• Typescript</li>
                  <li>• React</li>
                  <li>• Typescript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Nodejs</li>
                  <li>• Express</li>
                  <li>• Solidity</li>
                  <li>• Git</li>
                  <li>• Github</li>
                  <li>• GCP</li>
                  
                </ul>
              </div>
            </Card>
          </div>

          {/* Let's work together */}
          <div className="col-span-4">
            <Card title="Let's start working together!" className="h-full">
              <div className="space-y-10 text-sm">
                <div>
                  <h3 className="text-gray-400 text-xs">Contact Details</h3>
                  <p>aayushbisht501@gmail.com</p>
                </div>
              
                  <button className={`${themeClasses.accent} text-black py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-colors`}>
                    Contact Me
                  </button>
              </div>
            </Card>
          </div>

          {/* Current Time and Side Projects */}
          <div className="col-span-4 grid grid-rows-2 gap-3">
            <Card title="" className="h-full flex items-center justify-center">
              <div className="text-xl font-mono">{currentTime}</div>
              <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setTheme('black')}
                    className={`w-4 h-4 rounded-full bg-black transition-transform ${theme === 'black' ? 'scale-150' : ''}`}
                  />
                  <button
                    onClick={() => setTheme('gray')}
                    className={`w-4 h-4 rounded-full bg-gray-400 transition-transform ${theme === 'gray' ? 'scale-150' : ''}`}
                  />
                  <button
                    onClick={() => setTheme('red')}
                    className={`w-4 h-4 rounded-full bg-red-500 transition-transform ${theme === 'red' ? 'scale-150' : ''}`}
                  />
                  <button
                    onClick={() => setTheme('yellow')}
                    className={`w-4 h-4 rounded-full bg-yellow-500 transition-transform ${theme === 'yellow' ? 'scale-150' : ''}`}
                  />
                  <button
                    onClick={() => setTheme('blue')}
                    className={`w-4 h-4 rounded-full bg-blue-500 transition-transform ${theme === 'blue' ? 'scale-150' : ''}`}
                  />
                </div>
            </Card>
            <Link href="/projects">
              <Card title="Side Projects" className="h-full group cursor-pointer">
                <div className="flex justify-between items-center text-sm">
                  <span>View</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Card>
            </Link>
          </div>

          {/* Experience Card */}
          <div className="col-span-4">
            <Link href="/experience">
              <Card title="Experience" className="h-full group cursor-pointer">
                <div className="space-y-1">
                  <p className="text-sm">Currently working fulltime at Accenture</p>
                </div>
                <div className="flex mt-6 justify-between items-center text-sm">
                  <span>Full Experience</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Card>
            </Link>
          </div>

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
    </main>
  );
}
