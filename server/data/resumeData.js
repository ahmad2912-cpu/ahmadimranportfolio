const resumeData = {
  personalInfo: {
    name: "Ahmad Imran",
    title: "Software Engineer & MERN Stack Developer",
    subtitle: "BS Software Engineering | Full-Stack Web & AI Developer",
    email: "ahmadimranmughal.2912@gmail.com",
    phone: "(+92)-320-4751625",
    location: "Lahore, Pakistan",
    linkedin: "https://linkedin.com/in/ahmad-imran-396025266",
    github: "https://github.com",
    bio: "Passionate Software Engineer specializing in MERN Stack web development, RESTful API design, and AI model integration. Proven experience across PHP/Laravel, Java Spring, and JavaScript ecosystems, with a track record of improving software stability by 15% and engineering full-stack AI applications.",
    status: "Available for Software Engineering & Full-Stack Roles",
    currentCompany: "Star Automation"
  },
  education: [
    {
      institution: "University of Central Punjab",
      location: "Lahore, Pakistan",
      degree: "Bachelor of Science in Software Engineering",
      cgpa: "3.14 / 4.0",
      period: "Mar 2022 – Feb 2026",
      major: "Software Development",
      minor: "Quality Assurance",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Information Security",
        "Database Systems",
        "Object-Oriented Programming"
      ]
    }
  ],
  experience: [
    {
      id: "star-automation",
      role: "Software Developer Intern",
      company: "Star Automation",
      location: "Lahore, Pakistan",
      period: "Jun 2026 – Present",
      type: "Current Role",
      technologies: ["PHP", "Laravel Framework", "MySQL", "JavaScript", "REST APIs"],
      points: [
        "Developed and maintained web applications using PHP and the Laravel framework.",
        "Collaborated with the development team to build and enhance backend features and database-driven functionality.",
        "Assisted in debugging, testing, and deploying application updates."
      ]
    },
    {
      id: "skimcode",
      role: "Software Development Intern",
      company: "SkimCode Pakistan",
      location: "Lahore, Pakistan",
      period: "July 2025 – Sep 2025",
      type: "Internship",
      technologies: ["Java", "Spring Framework", "Agile/Scrum", "Git", "REST APIs"],
      points: [
        "Collaborated with cross-functional teams to develop and enhance web applications using Java and Spring Framework.",
        "Participated in Agile/Scrum ceremonies including daily stand-ups, sprint planning, and code reviews.",
        "Contributed to feature development and resolved critical bug fixes, improving application stability by 15%.",
        "Utilized Git for version control and implemented best practices for collaborative software development."
      ]
    }
  ],
  projects: [
    {
      id: "caltrack",
      title: "CalTrack - AI-Powered Calorie Tracking Platform",
      tagline: "Final Year Project | AI Food Recognition & Gamified Health Tracking",
      category: "AI & Full-Stack",
      highlight: "Final Year Project",
      tech: ["React.js", "FastAPI", "MongoDB", "TensorFlow", "CNN", "Zero-Shot Learning", "JWT"],
      points: [
        "Engineered full-stack web application with AI-driven food recognition using CNN and Zero-Shot Learning models.",
        "Developed RESTful APIs for user authentication, food logging, barcode scanning, and real-time analytics dashboard.",
        "Implemented secure JWT authentication, meal tracking, exercise logging, and gamification features (streaks, badges).",
        "Designed responsive UI/UX with React.js and optimized database queries in MongoDB for improved performance."
      ],
      metrics: {
        accuracy: "Zero-Shot AI Model",
        features: "Streaks, Badges & Analytics",
        backend: "FastAPI + MongoDB"
      }
    },
    {
      id: "carhub",
      title: "CarHub - Vehicle Listing Marketplace Platform",
      tagline: "MERN Stack Marketplace with Custom RESTful APIs & Figma UI",
      category: "MERN Stack",
      highlight: "MERN Core Project",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Figma"],
      points: [
        "Built scalable car marketplace using React, Node.js, Express, and MongoDB with responsive mobile-first design.",
        "Implemented complete CRUD operations, user authentication system, and comprehensive error handling.",
        "Integrated RESTful APIs for seamless data management and designed intuitive UI/UX prototypes in Figma."
      ],
      metrics: {
        architecture: "MERN Full Stack",
        design: "Mobile-First Figma UI",
        operations: "Full CRUD & Auth"
      }
    },
    {
      id: "ml-portfolio",
      title: "Machine Learning & Deep Learning Suite",
      tagline: "NLP Chatbots, CNN Image Classifier & Speech Tools",
      category: "Machine Learning",
      highlight: "90% Accuracy CNN",
      tech: ["Python", "TensorFlow", "NLP", "OpenCV", "CNN", "Deep Learning"],
      points: [
        "Developed NLP-based chatbot with intent recognition for intelligent user interaction and query resolution.",
        "Built CNN image classifier achieving 90% accuracy on test dataset using convolutional neural networks.",
        "Created real-time speech-to-text and text-to-speech conversion tools using deep learning models.",
        "Implemented automated text summarization system using natural language processing techniques."
      ],
      metrics: {
        cnnAccuracy: "90% Test Accuracy",
        nlp: "Intent Recognition & Summarization",
        audio: "Real-time STT / TTS"
      }
    },
    {
      id: "bank-dbms",
      title: "Bank Database Management System",
      tagline: "3NF Relational Database Schema & Stored Procedures",
      category: "Database Engineering",
      highlight: "3NF Normalized DB",
      tech: ["MySQL", "SQL", "Database Design", "Stored Procedures", "3NF Normalization"],
      points: [
        "Designed normalized relational database schema following 3NF principles for customer, account, and transaction data.",
        "Optimized complex SQL queries and implemented stored procedures to improve transaction processing efficiency."
      ],
      metrics: {
        normalization: "3NF Compliant Schema",
        performance: "Optimized Stored Procedures",
        domain: "Banking & Financial Transactions"
      }
    }
  ],
  skills: {
    languages: [
      { name: "JavaScript", level: 95, icon: "Code2" },
      { name: "Python", level: 90, icon: "Terminal" },
      { name: "SQL", level: 90, icon: "Database" },
      { name: "C++", level: 85, icon: "Cpu" },
      { name: "C", level: 80, icon: "Binary" },
      { name: "HTML / CSS", level: 95, icon: "Layout" }
    ],
    frameworks: [
      { name: "React.js", category: "Frontend", level: 95 },
      { name: "Node.js", category: "Backend", level: 90 },
      { name: "Express.js", category: "Backend", level: 90 },
      { name: "FastAPI", category: "Backend", level: 85 },
      { name: "Spring Framework", category: "Backend", level: 80 },
      { name: "Laravel Framework", category: "Backend", level: 85 },
      { name: "TensorFlow", category: "AI/ML", level: 85 },
      { name: "Bootstrap", category: "Frontend", level: 90 }
    ],
    databases: [
      { name: "MongoDB", type: "NoSQL", detail: "MERN Stack, Aggregations, Indexing" },
      { name: "MySQL", type: "Relational", detail: "3NF Normalization, Stored Procedures, Complex Queries" }
    ],
    tools: [
      "Git", "GitHub", "Linux", "Jira", "Taiga", "Postman", "VS Code", "Figma", "OpenCV"
    ],
    concepts: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "RESTful API Design",
      "Agile / Scrum Methodologies",
      "Machine Learning (CNN, NLP)",
      "UI/UX Design & Wireframing",
      "Database Normalization (3NF)",
      "JWT Authentication & Security",
      "Software Quality Assurance (SQA)"
    ]
  }
};

module.exports = resumeData;
