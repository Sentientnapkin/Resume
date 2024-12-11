import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Resourcify",
      role: "LEAD WEB DEVELOPER",
      duration: "Sep 2022 - May 2023",
      location: "Pleasanton, California",
      description: [
        "Collaborated with Muslim Community Center for refugee support",
        "Developed React Native application for housing and resource information",
        "Conducted extensive research for information accuracy"
      ],
      technologies: ["React Native", "TypeScript", "Firebase"]
    },
    {
      title: "Hadrian's Library",
      role: "LEAD WEB DEVELOPER",
      duration: "2023",
      location: "Danville, California",
      description: [
        "Designed school-wide note-sharing platform",
        "Implemented user authentication and database management"
      ],
      technologies: ["React", "Firebase", "TypeScript"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
