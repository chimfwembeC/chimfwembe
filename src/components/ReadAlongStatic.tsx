import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";

interface Word {
  text: string;
  start: number;
  end: number;
}
export default function ReadAlongStatic({text}) {
//   const sampleText = `I'm a Full-Stack Developer and CCNA-certified professional with expertise in network infrastructure, cybersecurity, and software development. I specialize in React, database management, and backend systems, building scalable applications with optimized network performance`;

  const words: Word[] = text.split(" ").map((word, index) => ({
    text: word,
    start: index * 400, // Each word takes 400ms
    end: (index + 1) * 400,
  }));

  const totalDuration = words[words.length - 1].end;
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let interval: number;
    // if (isPlaying) {
    interval = setInterval(() => {
      setCurrentTime((time) => {
        if (time >= totalDuration) {
          // setIsPlaying(false);
          return 0;
        }
        return time + 50;
      });
    }, 50);
    // }
    return () => clearInterval(interval);
  }, [totalDuration]);
  return (
    <div>
      <AnimatePresence>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={`inline-block mx-1 ${
              currentTime >= word.start && currentTime <= word.end
                ? "text-blue-600 font-medium"
                : "text-gray-400"
            }`}
            initial={{ opacity: 0.6 }}
            animate={{
              opacity:
                currentTime >= word.start && currentTime <= word.end ? 1 : 0.6,
              scale:
                currentTime >= word.start && currentTime <= word.end ? 1.1 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {word.text}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
