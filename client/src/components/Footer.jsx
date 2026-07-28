import React from 'react';
import { Terminal, Heart, Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-500/20">
              <Terminal className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">
                Ahmad Imran <span className="text-emerald-400">.</span>
              </span>
              <span className="text-xs text-slate-400 block">
                Software Engineer & MERN Stack Specialist
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#ai-assistant" className="hover:text-emerald-400 transition-colors">AI Assistant</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-emerald-400" />
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Ahmad Imran. All rights reserved.</p>
          <div className="flex items-center gap-2 font-mono">
            <span>Built with</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              MERN Stack
            </span>
            <span>(MongoDB, Express, React, Node)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
