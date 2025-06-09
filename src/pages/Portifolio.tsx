import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/Projects";
import { Work, User, Briefcase, Star } from "lucide-react"; // Import icons

const projects = projectData;

const projectTypes = [
  { name: "All", icon: <Star size={16} /> },
  { name: "Work", icon: <Briefcase size={16} /> },
  { name: "Personal", icon: <User size={16} /> },
  { name: "Client", icon: <Briefcase size={16} /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Portifolio() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900">
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-center font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
            My Portifolio
            </span>
          </motion.h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of my most significant projects, showcasing my
            expertise in full-stack development, cloud architecture, and modern
            technologies.
          </p>
        </motion.div>

        {/* <div className="flex justify-center mb-8">
          <div className="flex bg-purple-800 p-4 rounded-lg relative">
            {projectTypes.map(({ name, icon }) => (
              <motion.button
                key={name}
                layoutId='filter'
                className={`flex items-center h-12 w-12 justify-center mx-2 text-white rounded-full ${selectedType === name ? 'bg-purple-600 -top-4 relative' : 'bg-gray-600'}`} // Added '-top-4 relative' for active button
                onClick={() => setSelectedType(name)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {icon}
              </motion.button>
            ))}
          </div>
        </div> */}

        {/* Animated Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-gray-400">
              <p>No projects found for this filter.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
