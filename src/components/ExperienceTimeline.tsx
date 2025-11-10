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
          className="relative pl-12 border-l-2 border-cyber-green/30 hover:border-cyber-green/60 transition-all duration-300"
        >
          {/* Timeline node */}
          <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-cyber-green shadow-[0_0_10px_rgba(16,185,129,0.5)] -translate-x-[11px] animate-pulse" />

          {/* Experience card */}
          <div className="cyber-border rounded-lg p-6 mb-4 circuit-hover group">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyber-green transition-colors">{exp.company}</h3>
                <p className="text-cyber-cyan font-mono text-sm mt-1">{exp.title}</p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <p className="text-gray-400 font-mono text-sm">{exp.date}</p>
                <p className="text-gray-500 font-mono text-xs flex items-center gap-1 mt-1">
                  <FaMapMarkerAlt className="text-cyber-orange" />
                  {exp.location}
                </p>
              </div>
            </div>

            <ul className="space-y-2 mt-4">
              {exp.points.map((point, i) => (
                <li key={i} className="text-gray-300 text-sm leading-relaxed flex gap-3">
                  <span className="text-cyber-green font-mono mt-1">▹</span>
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
