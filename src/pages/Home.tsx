import {
  Globe,
  Server,
  Smartphone,
  Cloud,
  Download,
  ComputerIcon,
} from 'lucide-react';
// import ProjectCard from '../components/ProjectCard';
// import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';
// import DeveloperImage from '../components/assets/images/developer.png';
// import CV from '../components/assets/docs/chimfwembe Kangwa cv.pdf';
import ProjectAnimation from '../components/ProjectAnimation';
import SkillAnimation from '../components/SkillAnimation';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { ReadAlong } from '../components/ReadAlong';
import Hero from '../components/Hero';
import FavouriteSection from '../components/FavouriteSection';
import { projectData } from '../data/Projects';

const CV = '../components/assets/docs/chimfwembe_Kangwa_cv.pdf';

const projects = projectData;

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

const skillCategories = [
  {
    title: 'Frontend Development',
    Icon: Globe,
    skills: ['React', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Bootstrap', 'Css', 'Next.js', 'Redux'],
  },
  {
    title: 'Backend Development',
    Icon: Server,
    skills: ['Node.js', 'Python', 'Express', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Mobile Development',
    Icon: Smartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
  },
  {
    title: 'Database & Cloud',
    Icon: Cloud,
    skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Firebase', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Desktop Development',
    Icon: ComputerIcon, // Use an appropriate icon for desktop apps
    skills: ['Electron.js'],
  },
];


export default function Home() {
  return (
    <div className="w-full py-24 bg-gradient-to-br from-gray-900 to-purple-900 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Interactive Read Along
          </h1>
          <ReadAlong />
        </div>
      </div> */}

      <FavouriteSection />

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-gray-100">Work Experience</h2>
          <div className="mx-auto grid grid-cols-1 gap-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <ProjectAnimation />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20">
        {/* <div className="absolute inset-0 z-50 bg-black/50"></div> */}
        <div className="overflow-hidden">
          {/* <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} {...category} />
            ))}
          </div> */}


          <SkillAnimation />
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title text-gray-100">Download My Resume</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my experience, skills, and qualifications.
          </p>
          <a
            href={CV}
            download
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-5 w-5" />
            <span>Download CV</span>
          </a>
        </div>
      </section>
    </div>
  );
}
