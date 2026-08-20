import React, { useState } from 'react';
import { X, Download, Printer, FileText, Loader2 } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const a = document.createElement('a');
    a.href = '/Ahmad_Imran_Resume.pdf';
    a.download = 'Ahmad_Imran_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownloadTextCV = () => {
    const rawCVText = `Ahmad Imran
(+92)-320-4751625 | ahmadimranmughal.2912@gmail.com | linkedin.com/in/ahmad-imran-396025266 | Lahore, Pakistan

EDUCATION
--------------------------------------------------------------------------------
University of Central Punjab                                      Lahore, Pakistan
Bachelor of Science in Software Engineering, CGPA: 3.14/4        Mar 2022 – Feb 2026
• Major: Software Development — Minor: Quality Assurance
• Relevant Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Information Security

EXPERIENCE
--------------------------------------------------------------------------------
Software Developer Intern                                        Jun 2026 – Present
Star Automation                                                  Lahore, Pakistan
• Developed and maintained web applications using PHP and the Laravel framework
• Collaborated with the development team to build and enhance backend features and database-driven functionality
• Assisted in debugging, testing, and deploying application updates

Software Development Intern                                      July 2025 – Sep 2025
SkimCode Pakistan                                                Lahore, Pakistan
• Collaborated with cross-functional teams to develop and enhance web applications using Java and Spring Framework
• Participated in Agile/Scrum ceremonies including daily stand-ups, sprint planning, and code reviews
• Contributed to feature development and resolved critical bug fixes, improving application stability by 15%
• Utilized Git for version control and implemented best practices for collaborative software development

PROJECTS
--------------------------------------------------------------------------------
CalTrack - AI-Powered Calorie Tracking Platform | React.js, FastAPI, MongoDB, TensorFlow, CNN
(Final Year Project)
• Engineered full-stack web application with AI-driven food recognition using CNN and Zero-Shot Learning models
• Developed RESTful APIs for user authentication, food logging, barcode scanning, and real-time analytics dashboard
• Implemented secure JWT authentication, meal tracking, exercise logging, and gamification features (streaks, badges)
• Designed responsive UI/UX with React.js and optimized database queries in MongoDB for improved performance

CarHub - Vehicle Listing Platform | MERN Stack, RESTful APIs, Figma
• Built scalable car marketplace using React, Node.js, Express, and MongoDB with responsive mobile-first design
• Implemented complete CRUD operations, user authentication system, and comprehensive error handling
• Integrated RESTful APIs for seamless data management and designed intuitive UI/UX prototypes in Figma

Machine Learning Portfolio | Python, TensorFlow, NLP, OpenCV
• Developed NLP-based chatbot with intent recognition for intelligent user interaction and query resolution
• Built CNN image classifier achieving 90% accuracy on test dataset using convolutional neural networks
• Created real-time speech-to-text and text-to-speech conversion tools using deep learning models
• Implemented automated text summarization system using natural language processing techniques

Bank Database Management System | MySQL, SQL, Database Design
• Designed normalized relational database schema following 3NF principles for customer, account, and transaction data
• Optimized complex SQL queries and implemented stored procedures to improve transaction processing efficiency

TECHNICAL SKILLS
--------------------------------------------------------------------------------
Languages: JavaScript, C++, C, Python, SQL, HTML/CSS
Frameworks & Libraries: React.js, Node.js, Express.js, FastAPI, Spring Framework, TensorFlow, Bootstrap, Laravel
Databases: MongoDB, MySQL
Developer Tools: Git, GitHub, Linux, Jira, Taiga, Postman, VS Code
Technical Concepts: Data Structures & Algorithms, OOP, RESTful APIs, Agile/Scrum, Machine Learning (CNN, NLP), UI/UX Design, Database Normalization, JWT Authentication
`;

    const blob = new Blob([rawCVText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ahmad_Imran_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel rounded-2xl border border-white/20 p-6 shadow-2xl my-6 max-h-[92vh] flex flex-col">
        
        {/* Header Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/60 pb-4 mb-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-syne">Curriculum Vitae</h3>
              <p className="text-xs text-slate-400">Official Document Format</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Text File Button */}
            <button
              onClick={handleDownloadTextCV}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 font-semibold text-xs transition-all border border-white/10"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Download (.txt)</span>
            </button>

            {/* Print / Save 1-Page PDF Button */}
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 font-bold text-xs transition-all shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white ml-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Compact Single-Page Printable Document Container */}
        {/* We use bg-white and text-black so it literally looks like paper and exports perfectly via canvas */}
        <div className="flex-1 overflow-auto bg-slate-900 rounded-xl border border-white/10 p-2 sm:p-6 flex justify-center items-start">
          <div 
            id="cv-printable-document" 
            className="bg-white text-black shrink-0 shadow-sm font-sans"
            style={{ width: '794px', minHeight: '1123px', padding: '48px', fontSize: '13px', lineHeight: '1.5' }}
          >
            
            {/* Header */}
            <div className="border-b-2 border-black pb-3 text-center mb-4">
              <h1 className="text-4xl font-extrabold uppercase tracking-tight mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>Ahmad Imran</h1>
              <p className="text-[13px] font-mono mt-1">
                (+92)-320-4751625 | ahmadimranmughal.2912@gmail.com | linkedin.com/in/ahmad-imran-396025266 | Lahore, Pakistan
              </p>
            </div>

            {/* EDUCATION */}
            <div className="mb-4">
              <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
                EDUCATION
              </h2>
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-sm">University of Central Punjab</span>
                  <span className="text-[13px] text-gray-700 italic ml-2">Bachelor of Science in Software Engineering, CGPA: 3.14/4</span>
                </div>
                <span className="text-[13px] font-mono text-gray-600 shrink-0 ml-2">Lahore, PK | Mar 2022 – Feb 2026</span>
              </div>
              <ul className="list-disc list-inside text-[13px] text-gray-800 space-y-0.5 mt-1">
                <li><strong>Major:</strong> Software Development — <strong>Minor:</strong> Quality Assurance</li>
                <li><strong>Relevant Coursework:</strong> Data Structures & Algorithms, Operating Systems, Computer Networks, Information Security</li>
              </ul>
            </div>

            {/* EXPERIENCE */}
            <div className="mb-4">
              <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
                EXPERIENCE
              </h2>

              {/* Star Automation */}
              <div className="mb-2.5">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-sm">Software Developer Intern</span>
                    <span className="text-[13px] font-semibold ml-2">— Star Automation</span>
                  </div>
                  <span className="text-[13px] font-mono text-gray-600 shrink-0 ml-2">Lahore, PK | Jun 2026 – Present</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-[13px] text-gray-800 space-y-0.5 mt-0.5 pl-1">
                  <li>Developed and maintained web applications using PHP and the Laravel framework</li>
                  <li>Collaborated with development team to build backend features and database-driven functionality</li>
                  <li>Assisted in debugging, testing, and deploying application updates</li>
                </ul>
              </div>

              {/* SkimCode Pakistan */}
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-xs">Software Development Intern</span>
                    <span className="text-[11px] font-semibold ml-2">— SkimCode Pakistan</span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-600 shrink-0 ml-2">Lahore, PK | July 2025 – Sep 2025</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-[11px] text-gray-800 space-y-0.5 mt-0.5 pl-1">
                  <li>Collaborated with cross-functional teams to develop web applications using Java and Spring Framework</li>
                  <li>Participated in Agile/Scrum ceremonies including daily stand-ups, sprint planning, and code reviews</li>
                  <li>Contributed to feature development and resolved critical bug fixes, improving application stability by 15%</li>
                  <li>Utilized Git for version control and implemented best practices for collaborative software development</li>
                </ul>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="mb-4">
              <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
                PROJECTS
              </h2>

              {/* CalTrack */}
              <div className="mb-2.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-sm">CalTrack - AI Calorie Tracker (FYP)</span>
                  <span className="text-[12px] font-mono text-gray-600">React.js, FastAPI, MongoDB, TensorFlow, CNN</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-[13px] text-gray-800 space-y-0.5 mt-0.5 pl-1">
                  <li>Engineered full-stack web application with AI-driven food recognition using CNN and Zero-Shot Learning models</li>
                  <li>Developed RESTful APIs for user authentication, food logging, barcode scanning, and real-time analytics</li>
                  <li>Implemented secure JWT authentication, meal tracking, exercise logging, and gamification features (streaks, badges)</li>
                  <li>Designed responsive UI/UX with React.js and optimized database queries in MongoDB for improved performance</li>
                </ul>
              </div>

              {/* CarHub */}
              <div className="mb-2.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-xs">CarHub - Vehicle Marketplace</span>
                  <span className="text-[10px] font-mono text-gray-600">MERN Stack, RESTful APIs, Figma</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-[11px] text-gray-800 space-y-0.5 mt-0.5 pl-1">
                  <li>Built scalable car marketplace using React, Node.js, Express, and MongoDB with responsive mobile-first design</li>
                  <li>Implemented complete CRUD operations, user authentication system, and comprehensive error handling</li>
                  <li>Integrated RESTful APIs for seamless data management and designed intuitive UI/UX prototypes in Figma</li>
                </ul>
              </div>

              {/* Machine Learning Portfolio */}
              <div className="mb-2.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-xs">Machine Learning Suite</span>
                  <span className="text-[10px] font-mono text-gray-600">Python, TensorFlow, NLP, OpenCV</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-[11px] text-gray-800 space-y-0.5 mt-0.5 pl-1">
                  <li>Developed NLP chatbot with intent recognition; built 90% accuracy CNN image classifier</li>
                  <li>Created real-time speech-to-text and text-to-speech tools; implemented text summarization system</li>
                </ul>
              </div>

              {/* Bank DBMS */}
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-xs">Bank Database Management System</span>
                  <span className="text-[10px] font-mono text-gray-600">MySQL, SQL, Database Design</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-[11px] text-gray-800 space-y-0.5 mt-0.5 pl-1">
                  <li>Designed normalized 3NF relational database schema; optimized SQL queries and stored procedures</li>
                </ul>
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div>
              <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-1.5">
                TECHNICAL SKILLS
              </h2>
              <div className="text-[13px] text-gray-800 space-y-1 font-sans leading-relaxed">
                <p><strong>Languages:</strong> JavaScript, C++, C, Python, SQL, HTML/CSS &nbsp;|&nbsp; <strong>Databases:</strong> MongoDB, MySQL</p>
                <p><strong>Frameworks:</strong> React.js, Node.js, Express.js, FastAPI, Spring Framework, TensorFlow, Bootstrap, Laravel</p>
                <p><strong>Developer Tools & Concepts:</strong> Git, GitHub, Linux, Jira, Postman, VS Code, REST APIs, Agile/Scrum, 3NF Normalization, JWT</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
