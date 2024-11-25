import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Hello! I'm a passionate Full Stack Developer with over 5 years of experience in building web applications. I specialize in creating efficient, scalable, and user-friendly solutions that solve real-world problems.
              </p>
              <p className="mb-4">
                My journey in software development began with a deep curiosity about how things work on the web. Since then, I've had the opportunity to work with various technologies and frameworks, always staying up-to-date with the latest industry trends.
              </p>
              <p className="mb-6">
                When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or mentoring aspiring developers.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800&h=800"
              alt="Developer"
              className="rounded-2xl w-full h-auto object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}