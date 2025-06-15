import React from "react";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DeveloperImage from '../components/assets/images/crock-suit-about.png';


const navigation = {
  main: [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ],
  social: [
    { name: "GitHub", icon: Github, href: "https://github.com/chimfwembeC" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/chimfwembe-kangwa-60098127b",
    },
    { name: "Twitter", icon: Twitter, href: "https://x.com/CharlesK83179" },
  ],
  contact: [
    { icon: Mail, text: "kangwac3@gmail.com", href: "kangwac3@gmail.com" },
    { icon: Phone, text: "+26 (0) 765 725 317", href: "tel:+260765725317" },
    { icon: MapPin, text: "Lusaka Zambia, Lusaka.", href: null },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 border-t-2 border-purple-500 rounded-t-2xl text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                {/* <Code2 className="h-8 w-8 text-indigo-600" /> */}
                <img src={DeveloperImage} className="h-auto w-8" alt="" />
                <span className="hidden md:block ml-2 text-xl font-bold gradient-text">
                  Chimfwembe Kangwa
                </span>
              </Link>
            </div>
            <p className="text-gray-400 max-w-xs">
              Building exceptional digital experiences through innovative
              solutions and clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              {navigation.contact.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-indigo-400" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              {/* <div className="flex gap-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div> */}
              {/* Social Icons with Hover Scroll Effect */}
              <motion.div className="flex gap-6 mt-4">
                {[
                  {
                    href: "https://github.com/chimfwembeC",
                    icon: <Github className="h-6 w-6" />,
                  },
                  {
                    href: "https://www.linkedin.com/in/chimfwembe-kangwa-60098127b",
                    icon: <Linkedin className="h-6 w-6" />,
                  },
                  {
                    href: "https://x.com/CharlesK83179",
                    icon: <Twitter className="h-6 w-6" />,
                  },
                ].map(({ href, icon }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ y: -5 }} // Move slightly up on hover
                    whileTap={{ scale: 0.9 }} // Scale down on click
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Chimfwembe kangwa. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
