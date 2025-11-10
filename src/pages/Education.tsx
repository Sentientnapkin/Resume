import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaBook, FaUsers } from 'react-icons/fa';

const Education: React.FC = () => {
  const courses = [
    {
      course: "Efficient Algorithms & Intractable Problems",
      code: "CS 170",
      link: "https://cs170.org/"
    },
    {
      course: "Data Structures",
      code: "CS 61B",
      link: "https://sp25.datastructur.es/"
    },
    {
      course: "Machine Structures",
      code: "CS 61C",
      link: "https://cs61c.org/"
    },
    {
      course: "Discrete Math & Probability",
      code: "CS 70",
      link: "https://www.eecs70.org/"
    },
    {
      course: "Signals & Systems",
      code: "EECS 120",
      link: "https://www2.eecs.berkeley.edu/Courses/EECS120/"
    },
    {
      course: "Designing Information Devices & Systems I",
      code: "EECS 16A",
      link: "https://eecs16a.org/"
    },
    {
      course: "Circuits & Devices",
      code: "EECS 16B",
      link: "https://eecs16b.org/"
    },
    {
      course: "Structure & Interpretation of Computer Programs",
      code: "CS 61A",
      link: "https://cs61a.org/"
    }
  ];

  const upcomingCourses = [
    {
      course: "Operating Systems & System Programming",
      code: "CS 162"
    },
    {
      course: "Computer Security",
      code: "CS 161"
    },
    {
      course: "Networks: Models, Processes & Algorithms",
      code: "CS 168"
    }
  ];

  const clubs = [
    {
      name: "UpSync Consulting",
      role: "Vice President of Projects",
      image: "./UpsyncLogo.png",
      link: "https://www.upsyncberkeley.com/"
    }
  ]

  return (
    <div className="container py-24">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-12 font-mono text-cyber-green"
      >
        <span className="text-gray-500">{'>'}</span> education.get_info()
      </motion.h2>

      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="cyber-border rounded-xl p-8 mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div>
            <h3 className="text-3xl font-bold mb-2 text-white">University of California, Berkeley</h3>
            <p className="text-cyber-cyan font-mono text-lg mb-2">B.S. Electrical Engineering & Computer Science</p>
            <p className="text-gray-400 font-mono text-sm mb-4">Expected Graduation: May 2028</p>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 bg-dark-surface border border-cyber-green/30 rounded px-4 py-2">
                <FaAward className="text-cyber-green" />
                <span className="font-mono text-sm">GPA: <span className="text-cyber-green font-bold">4.00/4.00</span></span>
              </div>
              <div className="flex items-center gap-2 bg-dark-surface border border-cyber-cyan/30 rounded px-4 py-2">
                <FaBook className="text-cyber-cyan" />
                <span className="font-mono text-sm">Units: <span className="text-cyber-cyan font-bold">65.44 / 120</span></span>
              </div>
              <div className="flex items-center gap-2 bg-dark-surface border border-terminal-green/30 rounded px-4 py-2">
                <FaAward className="text-terminal-green" />
                <span className="font-mono text-sm text-terminal-green">Dean's List</span>
              </div>
            </div>
          </div>

          <img src={"./Berkeley.png"} alt="UC Berkeley" className="w-32 h-32 rounded-full mt-6 md:mt-0 border-4 border-cyber-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.3)]"/>
        </div>

        <div className="h-px bg-gradient-to-r from-cyber-green via-cyber-cyan to-transparent my-8"></div>

        <h4 className="text-xl font-semibold mb-6 font-mono text-cyber-green flex items-center gap-2">
          <span className="text-gray-500">{'>'}</span> completed_coursework
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <motion.a
              key={index}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 p-3 bg-dark-surface border border-cyber-green/20 rounded hover:border-cyber-green/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] transition-all circuit-hover group"
            >
              <div className="w-2 h-2 rounded-full bg-cyber-green group-hover:shadow-[0_0_5px_rgba(16,185,129,0.8)]"/>
              <div className="flex-1">
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">{course.course}</span>
                <span className="text-cyber-cyan font-mono text-xs ml-2">({course.code})</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-cyber-cyan via-terminal-green to-transparent my-8"></div>

        <h4 className="text-xl font-semibold mb-6 font-mono text-cyber-cyan flex items-center gap-2">
          <span className="text-gray-500">{'>'}</span> upcoming_coursework
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 p-3 bg-dark-surface border border-cyber-cyan/20 rounded hover:border-cyber-cyan/50 transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"/>
              <div className="flex-1">
                <span className="text-gray-300 text-sm">{course.course}</span>
                <span className="text-cyber-orange font-mono text-xs ml-2">({course.code})</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-terminal-green via-cyber-orange to-transparent my-8"></div>

        <h4 className="text-xl font-semibold mb-6 font-mono text-terminal-green flex items-center gap-2">
          <FaUsers className="text-terminal-green" />
          <span className="text-gray-500">{'>'}</span> campus_involvement
        </h4>
        <div className="grid grid-cols-1 gap-4">
          {clubs.map((club, index) => (
            <motion.a
              key={index}
              href={club.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 p-4 bg-dark-surface border border-terminal-green/30 rounded-lg hover:border-terminal-green hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all circuit-hover group"
            >
              <img src={club.image} alt={club.name} className="w-16 h-16 rounded-full border-2 border-terminal-green/30 group-hover:border-terminal-green transition-all"/>
              <div>
                <span className="text-lg font-semibold text-white group-hover:text-terminal-green transition-colors">{club.name}</span>
                <p className="text-cyber-cyan font-mono text-sm">{club.role}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
