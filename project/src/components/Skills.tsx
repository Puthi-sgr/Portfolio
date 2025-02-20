import React from "react";
import { Code, Palette, Database, Globe } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Code,
    items: ["React", "TypeScript", "Tailwind CSS", "MUI"],
    level: 4,
  },
  {
    category: "Design",
    icon: Palette,
    items: ["UI/UX Design", "Figma", "Canva"],
    level: 3,
  },
  {
    category: "Backend Development",
    icon: Database,
    items: ["Node.js", "MongoDB", "REST APIs"],
    level: 3,
  },
  {
    category: "Other Skills",
    icon: Globe,
    items: ["Git", "Firebase"],
    level: 2,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" />
                    <h3 className="text-xl font-semibold dark:text-white">
                      {skill.category}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                    Lvl {skill.level}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                    style={{ width: `${skill.level * 25}%` }}
                  />
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
