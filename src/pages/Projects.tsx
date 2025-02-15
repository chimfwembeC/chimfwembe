import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Features include user authentication, product search, and order tracking.',
    image:
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'AI Task Manager',
    description:
      'Smart task management application using AI for task prioritization and scheduling. Integrates with calendar APIs and uses machine learning for personalized productivity insights.',
    image:
      'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description:
      'Interactive dashboard for visualizing real-time data streams. Features customizable widgets, data filtering, and export capabilities. Supports multiple data sources and visualization types.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['Vue.js', 'D3.js', 'Firebase', 'WebSockets', 'TypeScript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Mobile Fitness App',
    description:
      'Cross-platform fitness application with workout tracking, nutrition planning, and social features. Includes real-time progress tracking and AI-powered workout recommendations.',
    image:
      'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Redux', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Cloud Infrastructure Manager',
    description:
      'DevOps tool for managing cloud infrastructure across multiple providers. Features infrastructure as code, cost optimization, and automated scaling policies.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['Python', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Smart Home IoT Platform',
    description:
      'IoT platform for smart home device management with real-time monitoring and automation capabilities. Includes energy usage analytics and voice control integration.',
    image:
      'https://images.unsplash.com/photo-1558002038-bb4237b29133?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['React', 'Node.js', 'MQTT', 'GraphQL', 'TimescaleDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

// Container variant for staggering child animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card variant for each project card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-200 mb-4">Featured Projects</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of my most significant projects, showcasing my expertise in full-stack development,
            cloud architecture, and modern technologies.
          </p>
        </motion.div>

        {/* Animated Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
