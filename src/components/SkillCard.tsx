import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  Icon: LucideIcon;
  skills: string[];
  price: string;
}

export default function SkillCard({ title, Icon, skills, price }: SkillCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-500/50 to-purple-900/90 border-2 border-purple-500 rounded-2xl overflow-hidden shadow-xl p-6 transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <h3 className="text-lg font-semibold text-purple-500">{title}</h3>
        {price && (
            <p className="text-sm text-indigo-300 mt-1">{price}</p>
          )}
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 border-2 border-purple-500 text-purple-600 rounded-full text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}