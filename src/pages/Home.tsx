import {
  Globe,
  Server,
  Smartphone,
  Cloud,
  Download,
  ComputerIcon,
} from "lucide-react";

import ProjectAnimation from "../components/ProjectAnimation";
import SkillAnimation from "../components/SkillAnimation";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import FavouriteSection from "../components/FavouriteSection";
import { projectData } from "../data/Projects";
import FloatingBubbles from "../components/FloatingBubbles";
import ExprienceAnimation from "../components/ExprienceAnimation";
import AnimatedShowcase from "../components/AnimatedShowcase";

const CV = "../components/assets/docs/chimfwembe_Kangwa_cv.pdf";

const projects = projectData;

const skillCategories = [
  {
    title: "Frontend Development",
    Icon: Globe,
    skills: [
      "React",
      "Vue.js",
      "TypeScript",
      "TailwindCSS",
      "Bootstrap",
      "Css",
      "Next.js",
      "Redux",
    ],
  },
  {
    title: "Backend Development",
    Icon: Server,
    skills: ["Node.js", "Python", "Express", "GraphQL", "REST APIs"],
  },
  {
    title: "Mobile Development",
    Icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo"],
  },
  {
    title: "Database & Cloud",
    Icon: Cloud,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Firebase",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Desktop Development",
    Icon: ComputerIcon, // Use an appropriate icon for desktop apps
    skills: ["Electron.js"],
  },
];

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden">
      
      {/* Hero Section */}
      <Hero />

      {/* Favorite Section */}
      <FavouriteSection />

      {/* Experience Section */}
      <ExprienceAnimation />

      {/* <section id='animated_showcase'>
        <AnimatedShowcase />
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="py-12 lg:py-20">
        <div className="max-w-full lg:max-w-7xl mx-auto">
          <ProjectAnimation />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative lg:py-20">
        <div className="overflow-hidden">
          <SkillAnimation />
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-center font-semibold text-indigo-600 mb-4"
            initial="hidden"
            animate="visible"
          >
            <span className="text-2xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
              Download My Resume
            </span>
          </motion.h1>
          {/* <FloatingBubbles /> */}

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my experience, skills, and
            qualifications.
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
