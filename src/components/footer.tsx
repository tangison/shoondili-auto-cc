'use client';

import Link from 'next/link';
import { FOOTER_LINKS, SITE_NAME, PHONE, EMAIL, LOCATION, WHATSAPP_URL, PHONE_RAW } from '@/lib/constants';
import { useState } from 'react';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 01.7 2.81 2 2 0 01-.64 2l-1.28 1.28a16 16 0 006 6l1.28-1.28a2 2 0 012-.64 12.84 12.84 0 012.81.7A2 2 0 0116.92 22z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4l-10 8L2 4" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className="mt-auto" style={{ backgroundColor: '#090909' }}>
      {/* ─── Marquee-style top divider with gold line ─── */}
      <div className="relative h-px w-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
        <div
          className="absolute inset-y-0 w-24"
          style={{
            backgroundColor: '#F5B400',
            animation: 'footerGoldSlide 8s linear infinite',
          }}
        />
      </div>

      {/* ─── Hero-style contact banner ─── */}
      <div className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Big editorial statement */}
            <div>
              <h2
                className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6"
                style={{ color: '#F7F7F4', lineHeight: '1.1' }}
              >
                Ready to find<br />your next vehicle?
              </h2>
              <p className="text-sm mb-8 max-w-md" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Whether you want to browse inventory, start an import, discuss finance, or sell your current vehicle — reach us on WhatsApp. We respond fast.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-sm font-mono inline-flex items-center gap-3 transition-all duration-200 hover:scale-[0.98]"
                style={{
                  backgroundColor: '#F5B400',
                  color: '#090909',
                  borderRadius: '4px',
                }}
              >
                <WhatsAppIcon />
                Start a WhatsApp chat
              </a>
            </div>

            {/* Right: Contact cards — stacked, editorial */}
            <div className="space-y-3">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Shoondili, I\'d like to enquire about a vehicle.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group"
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: '#181818', color: '#F5B400' }}
                >
                  <WhatsAppIcon />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest" style={{ color: '#F5B400' }}>WhatsApp</p>
                  <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{PHONE}</p>
                </div>
                <svg className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="#9B9B96" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={`tel:+${PHONE_RAW}`}
                className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group"
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded shrink-0"
                  style={{ backgroundColor: '#181818', color: '#F5B400' }}
                >
                  <PhoneIcon />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest" style={{ color: '#F5B400' }}>Phone</p>
                  <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{PHONE}</p>
                </div>
                <svg className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="#9B9B96" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group"
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded shrink-0"
                  style={{ backgroundColor: '#181818', color: '#F5B400' }}
                >
                  <EmailIcon />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest" style={{ color: '#F5B400' }}>Email</p>
                  <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{EMAIL}</p>
                </div>
                <svg className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="#9B9B96" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <div
                className="flex items-center gap-4 p-4 rounded-lg"
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded shrink-0"
                  style={{ backgroundColor: '#181818', color: '#F5B400' }}
                >
                  <MapPinIcon />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest" style={{ color: '#F5B400' }}>Location</p>
                  <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{LOCATION}</p>
                  <p className="text-xs mt-1" style={{ color: '#9B9B96' }}>Viewings by arrangement. No showroom.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Navigation grid ─── */}
      <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />

      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="Shoondili Auto CC home" className="mb-4 block">
              <img
                src="/brand/logo-dark.svg"
                alt="Shoondili Auto CC"
                className="h-8 w-auto"
                style={{ maxHeight: '32px' }}
              />
            </Link>
            <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              Vehicle sourcing and sales from Walvis Bay, Namibia. Japanese imports, local inventory, and finance guidance.
            </p>
          </div>

          {/* Vehicles */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Vehicles</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.vehicles.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: hoveredLink === link.href ? '#F5B400' : '#9B9B96' }}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: hoveredLink === link.href ? '#F5B400' : '#9B9B96' }}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: hoveredLink === link.href ? '#F5B400' : '#9B9B96' }}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ─── Bottom bar — editorial ─── */}
      <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />

      <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono" style={{ color: '#9B9B96' }}>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs font-mono" style={{ color: '#9B9B96' }}>
            Made by{' '}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-brand-gold"
              style={{ color: '#9B9B96' }}
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
