'use client';

import { useTheme } from 'next-themes';
import { useMounted } from '@/hooks/use-mounted';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        className="inline-flex items-center rounded-full p-1"
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border-color)',
          minWidth: '140px',
        }}
        aria-label="Theme toggle loading"
      >
        <div className="h-8 w-[60px] rounded-full" style={{ backgroundColor: 'var(--surface-raised)' }} />
        <span className="text-xs font-mono px-2" style={{ color: 'var(--text-secondary)' }}>Dark</span>
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    const next = isDark ? 'light' : 'dark';
    // Add transition class briefly
    document.documentElement.classList.add('theme-transitioning');
    setTheme(next);
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 250);
  };

  return (
    <div
      className="inline-flex items-center rounded-full p-1"
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border-color)',
        minWidth: '140px',
      }}
      role="radiogroup"
      aria-label="Theme preference"
    >
      <button
        onClick={() => {
          document.documentElement.classList.add('theme-transitioning');
          setTheme('light');
          setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 250);
        }}
        className="flex items-center justify-center h-8 w-[60px] rounded-full text-xs font-mono transition-all duration-300"
        style={{
          backgroundColor: !isDark ? 'var(--brand-gold)' : 'transparent',
          color: !isDark ? 'var(--canvas)' : 'var(--text-secondary)',
          minWidth: '44px',
        }}
        role="radio"
        aria-checked={!isDark}
        aria-label="Light theme"
      >
        <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        Light
      </button>
      <button
        onClick={() => {
          document.documentElement.classList.add('theme-transitioning');
          setTheme('dark');
          setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 250);
        }}
        className="flex items-center justify-center h-8 w-[60px] rounded-full text-xs font-mono transition-all duration-300"
        style={{
          backgroundColor: isDark ? 'var(--brand-gold)' : 'transparent',
          color: isDark ? 'var(--canvas)' : 'var(--text-secondary)',
          minWidth: '44px',
        }}
        role="radio"
        aria-checked={isDark}
        aria-label="Dark theme"
      >
        <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        Dark
      </button>
    </div>
  );
}
