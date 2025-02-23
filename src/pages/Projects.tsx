import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/Projects';

const projects = projectData;

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
              key={project.id} // Use project.id for unique keys
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
