import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import {
  Globe,
  Smartphone,
  Server,
  Cloud,
  Database,
  Bug,
  Code2,
  ShieldCheck,
  Layers,
  Terminal,
} from "lucide-react";

const serviceCategories = [
    { 
    title: "Frontend Development",
    Icon: Globe,
    price: "From ZMW 4,000",
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "GraphQL",
      "Webpack",
      "HTML5/CSS3",
      "JavaScript ES6+",
      "Sass/SCSS",
    ],
  },
  {
    title: "Backend Development",
    Icon: Server,
    price: "From ZMW 5,000",
    skills: [
      "Node.js",
      "Python",
      "Express",
      "Django",
      "REST APIs",
      "Microservices",
      "API Gateway",
    ],
  },
  {
    title: "Mobile Development",
    Icon: Smartphone,
    price: "ZMW 15,000 – 30,000",
    skills: [
      "React Native",
      "Flutter",
      "Expo",
      "Mobile UI/UX",
      "Push Notifications",
    ],
  },
  {
    title: "Full-Stack Applications",
    Icon: Layers,
    price: "ZMW 12,000 – 25,000+",
    skills: [
      "Laravel + React/Vue",
      "Inertia.js",
      "API Integration",
      "Authentication (JWT, OAuth)",
      "Payment Gateways",
      "Admin Dashboards",
      "CRUD Systems",
      "Role Management",
    ],
  },
  {
    title: "Cloud & DevOps",
    Icon: Cloud,
    price: "ZMW 5,000+ (project-based)",
    skills: [
      "AWS",
      "Google Cloud",
      "Docker",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Database & Storage",
    Icon: Database,
    price: "From ZMW 3,000",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Database Design",
      "Data Modeling",
    ],
  },
  {
    title: "Programming Languages",
    Icon: Code2,
    price: "Hourly: ZMW 100 – 400",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C++",
      "SQL",
      "Shell Scripting",
      "PHP",
    ],
  },
  {
    title: "Development Tools",
    Icon: Terminal,
    price: "Included in other services",
    skills: [
      "Git",
      "VS Code",
      "Postman",
      "Docker Desktop",
      "Terminal",
      "Vim",
      "Figma",
      "Adobe XD",
    ],
  },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
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
              Services Offered
            </span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I offer professional services across software development, cloud,
            mobile, and IT systems. Here's how I can help elevate your next
            project or product.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {serviceCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <SkillCard {...category} />
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </div>
  );
}
