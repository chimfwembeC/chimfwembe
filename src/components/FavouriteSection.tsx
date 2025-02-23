import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectData } from '../data/Projects';
import FloatingBubbles from './FloatingBubbles';

export default function FavouriteSection() {
    const projects = projectData;

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    // Filter the favorite projects
    const favoriteProjects = projects.filter(project => project.favorite);

    return (
        <section className="py-24 h-full">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center text-white mb-[15rem]"
                >
                    My Favourites
                </motion.h2>

                <FloatingBubbles />

                <div ref={containerRef} className="mx-auto -ml-12 lg:ml-0 -mt-28">
                    <div className="flex gap-8">
                        {/* First Column */}
                        <motion.div style={{ y: y1 }} className="flex-1 space-y-4">
                            {favoriteProjects.slice(0, 1).map((card, index) => (
                                <motion.div
                                    key={index}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", opacity: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.2 }}
                                    className="bg-gradient-to-br from-gray-500/50 to-purple-900/50 border-2 border-purple-500 rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl text-gray-200 font-semibold mb-2">{card.title}</h3>
                                        <p className="text-gray-400">{card.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Second Column */}
                        <motion.div style={{ y: y2 }} className="flex-1 space-y-4">
                            {favoriteProjects.slice(1, 2).map((card, index) => (
                                <motion.div
                                    key={index}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", opacity: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.2 }}
                                    className="bg-gradient-to-br from-gray-500/50 to-purple-900/50 border-2 border-purple-500 rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <img src={card.image} alt={card.title} className="h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl text-gray-200 font-semibold mb-2">{card.title}</h3>
                                        <p className="text-gray-400">{card.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Third Column */}
                        <motion.div style={{ y: y3 }} className="flex-1 space-y-4">
                            {favoriteProjects.slice(2, 3).map((card, index) => (
                                <motion.div
                                    key={index}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", opacity: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.2 }}
                                    className="bg-gradient-to-br from-gray-500/50 to-purple-900/50 border-2 border-purple-500 rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl text-gray-200 font-semibold mb-2">{card.title}</h3>
                                        <p className="text-gray-400">{card.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
