import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {

  const featuredProjects = [
    {
      title: "CS61CPU",
      subtitle: "RISC-V Processor from Scratch",
      description: "Built a functional CPU in Logisim that executes real RISC-V instructions. Implemented complete ISA with control logic, ALU, memory management, and register file.",
      link: "https://cs61c.org/fa25/projects/proj3/",
      tags: ["RISC-V", "Digital Logic", "Hardware"]
    },
    {
      title: "RegWatch AI",
      subtitle: "Enterprise RAG System",
      description: "Architecting regulatory intelligence platform with AWS Bedrock. RAG solution reduces manual research by 75% through automated document processing.",
      tags: ["AWS", "RAG", "AI/ML"]
    },
  ];

  const otherProjects = [
    {
      title: "CS61Classify",
      description: "ML classifier in pure RISC-V assembly. Handwritten digit recognition with matrix ops and neural network inference.",
      link: "https://cs61c.org/fa25/projects/proj2/",
      tags: ["Assembly", "ML"]
    },
    {
      title: "Resourcify",
      description: "React Native app helping refugees navigate resources in the Bay Area. Built with community centers.",
      github: "https://github.com/ResourcifyORG/ResourcifyApp.git",
      tags: ["React Native", "Firebase"]
    },
    {
      title: "Hadrian's Library",
      description: "School-wide note-sharing platform with auth and real-time updates.",
      github: "https://github.com/Sentientnapkin/note-sharing.git",
      tags: ["React", "Firebase"]
    },
    {
      title: "Evolution Simulator",
      description: "Visualization tool for microevolutionary processes, built for biology curriculum.",
      github: "https://github.com/Sentientnapkin/MicroevolutionaryProcesses.git",
      tags: ["Python", "Matplotlib"]
    },
    {
      title: "NFL Predictor",
      description: "ML model predicting fantasy football scores using player and team statistics.",
      github: "https://github.com/Sentientnapkin/NFL_Model.git",
      tags: ["Python", "scikit-learn"]
    },
    {
      title: "Data Structures",
      description: "Java implementations of core DS&A: trees, graphs, sorting algorithms.",
      github: "https://github.com/Sentientnapkin/DataStructuresAndAlgorithms.git",
      tags: ["Java", "Algorithms"]
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
          <p className="text-gray-500 font-mono text-sm">$ git log --all --oneline</p>
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

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyber-green hover:text-terminal-green transition-colors font-mono text-sm"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Learn more</span>
                  </a>
                )}
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
                {(project.github || project.link) && (
                  <a
                    href={project.github || project.link}
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
          className="mt-16 text-center"
        >
          <p className="text-gray-500 font-mono text-sm mb-4">More on GitHub</p>
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
