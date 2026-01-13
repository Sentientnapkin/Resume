import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Google",
      title: "Software Developer Intern",
      date: "Summer 2025",
      location: "New York",
      summary: "Built change history systems for performance management",
      details: [
        "Developed change history functionality processing 10,000+ quarterly records",
        "Built APIs and reusable front-end components reducing dev time by 30%",
        "Implemented role-based access control for 150,000+ users"
      ]
    },
    {
      company: "NextEra Energy",
      title: "Technical PM | Contract",
      date: "Sep 2025 - Present",
      location: "Remote",
      summary: "Architecting enterprise AI for regulatory intelligence",
      details: [
        "Built RAG AI solution with AWS Bedrock reducing research time by 75%",
        "Led team of 5 engineers across web scraping, ETL, and vector databases",
        "Owned full project lifecycle from client scoping to delivery"
      ]
    },
    {
      company: "AMD",
      title: "Full Stack Engineer | Contract",
      date: "Fall 2024",
      location: "Santa Clara",
      summary: "Streamlined legal discovery with React and Azure",
      details: [
        "Reduced data retrieval time by 60% for 50+ litigation cases",
        "Built SPA with search, filtering, and visualization dashboards",
        "Architected backend on Azure with Functions and SQL Database"
      ]
    },
    {
      company: "Lenovo",
      title: "Full Stack Engineer | Contract",
      date: "Spring 2025",
      location: "Morrisville",
      summary: "Evaluated AI integration in software development",
      details: [
        "Led cross-functional case study on AI-assisted development",
        "Demonstrated 40% productivity improvement with hybrid approach",
        "Maintained oversight across 3 core features over 12 weeks"
      ]
    },
    {
      company: "UpSync",
      title: "VP of Projects",
      date: "Sep 2025 - Present",
      location: "Berkeley",
      summary: "Leading technical consulting projects",
      details: [
        "Delivered 5 client projects managing 10 technical PMs",
        "Automated sourcing workflows processing 10,000 emails weekly",
        "Pitched AI and automation capabilities to industry firms"
      ]
    },
    {
      company: "FRC Robotics",
      title: "Build Manager",
      date: "2023-2024",
      location: "Danville",
      summary: "Directed 40-member competition robotics team",
      details: [
        "Coordinated cross-functional subteams for robot construction",
        "Implemented CV-enabled precision targeting system",
        "Built omnidirectional drivetrain with dynamic balancing"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">Experience</h2>
          <p className="text-text-secondary">Building across hardware, cloud, and AI</p>
        </motion.div>

        {/* Single-column layout */}
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="border border-border rounded-lg p-6 hover:border-accent transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{exp.company}</h3>
                  <p className="text-accent font-mono text-sm">{exp.title}</p>
                </div>
                <p className="text-text-tertiary text-sm">{exp.date}</p>
              </div>

              <p className="text-text-tertiary font-mono text-xs mb-4">{exp.location}</p>

              <p className="text-text-secondary mb-4">{exp.summary}</p>

              <ul className="space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional experiences */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-16 border-t border-border max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-mono text-accent mb-8">Also...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6 hover:border-accent transition-all">
              <h4 className="text-lg font-semibold text-text-primary mb-2">Resourcify</h4>
              <p className="text-sm text-text-tertiary font-mono mb-3">Lead Developer • 2022-2023</p>
              <p className="text-sm text-text-secondary">
                Built React Native app for refugees, collaborating with community centers to identify real needs
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:border-accent transition-all">
              <h4 className="text-lg font-semibold text-text-primary mb-2">Mighty Coders</h4>
              <p className="text-sm text-text-tertiary font-mono mb-3">Volunteer Instructor • 2023</p>
              <p className="text-sm text-text-secondary">
                Taught coding to 20 students from underrepresented backgrounds in Python, C#, and JavaScript
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
