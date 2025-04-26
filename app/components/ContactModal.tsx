import { useState } from 'react';
import { useTheme, getThemeClasses } from '../context/ThemeContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData.name)
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={`${themeClasses.background} p-6 rounded-lg w-[90%] max-w-md`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-medium ${themeClasses.text}`}>Contact Me</h2>
          <button
            onClick={onClose}
            className={`${themeClasses.text} hover:opacity-70`}
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-sm ${themeClasses.textSecondary} mb-1`}>
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full p-2 rounded-lg ${themeClasses.background} border ${themeClasses.border} ${themeClasses.text}`}
              required
            />
          </div>
          <div>
            <label className={`block text-sm ${themeClasses.textSecondary} mb-1`}>
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full p-2 rounded-lg ${themeClasses.background} border ${themeClasses.border} ${themeClasses.text}`}
              required
            />
          </div>
          <div>
            <label className={`block text-sm ${themeClasses.textSecondary} mb-1`}>
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full p-2 rounded-lg ${themeClasses.background} border ${themeClasses.border} ${themeClasses.text} h-32`}
              required
            />
          </div>
          <button
            type="submit"
            className={`${themeClasses.accent} text-black py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-colors w-full`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
} 