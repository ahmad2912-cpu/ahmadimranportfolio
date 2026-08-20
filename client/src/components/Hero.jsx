import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring
} from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

const titles = [
  'Full-Stack Web Apps',
  'AI & Deep Learning',
  'Scalable Backends',
  'Modern Interfaces'
];

const EASE = [0.22, 1, 0.36, 1];

/* ---------- Reusable entrance variants ---------- */

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: '0.7em', filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: EASE }
  }
};

const fadeSlide = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
};

const simpleFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } }
};

/* ---------- Theme-aware particle canvas ---------- */

function ParticleField({ density = 42 }) {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion() === true;

  useEffect(() => {
    if (reduce) return undefined;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let particles = [];

    const readColor = () => {
      const cs = getComputedStyle(document.documentElement);
      return cs.getPropertyValue('--particle-color').trim() || 'rgba(148,163,184,0.5)';
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { offsetWidth: w, offsetHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(density, Math.floor((w * h) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.7 + 0.5,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        tw: Math.random() * Math.PI * 2
      }));
    };

    const draw = (t) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const color = readColor();
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -12) p.x = w + 12;
        else if (p.x > w + 12) p.x = -12;
        if (p.y < -12) p.y = h + 12;
        else if (p.y > h + 12) p.y = -12;
        ctx.globalAlpha = 0.2 + 0.35 * Math.abs(Math.sin(p.tw + t / 900));
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [reduce, density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

/* ---------- Hero ---------- */

const Hero = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const reduce = useReducedMotion() === true;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]), {
    stiffness: 120,
    damping: 30
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.25]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    if (reduce) return undefined;
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reduce]);

  const copyEmail = () => {
    navigator.clipboard
      .writeText('ahmadimranmughal.2912@gmail.com')
      .catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const headingWords = ['I', 'build'];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden"
    >
      {/* ---- Layered theme-aware background ---- */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[color-mix(in_srgb,var(--accent)_6%,transparent)] via-transparent to-background" />
        <div className="absolute inset-0 grid-overlay" />
        <motion.div
          style={{ scale: orbScale }}
          className="absolute inset-0"
        >
          <motion.div
            animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-[18%] -left-[12%] w-[65vw] h-[65vw] rounded-full"
            style={{ background: 'var(--orb-accent)' }}
          />
          <motion.div
            animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 35, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[15%] -right-[14%] w-[58vw] h-[58vw] rounded-full"
            style={{ background: 'var(--orb-accent-2)' }}
          />
        </motion.div>
        <ParticleField />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* ---- Content ---- */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* ---- Left: headline & CTAs ---- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Status badge */}
            <motion.div
              variants={reduce ? simpleFade : fadeSlide}
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-chip text-accent text-xs font-bold tracking-wide shadow-md"
            >
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-success opacity-60 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-success" />
              </span>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Software Developer Intern @ Star Automation</span>
            </motion.div>

            {/* Headline: staggered words */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] font-display">
              <span className="block overflow-hidden pb-1">
                {headingWords.map((w, i) => (
                  <motion.span
                    key={i}
                    variants={reduce ? simpleFade : wordVariants}
                    className="inline-block text-primary will-change-transform"
                  >
                    {w}
                    {i < headingWords.length - 1 && '\u00A0'}
                  </motion.span>
                ))}
              </span>
              <span className="block h-[1.15em] relative overflow-hidden mt-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleIndex}
                    initial={reduce ? { opacity: 0 } : { y: '55%', opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={reduce ? { opacity: 0 } : { y: '-55%', opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inline-block text-gradient-accent"
                  >
                    {titles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              variants={reduce ? simpleFade : fadeSlide}
              className="text-lg sm:text-xl text-secondary font-normal leading-relaxed max-w-2xl"
            >
              Hi, I&apos;m{' '}
              <strong className="text-primary font-semibold">Ahmad Imran</strong>. I engineer
              scalable web applications with React, Node.js, and Deep Learning models,
              focusing on performance and premium user experiences.
            </motion.p>

            {/* Tech badges */}
            <motion.div
              variants={reduce ? simpleFade : fadeSlide}
              className="flex flex-wrap gap-2 pt-2"
            >
              {['React.js', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg glass-chip text-secondary text-xs font-mono font-medium hover:border-accent/60 hover:text-accent transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={reduce ? simpleFade : fadeSlide}
              className="flex flex-wrap items-center gap-4 pt-6"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="glow-button inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-panel text-secondary hover:text-accent border border-line hover:border-accent/60 font-semibold text-sm transition-all"
              >
                <Terminal className="w-4 h-4" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ---- Right: profile card ---- */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.86, rotateY: -18 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            style={{ perspective: 1200 }}
            className="lg:col-span-5 relative max-w-[340px] sm:max-w-md mx-auto lg:max-w-none mt-12 lg:mt-0 w-full"
          >
            <div className="glass-panel rounded-3xl p-6 border border-white/15 shadow-2xl relative overflow-hidden">
              
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
          </motion.div>
        </div>
      </motion.div>

      {/* ---- Scroll indicator ---- */}
      {!reduce && (
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors z-10"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-current flex justify-center pt-1.5">
            <motion.span
              animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-current"
            />
          </div>
        </motion.a>
      )}
    </section>
  );
};

export default Hero;
