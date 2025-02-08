import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Building2, Locate } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  type: string;
  website: string;
  description: string[];
  technologies: string[];
}

export default function ExperienceCard({
  title,
  company,
  period,
  website,
  type,
  description,
  technologies,
}: ExperienceCardProps) {
  // Create a ref for the card container.
  const ref = useRef(null);

  // Hook into the scroll progress for this component.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Extra parallax effects:
  // Timeline dot moves vertically between -20 and 20 pixels.
  const dotY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Timeline line moves downwards by 50 pixels as the card scrolls into view.
  const lineY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Define the card's fade-in and slide-up animation.
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative pl-2 pb-2 group"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
    >
      {/* Timeline line with parallax effect */}
      <motion.div
        style={{ y: lineY }}
        className="absolute left-1 -top-4 h-[500px] w-0.5 bg-gray-200 group-last:h-48"
      />

      {/* Timeline dot with parallax effect */}
      <motion.div
        style={{ y: dotY }}
        className="absolute left-[-8px] -top-8 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white"
      />

      <div className="border border-gray-500 rounded-2xl bg-gray-100/20 p-6 shadow-md ml-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
          <div className="flex items-center gap-2 text-gray-600 mt-2 sm:mt-0">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{period}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-indigo-600 mb-4">
          <Building2 className="h-4 w-4" />
          <a className="text-lg" href={website}>
            {company}
          </a>
        </div>

        <div className="flex items-center gap-2 text-indigo-600 mb-4">
          <Locate className="h-4 w-4" />
          <span className="text-lg">{type}</span>
        </div>

        <ul className="space-y-2 mb-4">
          {description.map((item, index) => (
            <li key={index} className="text-gray-100 flex items-start">
              <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
