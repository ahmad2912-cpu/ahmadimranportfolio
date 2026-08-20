import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { useTheme } from './hooks/useTheme';
import { fetchResumeData } from './services/api';

// Fallback CV Data
const fallbackData = {
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
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "SQL", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "HTML / CSS", level: 95 }
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

function App() {
  const [data, setData] = useState(fallbackData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Force scroll to top on page load to prevent jumping to hash sections like #ai-assistant
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const loadData = async () => {
    const serverData = await fetchResumeData();
    if (serverData) {
      setData(serverData);
    }
  };
  useEffect(() => { loadData(); }, []);

  return (
    <div className="min-h-screen bg-background text-primary font-sans selection:bg-accent selection:text-accent-contrast transition-colors duration-300">
      
      {/* Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <Projects projects={data.projects} onSelectProject={(p) => setSelectedProject(p)} />
        <Skills skills={data.skills} />
        <AIAssistant />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

    </div>
  );
}

export default App;
