import React from 'react'
import {
    Github,
    Linkedin,
    Twitter,
    Globe,
    Server,
    Smartphone,
    Cloud,
    Download,
    ArrowRight,
    ComputerIcon,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReadAlong } from './ReadAlong';


export default function Hero() {
    return (
        <section id="about" className="min-h-full lg:min-h-screen pt-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center items-center gap-12 items-center">
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-2xl lg:text-4xl font-semibold text-indigo-600 mb-3 text-center">Full Stack Developer</h2>
                            <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-100/80 leading-tight mb-4">
                                Creating Digital Excellence Through{' '}
                                <span className="gradient-text">Code</span>
                            </h1>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 6 }}
                                className="text-xl text-gray-400 text-center"
                            >
                                I build exceptional digital experiences that combine beautiful design with powerful functionality.
                            </motion.div>
                        </div>

                        <div className="flex justify-center flex-wrap gap-4">
                            <a
                                href="/projects"
                                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
                            >
                                View Projects
                                <ArrowRight className="h-5 w-5" />
                            </a>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/chimfwembeC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
                                >
                                    <Github className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/chimfwembe-kangwa-60098127b"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://x.com/CharlesK83179"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
                                >
                                    <Twitter className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <img
    src={DeveloperImage}
    alt="Developer"
    className="w-full h-auto"
  /> */}
                    {/* <div className="relative">
          <div className="relative h-[600px] rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/10 to-transparent"></div>
            <img
              src={DeveloperImage}
              alt="Developer"
              className="w-full h-full object-cover"
            />

          </div>
        </div> */}
                </div>
            </div>
        </section>
    )
}
