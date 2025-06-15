import React,{ useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { projectData } from "../data/Projects"
import FloatingBubbles from "./FloatingBubbles"

export default function FavouriteSection() {
  const projects = projectData
  const favoriteProjects = projects.filter((project) => project.favorite)
  const [isMobile, setIsMobile] = useState(false)

  // State to track which card is at the top (active)
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Smoother, more subtle transform values for desktop
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80])

  // Handle card click to bring it to the top
  const handleCardClick = (index) => {
    if (isMobile) {
      setActiveCardIndex(index)
    }
  }

  // Function to determine card position based on its relation to active card
  const getCardPosition = (index) => {
    if (!isMobile) return { translateY: 0, scale: 1, zIndex: 1 }

    // Calculate position relative to active card
    const positionFromActive = index - activeCardIndex

    if (positionFromActive === 0) {
      // Active card (top of stack)
      return { translateY: 0, scale: 1, zIndex: 10 }
    } else if (positionFromActive < 0) {
      // Cards that were above active and now go to bottom
      return {
        translateY: (favoriteProjects.length + positionFromActive) * 40,
        scale: 1 - (favoriteProjects.length + positionFromActive) * 0.05,
        zIndex: 1 + positionFromActive,
      }
    } else {
      // Cards below active
      return {
        translateY: positionFromActive * 40,
        scale: 1 - positionFromActive * 0.05,
        zIndex: 10 - positionFromActive,
      }
    }
  }

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-center font-semibold mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
            My Favourites
          </span>
        </motion.h1>

        <div ref={containerRef} className="relative z-10">
          {/* Container for the cards */}
          <div
            className={`relative ${isMobile ? "h-[450px]" : "md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8"}`}
          >
            {favoriteProjects.slice(0, 3).map((card, index) => {
              // Assign different y values based on column position for larger screens
              const yValue = index === 0 ? y1 : index === 1 ? y2 : y3

              // Get position values for this card
              const position = getCardPosition(index)

              return (
                <motion.div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  style={{
                    y: !isMobile ? yValue : undefined,
                  }}
                  animate={{
                    translateY: position.translateY,
                    scale: position.scale,
                    zIndex: position.zIndex,
                  }}
                  initial={{
                    opacity: 0,
                    y: isMobile ? 0 : 30,
                    translateY: isMobile ? index * 40 : 0,
                    scale: isMobile ? 1 - index * 0.05 : 1,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: isMobile ? 0 : 0,
                  }}
                  whileHover={{
                    scale: isMobile ? position.scale * 1.02 : 1.03,
                    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className={`
                    bg-gradient-to-br from-gray-800/80 to-purple-900/80 
                    border border-purple-500/50 rounded-xl overflow-hidden 
                    shadow-lg backdrop-blur-sm flex flex-col
                    ${isMobile ? "absolute left-0 right-0 mx-4 cursor-pointer" : "relative"}
                    h-[280px] md:h-full
                  `}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.image || "/placeholder.svg?height=300&width=400"}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5 flex-grow">
                    <h3 className="text-xl text-gray-100 font-semibold mb-3">{card.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{card.description}</p>
                  </div>

                  {/* Visual indicator that cards are clickable on mobile */}
                  {isMobile && (
                    <div className="absolute top-2 right-2 bg-purple-500/80 text-white text-xs px-2 py-1 rounded-full">
                      Tap to view
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Position the bubbles as a background element */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingBubbles />
      </div>
    </section>
  )
}
