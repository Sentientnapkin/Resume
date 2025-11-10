import React from 'react';
import { motion } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Google",
      title: "Associate Software Developer Intern",
      date: "May 2025 - Aug 2025",
      location: "New York, New York",
      points: [
        "Developed change history functionality for Google's internal performance management system, processing 10,000+ quarterly performance records and enabling users to view modifications to quarterly expectations and tasks with full audit trail capabilities",
        "Owned the full lifecycle with end-to-end implementation, including building APIs to pull change history from Google internal datastores and developing reusable front-end components reducing development time by 30%",
        "Implemented comprehensive testing suite including unit, integration, accessibility, load, and bug testing",
        "Designed and deployed role-based access control (RBAC) system with OAuth 2.0 authentication, ensuring compliance for sensitive employee performance data across 150,000+ users"
      ]
    },
    {
      company: "NextEra Energy",
      title: "Technical Project Manager, Contract",
      date: "Sep 2025 - Present",
      location: "Juno Beach, Florida",
      points: [
        "Architected \"Renewables RegWatch,\" an enterprise RAG (Retrieval-Augmented Generation) AI solution leveraging AWS Bedrock and Amazon Knowledge Bases to deliver automated regulatory intelligence, reducing manual research time by 75%",
        "Owned end-to-end project lifecycle, from client scoping and system design to the delivery of key project milestones",
        "Managed cross-functional team of 5 engineers developing scalable web scraping infrastructure (Beautiful Soup, Selenium), ETL data pipeline, vector database integration with AWS Knowledge Bases, automated PDF report generation, and email distribution system"
      ]
    },
    {
      company: "AMD",
      title: "Full Stack Engineer, Contract",
      date: "Sep 2024 - Jan 2025",
      location: "Santa Clara, California",
      points: [
        "Streamlined legal discovery processes, reducing data retrieval time by 60% and supporting 50+ litigation cases globally",
        "Developed single-page application (SPA) using React.js, implemented search functionality, filtering, and data visualization dashboards",
        "Built backend infrastructure on Microsoft Azure using App Service, Azure Functions, Azure SQL Database, and Blob Storage"
      ]
    },
    {
      company: "Lenovo",
      title: "Full Stack Engineer, Contract",
      date: "Jan 2025 - May 2025",
      location: "Morrisville, North Carolina",
      points: [
        "Collaborated with a cross-functional team on a Lenovo case study evaluating AI integration in software development",
        "Demonstrated 40% productivity improvement through a balanced hybrid approach leveraging AI for 70% of implementation tasks while maintaining manual oversight for 3 core features across a 12 week development cycle"
      ]
    },
    {
      company: "UpSync Consulting",
      title: "Vice President of Projects",
      date: "Sep 2025 - Present",
      location: "Berkeley, California",
      points: [
        "Led delivery of 5 client projects valued at $100,000 dollars, managing a team of 10 strategy and technical PMs",
        "Engineered automation of sourcing workflows, processing ~10,000 emails weekly with 70% reduction in manual effort",
        "Met with professionals at industry firms to pitch club capabilities in automation, AI, and ML, reviewing 100+ internal proposals to refine project scopes using client feedback and iterative development"
      ]
    },
    {
      company: "Robotics",
      title: "Robot Build Manager",
      date: "Fall 2023 - Spring 2024",
      location: "Danville, California",
      points: [
        "Directed 40 member FRC team, coordinating cross-functional subteams to build a competition robot with omnidirectional drivetrain, CV-enabled precision targeting, automated intake system, and dynamic balancing capabilities"
      ]
    },
    {
      company: "Resourcify",
      title: "Lead Web Developer",
      date: "Sep 2022 - May 2023",
      location: "Pleasanton, California",
      points: [
        "Collaborated with Pleasanton Muslim Community Center to identify key challenges faced by refugees in the Bay Area",
        "Took initiative and developed a React Native application providing information on housing, schools, and local resources"
      ]
    },
    {
      company: "Mighty Coders",
      title: "Volunteer Instructor",
      date: "Mar 2023 - April 2023",
      location: "Bothell, Washington",
      points: [
        "Tutored 20 students from underrepresented backgrounds on coding projects in python, C#, and javascript",
        "Wrote detailed progress reports to track and ensure genuine growth in students' learning outcomes"
      ]
    },
  ];

  return (
    <div className="container py-24">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-12 font-mono text-cyber-green"
      >
        <span className="text-gray-500">{'>'}</span> work_experience.log()
      </motion.h2>

      <ExperienceTimeline experiences={experiences} />
    </div>
  );
};

export default Experience;
