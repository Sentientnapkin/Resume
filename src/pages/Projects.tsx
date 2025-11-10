import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {

  const featuredProjects = [
    {
      title: "CPU Design",
      subtitle: "RISC-V Processor from Scratch",
      description: "Built a functional CPU in Logisim executing real RISC-V instructions. Designed finite state machine for control logic, implemented ALU with 16 operations, and engineered memory hierarchy with partial load/store support. The CPU successfully runs assembly programs including matrix operations and recursive algorithms.",
      tags: ["RISC-V", "Digital Logic", "Hardware", "FSM"]
    },
    {
      title: "RegWatch AI",
      subtitle: "Enterprise RAG System",
      description: "Architecting regulatory intelligence platform with AWS Bedrock that reduces manual research by 75%. Built ETL pipeline processing 10K+ documents, implemented vector search with semantic chunking, and designed automated alerting system. Managing team of 5 engineers across web scraping, database architecture, and ML deployment.",
      tags: ["AWS Bedrock", "RAG", "Vector DB", "Python"]
    },
  ];

  const otherProjects = [
    {
      title: "CS61Classify",
      description: "ML classifier written entirely in RISC-V assembly. Implemented matrix multiplication, ReLU activation, and argmax in assembly for handwritten digit recognition. Optimized calling conventions and register allocation for performance.",
      tags: ["RISC-V Assembly", "ML", "Optimization"]
    },
    {
      title: "FRC Robot CV System",
      description: "Computer vision targeting system for competition robot. Implemented object detection pipeline with OpenCV, PID control for precision aiming, and autonomous path planning algorithms.",
      tags: ["OpenCV", "Python", "Algorithms"]
    },
    {
      title: "Resourcify",
      description: "React Native app helping refugees navigate Bay Area resources. Architected Firebase backend with geolocation queries and real-time updates. Built with Pleasanton Muslim Community Center.",
      github: "https://github.com/ResourcifyORG/ResourcifyApp.git",
      tags: ["React Native", "Firebase", "Geolocation"]
    },
    {
      title: "Hadrian's Library",
      description: "School-wide note-sharing platform with role-based access control. Implemented auth flow, real-time collaborative editing, and efficient Firestore queries.",
      github: "https://github.com/Sentientnapkin/note-sharing.git",
      tags: ["React", "Firebase", "RBAC"]
    },
    {
      title: "Evolution Simulator",
      description: "Interactive visualization of microevolutionary processes using genetic algorithms. Simulates selection, drift, and mutation with real-time graphing.",
      github: "https://github.com/Sentientnapkin/MicroevolutionaryProcesses.git",
      tags: ["Python", "Algorithms", "Simulation"]
    },
    {
      title: "NFL Fantasy Predictor",
      description: "Regression model predicting fantasy scores. Feature engineering with rolling averages, opponent strength metrics, and weather data. Trained on 5 seasons of historical data.",
      github: "https://github.com/Sentientnapkin/NFL_Model.git",
      tags: ["Python", "scikit-learn", "ML"]
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
            <span className="text-cyber-green">Things I've</span>
            <br />
            <span className="text-gray-400">brought to life</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm">
            $ git log --all --oneline <span className="text-gray-700">// CPUs, AI, robots, apps</span>
          </p>
        </motion.div>

        {/* Featured Projects - Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-green to-cyber-cyan rounded-lg opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
              <div className="relative bg-card-bg rounded-lg p-8 h-full border border-cyber-green/30 group-hover:border-cyber-green/60 transition-all">
                <h3 className="text-2xl font-bold mb-2 text-cyber-green">{project.title}</h3>
                <p className="text-sm text-cyber-cyan font-mono mb-4">{project.subtitle}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-surface border border-terminal-green/30 text-terminal-green rounded-full text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-dark-surface/50 border border-gray-800 rounded-lg p-6 hover:border-cyber-green/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-cyber-green transition-colors">{project.title}</h3>
                {(project.github) && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-cyber-green transition-colors"
                  >
                    {project.github ? <FaGithub /> : <FaExternalLinkAlt className="text-sm" />}
                  </a>
                )}
              </div>

              <p className="text-sm text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-dark-bg text-gray-500 rounded text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center group"
        >
          <p className="text-gray-500 font-mono text-sm mb-4">
            More on GitHub <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">• Fins up 🐬</span>
          </p>
          <a
            href="https://github.com/Sentientnapkin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-cyber-green/50 text-cyber-green rounded hover:bg-cyber-green/10 transition-all font-mono text-sm"
          >
            <FaGithub />
            <span>@Sentientnapkin</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
