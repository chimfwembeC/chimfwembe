import React, { useState, useEffect } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import DeveloperImage from '../components/assets/images/crock-suit-about.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "My Portifolio", path: "/portifolio" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300`}>
      <div className="">
        <motion.div
          className={`${
            scrolled
              ? "bg-gray-900/80 rounded-b-2xl shadow-lg shadow-purple-500/10 backdrop-blur-md border-b-2 border-purple-800"
              : "border-none"
          } mx-auto px-4 sm:px-6 lg:px-8 transitions-all duration-300`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between h-16">
            {/* Logo and Name */}
            <Link to="/" className="flex items-center group">
              {/* <div className="relative h-9 w-9 overflow-hidden rounded-lg p-0.5">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80"></div>
                <img
                  src={DeveloperImage}
                  alt="Logo"
                  className="relative h-full w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
                />
              </div> */}
              <motion.span
                className="hidden md:block ml-3 text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Chimfwembe
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to={item.path}
                        className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive ? "text-white" : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                        {isActive && (
                          <motion.span
                            className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-purple-500/30 -z-10"
                            layoutId="activeNav"
                            transition={{ type: "spring", duration: 0.6 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-200 hover:text-purple-400 focus:outline-none transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-2"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-b rounded-2xl from-gray-900/95 to-purple-900/95 backdrop-blur-md shadow-lg border-2 border-purple-500 mt-2 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between px-4 py-3 ${
                        index !== navItems.length - 1 ? "border-b border-purple-500/50" : ""
                      } ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium">{item.name}</span>
                      {isActive && <ChevronRight className="h-4 w-4 text-purple-400" />}
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
