import React from 'react';
import { X, Layers, Cpu, ShieldCheck, CheckCircle2, Terminal, ExternalLink, Code2, Database } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-white/15 p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              {project.category}
            </span>
            {project.highlight && (
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">
                {project.highlight}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h3>
          <p className="text-sm text-slate-300 mt-1">{project.tagline}</p>
        </div>

        {/* Architecture Specs Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-900/90 border border-white/10">
          {Object.entries(project.metrics || {}).map(([key, val], idx) => (
            <div key={idx} className="p-3 rounded-lg bg-slate-950/60">
              <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider">{key}</span>
              <span className="text-sm font-bold text-emerald-400">{val}</span>
            </div>
          ))}
        </div>

        {/* Feature Bullets */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Key Engineering Highlights</span>
          </h4>
          <ul className="space-y-2.5">
            {project.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies & Libraries</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs text-slate-400 font-mono">
            Candidate: Ahmad Imran | BS Software Engineering
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
