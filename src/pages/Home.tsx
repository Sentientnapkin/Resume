import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control animation based on scroll position
  useEffect(() => {
    controls.start({
      opacity: Math.max(1 - scrollY / 400, 0),
      transition: { duration: 0.5 }
    });
  }, [scrollY, controls]);


  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          animate={controls}
          className="sticky top-0 justify-center flex flex-col items-center space-y-6"
        >
          <img
            src="../assets/Headshot.jpg"
            alt="Sebastian Vargas"
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-400"
          />
          <h1
            className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text mb-4">
            Sebastian Vargas
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            EECS Student @ UC Berkeley
          </p>
        </motion.div>

        <div className="absolute bottom-10 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
               className="w-6 h-6 mx-auto text-blue-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
          <span className="block mt-2 text-sm text-gray-300">Scroll Down</span>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 px-8 md:px-16 bg-gradient-to-b from-slate-800 to-slate-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 items-center">
          <div className="flex justify-center md:justify-start mb-8 md:mb-0">
            <img
              src="./Laughing Headshot.jpg" // Replace with your image path
              alt="Sebastian Vargas"
              className="w-72 h-72 object-cover drop-shadow-lg rounded-full mx-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate Electrical Engineering and Computer Science student at UC Berkeley with a strong
              background in full-stack development and entrepreneurship.
              My experiences include building scalable applications, leading technical teams, and mentoring others in
              coding.
              I thrive on solving complex problems, creating impactful solutions, and contributing to innovative
              projects that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Interests Section */}
      <section id="skills" className="py-20 px-6 md:px-12 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-8">Skills & Interests</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Technical Skills</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-4">
              {[
                'Typescript',
                'Python',
                'React/React Native',
                'Java',
                'SQL',
                'C++',
                'Firebase',
                'Azure',
              ].map((skill) => (
                <div key={skill} className="bg-slate-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Interests</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-4">
              {['Tech Entrepreneurship', 'Server-Side Development', 'Basketball', 'Football'].map(
                (interest) => (
                  <div key={interest} className="bg-slate-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    {interest}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
);
};

export default Home;
