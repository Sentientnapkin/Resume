import React from "react";
import { motion } from "motion/react";
import { FaMapMarkerAlt } from 'react-icons/fa';

export interface Experience {
  company: string;
  title: string;
  date: string;
  location: string;
  points: string[];
}

export interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-12 border-l border-border hover:border-accent transition-all"
        >
          {/* Timeline node */}
          <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-[7px]" />

          {/* Experience card */}
          <div className="border border-border rounded-lg p-6 mb-4 hover:border-accent transition-all group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">{exp.company}</h3>
                <p className="text-accent font-mono text-sm mt-1">{exp.title}</p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <p className="text-text-secondary font-mono text-sm">{exp.date}</p>
                <p className="text-text-tertiary font-mono text-xs flex items-center gap-1 mt-1">
                  <FaMapMarkerAlt className="text-text-tertiary" />
                  {exp.location}
                </p>
              </div>
            </div>

            <ul className="space-y-2 mt-4">
              {exp.points.map((point, i) => (
                <li key={i} className="text-text-secondary text-sm leading-relaxed flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


export default ExperienceTimeline
