import React from "react";

interface ProjectCardProps {
  title: string;
  description: string[];
  duration: string;
  location: string;
  github: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, duration, github, location, description, technologies }) => (
  <div className="mb-8 bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition">
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <div className="text-gray-400">{duration} | {location}</div>
    <div className="text-blue-400 mb-4">
      <a href={github}>Github Repository</a>
    </div>
    {description.map((desc, index) => (
      <p key={index} className="text-gray-300 mb-2">• {desc}</p>
    ))}
    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech) => (
        <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
  </div>
);


export default ProjectCard;
