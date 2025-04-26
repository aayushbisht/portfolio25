import { useState } from 'react';
import { useTheme, getThemeClasses } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';


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
    message: '',
    subject: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        'service_aczttiu',
        'template_16dnpp8',
        templateParams,
        '1DCiGzYt4VjsAR3JI'
      )
      .then(
        (response) => {
          toast.success('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
            subject: ''
          });
          onClose();
        },
        (error) => {
          toast.error('Unable to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={`${themeClasses.background} p-6 rounded-lg w-[90%] max-w-md relative ${isLoading ? 'blur-sm' : ''}`}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
            <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
        )}
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-xl font-medium ${themeClasses.text}`}>Contact Me</h2>
          <button
            onClick={onClose}
            className={`${themeClasses.text} hover:opacity-70`}
            disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label className={`block text-sm ${themeClasses.textSecondary} mb-1`}>
             Your Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full p-2 rounded-lg ${themeClasses.background} border ${themeClasses.border} ${themeClasses.text}`}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className={`block text-sm ${themeClasses.textSecondary} mb-1`}>
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={`w-full p-2 rounded-lg ${themeClasses.background} border ${themeClasses.border} ${themeClasses.text}`}
              required
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className={`${themeClasses.accent} text-black py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-colors w-full flex items-center justify-center gap-2`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
} 