import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Import icons from your icon library (e.g., lucide-react)
import { Globe, Server, Smartphone, Cloud, Database, Code2, Terminal } from 'lucide-react';

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
            // 'Java',
            'Express',
            'Django',
            // 'Spring Boot',
            'REST APIs',
            'Microservices',
            'API Gateway',
            // 'Socket.IO'
        ],
    },
    {
        title: 'Mobile Development',
        Icon: Smartphone,
        skills: [
            'React Native',
            'Flutter',
            // 'iOS (Swift)',
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
            // 'Terraform',
            // 'Cloud Architecture',
            // 'Serverless'
        ],
    },
    {
        title: 'Database & Storage',
        Icon: Database,
        skills: [
            'PostgreSQL',
            // 'MongoDB',
            // 'Redis',
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
            // 'Java',
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
            // 'IntelliJ IDEA',
            'Postman',
            'Docker Desktop',
            'Terminal',
            'Vim',
            // 'Jira',
            'Figma',
            'Adobe XD'
        ],
    },
];

export default function SkillAnimation() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    // Parallax transforms for each column
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Distribute skill categories into 4 columns
    const columns = [[], [], [], []];
    skillCategories.forEach((category, index) => {
        columns[index % 4].push(category);
    });

    return (
        <section className="py-24 h-full">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center text-white mb-20"
                >
                    My Skills
                </motion.h2>

                <div
                    ref={containerRef}
                    className="mx-auto pb-64 -ml-24 mt-28 rotate-[25deg] lg:rotate-[25deg]"
                >
                    <div className="flex gap-4">
                        {columns.map((col, colIndex) => {
                            // Select the proper transform based on the column index
                            const y =
                                colIndex === 0 ? y1 : colIndex === 1 ? y2 : colIndex === 2 ? y3 : y4;
                            return (
                                <motion.div key={colIndex} style={{ y }} className="flex-1 space-y-4 pt-12">
                                    {col.map((category, index) => {
                                        const Icon = category.Icon;
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                                className="bg-gradient-to-br from-gray-500/50 to-purple-900/50 rounded-2xl overflow-hidden shadow-xl"
                                            >
                                                <div className="p-6">
                                                    <div className="flex items-center gap-3">
                                                        <Icon className="w-8 h-8 text-white" />
                                                        <h3 className="text-xl text-gray-200 font-semibold">{category.title}</h3>
                                                    </div>
                                                    <ul className="mt-4 space-y-1">
                                                        {category.skills.map((skill, i) => (
                                                            <li key={i} className="text-gray-400 text-sm">
                                                                {skill}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
