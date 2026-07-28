const express = require('express');
const cors = require('cors');
const resumeData = require('./data/resumeData');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory store for contact submissions (complemented by DB if connected)
const contactSubmissions = [];

// API Routes

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    candidate: resumeData.personalInfo.name,
    stack: 'MERN (MongoDB, Express.js, React.js, Node.js)'
  });
});

// 2. Full Resume / Personal Info
app.get('/api/resume', (req, res) => {
  res.json(resumeData);
});

// 3. Projects endpoint
app.get('/api/projects', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    const filtered = resumeData.projects.filter(p => 
      p.category.toLowerCase().includes(category.toLowerCase()) || 
      p.tech.some(t => t.toLowerCase().includes(category.toLowerCase()))
    );
    return res.json(filtered);
  }
  res.json(resumeData.projects);
});

// 4. Experience endpoint
app.get('/api/experience', (req, res) => {
  res.json(resumeData.experience);
});

// 5. Skills endpoint
app.get('/api/skills', (req, res) => {
  res.json(resumeData.skills);
});

// 6. Contact Form submission endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide name, email, and message.'
    });
  }

  // Basic email syntax check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a valid email address.'
    });
  }

  const newSubmission = {
    id: `msg-${Date.now()}`,
    name,
    email,
    subject: subject || 'Portfolio Contact',
    message,
    submittedAt: new Date().toISOString()
  };

  contactSubmissions.push(newSubmission);
  console.log(`[Contact API] Received new message from ${name} (${email}):`, message);

  res.status(201).json({
    success: true,
    message: `Thank you ${name}! Your message has been received successfully. Ahmad will get back to you shortly.`,
    data: newSubmission
  });
});

// 7. AI Assistant Chatbot Endpoint (Reflects Ahmad's AI & ML skills)
app.post('/api/ai-assistant', (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ reply: "Please ask a question about Ahmad Imran's experience, skills, or projects!" });
  }

  const query = prompt.toLowerCase();
  let reply = "";

  if (query.includes('skill') || query.includes('stack') || query.includes('technology') || query.includes('language')) {
    reply = `Ahmad specializes in the MERN Stack (MongoDB, Express.js, React.js, Node.js) along with Python, C++, C, SQL, FastAPI, Laravel, Java Spring, and Machine Learning tools (TensorFlow, OpenCV). He is also proficient in Git, Linux, Postman, Jira, and JWT Authentication.`;
  } else if (query.includes('project') || query.includes('caltrack') || query.includes('carhub') || query.includes('fyp')) {
    reply = `Ahmad has built notable projects including:\n1. CalTrack (FYP): AI-Powered Calorie Tracker with CNN Zero-Shot food recognition, FastAPI, React, and MongoDB.\n2. CarHub: Scalable MERN Stack vehicle listing marketplace with Figma UI and REST APIs.\n3. ML Portfolio: NLP Chatbot, 90% accuracy CNN image classifier, and Speech tools.\n4. Bank DBMS: 3N Normalized MySQL database schema with stored procedures.`;
  } else if (query.includes('experience') || query.includes('job') || query.includes('intern') || query.includes('work')) {
    reply = `Ahmad has software engineering experience at:\n- Star Automation (Jun 2026 – Present): Software Developer Intern building PHP/Laravel web applications and backend features.\n- SkimCode Pakistan (July 2025 – Sep 2025): Software Development Intern working with Java Spring Framework in Agile/Scrum, improving system stability by 15%.`;
  } else if (query.includes('education') || query.includes('university') || query.includes('ucp') || query.includes('gpa')) {
    reply = `Ahmad is graduating with a Bachelor of Science in Software Engineering from the University of Central Punjab (Mar 2022 – Feb 2026) with a 3.14/4.0 CGPA. His major is Software Development with a minor in Quality Assurance.`;
  } else if (query.includes('contact') || query.includes('email') || query.includes('hire') || query.includes('phone') || query.includes('reach')) {
    reply = `You can reach Ahmad directly at:\n- Email: ahmadimranmughal.2912@gmail.com\n- Phone: (+92)-320-4751625\n- LinkedIn: linkedin.com/in/ahmad-imran-396025266\n- Location: Lahore, Pakistan`;
  } else {
    reply = `Hello! I am Ahmad Imran's Portfolio AI Assistant. Ahmad is a Software Engineer specializing in MERN Stack web development and AI/ML model integration. Feel free to ask about his internships at Star Automation & SkimCode, his AI Calorie Tracking FYP (CalTrack), or his technical skill set!`;
  }

  res.json({ reply });
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` Ahmad Imran Portfolio MERN Server running on port ${PORT}`);
  console.log(` REST API URL: http://localhost:${PORT}/api/resume`);
  console.log(`====================================================`);
});
