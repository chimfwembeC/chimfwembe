import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const team = [
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

// Split team into two rows
const firstRow = team.slice(0, Math.ceil(team.length / 2));
const secondRow = team.slice(Math.ceil(team.length / 2));

export default function ProjectAnimation() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const row1X = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const row2X = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        // <section className="w-full py-24 bg-gradient-to-br from-gray-900 to-purple-900 overflow-hidden">
        <section className="w-full py-24">
            <div className="px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-8">
                    My Projects
                </h2>

                <div className="w-full lg:w-[700px] mx-auto overflow-hidden">
                    <div ref={containerRef} className="mx-auto">
                        <div className="space-y-4">
                            {/* First Row */}
                            <div className="">
                                <motion.div
                                    style={{ x: row1X }}
                                    className="flex gap-4 relative"
                                >
                                    {/* Duplicate cards for infinite scroll effect */}
                                    {[...firstRow, ...firstRow].map((project, index) => (
                                        <div
                                            key={index}
                                            className="flex-none w-24 border border-gray-500 rounded-2xl bg-gray-100/20"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl">
                                                <div className="aspect-[3/4] overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                                        <div className="">
                                                            <h3 className="text-xl font-semibold text-gray-100/50 mb-2">{project.title}</h3>
                                                            <p className="text-gray-100/20 mb-2 line-clamp-1">{project.description}</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {project.tags.map((tag) => (
                                                                    <span
                                                                        key={tag}
                                                                        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs hover:bg-indigo-100 transition-colors"
                                                                    >
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Second Row */}
                            <div className="">
                                <motion.div
                                    style={{ x: row2X }}
                                    className="flex gap-4 relative"
                                >
                                    {/* Duplicate cards for infinite scroll effect */}
                                    {[...secondRow, ...secondRow].map((project, index) => (
                                        <div
                                            key={index}
                                            className="flex-none w-24 border border-gray-500 rounded-2xl bg-gray-100/20"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl">
                                                <div className="aspect-[3/4] overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                                        <div className="">
                                                            <h3 className="text-xl font-semibold text-gray-100/50 mb-2">{project.title}</h3>
                                                            <p className="text-gray-100/20  mb-2 line-clamp-1">{project.description}</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {project.tags.map((tag) => (
                                                                    <span
                                                                        key={tag}
                                                                        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs hover:bg-indigo-100 transition-colors"
                                                                    >
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
