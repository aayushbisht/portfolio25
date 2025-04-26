import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { useTheme, getThemeClasses } from '../context/ThemeContext';

interface WorkTogetherProps {
  onContactClick: () => void;
}

const WorkTogether = ({ onContactClick }: WorkTogetherProps) => {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <div className="col-span-4">
      <Card title="Let's start working together!" className="h-full">
        <div className="space-y-10 text-sm">
          <div>
            <h3 className={`text-xs ${themeClasses.textSecondary}`}>Contact Details</h3>
            <p className={themeClasses.text}>aayushbisht501@gmail.com</p>
          </div>
          <Button 
            buttonType="contact"
            onClick={onContactClick}
          />
        </div>
      </Card>
    </div>
  );
};

export default WorkTogether; 