import {
  Code,
  Server,
  Wrench,
  MessageCircle,
  Briefcase,
  Sparkles,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";

const skills = [
  {
    category: "Frontend Engineering",
    icon: Code,
    items: ["React.js", "TypeScript", "Tailwind CSS", "CSS frameworks", "MUI"],
    level: 4,
  },
  {
    category: "Backend & APIs",
    icon: Server,
    items: ["Node.js", "PHP / Laravel", "PostgreSQL", "JWT / OAuth 2", "Apache"],
    level: 3,
  },
  {
    category: "DevOps & Tooling",
    icon: Wrench,
    items: ["Docker", "GitHub Actions", "CI/CD pipelines", "Ubuntu", "Git"],
    level: 3,
  },
  {
    category: "Languages & Communication",
    icon: MessageCircle,
    items: [
      "Khmer – Native",
      "English – Advanced",
      "Verbal & written communication",
      "Adaptable to new tools",
      "Hardworking mindset",
    ],
    level: 4,
  },
];

const highlights = [
  {
    title: "Current Roles & Projects",
    icon: Briefcase,
    items: [
      "Program Developer – 300Derm (Jul 2025 – Present)",
      "Program Developer – Jomney Food Delivery Software",
      "Project Officer Intern – Angkor Social Innovation Park (Dec 2024 – Feb 2025)",
    ],
  },
  {
    title: "Impact & Leadership",
    icon: Sparkles,
    items: [
      "Led a 300-tree mangrove restoration in Kampot with NGOs, officials, and 15 volunteers",
      "Raised eco awareness and secured partnerships, funding, and logistics via 300riel300derm.com",
      "Proposed and delivered a four-part 'Youth & Innovation' webinar with five guest experts",
    ],
  },
  {
    title: "Delivery & Engineering Strengths",
    icon: ClipboardCheck,
    items: [
      "Integrated one-tap checkout and live dashboards through a third-party payment gateway",
      "Built, optimized, and debugged full-stack web apps, restoring uptime with log-based fixes",
      "Ran CI/CD builds end-to-end while outlining scopes, budgets, and timelines for stakeholders",
    ],
  },
  {
    title: "Education & Reference",
    icon: GraduationCap,
    items: [
      "B.A. in Computer Science – Royal University of Phnom Penh",
      "B.A. in Professional Communication – Institute of Foreign Languages (Evening shift)",
      "Reference: Mrs. Mao Socheat – Project Manager at Nokor Web | +855 12 777 467",
    ],
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold dark:text-white">
                    {highlight.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {highlight.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mr-3"></span>
                      <span>{item}</span>
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
