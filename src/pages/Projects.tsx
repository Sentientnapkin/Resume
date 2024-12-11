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
        "Collaborated with Muslim Community Center to identify key challenges faced by refugees entering the country",
        "Developed a React Native application providing information on housing, schools, and local resources in the Bay Area",
        "Conducted extensive research to ensure accuracy and relevance of information provided"
      ],
      technologies: ["React Native", "TypeScript", "Firebase"]
    },
    {
      title: "Hadrian's Library",
      duration: "Spring 2024",
      location: "Danville, California",
      github: "https://github.com/Sentientnapkin/note-sharing.git",
      description: [
        "Designed and implemented a school-wide note-sharing platform using React for frontend and Firebase for backend",
        "Integrated user authentication and database writing capabilities to ensure secure and efficient data management"
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
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <ProjectCard key={index} {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
