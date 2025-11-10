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
  <div className="cyber-border rounded-lg p-6 circuit-hover group hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-white group-hover:text-cyber-green transition-colors mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm font-mono">
          <span className="text-gray-400">{duration}</span>
          {location && (
            <>
              <span className="text-gray-600">|</span>
              <span className="text-gray-500">{location}</span>
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
            className="flex items-center gap-2 px-4 py-2 bg-dark-surface border border-cyber-green/30 rounded hover:border-cyber-green hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all text-cyber-green text-sm font-mono"
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
            className="flex items-center gap-2 px-4 py-2 bg-dark-surface border border-cyber-cyan/30 rounded hover:border-cyber-cyan hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all text-cyber-cyan text-sm font-mono"
          >
            <FaExternalLinkAlt />
            <span>Details</span>
          </a>
        )}
      </div>
    </div>

    <ul className="space-y-2 mb-4">
      {description.map((desc, index) => (
        <li key={index} className="text-gray-300 text-sm leading-relaxed flex gap-3">
          <span className="text-cyber-cyan font-mono mt-1">▹</span>
          <span>{desc}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-dark-surface border border-terminal-green/30 text-terminal-green rounded font-mono text-xs hover:border-terminal-green hover:shadow-[0_0_5px_rgba(34,197,94,0.3)] transition-all"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);


export default ProjectCard;
