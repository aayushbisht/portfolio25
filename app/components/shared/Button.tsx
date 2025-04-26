'use client'
import { useTheme, getThemeClasses } from '../../context/ThemeContext';

interface ButtonProps {
  buttonType: 'contact' | 'resume';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  buttonType,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  const baseStyles = 'py-2 px-4 rounded-lg text-sm font-medium transition-colors';
  const primaryStyle = `${themeClasses.accent} text-black hover:opacity-90`;

  const buttonContent = {
    contact: 'Contact Me',
    resume: 'Get Resume'
  };

  const handleClick = () => {
    if (buttonType === 'resume') {
      
      window.open('/resume.pdf', '_blank');
    } else {
      onClick?.();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`${baseStyles} ${primaryStyle} ${className}`}
    >
      {buttonContent[buttonType]}
    </button>
  );
}
