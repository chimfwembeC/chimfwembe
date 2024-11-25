import React from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    period: '2018 - 2020',
    description: 'Specialized in Artificial Intelligence and Machine Learning',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'MIT',
    period: '2014 - 2018',
    description: 'Graduated with honors, Dean\'s List all semesters',
  },
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <p className="text-gray-600 mb-8">
            Full Stack Developer with expertise in modern web technologies
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-indigo-600 mb-2">{edu.school}</p>
                <p className="text-gray-600 mb-2">{edu.period}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-indigo-600 mb-1">{cert.issuer}</p>
                <p className="text-gray-600">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}