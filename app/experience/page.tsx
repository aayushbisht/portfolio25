'use client';

import TimelineCard from '../components/shared/TimelineCard';
import { useTheme, getThemeClasses } from '../context/ThemeContext';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Accenture',
    duration: 'Oct 2024 - Apr 2026',
    description: [
      'Delivered 10+ controlled form components and UI features for an internal web portal using React.js and Next.js, reducing manual data entry errors and improving form submission reliability across teams.',
      'Integrated frontend dashboards with Node.js/Express REST APIs to surface real-time tabular data for internal users, validating all endpoints via Postman and cutting manual data reconciliation time for the ops team',
      'Diagnosed and resolved 30+ complex state-management and cross-browser rendering bugs within two-week Agile sprint cycles, conducting code reviews and ensuring responsive design consistency across browsers.',
    ],
    technologies: ['Next.js', 'React.js', 'Express', 'Mongo DB']
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Tutcart',
    duration: 'Jan 2024 - Mar 2024',
    description: [
      'Built REST APIs and managed dashboards using Next.js, enhancing backend efficiency by 25%',
      'Developed map-based search, improving user satisfaction by 30%.',
      'Implemented Redux, boosting app performance by 20%',
      'Designed landing page, increasing user engagement.'
    ],
    technologies: ['Next.js', 'React.js', 'Express', 'Mongo DB']
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Graphic Era University',
    duration: 'Jul 2023 - Aug 2023',
    description: [
      'Developed an application EduLink that facilitates connections between Colleges and Companies using MongoDB, Express.js, React.js, Node.js',
      'Achieved reduction in usertime by consolidating comprehensive college and company information onto a unified platform',
    ],
    technologies: ['Next.js', 'React.js', 'Express', 'Mongo DB']
  }
];

export default function ExperiencePage() {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);

  return (
    <main className={`min-h-screen ${themeClasses.background} p-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className={`text-3xl font-bold ${themeClasses.text}`}>Experience</h1>
          <button
            onClick={() => window.history.back()}
            className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors`}
          >
            ← Back
          </button>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-white/90 via-white/30 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineCard
                key={index}
                {...experience}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 