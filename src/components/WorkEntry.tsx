import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TypeBadge from './TypeBadge';

interface WorkEntryProps {
  title: string;
  type: string;
  date: string;
  location?: string;
  description: string;
  impact?: string[];
  details?: string[];
  tags: string[];
  links?: {
    github?: string;
    live?: string;
  };
  index?: number;
}

const WorkEntry: React.FC<WorkEntryProps> = ({
  title,
  type,
  date,
  location,
  description,
  impact,
  details,
  tags,
  links,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      className="border border-border rounded-lg p-6 hover:border-accent transition-all"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-text-primary mb-2">{title}</h3>
          <TypeBadge type={type} />

          <div className="flex flex-wrap gap-3 mt-2 text-sm text-text-secondary font-mono">
            <span>{date}</span>
            {location && (
              <>
                <span>•</span>
                <span>{location}</span>
              </>
            )}
          </div>
        </div>

        {/* Links */}
        {links && (links.github || links.live) && (
          <div className="flex gap-3 ml-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-accent transition"
                aria-label="GitHub repository"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-accent transition"
                aria-label="Live demo"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-text-secondary mb-4 leading-relaxed">{description}</p>

      {/* Impact/Details with node bullets */}
      {(impact || details) && (
        <ul className="mb-4 space-y-2">
          {impact?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-text-secondary">
              <span className="text-accent mt-1.5">◦</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
          {details?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-text-secondary">
              <span className="text-accent mt-1.5">◦</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 border border-border text-text-tertiary rounded text-xs font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkEntry;
