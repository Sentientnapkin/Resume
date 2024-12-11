import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Resourcify",
      duration: "Sep 2022 - May 2023",
      location: "Pleasanton, California",
      github: "https://github.com/ResourcifyORG/ResourcifyApp.git",
      description: [
        "Collaborated with Muslim Community Center for refugee support",
        "Developed React Native application for housing and resource information",
        "Conducted extensive research for information accuracy"
      ],
      technologies: ["React Native", "TypeScript", "Firebase"]
    },
    {
      title: "Hadrian's Library",
      duration: "Spring 2024",
      location: "Danville, California",
      github: "https://github.com/Sentientnapkin/note-sharing.git",
      description: [
        "Designed school-wide note-sharing platform",
        "Implemented user authentication and database management"
      ],
      technologies: ["React", "Firebase", "TypeScript"]
    },
    {
      title: "Microevolutionary Processes Simulator",
      duration: "Spring 2023",
      location: "Danville, California",
      github: "https://github.com/Sentientnapkin/MicroevolutionaryProcesses.git",
      description: [
        "Developed a python program that visualizes the processes that lead to microevolution for my school's biology curriculum",
        "Created individual algorithms for each microevolutionary process and built the UI with matplotlib",
        "Made presenting such a complex topic significantly easier for biology teachers since they could present my program"
      ],
      technologies: ["Python", "Matplotlib", "PyGame"]
    }
  ];

  return (
    <div className="container py-24">
      <motion.h2
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
