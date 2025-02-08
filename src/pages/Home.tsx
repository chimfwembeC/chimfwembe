import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  Server,
  Smartphone,
  Cloud,
  Download,
  ArrowRight,
  ComputerIcon,
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';
import DeveloperImage from '../components/assets/images/developer.png';
// import CV from '../components/assets/docs/chimfwembe Kangwa cv.pdf';
import ProjectAnimation from '../components/ProjectAnimation';
import SkillAnimation from '../components/SkillAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';

const CV = '../components/assets/docs/chimfwembe_Kangwa_cv.pdf';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management app with AI-powered prioritization',
    image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['Vue.js', 'D3.js', 'Firebase', 'TailwindCSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

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
      <section id="about" className="min-h-screen pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-indigo-600 mb-3">Full Stack Developer</h2>
                <h1 className="text-5xl font-bold text-gray-100/80 leading-tight mb-4">
                  Creating Digital Excellence Through{' '}
                  <span className="gradient-text">Code</span>
                </h1>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 6 }}
                  className="text-xl text-gray-600"
                >
                  I build exceptional digital experiences that combine beautiful design with powerful functionality.
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  View Projects
                  <ArrowRight className="h-5 w-5" />
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/chimfwembeC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chimfwembe-kangwa-60098127b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://x.com/CharlesK83179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            {/* <img
        src={DeveloperImage}
        alt="Developer"
        className="w-full h-auto"
      /> */}
            {/* <div className="relative">
              <div className="relative h-[600px] rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/10 to-transparent"></div>
                <img
                  src={DeveloperImage}
                  alt="Developer"
                  className="w-full h-full object-cover"
                />

              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-gray-100">Work Experience</h2>
          <div className="grid grid-cols-1 gap-8">
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
      <section id="skills" className="relative py-20 px-4">
        <div className="absolute inset-0 z-50 bg-black/50"></div>
        <div className="max-w-7xl mx-auto overflow-hidden">
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
