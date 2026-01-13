import React from "react";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string[];
  duration: string;
  location?: string;
  github?: string;
  link?: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, duration, github, link, location, description, technologies }) => (
  <div className="border border-border rounded-lg p-6 hover:border-accent transition-all duration-200 group">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm font-mono">
          <span className="text-text-secondary">{duration}</span>
          {location && (
            <>
              <span className="text-text-tertiary">|</span>
              <span className="text-text-secondary">{location}</span>
            </>
          )}
        </div>
      </div>
      <div className="flex gap-3 mt-3 md:mt-0">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all text-sm font-mono"
          >
            <FaGithub />
            <span>Code</span>
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all text-sm font-mono"
          >
            <FaExternalLinkAlt />
            <span>Details</span>
          </a>
        )}
      </div>
    </div>

    <ul className="space-y-2 mb-4">
      {description.map((desc, index) => (
        <li key={index} className="text-text-secondary text-sm leading-relaxed flex gap-3">
          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
          <span>{desc}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 border border-border text-text-secondary rounded text-xs font-mono hover:border-accent hover:text-accent transition-all"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);


export default ProjectCard;
