import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import { FaRobot, FaShieldAlt, FaLock, FaMicrochip } from 'react-icons/fa';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const controls = useAnimation();
  const fullText = 'Sebastian Vargas';

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Control animation based on scroll position
  useEffect(() => {
    controls.start({
      opacity: Math.max(1 - scrollY / 400, 0),
      transition: { duration: 0.5 }
    });
  }, [scrollY, controls]);


  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-dark-bg text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center scanline">
        <motion.div
          animate={controls}
          className="sticky top-0 justify-center flex flex-col items-center space-y-6"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyber-green/20 blur-xl animate-glow"></div>
            <img
              src="./Headshot.jpg"
              alt="Sebastian Vargas"
              className="relative w-60 h-60 rounded-full object-cover border-4 border-cyber-green shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            />
          </div>

          <div className="space-y-2">
            <div className="font-mono text-cyber-green text-sm mb-2">
              <span className="text-gray-500">{'>'}</span> initializing_system...
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyber-green via-cyber-cyan to-terminal-green text-transparent bg-clip-text mb-4 glow-text">
              {displayText}<span className={displayText === fullText ? 'terminal-cursor' : ''}></span>
            </h1>
            <div className="font-mono text-cyber-cyan text-sm">
              <span className="text-gray-500">{'>'}</span> role: <span className="text-white">EECS @ UC Berkeley</span>
            </div>
            <div className="font-mono text-cyber-cyan text-sm">
              <span className="text-gray-500">{'>'}</span> gpa: <span className="text-terminal-green font-bold">4.00/4.00</span>
            </div>
            <div className="font-mono text-cyber-cyan text-sm">
              <span className="text-gray-500">{'>'}</span> focus: <span className="text-cyber-orange">Robotics | Computer Security</span>
            </div>
          </div>

          <div className="flex gap-6 mt-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-cyber-green/20 rounded-lg blur group-hover:bg-cyber-green/30 transition"></div>
              <div className="relative bg-card-bg border border-cyber-green/50 rounded-lg p-4 hover:border-cyber-green transition flex items-center gap-3">
                <FaRobot className="text-cyber-green text-2xl" />
                <span className="text-sm font-mono">Robotics</span>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-cyber-cyan/20 rounded-lg blur group-hover:bg-cyber-cyan/30 transition"></div>
              <div className="relative bg-card-bg border border-cyber-cyan/50 rounded-lg p-4 hover:border-cyber-cyan transition flex items-center gap-3">
                <FaShieldAlt className="text-cyber-cyan text-2xl" />
                <span className="text-sm font-mono">Security</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
               className="w-6 h-6 mx-auto text-cyber-green">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
          <span className="block mt-2 text-sm text-gray-400 font-mono">scroll_down</span>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 px-8 md:px-16 bg-hex-pattern">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold mb-12 font-mono text-cyber-green"
          >
            <span className="text-gray-500">{'>'}</span> about_me.init()
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex justify-center md:justify-start mb-8 md:mb-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-cyber-cyan/20 rounded-full blur-xl"></div>
                <img
                  src="./Laughing Headshot.jpg"
                  alt="Sebastian Vargas"
                  className="relative w-72 h-72 object-cover drop-shadow-lg rounded-full border-4 border-cyber-cyan/50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="cyber-border rounded-lg p-8"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm a passionate EECS student at UC Berkeley with experience across the full technology stack—from hardware to cloud infrastructure. With a perfect 4.0 GPA, I've tackled everything from building RISC-V CPUs to developing enterprise AI solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                My journey spans industry giants like <span className="text-cyber-green font-semibold">Google</span>, <span className="text-cyber-cyan font-semibold">NextEra Energy</span>, <span className="text-cyber-orange font-semibold">AMD</span>, and <span className="text-terminal-green font-semibold">Lenovo</span>, where I've built systems processing 10,000+ records, architected RAG AI solutions, and streamlined legal discovery processes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm driven by two passions: <span className="text-cyber-orange font-semibold">robotics</span> and <span className="text-cyber-cyan font-semibold">computer security</span>. Whether it's building competition robots with computer vision or implementing role-based access control systems, I love creating technology that's both powerful and secure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Interests Section */}
      <section id="skills" className="py-20 px-6 md:px-12 bg-circuit-pattern">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold mb-12 font-mono text-cyber-green"
          >
            <span className="text-gray-500">{'>'}</span> technical_arsenal.ls()
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="cyber-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaMicrochip className="text-cyber-green text-2xl" />
                <h3 className="text-xl font-semibold font-mono text-cyber-green">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  'Python', 'Java', 'JavaScript/TypeScript', 'C/C++',
                  'SQL', 'RISC-V', 'Scheme', 'HTML/CSS'
                ].map((skill) => (
                  <div key={skill} className="circuit-hover bg-dark-surface border border-cyber-green/30 px-4 py-2 rounded hover:border-cyber-green hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] transition font-mono text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks & Libraries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="cyber-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaRobot className="text-cyber-cyan text-2xl" />
                <h3 className="text-xl font-semibold font-mono text-cyber-cyan">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  'React.js', 'React Native', 'Node.js', 'Express.js',
                  'Flask', 'Django', 'TensorFlow', 'PyTorch'
                ].map((skill) => (
                  <div key={skill} className="circuit-hover bg-dark-surface border border-cyber-cyan/30 px-4 py-2 rounded hover:border-cyber-cyan hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition font-mono text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cloud & Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="cyber-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="text-terminal-green text-2xl" />
                <h3 className="text-xl font-semibold font-mono text-terminal-green">Cloud & Databases</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  'AWS', 'Microsoft Azure', 'Firebase',
                  'PostgreSQL', 'MySQL', 'MongoDB'
                ].map((skill) => (
                  <div key={skill} className="circuit-hover bg-dark-surface border border-terminal-green/30 px-4 py-2 rounded hover:border-terminal-green hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition font-mono text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="cyber-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaLock className="text-cyber-orange text-2xl" />
                <h3 className="text-xl font-semibold font-mono text-cyber-orange">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  'Computer Security', 'Robotics', 'AI/ML',
                  'System Architecture', 'Basketball', 'Football'
                ].map((interest) => (
                  <div key={interest} className="circuit-hover bg-dark-surface border border-cyber-orange/30 px-4 py-2 rounded hover:border-cyber-orange hover:shadow-[0_0_10px_rgba(245,158,11,0.3)] transition font-mono text-sm">
                    {interest}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
);
};

export default Home;
