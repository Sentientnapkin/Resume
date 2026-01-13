import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-bg-primary text-text-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-8 md:px-16 py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-text-primary mb-4">
                Sebastian Vargas
              </h1>

              <p className="text-2xl text-text-secondary font-light">
                EECS @ UC Berkeley
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 max-w-2xl"
            >
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/projects">
                  <button
                    className="px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all"
                  >
                    View Work
                  </button>
                </Link>
                <Link to="/experience">
                  <button
                    className="px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all"
                  >
                    Experience
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image with subtle corner brackets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Subtle robotics-inspired corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l border-t border-accent opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-accent opacity-30"></div>

              {/* Main image */}
              <div className="relative w-full h-full">
                <img
                  src="./Headshot.jpg"
                  alt="Sebastian Vargas"
                  className="relative w-full h-full object-cover rounded-lg border border-border"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-mono text-accent mb-12">Technical Skills</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl">
            {[
              'Python', 'Java', 'TypeScript', 'C/C++', 'SQL', 'RISC-V',
              'React', 'Node.js', 'Flask', 'Django', 'TensorFlow', 'PyTorch',
              'AWS', 'Azure', 'Firebase', 'PostgreSQL', 'MongoDB', 'GCP'
            ].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                className="flex items-center gap-3 group"
              >
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-text-secondary font-mono group-hover:text-accent transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-mono text-accent mb-12"
          >
            Current Focus
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="border border-border rounded-lg p-6 hover:border-accent transition-all"
            >
              <h3 className="text-lg font-semibold text-accent mb-3">Algorithmic Security</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                How do you design authentication that scales? Exploring the algorithms behind OAuth, RBAC, and distributed security systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="border border-border rounded-lg p-6 hover:border-accent transition-all"
            >
              <h3 className="text-lg font-semibold text-accent mb-3">Autonomous Systems</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Computer vision, path planning, and real-time control. Building robots that make decisions with limited compute and uncertain environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border border-border rounded-lg p-6 hover:border-accent transition-all group"
            >
              <h3 className="text-lg font-semibold text-accent mb-3">Low-level Optimization</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                From assembly to architecture. How close to the metal can we get while maintaining elegance? <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Also: Go Warriors 🏀</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
