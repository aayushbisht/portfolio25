'use client';

import TimelineCard from '../components/shared/TimelineCard';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Accenture',
    duration: 'Oct 2024 - Present',
    description: [
      'Developed and optimized SAP ABAP solutions, improving system performance by 20% and reducing processing time',
      'Designed and implemented custom reports, forms, and interfaces for seamless SAP module integration.',
      'Performed performance tuning and troubleshooting to enhance efficiency and minimize system downtime.',
    ],
    technologies: ['SAP ABAP', 'SAP HANA', 'SAP Fiori', 'SAP UI5', 'SAP Cloud Platform']
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
    technologies: ['Next.js', 'TypeScript', 'Material UI','MongoDB', 'Git', 'REST APIs']
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Graphic Era University',
    duration: 'Jul 2023 - Aug 2023',
    description: [
      'Developed an application EduLink that facilitates connections between Colleges and Companies using MongoDB, Express.js, React.js, Node.js',
      'Achieved reduction in usertime by consolidating comprehensive college and company information onto a unified platform',
      
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Web Sockets']
  }
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold text-white">Experience</h1>
          <button
            onClick={() => window.history.back()}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back
          </button>
        </div>

        <div className="relative">
          {/* Center line - visible only on md and above */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-white/90 via-white/30 to-transparent"></div>

          <div className="space-y-8">
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