import React from 'react';
import { motion } from 'framer-motion';

const FloatingBubbles = () => {
    return (
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
    );
};

export default FloatingBubbles;
