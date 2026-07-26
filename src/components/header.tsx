'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS, WHATSAPP_URL, PHONE } from '@/lib/constants';
import { SearchOverlay } from '@/components/search-overlay';

/* ─── Custom automotive menu icon SVG ─── */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="w-10 h-10"
      style={{ transition: 'transform 300ms cubic-bezier(0.16,1,0.3,1)' }}
    >
      {/* Gold automotive silhouette — inspired by the favicon */}
      <path
        d="M5 22C9 14 18 10 26 14C31 6 38 10 38 18C32 16 25 16 19 18C13 20 8 21 5 22Z"
        fill="#F5B400"
        style={{
          transform: open ? 'translateY(-2px) scaleX(0.6)' : 'translateY(0) scaleX(1)',
          transition: 'transform 400ms cubic-bezier(0.16,1,0.3,1)',
          transformBox: 'fill-box',
          transformOrigin: 'center',
        }}
      />
      {/* Three gold dots below — custom "lines" representation */}
      <circle cx="12" cy="28" r="2" fill="#F5B400" style={{ opacity: open ? 0 : 1, transition: 'opacity 200ms' }} />
      <circle cx="20" cy="28" r="2" fill="#F5B400" style={{ opacity: open ? 0 : 1, transition: 'opacity 200ms 50ms' }} />
      <circle cx="28" cy="28" r="2" fill="#F5B400" style={{ opacity: open ? 0 : 1, transition: 'opacity 200ms 100ms' }} />
      {/* Close X — appears when open */}
      <line x1="14" y1="26" x2="26" y2="34" stroke="#F5B400" strokeWidth="2" strokeLinecap="round" style={{ opacity: open ? 1 : 0, transition: 'opacity 200ms' }} />
      <line x1="26" y1="26" x2="14" y2="34" stroke="#F5B400" strokeWidth="2" strokeLinecap="round" style={{ opacity: open ? 1 : 0, transition: 'opacity 200ms 100ms' }} />
      {/* Gold accent line */}
      <line x1="5" y2="36" x1="5" x2="38" y1="36" stroke="#F5B400" strokeWidth="1" strokeDasharray="2 4" style={{ opacity: 0.4 }} />
    </svg>
  );
}

/* ─── WhatsApp icon ─── */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F5B400">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

/* ─── Search icon ─── */
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#9B9B96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  // Lock body scroll when menu or search is open
  useEffect(() => {
    if (menuOpen || searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, searchOpen]);

  const headerBg = scrollY > 20 ? 'rgba(9,9,9,0.95)' : '#090909';
  const headerBorder = scrollY > 20 ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.12)';

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{ backgroundColor: headerBg, borderBottom: `1px solid ${headerBorder}` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
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
                  className="text-sm font-mono transition-colors duration-200"
                  style={{ color: '#9B9B96' }}
                >
                  <span className="hover-text-gold">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Search button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded transition-colors duration-200 hover:bg-brand-raised"
                aria-label="Search vehicles"
                style={{ color: '#9B9B96' }}
              >
                <SearchIcon />
              </button>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-mono inline-flex items-center gap-2 transition-all duration-200 hover:scale-[0.98]"
                style={{
                  backgroundColor: '#F5B400',
                  color: '#090909',
                  borderRadius: '4px',
                }}
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>

            {/* Mobile actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2"
                aria-label="Search vehicles"
                style={{ color: '#9B9B96' }}
              >
                <SearchIcon />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                style={{ color: '#F7F7F4' }}
              >
                <MenuIcon open={menuOpen} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Full-screen immersive off-canvas menu ─── */}
      <div
        className="fixed inset-0 z-[60] md:hidden"
        style={{
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* Backdrop with parallax gold line */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: menuOpen ? 'rgba(9,9,9,0.97)' : 'rgba(9,9,9,0)',
            transition: 'background-color 600ms cubic-bezier(0.16,1,0.3,1)',
          }}
          onClick={closeMenu}
        />

        {/* Animated gold route line */}
        <div
          className="absolute left-8 top-0 bottom-0 w-px"
          style={{
            backgroundColor: '#F5B400',
            transform: menuOpen ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: 'top',
            transition: 'transform 800ms cubic-bezier(0.16,1,0.3,1)',
            opacity: 0.3,
          }}
        />

        {/* Menu content */}
        <div
          className="relative z-10 flex flex-col h-full px-8 pt-20 pb-8 overflow-y-auto"
          style={{
            transform: menuOpen ? 'translateY(0)' : 'translateY(30px)',
            opacity: menuOpen ? 1 : 0,
            transition: 'transform 600ms cubic-bezier(0.16,1,0.3,1), opacity 400ms cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Logo at top of menu */}
          <div className="mb-12">
            <Link href="/" onClick={closeMenu} aria-label="Shoondili Auto CC home">
              <img
                src="/brand/logo-dark.svg"
                alt="Shoondili Auto CC"
                className="h-12 w-auto"
                style={{ maxHeight: '48px' }}
              />
            </Link>
          </div>

          {/* Navigation links — large editorial typography */}
          <nav className="flex-1" aria-label="Mobile navigation">
            <ul className="space-y-2">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block font-serif-editorial tracking-editorial-tight text-3xl transition-all duration-300 hover:translate-x-4"
                    style={{
                      color: '#F7F7F4',
                      transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: menuOpen ? 1 : 0,
                      transition: `transform 600ms cubic-bezier(0.16,1,0.3,1) ${index * 80 + 100}ms, opacity 400ms cubic-bezier(0.16,1,0.3,1) ${index * 80 + 100}ms, color 200ms`,
                    }}
                  >
                    <span className="hover-text-gold">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Featured imagery section */}
          <div
            className="mt-8 mb-8"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 600ms cubic-bezier(0.16,1,0.3,1) 500ms, opacity 400ms cubic-bezier(0.16,1,0.3,1) 500ms',
            }}
          >
            <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
              <img
                src="/assets/backgrounds/walvis-bay-port.webp"
                alt="Walvis Bay Port, Namibia"
                className="w-full h-32 object-cover"
                style={{ filter: 'brightness(0.6) contrast(1.2)' }}
              />
            </div>
            <p className="text-xs font-mono mt-2" style={{ color: '#9B9B96' }}>
              Walvis Bay, Namibia — Where we bring your vehicle home.
            </p>
          </div>

          {/* WhatsApp CTA in menu */}
          <div
            className="mt-auto"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 600ms cubic-bezier(0.16,1,0.3,1) 600ms, opacity 400ms cubic-bezier(0.16,1,0.3,1) 600ms',
            }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-4 text-sm font-mono inline-flex items-center justify-center gap-3 transition-all duration-200 hover:scale-[0.98]"
              style={{
                backgroundColor: '#F5B400',
                color: '#090909',
                borderRadius: '4px',
              }}
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
            <div className="mt-4 text-xs font-mono" style={{ color: '#9B9B96' }}>
              <p>{PHONE}</p>
              <p>Walvis Bay, Namibia</p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Search overlay ─── */}
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </>
  );
}
