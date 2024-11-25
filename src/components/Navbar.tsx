import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
    <nav className="fixed w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="hidden md:block ml-2 text-xl font-bold gradient-text">Chimfwembe Kangwa</span>
              <span className="block md:hidden ml-2 text-xl font-bold gradient-text">CK</span>
            </Link>
            
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path ? 'text-indigo-600 bg-indigo-50' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg px-4 py-3 mx-auto max-w-7xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors ${
                  location.pathname === item.path ? 'text-indigo-600 bg-indigo-50' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
