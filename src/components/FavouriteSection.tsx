import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectData } from '../data/Projects';

// const cards = [
//     {
//         title: "Full-Stack Development",
//         description: "Designing responsive and scalable applications using modern frameworks and libraries.",
//         image: "https://images.unsplash.com/photo-1611095973510-d38e5e5afbd2?auto=format&fit=crop&w=800&q=80"
//     },
//     {
//         title: "Cloud Architecture",
//         description: "Building and deploying robust solutions on AWS, Azure, or GCP for optimal scalability.",
//         image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
//     },
//     {
//         title: "Cybersecurity",
//         description: "Implementing proactive security measures to safeguard data and infrastructure.",
//         image: "https://images.unsplash.com/photo-1605902711622-cfb43c443e7e?auto=format&fit=crop&w=800&q=80"
//     },
//     {
//         title: "DevOps & Automation",
//         description: "Streamlining development pipelines with CI/CD, containerization, and automation tools.",
//         image: "https://images.unsplash.com/photo-1581091012184-c0742f54f7b0?auto=format&fit=crop&w=800&q=80"
//     }
// ];

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
    // const y4 = useTransform(scrollYProgress, [0, 1], [0, 100]);

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

                <div ref={containerRef} className="mx-auto -ml-12 lg:ml-0 -mt-28">
                    <div className="flex gap-4">
                        {/* First Column */}
                        <motion.div style={{ y: y1 }} className="flex-1 space-y-4">
                            {projects.slice(0, 1).map((card, index) => (
                                <motion.div

                                    key={index}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
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
                            {projects.slice(3, 4).map((card, index) => (
                                <motion.div
                                    key={index}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
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
                            {projects.slice(2, 3).map((card, index) => (
                                <motion.div
                                    key={index}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
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
