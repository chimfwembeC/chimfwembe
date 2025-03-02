import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Server, Smartphone, Cloud, Database, Code2, Terminal } from 'lucide-react';
import FloatingBubbles from './FloatingBubbles';

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
            'Express',
            'Django',
            'REST APIs',
            'Microservices',
            'API Gateway',
        ],
    },
    {
        title: 'Mobile Development',
        Icon: Smartphone,
        skills: [
            'React Native',
            'Flutter',
            'Expo',
            'Mobile UI/UX',
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
            'CI/CD',
            'GitHub Actions',
        ],
    },
    {
        title: 'Database & Storage',
        Icon: Database,
        skills: [
            'PostgreSQL',
            'MySQL',
            'Firebase',
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
            'C++',
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
            'Postman',
            'Docker Desktop',
            'Terminal',
            'Vim',
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
            <motion.h1
            className="text-center font-semibold text-indigo-600 mb-4"                            
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}                          
            >
                <span className="text-2xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
                My Skills
                </span>
            </motion.h1>     

            <FloatingBubbles />
            
                <div
                    ref={containerRef}
                    className="mx-auto pb-64 -ml-24 mt-28 rotate-[25deg] lg:rotate-[25deg]"
                >
                    <div className="flex gap-4">
                        {columns.map((col, colIndex) => {
                            const y = colIndex === 0 ? y1 : colIndex === 1 ? y2 : colIndex === 2 ? y3 : y4;
                            return (
                                <motion.div key={colIndex} style={{ y }} className="flex-1 space-y-4 pt-12">
                                    {col.map((category, index) => {
                                        const Icon = category.Icon;

                                        // State for typewriter effect
                                        const [displayedTitle, setDisplayedTitle] = useState(category.title);
                                        const [isTyping, setIsTyping] = useState(false);
                                        const typingSpeed = 100; // Typing speed in milliseconds

                                        // Function to handle typing effect
                                        const typeWriter = (text) => {
                                            let i = 0;
                                            setIsTyping(true);
                                            const interval = setInterval(() => {
                                                if (i < text.length) {
                                                    setDisplayedTitle((prev) => text.slice(0, i + 1)); // Update displayed title correctly
                                                    i++;
                                                } else {
                                                    clearInterval(interval);
                                                    setIsTyping(false);
                                                }
                                            }, typingSpeed);
                                        };

                                        const handleMouseEnter = () => {
                                            if (!isTyping) {
                                                setDisplayedTitle(''); // Reset title for typing
                                                typeWriter(category.title); // Start typing effect
                                            }
                                        };

                                        const handleMouseLeave = () => {
                                            if (!isTyping) {
                                                setDisplayedTitle(category.title); // Reset to full title when mouse leaves
                                            }
                                        };

                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                                whileHover={{
                                                    background: 'linear-gradient(to right bottom, rgba(168, 85, 247, 0), #a855f7)', // Purple 500 to transparent
                                                }}
                                                className="bg-gradient-to-br from-gray-500/50 to-purple-900/50 border-2 border-purple-500 rounded-2xl overflow-hidden shadow-xl"
                                            >
                                                <div className="p-6">
                                                    <div className="flex items-center gap-3">
                                                        <Icon className="w-8 h-8 text-white" />
                                                        <h3
                                                            className="text-xl text-gray-200 font-semibold"
                                                            onMouseEnter={handleMouseEnter} // Start typing on hover
                                                            onMouseLeave={handleMouseLeave} // Reset to full title on mouse leave
                                                        >
                                                            {displayedTitle || category.title}
                                                        </h3>
                                                    </div>
                                                    <ul className="mt-4 space-y-1">
                                                        {category.skills.map((skill, i) => (
                                                            <motion.li
                                                                key={i}
                                                                className="text-gray-400 text-sm"
                                                                whileHover={{ scale: 1.1, color: '#a855f7' }} // Change color to a nice purple on hover
                                                                transition={{ type: 'spring', stiffness: 300 }} // Spring effect
                                                            >
                                                                {skill}
                                                            </motion.li>
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
