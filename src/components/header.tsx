'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS, PHONE, EMAIL } from '@/lib/constants';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#090909', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — use the actual SVG file, never a custom wordmark */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Shoondili Auto CC home">
            <img
              src="/brand/logo-dark.svg"
              alt="Shoondili Auto CC"
              className="h-10 w-auto"
              style={{ maxHeight: '40px' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-mono transition-colors"
                style={{ color: '#9B9B96' }}
              >
                <span className="hover-text-gold">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-mono inline-flex items-center transition-transform"
              style={{
                backgroundColor: '#111111',
                color: '#F7F7F4',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '4px',
              }}
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{ color: '#F7F7F4' }}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#111111', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <nav className="px-4 py-4 space-y-3" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-mono py-2 transition-colors"
                style={{ color: '#9B9B96' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-mono block text-center mt-4 transition-transform"
              style={{
                backgroundColor: '#111111',
                color: '#F7F7F4',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '4px',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Enquire Now
            </Link>
            <div className="pt-4 text-xs font-mono" style={{ color: '#9B9B96' }}>
              <p>{PHONE}</p>
              <p>{EMAIL}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
