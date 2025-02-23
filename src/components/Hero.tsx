import React, { useCallback, useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Database, Cloud, Repeat as ReactIcon, Terminal, Code, Server, Layers, Cpu, Wifi } from 'lucide-react';
import { AnimatePresence, motion, useAnimation, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const { scrollYProgress } = useScroll();

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

    // Floating icons with glowing effects
    const icons = [Code, Database, Server, Layers, Cpu, Wifi, Cloud, Terminal];
    const floatingIcons = icons.map((Icon, index) => {
        const duration = 3 + Math.random() * 2;
        return { Icon, duration, color: `hsl(${index * 45}, 70%, 50%)` };
    });

    // Scroll-based Transformations
    const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 15]);

    return (
        <section id="about" className="relative min-h-full lg:min-h-screen pt-24 px-4 overflow-hidden">
            {/* Floating Tech Icons with Glowing Effects */}
            {floatingIcons.map(({ Icon, color }, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    animate={{
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                    style={{
                        filter: "blur(0.5px)",
                        top: `${Math.random() * 80 + 10}%`,  // Random position for vertical alignment
                        left: `${Math.random() * 80 + 10}%`, // Random position for horizontal alignment
                    }}
                >
                    <div className="relative">
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                filter: "blur(10px)",
                                background: color,
                                opacity: 0.3,
                            }}
                        />
                        <Icon
                            size={48}
                            style={{ color }}
                            className="relative z-10 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                        />
                    </div>
                </motion.div>
            ))}

            <motion.div
                className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-500 rounded-full opacity-50 blur-3xl"
                animate={{ y: ["0%", "10%", "0%"], transition: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } }}
            />
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
