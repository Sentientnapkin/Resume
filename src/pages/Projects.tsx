import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {

  const projects = [
    {
      title: "CS61CPU - RISC-V Processor",
      duration: "Fall 2024",
      link: "https://cs61c.org/fa25/projects/proj3/",
      description: [
        "Built a functional CPU in Logisim capable of executing actual RISC-V instructions from the ground up",
        "Implemented complete instruction set architecture including control logic, ALU operations, memory management, and register file",
        "Developed hardware support for partial loads/stores and debugging capabilities to run real assembly programs",
        "Gained deep understanding of computer architecture, digital logic design, and low-level hardware-software interaction"
      ],
      technologies: ["RISC-V", "Logisim", "Computer Architecture", "Digital Logic", "Hardware Design"]
    },
    {
      title: "CS61Classify - Assembly ML Classifier",
      duration: "Fall 2024",
      link: "https://cs61c.org/fa25/projects/proj2/",
      description: [
        "Wrote RISC-V assembly code to classify handwritten digits using machine learning algorithms",
        "Implemented calling conventions, heap memory management, and file I/O operations entirely in assembly",
        "Developed matrix multiplication and neural network inference routines optimized for RISC-V architecture",
        "Integrated comprehensive testing and memory safety verification using Venus debugger"
      ],
      technologies: ["RISC-V Assembly", "Machine Learning", "Memory Management", "File I/O"]
    },
    {
      title: "Resourcify",
      duration: "Sep 2022 - May 2023",
      location: "Pleasanton, California",
      github: "https://github.com/ResourcifyORG/ResourcifyApp.git",
      description: [
        "Collaborated with Muslim Community Center to identify key challenges faced by refugees entering the country",
        "Developed a React Native application providing information on housing, schools, and local resources in the Bay Area",
        "Conducted extensive research to ensure accuracy and relevance of information provided"
      ],
      technologies: ["React Native", "TypeScript", "Firebase"]
    },
    {
      title: "Hadrian's Library",
      duration: "Spring 2024",
      location: "Danville, California",
      github: "https://github.com/Sentientnapkin/note-sharing.git",
      description: [
        "Designed and implemented a school-wide note-sharing platform using React for frontend and Firebase for backend",
        "Integrated user authentication and database writing capabilities to ensure secure and efficient data management"
      ],
      technologies: ["React", "Firebase", "TypeScript"]
    },
    {
      title: "Microevolutionary Processes Simulator",
      duration: "Spring 2023",
      location: "Danville, California",
      github: "https://github.com/Sentientnapkin/MicroevolutionaryProcesses.git",
      description: [
        "Developed a python program that visualizes the processes that lead to microevolution for my school's biology curriculum",
        "Created individual algorithms for each microevolutionary process and built the UI with matplotlib",
        "Made presenting such a complex topic significantly easier for biology teachers since they could present my program"
      ],
      technologies: ["Python", "Matplotlib", "PyGame"]
    },
    {
      title: "Data Structures and Algorithms",
      duration: "Sep 2022 - June 2023",
      location: "Danville, California",
      github: "https://github.com/Sentientnapkin/DataStructuresAndAlgorithms.git",
      description: [
        "Created implementations of various data structures and algorithms in Java",
        "Example data structures include linked lists, stacks, queues, and trees",
        "Example algorithms include sorting, searching, and graph traversal"
      ],
      technologies: ["Java", "Data Structures", "Algorithms"]
    },
    {
      title: "NFL Fantasy Predictor",
      duration: "Summer 2024",
      location: "Pleasanton, California",
      github: "https://github.com/Sentientnapkin/NFL_Model.git",
      description: [
        "Created a machine learning model to predict fantasy football scores for NFL players",
        "Utilized player and team statistics to train the model",
      ],
      technologies: ["Python", "Matplotlib", "scikit-learn"]
    }
  ];

  return (
    <div className="container py-24">
      <motion.h2
        initial={{opacity: 0, x: -20}}
        animate={{opacity: 1, x: 0}}
        className="text-4xl font-bold mb-12 font-mono text-cyber-green"
      >
        <span className="text-gray-500">{'>'}</span> projects.list()
      </motion.h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
