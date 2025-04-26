import React, { useEffect, useState } from 'react';
import Card from './shared/Card';
import { useTheme, getThemeClasses } from '../context/ThemeContext';

const ThemeTime = () => {
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
    <Card title="" className="h-full flex items-center justify-center">
      <div className="space-y-4">
        <div className={`text-xl font-mono ${themeClasses.text}`}>{currentTime}</div>
        <div className="flex gap-2">
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
      </div>
    </Card>
  );
};

export default ThemeTime; 