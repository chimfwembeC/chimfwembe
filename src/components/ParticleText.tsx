"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  color: string
  originalX: number
  originalY: number
  vx: number
  vy: number
}

interface ParticleTextProps {
  text: string
  className?: string
  particleSize?: number
  particleSpacing?: number
  colors?: string[]
  interactive?: boolean
}

export default function ParticleText({
  text,
  className = "",
  particleSize = 4,
  particleSpacing = 6,
  colors = ["#818cf8", "#a78bfa", "#c4b5fd", "#93c5fd", "#7dd3fc"],
  interactive = true,
}: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const animationRef = useRef<number>()

  // Create particles from text
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const containerWidth = containerRef.current.clientWidth
    const containerHeight = containerRef.current.clientHeight

    // Set canvas dimensions
    canvas.width = containerWidth
    canvas.height = containerHeight
    setDimensions({ width: containerWidth, height: containerHeight })

    // Prepare canvas for text measurement
    ctx.font = `bold ${containerHeight * 0.7}px sans-serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Measure text width to center it
    const textWidth = ctx.measureText(text).width
    const scale = textWidth > containerWidth * 0.8 ? (containerWidth * 0.8) / textWidth : 1

    // Adjust font size if text is too wide
    ctx.font = `bold ${containerHeight * 0.7 * scale}px sans-serif`

    // Draw text (invisible, just for particle generation)
    ctx.fillText(text, containerWidth / 2, containerHeight / 2)

    // Get image data to create particles
    const imageData = ctx.getImageData(0, 0, containerWidth, containerHeight).data
    const newParticles: Particle[] = []

    // Sample pixels to create particles
    for (let y = 0; y < containerHeight; y += particleSpacing) {
      for (let x = 0; x < containerWidth; x += particleSpacing) {
        const index = (y * containerWidth + x) * 4
        const alpha = imageData[index + 3]

        if (alpha > 128) {
          const color = colors[Math.floor(Math.random() * colors.length)]
          const size = particleSize * (0.8 + Math.random() * 0.4)

          newParticles.push({
            x,
            y,
            size,
            color,
            originalX: x,
            originalY: y,
            vx: 0,
            vy: 0,
          })
        }
      }
    }

    setParticles(newParticles)

    // Clear the canvas after generating particles
    ctx.clearRect(0, 0, containerWidth, containerHeight)

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      const newWidth = containerRef.current.clientWidth
      const newHeight = containerRef.current.clientHeight

      if (canvas) {
        canvas.width = newWidth
        canvas.height = newHeight
        setDimensions({ width: newWidth, height: newHeight })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [text, particleSpacing, colors, particleSize])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      particles.forEach((particle) => {
        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Apply forces
        if (interactive && isHovering) {
          // Mouse repulsion
          const dx = particle.x - mousePosition.x
          const dy = particle.y - mousePosition.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 100

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            particle.vx += (dx / distance) * force * 0.5
            particle.vy += (dy / distance) * force * 0.5
          }
        }

        // Return to original position
        const returnForce = 0.05
        particle.vx += (particle.originalX - particle.x) * returnForce
        particle.vy += (particle.originalY - particle.y) * returnForce

        // Apply friction
        particle.vx *= 0.9
        particle.vy *= 0.9
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particles, dimensions, mousePosition, isHovering, interactive])

  // Mouse interaction
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !interactive) return

    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
