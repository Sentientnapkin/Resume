import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const courses = [
    "Structure and Interpretation of Computer Programs",
    "Designing Information Devices and Systems",
    "Introduction to Circuits & Devices",
    "Data Structures",
    "Discrete Mathematics and Probability Theory"
  ];

  return (
    <div className="container py-24">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl bg-surface/50 backdrop-blur-sm border border-white/10 p-8 mb-8"
      >
        <div className="flex">
          <div className="mr-auto">
            <h3 className="text-2xl font-bold mb-2">University of California, Berkeley</h3>
            <p className="text-primary mb-6">B.S. Electrical Engineering and Computer Science</p>
          </div>

          <img src={"./Berkeley.png"} alt="UC Berkeley" className="w-24 h-24 rounded-full mb-4 ml-auto mr-20"/>
        </div>


        <h4 className="text-lg font-semibold mb-4">Relevant Coursework</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, x: -20}}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>{course}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
