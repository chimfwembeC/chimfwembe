import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Features include user authentication, product search, and order tracking.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management application using AI for task prioritization and scheduling. Integrates with calendar APIs and uses machine learning for personalized productivity insights.',
    image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing real-time data streams. Features customizable widgets, data filtering, and export capabilities. Supports multiple data sources and visualization types.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['Vue.js', 'D3.js', 'Firebase', 'WebSockets', 'TypeScript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness application with workout tracking, nutrition planning, and social features. Includes real-time progress tracking and AI-powered workout recommendations.',
    image: 'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Redux', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Cloud Infrastructure Manager',
    description: 'DevOps tool for managing cloud infrastructure across multiple providers. Features infrastructure as code, cost optimization, and automated scaling policies.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['Python', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Smart Home IoT Platform',
    description: 'IoT platform for smart home device management with real-time monitoring and automation capabilities. Includes energy usage analytics and voice control integration.',
    image: 'https://images.unsplash.com/photo-1558002038-bb4237b29133?auto=format&fit=crop&q=80&w=800&h=400',
    tags: ['React', 'Node.js', 'MQTT', 'GraphQL', 'TimescaleDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my most significant projects, showcasing my expertise
            in full-stack development, cloud architecture, and modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}