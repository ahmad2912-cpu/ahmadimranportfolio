import React, { useState } from 'react';
import { Code2, ExternalLink, Sparkles, Filter, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';

const Projects = ({ projects, onSelectProject }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'MERN Stack', 'AI & Full-Stack', 'Machine Learning', 'Database Engineering'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-24 relative bg-slate-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            <span>Featured Software Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            High-Impact <span className="text-gradient-emerald">Web Apps</span> & <span className="text-gradient-purple">AI Models</span>
          </h2>
          <p className="text-slate-400 text-base">
            From MERN marketplaces and normalized relational databases to AI-driven food calorie tracking and CNN deep learning classifiers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300"
            >
              <div>
                
                {/* Top Badge Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                    {project.category}
                  </span>
                  {project.highlight && (
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold border border-purple-500/20">
                      {project.highlight}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-5">{project.tagline}</p>

                {/* Primary Bullet Points */}
                <ul className="space-y-2 mb-6 text-sm text-slate-300">
                  {project.points.slice(0, 3).map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Card Footer: Tech Badges & View Details Trigger */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/10">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold text-xs transition-all border border-emerald-500/20"
                >
                  <span>View Full Architecture & Metrics</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
