import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface Word {
    text: string;
    start: number;
    end: number;
}

const sampleText = `In a world of constant change, the ability to adapt and learn becomes our greatest strength. 
Each day presents new opportunities for growth and understanding, if only we have the courage to embrace them.`;

const words: Word[] = sampleText.split(' ').map((word, index) => ({
    text: word,
    start: index * 400, // Each word takes 400ms
    end: (index + 1) * 400,
}));

export const ReadAlong: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const totalDuration = words[words.length - 1].end;

    useEffect(() => {
        let interval: number;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentTime((time) => {
                    if (time >= totalDuration) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return time + 50;
                });
            }, 50);
        }
        return () => clearInterval(interval);
    }, [isPlaying, totalDuration]);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleReset = () => {
        setIsPlaying(false);
        setCurrentTime(0);
    };

    return (
        <div className="max-w-2xl mx-auto p-8 space-y-6">
            <div className="flex gap-4 justify-center mb-8">
                <button
                    onClick={handlePlayPause}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                    <RotateCcw size={20} />
                    Reset
                </button>
            </div>

            <div className="prose prose-lg max-w-none">
                <AnimatePresence>
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            className={`inline-block mx-1 ${currentTime >= word.start && currentTime <= word.end
                                ? 'text-blue-600 font-medium'
                                : 'text-gray-700'
                                }`}
                            initial={{ opacity: 0.6 }}
                            animate={{
                                opacity: currentTime >= word.start && currentTime <= word.end ? 1 : 0.6,
                                scale: currentTime >= word.start && currentTime <= word.end ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {word.text}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                    className="h-full bg-blue-600 rounded-full"
                    style={{
                        width: `${(currentTime / totalDuration) * 100}%`,
                    }}
                    transition={{ duration: 0.05 }}
                />
            </div>
        </div>
    );
};