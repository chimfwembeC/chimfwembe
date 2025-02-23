import React, { useCallback, useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Database, Cloud, Repeat as ReactIcon, Terminal } from 'lucide-react';
import { AnimatePresence, motion, useAnimation, useScroll, useTransform } from 'framer-motion';

interface TechIcon {
    icon: React.ElementType;
    initialPosition: { x: number; y: number };
    speed: number;
}

const techIcons: TechIcon[] = [
    { icon: ReactIcon, initialPosition: { x: -20, y: -20 }, speed: 3 },
    { icon: Terminal, initialPosition: { x: 20, y: 20 }, speed: 2.5 },
    { icon: Database, initialPosition: { x: -30, y: 30 }, speed: 2 },
    { icon: Cloud, initialPosition: { x: 30, y: -30 }, speed: 3.5 },
];


export default function Hero() {
    const { scrollYProgress } = useScroll();

    // Floating Animation for Elements
    const floatingAnimation = {
        y: ["0%", "-5%", "0%"],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
    };

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const controls = useAnimation();
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setMousePosition({
            x: (e.clientX - window.innerWidth / 2) / 50,
            y: (e.clientY - window.innerHeight / 2) / 50,
        });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    const typewriterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const floatingIconVariants = {
        animate: (custom: number) => ({
            y: [0, -15, 0],
            x: [0, 10, 0],
            transition: {
                duration: custom,
                repeat: Infinity,
                repeatType: 'reverse' as const,
                ease: 'easeInOut',
            },
        }),
    };
    // Scroll-based Transformations
    const scaleX = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 15]);

    return (
        <section id="about" className="relative min-h-full lg:min-h-screen pt-24 px-4 overflow-hidden">

            <div className="absolute">
                <div className="absolute inset-0 opacity-20">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-2 w-2 bg-blue-400 rounded-full"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                            }}
                            animate={{
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                            style={{ filter: 'blur(1px)' }}
                        />
                    ))}
                </div>
            </div>

            {/* Top Layer - Floating Circles */}
            <motion.div
                className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-500 rounded-full opacity-50 blur-3xl"
                animate={{ y: ["0%", "10%", "0%"], transition: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } }}
            />
            {/* Middle Layer - Floating Tech Icons */}
            {/* <div className="absolute inset-0">
                {techIcons.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                        <motion.div
                            key={index}
                            className="absolute"
                            style={{
                                left: `${50 + tech.initialPosition.x}%`,
                                top: `${50 + tech.initialPosition.y}%`,
                            }}
                            variants={floatingIconVariants}
                            animate="animate"
                            custom={tech.speed}
                        >
                            <Icon
                                className="text-blue-400/60 w-12 h-12 md:w-16 md:h-16"
                                style={{
                                    filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.3))',
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div> */}


            <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
                {/* Title */}
                <motion.h1
                    className="md:text-6xl text-2xl lg:text-4xl font-semibold text-indigo-600"
                    variants={typewriterVariants}
                    initial="hidden"
                    animate="visible"
                    onAnimationComplete={() => setIsTypingComplete(true)}
                >
                    <span className="text-2xl lg:text-4xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Full Stack Developer
                    </span>
                </motion.h1>

                {/* Main Title with Scroll Scaling Effect */}
                <AnimatePresence>
                    {isTypingComplete && (
                        <motion.p
                            className="mb-8 text-2xl md:text-4xl text-slate-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Creating Digital Excellence Through{' '}
                            <span className="gradient-text">Code</span>
                        </motion.p>
                    )}
                </AnimatePresence>


                {/* Description with Scroll-based Rotation */}
                <motion.p
                    style={{ rotateZ }}
                    className="text-xl text-gray-400 max-w-2xl"
                >
                    I build exceptional digital experiences that combine beautiful design with powerful functionality.
                </motion.p>

                {/* Call-to-Action Button */}
                <motion.a
                    href="/projects"
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    View Projects
                    <motion.div
                        animate={{ x: 0 }}
                        whileHover={{ x: 8 }} // Moves arrow to the right slightly
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <ArrowRight className="h-5 w-5" />
                    </motion.div>
                </motion.a>


                {/* Social Icons with Hover Scroll Effect */}
                <motion.div className="flex gap-6 mt-4">
                    {[
                        {
                            href: 'https://github.com/chimfwembeC',
                            icon: <Github className="h-6 w-6" />,
                        },
                        {
                            href: 'https://www.linkedin.com/in/chimfwembe-kangwa-60098127b',
                            icon: <Linkedin className="h-6 w-6" />,
                        },
                        {
                            href: 'https://x.com/CharlesK83179',
                            icon: <Twitter className="h-6 w-6" />,
                        },
                    ].map(({ href, icon }, index) => (
                        <motion.a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
                            whileHover={{ y: -5 }} // Move slightly up on hover
                            whileTap={{ scale: 0.9 }} // Scale down on click
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
