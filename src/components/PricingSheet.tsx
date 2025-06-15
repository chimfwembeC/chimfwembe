"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, CheckCircle, X } from "lucide-react";
import FloatingBubbles from "./FloatingBubbles";


// PricingSheet Component
export default function PricingSheet() {
  const [open, setOpen] = useState(false);

  const plans = [
    {
      title: "Starter Website",
      price: "ZMW 3,000 – 5,000",
      features: [
        "1–3 pages",
        "Responsive design",
        "Basic contact form",
        "Custom domain + SSL setup",
      ],
    },
    {
      title: "Business Website",
      price: "ZMW 6,000 – 10,000",
      features: [
        "Up to 10 pages",
        "Admin panel",
        "SEO optimized",
        "Forms + Newsletter",
      ],
    },
    {
      title: "Mobile MVP",
      price: "ZMW 12,000 – 20,000",
      features: [
        "Cross-platform",
        "Authentication + APIs",
        "Play Store ready",
      ],
    },
    {
      title: "Support Plan",
      price: "ZMW 500 – 1,500/mo",
      features: ["Bug fixes", "Monitoring", "Priority Support", "Backups"],
    },
  ];

  return (
    <div className="relative">
      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="relative bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded-full animate-ping bg-indigo-400 opacity-75"></span>
          <DollarSign className="relative z-10" />
        </button>
      </div>

      {/* Pricing Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex items-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60" onClick={() => setOpen(false)}></div>

            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-purple-900 backdrop-blur-lg text-white rounded-t-3xl shadow-2xl z-50 w-full  border-t-2 border-purple-500 overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              {/* <FloatingBubbles /> */}

              <div className="flex justify-between items-center mb-4 z-10 p-6 relative">
                <h2 className="text-2xl font-bold">Pricing Plans</h2>
                <button
                  className="text-gray-400 hover:text-white text-xl"
                  onClick={() => setOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative  max-h-[70vh] overflow-auto px-4">
                {plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative bg-gradient-to-br from-gray-500/40 to-purple-900/80 border-2 border-purple-500 rounded-2xl shadow-xl p-6 transition-shadow"
                  >
              <FloatingBubbles />

                    <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                    <p className="text-indigo-400 font-bold mb-4">{plan.price}</p>
                    <ul className="text-sm text-gray-300 space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle size={16} className="text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
