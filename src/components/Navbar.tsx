import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Logo from './assets/icons/favicon-32x32.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="mx-auto">
        <motion.div
          className="bg-gradient-to-bt from-gray-900 to-purple-900 backdrop-blur-md px-6"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 0.5 }} // Duration of the transition
        >
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="" className="h-8" />
              {/* <span className="hidden md:block ml-2 text-xl font-bold gradient-text">Chimfwembe Kangwa</span> */}
            </Link>

            <div className="hidden md:block">
              <div className="flex items-baseline space-x-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }} // Initial state for each nav item
                    animate={{ opacity: 1, y: 0 }} // Animate to visible state
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }} // Delay for staggered effect
                    whileHover={{ scale: 1.1 }} // Scale up on hover
                    whileTap={{ scale: 0.95 }} // Scale down on tap
                  >
                    <Link
                      to={item.path}
                      className={`text-sm  bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent
                         ${location.pathname === item.path 
                          ? 'text-indigo-600' : 'text-gray-200'
                        } p-2 rounded-lg transition-colors duration-300`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }} // Initial state for dropdown
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          exit={{ opacity: 0, y: -20 }} // Exit animation
          transition={{ duration: 0.3 }} // Duration of the transition
        >
          <div className="bg-gradient-to-bt from-gray-900 to-purple-900 backdrop-blur-sm rounded-t-xl shadow-lg px-4 py-3 mx-auto max-w-7xl">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }} // Initial state for each mobile nav item
                animate={{ opacity: 1, y: 0 }} // Animate to visible state
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }} // Delay for staggered effect
              >
                <Link
                  to={item.path}
                  className={`block px-4 py-3 mb-2 rounded-lg text-gray-200 hover:text-indigo-600 hover:bg-indigo-50 transition-colors ${location.pathname === item.path ? 'text-indigo-600 bg-indigo-50' : ''
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
