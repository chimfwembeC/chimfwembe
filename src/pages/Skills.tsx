import React from 'react';
import { Globe, Server, Smartphone, Cloud, Code2, Database, Terminal, Cpu } from 'lucide-react';
import SkillCard from '../components/SkillCard';

const skillCategories = [
  {
    title: 'Frontend Development',
    Icon: Globe,
    skills: [
      'React', 'Vue.js', 'Next.js', 'TypeScript',
      'TailwindCSS', 'Redux', 'GraphQL', 'Webpack',
      'HTML5/CSS3', 'JavaScript ES6+', 'Sass/SCSS'
    ],
  },
  {
    title: 'Backend Development',
    Icon: Server,
    skills: [
      'Node.js', 'Python', 'Java', 'Express',
      'Django', 'Spring Boot', 'REST APIs',
      'Microservices', 'API Gateway', 'Socket.IO'
    ],
  },
  {
    title: 'Mobile Development',
    Icon: Smartphone,
    skills: [
      'React Native', 'Flutter', 'iOS (Swift)',
      'Android (Kotlin)', 'Expo', 'Mobile UI/UX',
      'App Store Deployment', 'Push Notifications'
    ],
  },
  {
    title: 'Cloud & DevOps',
    Icon: Cloud,
    skills: [
      'AWS', 'Google Cloud', 'Docker', 'Kubernetes',
      'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform',
      'Cloud Architecture', 'Serverless'
    ],
  },
  {
    title: 'Database & Storage',
    Icon: Database,
    skills: [
      'PostgreSQL', 'MongoDB', 'Redis', 'MySQL',
      'Elasticsearch', 'Firebase', 'DynamoDB',
      'Database Design', 'Data Modeling'
    ],
  },
  {
    title: 'Programming Languages',
    Icon: Code2,
    skills: [
      'JavaScript', 'TypeScript', 'Python', 'Java',
      'C++', 'Go', 'Rust', 'SQL', 'Shell Scripting',
      'PHP'
    ],
  },
  {
    title: 'Development Tools',
    Icon: Terminal,
    skills: [
      'Git', 'VS Code', 'IntelliJ IDEA', 'Postman',
      'Docker Desktop', 'Terminal', 'Vim', 'Jira',
      'Figma', 'Adobe XD'
    ],
  },
  {
    title: 'Machine Learning & AI',
    Icon: Cpu,
    skills: [
      'TensorFlow', 'PyTorch', 'Scikit-learn',
      'Natural Language Processing', 'Computer Vision',
      'Data Analysis', 'Neural Networks'
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise,
            developed through years of practical experience and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}