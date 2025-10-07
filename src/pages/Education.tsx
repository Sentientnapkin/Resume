import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const courses = [
    {
      course: "Structure and Interpretation of Computer Programs",
      link: "https://cs61a.org/"
    },
    {
      course: "Designing Information Devices and Systems",
      link: "https://eecs16a.org/"
    },
    {
      course: "Introduction to Circuits & Devices",
      link: "https://eecs16b.org/#exams"
    },
    {
      course: "Data Structures",
      link: "https://sp25.datastructur.es/"
    },
    {
      course: "Discrete Mathematics and Probability Theory",
      link: "https://www.eecs70.org/"
    },
    {
      course: "Great Ideas in Computer Architecture (Machine Structures)",
      link: "https://cs61c.org/"
    },
    {
      course: "Efficient Algorithms and Intractable Problems",
      link: "https://cs170.org/"
    },
    {
      course: "Microelectronic Devices and Circuits",
      link: "https://www2.eecs.berkeley.edu/Courses/EE105/"
    }
  ];

  const clubs = [
    {
      name: "UpSync (Project Manager & Vice President of Projects)",
      image: "./UpsyncLogo.png",
      link: "https://www.upsyncberkeley.com/"
    }
  ]

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
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="rounded-xl bg-surface/50 backdrop-blur-sm border border-white/10 p-8 mb-8"
      >
        <div className="flex">
          <div className="mr-auto">
            <h3 className="text-3xl font-bold mb-2">University of California, Berkeley</h3>
            <p className="text-primary mb-2">B.S. Electrical Engineering and Computer Science</p>
            <p className="text-primary mb-6">Graduating 2028</p>
          </div>

          <img src={"./Berkeley.png"} alt="UC Berkeley" className="w-24 h-24 rounded-full mb-4 ml-auto mr-20"/>
        </div>


        <h4 className="text-lg font-semibold mb-4">Relevant Coursework</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-primary"/>
              <a href={course.link}>{course.course}</a>
            </div>
          ))}
        </div>

        <h4 className="text-lg font-semibold mb-4 mt-8">Clubs & Involvements</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clubs.map((club) => (
            <div
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-primary"/>
              <a className="flex items-center" href={club.link}>
                <img src={club.image} alt={club.name} className="w-8 h-8 rounded-full mr-4"/>
                <span className="text-lg">{club.name}</span>
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
