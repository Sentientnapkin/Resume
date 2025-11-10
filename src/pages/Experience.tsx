import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const experiences = [
    {
      company: "Google",
      title: "Software Developer Intern",
      date: "Summer 2025",
      location: "New York",
      color: "cyber-green",
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
      color: "cyber-cyan",
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
      color: "terminal-green",
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
      color: "cyber-orange",
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
      color: "cyber-cyan",
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
      color: "terminal-green",
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyber-green">Where I've</span>
            <br />
            <span className="text-gray-400">been building</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm">
            $ ls -la ~/experience/ <span className="text-gray-700">// 8 companies, hardware to cloud</span>
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <motion.div
                onClick={() => setSelectedExp(selectedExp === index ? null : index)}
                className={`
                  bg-card-bg border border-${exp.color}/30 rounded-lg p-6 cursor-pointer
                  hover:border-${exp.color}/60 transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]
                  ${selectedExp === index ? `border-${exp.color} shadow-[0_0_30px_rgba(16,185,129,0.2)]` : ''}
                `}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold text-${exp.color} mb-1`}>{exp.company}</h3>
                    <p className="text-sm text-gray-400 font-mono">{exp.title}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full bg-${exp.color} animate-pulse`}></div>
                </div>

                <p className="text-sm text-gray-500 font-mono mb-3">{exp.date} • {exp.location}</p>

                <p className="text-gray-300 mb-4">{exp.summary}</p>

                <AnimatePresence>
                  {selectedExp === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 mt-4 pt-4 border-t border-gray-700"
                    >
                      {exp.details.map((detail, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-sm text-gray-400 flex gap-2"
                        >
                          <span className={`text-${exp.color}`}>▹</span>
                          <span>{detail}</span>
                        </motion.p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-xs text-gray-600 font-mono mt-4">
                  {selectedExp === index ? 'Click to collapse' : 'Click for details'}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional experiences */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-16 border-t border-gray-800"
        >
          <h3 className="text-2xl font-mono text-cyber-cyan mb-8">Also...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-surface/50 border border-gray-800 rounded-lg p-6 hover:border-cyber-green/30 transition-all">
              <h4 className="text-lg font-semibold mb-2">Resourcify</h4>
              <p className="text-sm text-gray-500 font-mono mb-3">Lead Developer • 2022-2023</p>
              <p className="text-sm text-gray-400">
                Built React Native app for refugees, collaborating with community centers to identify real needs
              </p>
            </div>
            <div className="bg-dark-surface/50 border border-gray-800 rounded-lg p-6 hover:border-cyber-green/30 transition-all">
              <h4 className="text-lg font-semibold mb-2">Mighty Coders</h4>
              <p className="text-sm text-gray-500 font-mono mb-3">Volunteer Instructor • 2023</p>
              <p className="text-sm text-gray-400">
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
