import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projectData } from '../data/Projects';
import FloatingBubbles from './FloatingBubbles';

// const team = [
//     {
//         title: 'E-Commerce Platform',
//         description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Features include user authentication, product search, and order tracking.',
//         image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=400',
//         tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
//         githubUrl: 'https://github.com',
//         liveUrl: 'https://example.com',
//     },
//     {
//         title: 'AI Task Manager',
//         description: 'Smart task management application using AI for task prioritization and scheduling. Integrates with calendar APIs and uses machine learning for personalized productivity insights.',
//         image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&q=80&w=800&h=400',
//         tags: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
//         githubUrl: 'https://github.com',
//         liveUrl: 'https://example.com',
//     },
//     {
//         title: 'Real-time Analytics Dashboard',
//         description: 'Interactive dashboard for visualizing real-time data streams. Features customizable widgets, data filtering, and export capabilities. Supports multiple data sources and visualization types.',
//         image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400',
//         tags: ['Vue.js', 'D3.js', 'Firebase', 'WebSockets', 'TypeScript'],
//         githubUrl: 'https://github.com',
//         liveUrl: 'https://example.com',
//     },
//     {
//         title: 'Mobile Fitness App',
//         description: 'Cross-platform fitness application with workout tracking, nutrition planning, and social features. Includes real-time progress tracking and AI-powered workout recommendations.',
//         image: 'https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&q=80&w=800&h=400',
//         tags: ['React Native', 'Node.js', 'MongoDB', 'Redux', 'AWS'],
//         githubUrl: 'https://github.com',
//         liveUrl: 'https://example.com',
//     },
//     {
//         title: 'Cloud Infrastructure Manager',
//         description: 'DevOps tool for managing cloud infrastructure across multiple providers. Features infrastructure as code, cost optimization, and automated scaling policies.',
//         image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=400',
//         tags: ['Python', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
//         githubUrl: 'https://github.com',
//         liveUrl: 'https://example.com',
//     },
//     {
//         title: 'Smart Home IoT Platform',
//         description: 'IoT platform for smart home device management with real-time monitoring and automation capabilities. Includes energy usage analytics and voice control integration.',
//         image: 'https://images.unsplash.com/photo-1558002038-bb4237b29133?auto=format&fit=crop&q=80&w=800&h=400',
//         tags: ['React', 'Node.js', 'MQTT',team 'GraphQL', 'TimescaleDB'],
//         githubUrl: 'https://github.com',
//         liveUrl: 'https://example.com',
//     },
// ];
const projects = projectData;

// Split team into two rows
const firstRow = projects.slice(0, Math.ceil(projects.length / 2));
const secondRow = projects.slice(Math.ceil(projects.length / 2));

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
        <section className="w-full">
            <div className="px-4">
            <motion.h1
                className="text-center font-semibold text-indigo-600 mb-4"                            
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}                          
            >
                <span className="text-2xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                My Projects
                </span>
            </motion.h1>    

            <FloatingBubbles />

                <div className="w-full lg:w-[1000px] mx-auto overflow-hidden">
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
                                            className="flex-none w-24 lg:w-64  border-2 border-purple-500 rounded-2xl bg-gray-100/20"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl">
                                                <div className="aspect-[4/4] overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
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
                                            className="flex-none w-24 lg:w-64 border-2 border-purple-500 rounded-2xl bg-gray-100/20"
                                        >
                                            <div className="group relative overflow-hidden rounded-2xl">
                                                <div className="aspect-[4/4] overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
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
