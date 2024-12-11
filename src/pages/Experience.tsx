import React from 'react';
import { motion } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Mighty Coders",
      title: "Intern",
      date: "Mar 2023 - May 2023",
      location: "Remote",
      points: [
        "Tutored 20 students from underrepresented backgrounds",
        "Wrote detailed progress reports",
        "Taught Python, C#, and JavaScript"
      ]
    },
    {
      company: "AMD",
      title: "Contractor Consultant",
      date: "Fall 2023",
      location: "Berkeley, California",
      points: [
        "Consulted for AMD to support the legal team",
        "Developed frontend using React",
        "Built backend infrastructure using Microsoft Azure and APIs"
      ]
    }
  ];

  return (
    <div className="container py-24">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"
      >
        Professional Experience
      </motion.h2>

      <ExperienceTimeline experiences={experiences} />
    </div>
  );
};

export default Experience;
