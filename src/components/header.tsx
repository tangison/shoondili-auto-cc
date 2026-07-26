'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useMounted } from '@/hooks/use-mounted';
import { NAV_LINKS, WHATSAPP_URL, PHONE } from '@/lib/constants';
import { SearchOverlay } from '@/components/search-overlay';

/* ─── Custom two-stroke menu icon — automotive precision ─── */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="w-11 h-11"
      style={{
        transition: 'transform 400ms cubic-bezier(0.16,1,0.3,1)',
        transform: open ? 'rotate(0deg)' : 'rotate(0deg)',
      }}
    >
      {/* Two horizontal strokes — precise, automotive */}
      <line
        x1="10" y1="20" x2="38" y2="20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          transform: open ? 'rotate(45deg) translateY(6px)' : 'rotate(0deg) translateY(0)',
          transformBox: 'fill-box',
          transformOrigin: 'center',
          transition: 'transform 400ms cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <line
        x1="10" y1="28" x2="38" y2="28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          transform: open ? 'rotate(-45deg) translateY(-6px)' : 'rotate(0deg) translateY(0)',
          transformBox: 'fill-box',
          transformOrigin: 'center',
          transition: 'transform 400ms cubic-bezier(0.16,1,0.3,1)',
        }}
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

const DESKTOP_NAV_LEFT = [
  { label: 'Home', href: '/' },
  { label: 'Models & Prices', href: '/inventory' },
  { label: 'How to Order', href: '/imports' },
  { label: 'Import Process', href: '/imports' },
];

