import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const journey = [
    { course: "CS 170", name: "Algorithms & Complexity", link: "https://cs170.org/" },
    { course: "CS 61C", name: "Machine Structures", link: "https://cs61c.org/" },
    { course: "CS 61B", name: "Data Structures", link: "https://sp25.datastructur.es/" },
    { course: "CS 70", name: "Discrete Math", link: "https://www.eecs70.org/" },
    { course: "EECS 120", name: "Signals & Systems", link: "https://www2.eecs.berkeley.edu/Courses/EECS120/" },
    { course: "EECS 16A/B", name: "Circuits & Devices", link: "https://eecs16a.org/" },
    { course: "CS 61A", name: "Structure & Interpretation", link: "https://cs61a.org/" }
  ];

  const exploring = [
    "CS 162 • Operating Systems",
    "CS 161 • Computer Security",
    "CS 168 • Networks"
  ];

  return (
    <div className="min-h-screen py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Minimalist header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-6 mb-8">
            <img
              src="./Berkeley.png"
              alt="UC Berkeley"
              className="w-20 h-20 rounded-lg opacity-80"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                UC Berkeley
              </h2>
              <p className="text-gray-400 font-mono text-sm">
                Electrical Engineering & Computer Science • '28
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            Navigating the intersection of hardware and software, with a curiosity for how systems work at every level.
          </p>
        </motion.div>

        {/* Learning Journey - Minimal list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-6">
            What I've been learning
          </h3>

          <div className="space-y-2">
            {journey.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="block group"
              >
                <div className="flex items-baseline gap-4 py-2 px-4 rounded hover:bg-dark-surface/50 transition-all">
                  <span className="font-mono text-sm text-cyber-green min-w-[80px]">
                    {item.course}
                  </span>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.name}
                  </span>
                  <span className="ml-auto text-gray-700 group-hover:text-cyber-green transition-colors">
                    →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-6">
            What's next
          </h3>

          <div className="space-y-2">
            {exploring.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.05 }}
                className="py-2 px-4 rounded bg-dark-surface/30"
              >
                <span className="text-gray-400 font-mono text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Involvement - Subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-6">
            Beyond classes
          </h3>

          <a
            href="https://www.upsyncberkeley.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-dark-surface/30 hover:bg-dark-surface/50 transition-all border border-transparent hover:border-cyber-green/20 group"
          >
            <img
              src="./UpsyncLogo.png"
              alt="UpSync"
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <p className="font-semibold text-white group-hover:text-cyber-green transition-colors">
                UpSync Consulting
              </p>
              <p className="text-sm text-gray-500 font-mono">
                VP of Projects • Leading technical consulting
              </p>
            </div>
            <span className="ml-auto text-gray-700 group-hover:text-cyber-green transition-colors">
              ↗
            </span>
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Education;
