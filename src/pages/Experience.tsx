import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: 'Jan 2022 - Present',
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd',
    period: 'Mar 2020 - Dec 2021',
    description: [
      'Developed and maintained multiple client-facing applications',
      'Optimized database queries improving performance by 40%',
      'Integrated third-party APIs and payment gateways',
    ],
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'REST APIs'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}