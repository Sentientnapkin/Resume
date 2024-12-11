import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container">
        <motion.div className={"pb-16"}>
          <img
            src="./Headshot.jpg"
            alt="Sebastian Vargas"
            className="w-60 h-60 rounded-full mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text pb-6">
            Sebastian Vargas
          </h1>
          <p className="text-2xl text-text-secondary mb-8">
            EECS Student at UC Berkeley
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {['Full-Stack Development', 'Systems Design', 'Application Development', 'Entrepreneurship', 'Azure', 'Firebase'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-3 rounded-lg bg-surface/50 backdrop-blur-sm border border-white/10"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
