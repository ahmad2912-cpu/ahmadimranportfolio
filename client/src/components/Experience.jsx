import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Code2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Star Automation",
      location: "Lahore, Pakistan",
      period: "Jun 2026 – Present",
      status: "Current Position",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      points: [
        "Developed and maintained web applications using PHP and the Laravel framework.",
        "Collaborated with the development team to build and enhance backend features and database-driven functionality.",
        "Assisted in debugging, testing, and deploying application updates."
      ],
      skills: ["PHP", "Laravel Framework", "MySQL", "JavaScript", "Backend Engineering", "Git"]
    },
    {
      role: "Software Development Intern",
      company: "SkimCode Pakistan",
      location: "Lahore, Pakistan",
      period: "July 2025 – Sep 2025",
      status: "15% Stability Improvement",
      badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      points: [
        "Collaborated with cross-functional teams to develop and enhance web applications using Java and Spring Framework.",
        "Participated in Agile/Scrum ceremonies including daily stand-ups, sprint planning, and code reviews.",
        "Contributed to feature development and resolved critical bug fixes, improving application stability by 15%.",
        "Utilized Git for version control and implemented best practices for collaborative software development."
      ],
      skills: ["Java", "Spring Framework", "Agile/Scrum", "Git", "Bug Fixing", "Code Reviews"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Professional Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Industry <span className="text-gradient-emerald">Software Development</span> Experience
          </h2>
          <p className="text-slate-400 text-base">
            Hands-on experience developing backend services, enhancing web applications, debugging production code, and participating in Agile teams.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 max-w-4xl mx-auto relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-cyan-500 before:to-transparent">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Timeline Node Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-2 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/30 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-5 h-5" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl border border-white/10 shadow-xl">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${exp.badgeColor}`}>
                    {exp.status}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <div className="flex items-center gap-2 text-sm text-emerald-400 font-semibold mb-4">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs font-normal">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6 text-sm text-slate-300">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {exp.skills.map((s, sIdx) => (
                    <span key={sIdx} className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800">
                      {s}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
