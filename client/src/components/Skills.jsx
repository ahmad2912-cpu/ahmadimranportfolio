import React, { useState } from 'react';
import { Cpu, Terminal, Database, Wrench, BrainCircuit, Check } from 'lucide-react';

const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('languages');

  if (!skills) return null;

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <BrainCircuit className="w-4 h-4" />
            <span>Technical Expertise & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skill <span className="text-gradient-emerald">Matrix</span> & <span className="text-gradient-purple">Competencies</span>
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive breakdown of programming languages, web frameworks, database engines, developer tools, and core computer science concepts.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('languages')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs transition-all ${
              activeCategory === 'languages'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'glass-panel text-slate-300 hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Languages</span>
          </button>

          <button
            onClick={() => setActiveCategory('frameworks')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs transition-all ${
              activeCategory === 'frameworks'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'glass-panel text-slate-300 hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Frameworks & Libraries</span>
          </button>

          <button
            onClick={() => setActiveCategory('databases')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs transition-all ${
              activeCategory === 'databases'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'glass-panel text-slate-300 hover:text-white'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Databases</span>
          </button>

          <button
            onClick={() => setActiveCategory('tools')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs transition-all ${
              activeCategory === 'tools'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'glass-panel text-slate-300 hover:text-white'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Developer Tools</span>
          </button>

          <button
            onClick={() => setActiveCategory('concepts')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs transition-all ${
              activeCategory === 'concepts'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'glass-panel text-slate-300 hover:text-white'
            }`}
          >
            <BrainCircuit className="w-4 h-4" />
            <span>Core Concepts</span>
          </button>
        </div>

        {/* Dynamic Display Panels */}

        {/* 1. Languages */}
        {activeCategory === 'languages' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.languages.map((lang, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{lang.name}</h3>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">{lang.level}%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-white/5">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Frameworks */}
        {activeCategory === 'frameworks' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {skills.frameworks.map((fw, idx) => (
              <div key={idx} className="glass-card p-5 rounded-xl">
                <span className="text-[10px] font-mono uppercase text-cyan-400 block mb-1">{fw.category}</span>
                <h3 className="text-base font-bold text-white mb-2">{fw.name}</h3>
                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-emerald-400 h-1.5 rounded-full"
                    style={{ width: `${fw.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Databases */}
        {activeCategory === 'databases' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.databases.map((db, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl border-l-4 border-l-emerald-500">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white">{db.name}</h3>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-emerald-400">{db.type}</span>
                </div>
                <p className="text-sm text-slate-300">{db.detail}</p>
              </div>
            ))}
          </div>
        )}

        {/* 4. Tools */}
        {activeCategory === 'tools' && (
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.tools.map((tool, idx) => (
              <div key={idx} className="glass-card px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-semibold text-slate-200">
                <Wrench className="w-4 h-4 text-emerald-400" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        )}

        {/* 5. Technical Concepts */}
        {activeCategory === 'concepts' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {skills.concepts.map((concept, idx) => (
              <div key={idx} className="glass-card p-4 rounded-xl flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-200">{concept}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
