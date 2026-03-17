'use client';

import TimelineCard from '../components/shared/TimelineCard';
import { useTheme, getThemeClasses } from '../context/ThemeContext';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Accenture',
    duration: 'Oct 2024 - Present',
    description: [
      'Developed minor UI updates and controlled form components for an existing internal web portal using React.js and Next.js',
      'Connected frontend interfaces to pre-existing Node.js/Express REST APIs to fetch and display tabular data, utilizing Postman to verify response',
      'Resolved 30+ assigned UI defects and cross-browser rendering issues tracked via Jira, specifically targeting complex state-management bugs within two-week sprint cycles',
    ],
    technologies: ['Next.js', 'Reach.js', 'Express', '', 'SAP Cloud Platform']
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
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Graphic Era University',
    duration: 'Jul 2023 - Aug 2023',
    description: [
      'Developed an application EduLink that facilitates connections between Colleges and Companies using MongoDB, Express.js, React.js, Node.js',
      'Achieved reduction in usertime by consolidating comprehensive college and company information onto a unified platform',
    ],
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