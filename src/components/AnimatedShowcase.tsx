import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Database, Server, Layers } from "lucide-react";

export default function AnimatedShowcase() {
    const { scrollYProgress } = useScroll();

    // Scroll-based transformations
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

    // Floating Animation
    const floatingVariants = {
        animate: {
            y: ["0%", "-10%", "0%"],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Floating Tech Icons */}
            <motion.div
                className="absolute top-20 left-16 text-purple-400"
                variants={floatingVariants}
                animate="animate"
            >
                <Code size={48} />
            </motion.div>
            <motion.div
                className="absolute top-40 right-10 text-blue-500"
                animate={{ y: ["0%", "10%", "0%"], transition: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } }}
            >
                <Database size={48} />
            </motion.div>
            <motion.div
                className="absolute bottom-20 left-40 text-teal-400"
                variants={floatingVariants}
                animate="animate"
            >
                <Server size={48} />
            </motion.div>
            <motion.div
                className="absolute bottom-10 right-20 text-indigo-500"
                animate={{ y: ["0%", "-10%", "0%"], transition: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } }}
            >
                <Layers size={48} />
            </motion.div>

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl lg:text-5xl font-bold text-gray-100/80 mb-12"
            >
                Explore My Work
            </motion.h2>

            {/* Scrollable Projects Section */}
            <motion.div
                className="flex gap-6 overflow-x-scroll no-scrollbar py-6 w-full max-w-6xl"
                style={{ scale }}
            >
                {[
                    { title: "Project One", bg: "bg-indigo-600" },
                    { title: "Project Two", bg: "bg-teal-500" },
                    { title: "Project Three", bg: "bg-purple-500" },
                    { title: "Project Four", bg: "bg-blue-500" },
                ].map((project, index) => (
                    <motion.div
                        key={index}
                        className={`w-64 h-80 ${project.bg} rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.1, rotate: -3 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                        {project.title}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
