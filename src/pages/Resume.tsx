import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, GraduationCap, Award, Star } from "lucide-react";
import CV from "../components/assets/docs/chimfwembe_Kangwa_cv.pdf";
import FloatingBubbles from "../components/FloatingBubbles";

const education = [
  {
    degree: "Diploma in Information Technology",
    school: "Evelyn Hone College of Applied Arts and Commerce",
    period: "2021 - 2023",
    description:
      "Focused on software development, system testing, database management, cyber security, and networking.",
  },
  {
    degree: "Grade 12 Certificate",
    school: "Nakonde Secondary School",
    period: "2018 - 2020",
    description:
      "Achieved strong academic performance with a focus on mathematics and sciences.",
  },
];

const certifications = [
  {
    name: "Cisco Certified Network Associate (CCNA L1)",
    issuer: ["Cisco", "Evelyn Hone College"],
    date: "2023",
  },
  {
    name: "Cyber Security Hackathon - Certificate of Participation",
    issuer: ["Zicta", "Digital safe", "Evelyn Hone College", "Paratus", "OnePlus"],
    date: "2023",
  },
];

export default function Resume() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 pt-32 pb-20 px-4"
    >
      <FloatingBubbles />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-center font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
              Resume
            </span>
          </motion.h1>
          <p className="text-gray-400 mb-4">
            Full Stack Developer with expertise in modern web technologies
          </p>
          <motion.a
            href={CV}
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-16 w-16 text-indigo-600" />
            <motion.h1
              className="text-center font-semibold text-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl lg:text-4xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                Education
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.3 }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  background:
                    "linear-gradient(to right bottom, rgba(168, 85, 247, 0), #a855f7)", // Purple 500 to transparent
                }}
                className="bg-gradient-to-br from-gray-500/50 to-purple-900/90 border-2 border-purple-500 rounded-2xl overflow-hidden shadow-xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-indigo-600 mb-2">{edu.school}</p>
                <p className="text-gray-400 mb-2">{edu.period}</p>
                <p className="text-gray-400">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-16 w-16 text-indigo-600" />
            <motion.h1
              className="text-center font-semibold text-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl lg:text-4xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                Certifications & Awards
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.3 }}
            className="grid grid-cols-1 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  background:
                    "linear-gradient(to right bottom, rgba(168, 85, 247, 0), #a855f7)", // Purple 500 to transparent
                }}
                className="bg-gradient-to-br group from-gray-500/50 to-purple-900/90 border-2 border-purple-500 rounded-2xl overflow-hidden shadow-xl p-6"
              >
                <div className="absolute p-2 h-12 w-12 bg-purple-500 rounded-full -top-6 -right-4 flex justify-center items-center">
                  <Star className="h-16 w-16 text-yellow-500" />
                </div>

                <h3 className="text-lg lg:text-xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent mb-2">
                  {cert.name}
                </h3>
                <div className="flex items-center gap-4 overflow-auto w-full">
                  {cert.issuer?.map((issue) => (
                    <p className="text-purple-400 border-2 border-purple-500 rounded-2xl p-1 px-2 mb-1">
                      {issue}
                    </p>
                  ))}
                </div>
                <p className="text-gray-400 text-end text-lg bg-gradient-to-r from-blue-300 to-purple-600 group:hover:bg-gray-600 bg-clip-text text-transparent">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
