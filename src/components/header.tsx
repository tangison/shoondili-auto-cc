'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS, SITE_NAME, PHONE, EMAIL } from '@/lib/constants';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#090909' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${SITE_NAME} home`}>
            <svg
              className="h-8 w-auto"
              viewBox="0 0 1844 853"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M918 28.084 C802.661 33.536 708.147 65.355 606.110 133.083 L586.720 145.953 562.610 144.870 C531.140 143.456 467.175 144.305 448.139 146.389 C364.831 155.511 287.041 176.764 228.093 206.508 C181.283 230.127 155.356 253.306 141.010 284.357 C137.067 292.891 131.459 309.793 132.294 310.627"
                fill="#F5B400"
                fillRule="evenodd"
              />
              <path
                d="M918 28.084 C802.661 33.536 708.147 65.355 606.110 133.083 L586.720 145.953 562.610 144.870"
                fill="#F7F7F4"
                fillRule="evenodd"
              />
            </svg>
            <span className="font-serif-editorial tracking-editorial text-lg" style={{ color: '#F7F7F4' }}>
              Shoondili
            </span>
            <span className="text-xs text-brand-muted" style={{ color: '#9B9B96' }}>AUTO CC</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-brand-gold"
                style={{ color: '#9B9B96' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-flat px-4 py-2 text-sm inline-flex items-center"
            >
              <svg viewBox="0 0 512 512" className="w-4 h-4 mr-2" fill="none" aria-hidden="true">
                <rect width="512" height="512" rx="96" fill="none" />
                <path d="M58 286C82 194 166 151 248 164C314 72 417 110 468 199" stroke="#F5B400" strokeWidth="24" fill="none" />
              </svg>
              Enquire Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" style={{ color: '#F7F7F4' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" style={{ color: '#F7F7F4' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                className="block text-sm py-2 transition-colors hover:text-brand-gold"
                style={{ color: '#9B9B96' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-flat px-4 py-2 text-sm block text-center mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Enquire Now
            </Link>
            <div className="pt-4 text-xs" style={{ color: '#9B9B96' }}>
              <p>{PHONE}</p>
              <p>{EMAIL}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
