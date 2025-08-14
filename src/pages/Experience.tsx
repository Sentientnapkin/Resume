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
        "Launched a start-up called Wear that generates outfits and promotes up-cycling among users",
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
      date: "Fall 2024",
      location: "Berkeley, California",
      points: [
        "Consulted in a team for AMD to support the legal team by streamlining access to company data for all legal processes",
        "Developed frontend using React",
        "Built backend infrastructure using Microsoft Azure and APIs"
      ]
    },
    {
      company: "Lenovo",
      title: "Contractor Consultant",
      date: "Spring 2025",
      location: "Berkeley, California",
      points: [
        "Collaborated with a cross-functional team on a Lenovo case study evaluating AI integration in software development",
        "Developed a lecture companion application implementing both traditional and AI-assisted workflows, demonstrating optimal productivity through a balanced hybrid approach"
      ]
    },
    {
      company: "Google",
      title: "Associate Software Developer Intern",
      date: "Summer 2025",
      location: "New York, New York",
      points: [
        "Developed change history functionality for Google's internal performance management and promotion system, enabling users to view and revert modifications to quarterly expectations and tasks with full audit trail capabilities",
        "Owned the full lifecycle with end-to-end implementation, including building APIs to pull change history from google internal datastores and developing reusable front-end components to display the information to users",
        "Implemented comprehensive testing suite including unit, integration, accessibility, load, and bug testing",
        "Established role based access control to restrict access to authenticated and authorized users to safeguard sensitive employee information regarding their performance at Google"
      ]
    },
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
