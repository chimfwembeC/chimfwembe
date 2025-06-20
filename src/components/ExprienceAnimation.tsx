import React from 'react'
import { motion } from 'framer-motion';
import FloatingBubbles from './FloatingBubbles';
import ExperienceCard from './ExperienceCard';

const experiences = [
    {
      title: 'Junior Software Developer',
      company: 'Kamstar.tech',
      period: 'Jan 2024 - Present',
      website: 'https://kamstar.tech',
      type: 'Remote',
      description: [
        'Currently working as a full-stack developer using Laravel and React with Inertia.js and Vue.js.',
        'Spearheading both front-end and back-end development to ensure scalable and high-performing web applications.',
        'Implemented several features and optimizations across multiple projects.',
      ],
      technologies: ['React', 'Node.js', 'Vuejs', 'Docker', 'Mysql', 'Laravel', 'PHP', 'REST APIs', 'Graphql'],
    },
    {
      title: 'Intern Software Developer',
      company: 'Probase Zambia',
      period: 'Feb 2024 - April 2024',
      website: 'https://probasegroup.com',
      type: 'Internship',
      description: [
        'Managed database operations and gained insights into large-scale software systems.',
        'Worked with dynamic team',
        'Gained insight on third-party APIs and payment gateways',
      ],
      technologies: ['Laravel', 'PHP', 'REST APIs'],
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
      technologies: ['Laravel', 'PHP', 'Bootstrap', 'Cypress', 'Manuel Tests'],
    },
  ];

export default function ExprienceAnimation() {
  return (
    <section id="experience" className="lg:py-20 px-4">
          <div className="max-w-7xl mx-auto px-4">
              <motion.h1
                className="text-center font-semibold text-indigo-600 mb-6"                            
                initial="hidden"
                animate="visible"                              
                >
                <span className="text-2xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                  Experiences
                </span>
              </motion.h1>
  
  
            {/* <FloatingBubbles /> */}
            <div className="mx-auto grid grid-cols-1 gap-8">
              {experiences.map((experience) => (
                <ExperienceCard key={experience.company} {...experience} />
              ))}
            </div>
          </div>
        </section>
  )
}
