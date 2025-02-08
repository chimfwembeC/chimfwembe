import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { Globe, Server, Smartphone, Cloud, Code2, Database, Terminal, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    Icon: Globe,
    skills: [
      'React',
      'Vue.js',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Redux',
      'GraphQL',
      'Webpack',
      'HTML5/CSS3',
      'JavaScript ES6+',
      'Sass/SCSS'
    ],
  },
  {
    title: 'Backend Development',
    Icon: Server,
    skills: [
      'Node.js',
      'Python',
      //  'Java',
      'Express',
      'Django',
      // 'Spring Boot', 
      'REST APIs',
      'Microservices',
      'API Gateway',
      //  'Socket.IO'
    ],
  },
  {
    title: 'Mobile Development',
    Icon: Smartphone,
    skills: [
      'React Native',
      'Flutter',
      //  'iOS (Swift)',
      // 'Android (Kotlin)',
      'Expo',
      'Mobile UI/UX',
      // 'App Store Deployment',
      'Push Notifications'
    ],
  },
  {
    title: 'Cloud & DevOps',
    Icon: Cloud,
    skills: [
      'AWS',
      'Google Cloud',
      'Docker',
      // 'Kubernetes',
      'CI/CD',
      // 'Jenkins', 
      'GitHub Actions',
      //  'Terraform',
      // 'Cloud Architecture',
      //  'Serverless'
    ],
  },
  {
    title: 'Database & Storage',
    Icon: Database,
    skills: [
      'PostgreSQL',
      //  'MongoDB', 
      //  'Redis', 
      'MySQL',
      // 'Elasticsearch', 
      'Firebase',
      // 'DynamoDB',
      'Database Design',
      'Data Modeling'
    ],
  },
  {
    title: 'Programming Languages',
    Icon: Code2,
    skills: [
      'JavaScript',
      'TypeScript',
      'Python',
      //  'Java',
      'C++',
      // 'Go', 
      // 'Rust',
      'SQL',
      'Shell Scripting',
      'PHP'
    ],
  },
  {
    title: 'Development Tools',
    Icon: Terminal,
    skills: [
      'Git',
      'VS Code',
      //  'IntelliJ IDEA',
      'Postman',
      'Docker Desktop',
      'Terminal',
      'Vim',
      //  'Jira',
      'Figma',
      'Adobe XD'
    ],
  },
  // {
  //   title: 'Machine Learning & AI',
  //   Icon: Cpu,
  //   skills: [
  //     'TensorFlow',
  //      'PyTorch', 'Scikit-learn',
  //     'Natural Language Processing', 'Computer Vision',
  //     'Data Analysis', 'Neural Networks'
  //   ],
  // },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise,
            developed through years of practical experience and continuous learning.
          </p>
        </motion.div>

        {/* Animated Grid of Skill Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <SkillCard {...category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
