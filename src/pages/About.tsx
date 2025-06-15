import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import DeveloperImage from '../components/assets/images/crock-suit-about.png';
import { motion } from "framer-motion";
import FloatingBubbles from "../components/FloatingBubbles";

export default function About() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 to-purple-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FloatingBubbles />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <motion.h1
              className="font-semibold text-indigo-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-3xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h1>
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-4">
                Hello! I'm <strong>Chimfwembe Kangwa</strong>, a dedicated Full Stack Developer with hands-on experience in building scalable, high-performance web applications. I specialize in <em>Laravel, React, Vue.js</em>, and bring strong skills in both frontend and backend development.
              </p>

              <p className="mb-4">
                Currently, I work remotely as a full-stack developer at Kamstar.tech, leading development efforts using Laravel, React, Inertia.js, and Vue.js. I have successfully delivered key features and optimizations that improve application performance and user experience.
              </p>

              <p className="mb-4">
                Throughout my internships and projects, I have gained practical experience in database management, system testing, and collaborative team workflows. Notable projects include a Quiz Management System and a real-time Results Verification System.
              </p>

              <p className="mb-4">
                I am passionate about expanding my technical expertise, currently learning Flutter and Swift for mobile development. Outside of coding, I enjoy digital art, reading technology and self-development books, and gaming.
              </p>

              <p>
                Committed to continuous growth, I strive to contribute innovative and meaningful solutions within the ICT sector.
              </p>
            </div>


            {/* Social Links */}
            <motion.div className="flex gap-6 mt-6">
              {[
                {
                  href: "https://github.com/chimfwembeC",
                  icon: <Github className="h-6 w-6" />,
                },
                {
                  href: "https://www.linkedin.com/in/chimfwembe-kangwa-60098127b",
                  icon: <Linkedin className="h-6 w-6" />,
                },
                {
                  href: "https://x.com/CharlesK83179",
                  icon: <Twitter className="h-6 w-6" />,
                },
              ].map(({ href, icon }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <FloatingBubbles />
          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={DeveloperImage}
                alt="Developer"
                className="w-full lg:w-full h-auto lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
