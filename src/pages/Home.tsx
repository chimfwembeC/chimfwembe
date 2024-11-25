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
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';
import DeveloperImage from '../components/assets/images/developer.png';


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

const skillCategories = [
  {
    title: 'Frontend Development',
    Icon: Globe,
    skills: ['React', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Next.js', 'Redux'],
  },
  {
    title: 'Backend Development',
    Icon: Server,
    skills: ['Node.js', 'Python', 'Java', 'Express', 'GraphQL', 'REST APIs'],
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
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="about" className="min-h-screen pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-indigo-600 mb-3">Full Stack Developer</h2>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Creating Digital Excellence Through{' '}
                  <span className="gradient-text">Code</span>
                </h1>
                <p className="text-xl text-gray-600">
                  I build exceptional digital experiences that combine beautiful design with powerful functionality.
                </p>
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
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com"
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
            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-transparent"></div>
                <img
                  src={DeveloperImage}
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Work Experience</h2>
          <div className="grid grid-cols-1 gap-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title">Download Resume</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my experience, skills, and qualifications.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-5 w-5" />
            <span>Download CV</span>
          </a>
        </div>
      </section>
    </>
  );
}