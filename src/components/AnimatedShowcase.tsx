import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
import { Code, Database, Server, Layers, Cpu, Wifi, Cloud, Terminal } from "lucide-react";

const GRID_SIZE = 20;

export default function AnimatedShowcase() {
    const { scrollYProgress } = useScroll();
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Particle system
    const particles = Array.from({ length: GRID_SIZE * 2 }, (_, i) => ({
        id: i,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5,
    }));

    // Advanced transformations
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 180, 360]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);

    // 3D perspective values
    const perspective = useTransform(scrollYProgress, [0, 1], [1000, 2000]);
    const rotateX = useSpring(useTransform(mouseY, [0, window.innerHeight], [15, -15]), { stiffness: 50 });
    const rotateY = useSpring(useTransform(mouseX, [0, window.innerWidth], [-15, 15]), { stiffness: 50 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                mouseX.set(e.clientX - rect.left);
                mouseY.set(e.clientY - rect.top);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Floating icons with dynamic paths
    const icons = [Code, Database, Server, Layers, Cpu, Wifi, Cloud, Terminal];
    const floatingIcons = icons.map((Icon, index) => {
        const delay = index * 0.2;
        const duration = 3 + Math.random() * 2;
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        useAnimationFrame((time) => {
            const t = (time * 0.001 + delay) % duration;
            x.set(Math.sin(t * 2) * 50);
            y.set(Math.cos(t * 3) * 30);
        });

        return { Icon, x, y, color: `hsl(${index * 45}, 70%, 50%)` };
    });

    return (
        <div ref={containerRef} className="relative w-full min-h-screen bg-slate-900 overflow-hidden">
            {/* Particle Grid Background */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                        animate={{
                            x: [
                                `${particle.initialX}%`,
                                `${particle.initialX + 10}%`,
                                `${particle.initialX}%`
                            ],
                            y: [
                                `${particle.initialY}%`,
                                `${particle.initialY + 10}%`,
                                `${particle.initialY}%`
                            ],
                            scale: [particle.size, particle.size * 1.5, particle.size],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: particle.speed * 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Cyberpunk Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-20">
                {Array.from({ length: GRID_SIZE * 2 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="border-[0.5px] border-cyan-500/20"
                        style={{ opacity: backgroundOpacity }}
                    />
                ))}
            </div>

            {/* Main Content Container */}
            <motion.div
                className="relative w-full h-screen flex items-center justify-center"
                style={{
                    perspective,
                    rotateX,
                    rotateY,
                }}
            >
                {/* Floating Tech Icons with Glowing Effects */}
                {floatingIcons.map(({ Icon, x, y, color }, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{
                            x,
                            y,
                            filter: "blur(0.5px)",
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

                {/* Central Showcase Element */}
                <motion.div
                    className="relative z-10"
                    // style={{ scale, rotate }}
                    style={{ scale }}
                >
                    <motion.div
                        className="grid grid-cols-2 gap-4 p-8"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div
                                key={item}
                                className="w-56 h-56 bg-gradient-to-br from-slate-800/80 to-slate-900/80 
                                         backdrop-blur-md rounded-lg p-6 border border-slate-700/50
                                         hover:border-cyan-500/50 transition-colors duration-300
                                         shadow-[0_0_15px_rgba(0,255,255,0.1)]"
                                whileHover={{
                                    scale: 1.05,
                                    rotateX: 10,
                                    rotateY: 10,
                                    boxShadow: "0 0 30px rgba(0,255,255,0.2)",
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                    delay: item * 0.1,
                                }}
                            >
                                <div className="h-full flex flex-col justify-between">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                        Project {item}
                                    </h3>
                                    <p className="text-slate-400">
                                        Interactive showcase with advanced animations and effects
                                    </p>
                                    <div className="flex justify-end">
                                        <motion.button
                                            className="px-4 py-2 rounded-md bg-cyan-500/10 text-cyan-400
                                                     hover:bg-cyan-500/20 transition-colors duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Explore
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Animated Gradient Overlays */}
            {/* <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                    style={{ opacity: backgroundOpacity }}
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"
                    style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.3, 0.7]) }}
                />
            </div> */}
        </div>
    );
}