import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

const experiences = [
  {
    title: 'Junior Full Stack Developer',
    company: 'Kamstar.tech',
    period: 'Jan 2024 - Present',
    website: 'https://kamstar.tech',
    type: 'Remote',
    description: [
      'Currently working as a full-stack developer using Laravel and React with Inertia.js and Vue.js.',
      'Spearheading both front-end and back-end development to ensure scalable and high-performing web applications.',
      'Implemented several features and optimizations across multiple projects.',
    ],
    technologies: ['React', 'Node.js', 'Vuejs', 'Docker', 'Mysql', 'Laravel','PHP','REST APIs','Graphql'],
  },
  {
    title: 'Intern Stack Developer',
    company: 'Probase Zambia',
    period: 'Feb 2024 - April 2024',
    website: 'https://probasegroup.com',
    type: 'Internship',
    description: [
      'Managed database operations and gained insights into large-scale software systems.',
      'Worked with dynamic team',
      'Gained insight on third-party APIs and payment gateways',
    ],
    technologies: ['Laravel', 'PHP','REST APIs'],
  },
  {
    title: 'Intern Software Tester',
    company: 'Nikkle.io',
    period: 'Sept 2023 - Jan 2024',
    website: 'https://nikkle.io',
    type: 'Remote (Internship)',
    description: [
      'Conducted extensive system testing to ensure application stability and reliability, both manuel and automated tests.',
      'Worked with Laravel and Bootstrap for both front-end and back-end development testing.',
      'Collaborated with developers to identify bugs, ensuring smooth releases.',
    ],
    technologies: ['Laravel', 'PHP','Bootstrap','Cypress', 'Manuel Tests'],
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