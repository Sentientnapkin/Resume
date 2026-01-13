import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {

  const allProjects = [
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">Projects</h2>
          <p className="text-text-secondary">From CPUs to AI systems</p>
        </motion.div>

        {/* Unified single-column layout */}
        <div className="max-w-3xl mx-auto space-y-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="border border-border rounded-lg p-6 hover:border-accent transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-1">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-accent font-mono text-sm">{project.subtitle}</p>
                  )}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary hover:text-accent transition"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
              </div>

              <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-border text-text-tertiary rounded text-xs font-mono"
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
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-text-secondary font-mono text-sm mb-4">More on GitHub</p>
          <a
            href="https://github.com/Sentientnapkin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all font-mono text-sm"
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
