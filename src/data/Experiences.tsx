import React from 'react';

interface Experience {
    title: string;
    company: string;
    period: string;
    website: string;
    type: string;
    description: string[];
    technologies: string[];
}

const experiences: Experience[] = [
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

export { experiences };