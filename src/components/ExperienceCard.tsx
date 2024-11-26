import React from 'react';
import { Calendar, Building2, TypeIcon, Globe, Locate } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  type: string;
  website: string,
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
  
  return (
    <div className="relative pl-2 pb-2 group">
      {/* Timeline line */}
      <div className="absolute left-1 -top-4 h-[500px] w-0.5 bg-gray-200 group-last:h-48"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] -top-8 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white"></div>
      
      <div className="bg-white p-6 rounded-xl shadow-md ml-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center gap-2 text-gray-600 mt-2 sm:mt-0">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{period}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-indigo-600 mb-4">
          <Building2 className="h-4 w-4" />
          <span className="text-lg">{company}</span>
        </div>

        <div className="flex items-center gap-2 text-indigo-600 mb-4">
          <Locate className="h-4 w-4" />
          <span className="text-lg">{type}</span>
        </div>

        <div className="flex items-center gap-2 text-indigo-600 mb-4">
          <Globe className="h-4 w-4" />
          <span className="text-lg"><a href={website}>{website}</a> </span>
        </div>        
        <ul className="space-y-2 mb-4">
          {description.map((item, index) => (
            <li key={index} className="text-gray-600 flex items-start">
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
    </div>
  );
}