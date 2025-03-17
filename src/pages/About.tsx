import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import DeveloperImage from "/assets/imgs/about-me.jpeg";
import { ReadAlong } from "../components/ReadAlong";
import ReadAlongStatic from "../components/ReadAlongStatic";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              className="text-start font-semibold text-indigo-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h1>
            <div className="prose prose-lg text-gray-300">
              {/* <ReadAlongStatic
                text={`Hello! I'm Chimfwembe Kangwa, a passionate Full Stack Developer with hands-on experience in building scalable, high-performing web applications. With a Diploma in Information Technology and a solid foundation in both front-end and back-end development, I specialize in delivering innovative solutions in Laravel, React, and Vue.js. My journey in software development has been shaped by opportunities to work on diverse projects, from quiz management systems to results verification platforms. At Kamstar.tech, I led teams and implemented features that enhanced project performance, while my internship experiences honed my skills in database management and software testing. Beyond coding, I am dedicated to learning emerging technologies like Flutter and Swift, and I enjoy exploring digital art, self-development literature, and gaming. I aim to contribute to impactful ICT projects and continuously grow in this dynamic field.
                `}
                /> */}
              <p className="mb-4">
                Hello! I'm Chimfwembe Kangwa, a passionate Full Stack Developer
                with hands-on experience in building scalable, high-performing
                web applications. With a Diploma in Information Technology and a
                solid foundation in both front-end and back-end development, I
                specialize in delivering innovative solutions in Laravel, React,
                and Vue.js.
              </p>
              <p className="mb-4">
                My journey in software development has been shaped by
                opportunities to work on diverse projects, from quiz management
                systems to results verification platforms. At Kamstar.tech, I
                led teams and implemented features that enhanced project
                performance, while my internship experiences honed my skills in
                database management and software testing.
              </p>
              <p className="mb-6">
                Beyond coding, I am dedicated to learning emerging technologies
                like Flutter and Swift, and I enjoy exploring digital art,
                self-development literature, and gaming. I aim to contribute to
                impactful ICT projects and continuously grow in this dynamic
                field.
              </p>
            </div>

            {/* Social Icons with Hover Scroll Effect */}
            <motion.div className="flex gap-6 mt-4">
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
                  whileHover={{ y: -5 }} // Move slightly up on hover
                  whileTap={{ scale: 0.9 }} // Scale down on click
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative hidden md:block">
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div> */}
                {/* <img
                  src={DeveloperImage}
                  alt="Developer"
                  className="w-[400px] h-[400px] object-cover"
                /> */}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative block md:hidden h-[400px]">
                {/* <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-transparent"></div> */}
                <img
                  src={DeveloperImage}
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
