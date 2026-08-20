import React, { useState } from 'react';
import { Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({ projects, onSelectProject }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'MERN Stack', 'AI & Full-Stack', 'Machine Learning', 'Database Engineering'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-32 relative bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-wider uppercase">
            <Code2 className="w-4 h-4" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-syne">
            Selected <span className="text-gradient-cyan">Works</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Deep dives into complex challenges, scalable architectures, and the technologies used to build them.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/20 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={project.id}
                className="group relative"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2rem] opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
                
                <div className="relative glass-card rounded-[2rem] h-full flex flex-col justify-between overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 bg-slate-900/50">
                  
                  <div className="p-8 sm:p-10 flex-grow">
                    {/* Top Badge Row */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
                        {project.category}
                      </span>
                      {project.highlight && (
                        <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">
                          ★ {project.highlight}
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors font-syne leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-medium mb-8 leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Primary Bullet Points */}
                    <ul className="space-y-3 mb-8 text-sm text-slate-300">
                      {project.points.slice(0, 3).map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer: Tech Badges & View Details Trigger */}
                  <div className="p-8 sm:p-10 pt-0">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-3 py-1.5 rounded-lg bg-black/40 text-slate-300 text-xs font-mono font-medium border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectProject(project)}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-white/5 text-white hover:bg-cyan-500 hover:text-slate-900 font-bold text-sm transition-colors border border-white/10 hover:border-transparent group/btn"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;
