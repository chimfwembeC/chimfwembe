"use client"

import { useEffect, useState } from "react"
import {
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Database,
  Cloud,
  Terminal,
  Code,
  Server,
  Layers,
  Cpu,
  Wifi,
  ChevronDown,
} from "lucide-react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import FloatingBubbles from "./FloatingBubbles"
import ParticleText from "./ParticleText"
import GitHubCalendar from "./GitHubCalendar"
import DeveloperImage from '../components/assets/images/crock-suit-about.png';

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showGithubCalendar, setShowGithubCalendar] = useState(false)

  // Floating icons with glowing effects
  const icons = [Code, Database, Server, Layers, Cpu, Wifi, Cloud, Terminal]
  const floatingIcons = icons.map((Icon, index) => {
    const duration = 3 + Math.random() * 2
    return { Icon, duration, color: `hsl(${index * 45}, 70%, 50%)` }
  })

  // Scroll-based Transformations
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 15])

  // Reveal GitHub calendar after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGithubCalendar(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="relative min-h-screen pt-16 md:pt-24 px-4 overflow-hidden">
      {/* Floating Tech Icons with Glowing Effects */}
      {floatingIcons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          className="absolute z-[100]"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            filter: "blur(0.5px)",
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
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
            <Icon size={48} style={{ color }} className="relative z-10 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
          </div>
        </motion.div>
      ))}

      <FloatingBubbles />

      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-purple-950/20 opacity-80" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute bottom-40 right-20 w-64 h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl"
          animate={{
            y: ["0%", "10%", "0%"],
            scale: [1, 1.1, 1],
            transition: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        />

        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl"
          animate={{
            y: ["0%", "10%", "0%"],
            scale: [1, 1.2, 1],
            transition: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        />

        <motion.div
          className="absolute top-60 right-60 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-3xl"
          animate={{
            y: ["0%", "-10%", "0%"],
            scale: [1, 1.15, 1],
            transition: {
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
        {/* Particle Text Name */}
        {/* <div className="hidden lg:block w-full h-24 md:h-32">
          <ParticleText
            text="Chimfwembe Kangwa"
            className="w-full h-full"
            colors={["#818cf8", "#a78bfa", "#c4b5fd", "#93c5fd", "#7dd3fc"]}
            particleSize={3}
            particleSpacing={4}
          />
        </div> */}

        {/* Mobile Animated Text - Name */}
        <div className="block lg:hidden text-center mb-2">
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
            Chimfwembe Kangwa
          </h1>
        </div>
        {/* Particle Text Career */}
        {/* <div className="w-full hidden lg:block h-16 md:h-20 mb-4">
          <ParticleText
            text="IT Professional & Full Stack Developer"
            className="w-full h-full"
            colors={["#a78bfa", "#c4b5fd", "#93c5fd", "#7dd3fc", "#a5b4fc"]}
            particleSize={2.5}
            particleSpacing={5}
          />
        </div> */}

        {/* Mobile Animated Text - Title */}
        <div className="block lg:hidden text-center">
          <h2 className="text-lg font-semibold bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
            IT Professional & Full Stack Developer
          </h2>
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a
            href="/projects"
            className="inline-flex items-center gap-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-purple-500/20"
            whileHover={{ scale: 1.05, gap: 8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View Projects
            <motion.div animate={{ x: 0 }} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.a>

          <motion.a
            href="/contact"
            className="inline-flex items-center gap-1 bg-transparent border border-purple-500 text-purple-400 px-6 py-3 rounded-xl hover:bg-purple-900/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Icons with Hover Effect */}
        <motion.div
          className="flex gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            {
              href: "https://github.com/chimfwembe",
              icon: <Github className="h-6 w-6" />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/chimfwembe-kangwa-60098127b",
              icon: <Linkedin className="h-6 w-6" />,
              label: "LinkedIn",
            },
            {
              href: "https://x.com/CharlesK83179",
              icon: <Twitter className="h-6 w-6" />,
              label: "Twitter",
            },
          ].map(({ href, icon, label }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl shadow-lg hover:shadow-purple-500/20 hover:bg-gray-700/50 transition-all group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label={label}
            >
              <motion.div className="text-gray-300 group-hover:text-purple-400 transition-colors">{icon}</motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* GitHub Calendar */}
        <AnimatePresence>
          {showGithubCalendar && (
            <motion.div
              className="w-full mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GitHubCalendar username="chimfwembeC" className="max-w-3xl mx-auto" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative">
          <img
            src={DeveloperImage}
            alt="Developer"
            className="w-full lg:w-full h-auto lg:h-full object-cover"
          />
        </div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <ChevronDown className="h-6 w-6 text-purple-400" />
        </motion.div>
      </div>
    </section>
  )
}
