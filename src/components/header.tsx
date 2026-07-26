'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS, WHATSAPP_URL, PHONE } from '@/lib/constants';
import { SearchOverlay } from '@/components/search-overlay';

/* ─── Custom animated menu icon — automotive silhouette morphing ─── */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="w-11 h-11"
      style={{
        transition: 'transform 400ms cubic-bezier(0.16,1,0.3,1)',
        transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
      }}
    >
      {/* Gold automotive silhouette — transforms on toggle */}
      <path
        d="M6 24C10 16 20 12 28 16C33 8 40 12 40 20C34 18 27 18 21 20C15 22 10 23 6 24Z"
        fill="#F5B400"
        style={{
          transform: open ? 'translateY(-3px) scaleX(0.5)' : 'translateY(0) scaleX(1)',
          transition: 'transform 500ms cubic-bezier(0.16,1,0.3,1)',
          transformBox: 'fill-box',
          transformOrigin: 'center',
        }}
      />
      {/* Three gold dots below — fade out on toggle */}
      <circle cx="14" cy="32" r="2.5" fill="#F5B400" style={{ opacity: open ? 0 : 1, transition: 'opacity 250ms 0ms' }} />
      <circle cx="24" cy="32" r="2.5" fill="#F5B400" style={{ opacity: open ? 0 : 1, transition: 'opacity 250ms 60ms' }} />
      <circle cx="34" cy="32" r="2.5" fill="#F5B400" style={{ opacity: open ? 0 : 1, transition: 'opacity 250ms 120ms' }} />
      {/* Close X — fades in on toggle */}
      <line x1="16" y1="30" x2="32" y2="38" stroke="#F5B400" strokeWidth="2.5" strokeLinecap="round"
        style={{ opacity: open ? 1 : 0, transition: 'opacity 250ms 0ms' }} />
      <line x1="32" y1="30" x2="16" y2="38" stroke="#F5B400" strokeWidth="2.5" strokeLinecap="round"
        style={{ opacity: open ? 1 : 0, transition: 'opacity 250ms 60ms' }} />
      {/* Gold accent road line */}
      <path d="M6 42 C12 40, 24 38, 42 42" stroke="#F5B400" strokeWidth="1" strokeDasharray="3 6" style={{ opacity: 0.3 }} />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#F5B400">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

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
  const [headerVisible] = useState(true);

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

  const isScrolled = scrollY > 40;
  const headerBg = isScrolled ? 'rgba(9,9,9,0.92)' : 'rgba(9,9,9,0.7)';
  const headerBorder = isScrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.06)';
  const headerShadow = isScrolled ? '0 8px 32px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.2)';
  const headerBlur = isScrolled ? 'blur(24px)' : 'blur(16px)';
  const headerMargin = isScrolled ? '6px' : '12px';
  const headerRadius = isScrolled ? '8px' : '16px';

  return (
    <>
      <header
        className="header-float-in sticky z-50 w-full transition-all duration-500"
        style={{
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
          WebkitBackdropFilter: headerBlur,
          border: `1px solid ${headerBorder}`,
          borderRadius: headerRadius,
          boxShadow: headerShadow,
          marginTop: headerMargin,
          marginLeft: '8px',
          marginRight: '8px',
          maxWidth: 'calc(100% - 16px)',
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* ─── Logo — massively standout ─── */}
            <Link href="/" className="flex items-center shrink-0 logo-glow" aria-label="Shoondili Auto CC home">
              <img
                src="/brand/logo-dark.svg"
                alt="Shoondili Auto CC"
                className="h-16 sm:h-20 w-auto transition-all duration-500"
                style={{ maxHeight: isScrolled ? '56px' : '80px' }}
              />
            </Link>

            {/* ─── Desktop nav ─── */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-mono transition-all duration-300 hover:translate-y-[-1px]"
                  style={{ color: '#9B9B96' }}
                >
                  <span className="hover-text-gold">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* ─── Desktop right actions ─── */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:bg-brand-raised"
                aria-label="Search vehicles"
                style={{ color: '#9B9B96' }}
              >
                <SearchIcon />
              </button>

              {/* WhatsApp CTA — fully rounded */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-6 py-3 text-sm font-mono inline-flex items-center gap-2"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>

            {/* ─── Mobile actions ─── */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-full transition-all duration-300"
                aria-label="Search vehicles"
                style={{ color: '#9B9B96' }}
              >
                <SearchIcon />
              </button>
              {/* WhatsApp small icon for mobile */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300"
                aria-label="Chat on WhatsApp"
                style={{ color: '#F5B400' }}
              >
                <WhatsAppIcon />
              </a>
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
        className="fixed inset-0 z-[60] lg:hidden"
        style={{
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: menuOpen ? 'rgba(9,9,9,0.97)' : 'rgba(9,9,9,0)',
            backdropFilter: menuOpen ? 'blur(40px)' : 'blur(0px)',
            transition: 'background-color 700ms cubic-bezier(0.16,1,0.3,1), backdrop-filter 700ms cubic-bezier(0.16,1,0.3,1)',
          }}
          onClick={closeMenu}
        />

        {/* Animated gold vertical line */}
        <div
          className="absolute left-10 top-0 bottom-0 w-px"
          style={{
            backgroundColor: '#F5B400',
            transform: menuOpen ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: 'top',
            transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)',
            opacity: 0.25,
          }}
        />

        {/* Animated gold horizontal line across top */}
        <div
          className="absolute top-24 left-10 right-10 h-px"
          style={{
            backgroundColor: '#F5B400',
            transform: menuOpen ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 1s cubic-bezier(0.16,1,0.3,1) 200ms',
            opacity: 0.15,
          }}
        />

        {/* Menu content */}
        <div
          className="relative z-10 flex flex-col h-full px-10 pt-28 pb-10 overflow-y-auto custom-scrollbar"
          style={{
            transform: menuOpen ? 'translateY(0)' : 'translateY(40px)',
            opacity: menuOpen ? 1 : 0,
            transition: 'transform 700ms cubic-bezier(0.16,1,0.3,1), opacity 500ms cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Logo at top of menu — large */}
          <div className="mb-16">
            <Link href="/" onClick={closeMenu} aria-label="Shoondili Auto CC home" className="logo-glow inline-block">
              <img
                src="/brand/logo-dark.svg"
                alt="Shoondili Auto CC"
                className="h-16 w-auto"
                style={{ maxHeight: '64px' }}
              />
            </Link>
            <p className="text-xs font-mono mt-3" style={{ color: '#9B9B96', letterSpacing: '0.1em' }}>
              Japanese Vehicle Sourcing · Walvis Bay, Namibia
            </p>
          </div>

          {/* Navigation links — large editorial typography */}
          <nav className="flex-1" aria-label="Mobile navigation">
            <ul className="space-y-3">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block font-serif-editorial tracking-editorial-tight text-4xl sm:text-5xl transition-all duration-500 hover:translate-x-6"
                    style={{
                      color: '#F7F7F4',
                      transform: menuOpen ? 'translateX(0)' : 'translateX(-30px)',
                      opacity: menuOpen ? 1 : 0,
                      transition: `transform 700ms cubic-bezier(0.16,1,0.3,1) ${index * 100 + 150}ms, opacity 500ms cubic-bezier(0.16,1,0.3,1) ${index * 100 + 150}ms, color 200ms`,
                    }}
                  >
                    <span className="hover-text-gold">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Featured imagery section — Walvis Bay port */}
          <div
            className="mt-10 mb-10"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(30px)',
              transition: 'transform 700ms cubic-bezier(0.16,1,0.3,1) 600ms, opacity 500ms cubic-bezier(0.16,1,0.3,1) 600ms',
            }}
          >
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
              <img
                src="/assets/backgrounds/walvis-bay-port.webp"
                alt="Walvis Bay Port, Namibia — Where vehicles arrive from Japan"
                className="w-full h-40 sm:h-48 object-cover"
                style={{ filter: 'brightness(0.5) contrast(1.3) saturate(1.1)' }}
              />
              {/* Gradient overlay with text */}
              <div
                className="absolute inset-0 flex items-end p-4"
                style={{
                  background: 'linear-gradient(to top, rgba(9,9,9,0.8) 0%, rgba(9,9,9,0) 60%)',
                  position: 'relative',
                  marginTop: '-4rem',
                  height: '4rem',
                  display: 'none',
                }}
              />
            </div>
            <p className="text-xs font-mono mt-3" style={{ color: '#9B9B96', letterSpacing: '0.05em' }}>
              Walvis Bay, Namibia — Where your sourced vehicle arrives from Japan.
            </p>
          </div>

          {/* WhatsApp CTA in menu — fully rounded */}
          <div
            className="mt-auto"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(30px)',
              transition: 'transform 700ms cubic-bezier(0.16,1,0.3,1) 700ms, opacity 500ms cubic-bezier(0.16,1,0.3,1) 700ms',
            }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full px-6 py-4 text-sm font-mono inline-flex items-center justify-center gap-3"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
            <div className="mt-4 text-xs font-mono" style={{ color: '#9B9B96' }}>
              <p>{PHONE}</p>
              <p>Walvis Bay, Namibia</p>
              <p className="mt-2" style={{ color: '#F5B400', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                Viewings by arrangement · No showroom
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Search overlay ─── */}
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </>
  );
}
