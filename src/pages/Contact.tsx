import React, { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import FloatingBubbles from "../components/FloatingBubbles";

const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "kangwac3@gmail.com",
    href: "mailto:kangwac3@gmail.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+260 (765) 725-317",
    href: "tel:+260765725317",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Lusaka Zambia, Lusaka.",
    href: null,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 to-purple-900 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FloatingBubbles />
        <motion.h1
          className="text-center font-semibold text-indigo-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className=" lg:mt-[80px]">
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-400">{label}</h4>
                    {href ? (
                      <a
                        href={href}
                        className="text-purple-600 hover:text-indigo-600 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-purple-600">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-purple-800 mb-6">
                Follow Me
              </h3>
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
                    className="p-3 bg-white rounded-xl shadow-sm hover:text-indigo-600 transition-colors"
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
          <div className="border border-gray-500 rounded-2xl bg-gray-100/20 p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
