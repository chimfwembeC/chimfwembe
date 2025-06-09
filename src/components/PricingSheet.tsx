import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign } from "lucide-react";

export default function PricingSheet() {
  const [open, setOpen] = useState(false);

  const plans = [
    {
      title: "Starter Website",
      price: "ZMW 3,000 – 5,000",
      features: ["1–3 pages", "Responsive design", "Basic contact form", "Custom domain"],
    },
    {
      title: "Business Website",
      price: "ZMW 6,000 – 10,000",
      features: ["Up to 10 pages", "Admin panel", "SEO", "Forms + Newsletter"],
    },
    {
      title: "Mobile MVP",
      price: "ZMW 12,000 – 20,000",
      features: ["Cross-platform", "Auth + APIs", "Play Store ready"],
    },
    {
      title: "Support Plan",
      price: "ZMW 500 – 1,500/mo",
      features: ["Bug fixes", "Monitoring", "Priority Support", "Backups"],
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="relative bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          {/* Ping effect */}
          <span className="absolute top-0 left-0 w-full h-full rounded-full animate-ping bg-indigo-400 opacity-75"></span>
          <DollarSign className="relative z-10" />
        </button>
      </div>

      {/* Slide-Up Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-0 left-0 right-0  bg-gradient-to-br from-gray-900 to-purple-900  text-white p-6 rounded-t-3xl shadow-lg z-50 max-h-[90vh] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Pricing Plans</h2>
              <button
                className="text-gray-400 hover:text-white text-xl"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plans.map((plan, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-500/50 to-purple-900/90 border-2 border-purple-500 rounded-2xl overflow-hidden shadow-xl p-6 transition-shadow">
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  <p className="text-indigo-400 font-bold mb-3">{plan.price}</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-400 mr-2">✔</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