const DESKTOP_NAV_RIGHT = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const MOBILE_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Models & Prices', href: '/inventory' },
  { label: 'How to Order', href: '/imports' },
  { label: 'Import Process', href: '/imports' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const mounted = useMounted();
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    // Restore focus to menu trigger
    setTimeout(() => menuTriggerRef.current?.focus(), 100);
  }, []);
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

  // Focus trap in mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const panel = menuPanelRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };
    panel.addEventListener('keydown', handleKey);
    return () => panel.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  // Close menu on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) closeMenu();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen, closeMenu]);

  // Close menu on route change — uses ref to track previous pathname
  const prevPathRef = useRef(pathname);
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      if (menuOpen) {
        requestAnimationFrame(() => setMenuOpen(false));
      }
    }
  });

  const isScrolled = scrollY > 60;

  // Choose logo variant based on theme
  const logoSrc = mounted && resolvedTheme === 'light'
    ? '/brand/logo-light.svg'
    : '/brand/logo-dark.svg';

  return (
    <>
      {/* ─── Floating Header ─── */}
      <header
        className="header-float-in fixed z-50 w-full transition-all duration-500"
        style={{
          top: isScrolled ? '8px' : '20px',
          left: '0',
          right: '0',
        }}
      >
        <div
          className="mx-auto max-w-[1280px] glass"
          style={{
            borderRadius: isScrolled ? '14px' : '20px',
            margin: isScrolled ? '0 12px' : '0 20px',
            padding: isScrolled ? '8px 20px' : '14px 24px',
            transition: 'all 500ms cubic-bezier(0.16,1,0.3,1)',
            boxShadow: isScrolled
              ? 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.35)'
              : 'inset 0 1px 0 rgba(255,255,255,0.04), 0 4px 16px rgba(0,0,0,0.15)',
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ minHeight: isScrolled ? '40px' : '48px' }}
          >
            {/* ─── Left: Menu trigger (mobile) | Nav links (desktop) ─── */}
            <div className="flex items-center gap-6 shrink-0" style={{ minWidth: 0 }}>
              {/* Mobile: menu trigger on the LEFT */}
              <button
                ref={menuTriggerRef}
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-1 text-brand-gold"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu-panel"
              >
                <MenuIcon open={menuOpen} />
              </button>

              {/* Desktop: nav links on the left */}
              <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
                {DESKTOP_NAV_LEFT.map((link) => (
                  <Link
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    className="relative text-sm font-mono transition-all duration-300 group"
                    style={{ color: pathname === link.href ? 'var(--brand-gold)' : 'var(--text-secondary)' }}
                  >
                    <span className="hover-text-gold">{link.label}</span>
                    {/* Active indicator — small gold dot */}
                    {pathname === link.href && (
                      <span
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ backgroundColor: 'var(--brand-gold)' }}
                      />
                    )}
                    {/* Hover background tint */}
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: 'var(--surface-raised)', transform: 'scale(0.95)' }}
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* ─── Centre: Logo — mathematically centred ─── */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center shrink-0"
              aria-label="Shoondili Auto CC home"
              style={{ zIndex: 2 }}
            >
              <img
                src={logoSrc}
                alt="Shoondili Auto CC"
                className="w-auto transition-all duration-500"
                style={{
                  maxHeight: isScrolled ? '32px' : '42px',
                  height: isScrolled ? '32px' : '42px',
                }}
              />
            </Link>

            {/* ─── Right: Search + Nav + CTA ─── */}
            <div className="flex items-center gap-5 shrink-0" style={{ minWidth: 0 }}>
              {/* Desktop: right nav links */}
              <nav className="hidden lg:flex items-center gap-5" aria-label="Secondary navigation">
                {DESKTOP_NAV_RIGHT.map((link) => (
                  <Link
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    className="relative text-sm font-mono transition-all duration-300 group"
                    style={{ color: pathname === link.href ? 'var(--brand-gold)' : 'var(--text-secondary)' }}
                  >
                    <span className="hover-text-gold">{link.label}</span>
                    {pathname === link.href && (
                      <span
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ backgroundColor: 'var(--brand-gold)' }}
                      />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Search button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="btn-ghost p-2.5 rounded-full"
                aria-label="Search vehicles"
              >
                <SearchIcon />
              </button>

              {/* Desktop: "Order from Japan" CTA */}
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Shoondili, I\'d like to order a vehicle from Japan.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex btn-gold px-5 py-2.5 text-xs font-mono items-center gap-2"
              >
                <WhatsAppIcon />
                Order from Japan
              </a>

              {/* Mobile: WhatsApp shortcut */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:hidden p-2 rounded-full text-brand-gold"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu Panel ─── */}
      <div
        id="mobile-menu-panel"
        ref={menuPanelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed z-[60] lg:hidden ${menuOpen ? '' : 'invisible'}`}
        style={{
          top: isScrolled ? '64px' : '80px',
          left: '20px',
          right: '20px',
          maxHeight: 'calc(100dvh - 90px)',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-12px)',
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: menuOpen ? 'opacity 400ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1)' : 'none',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        {/* Glass panel */}
        <div
          className="glass flex flex-col h-full overflow-y-auto custom-scrollbar"
          style={{ borderRadius: '16px' }}
        >
          <div className="px-6 py-6 flex flex-col">
            {/* Menu links — large, legible targets */}
            <nav className="flex-1" aria-label="Mobile navigation">
              <ul className="space-y-4">
                {MOBILE_NAV_LINKS.map((link, index) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl transition-all duration-500 hover:translate-x-4"
                      style={{
                        color: pathname === link.href ? 'var(--brand-gold)' : 'var(--text-primary)',
                        transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                        opacity: menuOpen ? 1 : 0,
                        transition: `transform 600ms cubic-bezier(0.16,1,0.3,1) ${index * 70 + 100}ms, opacity 400ms cubic-bezier(0.16,1,0.3,1) ${index * 70 + 100}ms, color 200ms`,
                      }}
                    >
                      <span className="hover-text-gold">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Featured image — Walvis Bay */}
            <div
              className="mt-8 mb-6 rounded-xl overflow-hidden"
              style={{
                border: '1px solid var(--border-color)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'transform 600ms cubic-bezier(0.16,1,0.3,1) 500ms, opacity 400ms cubic-bezier(0.16,1,0.3,1) 500ms',
              }}
            >
              <img
                src="/assets/backgrounds/walvis-bay-port.webp"
                alt="Walvis Bay Port — where your sourced vehicle arrives"
                className="w-full h-36 sm:h-44 object-cover"
                style={{ filter: 'brightness(0.45) contrast(1.2) saturate(1.1)' }}
              />
              <div className="px-4 py-3" style={{ backgroundColor: 'var(--surface)' }}>
                <p className="text-xs font-mono" style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
                  Walvis Bay, Namibia — Where vehicles arrive from Japan.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div
              className="mt-auto"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'transform 600ms cubic-bezier(0.16,1,0.3,1) 650ms, opacity 400ms cubic-bezier(0.16,1,0.3,1) 650ms',
              }}
            >
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Shoondili, I\'d like to order a vehicle from Japan.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full px-6 py-4 text-sm font-mono inline-flex items-center justify-center gap-3"
              >
                <WhatsAppIcon />
                Order from Japan
              </a>
              <div className="mt-4 text-xs font-mono text-center" style={{ color: 'var(--text-secondary)' }}>
                <p>{PHONE}</p>
                <p style={{ color: 'var(--brand-gold)', fontSize: '0.65rem', letterSpacing: '0.1em', marginTop: '4px' }}>
                  Viewings by arrangement · No showroom
                </p>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 btn-ghost rounded-full"
              aria-label="Close menu"
              style={{ color: 'var(--text-secondary)' }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ─── Search overlay ─── */}
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </>
  );
}
