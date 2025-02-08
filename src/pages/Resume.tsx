import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, GraduationCap, Award } from "lucide-react";
import CV from "../components/assets/docs/chimfwembe_Kangwa_cv.pdf";

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
    name: "CCNA",
    issuer: "Cisco",
    date: "2023",
  },
  {
    name: "Cyber Security Hackathon - Certificate of Participation",
    issuer: "Zicta and Digital safe",
    date: "2023",
  },
];

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 pt-32 pb-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <p className="text-gray-600 mb-4">
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
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
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
                className="border border-gray-500 rounded-2xl bg-gray-100/20 p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-indigo-600 mb-2">{edu.school}</p>
                <p className="text-gray-600 mb-2">{edu.period}</p>
                <p className="text-gray-600">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="border border-gray-500 rounded-2xl bg-gray-100/20 p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-indigo-600 mb-1">{cert.issuer}</p>
                <p className="text-gray-600">{cert.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
