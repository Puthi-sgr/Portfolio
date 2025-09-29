import { ExternalLink } from "lucide-react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
    title: "Dynamic administrator dashboard",
    description:
      "admin dash board with the incorporation of dynamic data and leverage localized system and diverse color to enhance user's experience",
    image: project1,
    tags: ["React", "MUI"],
    xp: 50,
  },
  {
    title: "300Riel 300Derm blog website",
    description:
      "Informational website utilizing facebook API to link up with the blog page",
    image: project2,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    xp: 35,
    link: "https://300riel300derm.com/",
  },
  {
    title: "Animated engagement invitation",
    description:
      "Immersive invitation experience with looping GIF backdrop that highlights the couple's story and event details.",
    image: project3,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    xp: 40,
    link: "https://manithpichta.online/",
  },
  {
    title: "Banh Jok Delivery",
    description:
      "End-to-end food ordering experience featuring animated menu highlights, live order tracking, and an irresistible street-food brand story.",
    image: project4,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    xp: 45,
    link: "https://puthi-sgr.github.io/Banhjok/",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 z-10 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                +{project.xp} XP
              </div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 bg-white/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-sm font-semibold rounded-lg shadow-lg transition"
                      >
                        Visit site
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
