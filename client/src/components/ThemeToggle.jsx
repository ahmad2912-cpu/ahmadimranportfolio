import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle, size = 'md' }) => {
  const isDark = theme === 'dark';

  const trackW = size === 'sm' ? 'w-14 h-7' : 'w-16 h-8';
  const knobW = size === 'sm' ? 'w-5 h-5' : 'w-6 h-6';
  const iconW = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5';
  const slide = size === 'sm' ? 22 : 32;

  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative ${trackW} rounded-full flex items-center justify-between px-1.5 border transition-colors duration-300 bg-background-alt border-line hover:border-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50`}
    >
      <Sun className={`${iconW} text-muted transition-colors duration-300 ${isDark ? 'opacity-100' : 'text-accent opacity-100'}`} />
      <Moon className={`${iconW} text-muted transition-colors duration-300 ${!isDark ? 'opacity-100' : 'text-accent-2 opacity-100'}`} />

      <motion.span
        animate={{ x: isDark ? 0 : slide }}
        transition={{ type: 'spring', stiffness: 420, damping: 30 }}
        className={`absolute top-1/2 left-1 -translate-y-1/2 ${knobW} rounded-full flex items-center justify-center shadow-lg`}
        style={{
          background: isDark ? 'var(--accent)' : 'var(--accent-2)',
          boxShadow: isDark ? '0 0 14px var(--glow-accent)' : '0 0 12px var(--glow-accent-2)'
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ rotate: -120, opacity: 0, scale: 0.4 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 120, opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="flex"
          >
            {isDark ? (
              <Moon className={`${iconW} text-[var(--accent-contrast)]`} strokeWidth={2.5} />
            ) : (
              <Sun className={`${iconW} text-[var(--accent-2-contrast)]`} strokeWidth={2.5} />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  );
};

export default ThemeToggle;
