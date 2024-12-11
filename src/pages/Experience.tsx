import React from 'react';
import { motion } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "LaunchX",
      title: "Youth Scholar",
      date: "Summer 2023",
      location: "Ann Arbor, Michigan",
      points: [
        "Accepted to this highly competitive intensive four-week summer residential entrepreneurship program",
        "Launched a start-up called wear that generates outfits and promotes upcycling for users",
        "Conducted market research, made balance sheets, prototyped, built mobile application in React Native that uses AI, managed backend, and trained own image classification model",
        "Pitched to a panel of successful entrepreneurs showcasing our business model and market analysis"
      ]
    },
    {
      company: "Mighty Coders",
      title: "Intern",
      date: "Mar 2023 - May 2023",
      location: "Remote",
      points: [
        "Tutored 20 students from underrepresented backgrounds",
        "Wrote detailed progress reports to track and ensure genuine growth in students' learning outcomes",
        "Taught Python, C#, and JavaScript"
      ]
    },
    {
      company: "AMD",
      title: "Contractor Consultant",
      date: "Fall 2023",
      location: "Berkeley, California",
      points: [
        "Consulted in a team for AMD to support the legal team by streamlining access to company data for all legal processes",
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
        Experience
      </motion.h2>

      <ExperienceTimeline experiences={experiences} />
    </div>
  );
};

export default Experience;
