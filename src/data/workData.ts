// Centralized data structure for portfolio content
// This eliminates redundancy and creates single source of truth

export interface WorkEntry {
  id: string;
  title: string;
  type: string;  // e.g., "Enterprise AI • Technical PM"
  date: string;
  location?: string;
  description: string;
  impact?: string[];
  details?: string[];
  tags: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

// FEATURED WORK - Top 6-7 most significant entries
// Merges professional experiences with major projects
export const featuredWork: WorkEntry[] = [
  {
    id: 'regwatch-ai',
    title: 'RegWatch AI @ NextEra Energy',
    type: 'Enterprise AI • Technical PM',
    date: 'Fall 2025',
    location: 'Remote',
    description: 'Architecting regulatory intelligence platform with AWS Bedrock that reduces manual research by 75%. Built RAG AI solution processing 10K+ documents with semantic chunking and vector search. Leading team of 5 engineers across web scraping, ETL pipeline development, vector database architecture, and ML deployment. Owned full project lifecycle from client scoping to delivery.',
    impact: [
      '75% reduction in manual research time',
      'Processing 10,000+ quarterly regulatory documents',
      'Managing team of 5 engineers across full stack'
    ],
    tags: ['AWS Bedrock', 'RAG', 'Vector DB', 'Python', 'ETL', 'Team Leadership'],
    links: {}
  },
  {
    id: 'google-internship',
    title: 'Performance Management Platform @ Google',
    type: 'Full-Stack Engineering • Internship',
    date: 'Summer 2025',
    location: 'New York',
    description: 'Built change history systems for performance management processing 10,000+ quarterly records. Developed APIs and reusable front-end components reducing dev time by 30%. Implemented role-based access control for 150,000+ users.',
    impact: [
      'Developed change history functionality processing 10,000+ quarterly records',
      'Built APIs and reusable components reducing dev time by 30%',
      'Implemented RBAC for 150,000+ users'
    ],
    tags: ['Java', 'React', 'PostgreSQL', 'RBAC', 'APIs'],
    links: {}
  },
  {
    id: 'amd-contract',
    title: 'Legal Discovery System @ AMD',
    type: 'Full-Stack Engineering • Contract',
    date: 'Fall 2024',
    location: 'Santa Clara',
    description: 'Streamlined legal discovery with React and Azure, reducing data retrieval time by 60% for 50+ litigation cases. Built single-page application with advanced search, filtering, and visualization dashboards. Architected backend on Azure with Functions and SQL Database.',
    impact: [
      'Reduced data retrieval time by 60% for 50+ litigation cases',
      'Built SPA with search, filtering, and visualization dashboards',
      'Architected backend on Azure with Functions and SQL Database'
    ],
    tags: ['React', 'Azure Functions', 'SQL', 'TypeScript', 'SPA'],
    links: {}
  },
  {
    id: 'risc-v-cpu',
    title: 'RISC-V CPU Design',
    type: 'Computer Architecture • Academic Project',
    date: '2025',
    description: 'Built a functional CPU in Logisim executing real RISC-V instructions. Designed finite state machine for control logic, implemented ALU with 16 operations, and engineered memory hierarchy with partial load/store support. The CPU successfully runs assembly programs including matrix operations and recursive algorithms.',
    tags: ['RISC-V', 'Digital Logic', 'Hardware', 'FSM', 'Computer Architecture'],
    links: {}
  },
  {
    id: 'frc-robotics',
    title: 'FRC Competition Robotics',
    type: 'Robotics Engineering • Leadership',
    date: '2023-2024',
    location: 'Danville',
    description: 'Directed 40-member competition robotics team as Build Manager. Coordinated cross-functional subteams for robot construction. Implemented computer vision-enabled precision targeting system with OpenCV and PID control. Built omnidirectional drivetrain with dynamic balancing.',
    impact: [
      'Coordinated cross-functional subteams for robot construction',
      'Implemented CV-enabled precision targeting system',
      'Built omnidirectional drivetrain with dynamic balancing'
    ],
    tags: ['OpenCV', 'Python', 'PID Control', 'Team Leadership', 'Computer Vision', 'Robotics'],
    links: {}
  },
  {
    id: 'lenovo-contract',
    title: 'AI Development Methodology @ Lenovo',
    type: 'Research • Contract',
    date: 'Spring 2025',
    location: 'Morrisville',
    description: 'Led cross-functional case study evaluating AI integration in software development. Demonstrated 40% productivity improvement with hybrid AI-assisted approach. Maintained oversight across 3 core features over 12-week development cycle.',
    impact: [
      'Led cross-functional case study on AI-assisted development',
      'Demonstrated 40% productivity improvement with hybrid approach',
      'Maintained oversight across 3 core features over 12 weeks'
    ],
    tags: ['AI Tooling', 'Development Workflow', 'Research', 'Case Study'],
    links: {}
  },
  {
    id: 'cs61classify',
    title: 'CS61Classify',
    type: 'Low-Level ML • Academic Project',
    date: '2024',
    description: 'ML classifier written entirely in RISC-V assembly for handwritten digit recognition. Implemented matrix multiplication, ReLU activation, and argmax in assembly. Optimized calling conventions and register allocation for performance.',
    tags: ['RISC-V Assembly', 'ML', 'Optimization', 'Low-Level Programming'],
    links: {}
  }
];

// MORE PROJECTS - Secondary portfolio pieces
export const moreProjects: WorkEntry[] = [
  {
    id: 'resourcify',
    title: 'Resourcify',
    type: 'Mobile App • Social Impact',
    date: '2022-2023',
    description: 'React Native app helping refugees navigate Bay Area resources. Architected Firebase backend with geolocation queries and real-time updates. Built in collaboration with Pleasanton Muslim Community Center to identify real community needs.',
    tags: ['React Native', 'Firebase', 'Geolocation', 'Mobile Development'],
    links: {
      github: 'https://github.com/ResourcifyORG/ResourcifyApp.git'
    }
  },
  {
    id: 'hadrians-library',
    title: "Hadrian's Library",
    type: 'Web App • Education',
    date: '2023',
    description: 'School-wide note-sharing platform with role-based access control. Implemented authentication flow, real-time collaborative editing, and efficient Firestore queries.',
    tags: ['React', 'Firebase', 'RBAC', 'Real-time Collaboration'],
    links: {
      github: 'https://github.com/Sentientnapkin/note-sharing.git'
    }
  },
  {
    id: 'evolution-simulator',
    title: 'Evolution Simulator',
    type: 'Simulation • Data Visualization',
    date: '2023',
    description: 'Interactive visualization of microevolutionary processes using genetic algorithms. Simulates selection, drift, and mutation with real-time graphing.',
    tags: ['Python', 'Algorithms', 'Simulation', 'Data Visualization'],
    links: {
      github: 'https://github.com/Sentientnapkin/MicroevolutionaryProcesses.git'
    }
  },
  {
    id: 'nfl-predictor',
    title: 'NFL Fantasy Predictor',
    type: 'Machine Learning • Sports Analytics',
    date: '2023',
    description: 'Regression model predicting fantasy football scores. Feature engineering with rolling averages, opponent strength metrics, and weather data. Trained on 5 seasons of historical data.',
    tags: ['Python', 'scikit-learn', 'ML', 'Feature Engineering'],
    links: {
      github: 'https://github.com/Sentientnapkin/NFL_Model.git'
    }
  }
];

// ADDITIONAL EXPERIENCES - Not featured in main work section
export const additionalExperiences = [
  {
    id: 'upsync',
    title: 'UpSync Consulting',
    role: 'VP of Projects',
    date: 'Sep 2025 - Present',
    location: 'Berkeley',
    description: 'Leading technical consulting projects. Delivered 5 client projects managing 10 technical PMs. Automated sourcing workflows processing 10,000 emails weekly. Pitched AI and automation capabilities to industry firms.',
    details: [
      'Delivered 5 client projects managing 10 technical PMs',
      'Automated sourcing workflows processing 10,000 emails weekly',
      'Pitched AI and automation capabilities to industry firms'
    ]
  },
  {
    id: 'mighty-coders',
    title: 'Mighty Coders',
    role: 'Volunteer Instructor',
    date: '2023',
    description: 'Taught coding to 20 students from underrepresented backgrounds in Python, C#, and JavaScript.'
  }
];

// SKILLS - Organized by category
export const skills = {
  languages: ['Python', 'Java', 'TypeScript', 'C/C++', 'SQL', 'RISC-V'],
  ml_ai: ['TensorFlow', 'PyTorch', 'RAG', 'Vector DBs'],
  web: ['React', 'Node.js', 'Flask', 'Django'],
  cloud_infra: ['AWS', 'Azure', 'GCP', 'Firebase', 'PostgreSQL', 'MongoDB']
};

// EDUCATION - Coursework and involvement
export const education = {
  school: {
    name: 'UC Berkeley',
    degree: 'Electrical Engineering & Computer Science',
    statement: 'Navigating the intersection of hardware and software, with a curiosity for how systems work at every level.'
  },
  coursework: {
    completed: [
      { code: 'CS 170', name: 'Algorithms & Complexity', link: 'https://cs170.org/' },
      { code: 'CS 61C', name: 'Machine Structures', link: 'https://cs61c.org/' },
      { code: 'CS 61B', name: 'Data Structures', link: 'https://sp25.datastructur.es/' },
      { code: 'CS 70', name: 'Discrete Math', link: 'https://www.eecs70.org/' },
      { code: 'EECS 120', name: 'Signals & Systems', link: 'https://www2.eecs.berkeley.edu/Courses/EECS120/' },
      { code: 'EECS 16A/B', name: 'Circuits & Devices', link: 'https://eecs16a.org/' },
      { code: 'CS 61A', name: 'Structure & Interpretation', link: 'https://cs61a.org/' }
    ],
    upcoming: [
      'CS 162 • Operating Systems',
      'CS 161 • Computer Security',
      'CS 194-198 • Networks: Models, Processes & Algorithms'
    ]
  },
  involvement: [
    {
      name: 'UpSync Consulting',
      role: 'VP of Projects',
      description: 'Leading technical & strategy consulting',
      logo: './UpsyncLogo.png',
      link: 'https://www.upsyncberkeley.com/'
    },
    {
      name: 'Hispanic Engineers and Scientists',
      role: 'Member',
      logo: './HES_Logo.png',
      link: 'https://hes.studentorg.berkeley.edu/'
    }
  ]
};

// RESEARCH FOCUS - Updated per user request (VLAs, ACT models, software engineering)
export const researchFocus = [
  {
    id: 'vla-models',
    title: 'Vision-Language-Action Models',
    description: 'Working with ACT (Action Chunking Transformer) models in robotics. Bridging perception and robotic control through imitation learning and policy optimization for embodied AI systems.',
    tags: ['VLAs', 'ACT', 'Embodied AI', 'Robotics', 'Imitation Learning']
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering at Scale',
    description: 'Distributed systems design and architecture. Performance optimization and systems thinking. Building reliable, scalable production systems that serve real users.',
    tags: ['Distributed Systems', 'Architecture', 'Performance', 'Scalability']
  },
  {
    id: 'algorithms',
    title: 'Algorithm Design & Complexity',
    description: 'From security protocols to computational efficiency. Exploring the theoretical foundations that underpin practical systems, from authentication algorithms to optimization techniques.',
    tags: ['Algorithms', 'Theory', 'Security', 'Complexity']
  }
];

// STATS for hero section
export const stats = {
  internships: 6,
  projects: 8,
  focus: 'VLA Robotics & Systems'
};

