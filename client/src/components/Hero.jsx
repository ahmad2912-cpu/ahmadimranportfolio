import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Database, Sparkles, Terminal, ShieldCheck, Mail, Cpu, CheckCircle2, Layers, Braces } from 'lucide-react';

const Hero = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "Full-Stack MERN Engineer",
    "AI & Deep Learning Specialist",
    "Software Engineering Graduate",
    "Laravel & Java Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('ahmadimranmughal.2912@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Software Developer Intern @ Star Automation</span>
            </div>

            {/* Main Headline with Dynamic Typing Titles */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Engineering Modern <br />
              <span className="text-gradient-emerald">{titles[titleIndex]}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Hi, I'm <strong className="text-white font-bold">Ahmad Imran</strong> — BS Software Engineering graduate (CGPA 3.14/4) from <span className="text-emerald-400 font-semibold">University of Central Punjab</span> with a Minor in Quality Assurance. I build scalable full-stack web applications with React, Node.js, Express, MongoDB, FastAPI, and Deep Learning models.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'Laravel', 'Java Spring', 'TensorFlow', 'REST APIs'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-mono font-medium shadow-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="glow-button inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 text-sm shadow-xl"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 text-white hover:bg-slate-700 border border-slate-700 font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 font-semibold text-sm transition-all"
              >
                <Terminal className="w-4 h-4" />
                <span>View & Download CV</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl">
              <div>
                <p className="text-2xl font-bold text-white">3.14 / 4.0</p>
                <p className="text-xs text-slate-400 font-medium">CGPA (UCP Lahore)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400">2 Internships</p>
                <p className="text-xs text-slate-400 font-medium">Star Automation & SkimCode</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">+15%</p>
                <p className="text-xs text-slate-400 font-medium">Stability Improvement</p>
              </div>
            </div>

          </div>

          {/* Right Column: User Profile Photo with Animated Tech Orbit */}
          <div className="lg:col-span-5 relative">
            
            <div className="glass-panel rounded-3xl p-6 border border-white/15 shadow-2xl animate-float relative overflow-hidden">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">AhmadImran.dev</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                  AVAILABLE FOR ROLES
                </span>
              </div>

              {/* Profile Photo Display with Glowing Orbit */}
              <div className="relative flex justify-center items-center py-4">
                
                {/* Rotating Tech Dash Ring */}
                <div className="absolute w-72 h-72 border-2 border-dashed border-emerald-500/40 rounded-full animate-spin-slow pointer-events-none" />

                {/* Main Profile Photo Container */}
                <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-emerald-500/60 shadow-2xl shadow-emerald-500/30 group">
                  <img
                    src="/ahmad-imran.jpg"
                    alt="Ahmad Imran - Software Engineer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider shadow-lg">
                      Ahmad Imran
                    </span>
                  </div>
                </div>

                {/* Floating Orbiting Tech Badges */}
                <div className="absolute top-0 left-2 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-emerald-500/40 text-emerald-400 text-xs font-mono shadow-xl">
                  React.js
                </div>
                <div className="absolute bottom-2 left-0 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-cyan-500/40 text-cyan-400 text-xs font-mono shadow-xl">
                  Node & Express
                </div>
                <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-purple-500/40 text-purple-300 text-xs font-mono shadow-xl">
                  FastAPI & CNN
                </div>
                <div className="absolute bottom-4 right-0 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-amber-500/40 text-amber-300 text-xs font-mono shadow-xl">
                  MongoDB & MySQL
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="mt-4 p-4 rounded-xl bg-slate-950/90 border border-white/10 font-mono text-xs text-slate-300 space-y-1">
                <p className="text-purple-400">class <span className="text-emerald-400">SoftwareEngineer</span> &#123;</p>
                <p className="pl-4 text-cyan-400">candidate = <span className="text-yellow-300">"Ahmad Imran"</span>;</p>
                <p className="pl-4 text-cyan-400">degree = <span className="text-yellow-300">"BS Software Engineering (UCP)"</span>;</p>
                <p className="pl-4 text-cyan-400">status = <span className="text-yellow-300">"Building High-Impact Apps"</span>;</p>
                <p>&#125;</p>
              </div>

              {/* Card Footer */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300 pt-3 border-t border-white/10">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  MERN Stack Developer
                </span>
                <button
                  onClick={copyEmail}
                  className="text-xs font-mono text-cyan-400 hover:underline"
                >
                  {copied ? 'Email Copied!' : 'Copy Email'}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
