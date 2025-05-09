import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import DeveloperImage from "/assets/imgs/about-me.jpeg"; // Replace with actual image path
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
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
                Hello! I'm Chimfwembe Kangwa, a passionate Full Stack Developer
                with experience in building scalable, high-performing web
                applications. I specialize in Laravel, React, and Vue.js.
              </p>
              <p className="mb-4">
                I've worked on quiz systems and results platforms. At Kamstar.tech,
                I led teams and optimized project performance. My internships
                deepened my skills in database management and testing.
              </p>
              <p>
                I'm also exploring Flutter and Swift, and enjoy digital art,
                self-development books, and gaming. I'm committed to growing in
                tech and contributing to meaningful ICT solutions.
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

          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* <img
                src={DeveloperImage}
                alt="Developer"
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
