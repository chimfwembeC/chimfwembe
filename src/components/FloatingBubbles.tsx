"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  color: string
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    // Generate random bubbles
    const colors = [
      "rgba(139, 92, 246, 0.15)", // purple
      "rgba(79, 70, 229, 0.15)", // indigo
      "rgba(59, 130, 246, 0.15)", // blue
      "rgba(147, 51, 234, 0.15)", // violet
    ]

    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 40,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setBubbles(newBubbles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
