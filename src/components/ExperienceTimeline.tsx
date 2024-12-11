import React from "react";
import { motion } from "motion/react";

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
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 border-l border-white/10"
        >
          <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-blue-500 -translate-x-[7px]" />
          <h3 className="text-2xl font-bold">{exp.company}</h3>
          <p className="text-blue-400 mb-2">{exp.title}</p>
          <p className="text-text-secondary mb-4">{exp.date}</p>
          <ul className="space-y-2">
            {exp.points.map((point, i) => (
              <li key={i} className="text-gray-300">• {point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};


export default ExperienceTimeline
