'use client';

import TimelineCard from '../components/TimelineCard';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Accenture',
    duration: '2022 - Present',
    description: [
      'Leading development of enterprise-scale applications using React and Node.js',
      'Mentoring junior developers and conducting code reviews',
      'Implementing CI/CD pipelines and maintaining code quality standards',
      'Collaborating with cross-functional teams to deliver high-impact solutions'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
  },
  {
    title: 'Software Engineer',
    company: 'Previous Company',
    duration: '2020 - 2022',
    description: [
      'Developed and maintained multiple web applications',
      'Implemented responsive designs and improved user experience',
      'Worked with agile methodologies and participated in sprint planning'
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Git', 'REST APIs']
  },
  {
    title: 'Junior Developer',
    company: 'First Company',
    duration: '2018 - 2020',
    description: [
      'Built and maintained client websites',
      'Collaborated with designers to implement pixel-perfect designs',
      'Optimized website performance and SEO'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
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