import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import DeveloperImage from "../components/assets/images/developer-about-img.png";
import { ReadAlong } from "../components/ReadAlong";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-bold text-gray-300 mb-6">About Me</h1>
            <div className="prose prose-lg text-gray-300">

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

            <div className="flex gap-6">
              <a
                href="https://github.com/chimfwembeC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/chimfwembe-kangwa-60098127b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/CharlesK83179"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-600 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative hidden md:block h-[600px]">
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div> */}
                <img
                  src={DeveloperImage}
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
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
