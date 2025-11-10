import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Sebastian Vargas';

  // Track mouse for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-dark-bg text-white">
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-screen flex items-center px-8 md:px-16 py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                className="font-mono text-cyber-green text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                $ whoami
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-cyber-green via-cyber-cyan to-terminal-green text-transparent bg-clip-text">
                  {displayText}
                </span>
                <span className={displayText === fullText ? 'terminal-cursor' : ''}></span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 font-light">
                EECS @ UC Berkeley
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="space-y-6 max-w-2xl"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I solve problems algorithmically—whether that's building CPUs that execute instructions, designing secure authentication systems, or training robots to perceive their environment.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                From architecting enterprise RAG systems on AWS to course work in intractable problems and signal processing, I think in systems and algorithms. Give me a hard problem at the intersection of security, autonomy, and performance—that's where I thrive.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/projects">
                  <motion.button
                    className="px-6 py-3 bg-transparent border border-cyber-green/50 text-cyber-green rounded hover:bg-cyber-green/10 transition-all font-mono text-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Work
                  </motion.button>
                </Link>
                <Link to="/experience">
                  <motion.button
                    className="px-6 py-3 bg-cyber-green/10 border border-cyber-green/30 text-white rounded hover:border-cyber-green transition-all font-mono text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Experience
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image with creative positioning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-cyber-green/50"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-cyber-cyan/50"></div>

              {/* Main image */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/20 to-cyber-cyan/20 rounded-lg blur-2xl"></div>
                <img
                  src="./Headshot.jpg"
                  alt="Sebastian Vargas"
                  className="relative w-full h-full object-cover rounded-lg border-2 border-cyber-green/30 shadow-[0_0_50px_rgba(16,185,129,0.2)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack - Creative Grid */}
      <section className="py-20 px-8 md:px-16 bg-hex-pattern">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-mono text-cyber-green mb-2">$ cat skills.json</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Python', 'Java', 'TypeScript', 'C/C++', 'SQL', 'RISC-V',
              'React', 'Node.js', 'Flask', 'Django', 'TensorFlow', 'PyTorch',
              'AWS', 'Azure', 'Firebase', 'PostgreSQL', 'MongoDB', 'GCP'
            ].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-dark-surface/50 border border-cyber-green/20 rounded-lg p-4 text-center hover:border-cyber-green/50 transition-all cursor-default group"
              >
                <span className="text-sm font-mono text-gray-300 group-hover:text-cyber-green transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm thinking about - More technical */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-mono text-cyber-cyan mb-12"
          >
            $ current_interests --verbose
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card-bg border border-cyber-green/30 rounded-lg p-6 hover:border-cyber-green/60 transition-all"
            >
              <h3 className="text-lg font-semibold text-cyber-green mb-3">Algorithmic Security</h3>
              <p className="text-sm text-gray-400">
                How do you design authentication that scales? Exploring the algorithms behind OAuth, RBAC, and distributed security systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card-bg border border-cyber-cyan/30 rounded-lg p-6 hover:border-cyber-cyan/60 transition-all"
            >
              <h3 className="text-lg font-semibold text-cyber-cyan mb-3">Autonomous Systems</h3>
              <p className="text-sm text-gray-400">
                Computer vision, path planning, and real-time control. Building robots that make decisions with limited compute and uncertain environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card-bg border border-terminal-green/30 rounded-lg p-6 hover:border-terminal-green/60 transition-all group"
            >
              <h3 className="text-lg font-semibold text-terminal-green mb-3">Low-level Optimization</h3>
              <p className="text-sm text-gray-400">
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
