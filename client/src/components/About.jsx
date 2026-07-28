import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('engineering');

  const coursework = [
    { title: "Data Structures & Algorithms", desc: "Optimizing memory & time complexity with trees, graphs, and dynamic programming." },
    { title: "Operating Systems", desc: "Process scheduling, thread concurrency, memory management, and IPC." },
    { title: "Computer Networks", desc: "TCP/IP architecture, socket programming, HTTP/S REST protocol, routing algorithms." },
    { title: "Information Security", desc: "JWT authentication, cryptography, web vulnerability assessment, security protocols." },
    { title: "Database Systems", desc: "Relational 3NF normalization, stored procedures, indexing, and NoSQL aggregation." },
    { title: "Object-Oriented Programming", desc: "Design patterns, encapsulation, polymorphism, and clean code architecture." }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background & Quality Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Software Engineering & <span className="text-gradient-emerald">Quality Assurance</span>
          </h2>
          <p className="text-slate-400 text-base">
            Equipped with a solid foundation from the University of Central Punjab, combining robust software design patterns with rigorous quality assurance methodologies.
          </p>
        </div>

        {/* Education & Minor Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <GraduationCap className="w-48 h-48 text-emerald-400" />
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                Mar 2022 – Feb 2026
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold">
                Lahore, Pakistan
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Science in Software Engineering</h3>
            <p className="text-emerald-400 font-medium text-base mb-4">University of Central Punjab</p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10">
                <span className="text-xs text-slate-400 block">CGPA</span>
                <span className="text-xl font-bold text-white">3.14 / 4.0</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10">
                <span className="text-xs text-slate-400 block">Major</span>
                <span className="text-sm font-semibold text-emerald-400">Software Development</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10">
                <span className="text-xs text-slate-400 block">Minor</span>
                <span className="text-sm font-semibold text-cyan-400">Quality Assurance (QA)</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Trained in modern full-stack development, software lifecycle management, database design principles, and automated AI/ML model integration. Specialized in writing clean, unit-tested, and performant code.
            </p>
          </div>

          {/* QA & Engineering Focus Tabs */}
          <div className="lg:col-span-5 glass-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex border-b border-white/10 mb-4">
                <button
                  onClick={() => setActiveTab('engineering')}
                  className={`pb-3 px-4 font-semibold text-sm transition-all border-b-2 ${
                    activeTab === 'engineering'
                      ? 'border-emerald-400 text-emerald-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Software Engineering
                </button>
                <button
                  onClick={() => setActiveTab('qa')}
                  className={`pb-3 px-4 font-semibold text-sm transition-all border-b-2 ${
                    activeTab === 'qa'
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Quality Assurance Minor
                </button>
              </div>

              {activeTab === 'engineering' ? (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Full-Stack Architecture</h4>
                      <p className="text-xs text-slate-300">Designing RESTful APIs and modern React frontends with complete CRUD workflows.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">AI & Deep Learning</h4>
                      <p className="text-xs text-slate-300">Integrating CNN and NLP models into production-ready web APIs with FastAPI.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Agile & Scrum Practices</h4>
                      <p className="text-xs text-slate-300">Experienced in daily stand-ups, sprint planning, and collaborative code reviews.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">System Stability (+15%)</h4>
                      <p className="text-xs text-slate-300">Proven track record of resolving critical bugs and improving system stability by 15% at SkimCode.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">3NF Normalization</h4>
                      <p className="text-xs text-slate-300">Enforcing database integrity, foreign keys, and stored procedure optimization.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Code Testing & Debugging</h4>
                      <p className="text-xs text-slate-300">Assisting in debugging, automated checks, and unit testing across PHP and Java frameworks.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
              <span>Degree Status: Graduating Feb 2026</span>
              <span className="text-emerald-400 font-semibold">Ready for Roles</span>
            </div>
          </div>

        </div>

        {/* Relevant Coursework Grid */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <span>Core Computer Science Coursework</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursework.map((course, idx) => (
              <div key={idx} className="glass-card p-5 rounded-xl">
                <h4 className="text-base font-bold text-white mb-2">{course.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
